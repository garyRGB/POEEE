// 自動檢查：每次推上 main 前跑 `node tests/smoke.js`，全部通過才推。
// 每做完一個小任務，就把它的驗收項目加到 CHECKS 最後面；舊的檢查不刪，用來抓「改 A 壞 B」。
// 需要 Playwright（雲端工作階段已內建）。
const http = require("http");
const fs = require("fs");
const path = require("path");
const { chromium } = require("playwright");

const ROOT = path.join(__dirname, "..");
const TYPES = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".png": "image/png" };

function serve(port) {
  return new Promise(ok => {
    const srv = http.createServer((req, res) => {
      const file = path.join(ROOT, decodeURIComponent(req.url.split("?")[0]).replace(/\/$/, "/index.html"));
      if (!file.startsWith(ROOT) || !fs.existsSync(file)) { res.writeHead(404); return res.end(); }
      res.writeHead(200, { "Content-Type": TYPES[path.extname(file)] || "application/octet-stream" });
      fs.createReadStream(file).pipe(res);
    }).listen(port, () => ok(srv));
  });
}

async function open(browser, url, opts = {}) {
  const page = await browser.newPage({ viewport: opts.viewport || { width: 390, height: 844 } });
  const errors = [];
  page.on("pageerror", e => errors.push(e.message));
  await page.route(/fonts\.(googleapis|gstatic)\.com/, r => r.abort()); // 字型連不到不算錯
  if (opts.route) await page.route(opts.route.match, opts.route.handler);
  await page.goto(url);
  await page.waitForTimeout(300);
  if (opts.start) await startAs(page, opts.start);
  await page.evaluate(() => {
    if (!window.G || !G.S) return;
    window.spawnOnly = dt => G.spawnTick(G.S, dt, DATA.rules, DATA.monsters, G.hero.level);
    // 清場：沒有怪、不再生怪、技能先關掉（測普通攻擊用；#14 的檢查會自己打開技能）
    window.clearField = () => { G.S.monsters = []; G.S.target = null; G.S.packTimer = 999; G.S.pending = null; for (const k in G.S.skillOn) G.S.skillOn[k] = false; };
    window.skillsOnly = ids => { for (const k in G.S.skillOn) G.S.skillOn[k] = ids.includes(k); G.S.pending = null; };
    // 在 (x, y) 公尺擺一隻怪；over 可以改這隻的基礎數值
    window.place = (x, y, over = {}) => { const m = G.makeMonster({ ...DATA.monsters[0], ...over }, G.hero.level); m.x = x; m.y = y; G.S.monsters.push(m); return m; };
  });
  return { page, errors };
}

// 選一個職業並按開始，進到主畫面
async function startAs(page, classId) {
  await page.locator(`.classCard[data-id="${classId}"]`).click();
  await page.locator("#startBtn").click();
  await page.waitForTimeout(200);
}

// ───── 檢查清單（照小任務順序累加）─────
const CHECKS = [
  // #1 骨架調整
  ["#1 打開沒有錯誤", async ({ errors }) => errors.length === 0 || errors.join(" / ")],
  ["#1 沒有出錯提示", async ({ page }) => (await page.locator(".errbox").count()) === 0],
  ["#1 角色有名字、血條、等級（#10 起改成戰場中間的名牌）", async ({ page }) =>
    (await page.locator("#heroTag").count()) === 1 &&
    (await page.locator("#heroTitle").innerText()).length > 0 &&
    (await page.locator("#heroHpText").innerText()) !== "" &&
    (await page.locator("#lv").innerText()) === "1"],
  ["#1 沒有關卡資訊（x/20、第幾關、自動挑戰、挑戰首領）", async ({ page }) => {
    const t = await page.locator("#battle").innerText();
    const bad = ["/20", "關", "自動挑戰", "挑戰首領"].filter(w => t.includes(w));
    return bad.length === 0 || "還看得到：" + bad.join("、");
  }],
  ["#1 有藥水、復活數量", async ({ page }) =>
    (await page.locator("#potions").innerText()) !== "" && (await page.locator("#revives").innerText()) !== ""],
  ["#1 輿圖按鈕按了提示之後開放", async ({ page }) => {
    await page.locator("#atlasBtn").click({ force: true }); // 按鈕標成「還沒開放」，手機照樣點得到
    return (await page.locator("#feed").innerText()).includes("輿圖之後開放");
  }],
  ["#1 畫面不會左右滑", async ({ page }) => {
    const w = await page.evaluate(() => document.documentElement.scrollWidth);
    return w <= 390 || `頁面寬 ${w}`;
  }],
  ["#1 裝備 10 格", async ({ page }) => (await page.locator("#doll .slot").count()) === 10],
];

// #2 角色選擇：每項都從剛打開的頁面開始
const SELECT_CHECKS = [
  ["#2 打開先看到選角畫面，主畫面藏著", async ({ page }) =>
    (await page.locator("#selectScreen").isVisible()) && !(await page.locator("#game").isVisible())],
  ["#2 有女巫、決鬥者兩張卡，各有介紹和數值", async ({ page }) => {
    const t = await page.locator("#classList").innerText();
    const n = await page.locator(".classCard").count();
    return (n === 2 && ["女巫", "決鬥者", "生命", "攻擊", "攻速"].every(w => t.includes(w))) || `卡片 ${n} 張：${t}`;
  }],
  ["#2 還沒選時「開始」是灰的，按了不會進遊戲", async ({ page }) => {
    const dis = await page.locator("#startBtn").isDisabled();
    await page.locator("#startBtn").click({ force: true });
    return dis && (await page.locator("#selectScreen").isVisible());
  }],
  ["#2 點女巫再點決鬥者，金框換到決鬥者", async ({ page }) => {
    await page.locator('.classCard[data-id="witch"]').click();
    await page.locator('.classCard[data-id="duelist"]').click();
    const picked = await page.locator(".classCard.picked").getAttribute("data-id");
    return (picked === "duelist" && (await page.locator(".classCard.picked").count()) === 1) || `選中：${picked}`;
  }],
  ["#2 選女巫開始：角色格寫女巫、屬性是女巫的數字", async ({ page }) => {
    await startAs(page, "witch");
    const w = await page.evaluate(() => DATA.classes.list.find(c => c.id === "witch"));
    const name = await page.locator("#heroTitle").innerText();
    const hp = await page.locator("#heroHpText").innerText();
    const stats = await page.locator("#stats").innerText();
    return (name === "女巫" && hp === String(w.maxLife) && stats.includes(String(w.attack))) || `${name} ${hp}`;
  }],
  ["#2 選決鬥者開始：角色格寫決鬥者、屬性是決鬥者的數字", async ({ page }) => {
    await startAs(page, "duelist");
    const d = await page.evaluate(() => DATA.classes.list.find(c => c.id === "duelist"));
    const name = await page.locator("#heroTitle").innerText();
    const hp = await page.locator("#heroHpText").innerText();
    return (name === "決鬥者" && hp === String(d.maxLife)) || `${name} ${hp}`;
  }],
];

