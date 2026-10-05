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
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
  const errors = [];
  page.on("pageerror", e => errors.push(e.message));
  await page.route(/fonts\.(googleapis|gstatic)\.com/, r => r.abort()); // 字型連不到不算錯
  if (opts.route) await page.route(opts.route.match, opts.route.handler);
  await page.goto(url);
  await page.waitForTimeout(300);
  if (opts.start) await startAs(page, opts.start);
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
  ["#1 左邊 1 格角色（名字、血條、等級）", async ({ page }) =>
    (await page.locator(".unit.hero").count()) === 1 &&
    (await page.locator("#heroTitle").innerText()).length > 0 &&
    (await page.locator("#heroHpText").innerText()) !== "" &&
    (await page.locator("#lv").innerText()) === "1"],
  ["#1 右邊 9 格怪物，排成 3 欄", async ({ page }) => {
    const n = await page.locator("#monsters > .unit").count();
    const cols = await page.locator("#monsters").evaluate(el => getComputedStyle(el).gridTemplateColumns.split(" ").length);
    return (n === 9 && cols === 3) || `格數 ${n}、欄數 ${cols}`;
  }],
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

// #3 怪物生成：從選好角色的新頁面開始；用 G.step 快轉時間，不用真的等
const SPAWN_CHECKS = [
  ["#3 開始後約 3 秒出現第 1 隻怪", async ({ page }) => {
    const cd = await page.evaluate(() => DATA.rules.spawnCooldownSec);
    await page.waitForTimeout(cd * 1000 + 600);
    const n = await page.locator("#monsters .unit.mon").count();
    return n >= 1 || `等了 ${cd} 秒還是 ${n} 隻`;
  }],
  ["#3 一直生怪，最多 9 隻，不會超過", async ({ page }) => {
    await page.evaluate(() => { for (let i = 0; i < 300; i++) G.step(1); });
    const n = await page.locator("#monsters .unit.mon").count();
    const empty = await page.locator("#monsters .unit.empty").count();
    return (n === 9 && empty === 0) || `怪 ${n} 隻、空位 ${empty}`;
  }],
  ["#3 怪物格有名字、等級、血條", async ({ page }) => {
    await page.evaluate(() => G.step(5));
    const t = await page.locator("#monsters .unit.mon").first().innerText();
    return (t.includes("Lv1") && (await page.locator("#monsters .unit.mon .hpb").count()) >= 1) || t;
  }],
  ["#3 空出格子後，冷卻到了會補上", async ({ page }) => {
    await page.evaluate(() => { for (let i = 0; i < 100; i++) G.step(1); G.S.monsters[4] = null; G.step(0); });
    const gap = await page.evaluate(() => G.S.monsters[4] === null);
    await page.evaluate(() => G.step(DATA.rules.spawnCooldownSec));
    const filled = await page.evaluate(() => G.S.monsters[4] !== null);
    return (gap && filled) || `空出 ${gap}、補上 ${filled}`;
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
  ["#3 新手怪夠弱：被 9 隻圍住，Lv1 女巫、決鬥者都撐得過 20 秒", async ({ page }) => {
    const r = await page.evaluate(() => {
      const m = G.makeMonster(DATA.monsters[0], 1), dps = m.attack * m.attacksPerSec * DATA.rules.maxMonsters;
      return DATA.classes.list.map(c => [c.name, +(c.maxLife / dps).toFixed(1)]);
    });
    return r.every(([, sec]) => sec >= 20) || r.map(x => x.join(" ") + " 秒").join("、");
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

  // 資料檔寫錯時，畫面要說錯在哪個檔案
  const broken = await open(browser, url, {
    route: { match: /data\/rules\.js$/, handler: r => r.fulfill({ contentType: "text/javascript", body: "DATA.rules = { maxMonsters: 9,, };" }) }
  });
  const msg = await broken.page.locator(".errbox").first().innerText().catch(() => "");
  report("#1 資料檔寫錯時，畫面顯示錯在哪個檔案", msg.includes("data/rules.js") || msg || "沒有提示");

  await browser.close(); srv.close();
  console.log(fail ? `\n${fail} 項沒過，不要推。` : "\n全部通過。");
  process.exit(fail ? 1 : 0);
})();
