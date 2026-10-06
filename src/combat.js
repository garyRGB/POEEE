// 戰鬥：只負責「誰打誰、扣多少血」。不碰畫面、不發獎勵。
// 角色打攻擊範圍內最近的怪，鎖定打到死（或離開範圍）才換；只有貼身的怪會打角色。
window.G = window.G || {};
(function () {
  const HERO = { x: 0, y: 0 };
  G.inMelee = m => G.dist(m, HERO) <= m.meleeRangeM + 0.01;

  // 目前的目標（怪物物件或 null）
  G.pickTarget = function (S, hero) {
    const t = S.target;
    if (t && t.hp > 0 && S.monsters.includes(t) && G.dist(t, HERO) <= hero.attackRangeM) return t;
    let best = null, bd = Infinity;
    for (const m of S.monsters) {
      const d = G.dist(m, HERO);
      if (m.hp > 0 && d <= hero.attackRangeM && d < bd) { best = m; bd = d; }
    }
    S.target = best;
    return best;
  };
  G.targetIndex = S => S.target ? S.monsters.indexOf(S.target) : -1;

  // 回傳這一步被打死的怪（拿去發經驗、金幣）
  G.combatTick = function (S, dt, hero) {
    const killed = [];
    if (S.dead) return killed;

    if (!G.pickTarget(S, hero)) {
      S.heroTimer = 0; // 範圍內沒有怪就不蓄力
    } else {
      S.heroTimer += dt;
      const gap = 1 / hero.attacksPerSec;
      while (S.heroTimer >= gap) {
        S.heroTimer -= gap;
        const m = G.pickTarget(S, hero);
        if (!m) break;
        m.hp -= hero.attack;
        if (m.hp <= 0) {
          m.hp = 0; killed.push(m);
          S.monsters.splice(S.monsters.indexOf(m), 1);
          S.target = null;
        }
      }
    }

    // 怪物出手：貼身才計時
    for (const m of S.monsters) {
      if (!G.inMelee(m)) continue;
      m.atkTimer += dt;
      const gap = 1 / m.attacksPerSec;
      while (m.atkTimer >= gap && !S.dead) {
        m.atkTimer -= gap;
        S.hp -= m.attack;
        if (S.hp <= 0) { S.hp = 0; S.dead = true; }
      }
    }
    return killed;
  };
})();
