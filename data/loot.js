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
  },
  // 大致比例：武器 1/3、胸甲 1/3（自己職業的類型最常見）、戒指 1/3。底材只會出「需求等級 ≤ 物品等級」的（跟 POE2 一樣）

  // 不會正常掉落的特殊底材（賽季、工藝用），資料留著但不掉。第 2 階段 #4 從內建詞綴判斷，Gary 可以改
  excludeBases: [
    "Ring",                                                          // 「戒指」：沒有內建詞綴的佔位底材
    "Dusk_Ring", "Gloam_Ring", "Penumbra_Ring", "Tenebrous_Ring",    // 調整前綴／後綴數量的特殊戒指
    "Breach_Ring", "Refined_Breach_Ring",                            // 裂痕（品質）
    "Abyssal_Signet", "Grasping_Ring", "Unset_Ring"                  // 深淵、視為手套、額外技能槽
  ],

  // 詞綴數量（第 2 階段 #4，照 POE：魔法最多 1 前綴 1 後綴；稀有最多 3 前綴 3 後綴）
  affixCount: { normal: [0, 0], magic: [1, 2], rare: [3, 6] },  // [最少, 最多]，平均隨機
  maxPrefix: { normal: 0, magic: 1, rare: 3 },
  maxSuffix: { normal: 0, magic: 1, rare: 3 }
};
