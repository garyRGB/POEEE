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

  // 寶石現在這一級的那一列（照 poe2db；人物等級到了寶石就升級）
  const gemRow = (id, hero) => gem(id).levels.rows[G.gemLevel(id, hero.level) - 1];

  // 攻擊技能：Base Damage 欄的第 n 個 %（負數從後面數），例如碎骨第 1 級 "100%, 100%, 100%, 200%"；會隨寶石等級變高
  const basePct = (id, n, hero) => {
    const g = gem(id), col = g.levels.columns.indexOf("Base Damage");
    const list = gemRow(id, hero)[col].split(",").map(x => parseFloat(x) / 100);
    return list[n < 0 ? list.length + n : n];
  };
  // 攻擊技能一下的傷害 ＝ 武器傷害（隨機一下）× 技能倍率（POE2）
  const atk = (hero, pct) => pct * G.weaponRoll(hero);

  // 法術：直接用寶石這一級的傷害（例：混沌弩箭第 1 級 5～9），不看武器
  const spellDmg = (id, hero) => {
    const g = gem(id), col = g.levels.columns.findIndex(c => /造成 \d+ 至 \d+/.test(c));
    return gemRow(id, hero)[col].split(",").map(Number);
  };
  G.spellDmg = spellDmg;

  // 這招現在的參數：data/skillPlay.js 的設定，再套上插槽裡的輔助寶石（src/sockets.js）
  const eff = (S, id) => {
    const p = play(id), m = G.skillMods(S, id), r = m.radiusMult, scale = v => v && v * r;
    return { ...p, mods: m, radiusM: scale(p.radiusM), shockRadiusM: scale(p.shockRadiusM), spreadRadiusM: scale(p.spreadRadiusM),
      stages: p.stages && p.stages.map(s => ({ ...s, radiusM: s.radiusM * r })),
      durationSec: p.durationSec && p.durationSec * m.durMult, delaySec: p.delaySec && p.delaySec * m.durMult };
  };
  G.skillEffective = eff;
  // 耗魔要算輔助寶石的消耗加成
  G.skillCost = (S, hero, id) => Math.round(G.skillManaCost(id, hero.level) * G.skillMods(S, id).costMult);

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
      const t = nearest(S, p.rangeM), mo = p.mods;
      return t && { dur: gem(id).castTimeSec / mo.speedMult, fire(killed) {
        const [lo, hi] = spellDmg(id, hero), mult = mo.hitMult * mo.dmgMult;
        // 主目標＋額外投射物打最近的其他怪；每一發可以再連鎖
        const firsts = S.monsters.filter(m => m.hp > 0 && G.dist(m, HERO) <= p.rangeM)
          .sort((a, b) => G.dist(a, HERO) - G.dist(b, HERO)).slice(0, 1 + mo.extraProj);
        let hits = 0;
        for (const first of firsts) {
          let cur = first, from = HERO; const seen = new Set();
          for (let j = 0; cur && j <= mo.chain; j++) {
            seen.add(cur);
            S.fx.push({ type: "bolt", x: cur.x, y: cur.y, fx: from.x, fy: from.y, age: 0, life: 0.25 });
            const at = { x: cur.x, y: cur.y };
            G.hitMonster(S, cur, Math.round(rand(lo, hi) * mult), killed); hits++;
            from = at;
            let next = null, nd = Infinity;
            for (const m of S.monsters) { const d = G.dist(m, at); if (m.hp > 0 && !seen.has(m) && d <= mo.chainRangeM && d < nd) { next = m; nd = d; } }
            cur = next;
          }
        }
        if (hits > 1) return `${gem(id).name} 擊中 ${hits} 次`;
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
      const mo = p.mods;
      return { dur: gem(id).castTimeSec / mo.speedMult, fire(killed) {
        const hit = within(S, c, p.radiusM), [lo, hi] = spellDmg(id, hero);
        hitAll(S, hit, Math.round(rand(lo, hi) * mo.hitMult * mo.dmgMult * mo.areaMult), killed);
        S.fx.push({ type: "circle", x: c.x, y: c.y, r: p.radiusM, age: 0, life: 0.35 });
        return `${gem(id).name} 擊中 ${hit.length} 隻`;
      } };
    },
    melee(S, hero, id, p) {
      const t = G.pickTarget(S, hero);
      const mo = p.mods;
      return t && { dur: 1 / (hero.attacksPerSec * (gem(id).attackSpeedPct || 100) / 100) / mo.speedMult, fire(killed) {
        G.hitMonster(S, t, Math.round(atk(hero, basePct(id, p.hitPctColumn, hero)) * mo.hitMult * mo.dmgMult), killed);
        S.fx.push({ type: "bolt", x: t.x, y: t.y, age: 0, life: 0.2 });
        S.shockCount = (S.shockCount || 0) + 1;
        if (S.shockCount % p.shockEvery) return;
        const hit = within(S, t, p.shockRadiusM);
        hitAll(S, hit, Math.round(atk(hero, basePct(id, p.shockPctColumn, hero)) * mo.hitMult * mo.dmgMult * mo.areaMult), killed);
        S.fx.push({ type: "circle", x: t.x, y: t.y, r: p.shockRadiusM, age: 0, life: 0.35 });
        return `${gem(id).name} 震波 擊中 ${hit.length} 隻`;
      } };
    },
    slam(S, hero, id, p) {
      const reach = Math.max(...p.stages.map(s => s.distM + s.radiusM));
      const t = nearest(S, Math.min(reach, hero.attackRangeM + 1));
      if (!t) return null;
      const d = G.dist(t, HERO) || 1, ux = t.x / d, uy = t.y / d;
      const centers = p.stages.map(s => ({ x: ux * s.distM, y: uy * s.distM, r: s.radiusM, pct: basePct(id, s.pctColumn, hero) }));
      if (within(S, centers[0], centers[0].r).length < (p.minTargets || 1)) return null;
      const mo = p.mods;
      return { dur: (1 / hero.attacksPerSec + (p.extraTimeSec || 0)) / mo.speedMult, fire(killed) {
        let total = 0;
        for (const c of centers) {
          const hit = within(S, c, c.r);
          total += hit.length;
          hitAll(S, hit, Math.round(atk(hero, c.pct) * mo.hitMult * mo.dmgMult * mo.areaMult), killed);
          S.fx.push({ type: "circle", x: c.x, y: c.y, r: c.r, age: 0, life: 0.4 });
        }
        return `${gem(id).name} 兩段共擊中 ${total} 隻`;
      } };
    }
  };

  // 瘟疫：每秒傷害＝poe2db 寶石這一級的每秒傷害（第 1 級 2）
  const dotPerSec = (id, hero) => {
    const g = gem(id), col = g.levels.columns.findIndex(c => /每秒造成/.test(c));
    return +gemRow(id, hero)[col];
  };
  PLAN.dot = function (S, hero, id, p) {
    let best = null, bd = Infinity;
    for (const m of S.monsters) {
      const d = G.dist(m, HERO);
      if (m.hp <= 0 || m.contagion || d > p.rangeM) continue;
      if (within(S, m, p.spreadRadiusM).length - 1 < (p.minNearby || 0)) continue;
      if (d < bd) { best = m; bd = d; }
    }
    const mo = p.mods;
    return best && { dur: gem(id).castTimeSec / mo.speedMult, fire() {
      G.applyContagion(best, dotPerSec(id, hero) * mo.dmgMult, p.durationSec, 0, p.spreadRadiusM);
      S.fx.push({ type: "ring", x: best.x, y: best.y, r: 0.5, age: 0, life: 0.3 });
      return `${gem(id).name} 感染 1 隻`;
    } };
  };

  // 震地：衝擊打一片，留下碎裂地面，delaySec 秒後餘震；地面有上限、不能疊在現有地面上
  PLAN.quake = function (S, hero, id, p) {
    if (S.grounds.length >= p.maxGrounds) return null;
    // 由近到遠找第一個「沒疊到現有地面、範圍內怪夠多」的位置
    const cand = S.monsters.filter(m => m.hp > 0 && G.dist(m, HERO) <= hero.attackRangeM + p.radiusM)
      .sort((a, b) => G.dist(a, HERO) - G.dist(b, HERO));
    let c = null;
    for (const t of cand) {
      const d = G.dist(t, HERO) || 1, reach = Math.min(d, hero.attackRangeM);
      const at = { x: t.x / d * reach, y: t.y / d * reach };
      if (S.grounds.some(g => G.dist(g, at) < g.r)) continue;
      if (within(S, at, p.radiusM).length < (p.minTargets || 1)) continue;
      c = at; break;
    }
    if (!c) return null;
    const mo = p.mods, k = mo.hitMult * mo.dmgMult * mo.areaMult;
    return { dur: 1 / (hero.attacksPerSec * (gem(id).attackSpeedPct || 100) / 100) / mo.speedMult, fire(killed) {
      const hit = within(S, c, p.radiusM);
      hitAll(S, hit, Math.round(atk(hero, basePct(id, p.slamPctColumn, hero)) * k), killed);
      S.grounds.push({ x: c.x, y: c.y, r: p.radiusM, remain: p.delaySec, total: p.delaySec, name: gem(id).name,
        dmg: Math.round(atk(hero, basePct(id, p.aftershockPctColumn, hero)) * k) });
      S.fx.push({ type: "circle", x: c.x, y: c.y, r: p.radiusM, age: 0, life: 0.35 });
      return `${gem(id).name} 擊中 ${hit.length} 隻，${+p.delaySec.toFixed(1)} 秒後餘震`;
    } };
  };

  // 普通攻擊：用武器打鎖定的目標（技能都放不了時用）。法杖不能攻擊（POE2），女巫沒有普通攻擊
  const basicPlan = (S, hero) => {
    if (!hero.attacksPerSec) return null;
    const t = G.pickTarget(S, hero);
    return t && { id: "basic", cost: 0, dur: 1 / hero.attacksPerSec, fire(killed) { G.hitMonster(S, t, Math.round(G.weaponRoll(hero)), killed); } };
  };

  G.heroSkills = hero => (DATA.skillPlay.order[hero.id] || []).filter(id => gem(id) && play(id));

  // 照順序挑第一招放得出去的
  G.chooseAction = function (S, hero) {
    for (const id of G.heroSkills(hero)) {
      if (S.skillOn[id] === false) continue;
      const cost = G.skillCost(S, hero, id);
      if (S.mp < cost) continue;
      if (S.mp / hero.maxMana * 100 < (S.skillMinMp[id] || 0)) continue; // 「魔力高於 X% 才放」
      const plan = PLAN[play(id).kind](S, hero, id, eff(S, id));
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
      const now = S.pending.id === "basic" ? basicPlan(S, hero) : (S.mp >= S.pending.cost && PLAN[play(S.pending.id).kind](S, hero, S.pending.id, eff(S, S.pending.id)));
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
