// 戰場幾何：只負責「戰場多大、距離、8 個方向從哪裡進場」。單位是公尺，角色在 (0, 0)。
window.G = window.G || {};
(function () {
  // 8 個方向：0 右、1 右下、2 下、3 左下、4 左、5 左上、6 上、7 右上（螢幕座標 y 往下）
  G.DIR_NAMES = ["右", "右下", "下", "左下", "左", "左上", "上", "右上"];
  G.arena = { w: 12, h: 18 }; // 畫面量好尺寸後由 arenaView 更新

  G.setArena = function (wM, hM) { G.arena.w = wM; G.arena.h = hM; };
  G.dist = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);

  // 第 dir 個方向、框外 marginM 公尺的位置
  G.spawnPoint = function (dir, marginM) {
    const ang = dir * Math.PI / 4, dx = Math.cos(ang), dy = Math.sin(ang);
    const hx = G.arena.w / 2 + marginM, hy = G.arena.h / 2 + marginM;
    const t = Math.min(Math.abs(dx) > 1e-9 ? hx / Math.abs(dx) : Infinity, Math.abs(dy) > 1e-9 ? hy / Math.abs(dy) : Infinity);
    return { x: dx * t, y: dy * t };
  };

  G.insideArena = p => Math.abs(p.x) <= G.arena.w / 2 && Math.abs(p.y) <= G.arena.h / 2;
})();
