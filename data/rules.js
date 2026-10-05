// 戰鬥規則。自動規則格式照 PLAN.md：{ when, value, do }
window.DATA = window.DATA || {};
DATA.rules = {
  maxMonsters: 9,            // 場上最多幾隻怪（3×3 格）
  slotCooldownSec: [10, 20], // 每個空格各自倒數幾秒出怪（在這個範圍隨機）
  firstSpawnSec: [2, 10],    // 開局時每格第一隻怪在幾秒內出現（隨機）
  tapReduceSec: 0.5,         // 點戰鬥框一下，所有空格的倒數一起減少幾秒
  autoRules: [
    { when: "hp_below_pct", value: 40, do: "use_potion" }
  ]
};
