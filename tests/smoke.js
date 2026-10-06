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
    window.clearField = () => { G.S.monsters = []; G.S.target = null; G.S.packTimer = 999; };
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
  ["#4 角色血到 0 就倒下，整個停住，血不會變負的", async ({ page }) => {
    const r = await page.evaluate(() => {
      const S = G.S; clearField();
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
  ["#7 實戰：女巫、決鬥者放置 12 分鐘內會自動喝到藥水", async ({ page }) => {
    const r = await page.evaluate(() => { const p0 = G.S.potions; for (let i = 0; i < 7200; i++) G.step(0.1); return { used: p0 - G.S.potions, dead: G.S.dead }; });
    return r.used > 0 || JSON.stringify(r);
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

  for (const [title, fn] of POTION_CHECKS) for (const cls of title.includes(BOTH) ? ["witch", "duelist"] : ["witch"]) {
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
