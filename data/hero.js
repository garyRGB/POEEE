// 角色數值。調數值只改這裡，不用動 game.js。
window.DATA = window.DATA || {};
DATA.hero = {
  name: "流放者",
  title: "劍士",
  level: 1,
  maxLife: 100,       // 最大生命
  attack: 8,          // 每下傷害
  attacksPerSec: 1.0, // 每秒攻擊次數
  armor: 0,           // 護甲（先放著，之後算減傷）
  potions: 5,         // 開局藥水數量
  potionHealPct: 50,  // 一瓶補最大生命的幾 %
  revives: 0          // 開局復活道具數量（之後靠怪物掉落）
};
