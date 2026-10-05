// 生怪：只負責「什麼時候、在哪一格出哪隻怪」。不碰畫面、不碰戰鬥。
window.G = window.G || {};
(function () {
  // 照等級算出一隻怪的數值：生命、攻擊 = 基礎值 × 等級
  G.makeMonster = function (type, level) {
    return {
      id: type.id, name: type.name, level,
      maxLife: type.baseLife * level,
      hp: type.baseLife * level,
      attack: type.baseAttack * level,
      attacksPerSec: type.attacksPerSec,
      atkTimer: 1 / type.attacksPerSec - (type.firstAttackSec ?? 1 / type.attacksPerSec), // 讓第一下在 firstAttackSec 秒後
      exp: type.baseExp * level,
      gold: type.gold.map(g => g * level),
      reviveDropChance: type.reviveDropChance
    };
  };

  const rand = ([a, b]) => a + Math.random() * (b - a);

  // 每次遊戲迴圈呼叫：每個空格各自倒數，倒到 0 就在那格出 1 隻怪。
  // 格子剛空出來（例如怪被打死）時，重新抽一個 slotCooldownSec 範圍內的秒數。
  // 回傳這一步出現的怪（可能好幾隻）。
  G.spawnTick = function (S, dt, rules, types, level) {
    const born = [];
    S.monsters.forEach((m, i) => {
      if (m) { S.slotTimers[i] = null; return; }
      if (S.slotTimers[i] == null) S.slotTimers[i] = rand(rules.slotCooldownSec);
      S.slotTimers[i] -= dt;
      if (S.slotTimers[i] > 0) return;
      const type = types[Math.floor(Math.random() * types.length)];
      S.monsters[i] = G.makeMonster(type, level);
      S.slotTimers[i] = null;
      born.push(S.monsters[i]);
    });
    return born;
  };

  // 開局：每格第一隻怪的倒數
  G.firstTimers = rules => Array.from({ length: rules.maxMonsters }, () => rand(rules.firstSpawnSec));
})();
