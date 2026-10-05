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
  return { page, errors };
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

(async () => {
  const port = 8765, srv = await serve(port), url = `http://localhost:${port}/`;
  const browser = await chromium.launch();
  let fail = 0;
  const ctx = await open(browser, url);
  for (const [name, fn] of CHECKS) {
    let r; try { r = await fn(ctx); } catch (e) { r = e.message; }
    const ok = r === true;
    if (!ok) fail++;
    console.log(`${ok ? "✅" : "❌"} ${name}${ok ? "" : "：" + r}`);
  }

  // 資料檔寫錯時，畫面要說錯在哪個檔案
  const broken = await open(browser, url, {
    route: { match: /data\/rules\.js$/, handler: r => r.fulfill({ contentType: "text/javascript", body: "DATA.rules = { maxMonsters: 9,, };" }) }
  });
  const msg = await broken.page.locator(".errbox").first().innerText().catch(() => "");
  const ok = msg.includes("data/rules.js");
  if (!ok) fail++;
  console.log(`${ok ? "✅" : "❌"} #1 資料檔寫錯時，畫面顯示錯在哪個檔案${ok ? "" : "：" + (msg || "沒有提示")}`);

  await browser.close(); srv.close();
  console.log(fail ? `\n${fail} 項沒過，不要推。` : "\n全部通過。");
  process.exit(fail ? 1 : 0);
})();
