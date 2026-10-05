// 怪物資料。沒有關卡：怪物等級＝角色等級，生命和攻擊＝基礎值 × 等級。
// 新手目標：Lv 1 角色 2～3 下打死一隻；被 9 隻圍住也能撐 20 秒以上。
window.DATA = window.DATA || {};
DATA.monsters = [
  {
    id: "rotting_corpse",
    name: "腐屍",
    baseLife: 20,            // 每級生命（Lv 1 = 20、Lv 5 = 100）
    baseAttack: 1,           // 每級攻擊（Lv 1 = 1、Lv 5 = 5）
    attacksPerSec: 0.4,      // 每秒攻擊次數（不隨等級變）
    baseExp: 5,              // 每級經驗
    gold: [2, 4],            // 每級金幣範圍
    reviveDropChance: 0.05   // 掉復活道具的機率（5%）
  }
];