// #3 → #10 生怪：一群群從 8 個方向的框外進場（#3 的格子檢查在 #10 改寫）
const SPAWN_CHECKS = [
  ["#10 開局 firstPackSec 秒內來第一群，一群 4～6 隻", async ({ page }) => {
    const r = await page.evaluate(() => {
      const S = G.S; S.monsters = []; S.packTimer = DATA.rules.firstPackSec[1]; // 最晚的情況
      spawnOnly(DATA.rules.firstPackSec[1] + 0.01);
      return { n: S.monsters.length, size: DATA.rules.packSize };
    });
    return (r.n >= r.size[0] && r.n <= r.size[1]) || JSON.stringify(r);
  }],
  ["#10 怪物在框外生出來（剛出現時在戰場外）", async ({ page }) => {
    const r = await page.evaluate(() => {
      const out = [];
      for (let i = 0; i < 50; i++) { G.S.monsters = []; G.S.packTimer = 0; spawnOnly(0.01); out.push(...G.S.monsters.map(m => G.insideArena(m))); }
      return { total: out.length, inside: out.filter(Boolean).length };
    });
    return (r.total > 0 && r.inside === 0) || JSON.stringify(r);
  }],
  ["#10 8 個方向都會出現（左、左上、上、右上、右、右下、下、左下）", async ({ page }) => {
    const dirs = await page.evaluate(() => {
      const seen = new Set();
      for (let i = 0; i < 300; i++) { G.S.monsters = []; G.S.packTimer = 0; spawnOnly(0.01); seen.add(G.S.lastPack.dir); }
      return [...seen].sort();
    });
    return dirs.length === 8 || `只出現過方向 ${dirs.join(",")}`;
  }],
  ["#10 隔多久來一群照 packIntervalSec", async ({ page }) => {
    const r = await page.evaluate(() => {
      const t = []; G.S.monsters = []; G.S.packTimer = 0;
      for (let i = 0; i < 200; i++) { spawnOnly(0.01); t.push(G.S.packTimer); G.S.packTimer = 0; G.S.monsters = []; }
      return { min: Math.min(...t), max: Math.max(...t), range: DATA.rules.packIntervalSec };
    });
    return (r.min >= r.range[0] - 0.02 && r.max <= r.range[1]) || JSON.stringify(r);
  }],
  ["#10 怪物會往角色走，走到身邊停下（不會穿過角色）", async ({ page }) => {
    const r = await page.evaluate(() => {
      clearField(); const m = place(5, 0); const d0 = G.dist(m, { x: 0, y: 0 });
      G.moveTick(G.S, 1); const d1 = G.dist(m, { x: 0, y: 0 });
      for (let i = 0; i < 100; i++) G.moveTick(G.S, 0.1);
      return { d0, d1, end: G.dist(m, { x: 0, y: 0 }), speed: m.moveSpeed, stop: m.meleeRangeM };
    });
    return (Math.abs(r.d0 - r.d1 - r.speed) < 0.01 && r.end <= r.stop && r.end > 0.3) || JSON.stringify(r);
  }],
  ["#10 一群怪不會疊成一個點", async ({ page }) => {
    const r = await page.evaluate(() => {
      clearField(); for (let i = 0; i < 6; i++) place(3, 0);
      for (let i = 0; i < 50; i++) G.moveTick(G.S, 0.1);
      const ms = G.S.monsters; let minD = Infinity;
      for (let i = 0; i < ms.length; i++) for (let j = i + 1; j < ms.length; j++) minD = Math.min(minD, G.dist(ms[i], ms[j]));
      return { minD, want: ms[0].radiusM * 2 * 0.8 };
    });
    return r.minD >= r.want || JSON.stringify(r);
  }],
  ["#10 場上最多 maxMonsters（60）隻", async ({ page }) => {
    const r = await page.evaluate(() => { G.S.monsters = []; for (let i = 0; i < 200; i++) { G.S.packTimer = 0; spawnOnly(0.01); } return { n: G.S.monsters.length, max: DATA.rules.maxMonsters }; });
    return (r.n === r.max && r.max === 60) || JSON.stringify(r);
  }],
  ["#10 怪物進場不顯示文字（Gary 2026-10-06 取消）", async ({ page }) => {
    await page.evaluate(() => { G.S.packTimer = 0; G.step(0.05); });
    const t = await page.locator("#feed").innerText();
    return !/進場/.test(t) || t;
  }],
  ["#10 畫面：戰場有畫布填滿戰鬥框，角色名牌在正中間", async ({ page }) => {
    const r = await page.evaluate(() => {
      const a = document.getElementById("battle").getBoundingClientRect(), c = document.getElementById("arenaCanvas").getBoundingClientRect();
      const t = document.getElementById("heroTag").getBoundingClientRect();
      return { fill: Math.abs(a.width - c.width) < 3 && Math.abs(a.height - c.height) < 3, cx: Math.abs((t.left + t.right) / 2 - (a.left + a.right) / 2) };
    });
    return (r.fill && r.cx < 3) || JSON.stringify(r);
  }],
  ["#3 怪物強度跟等級成正比（Lv1 vs Lv5）", async ({ page }) => {
    const r = await page.evaluate(() => {
      const t = DATA.monsters[0], a = G.makeMonster(t, 1), b = G.makeMonster(t, 5);
      return { a, b, t };
    });
    return (r.a.maxLife === r.t.baseLife && r.b.maxLife === r.t.baseLife * 5 && r.b.attack === r.t.baseAttack * 5) || JSON.stringify(r);
  }],
  ["#3 新手怪夠弱：Lv1 女巫、決鬥者都能 2～3 下打死", async ({ page }) => {
    const r = await page.evaluate(() => {
      const m = G.makeMonster(DATA.monsters[0], 1);
      return DATA.classes.list.map(c => [c.name, Math.ceil(m.maxLife / c.attack)]);
    });
    return r.every(([, hits]) => hits >= 2 && hits <= 3) || r.map(x => x.join(" ") + " 下").join("、");
  }],
  ["#10 新手怪夠弱：被 8 隻貼身圍住，Lv1 女巫、決鬥者都撐得過 20 秒", async ({ page }) => {
    const r = await page.evaluate(() => {
      const m = G.makeMonster(DATA.monsters[0], 1), dps = m.attack * m.attacksPerSec * 8;
      return DATA.classes.list.map(c => [c.name, +(c.maxLife / dps).toFixed(1)]);
    });
    return r.every(([, sec]) => sec >= 20) || r.map(x => x.join(" ") + " 秒").join("、");
  }],
];

// #4 → #11 戰鬥：看距離（#4 的格子檢查在 #11 改寫）；手動擺怪、用 G.step 快轉
const COMBAT_CHECKS = [
  ["#11 角色打範圍內最近的怪，每下扣攻擊力那麼多血", async ({ page }) => {
    const r = await page.evaluate(() => {
      const h = G.hero; clearField();
      const far = place(1.5, 0, { baseLife: 1000, moveSpeed: 0 }), near = place(0, 1.2, { baseLife: 1000, moveSpeed: 0 });
      G.step(1 / h.attacksPerSec + 0.001);
      return { near: near.hp, far: far.hp, atk: h.attack };
    });
    return (r.near === 1000 - r.atk && r.far === 1000) || JSON.stringify(r);
  }],
  ["#11 範圍外的怪打不到（女巫 6 公尺、決鬥者 1.6 公尺）", async ({ page }) => {
    const r = await page.evaluate(() => {
      const h = G.hero; clearField();
      const m = place(h.attackRangeM + 0.5, 0, { baseLife: 1000, moveSpeed: 0 });
      for (let i = 0; i < 50; i++) G.step(0.1);
      return { hp: m.hp, range: h.attackRangeM };
    });
    return r.hp === 1000 || JSON.stringify(r);
  }],
  ["#11 攻速照職業：10 秒內出手次數＝攻速 × 10", async ({ page }) => {
    const r = await page.evaluate(() => {
      const h = G.hero; clearField();
      const m = place(1, 0, { baseLife: 100000, baseAttack: 0 });
      for (let i = 0; i < 100; i++) G.step(0.1);
      return { hits: Math.round((100000 - m.hp) / h.attack), want: Math.floor(h.attacksPerSec * 10 + 1e-9) };
    });
    return Math.abs(r.hits - r.want) <= 1 || JSON.stringify(r);
  }],
  ["#11 只有貼身的怪會打角色：遠處的怪不扣血", async ({ page }) => {
    const r = await page.evaluate(() => {
      const S = G.S; clearField(); G.hero.attacksPerSec = 0.0001;
      place(8, 8, { moveSpeed: 0 });
      for (let i = 0; i < 100; i++) G.step(0.1);
      return { hp: S.hp, max: G.hero.maxLife };
    });
    return r.hp === r.max || JSON.stringify(r);
  }],
  ["#11 貼身的 8 隻打 10 秒，扣的血 ≈ 8 × 攻擊 × 次數", async ({ page }) => {
    const r = await page.evaluate(() => {
      const S = G.S; clearField(); S.hp = 100000; G.hero.maxLife = 100000; G.hero.attacksPerSec = 0.0001;
      for (let k = 0; k < 8; k++) place(Math.cos(k * Math.PI / 4) * 0.8, Math.sin(k * Math.PI / 4) * 0.8, { baseLife: 100000 });
      for (let i = 0; i < 100; i++) G.step(0.1);
      const m = S.monsters[0], hits = Math.floor((10 - DATA.monsters[0].firstAttackSec) * m.attacksPerSec + 1e-9) + 1;
      return { lost: 100000 - S.hp, want: 8 * m.attack * hits, inMelee: S.monsters.filter(G.inMelee).length };
    });
    return (r.inMelee === 8 && Math.abs(r.lost - r.want) <= 8) || JSON.stringify(r);
  }],
  ["#11 鎖定目標：打到一半時更近的地方冒新怪，角色不換目標", async ({ page }) => {
    const r = await page.evaluate(() => {
      const h = G.hero; clearField();
      const a = place(1.2, 0, { baseLife: 1000, moveSpeed: 0 });
      G.step(1 / h.attacksPerSec + 0.001);
      const b = place(0.7, 0.3, { baseLife: 1000, moveSpeed: 0 });
      G.step(1 / h.attacksPerSec + 0.001);
      return { a: a.hp, b: b.hp, atk: h.attack, target: G.S.target === a };
    });
    return (r.a === 1000 - 2 * r.atk && r.b === 1000 && r.target) || JSON.stringify(r);
  }],
  ["#11 打死的怪會消失，角色改打下一隻", async ({ page }) => {
    const r = await page.evaluate(() => {
      clearField();
      const a = place(1, 0, { baseLife: 1, moveSpeed: 0 }), b = place(0, 1.3, { baseLife: 1000, moveSpeed: 0 });
      for (let i = 0; i < 40; i++) G.step(0.1);
      return { gone: !G.S.monsters.includes(a), second: b.hp, target: G.S.target === b };
    });
    return (r.gone && r.second < 1000 && r.target) || JSON.stringify(r);
  }],
  ["#11 畫面：被圍住時血條會掉，場上隻數會更新", async ({ page }) => {
    await page.evaluate(() => {
      clearField(); G.hero.attacksPerSec = 0.0001;
      for (let k = 0; k < 6; k++) place(Math.cos(k) * 0.8, Math.sin(k) * 0.8);
      for (let i = 0; i < 40; i++) G.step(0.1);
    });
    const hp = +(await page.locator("#heroHpText").innerText());
    const full = await page.evaluate(() => G.hero.maxLife);
    const n = await page.locator("#monCount").innerText();
    return (hp < full && n === "6") || `角色血 ${hp}/${full}、場上 ${n}`;
  }],
  ["#4 角色血到 0 就倒下，整個停住，血不會變負的（沒有復活道具時，見 #19）", async ({ page }) => {
    const r = await page.evaluate(() => {
      const S = G.S; clearField(); S.revives = 0;
      for (let k = 0; k < 8; k++) place(Math.cos(k) * 0.8, Math.sin(k) * 0.8, { baseLife: 100000, baseAttack: 50 });
      for (let i = 0; i < 100; i++) G.step(0.1);
      const pos = S.monsters.map(m => m.x + "," + m.y).join(";"), hp0 = S.monsters[0].hp;
      for (let i = 0; i < 50; i++) G.step(0.1);
      return { hp: S.hp, dead: S.dead, frozen: S.monsters[0].hp === hp0 && pos === S.monsters.map(m => m.x + "," + m.y).join(";") };
    });
    const feed = await page.locator("#feed").innerText();
    return (r.hp === 0 && r.dead && r.frozen && feed.includes("你倒下了")) || JSON.stringify(r);
  }],
  ["#4 新手實戰：Lv1 決鬥者放著打 20 秒還活著，而且有擊倒怪", async ({ page }) => {
    const r = await page.evaluate(() => {
      let kills = 0; const orig = G.combatTick;
      G.combatTick = (...a) => { const k = orig(...a); kills += k.length; return k; };
      for (let i = 0; i < 400; i++) G.step(0.05);
      G.combatTick = orig;
      return { dead: G.S.dead, hp: G.S.hp, kills };
    });
    return (!r.dead && r.kills > 0) || JSON.stringify(r);
  }],
  ["#11 怪物貼身後約 firstAttackSec 秒打第一下", async ({ page }) => {
    const r = await page.evaluate(() => {
      const S = G.S, t = DATA.monsters[0]; clearField(); G.hero.attacksPerSec = 0.0001;
      place(0.8, 0);
      const full = S.hp;
      for (let i = 0; i < Math.round(t.firstAttackSec * 10) - 1; i++) G.step(0.1);
      const before = S.hp;
      G.step(0.15);
      return { full, before, after: S.hp };
    });
    return (r.before === r.full && r.after < r.full) || JSON.stringify(r);
  }],
  ["#4 放置 3 分鐘（不點擊），女巫、決鬥者的血會掉", async ({ page }) => {
    const r = await page.evaluate(() => {
      const S = G.S; let min = S.hp;
      for (let i = 0; i < 3600; i++) { G.step(0.05); min = Math.min(min, S.hp); }
      return { min, max: G.hero.maxLife, dead: S.dead };
    });
    return (r.min < r.max) || JSON.stringify(r);
  }],
  ["#4 開局自帶 5 個復活道具", async ({ page }) => (await page.locator("#revives").innerText()) === "5"],
];

