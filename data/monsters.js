// 怪物數值。第 1 階段只有 1 種怪。
window.DATA = window.DATA || {};
DATA.monsters = [
  {
    id: "rotting_corpse",
    name: "腐屍",
    maxLife: 30,
    attack: 2,
    attacksPerSec: 0.8,
    exp: 5,
    gold: [2, 4],            // 掉落金幣範圍
    reviveDropChance: 0.05   // 掉復活道具的機率（5%）
  }
];
