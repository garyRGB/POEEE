// 魔力：只負責「每秒回魔」。放技能扣魔力是 #9 的技能系統。不碰畫面。
window.G = window.G || {};
G.manaTick = function (S, hero, dt) {
  if (S.dead) return;
  S.mp = Math.min(hero.maxMana, S.mp + hero.manaRegen * dt);
};
