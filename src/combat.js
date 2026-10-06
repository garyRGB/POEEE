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

  // 打一隻怪；打死就移出場上、記進 killed（同一隻不會重複算）
  G.hitMonster = function (S, m, dmg, killed) {
    if (m.hp <= 0) return;
    m.hp -= dmg;
    if (m.hp <= 0) {
      m.hp = 0; killed.push(m);
      const i = S.monsters.indexOf(m);
      if (i >= 0) S.monsters.splice(i, 1);
      if (S.target === m) S.target = null;
    }
  };

  // 回傳這一步被打死的怪（拿去發經驗、金幣）
  G.combatTick = function (S, dt, hero) {
    const killed = [];
    if (S.dead) return killed;

    // 角色出手：放技能或普通攻擊（src/skills.js）
    G.heroActTick(S, dt, hero, killed);

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
