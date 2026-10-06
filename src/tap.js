// 點擊加速：只負責「點一下，下一群怪提早出現」。不碰畫面、不碰戰鬥。
window.G = window.G || {};
G.tapSpeedUp = function (S, rules) {
  S.packTimer = Math.max(0, S.packTimer - rules.tapReduceSec); // 倒到 0，下一步就來一群
};
