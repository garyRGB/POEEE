// 職業資料。加職業 = 在 list 多加一筆；調數值只改這裡。
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
      desc: "施法者。每下打得重，但生命低、出手慢。",
      maxLife: 80,
      attack: 12,
      attacksPerSec: 0.8
    },
    {
      id: "duelist",
      name: "決鬥者",
      desc: "近戰劍客。生命高、出手快，每下比較輕。",
      maxLife: 120,
      attack: 7,
      attacksPerSec: 1.3
    }
  ]
};
