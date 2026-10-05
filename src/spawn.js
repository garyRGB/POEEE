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

  // 每次遊戲迴圈呼叫：有空格才倒數冷卻，時間到就補一隻。
  // 滿格時冷卻停在最大值，空出格子後要等滿一次冷卻（這樣點擊加速才有用）。
  G.spawnTick = function (S, dt, rules, types, level) {
    const slot = S.monsters.indexOf(null);
    if (slot < 0) { S.spawnTimer = S.spawnCooldown; return null; }
    S.spawnTimer = Math.max(0, S.spawnTimer - dt);
    if (S.spawnTimer > 0) return null;
    const type = types[Math.floor(Math.random() * types.length)];
    const m = G.makeMonster(type, level);
    S.monsters[slot] = m;
    S.spawnTimer = S.spawnCooldown;
    return m;
  };
})();
