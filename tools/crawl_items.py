#!/usr/bin/env python3
"""從 poe2db.tw 爬裝備底材、詞綴、角色基礎數值，寫成 data/items.js、data/affixes.js、data/character.js。

用法（在 repo 根目錄）：python3 tools/crawl_items.py
要加部位：改下面的 WEAPONS / ARMOURS / JEWELLERY 清單再跑一次。資料照抄 poe2db，之後 Gary 可以直接改 data/ 裡的數字。
每頁之間停 1 秒，避免打擾網站。
"""
import html
import json
import re
import time
import urllib.request
from datetime import date

BASE = "https://poe2db.tw/tw/"
BASE_US = "https://poe2db.tw/us/"

# 物品類別（poe2db 網址最後那段）→ 我們遊戲裡的設定
# weaponType：給「技能需要什麼武器」用（第 2 階段先綁職業，之後照 POE2 檢查）
WEAPONS = {
    "One_Hand_Maces": {"slot": "weapon", "hands": 1, "weaponType": "mace"},
    "Two_Hand_Maces": {"slot": "weapon", "hands": 2, "weaponType": "mace"},
    "Wands": {"slot": "weapon", "hands": 1, "weaponType": "wand"},
    "Staves": {"slot": "weapon", "hands": 2, "weaponType": "staff"},
}
JEWELLERY = {"Rings": {"slot": "ring"}}
# 胸甲的詞綴依「需要哪種能力值」分 7 頁；底材都在 Body_Armours 那一頁
ARMOUR_TYPES = ["str", "dex", "int", "str_dex", "str_int", "dex_int", "str_dex_int"]

# poe2db 沒寫、改從 poe2wiki 查到的數字（2026-10-06）
WIKI = {"lifeBase": 28, "manaBase": 34, "source": "https://poe2wiki.net/wiki/Low_Life（Lv1 基礎生命 28、魔力 34；poe2db 角色頁沒有這兩個數字）"}


def get(url):
    req = urllib.request.Request(url, headers={"User-Agent": "POEEE-crawler (personal hobby project)"})
    page = urllib.request.urlopen(req, timeout=60).read().decode("utf-8")
    time.sleep(1)
    return page


def clean(x):
    return re.sub(r"\s+", " ", html.unescape(re.sub(r"<[^>]+>", "", x))).strip()


def num(x):
    f = float(x)
    return int(f) if f == int(f) else f


# 詞綴文字 → 樣板＋數值範圍。例："附加(1—2)至(3—4)冰冷傷害" → "附加 # 至 # 冰冷傷害", [[1,2],[3,4]]
def parse_mod(s):
    s = s.replace('<span class="ndash">—</span>', "—")
    ranges = []

    def repl(m):
        inner = clean(m.group(1))                       # 例："+(5—8)"、"(10—14)"、"20"、"1.5"
        vals = [num(n) for n in re.findall(r"\d+(?:\.\d+)?", inner)]
        ranges.append([vals[0], vals[-1]] if vals else [0, 0])
        return ("+" if inner.startswith("+") else "-" if inner.startswith("-") else "") + "#"

    return clean(re.sub(r"<span class='mod-value'>(.*?)</span>", repl, s)), ranges


# ---------- 詞綴 ----------
def mods_of(slug):
    page = get(BASE + slug)
    d = json.loads(re.search(r"new ModsView\((\{.*?\})\);\s*\}\);", page, re.S).group(1))
    fams = {}
    for m in d["normal"]:
        kind = {"1": "prefix", "2": "suffix"}.get(str(m["ModGenerationTypeID"]))
        if not kind:
            continue
        fam = m["ModFamilyList"][0] if m.get("ModFamilyList") else m["Name"]
        text = clean(m["str"].replace('<span class="ndash">—</span>', "—"))
        tpl, ranges = parse_mod(m["str"])
        fams.setdefault((kind, fam), []).append({
            "name": m["Name"], "ilvl": int(m["Level"]), "weight": int(m["DropChance"]),
            "text": text, "template": tpl, "ranges": ranges,
        })
    out = {"prefix": [], "suffix": []}
    for (kind, fam), tiers in sorted(fams.items()):
        tiers.sort(key=lambda t: t["ilvl"])
        for i, t in enumerate(tiers):
            t["tier"] = len(tiers) - i  # 跟 POE2 一樣：T1 最強
        out[kind].append({"family": fam, "tiers": tiers})
    return out, d["baseitem"].get("cn", slug)


