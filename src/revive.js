// 死亡與復活：只負責「怪掉復活道具、角色倒下後怎麼回來」。數字在 data/rules.js 的 revive、data/monsters.js 的 reviveDropChance。
window.G = window.G || {};
(function () {
  // 打死的怪照機率掉復活道具。回傳要顯示的訊息。
  G.reviveDrops = function (S, killed) {
    let got = 0;
    for (const m of killed) if (Math.random() < (m.reviveDropChance || 0)) got++;
    if (!got) return [];
    S.revives += got;
    return [`撿到復活道具 ×${got}（共 ${S.revives}）`];
  };

  // 復活：生命、魔力回到資料設定的 %；怪留在原位（資料設 clearMonsters 才清空場上、下一群重新倒數）
  G.revive = function (S, hero, rules) {
    const r = rules.revive;
    S.dead = false;
    S.hp = Math.max(1, Math.round(hero.maxLife * r.hpPct / 100));
    S.mp = Math.round(hero.maxMana * r.mpPct / 100);
    if (r.clearMonsters) { S.monsters = []; S.target = null; S.grounds = []; S.fx = []; S.packTimer = G.firstPackTimer(rules); }
    S.pending = null; S.heroTimer = 0;
  };

  // 剛倒下時呼叫：有道具就自動復活並扣 1；沒有就停在死亡畫面（S.dead 保持 true，遊戲停住）
  G.onDeath = function (S, hero, rules) {
    if (S.revives > 0) {
      S.revives--;
      G.revive(S, hero, rules);
      return [`你倒下了，自動用掉 1 個復活道具（剩 ${S.revives}）`];
    }
    return ["你倒下了，沒有復活道具"];
  };

  // 死亡畫面：沒道具時顯示，按「復活」（免費）才回到戰鬥
  G.setupDeathScreen = function (S, hero, rules) {
    const box = document.getElementById("deathScreen");
    document.getElementById("reviveBtn").addEventListener("click", e => {
      e.stopPropagation(); // 不算點戰場加速
      if (!S.dead) return;
      G.revive(S, hero, rules);
      G.feed("免費復活，回到戰鬥");
      G.render(S, hero);
      G.showDeath();
    });
    G.showDeath = () => { box.hidden = !S.dead; };
  };
})();
