// 畫面：只負責把狀態畫出來，不改數字。
window.G = window.G || {};
(function () {
  const $ = id => document.getElementById(id);
  const SLOTS = ["武器", "頭部", "副手", "手套", "胸甲", "項鍊", "戒指", "腰帶", "戒指", "", "鞋子", ""];

  G.renderStatic = function (hero) {
    $("heroName").textContent = hero.name;
    $("heroTitle").textContent = hero.name;
    $("doll").innerHTML = SLOTS.map(n => n ? `<div class="slot"><b>${n}</b></div>` : "<div></div>").join("");
  };

  G.render = function (S, hero) {
    $("exp").textContent = `${S.exp}/${G.expToNext(hero.level, DATA.rules)}`;
    $("gold").textContent = S.gold;
    $("diamond").textContent = S.diamond;
    $("lv").textContent = hero.level;
    $("heroHp").style.width = Math.max(0, S.hp / hero.maxLife * 100) + "%";
    $("heroHpText").textContent = Math.max(0, Math.round(S.hp));
    $("heroMp").style.width = Math.max(0, S.mp / hero.maxMana * 100) + "%";
    $("heroMpText").textContent = Math.floor(S.mp);
    $("potions").textContent = S.potions;
    $("revives").textContent = S.revives;

    $("monCount").textContent = S.monsters.length;
    $("skillbar").innerHTML = G.heroSkills(hero).map(id => {
      const g = DATA.skills.gems[id], cost = G.skillCost(S, hero, id), n = S.sockets[id].filter(Boolean).length;
      const lit = S.lastCast && S.lastCast.id === id && S.lastCast.t > 0, off = S.skillOn[id] === false;
      return `<span class="skill${lit ? " lit" : ""}${off ? " off" : ""}${S.mp < cost ? " poor" : ""}" data-skill="${id}">${g.name}<small>${cost ? cost + " 魔" : "免魔"}・Lv${G.gemLevel(id, hero.level)}${n ? "・" + "◆".repeat(n) : ""}</small></span>`;
    }).join("");
    if (G.drawArena) G.drawArena(S, hero, DATA.rules);

    $("stats").innerHTML = [
      ["攻擊", hero.attack], ["生命", hero.maxLife],
      ["攻速", hero.attacksPerSec.toFixed(2) + "/秒"], ["護甲", hero.armor],
      ["每秒傷害", (hero.attack * hero.attacksPerSec).toFixed(1)], ["藥水回復", hero.potionHealPct + "%"],
      ["魔力", hero.maxMana], ["回魔", hero.manaRegen + "/秒"]
    ].map(([a, b]) => `<div><span>${a}</span><span>${b}</span></div>`).join("");
  };

  G.feed = function (text) {
    const f = $("feed"), p = document.createElement("p");
    p.textContent = text;
    f.prepend(p);
    while (f.children.length > 3) f.lastChild.remove();
  };
})();
