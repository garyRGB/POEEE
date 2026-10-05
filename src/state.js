// 遊戲狀態：只負責「現在的數字」，不碰畫面。
window.G = window.G || {};
G.createState = function (hero, rules) {
  return {
    hp: hero.maxLife,
    exp: 0, gold: 0, orb: 0,
    potions: hero.potions,
    revives: hero.revives,
    monsters: Array(rules.maxMonsters).fill(null) // 每格 null = 空位
  };
};
