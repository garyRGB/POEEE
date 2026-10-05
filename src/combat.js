// 戰鬥：只負責「誰打誰、扣多少血」。不碰畫面、不發獎勵。
// 角色鎖定一隻怪打到死，再換格子順序第 1 隻活著的怪；在場每隻怪都會打角色。
window.G = window.G || {};
(function () {
  // 目前的目標：正在打的那隻還活著就繼續打；打死了才換格子順序第 1 隻活著的怪
  G.targetIndex = S => {
    const cur = S.monsters[S.target];
    if (S.target != null && cur && cur.hp > 0) return S.target;
    const i = S.monsters.findIndex(m => m && m.hp > 0);
    S.target = i < 0 ? null : i;
    return i;
  };

  // 回傳這一步被打死的怪（之後 #5 拿去發經驗、金幣）
  G.combatTick = function (S, dt, hero) {
    const killed = [];
    if (S.dead) return killed;

    // 角色出手：累積時間，夠一次攻擊就打一下
    const t = G.targetIndex(S);
    if (t < 0) {
      S.heroTimer = 0; // 沒有怪就不蓄力，怪一出現才開始算
    } else {
      S.heroTimer += dt;
      const gap = 1 / hero.attacksPerSec;
      while (S.heroTimer >= gap) {
        S.heroTimer -= gap;
        const i = G.targetIndex(S);
        if (i < 0) break;
        const m = S.monsters[i];
        m.hp -= hero.attack;
        if (m.hp <= 0) { m.hp = 0; killed.push(m); S.monsters[i] = null; }
      }
    }

    // 怪物出手：每隻各自計時
    for (const m of S.monsters) {
      if (!m) continue;
      m.atkTimer = (m.atkTimer || 0) + dt;
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