# ---------- 底材 ----------
def tab_html(page, tab_id):
    i = page.find(f'id="{tab_id}"')
    if i < 0:
        return ""
    i = page.find(">", i)  # 跳過這個分頁自己的 <div id=... class="tab-pane">
    j = page.find('class="tab-pane', i)
    return page[i: j if j > 0 else len(page)]


def bases_of(page, tab_id):
    out = []
    for b in tab_html(page, tab_id).split('<div class="d-flex border-top rounded">')[1:]:
        m = re.search(r'<a class="whiteitem [^"]*"[^>]*href="([^"]+)">([^<]+)</a>', b)
        if not m:
            continue
        it = {"id": m.group(1), "name": clean(m.group(2)), "reqLevel": 1, "implicits": []}
        for p in re.findall(r'<div class="property">(.*?)</div>', b, re.S):
            t = clean(p)
            k, _, v = t.partition(":")
            v = v.strip()
            if "物理傷害" in k: it["phys"] = [num(x) for x in v.split("-")]
            elif "火焰傷害" in k: it["fire"] = [num(x) for x in v.split("-")]
            elif "冰冷傷害" in k: it["cold"] = [num(x) for x in v.split("-")]
            elif "閃電傷害" in k: it["lightning"] = [num(x) for x in v.split("-")]
            elif "混沌傷害" in k: it["chaos"] = [num(x) for x in v.split("-")]
            elif "暴擊率" in k: it["crit"] = num(v.rstrip("%"))
            elif "每秒攻擊次數" in k: it["aps"] = num(v)
            elif "武器範圍" in k: it["rangeM"] = num(v)
            elif "護甲值" in k: it["armour"] = num(v)
            elif "閃避值" in k: it["evasion"] = num(v)
            elif "能量護盾" in k: it["energyShield"] = num(v)
            elif "移動速度" in k: it["moveSpeed"] = num(v)
            else: it.setdefault("other", []).append(t)
        r = re.search(r'<div class="requirements">(.*?)</div>', b, re.S)
        if r:
            t = clean(r.group(1))
            lv = re.search(r"等級 (\d+)", t)
            if lv: it["reqLevel"] = int(lv.group(1))
            for attr, key in (("力量", "reqStr"), ("敏捷", "reqDex"), ("智慧", "reqInt")):
                a = re.search(r"(\d+) " + attr, t)
                if a: it[key] = int(a.group(1))
        for im in re.findall(r'<div class="implicitMod">(.*?)</div>', b, re.S):
            g = re.search(r'賦予技能:.*?href="/tw/([^"]+)">([^<]+)</a>', im, re.S)
            if g:
                it["grantsSkill"] = {"id": g.group(1), "name": clean(g.group(2))}
                continue
            if "secondary" in im:  # poe2db 的內部說明（例：hidden % base damage is fire），不是玩家看得到的詞綴
                continue
            tpl, ranges = parse_mod(im)
            it["implicits"].append({"text": clean(im.replace('<span class="ndash">—</span>', "—")), "template": tpl, "ranges": ranges})
        if all(o["id"] != it["id"] for o in out):  # 同一頁重複出現的只留一個
            out.append(it)
    return out


# 「符鍛／符煉」開頭的是特殊變體（不會自然掉落），放到 special，不混進一般掉落
def split_special(bases):
    sp = lambda b: b["name"].startswith(("符鍛", "符煉"))
    return [b for b in bases if not sp(b)], [b for b in bases if sp(b)]


def armour_type(b):
    t = "_".join(k for k, f in (("str", "armour"), ("dex", "evasion"), ("int", "energyShield")) if b.get(f))
    return t or "none"


