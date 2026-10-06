// 怪物資料。沒有關卡：怪物等級＝角色等級，生命和攻擊＝基礎值 × 等級。
// 新手目標：Lv 1 角色 2～3 下打死一隻；被 8 隻貼身圍住也能撐 20 秒以上。
window.DATA = window.DATA || {};
DATA.monsters = [
  {
    id: "rotting_corpse",
    name: "腐屍",
    baseLife: 20,            // 每級生命（Lv 1 = 20、Lv 5 = 100）
    baseAttack: 1,           // 每級攻擊（Lv 1 = 1、Lv 5 = 5）
    attacksPerSec: 0.1,      // 每秒攻擊次數（不隨等級變）；9 隻同時打每秒約扣 0.9 × 等級
    firstAttackSec: 1.0,     // 走到角色身邊後幾秒打第一下（之後照攻速）
    moveSpeed: 1.2,          // 每秒走幾公尺
    meleeRangeM: 0.9,        // 離角色多近才出手（公尺，中心到中心）
    radiusM: 0.3,            // 怪物大小（半徑）
    baseExp: 5,              // 每級經驗
    gold: [2, 4],            // 每級金幣範圍
    reviveDropChance: 0.002  // 掉復活道具的機率（0.2%，約 500 隻掉 1 個）。#19 模擬：1 小時約打 2800 隻、倒下 6～10 次；5% 會撿到 140 個，等於不會死
  }
];
