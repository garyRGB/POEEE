// 掉落規則（第 2 階段 #3）。所有機率、比例都在這裡，調數值只改這裡。
// Gary 2026-10-07：每 100 隻掉 1 件；普通 70%／魔法 25%／稀有 5%
window.DATA = window.DATA || {};
DATA.loot = {
  dropChance: 0.01,                                   // 每打死 1 隻怪，掉 1 件裝備的機率（0.01 ＝ 每 100 隻約 1 件）
  rarity: { normal: 70, magic: 25, rare: 5 },         // 稀有度權重（加起來不用剛好 100）
  rarityName: { normal: "普通", magic: "魔法", rare: "稀有" },
  // 每個職業會掉哪些類別（data/items.js 的 key）和權重。武器先綁職業（2026-10-06 Gary 選 A）：決鬥者只掉錘、女巫只掉法杖
  classDrops: {
    duelist: [
      { itemClass: "One_Hand_Maces", weight: 1 }, { itemClass: "Two_Hand_Maces", weight: 1 },
      { itemClass: "Body_Armours_str", weight: 1 }, { itemClass: "Body_Armours_dex", weight: 1 / 3 },
      { itemClass: "Body_Armours_int", weight: 1 / 3 }, { itemClass: "Body_Armours_str_dex", weight: 1 / 3 },
      { itemClass: "Body_Armours_str_int", weight: 1 / 3 }, { itemClass: "Body_Armours_dex_int", weight: 1 / 3 },
      { itemClass: "Rings", weight: 2 }
    ],
    witch: [
      { itemClass: "Wands", weight: 2 },
      { itemClass: "Body_Armours_int", weight: 1 }, { itemClass: "Body_Armours_str", weight: 1 / 3 },
      { itemClass: "Body_Armours_dex", weight: 1 / 3 }, { itemClass: "Body_Armours_str_dex", weight: 1 / 3 },
      { itemClass: "Body_Armours_str_int", weight: 1 / 3 }, { itemClass: "Body_Armours_dex_int", weight: 1 / 3 },
      { itemClass: "Rings", weight: 2 }
    ]
  }
  // 大致比例：武器 1/3、胸甲 1/3（自己職業的類型最常見）、戒指 1/3。底材只會出「需求等級 ≤ 物品等級」的（跟 POE2 一樣）
};
