// 持續效果：只負責「怪身上的持續傷害（瘟疫）」和「地上的延遲爆炸（震地的碎裂地面）」每一步怎麼算。
window.G = window.G || {};
(function () {
  // 掛瘟疫：每秒傷害 dps，持續 sec 秒；spreads＝已經擴散過幾次（越多傷害越高）
  G.applyContagion = function (m, dps, sec, spreads) {
    if (m.hp <= 0) return;
    m.contagion = { dps, remain: sec, spreads, acc: 0 };
  };

  // 怪死掉時：身上有瘟疫就傳給附近的怪，刷新持續時間、傷害變高（上限照 poe2db）
  G.onMonsterDeath = function (S, m) {
    const c = m.contagion;
    if (!c) return;
    const p = DATA.skillPlay.skills.Contagion;
    const spreads = c.spreads + 1;
    const more = Math.min(spreads * p.spreadMorePct, p.spreadMaxMorePct) / 100;
    const base = c.dps / (1 + Math.min(c.spreads * p.spreadMorePct, p.spreadMaxMorePct) / 100);
    for (const o of S.monsters) {
      if (o === m || o.hp <= 0 || G.dist(o, m) > p.spreadRadiusM) continue;
      G.applyContagion(o, base * (1 + more), p.durationSec, spreads);
    }
    S.fx.push({ type: "ring", x: m.x, y: m.y, r: p.spreadRadiusM, age: 0, life: 0.4 });
  };

  // 每步：瘟疫扣血、地面倒數到 0 就爆
  G.effectsTick = function (S, dt, killed) {
    for (const m of [...S.monsters]) {
      const c = m.contagion;
      if (!c) continue;
      const step = Math.min(dt, c.remain);
      c.acc += c.dps * step;
      c.remain -= dt;
      const whole = Math.floor(c.acc);
      if (whole > 0) { c.acc -= whole; G.hitMonster(S, m, whole, killed); }
      if (c.remain <= 0 && m.contagion === c) delete m.contagion;
    }
    for (const g of [...S.grounds]) {
      g.remain -= dt;
      if (g.remain > 0) continue;
      S.grounds.splice(S.grounds.indexOf(g), 1);
      const hit = S.monsters.filter(m => m.hp > 0 && G.dist(m, g) <= g.r);
      for (const m of hit) G.hitMonster(S, m, g.dmg, killed);
      S.fx.push({ type: "circle", x: g.x, y: g.y, r: g.r, age: 0, life: 0.4 });
      S.msgs.push(`${g.name} 餘震 擊中 ${hit.length} 隻`);
    }
  };
})();
