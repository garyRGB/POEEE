// 戰鬥規則。自動規則格式照 PLAN.md：{ when, value, do }
window.DATA = window.DATA || {};
DATA.rules = {
  maxMonsters: 9,          // 場上最多幾隻怪（3×3 格）
  spawnCooldownSec: 3,     // 每隔幾秒出 1 隻怪
  tapReduceSec: 0.5,       // 點戰鬥框一下，減少幾秒冷卻
  minSpawnCooldownSec: 0.5,// 冷卻最短幾秒
  autoRules: [
    { when: "hp_below_pct", value: 40, do: "use_potion" }
  ]
};