// #5 擊殺與升級
const PROGRESS_CHECKS = [
  ["#5 打死一隻怪：經驗 +怪物經驗、金幣在範圍內", async ({ page }) => {
    const r = await page.evaluate(() => {
      const S = G.S, m = G.makeMonster(DATA.monsters[0], 1), g0 = S.gold, e0 = S.exp;
      G.onKill(S, G.hero, m, DATA.rules);
      return { exp: S.exp - e0, gold: S.gold - g0, m };
    });
    return (r.exp === r.m.exp && r.gold >= r.m.gold[0] && r.gold <= r.m.gold[1]) || JSON.stringify(r);
  }],
  ["#5 經驗夠了升 Lv2：生命、攻擊變 2 倍，血回滿，經驗扣掉", async ({ page }) => {
    const r = await page.evaluate(() => {
      const S = G.S, h = G.hero, need = G.expToNext(1, DATA.rules);
      S.hp = 1; S.exp = need - 1;
      G.onKill(S, h, G.makeMonster(DATA.monsters[0], 1), DATA.rules);
      return { lv: h.level, life: h.maxLife, atk: h.attack, hp: S.hp, exp: S.exp, cls: h.cls, gain: DATA.monsters[0].baseExp };
    });
    return (r.lv === 2 && r.life === r.cls.maxLife * 2 && r.atk === r.cls.attack * 2 && r.hp === r.life && r.exp === r.gain - 1) || JSON.stringify(r);
  }],
  ["#5 升級後新出的怪是 Lv2", async ({ page }) => {
    const r = await page.evaluate(() => {
      const S = G.S; S.exp = G.expToNext(1, DATA.rules);
      G.onKill(S, G.hero, G.makeMonster(DATA.monsters[0], 1), DATA.rules);
      S.monsters = []; S.packTimer = 0;
      spawnOnly(0.01);
      return S.monsters.map(m => m.level);
    });
    return (r.length > 0 && r.every(l => l === 2)) || JSON.stringify(r);
  }],
  ["#5 畫面：經驗顯示「目前/升級要的」，升級後 Lv、屬性跟著變", async ({ page }) => {
    await page.evaluate(() => {
      const S = G.S; S.exp = G.expToNext(1, DATA.rules);
      G.onKill(S, G.hero, G.makeMonster(DATA.monsters[0], 1), DATA.rules); G.render(S, G.hero);
    });
    const exp = await page.locator("#exp").innerText();
    const lv = await page.locator("#lv").innerText();
    const stats = await page.locator("#stats").innerText();
    const life = await page.evaluate(() => G.hero.maxLife);
    const need = await page.evaluate(() => G.expToNext(2, DATA.rules));
    return (new RegExp(`^\\d+/${need}$`).test(exp) && lv === "2" && stats.includes(String(life))) || `${exp} Lv${lv}`;
  }],
  ["#5 實戰：放著打一陣子會拿到經驗、金幣，戰鬥框有擊倒訊息", async ({ page }) => {
    await page.evaluate(() => { for (let i = 0; i < 200; i++) G.step(0.1); });
    const r = await page.evaluate(() => ({ exp: G.S.exp, gold: G.S.gold, lv: G.hero.level }));
    const feed = await page.locator("#feed").innerText();
    return ((r.exp > 0 || r.lv > 1) && r.gold > 0 && /擊倒|升到/.test(feed)) || JSON.stringify(r) + feed;
  }],
];

// #6 → #12 點擊加速：點戰場，下一群怪提早出現（#6 的格子檢查在 #12 改寫）
const TAP_CHECKS = [
  ["#12 點戰場一下，下一群提早 tapReduceSec 秒", async ({ page }) => {
    await page.evaluate(() => { G.S.packTimer = 5; });
    await page.locator("#battle").click({ position: { x: 60, y: 60 } });
    const r = await page.evaluate(() => ({ t: G.S.packTimer, cut: DATA.rules.tapReduceSec }));
    return (r.t <= 5 - r.cut + 0.001 && r.t > 5 - r.cut - 0.3) || JSON.stringify(r);
  }],
  ["#12 狂點會讓下一群馬上出現", async ({ page }) => {
    await page.evaluate(() => { clearField(); G.S.packTimer = 3; });
    for (let i = 0; i < 7; i++) await page.locator("#battle").click({ position: { x: 60, y: 60 } });
    await page.waitForTimeout(150);
    const r = await page.evaluate(() => ({ n: G.S.monsters.length, min: DATA.rules.packSize[0] }));
    return r.n >= r.min || "沒有出現新的一群";
  }],
  ["#12 按輿圖按鈕不會加速", async ({ page }) => {
    await page.evaluate(() => { G.S.packTimer = 5; });
    await page.locator("#atlasBtn").click({ force: true });
    const t = await page.evaluate(() => G.S.packTimer);
    return t > 4.7 || `倒數變 ${t}`;
  }],
  ["#12 場上 60 隻也不卡：100 步遊戲迴圈在 1 秒內跑完", async ({ page }) => {
    const ms = await page.evaluate(() => {
      G.S.monsters = []; for (let i = 0; i < 20; i++) { G.S.packTimer = 0; spawnOnly(0.01); }
      G.S.hp = 1e9; G.hero.maxLife = 1e9;
      const t0 = performance.now(); for (let i = 0; i < 100; i++) G.step(0.05); return performance.now() - t0;
    });
    return ms < 1000 || `花了 ${Math.round(ms)} 毫秒`;
  }],
];

