// 戰鬥規則。自動規則格式照 PLAN.md：{ when, value, do }
window.DATA = window.DATA || {};
DATA.rules = {
  maxMonsters: 9,            // 場上最多幾隻怪（3×3 格）
  slotCooldownSec: [2, 10],  // 每個空格各自倒數幾秒出怪（在這個範圍隨機）
  firstSpawnSec: [2, 10],    // 開局時每格第一隻怪在幾秒內出現（隨機）
  tapReduceSec: 0.5,         // 點戰鬥框一下，所有空格的倒數一起減少幾秒
  levelExpBase: 50,          // 升級要的經驗 = 50 × 目前等級²（怪物經驗 = 5 × 等級，所以 Lv N 要打約 10 × N 隻）
  autoRules: [
    { when: "hp_below_pct", value: 40, do: "use_potion" }
  ]
};
