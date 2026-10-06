// 戰鬥規則。距離單位都是「公尺」（技能範圍照 poe2db 的公尺數）。自動規則格式照 PLAN.md：{ when, value, do }
window.DATA = window.DATA || {};
DATA.rules = {
  arenaWidthM: 12,           // 戰場寬幾公尺（高度照手機畫面比例）
  heroRadiusM: 0.4,          // 角色大小（半徑）
  maxMonsters: 60,           // 場上最多幾隻怪（太多舊手機會卡）
  packSize: [4, 6],          // 一群幾隻
  firstPackSec: [1, 3],      // 開局第一群幾秒內出現
  packIntervalSec: [2, 10],  // 之後每隔幾秒來一群（隨機）
  spawnOutsideM: 1,          // 在框外幾公尺生出來，再走進場
  tapReduceSec: 0.5,         // 點戰場一下，下一群提早幾秒
  levelExpBase: 50,          // 升級要的經驗 = 50 × 目前等級²（怪物經驗 = 5 × 等級，所以 Lv N 要打約 10 × N 隻）
  revive: {                  // 死亡與復活（#19，Claude 定、Gary 可改）
    hpPct: 100,              // 復活後生命回到幾 %
    mpPct: 100,              // 復活後魔力回到幾 %
    clearMonsters: false     // 復活時怪留在原位（Gary 2026-10-06 指定）；改 true 會清空場上的怪
  },
  testMode: {                // 網址加 ?test=1 的測試版（src/testMode.js），正常網址不受影響
    revives: 0,              // 開局復活道具
    lifePct: 50              // 最大生命是正常的幾 %
  },
  autoRules: [
    { when: "hp_below_pct", value: 40, do: "use_potion" }
  ]
};
