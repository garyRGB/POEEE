// 擊殺與升級：只負責「打死怪拿什麼、經驗夠了怎麼升級」。不碰畫面、不碰戰鬥。
window.G = window.G || {};
(function () {
  const randInt = ([a, b]) => a + Math.floor(Math.random() * (b - a + 1));

  G.expToNext = (level, rules) => rules.levelExpBase * level;

  // 角色的生命、攻擊 = 職業 Lv1 數值 × 等級
  G.applyLevel = function (hero) {
    hero.maxLife = hero.cls.maxLife * hero.level;
    hero.attack = hero.cls.attack * hero.level;
  };

  // 打死一隻怪：給經驗、金幣；經驗夠就升級（升級回滿血）。回傳要顯示的訊息。
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
      msgs.push(`升到 Lv ${hero.level}！生命回滿`);
    }
    return msgs;
  };
})();