// #7 自動喝水：規則照 data/rules.js 的 autoRules
const POTION_CHECKS = [
  ["#7 血量低於 40% 自動喝 1 瓶，補最大生命的 potionHealPct %", async ({ page }) => {
    const r = await page.evaluate(() => {
      const S = G.S, h = G.hero; clearField();
      const p0 = S.potions; S.hp = Math.floor(h.maxLife * 0.39);
      const before = S.hp; G.step(0.1);
      return { used: p0 - S.potions, gain: S.hp - before, want: Math.round(h.maxLife * h.potionHealPct / 100) };
    });
    return (r.used === 1 && r.gain === r.want) || JSON.stringify(r);
  }],
  ["#7 血量在 40% 以上不會喝", async ({ page }) => {
    const r = await page.evaluate(() => {
      const S = G.S, h = G.hero; clearField();
      const p0 = S.potions; S.hp = Math.ceil(h.maxLife * 0.41); G.step(0.1);
      return p0 - S.potions;
    });
    return r === 0 || `喝了 ${r} 瓶`;
  }],
  ["#7 藥水用完就不喝，也不會出錯", async ({ page }) => {
    const r = await page.evaluate(() => {
      const S = G.S, h = G.hero; clearField();
      S.potions = 0; S.hp = 1; G.step(0.1);
      return { potions: S.potions, hp: S.hp };
    });
    return (r.potions === 0 && r.hp === 1) || JSON.stringify(r);
  }],
  ["#7 預設門檻來自資料檔（40%）", async ({ page }) =>
    (await page.evaluate(() => G.S.autoRules[0].value === DATA.rules.autoRules[0].value && DATA.rules.autoRules[0].value === 40))],
  ["#7 「自動」頁面：文字框輸入 60，就在 59% 喝", async ({ page }) => {
    await page.locator("#autoBtn").click();
    const shown = await page.locator("#potPct").inputValue();
    await page.locator("#potPct").fill("60");
    await page.locator("#autoClose").click();
    const r = await page.evaluate(() => {
      const S = G.S, h = G.hero; clearField();
      const p0 = S.potions; S.hp = Math.floor(h.maxLife * 0.59); G.step(0.1);
      return { used: p0 - S.potions, value: S.autoRules[0].value };
    });
    return (shown === "40" && r.used === 1 && r.value === 60) || JSON.stringify({ shown, ...r });
  }],
  ["#7 「自動」頁面：打錯（abc、0、空白）會保留原本的數字並提示；最多只能打 2 位數", async ({ page }) => {
    await page.locator("#autoBtn").click();
    const bad = [];
    for (const v of ["abc", "0", ""]) {
      await page.locator("#potPct").fill(v);
      await page.locator("#potPct").dispatchEvent("change");
      const now = await page.locator("#potPct").inputValue();
      const hint = await page.locator("#potHint").innerText();
      if (now !== "40" || !hint.includes("1～99")) bad.push(`${v || "空白"}→${now}`);
    }
    const max = await page.locator("#potPct").getAttribute("maxlength");
    if (max !== "2") bad.push(`maxlength=${max}`);
    return bad.length === 0 || bad.join("、");
  }],
  ["#7 「自動」頁面：手機會跳數字鍵盤、字夠大不會被放大", async ({ page }) => {
    const r = await page.locator("#potPct").evaluate(el => ({ mode: el.inputMode, size: parseFloat(getComputedStyle(el).fontSize) }));
    return (r.mode === "numeric" && r.size >= 16) || JSON.stringify(r);
  }],
  ["#7 畫面：藥水數字減少、戰鬥框出現「自動喝藥水」；沒有手動喝水按鈕", async ({ page }) => {
    await page.evaluate(() => { const S = G.S; clearField(); S.hp = 1; G.step(0.1); });
    const pot = await page.locator("#potions").innerText();
    const feed = await page.locator("#feed").innerText();
    const btn = await page.locator("#game button", { hasText: "藥水" }).count();
    return (pot === "4" && feed.includes("自動喝藥水") && btn === 0) || `藥水 ${pot}、按鈕 ${btn}、${feed}`;
  }],
  // #18 數值總調整後（2026-10-06）兩個職業都測。模擬：女巫約 8～13 分鐘、決鬥者約 8～10 分鐘喝第一瓶，留點餘裕用 20 分鐘。
  ["#7 實戰：女巫、決鬥者放置 20 分鐘內會自動喝到藥水", async ({ page }) => {
    const r = await page.evaluate(() => { const p0 = G.S.potions; for (let i = 0; i < 12000; i++) G.step(0.1); return { used: p0 - G.S.potions, dead: G.S.dead }; });
    return r.used > 0 || JSON.stringify(r);
  }],
  // #18：模擬兩個職業最早約 20 分鐘倒下、場上最多約 25 隻；這裡抓寬一點，避免運氣差誤報
  ["#18 平衡：女巫、決鬥者放置 15 分鐘還活著，場上最多不超過 40 隻", async ({ page }) => {
    const r = await page.evaluate(() => { let maxN = 0; for (let i = 0; i < 9000 && !G.S.dead; i++) { G.step(0.1); maxN = Math.max(maxN, G.S.monsters.length); } return { dead: G.S.dead, maxN, lv: G.hero.level }; });
    return (!r.dead && r.maxN <= 40) || JSON.stringify(r);
  }],
];

// #19 死亡與復活
const REVIVE_CHECKS = [
  ["#19 有復活道具時倒下：自動復活、扣 1 個，生命魔力回滿，場上的怪清空", async ({ page }) => {
    const r = await page.evaluate(() => {
      const S = G.S; clearField(); S.revives = 2; S.mp = 0;
      for (let k = 0; k < 8; k++) place(Math.cos(k) * 0.8, Math.sin(k) * 0.8, { baseLife: 100000, baseAttack: 500 });
      let steps = 0; while (S.revives === 2 && steps < 300) { G.step(0.1); steps++; }
      return { revives: S.revives, dead: S.dead, hp: S.hp, max: G.hero.maxLife, mp: S.mp, maxMp: G.hero.maxMana, mons: S.monsters.length, timer: S.packTimer,
        shown: !document.getElementById("deathScreen").hidden, txt: document.getElementById("revives").textContent };
    });
    const feed = await page.locator("#feed").innerText();
    return (r.revives === 1 && !r.dead && r.hp === r.max && r.mp === r.maxMp && r.mons === 0 && r.timer <= 3 && !r.shown && r.txt === "1" && feed.includes("自動用掉 1 個復活道具"))
      || JSON.stringify(r) + feed;
  }],
  ["#19 沒有復活道具時倒下：顯示死亡畫面，遊戲停住；按「復活」免費回到戰鬥", async ({ page }) => {
    const r = await page.evaluate(() => {
      const S = G.S; clearField(); S.revives = 0;
      for (let k = 0; k < 8; k++) place(Math.cos(k) * 0.8, Math.sin(k) * 0.8, { baseLife: 100000, baseAttack: 500 });
      for (let i = 0; i < 300 && !S.dead; i++) G.step(0.1);
      const exp0 = S.exp, mons0 = S.monsters.length;
      for (let i = 0; i < 50; i++) G.step(0.1);
      return { dead: S.dead, frozen: S.exp === exp0 && S.monsters.length === mons0, shown: !document.getElementById("deathScreen").hidden };
    });
    if (!(r.dead && r.frozen && r.shown)) return "倒下時：" + JSON.stringify(r);
    await page.click("#reviveBtn");
    const a = await page.evaluate(() => ({ dead: G.S.dead, hp: G.S.hp, max: G.hero.maxLife, revives: G.S.revives, mons: G.S.monsters.length, shown: !document.getElementById("deathScreen").hidden }));
    const b = await page.evaluate(() => { for (let i = 0; i < 60; i++) G.step(0.1); return G.S.monsters.length; }); // 6 秒內新的一群會來
    return (!a.dead && a.hp === a.max && a.revives === 0 && a.mons === 0 && !a.shown && b > 0) || "按復活後：" + JSON.stringify(a) + " 6 秒後場上 " + b;
  }],
  ["#19 怪物會掉復活道具（機率寫在 data/monsters.js），數量顯示會更新", async ({ page }) => {
    const r = await page.evaluate(() => {
      const S = G.S; clearField(); S.revives = 0;
      const chance = DATA.monsters[0].reviveDropChance;
      for (const k in S.skillOn) S.skillOn[k] = true;
      for (let k = 0; k < 3; k++) place(0.6 + k * 0.1, 0, { baseLife: 0.01, moveSpeed: 0, reviveDropChance: 1 });
      for (let i = 0; i < 100 && S.monsters.length; i++) G.step(0.1);
      return { chance, got: S.revives, txt: document.getElementById("revives").textContent };
    });
    const feed = await page.locator("#feed").innerText();
    r.after = await page.evaluate(() => {
      for (let k = 0; k < 3; k++) place(0.6 + k * 0.1, 0, { baseLife: 0.01, moveSpeed: 0, reviveDropChance: 0 });
      for (let i = 0; i < 100 && G.S.monsters.length; i++) G.step(0.1);
      return G.S.revives;
    });
    return (r.chance > 0 && r.chance < 1 && r.got === 3 && r.txt === "3" && r.after === 3 && feed.includes("撿到復活道具")) || JSON.stringify(r) + feed;
  }],
];

// #8 魔力
const MANA_CHECKS = [
  ["#8 魔力條在血條正下方（藍色），等級在名字右邊", async ({ page }) => {
    const r = await page.evaluate(() => {
      const hero = document.getElementById("heroTag");
      const bars = [...hero.querySelectorAll(".hpb")];
      const title = hero.querySelector(".nm");
      return {
        order: bars.map(b => b.querySelector("i").id).join(","),
        mpColor: getComputedStyle(document.getElementById("heroMp")).backgroundColor,
        hpColor: getComputedStyle(document.getElementById("heroHp")).backgroundColor,
        lvInTitle: title.contains(document.getElementById("lv")),
        titleText: title.innerText,
        lvBelow: [...hero.children].some(el => el.tagName === "SMALL")
      };
    });
    return (r.order === "heroHp,heroMp" && r.mpColor !== r.hpColor && r.lvInTitle && /Lv1$/.test(r.titleText.replace(/\s/g, "")) && !r.lvBelow) || JSON.stringify(r);
  }],
  ["#8 開局魔力是滿的（照職業資料）", async ({ page }) => {
    const r = await page.evaluate(() => ({ mp: G.S.mp, max: G.hero.maxMana, text: document.getElementById("heroMpText").innerText }));
    return (r.mp === r.max && r.text === String(r.max)) || JSON.stringify(r);
  }],
  ["#8 每秒回魔：魔力歸零後 10 秒回到 回魔 × 10（不超過上限）", async ({ page }) => {
    const r = await page.evaluate(() => {
      const S = G.S, h = G.hero; clearField();
      S.mp = 0; for (let i = 0; i < 100; i++) G.step(0.1);
      const after10 = S.mp;
      for (let i = 0; i < 1000; i++) G.step(0.1);
      return { after10, want: Math.min(h.maxMana, h.manaRegen * 10), capped: S.mp, max: h.maxMana };
    });
    return (Math.abs(r.after10 - r.want) < 0.01 && r.capped === r.max) || JSON.stringify(r);
  }],
  ["#8 升級時魔力回滿，最大魔力、回魔 × 等級", async ({ page }) => {
    const r = await page.evaluate(() => {
      const S = G.S, h = G.hero; S.mp = 0; S.exp = G.expToNext(1, DATA.rules);
      G.onKill(S, h, G.makeMonster(DATA.monsters[0], 1), DATA.rules);
      return { lv: h.level, mp: S.mp, max: h.maxMana, regen: h.manaRegen, cls: h.cls };
    });
    return (r.lv === 2 && r.max === r.cls.maxMana * 2 && r.regen === r.cls.manaRegen * 2 && r.mp === r.max) || JSON.stringify(r);
  }],
  ["#8 角色屬性有魔力、回魔", async ({ page }) => {
    const t = await page.locator("#stats").innerText();
    return (t.includes("魔力") && t.includes("回魔")) || t;
  }],
];

