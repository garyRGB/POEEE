// 掉落：只負責「打死怪會不會掉、掉什麼」。規則在 data/loot.js，底材在 data/items.js。不碰畫面。
// 物品等級＝怪物等級（POE2）；詞綴交給 src/affixes.js。
window.G = window.G || {};
(function () {
  let nextUid = 1;
  const pickWeighted = (list, w) => {
    const total = list.reduce((t, x) => t + w(x), 0);
    let r = Math.random() * total;
    for (const x of list) if ((r -= w(x)) < 0) return x;
    return list[list.length - 1];
  };

  G.rollRarity = function () {
    const R = DATA.loot.rarity;
    return pickWeighted(Object.keys(R), k => R[k]);
  };

  // 做出一件物品：選類別（照職業）→ 選底材（需求等級 ≤ 物品等級）→ 擲稀有度
  G.makeItem = function (heroId, ilvl, rarity) {
    const drops = DATA.loot.classDrops[heroId];
    for (let tries = 0; tries < 10; tries++) {
      const cls = pickWeighted(drops, d => d.weight).itemClass;
      const bases = DATA.items[cls].bases.filter(b => b.reqLevel <= ilvl && !DATA.loot.excludeBases.includes(b.id));
      if (!bases.length) continue; // 這類別還沒有這麼低等的底材，換一類
      const base = bases[Math.floor(Math.random() * bases.length)];
      let r = rarity || G.rollRarity();
      const affixes = G.rollAffixes(cls, ilvl, r);
      if (r !== "normal" && !affixes.length) r = "normal"; // 一條詞綴都擲不到就是普通物品（POE 規則）
      return { uid: nextUid++, itemClass: cls, baseId: base.id, name: G.itemName(base, r, affixes), slot: DATA.items[cls].slot,
        rarity: r, ilvl, reqLevel: base.reqLevel, implicits: G.rollImplicits(base), affixes };
    }
    return null;
  };

  // 這一步打死的怪：每隻照 dropChance 擲一次。掉到的放進背包，回傳要顯示的訊息
  G.lootDrops = function (S, hero, killed) {
    const msgs = [];
    for (const m of killed) {
      if (Math.random() >= DATA.loot.dropChance) continue;
      const it = G.makeItem(hero.id, m.level);
      if (!it) continue;
      S.bag.unshift(it); // 新的放最前面
      msgs.push(`掉落：${DATA.loot.rarityName[it.rarity]} ${DATA.items[it.itemClass].name.replace(/（.*）/, "")}（${it.name}）`);
    }
    return msgs;
  };
})();
