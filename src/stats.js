// 角色數值（照 POE2）：只負責「這個等級、這把武器，角色的生命、魔力、攻擊是多少」。數字在 data/character.js、data/items.js。
//   生命 ＝ 28 ＋ 12 ×（等級 − 1）＋ 2 × 力量；魔力 ＝ 34 ＋ 4 ×（等級 − 1）＋ 2 × 智慧；每秒回魔 ＝ 最大魔力 × 4%
//   攻擊：傷害、攻速、暴擊來自手上的武器（POE2 法杖不能攻擊，女巫靠技能寶石的傷害）
window.G = window.G || {};
(function () {
  const C = () => DATA.character;
  const DMG = ["phys", "fire", "cold", "lightning", "chaos"];

  G.findItem = (itemClass, id) => DATA.items[itemClass].bases.find(b => b.id === id);

  // 武器一下的傷害範圍（各種傷害加總）
  G.weaponRange = function (w) {
    let lo = 0, hi = 0;
    for (const k of DMG) if (w && w[k]) { lo += w[k][0]; hi += w[k][1]; }
    return [lo, hi];
  };
  G.weaponRoll = function (hero) {
    const [lo, hi] = G.weaponRange(hero.weapon);
    return lo + Math.random() * (hi - lo);
  };

  G.applyLevel = function (hero) {
    const c = C(), a = c.classes[hero.id], L = hero.level;
    hero.str = a.str; hero.dex = a.dex; hero.int = a.int;
    hero.maxLife = Math.round((c.lifeBase + c.lifePerLevel * (L - 1) + c.lifePerStr * a.str) * (hero.lifeMult || 1));
    hero.maxMana = c.manaBase + c.manaPerLevel * (L - 1) + c.manaPerInt * a.int;
    hero.manaRegen = +(hero.maxMana * c.manaRegenPctPerSec / 100).toFixed(2);
    if (!hero.weapon) hero.weapon = G.findItem(hero.cls.startWeapon.itemClass, hero.cls.startWeapon.id);
    hero.attacksPerSec = hero.weapon.aps || 0;            // 法杖沒有攻速＝不能普通攻擊
    const [lo, hi] = G.weaponRange(hero.weapon);
    hero.attack = (lo + hi) / 2;                          // 顯示用：武器平均一下
  };
})();

// 選角卡片上的一行數值：Lv1 生命、魔力、起始武器
G.classCardStats = function (c) {
  const h = { id: c.id, level: 1, cls: c };
  G.applyLevel(h);
  const [lo, hi] = G.weaponRange(h.weapon);
  return `生命 ${h.maxLife}　魔力 ${h.maxMana}　${h.weapon.name}${h.attacksPerSec ? `（${lo}～${hi}・${h.attacksPerSec}/秒）` : ""}`;
};