// #9 改版面：一頁不捲動
const LAYOUT_CHECKS = [
  ["#9 一頁不捲動：整個主畫面剛好一個手機畫面，不用往下捲", async ({ page }) => {
    const r = await page.evaluate(() => ({ sh: document.documentElement.scrollHeight, vh: innerHeight, navBottom: document.getElementById("nav").getBoundingClientRect().bottom }));
    return (r.sh <= r.vh && r.navBottom <= r.vh) || JSON.stringify(r);
  }],
  ["#9 由上到下：資源列 → 戰場 → 按鈕列（在戰場下緣）→ 8 顆按鈕", async ({ page }) => {
    const r = await page.evaluate(() => {
      const y = sel => document.querySelector(sel).getBoundingClientRect();
      const top = y(".game .top"), arena = y("#battle"), ctrl = y("#battle .ctrl"), nav = y("#nav");
      return { ok: top.bottom <= arena.top && Math.abs(ctrl.bottom - arena.bottom) <= 2 && arena.bottom <= nav.top, arenaH: arena.height };
    });
    return (r.ok && r.arenaH > 300) || JSON.stringify(r);
  }],
  ["#9 資源列：經驗、金幣、鑽石（沒有重擲石）", async ({ page }) => {
    const t = await page.locator(".game .top").innerText();
    return (["經驗", "金幣", "鑽石"].every(w => t.includes(w)) && !t.includes("重擲石")) || t;
  }],
  ["#9 一排 8 顆按鈕，順序：背包、天賦、自動、商店、角色、裝備、戰鬥、任務", async ({ page }) => {
    const names = await page.locator("#nav .round").allInnerTexts();
    const tops = await page.locator("#nav .round").evaluateAll(els => new Set(els.map(e => Math.round(e.getBoundingClientRect().top))).size);
    return (names.join("") === "背包天賦自動商店角色裝備戰鬥任務" && tops === 1) || `${names.join("、")}，排成 ${tops} 行`;
  }],
  ["#9 按「角色」跳出角色屬性，按關閉收起來", async ({ page }) => {
    await page.locator("#charBtn").click();
    const shown = await page.locator("#charSheet").isVisible();
    const t = await page.locator("#stats").innerText();
    await page.locator("#charSheet [data-close]").click();
    const hidden = !(await page.locator("#charSheet").isVisible());
    return (shown && t.includes("攻擊") && t.includes("魔力") && hidden) || `${shown} ${hidden} ${t}`;
  }],
  ["#9 按「裝備」跳出 10 格裝備，點旁邊收起來", async ({ page }) => {
    await page.locator("#equipBtn").click();
    const shown = await page.locator("#equipSheet").isVisible();
    const n = await page.locator("#equipSheet .slot").count();
    await page.mouse.click(195, 30);
    const hidden = !(await page.locator("#equipSheet").isVisible());
    return (shown && n === 10 && hidden) || `${shown} ${n} ${hidden}`;
  }],
];

// #13 技能資料（照抄 poe2db）
const SKILLDATA_CHECKS = [
  ["#13 每個職業 3 招主動技能，都有資料", async ({ page }) => {
    const r = await page.evaluate(() => Object.fromEntries(Object.entries(DATA.skills.byClass).map(([c, ids]) => [c, ids.filter(id => DATA.skills.gems[id]).length])));
    return (r.witch === 3 && r.duelist === 3) || JSON.stringify(r);
  }],
  ["#13 主動技能：名字、標籤、說明、poe2db 連結、1～40 級數值表都有", async ({ page }) => {
    const bad = await page.evaluate(() => Object.values(DATA.skills.gems).filter(g =>
      !(g.name && g.tags.length && g.text && g.source.startsWith("https://poe2db.tw/") && g.levels && g.levels.rows.length >= 20 && g.levels.columns.includes("需要等級"))
    ).map(g => g.slug));
    return bad.length === 0 || "缺資料：" + bad.join("、");
  }],
  ["#13 耗魔：有第 1 級和第 20 級的數字（POE2 的法杖技能是 0）", async ({ page }) => {
    const r = await page.evaluate(() => Object.values(DATA.skills.gems).map(g => [g.name, g.manaCost]));
    return r.every(([, c]) => Array.isArray(c) && c.length === 2 && c[1] >= c[0]) || JSON.stringify(r);
  }],
  ["#13 輔助寶石 4 顆：類別、效果、說明都有", async ({ page }) => {
    const r = await page.evaluate(() => Object.values(DATA.supports.gems).map(g => ({ n: g.name, ok: !!(g.category && g.effects && g.effects.length && g.text) })));
    return (r.length === 4 && r.every(x => x.ok)) || JSON.stringify(r);
  }],
];

// #14 技能施放
const SKILL_CHECKS = [
  ["#14/#15 女巫帶瘟疫、骨之爆破、混沌弩箭；決鬥者帶震地、翻騰重擊、碎骨；技能列顯示名字和耗魔", async ({ page }) => {
    const r = await page.evaluate(() => ({ ids: G.heroSkills(G.hero), bar: document.getElementById("skillbar").innerText.replace(/\s+/g, " ") }));
    const want = { 女巫: ["瘟疫", "骨之爆破", "混沌弩箭"], 決鬥者: ["震地", "翻騰重擊", "碎骨"] };
    const cls = await page.evaluate(() => G.hero.name);
    return (r.ids.length === 3 && want[cls].every(n => r.bar.includes(n)) && /魔/.test(r.bar)) || JSON.stringify(r);
  }],
  ["#14 寶石等級照 poe2db「需要等級」：人物 Lv1 → 寶石 1 級，Lv3 → 2 級，Lv36 → 10 級", async ({ page }) => {
    const r = await page.evaluate(() => { const id = G.heroSkills(G.hero)[0]; return [1, 3, 36].map(l => G.gemLevel(id, l)); });
    return r.join(",") === "1,2,10" || r.join(",");
  }],
  ["#14 耗魔照 poe2db 每級的數字；放技能會扣魔力", async ({ page }) => {
    const r = await page.evaluate(() => {
      const S = G.S, h = G.hero; clearField();
      const id = G.hero.id === "witch" ? "Chaos_Bolt" : "Boneshatter";
      skillsOnly([id]); S.mp = h.maxMana;
      place(1, 0, { baseLife: 1000, moveSpeed: 0 });
      const cost = G.skillManaCost(id, h.level);
      for (let i = 0; i < 30; i++) G.step(0.05);
      return { cost, spent: +(h.maxMana - S.mp).toFixed(2), regen: h.manaRegen, want: DATA.skills.gems[id].levels.rows[0][DATA.skills.gems[id].levels.columns.indexOf("魔力")] ?? "0" };
    });
    // 1.5 秒內至少放 1 次；扣的魔力 = 次數 × 耗魔 − 回魔
    return (String(r.cost) === String(r.want) && (r.cost === 0 || r.spent > 0)) || JSON.stringify(r);
  }],
  ["#14 混沌弩箭（女巫）：射最近的一隻，傷害在 poe2db 第 1 級 5～9 換算的範圍內，耗魔 0", async ({ page }) => {
    const r = await page.evaluate(() => {
      if (G.hero.id !== "witch") return "skip";
      const S = G.S, h = G.hero; clearField(); skillsOnly(["Chaos_Bolt"]);
      const near = place(2, 0, { baseLife: 1000, moveSpeed: 0 }), far = place(4, 0, { baseLife: 1000, moveSpeed: 0 });
      const mp0 = S.mp; const hits = [];
      for (let i = 0; i < 40; i++) { const before = near.hp; G.step(0.05); if (near.hp < before) hits.push(before - near.hp); }
      return { hits, far: far.hp, mp: S.mp >= mp0 };
    });
    if (r === "skip") return true;
    return (r.hits.length >= 2 && r.hits.every(d => d >= 5 && d <= 9) && r.far === 1000 && r.mp) || JSON.stringify(r);
  }],
  ["#14 骨之爆破（女巫）：擠在一起的怪夠多（資料 minTargets 隻）才放，1 公尺內全打到、外面打不到", async ({ page }) => {
    const r = await page.evaluate(() => {
      if (G.hero.id !== "witch") return "skip";
      const n = DATA.skillPlay.skills.Bone_Blast.minTargets, spots = [[3, 0], [3.4, 0.2], [3.2, -0.4], [2.7, 0.3], [3.5, -0.3], [2.8, -0.2]];
      const pack = k => spots.slice(0, k).map(([x, y]) => place(x, y, { baseLife: 1000, moveSpeed: 0 }));
      clearField(); skillsOnly(["Bone_Blast"]);
      const full = pack(n), out = place(3, 2.5, { baseLife: 1000, moveSpeed: 0 });
      for (let i = 0; i < 16; i++) G.step(0.05); // 0.8 秒 > 施放 0.75 秒
      const hitFull = full.filter(m => m.hp < 1000).length;
      clearField(); skillsOnly(["Bone_Blast"]);
      const few = pack(n - 1);
      for (let i = 0; i < 16; i++) G.step(0.05);
      const hitFew = few.filter(m => m.hp < 1000).length; // 少 1 隻不放骨之爆破，最多被普攻打到 1 隻
      return { n, hitFull, out: out.hp, hitFew };
    });
    if (r === "skip") return true;
    return (r.hitFull === r.n && r.out === 1000 && r.hitFew <= 1) || JSON.stringify(r);
  }],
  ["#14 碎骨（決鬥者）：每下 100% 攻擊力、扣 9 魔；每 3 下震波 200% 打周圍", async ({ page }) => {
    const r = await page.evaluate(() => {
      if (G.hero.id !== "duelist") return "skip";
      const S = G.S, h = G.hero; clearField(); skillsOnly(["Boneshatter"]); S.mp = 1000; h.maxMana = 1000; h.manaRegen = 0;
      const t = place(1, 0, { baseLife: 10000, moveSpeed: 0 }), side = place(1.8, 0.6, { baseLife: 10000, moveSpeed: 0 });
      const gap = 1 / (h.attacksPerSec * 0.6);
      G.step(gap + 0.001);
      const one = 10000 - t.hp, sideAfter1 = side.hp, mp1 = 1000 - S.mp;
      G.step(gap); G.step(gap);
      return { one, atk: h.attack, sideAfter1, side: 10000 - side.hp, mp1 };
    });
    if (r === "skip") return true;
    return (r.one === r.atk && r.sideAfter1 === 10000 && r.side === 2 * r.atk && r.mp1 === 9) || JSON.stringify(r);
  }],
  ["#14 翻騰重擊（決鬥者）：前方 2 隻以上才放，兩段 75%、150%，扣 14 魔", async ({ page }) => {
    const r = await page.evaluate(() => {
      if (G.hero.id !== "duelist") return "skip";
      const S = G.S, h = G.hero; clearField(); skillsOnly(["Rolling_Slam"]); S.mp = 1000; h.maxMana = 1000; h.manaRegen = 0;
      const a = place(1, 0, { baseLife: 10000, moveSpeed: 0 }), b = place(1.4, 0.4, { baseLife: 10000, moveSpeed: 0 }), c = place(2.3, 0, { baseLife: 10000, moveSpeed: 0 });
      for (let i = 0; i < Math.ceil((1 / h.attacksPerSec + 1) / 0.05) + 1; i++) G.step(0.05);
      return { a: 10000 - a.hp, b: 10000 - b.hp, c: 10000 - c.hp, atk: h.attack, mp: 1000 - S.mp };
    });
    if (r === "skip") return true;
    const s1 = Math.round(0.75 * r.atk), s2 = Math.round(1.5 * r.atk);
    return (r.a === s1 + s2 && r.c === s2 && r.mp >= 14) || JSON.stringify(r);
  }],
  ["#14 魔力不夠就改用普通攻擊", async ({ page }) => {
    const r = await page.evaluate(() => {
      const S = G.S, h = G.hero; clearField();
      skillsOnly(G.heroSkills(h).filter(id => G.skillManaCost(id, h.level) > 0));
      if (!G.heroSkills(h).some(id => S.skillOn[id])) return "skip"; // 女巫兩招都免魔，不適用
      S.mp = 0; h.manaRegen = 0;
      const m = place(1, 0, { baseLife: 1000, moveSpeed: 0 });
      G.step(1 / h.attacksPerSec + 0.001);
      return { dmg: 1000 - m.hp, atk: h.attack };
    });
    if (r === "skip") return true;
    return r.dmg === r.atk || JSON.stringify(r);
  }],
  ["#14 範圍技能讓清怪變快：女巫、決鬥者放置 4 分鐘，場上不會塞滿 60 隻", async ({ page }) => {
    const r = await page.evaluate(() => { let max = 0; for (let i = 0; i < 4800; i++) { G.step(0.05); max = Math.max(max, G.S.monsters.length); } return { max, dead: G.S.dead }; });
    return r.max < 60 || JSON.stringify(r);
  }],
];

