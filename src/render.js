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
    $("exp").textContent = S.exp;
    $("gold").textContent = S.gold;
    $("orb").textContent = S.orb;
    $("lv").textContent = hero.level;
    $("heroHp").style.width = Math.max(0, S.hp / hero.maxLife * 100) + "%";
    $("heroHpText").textContent = Math.max(0, Math.round(S.hp));
    $("potions").textContent = S.potions;
    $("revives").textContent = S.revives;

    $("monsters").innerHTML = S.monsters.map(m => m
      ? `<div class="unit mon"><div class="nm">${m.name} <small class="lvTag">Lv${m.level}</small></div>
           <div class="hpb"><i style="width:${Math.max(0, m.hp / m.maxLife * 100)}%"></i><span class="num">${Math.max(0, Math.round(m.hp))}</span></div></div>`
      : `<div class="unit empty">空位</div>`).join("");

    $("stats").innerHTML = [
      ["攻擊", hero.attack], ["生命", hero.maxLife],
      ["攻速", hero.attacksPerSec.toFixed(2) + "/秒"], ["護甲", hero.armor],
      ["每秒傷害", (hero.attack * hero.attacksPerSec).toFixed(1)], ["藥水回復", hero.potionHealPct + "%"]
    ].map(([a, b]) => `<div><span>${a}</span><span>${b}</span></div>`).join("");
  };

  G.feed = function (text) {
    const f = $("feed"), p = document.createElement("p");
    p.textContent = text;
    f.prepend(p);
    while (f.children.length > 3) f.lastChild.remove();
  };
})();
