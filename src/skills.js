// 技能：只負責「角色這次出手要放哪招、打到誰、扣多少魔力」。普通攻擊也在這裡（沒技能可放時用）。
// 數字來源：data/skills.js（照抄 poe2db）＋ data/skillPlay.js（放置玩法怎麼用）。傷害公式見 skillPlay.js 開頭。
window.G = window.G || {};
(function () {
  const HERO = { x: 0, y: 0 };
  const rand = (a, b) => a + Math.random() * (b - a);
  const gem = id => DATA.skills.gems[id];
  const play = id => DATA.skillPlay.skills[id];

  // 寶石等級：照 poe2db「需要等級」欄，人物等級到了就升（最多 20 級）
  G.gemLevel = function (id, heroLevel) {
    let lv = 1;
    for (const r of gem(id).levels.rows) if (+r[1] <= heroLevel && +r[0] <= 20) lv = +r[0];
    return lv;
  };

  // 耗魔：照 poe2db 每級的「魔力」欄；沒有這欄的技能（法杖技能）是 0
  G.skillManaCost = function (id, heroLevel) {
    const g = gem(id), col = g.levels.columns.indexOf("魔力");
    if (col < 0) return g.manaCost ? g.manaCost[0] : 0;
    return +g.levels.rows[G.gemLevel(id, heroLevel) - 1][col];
  };

  // Base Damage 欄的第 n 個 %（負數從後面數），例如碎骨 "100%, 100%, 100%, 200%"
  const basePct = (id, n) => {
    const g = gem(id), col = g.levels.columns.indexOf("Base Damage");
    const list = g.levels.rows[0][col].split(",").map(x => parseFloat(x) / 100);
    return list[n < 0 ? list.length + n : n];
  };

  // 法術：第 1 級傷害 ÷ 職業 Lv1 攻擊力 → 倍率範圍
  const spellMult = (id, hero) => {
    const g = gem(id), col = g.levels.columns.findIndex(c => /造成 \d+ 至 \d+/.test(c));
    const [lo, hi] = g.levels.rows[0][col].split(",").map(Number);
    return [lo / hero.cls.attack, hi / hero.cls.attack];
  };
  G.spellMult = spellMult;

  const hitAll = (S, list, dmg, killed) => { for (const m of list) G.hitMonster(S, m, dmg, killed); };
  const within = (S, c, r) => S.monsters.filter(m => m.hp > 0 && G.dist(m, c) <= r);
  const nearest = (S, rangeM) => {
    let best = null, bd = Infinity;
    for (const m of S.monsters) { const d = G.dist(m, HERO); if (m.hp > 0 && d <= rangeM && d < bd) { best = m; bd = d; } }
    return best;
  };

  // 每招的「計畫」：現在放得出去嗎？放了打誰？放不出去就回傳 null
  const PLAN = {
    projectile(S, hero, id, p) {
      const t = nearest(S, p.rangeM);
      return t && { dur: gem(id).castTimeSec, fire(killed) {
        const [lo, hi] = spellMult(id, hero);
        G.hitMonster(S, t, Math.round(rand(lo, hi) * hero.attack), killed);
        S.fx.push({ type: "bolt", x: t.x, y: t.y, age: 0, life: 0.25 });
      } };
    },
    area(S, hero, id, p) {
      let best = null, bn = 0;
      for (const m of S.monsters) {
        if (m.hp <= 0 || G.dist(m, HERO) > p.rangeM) continue;
        const n = within(S, m, p.radiusM).length;
        if (n > bn) { best = m; bn = n; }
      }
      if (!best || bn < (p.minTargets || 1)) return null;
      const c = { x: best.x, y: best.y };
      return { dur: gem(id).castTimeSec, fire(killed) {
        const hit = within(S, c, p.radiusM), [lo, hi] = spellMult(id, hero);
        hitAll(S, hit, Math.round(rand(lo, hi) * hero.attack), killed);
        S.fx.push({ type: "circle", x: c.x, y: c.y, r: p.radiusM, age: 0, life: 0.35 });
        return `${gem(id).name} 擊中 ${hit.length} 隻`;
      } };
    },
    melee(S, hero, id, p) {
      const t = G.pickTarget(S, hero);
      return t && { dur: 1 / (hero.attacksPerSec * (gem(id).attackSpeedPct || 100) / 100), fire(killed) {
        G.hitMonster(S, t, Math.round(basePct(id, p.hitPctColumn) * hero.attack), killed);
        S.fx.push({ type: "bolt", x: t.x, y: t.y, age: 0, life: 0.2 });
        S.shockCount = (S.shockCount || 0) + 1;
        if (S.shockCount % p.shockEvery) return;
        const hit = within(S, t, p.shockRadiusM);
        hitAll(S, hit, Math.round(basePct(id, p.shockPctColumn) * hero.attack), killed);
        S.fx.push({ type: "circle", x: t.x, y: t.y, r: p.shockRadiusM, age: 0, life: 0.35 });
        return `${gem(id).name} 震波 擊中 ${hit.length} 隻`;
      } };
    },
    slam(S, hero, id, p) {
      const reach = Math.max(...p.stages.map(s => s.distM + s.radiusM));
      const t = nearest(S, Math.min(reach, hero.attackRangeM + 1));
      if (!t) return null;
      const d = G.dist(t, HERO) || 1, ux = t.x / d, uy = t.y / d;
      const centers = p.stages.map(s => ({ x: ux * s.distM, y: uy * s.distM, r: s.radiusM, pct: basePct(id, s.pctColumn) }));
      if (within(S, centers[0], centers[0].r).length < (p.minTargets || 1)) return null;
      return { dur: 1 / hero.attacksPerSec + (p.extraTimeSec || 0), fire(killed) {
        let total = 0;
        for (const c of centers) {
          const hit = within(S, c, c.r);
          total += hit.length;
          hitAll(S, hit, Math.round(c.pct * hero.attack), killed);
          S.fx.push({ type: "circle", x: c.x, y: c.y, r: c.r, age: 0, life: 0.4 });
        }
        return `${gem(id).name} 兩段共擊中 ${total} 隻`;
      } };
    }
  };

  // 普通攻擊：打鎖定的目標（女巫、決鬥者都有；技能都放不了時用）
  const basicPlan = (S, hero) => {
    const t = G.pickTarget(S, hero);
    return t && { id: "basic", cost: 0, dur: 1 / hero.attacksPerSec, fire(killed) { G.hitMonster(S, t, hero.attack, killed); } };
  };

  G.heroSkills = hero => (DATA.skillPlay.order[hero.id] || []).filter(id => gem(id) && play(id));

  // 照順序挑第一招放得出去的
  G.chooseAction = function (S, hero) {
    for (const id of G.heroSkills(hero)) {
      if (S.skillOn[id] === false) continue;
      const cost = G.skillManaCost(id, hero.level);
      if (S.mp < cost) continue;
      const plan = PLAN[play(id).kind](S, hero, id, play(id));
      if (plan) return { id, cost, ...plan };
    }
    return basicPlan(S, hero);
  };

  // 每步呼叫：出手時間到了就放；放完馬上挑下一招
  G.heroActTick = function (S, dt, hero, killed) {
    S.fx = S.fx.filter(f => (f.age += dt) < f.life);
    if (!S.pending) S.pending = G.chooseAction(S, hero);
    if (!S.pending) { S.heroTimer = 0; return; }
    S.heroTimer += dt;
    while (S.pending && S.heroTimer >= S.pending.dur) {
      S.heroTimer -= S.pending.dur;
      // 出手瞬間重新看一次（怪可能走了、死了）
      const now = S.pending.id === "basic" ? basicPlan(S, hero) : (S.mp >= S.pending.cost && PLAN[play(S.pending.id).kind](S, hero, S.pending.id, play(S.pending.id)));
      if (now) {
        S.mp -= S.pending.cost;
        const msg = now.fire(killed);
        if (msg) S.msgs.push(msg);
        S.lastCast = { id: S.pending.id, t: 0.4 };
      }
      S.pending = G.chooseAction(S, hero);
      if (!S.pending) { S.heroTimer = 0; break; }
    }
    if (S.lastCast) S.lastCast.t -= dt;
  };
})();
