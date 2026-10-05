// POEEE 遊戲程式。數值都從 data/ 讀，這裡只放規則和畫面。
const $ = id => document.getElementById(id);
const { hero: H, rules: R } = DATA;

/* ───── 狀態 ───── */
const S = {
  hp: H.maxLife,
  exp: 0, gold: 0, orb: 0,
  potions: H.potions, revives: H.revives,
  stage: 1, kills: 0,
  monsters: Array(R.maxMonsters).fill(null) // 6 個格子，null = 空位
};

/* ───── 畫面 ───── */
const SLOTS = ["武器", "頭部", "副手", "手套", "胸甲", "項鍊", "戒指", "腰帶", "戒指", "", "鞋子", ""];

function renderStatic() {
  $("heroName").textContent = H.name;
  $("heroTitle").textContent = `${H.name}・${H.title}`;
  $("killsNeed").textContent = R.killsPerStage;
  $("doll").innerHTML = SLOTS.map(n => n ? `<div class="slot"><b>${n}</b></div>` : "<div></div>").join("");
}

function render() {
  $("exp").textContent = S.exp;
  $("gold").textContent = S.gold;
  $("orb").textContent = S.orb;
  $("lv").textContent = H.level;
  $("heroHp").style.width = Math.max(0, S.hp / H.maxLife * 100) + "%";
  $("heroHpText").textContent = Math.max(0, Math.round(S.hp));
  $("potions").textContent = S.potions;
  $("revives").textContent = S.revives;
  $("kills").textContent = S.kills;
  $("stage").textContent = S.stage;

  $("monsters").innerHTML = S.monsters.map(m => m
    ? `<div class="unit"><div class="nm">${m.name}</div>
         <div class="hpb"><i style="width:${Math.max(0, m.hp / m.maxLife * 100)}%"></i><span class="num">${Math.max(0, Math.round(m.hp))}</span></div></div>`
    : `<div class="unit empty">空位</div>`).join("");

  $("stats").innerHTML = [
    ["攻擊", H.attack], ["生命", H.maxLife],
    ["攻速", H.attacksPerSec.toFixed(2) + "/秒"], ["護甲", H.armor],
    ["每秒傷害", (H.attack * H.attacksPerSec).toFixed(1)], ["藥水回復", H.potionHealPct + "%"]
  ].map(([a, b]) => `<div><span>${a}</span><span>${b}</span></div>`).join("");
}

renderStatic();
render();
$("feed").innerHTML = "<p>等待怪物出現…</p>";