// #15 持續傷害、延遲爆炸
const EFFECT_CHECKS = [
  ["#15 瘟疫（女巫）：對旁邊有怪的目標施放，扣 8 魔，每秒扣「2 ÷ 12 × 攻擊力」，5 秒後消失", async ({ page }) => {
    const r = await page.evaluate(() => {
      const S = G.S, h = G.hero; clearField(); skillsOnly(["Contagion"]); h.maxMana = 1000; S.mp = 1000; h.manaRegen = 0;
      const a = place(2, 0, { baseLife: 100000, moveSpeed: 0, baseAttack: 0 }), b = place(2.5, 0.5, { baseLife: 100000, moveSpeed: 0, baseAttack: 0 });
      G.step(1.001);                                 // 施放 1 秒
      const got = a.contagion || b.contagion, mp = 1000 - S.mp;
      skillsOnly([]); h.attacksPerSec = 1e-6;          // 不再放、也不普攻，只看持續傷害
      const target = a.contagion ? a : b, hp0 = target.hp;
      for (let i = 0; i < 40; i++) G.step(0.05);     // 2 秒
      const lost2 = hp0 - target.hp;
      for (let i = 0; i < 80; i++) G.step(0.05);     // 再 4 秒，總共 6 秒 > 5 秒
      return { got: !!got, mp, lost2, want2: 2 / h.cls.attack * h.attack * 2, gone: !target.contagion };
    });
    return (r.got && r.mp === 8 && Math.abs(r.lost2 - r.want2) <= 1 && r.gone) || JSON.stringify(r);
  }],
  ["#15 瘟疫（女巫）：單獨一隻（旁邊沒怪）不放；已經中瘟疫的不重複放", async ({ page }) => {
    const r = await page.evaluate(() => {
      const S = G.S; clearField(); skillsOnly(["Contagion"]); S.mp = 1000; G.hero.maxMana = 1000;
      const lone = place(2, 0, { baseLife: 1000, moveSpeed: 0 });
      for (let i = 0; i < 30; i++) G.step(0.05);
      const loneHit = !!lone.contagion;
      clearField(); skillsOnly(["Contagion"]);
      const a = place(2, 0, { baseLife: 1000, moveSpeed: 0 }), b = place(2.4, 0, { baseLife: 1000, moveSpeed: 0 });
      G.applyContagion(a, 1, 5, 0); G.applyContagion(b, 1, 5, 0);
      const mp0 = S.mp; for (let i = 0; i < 30; i++) G.step(0.05);
      return { loneHit, spent: mp0 - S.mp };
    });
    return (!r.loneHit && r.spent <= 0) || JSON.stringify(r);
  }],
  ["#15 瘟疫擴散：中招的怪死掉，1.7 公尺內的怪被傳染、傷害變 2 倍；外面的不會", async ({ page }) => {
    const r = await page.evaluate(() => {
      const S = G.S; clearField();
      const dying = place(3, 0, { baseLife: 1, moveSpeed: 0 }), near = place(4, 0, { baseLife: 1000, moveSpeed: 0 }), far = place(3, 3, { baseLife: 1000, moveSpeed: 0 });
      G.applyContagion(dying, 10, 5, 0);
      G.step(0.2);
      return { near: near.contagion && near.contagion.dps, spreads: near.contagion && near.contagion.spreads, far: !!far.contagion };
    });
    return (r.near === 20 && r.spreads === 1 && !r.far) || JSON.stringify(r);
  }],
  ["#15 瘟疫擴散最多 300% 更多傷害（傳很多次也不會超過 4 倍）", async ({ page }) => {
    const r = await page.evaluate(() => {
      clearField();
      const dying = place(3, 0, { baseLife: 1, moveSpeed: 0 }), near = place(3.5, 0, { baseLife: 1000, moveSpeed: 0 });
      G.applyContagion(dying, 10 * 4, 5, 6);           // 已經擴散 6 次：基礎 10，已是 ×4
      G.step(0.2);
      return near.contagion && near.contagion.dps;
    });
    return r === 40 || `擴散後每秒 ${r}`;
  }],
  ["#15 震地（決鬥者）：衝擊 40% 打 1.8 公尺內，扣 8 魔，留下碎裂地面，4 秒後餘震 184%", async ({ page }) => {
    const r = await page.evaluate(() => {
      const S = G.S, h = G.hero; clearField(); skillsOnly(["Earthquake"]); h.maxMana = 1000; S.mp = 1000; h.manaRegen = 0;
      const a = place(1, 0, { baseLife: 100000, moveSpeed: 0, baseAttack: 0 }), b = place(1.5, 0.8, { baseLife: 100000, moveSpeed: 0, baseAttack: 0 });
      const gap = 1 / (h.attacksPerSec * 0.75);
      G.step(gap + 0.001);
      const slam = 100000 - a.hp, mp = 1000 - S.mp, grounds = S.grounds.length;
      skillsOnly([]); h.attacksPerSec = 1e-6;          // 不再放、也不普攻，只看餘震
      for (let i = 0; i < 81; i++) G.step(0.05);     // 4.05 秒
      return { slam, mp, grounds, total: 100000 - a.hp, b: 100000 - b.hp, atk: h.attack, left: S.grounds.length };
    });
    const s = Math.round(0.4 * r.atk), af = Math.round(1.84 * r.atk);
    return (r.slam === s && r.mp === 8 && r.grounds === 1 && r.total === s + af && r.b === s + af && r.left === 0) || JSON.stringify(r);
  }],
  ["#15 震地（決鬥者）：碎裂地面最多 2 片，不會疊在現有地面上", async ({ page }) => {
    const r = await page.evaluate(() => {
      const S = G.S, h = G.hero; clearField(); skillsOnly(["Earthquake"]); h.maxMana = 1000; S.mp = 1000;
      for (const [x, y] of [[1, 0], [1.3, 0.3], [-1, 0], [-1.3, 0.3], [0, 1.2], [0.3, 1.4]]) place(x, y, { baseLife: 100000, moveSpeed: 0, baseAttack: 0 });
      for (let i = 0; i < 60; i++) G.step(0.05);     // 3 秒內只能放到上限
      const n = S.grounds.length;
      let overlap = false;
      for (let i = 0; i < n; i++) for (let j = i + 1; j < n; j++) if (G.dist(S.grounds[i], S.grounds[j]) < S.grounds[i].r) overlap = true;
      return { n, overlap };
    });
    return (r.n === 2 && !r.overlap) || JSON.stringify(r);
  }],
];

