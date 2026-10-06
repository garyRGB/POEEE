// 輔助寶石插槽：只負責「哪顆插在哪、能不能插、插了之後技能數值怎麼變」。不碰畫面。
// 規則照 poe2db：技能要有輔助寶石要求的標籤；同一個技能不能插多個同類別的輔助寶石。
window.G = window.G || {};
(function () {
  const sp = id => DATA.supportPlay.supports[id];
  const supGem = id => DATA.supports.gems[id];

  G.initSockets = hero => Object.fromEntries(G.heroSkills(hero).map(id => [id, Array(DATA.supportPlay.socketsPerSkill).fill(null)]));
  G.supportIds = () => Object.keys(DATA.supportPlay.supports).filter(id => supGem(id));

  G.supportFits = (skillId, supId) => sp(supId).needTags.some(t => DATA.skills.gems[skillId].tags.includes(t));
  G.supportUsed = (S, supId) => Object.values(S.sockets).flat().filter(x => x === supId).length;

  // 插得上去嗎？回傳 null＝可以；不行就回傳原因
  G.socketProblem = function (S, skillId, slot, supId) {
    if (!G.supportFits(skillId, supId)) return `${supGem(supId).name} 只能插在「${sp(supId).needTags.join("或")}」技能`;
    const others = S.sockets[skillId].filter((x, i) => i !== slot && x);
    if (others.some(o => supGem(o).category === supGem(supId).category)) return `同一個技能不能插兩顆「${supGem(supId).category}」類別`;
    const usedElsewhere = G.supportUsed(S, supId) - (S.sockets[skillId][slot] === supId ? 1 : 0);
    if (usedElsewhere >= (DATA.supportPlay.stock[supId] || 0)) return `${supGem(supId).name} 只有 ${DATA.supportPlay.stock[supId] || 0} 顆，已經插在別的技能`;
    return null;
  };

  // 插或拔（supId 給 null 就是拔掉）；回傳錯誤訊息或 null
  G.setSocket = function (S, skillId, slot, supId) {
    if (supId) { const why = G.socketProblem(S, skillId, slot, supId); if (why) return why; }
    S.sockets[skillId][slot] = supId;
    S.pending = null; // 下一次出手重新算
    return null;
  };

  // 插上的輔助寶石合起來，讓技能怎麼變（倍率都是相乘）
  G.skillMods = function (S, skillId) {
    const m = { hitMult: 1, dmgMult: 1, areaMult: 1, radiusMult: 1, durMult: 1, costMult: 1, speedMult: 1, chain: 0, extraProj: 0, chainRangeM: 0 };
    for (const id of (S.sockets && S.sockets[skillId]) || []) {
      if (!id) continue;
      const s = sp(id);
      if (s.hitDamageLessPct) m.hitMult *= 1 - s.hitDamageLessPct / 100;
      if (s.damageLessPct) m.dmgMult *= 1 - s.damageLessPct / 100;
      if (s.areaDamageMorePct) m.areaMult *= 1 + s.areaDamageMorePct / 100;
      if (s.areaLessPct) m.radiusMult *= Math.sqrt(1 - s.areaLessPct / 100);
      if (s.durationMorePct) m.durMult *= 1 + s.durationMorePct / 100;
      if (s.costMultiplierPct) m.costMult *= s.costMultiplierPct / 100;
      if (s.skillSpeedLessPct) m.speedMult *= 1 - s.skillSpeedLessPct / 100;
      if (s.chainPlus) { m.chain += s.chainPlus; m.chainRangeM = Math.max(m.chainRangeM, s.chainRangeM || 3); }
      if (s.extraProjectiles) m.extraProj += s.extraProjectiles;
    }
    return m;
  };
})();
