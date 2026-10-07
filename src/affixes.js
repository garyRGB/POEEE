// 擲詞綴：只負責「一件物品身上有哪些詞綴、數值多少」。詞綴表在 data/affixes.js（poe2db），數量規則在 data/loot.js。
// 跟 POE 一樣：每一階是一條獨立的詞綴，有自己的權重；只能擲到「物品等級 ≥ 該階需求」的；同一族（例：物理傷害%）只會出一條。
window.G = window.G || {};
(function () {
  const randInt = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
  // 數值範圍擲一個值：整數範圍擲整數，有小數的擲到小數 2 位
  const rollRange = ([lo, hi]) => (Number.isInteger(lo) && Number.isInteger(hi)) ? randInt(lo, hi) : +(lo + Math.random() * (hi - lo)).toFixed(2);

  // 把「附加#至#物理傷害」填上數值
  G.affixText = a => { let i = 0; return a.template.replace(/#/g, () => a.values[i++]); };

  // 這件物品能出的所有詞綴（每一階一條），依物品等級過濾
  const pool = (itemClass, ilvl) => {
    const out = [], A = DATA.affixes[itemClass];
    for (const kind of ["prefix", "suffix"]) for (const fam of A[kind])
      for (const t of fam.tiers) if (t.ilvl <= ilvl && t.weight > 0) out.push({ kind, family: fam.family, tier: t });
    return out;
  };

  G.rollAffixes = function (itemClass, ilvl, rarity) {
    const L = DATA.loot, [lo, hi] = L.affixCount[rarity], want = randInt(lo, hi);
    const left = { prefix: L.maxPrefix[rarity], suffix: L.maxSuffix[rarity] };
    let cand = pool(itemClass, ilvl);
    const out = [];
    while (out.length < want) {
      cand = cand.filter(c => left[c.kind] > 0 && !out.some(o => o.family === c.family));
      if (!cand.length) break;
      const total = cand.reduce((t, c) => t + c.tier.weight, 0);
      let r = Math.random() * total, pick = cand[cand.length - 1];
      for (const c of cand) if ((r -= c.tier.weight) < 0) { pick = c; break; }
      left[pick.kind]--;
      out.push({ kind: pick.kind, family: pick.family, tier: pick.tier.tier, ilvl: pick.tier.ilvl, name: pick.tier.name,
        template: pick.tier.template, ranges: pick.tier.ranges, values: pick.tier.ranges.map(rollRange) });
    }
    // 跟遊戲裡一樣：前綴排前面、後綴排後面
    return out.sort((a, b) => (a.kind === "prefix" ? 0 : 1) - (b.kind === "prefix" ? 0 : 1));
  };

  // 底材內建詞綴（例：紅玉戒指 +(20—30)% 火焰抗性）也要擲數值
  G.rollImplicits = base => base.implicits.map(im => ({ template: im.template, ranges: im.ranges, values: im.ranges.map(rollRange) }));

  // 魔法物品的名字：前綴名＋底材＋後綴名（POE 規則）；稀有物品 POE 會隨機取兩個字的名字，還沒爬到字表，先用底材名
  G.itemName = function (base, rarity, affixes) {
    if (rarity !== "magic") return base.name;
    const p = affixes.find(a => a.kind === "prefix"), s = affixes.find(a => a.kind === "suffix");
    return [p && p.name, base.name, s && s.name].filter(Boolean).join(" ");
  };
})();
