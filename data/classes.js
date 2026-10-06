// 職業資料。加職業 = 在 list 多加一筆；調數值只改這裡。
// 生命、魔力照 POE2 算（data/character.js、src/stats.js）；攻擊來自武器（startWeapon 指到 data/items.js 的底材）。
window.DATA = window.DATA || {};
DATA.classes = {
  // 所有職業共用的開局數值
  base: {
    level: 1,
    armor: 0,           // 護甲（之後算減傷）
    potions: 5,         // 開局藥水數量
    potionHealPct: 50,  // 一瓶補最大生命的幾 %
    revives: 5          // 開局自帶的復活道具（之後靠怪物掉落補充）
  },
  list: [
    {
      id: "witch",
      name: "女巫",
      desc: "施法者。靠法術打遠方的怪，生命低、魔力高。",
      startWeapon: { itemClass: "Wands", id: "Withered_Wand" },     // 凋零法杖（POE2 法杖不能普通攻擊）
      attackRangeM: 4     // 鎖定目標的距離（公尺）：施法者遠距離
    },
    {
      id: "duelist",
      name: "決鬥者",
      desc: "近戰鬥士。拿錘子打一群，生命高、魔力低。",
      startWeapon: { itemClass: "One_Hand_Maces", id: "Wooden_Club" }, // 木製棍棒（Gary 2026-10-06：給錘類；poe2db 原本寫劍）
      attackRangeM: 1.6   // 近戰
    }
  ]
};
