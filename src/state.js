// 遊戲狀態：只負責「現在的數字」，不碰畫面。
window.G = window.G || {};
G.createState = function (hero, rules) {
  return {
    hp: hero.maxLife,
    dead: false,  // 角色倒下時整個遊戲停住
    heroTimer: 0, // 角色離下一次攻擊累積了幾秒
    exp: 0, gold: 0, orb: 0,
    potions: hero.potions,
    revives: hero.revives,
    monsters: Array(rules.maxMonsters).fill(null), // 每格 null = 空位
    spawnCooldown: rules.spawnCooldownSec, // 目前的生怪冷卻（之後點擊會縮短）
    spawnTimer: rules.spawnCooldownSec     // 距離下一隻怪還有幾秒
  };
};
