// 遊戲狀態：只負責「現在的數字」，不碰畫面。
window.G = window.G || {};
G.createState = function (hero, rules) {
  return {
    hp: hero.maxLife,
    mp: hero.maxMana,
    dead: false,  // 角色倒下時整個遊戲停住
    heroTimer: 0, // 角色離下一次攻擊累積了幾秒
    exp: 0, gold: 0, diamond: 0, // 鑽石：買稀有通貨用（第 2 階段才有來源）
    potions: hero.potions,
    revives: hero.revives,
    monsters: [],                       // 場上的怪（每隻有 x、y 公尺座標）
    target: null,                       // 角色正在打的那隻
    packTimer: G.firstPackTimer(rules), // 距離下一群怪還有幾秒
    autoRules: rules.autoRules.map(r => ({ ...r })) // 玩家自己的自動規則（預設值來自 data/rules.js，可在「自動」頁面改）
  };
};