// #16 輔助寶石插槽
const SOCKET_CHECKS = [
  ["#16 每招 2 個插槽，開局都是空的；「角色」頁列出 3 招、6 個插槽", async ({ page }) => {
    const r = await page.evaluate(() => Object.values(G.S.sockets).map(x => x.length + ":" + x.filter(Boolean).length));
    await page.locator("#charBtn").click();
    const n = await page.locator("#skillPanel .sock").count();
    return (r.length === 3 && r.every(x => x === "2:0") && n === 6) || `${r.join(",")} 插槽按鈕 ${n}`;
  }],
  ["#16 標籤不合插不上：連鎖、多重射擊只能插投射物技能；集中範圍只能插範圍技能", async ({ page }) => {
    const r = await page.evaluate(() => {
      const fits = (sk, sp) => G.supportFits(sk, sp);
      return [fits("Chaos_Bolt", "Chain_I"), fits("Chaos_Bolt", "Multishot_I"), fits("Bone_Blast", "Chain_I"), fits("Bone_Blast", "Concentrated_Area"),
              fits("Earthquake", "Prolonged_Duration_I"), fits("Boneshatter", "Prolonged_Duration_I"), fits("Rolling_Slam", "Concentrated_Area")];
    });
    return r.join(",") === "true,true,false,true,true,false,true" || r.join(",");
  }],
  ["#16 不同技能可以各插一顆一樣的；同一招不能插兩顆一樣的（Gary 2026-10-06 選 A）", async ({ page }) => {
    const r = await page.evaluate(() => {
      const S = G.S, [a, b] = G.heroSkills(G.hero).filter(id => G.supportFits(id, "Concentrated_Area"));
      const e1 = G.setSocket(S, a, 0, "Concentrated_Area"), e2 = G.setSocket(S, b, 0, "Concentrated_Area");
      const e3 = G.setSocket(S, a, 1, "Concentrated_Area");
      return { e1, e2, e3: e3 || "", a: S.sockets[a], b: S.sockets[b] };
    });
    return (r.e1 === null && r.e2 === null && /不能插兩顆一樣/.test(r.e3) && r.a[1] === null && r.b[0] === "Concentrated_Area") || JSON.stringify(r);
  }],
  ["#16 連鎖 I（女巫混沌弩箭）：打完目標再跳 1 隻，每下 30% 更少", async ({ page }) => {
    const r = await page.evaluate(() => {
      if (G.hero.id !== "witch") return "skip";
      const S = G.S, h = G.hero; clearField(); skillsOnly(["Chaos_Bolt"]);
      G.setSocket(S, "Chaos_Bolt", 0, "Chain_I");
      const a = place(2, 0, { baseLife: 1000, moveSpeed: 0, baseAttack: 0 }), b = place(3.5, 0, { baseLife: 1000, moveSpeed: 0, baseAttack: 0 }), c = place(-3, 3, { baseLife: 1000, moveSpeed: 0, baseAttack: 0 });
      G.step(0.751);
      return { a: 1000 - a.hp, b: 1000 - b.hp, c: 1000 - c.hp };
    });
    if (r === "skip") return true;
    // 5～9 × 0.7 → 3.5～6.3，四捨五入 3～6
    return (r.a >= 3 && r.a <= 6 && r.b >= 3 && r.b <= 6 && r.c === 0) || JSON.stringify(r);
  }],
  ["#16 多重射擊 I（女巫混沌弩箭）：一次打 3 隻，傷害 35% 更少，施放變慢 20%", async ({ page }) => {
    const r = await page.evaluate(() => {
      if (G.hero.id !== "witch") return "skip";
      const S = G.S; clearField(); skillsOnly(["Chaos_Bolt"]);
      G.setSocket(S, "Chaos_Bolt", 0, "Multishot_I");
      const ms = [[2, 0], [0, 2], [-2, 0], [0, -3.5]].map(([x, y]) => place(x, y, { baseLife: 1000, moveSpeed: 0, baseAttack: 0 }));
      G.step(0.76);                       // 0.75 秒還不夠（要 0.75 ÷ 0.8 ≈ 0.94 秒）
      const early = ms.filter(m => m.hp < 1000).length;
      G.step(0.2);
      return { early, hit: ms.filter(m => m.hp < 1000).length, dmg: ms.map(m => 1000 - m.hp) };
    });
    if (r === "skip") return true;
    return (r.early === 0 && r.hit === 3 && r.dmg.every(d => d === 0 || (d >= 3 && d <= 6))) || JSON.stringify(r);
  }],
  ["#16 集中範圍：範圍變小（半徑 × 0.71）、範圍傷害 30% 更多", async ({ page }) => {
    const r = await page.evaluate(() => {
      const S = G.S, h = G.hero, id = h.id === "witch" ? "Bone_Blast" : "Earthquake";
      const before = G.skillEffective(S, id).radiusM;
      G.setSocket(S, id, 0, "Concentrated_Area");
      const m = G.skillMods(S, id), after = G.skillEffective(S, id).radiusM;
      return { ratio: +(after / before).toFixed(3), area: m.areaMult };
    });
    return (r.ratio === 0.707 && r.area === 1.3) || JSON.stringify(r);
  }],
  ["#16 延長持續時間 I：持續時間 30% 更長（瘟疫 5→6.5 秒、震地 4→5.2 秒），耗魔 × 1.2", async ({ page }) => {
    const r = await page.evaluate(() => {
      const S = G.S, h = G.hero, id = h.id === "witch" ? "Contagion" : "Earthquake";
      const c0 = G.skillCost(S, h, id);
      G.setSocket(S, id, 0, "Prolonged_Duration_I");
      const e = G.skillEffective(S, id);
      return { dur: +(e.durationSec || e.delaySec).toFixed(2), c0, c1: G.skillCost(S, h, id) };
    });
    return ((r.dur === 6.5 || r.dur === 5.2) && r.c1 === Math.round(r.c0 * 1.2)) || JSON.stringify(r);
  }],
  ["#16 畫面：在「角色」頁點插槽→選輔助寶石→插上；技能列出現 ◆", async ({ page }) => {
    await page.locator("#charBtn").click();
    await page.locator("#skillPanel .sock").first().click();
    const first = await page.evaluate(() => G.heroSkills(G.hero)[0]);
    const ok = await page.evaluate(id => G.supportIds().find(s => !G.socketProblem(G.S, id, 0, s)), first);
    await page.locator(`#skillPanel [data-pick="${ok}"]`).click();
    const at = await page.evaluate(id => G.S.sockets[id][0], first);
    const hint = await page.locator("#socketHint").innerText();
    await page.locator("#charSheet [data-close]").click();
    await page.evaluate(() => G.render(G.S, G.hero));
    const bar = await page.locator("#skillbar").innerText();
    return (at === ok && hint.includes("已插上") && bar.includes("◆")) || `${at} ${hint} ${bar}`;
  }],
  ["#16 畫面：插不上的輔助寶石是灰的，寫出原因", async ({ page }) => {
    await page.locator("#charBtn").click();
    await page.locator("#skillPanel .sock").first().click();
    const n = await page.locator("#skillPanel .pick:disabled em").count();
    return n >= 1 || "沒有灰掉的選項";
  }],
];

// #17 「自動」頁的技能設定
const SKILLRULE_CHECKS = [
  ["#17 「自動」頁列出 3 招，預設全開、魔力門檻 0", async ({ page }) => {
    await page.locator("#autoBtn").click();
    const boxes = await page.locator("#skillRules [data-on]").evaluateAll(els => els.map(e => e.checked));
    const vals = await page.locator("#skillRules [data-mp]").evaluateAll(els => els.map(e => e.value));
    return (boxes.length === 3 && boxes.every(Boolean) && vals.every(v => v === "0")) || JSON.stringify({ boxes, vals });
  }],
  ["#17 取消打勾的技能不會放", async ({ page }) => {
    await page.locator("#autoBtn").click();
    const id = await page.evaluate(() => G.heroSkills(G.hero).find(i => G.skillManaCost(i, 1) === 0) || G.heroSkills(G.hero)[0]);
    await page.locator(`#skillRules [data-on="${id}"]`).uncheck();
    await page.locator("#autoClose").click();
    const r = await page.evaluate(id => {
      const S = G.S; S.mp = G.hero.maxMana = 1000;
      let used = 0;
      for (let i = 0; i < 1200; i++) { G.step(0.05); if (S.lastCast && S.lastCast.id === id && S.lastCast.t > 0.39) used++; }
      return { on: S.skillOn[id], used };
    }, id);
    return (r.on === false && r.used === 0) || JSON.stringify(r);
  }],
  ["#17 魔力門檻：設 60%，魔力 50% 時不放、70% 時會放", async ({ page }) => {
    await page.locator("#autoBtn").click();
    const id = await page.evaluate(() => G.heroSkills(G.hero).find(i => G.skillManaCost(i, 1) > 0));
    await page.locator(`#skillRules [data-mp="${id}"]`).fill("60");
    await page.locator(`#skillRules [data-mp="${id}"]`).dispatchEvent("change");
    await page.locator("#autoClose").click();
    const r = await page.evaluate(id => {
      const S = G.S, h = G.hero; clearField(); skillsOnly([id]); S.skillMinMp[id] = 60; // clearField 會關技能，這裡只開這一招
      for (const [x, y] of [[1, 0], [1.3, 0.3], [1.5, -0.3], [1.2, 0.5]]) place(x, y, { baseLife: 100000, moveSpeed: 0, baseAttack: 0 });
      h.manaRegen = 0;
      S.mp = h.maxMana * 0.5; const a = S.mp; for (let i = 0; i < 60; i++) G.step(0.05);
      const low = a - S.mp;
      S.mp = h.maxMana * 0.7; S.pending = null; const b = S.mp; for (let i = 0; i < 60; i++) G.step(0.05);
      return { set: S.skillMinMp[id], low, high: b - S.mp };
    }, id);
    return (r.set === 60 && r.low === 0 && r.high > 0) || JSON.stringify(r);
  }],
  ["#17 魔力門檻打錯（abc、空白）保留原值並提示", async ({ page }) => {
    await page.locator("#autoBtn").click();
    const input = page.locator("#skillRules [data-mp]").first();
    const bad = [];
    for (const v of ["abc", ""]) {
      await input.fill(v); await input.dispatchEvent("change");
      const now = await input.inputValue(), hint = await page.locator("#skillRuleHint").innerText();
      if (now !== "0" || !hint.includes("0～99")) bad.push(`${v || "空白"}→${now}`);
    }
    return bad.length === 0 || bad.join("、");
  }],
  ["#17 技能列：關掉的技能有刪除線", async ({ page }) => {
    await page.locator("#autoBtn").click();
    await page.locator("#skillRules [data-on]").first().uncheck();
    await page.locator("#autoClose").click();
    await page.evaluate(() => G.render(G.S, G.hero));
    return (await page.locator("#skillbar .skill.off").count()) === 1;
  }],
];

