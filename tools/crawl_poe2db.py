#!/usr/bin/env python3
"""從 poe2db.tw 爬技能寶石、輔助寶石資料，寫成 data/skills.js、data/supports.js。

用法（在 repo 根目錄）：python3 tools/crawl_poe2db.py
要換技能：改下面的 SKILLS / SUPPORTS 清單再跑一次。資料照抄 poe2db，之後 Gary 可以直接改 data/ 裡的數字。
每頁之間停 1 秒，避免打擾網站。
"""
import html
import json
import re
import time
import urllib.request
from datetime import date

BASE = "https://poe2db.tw/tw/"
# 職業 → 主動技能（poe2db 網址最後那段）
SKILLS = {
    "witch": ["Chaos_Bolt", "Bone_Blast", "Contagion"],
    "duelist": ["Boneshatter", "Rolling_Slam", "Earthquake"],
}
SUPPORTS = ["Chain_I", "Multishot_I", "Concentrated_Area", "Prolonged_Duration_I"]


def get(slug):
    req = urllib.request.Request(BASE + slug, headers={"User-Agent": "POEEE-crawler (personal hobby project)"})
    page = urllib.request.urlopen(req, timeout=30).read().decode("utf-8")
    time.sleep(1)
    return page


def clean(x):
    return re.sub(r"\s+", " ", html.unescape(re.sub(r"<[^>]+>", " ", x))).strip()


def text_lines(page):
    page = re.sub(r"<script.*?</script>|<style.*?</style>", "", page, flags=re.S)
    return [l.strip() for l in html.unescape(re.sub(r"<[^>]+>", "\n", page)).split("\n") if l.strip()]


def summary(page, name):
    """頁首那段：標籤、耗魔範圍、施放時間、說明文字。"""
    lines = text_lines(page)
    i = lines.index(name)
    out = []
    for l in lines[i + 1:i + 200]:
        if l.startswith("來自品質的額外效果") or l == "Implicit":
            break
        out.append(l)
    flat = " ".join(out).replace(" , ", "、")
    info = {"raw": flat}
    m = re.search(r"消耗: \((\d+) — (\d+)\) 魔力", flat) or re.search(r"消耗: (\d+)() 魔力", flat)
    if m:
        info["manaCost"] = [int(m.group(1)), int(m.group(2) or m.group(1))]  # [第 1 級, 第 20 級]
    for key, pat in [("castTimeSec", r"施放時間: ([\d.]+) 秒"), ("cooldownSec", r"冷卻時間: ([\d.]+) 秒"),
                     ("critPct", r"暴擊 率: ([\d.]+)%"), ("attackSpeedPct", r"攻擊速度: 基礎的 (\d+)%")]:
        m = re.search(pat, flat)
        if m:
            info[key] = float(m.group(1))
    m = re.search(r"需求: 等級 \(1 — 90\)、 ?\(4 — 157\) \S+ (?:需求: \S+ )?(.*)$", flat)
    if m:
        info["text"] = m.group(1).strip()
    # 輔助寶石：類別、消耗加成、效果句子
    m = re.search(r"類別 : (\S+)", flat)
    if m:
        info["category"] = m.group(1)
    m = re.search(r"消耗加成: (\d+)%", flat)
    if m:
        info["costMultiplierPct"] = int(m.group(1))
    effects = re.findall(r"(被輔助[^。]*?)(?= 被輔助| 將此寶石|$)", flat)
    if effects:
        info["effects"] = [e.strip() for e in effects]
    m = re.search(r"輔助 \S+ (?:類別 : \S+ )?(?:階級: \d+ )?(?:消耗加成: \d+% )?輔助需求 ： \+\d+ \S+ (.*?) 被輔助", flat)
    if m:
        info["text"] = m.group(1).strip()
    return info


def level_table(page):
    """每級數值表（含需要等級、耗魔、傷害）。"""
    tables = [t for t in re.findall(r"<table.*?</table>", page, flags=re.S) if "需要等級" in t]
    if not tables:
        return None
    rows = re.findall(r"<tr.*?</tr>", tables[0], flags=re.S)
    cell = lambda r: [clean(c) for c in re.findall(r"<t[hd][^>]*>(.*?)</t[hd]>", r, flags=re.S)]
    return {"columns": cell(rows[0]), "rows": [cell(r) for r in rows[1:]]}


def gem_list(page):
    rows = re.findall(r'<tr data-filters="[^"]*"><td><a class="(gem_\w+)"[^>]*href="/tw/([^"]+)"><img[^>]*/></a>'
                      r'<td><a[^>]*>([^<]+)</a>(?: \((\d+)\))?<div class="gem_tags small">(.*?)</div>', page)
    return {slug: {"name": name.strip(), "color": color.replace("gem_", ""), "tier": int(tier) if tier else None,
                   "tags": re.findall(r">([^<]+)</a>", tags)} for color, slug, name, tier, tags in rows}


def build(slugs, listing):
    out = {}
    for slug in slugs:
        meta = listing[slug]
        page = get(slug)
        out[slug] = {"slug": slug, **meta, "source": BASE + slug, **summary(page, meta["name"]), "levels": level_table(page)}
        print("  ", meta["name"], slug)
    return out


def write_js(path, var, header, obj):
    with open(path, "w", encoding="utf-8") as f:
        f.write(f"// {header}\n// 由 tools/crawl_poe2db.py 從 poe2db.tw 產生（{date.today().isoformat()}）。可以直接改數字；重跑爬蟲會覆蓋。\n")
        f.write("window.DATA = window.DATA || {};\n")
        f.write(f"DATA.{var} = " + json.dumps(obj, ensure_ascii=False, indent=1) + ";\n")


if __name__ == "__main__":
    print("技能寶石清單…")
    skills_list = gem_list(get("Skill_Gems"))
    print("輔助寶石清單…")
    support_list = gem_list(get("Support_Gems"))
    print("主動技能：")
    gems = build([s for v in SKILLS.values() for s in v], skills_list)
    print("輔助寶石：")
    sups = build(SUPPORTS, support_list)
    write_js("data/skills.js", "skills", "主動技能（照抄 poe2db）；byClass 是每個職業帶哪幾招",
             {"byClass": SKILLS, "gems": gems})
    write_js("data/supports.js", "supports", "輔助寶石（照抄 poe2db）", {"gems": sups})
    print("完成：data/skills.js、data/supports.js")
