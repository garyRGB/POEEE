// 擊殺與升級：只負責「打死怪拿什麼、經驗夠了怎麼升級」。不碰畫面、不碰戰鬥。
window.G = window.G || {};
(function () {
  const randInt = ([a, b]) => a + Math.floor(Math.random() * (b - a + 1));

  G.expToNext = (level, rules) => rules.levelExpBase * level * level; // 50 × 等級²

  // 角色的生命、攻擊、魔力、回魔 = 職業 Lv1 數值 × 等級
  G.applyLevel = function (hero) {
    hero.maxLife = hero.cls.maxLife * hero.level;
    hero.attack = hero.cls.attack * hero.level;
    hero.maxMana = hero.cls.maxMana * hero.level;
    hero.manaRegen = hero.cls.manaRegen * hero.level;
  };

  // 同一步打死好幾隻（範圍技能）：合成一行「擊倒 N 隻」，升級訊息另外列
  G.onKills = function (S, hero, list, rules) {
    if (list.length === 1) return G.onKill(S, hero, list[0], rules);
    let exp = 0, gold = 0; const ups = [];
    for (const m of list) {
      const e0 = S.exp, g0 = S.gold, lv0 = hero.level;
      const msgs = G.onKill(S, hero, m, rules);
      exp += m.exp; gold += S.gold - g0;
      if (hero.level > lv0) ups.push(...msgs.slice(1));
    }
    return list.length ? [`擊倒 ${list.length} 隻，經驗 +${exp}、金幣 +${gold}`, ...ups] : [];
  };

  // 打死一隻怪：給經驗、金幣；經驗夠就升級（升級回滿生命、魔力）。回傳要顯示的訊息。
  G.onKill = function (S, hero, m, rules) {
    const gold = randInt(m.gold);
    S.exp += m.exp;
    S.gold += gold;
    const msgs = [`擊倒 ${m.name}，經驗 +${m.exp}、金幣 +${gold}`];
    while (S.exp >= G.expToNext(hero.level, rules)) {
      S.exp -= G.expToNext(hero.level, rules);
      hero.level++;
      G.applyLevel(hero);
      S.hp = hero.maxLife;
      S.mp = hero.maxMana;
      msgs.push(`升到 Lv ${hero.level}！生命、魔力回滿`);
    }
    return msgs;
  };
})();
