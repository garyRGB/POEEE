// 移動：只負責「怪物往角色走、走到身邊停下、彼此不要疊在一起」。不碰戰鬥。
window.G = window.G || {};
G.moveTick = function (S, dt) {
  const hero = { x: 0, y: 0 }, ms = S.monsters;
  for (const m of ms) {
    const d = G.dist(m, hero), stop = m.meleeRangeM * 0.95;
    if (d > stop) {
      const step = Math.min(m.moveSpeed * dt, d - stop);
      m.x -= (m.x / d) * step; m.y -= (m.y / d) * step;
    }
  }
  // 互相推開，避免一坨疊成一個點（60 隻以內，兩兩比對很快）
  for (let i = 0; i < ms.length; i++) for (let j = i + 1; j < ms.length; j++) {
    const a = ms[i], b = ms[j], min = a.radiusM + b.radiusM;
    let dx = b.x - a.x, dy = b.y - a.y, d = Math.hypot(dx, dy);
    if (d >= min) continue;
    if (d < 1e-6) { dx = Math.random() - 0.5; dy = Math.random() - 0.5; d = Math.hypot(dx, dy); }
    const push = (min - d) / 2;
    a.x -= dx / d * push; a.y -= dy / d * push; b.x += dx / d * push; b.y += dy / d * push;
  }
};