(async () => {
  const port = 8765, srv = await serve(port), url = `http://localhost:${port}/`;
  const browser = await chromium.launch();
  let fail = 0;
  const report = (name, r) => {
    const ok = r === true;
    if (!ok) fail++;
    console.log(`${ok ? "✅" : "❌"} ${name}${ok ? "" : "：" + r}`);
  };
  const run = async (fn, ctx) => { try { return await fn(ctx); } catch (e) { return e.message.split("\n")[0]; } };

  const ctx = await open(browser, url, { start: "witch" });
  for (const [name, fn] of CHECKS) report(name, await run(fn, ctx));

  for (const [name, fn] of SELECT_CHECKS) {
    const c = await open(browser, url);
    report(name, await run(fn, c));
    if (c.errors.length) report(name + "（頁面錯誤）", c.errors.join(" / "));
    await c.page.close();
  }

  for (const [name, fn] of SPAWN_CHECKS) {
    const c = await open(browser, url, { start: "duelist" });
    report(name, await run(fn, c));
    if (c.errors.length) report(name + "（頁面錯誤）", c.errors.join(" / "));
    await c.page.close();
  }

  // 名稱寫「女巫、決鬥者」的檢查，兩個職業各跑一次
  const BOTH = "女巫、決鬥者", CLASS_NAME = { witch: "女巫", duelist: "決鬥者" };
  for (const [title, fn] of COMBAT_CHECKS) for (const cls of title.includes(BOTH) ? ["witch", "duelist"] : ["duelist"]) {
    const c = await open(browser, url, { start: cls });
    const name = title.replace(BOTH, CLASS_NAME[cls]);
    report(name, await run(fn, c));
    if (c.errors.length) report(name + "（頁面錯誤）", c.errors.join(" / "));
    await c.page.close();
  }

  for (const [name, fn] of PROGRESS_CHECKS) {
    const c = await open(browser, url, { start: "witch" });
    report(name, await run(fn, c));
    if (c.errors.length) report(name + "（頁面錯誤）", c.errors.join(" / "));
    await c.page.close();
  }

  for (const [name, fn] of TAP_CHECKS) {
    const c = await open(browser, url, { start: "duelist" });
    report(name, await run(fn, c));
    if (c.errors.length) report(name + "（頁面錯誤）", c.errors.join(" / "));
    await c.page.close();
  }

  for (const [title, fn] of POTION_CHECKS) for (const cls of title.includes(BOTH) ? ["witch", "duelist"] : title.includes("決鬥者") ? ["duelist"] : ["witch"]) {
    const c = await open(browser, url, { start: cls });
    const name = title.replace(BOTH, CLASS_NAME[cls]);
    report(name, await run(fn, c));
    if (c.errors.length) report(name + "（頁面錯誤）", c.errors.join(" / "));
    await c.page.close();
  }

  for (const [name, fn] of MANA_CHECKS) for (const cls of ["witch", "duelist"]) {
    const c = await open(browser, url, { start: cls });
    report(`${name}（${CLASS_NAME[cls]}）`, await run(fn, c));
    if (c.errors.length) report(name + "（頁面錯誤）", c.errors.join(" / "));
    await c.page.close();
  }

  for (const [name, fn] of LAYOUT_CHECKS) for (const vp of [{ width: 390, height: 844 }, { width: 375, height: 667 }]) {
    const c = await open(browser, url, { start: "witch", viewport: vp });
    report(`${name}（${vp.width}×${vp.height}）`, await run(fn, c));
    if (c.errors.length) report(name + "（頁面錯誤）", c.errors.join(" / "));
    await c.page.close();
  }

  for (const [name, fn] of SKILLDATA_CHECKS) {
    const c = await open(browser, url, { start: "witch" });
    report(name, await run(fn, c));
    if (c.errors.length) report(name + "（頁面錯誤）", c.errors.join(" / "));
    await c.page.close();
  }

  for (const [title, fn] of SKILL_CHECKS) for (const cls of ["witch", "duelist"]) {
    const c = await open(browser, url, { start: cls });
    const name = title.includes(BOTH) ? title.replace(BOTH, CLASS_NAME[cls]) : `${title}（${CLASS_NAME[cls]}）`;
    report(name, await run(fn, c));
    if (c.errors.length) report(name + "（頁面錯誤）", c.errors.join(" / "));
    await c.page.close();
  }

  for (const [name, fn] of EFFECT_CHECKS) {
    const cls = name.includes("決鬥者") ? "duelist" : "witch";
    const c = await open(browser, url, { start: cls });
    report(name, await run(fn, c));
    if (c.errors.length) report(name + "（頁面錯誤）", c.errors.join(" / "));
    await c.page.close();
  }

  for (const [title, fn] of SOCKET_CHECKS) for (const cls of ["witch", "duelist"]) {
    const c = await open(browser, url, { start: cls });
    const name = `${title}（${CLASS_NAME[cls]}）`;
    report(name, await run(fn, c));
    if (c.errors.length) report(name + "（頁面錯誤）", c.errors.join(" / "));
    await c.page.close();
  }

  for (const [title, fn] of SKILLRULE_CHECKS) for (const cls of ["witch", "duelist"]) {
    const c = await open(browser, url, { start: cls });
    const name = `${title}（${CLASS_NAME[cls]}）`;
    report(name, await run(fn, c));
    if (c.errors.length) report(name + "（頁面錯誤）", c.errors.join(" / "));
    await c.page.close();
  }

  for (const [title, fn] of REVIVE_CHECKS) for (const cls of ["witch", "duelist"]) {
    const c = await open(browser, url, { start: cls });
    const name = `${title}（${CLASS_NAME[cls]}）`;
    report(name, await run(fn, c));
    if (c.errors.length) report(name + "（頁面錯誤）", c.errors.join(" / "));
    await c.page.close();
  }

  // 測試版：網址加 ?test=1 才是 0 個復活道具、生命一半；正常網址不變
  for (const cls of ["witch", "duelist"]) {
    const name = `#19 測試版（?test=1）：開局 0 個復活道具、最大生命一半，升級後也一半；正常網址不變（${CLASS_NAME[cls]}）`;
    const t = await open(browser, url + "?test=1", { start: cls });
    const a = await t.page.evaluate(() => { const r = { rev: G.S.revives, life: G.hero.maxLife, hp: G.S.hp, lv1: G.hero.cls.maxLife, name: document.getElementById("heroName").textContent, shown: document.getElementById("revives").textContent };
      G.onKill(G.S, G.hero, { name: "x", exp: 99999, gold: [0, 0] }, DATA.rules); r.up = G.hero.maxLife / (G.hero.cls.maxLife * G.hero.level); r.base = DATA.classes.list.find(c => c.id === G.hero.id).maxLife; return r; });
    await t.page.close();
    const n = await open(browser, url, { start: cls });
    const b = await n.page.evaluate(() => ({ rev: G.S.revives, life: G.hero.maxLife, name: document.getElementById("heroName").textContent }));
    await n.page.close();
    report(name, (a.rev === 0 && a.shown === "0" && a.life === a.base / 2 && a.hp === a.life && a.up === 1 && a.name.includes("測試版") && b.rev === 5 && b.life === a.base && !b.name.includes("測試版")) || JSON.stringify({ a, b }));
  }

  // 資料檔寫錯時，畫面要說錯在哪個檔案
  const broken = await open(browser, url, {
    route: { match: /data\/rules\.js$/, handler: r => r.fulfill({ contentType: "text/javascript", body: "DATA.rules = { maxMonsters: 60,, };" }) }
  });
  const msg = await broken.page.locator(".errbox").first().innerText().catch(() => "");
  report("#1 資料檔寫錯時，畫面顯示錯在哪個檔案", msg.includes("data/rules.js") || msg || "沒有提示");

  await browser.close(); srv.close();
  console.log(fail ? `\n${fail} 項沒過，不要推。` : "\n全部通過。");
  process.exit(fail ? 1 : 0);
})();