# ---------- 角色 ----------
def character():
    page = get(BASE_US + "Character")
    t = clean(re.sub(r"<script.*?</script>|<style.*?</style>", "", page, flags=re.S).replace("<", " <"))
    stat = {m.group(1): num(m.group(2)) for m in re.finditer(r"Character ([a-z_%0-9]+) (-?[\d.]+)", t)}
    classes = {}
    for cid, slug in (("witch", "Witch"), ("duelist", "Duelist")):
        p = clean(re.sub(r"<script.*?</script>", "", get(BASE_US + slug), flags=re.S).replace("<", " <"))
        m = re.search(r"Strength : (\d+) Dexterity : (\d+) Intelligence : (\d+) Weapon: (\w+)", p)
        classes[cid] = {"str": int(m.group(1)), "dex": int(m.group(2)), "int": int(m.group(3)), "poe2dbWeapon": m.group(4),
                        "source": BASE_US + slug}
    return {
        "lifeBase": WIKI["lifeBase"], "manaBase": WIKI["manaBase"],
        "lifePerLevel": stat["life_per_level"], "manaPerLevel": stat["mana_per_level"],
        "accuracyPerLevel": stat["accuracy_rating_per_level"], "evasionBase": stat["base_evasion_rating"],
        "lifePerStr": 2, "manaPerInt": 2, "accuracyPerDex": 8,  # poe2db 能力值頁：1 力量 +2 生命、1 智慧 +2 魔力、1 敏捷 +8 命中
        "manaRegenPctPerSec": stat["character_inherent_mana_regeneration_rate_per_minute_%"] / 60,
        "maxResPct": stat["base_maximum_all_resistances_%"], "critBonusPct": stat["base_critical_hit_damage_bonus"],
        "classes": classes,
        "source": {"poe2db": BASE_US + "Character", "attributes": BASE + "Attributes", "wiki": WIKI["source"]},
    }


def write(path, var, head, data):
    with open(path, "w", encoding="utf-8") as f:
        f.write(f"// {head}\n// 由 tools/crawl_items.py 從 poe2db.tw 產生（{date.today()}）。照抄 poe2db；Gary 可以直接改這裡的數字。\n")
        f.write("window.DATA = window.DATA || {};\n")
        f.write(f"DATA.{var} = " + json.dumps(data, ensure_ascii=False, indent=1) + ";\n")


def main():
    items, affixes = {}, {}
    for slug, cfg in {**WEAPONS, **JEWELLERY}.items():
        page = get(BASE + slug)
        tab = re.search(r'href="#([^"]*物品)"', page).group(1)
        name = tab.replace("物品", "")
        normal, special = split_special(bases_of(page, tab))
        items[slug] = {"name": name, **cfg, "source": BASE + slug, "bases": normal, "special": special}
        affixes[slug], _ = mods_of(slug)
        print(slug, len(items[slug]["bases"]), "種底材（特殊", len(items[slug]["special"]), "），", sum(len(f["tiers"]) for k in ("prefix", "suffix") for f in affixes[slug][k]), "條詞綴")
    page = get(BASE + "Body_Armours")
    tab = re.search(r'href="#([^"]*物品)"', page).group(1)
    allb = bases_of(page, tab)
    for t in ARMOUR_TYPES:
        slug = "Body_Armours_" + t
        items[slug] = {"name": "胸甲（" + t.replace("_", "/").replace("str", "力量").replace("dex", "敏捷").replace("int", "智慧") + "）",
                       "slot": "body", "armourType": t, "source": BASE + "Body_Armours",
                       "bases": [b for b in allb if armour_type(b) == t]}
        items[slug]["bases"], items[slug]["special"] = split_special(items[slug]["bases"])
        affixes[slug], _ = mods_of(slug)
        print(slug, len(items[slug]["bases"]), "種底材（特殊", len(items[slug]["special"]), "），", sum(len(f["tiers"]) for k in ("prefix", "suffix") for f in affixes[slug][k]), "條詞綴")
    write("data/items.js", "items", "裝備底材：每個類別的底材（傷害、攻速、暴擊、護甲、需求、內建詞綴、賦予技能）", items)
    write("data/affixes.js", "affixes", "詞綴：每個物品類別能出的前綴、後綴，每一族依物品等級分階（T1 最強），weight 是出現權重", affixes)
    write("data/character.js", "character", "角色基礎數值（POE2）：每級成長、能力值換算、職業起始能力值", character())


if __name__ == "__main__":
    main()
