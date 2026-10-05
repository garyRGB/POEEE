// 點擊加速：只負責「點一下，所有空格的倒數一起減少」。不碰畫面、不碰戰鬥。
window.G = window.G || {};
G.tapSpeedUp = function (S, rules) {
  S.slotTimers.forEach((t, i) => {
    if (S.monsters[i] || t == null) return;
    S.slotTimers[i] = Math.max(0, t - rules.tapReduceSec); // 倒到 0，下一步就出怪
  });
};
