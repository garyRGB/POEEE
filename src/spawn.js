// 生怪：只負責「什麼時候、從哪個方向、來一群幾隻」。不碰畫面、不碰戰鬥。
window.G = window.G || {};
(function () {
  const rand = ([a, b]) => a + Math.random() * (b - a);
  const randInt = ([a, b]) => a + Math.floor(Math.random() * (b - a + 1));

  // 照等級算出一隻怪的數值：生命 ＝ 基礎值 ×（1 ＋ 成長 ×（等級 − 1））；沒寫成長就是跟等級成正比
  const grow = (base, g, level) => base * (1 + (g ?? 1) * (level - 1));
  G.makeMonster = function (type, level) {
    const life = grow(type.baseLife, type.lifeGrowth, level);
    return {
      id: type.id, name: type.name, level,
      maxLife: life,
      hp: life,
      attack: grow(type.baseAttack, type.attackGrowth, level),
      attacksPerSec: type.attacksPerSec,
      atkTimer: 1 / type.attacksPerSec - (type.firstAttackSec ?? 1 / type.attacksPerSec), // 貼身後 firstAttackSec 秒打第一下
      moveSpeed: type.moveSpeed, meleeRangeM: type.meleeRangeM, radiusM: type.radiusM,
      exp: type.baseExp * level,
      gold: type.gold.map(g => g * level),
      reviveDropChance: type.reviveDropChance,
      x: 0, y: 0
    };
  };

  G.firstPackTimer = rules => rand(rules.firstPackSec);

  // 每次遊戲迴圈呼叫：倒數到 0 就從隨機一個方向的框外來一群。回傳這一步出現的怪。
  G.spawnTick = function (S, dt, rules, types, level) {
    S.packTimer -= dt;
    if (S.packTimer > 0) return [];
    S.packTimer = rand(rules.packIntervalSec);
    const n = Math.min(randInt(rules.packSize), rules.maxMonsters - S.monsters.length);
    if (n <= 0) return [];
    const dir = Math.floor(Math.random() * 8), base = G.spawnPoint(dir, rules.spawnOutsideM);
    const type = types[Math.floor(Math.random() * types.length)];
    const born = [];
    for (let i = 0; i < n; i++) {
      const m = G.makeMonster(type, level);
      m.x = base.x + (Math.random() - 0.5) * 1.6;
      m.y = base.y + (Math.random() - 0.5) * 1.6;
      m.dir = dir;
      S.monsters.push(m);
      born.push(m);
    }
    S.lastPack = { dir, n };
    return born;
  };
})();
