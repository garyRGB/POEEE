// 「自動」頁的技能設定：只負責每招的開關和「魔力高於 X% 才放」。規則判斷在 src/skills.js。
window.G = window.G || {};
G.setupSkillRules = function (S, hero) {
  const box = document.getElementById("skillRules"), hint = document.getElementById("skillRuleHint");
  const gem = id => DATA.skills.gems[id];

  function draw() {
    box.innerHTML = G.heroSkills(hero).map(id => `
      <div class="ruleRow">
        <label class="ruleOn"><input type="checkbox" data-on="${id}" ${S.skillOn[id] !== false ? "checked" : ""}> ${gem(id).name}</label>
        <label class="autoRow small">魔力高於 <input type="text" inputmode="numeric" maxlength="2" autocomplete="off" data-mp="${id}" value="${S.skillMinMp[id] || 0}"> % 才放</label>
      </div>`).join("");
  }

  box.onchange = e => {
    const on = e.target.dataset.on, mp = e.target.dataset.mp;
    if (on) {
      S.skillOn[on] = e.target.checked; S.pending = null;
      hint.textContent = `${gem(on).name} ${e.target.checked ? "開啟" : "關閉"}`;
    } else if (mp) {
      const v = e.target.value.trim();
      if (/^\d{1,2}$/.test(v)) {
        S.skillMinMp[mp] = +v; S.pending = null;
        hint.textContent = +v ? `${gem(mp).name}：魔力高於 ${+v}% 才放` : `${gem(mp).name}：魔力夠就放`;
      } else {
        e.target.value = S.skillMinMp[mp] || 0;
        hint.textContent = `請輸入 0～99 的整數（0＝魔力夠就放），已保留 ${S.skillMinMp[mp] || 0}%`;
      }
    }
  };
  document.getElementById("autoBtn").addEventListener("click", () => { hint.textContent = ""; draw(); });
  draw();
};
