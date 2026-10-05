// 「自動」頁面：只負責讓玩家改自動規則的數字（例如幾 % 喝水）。不碰戰鬥。
window.G = window.G || {};
G.setupAutoPanel = function (S) {
  const $ = id => document.getElementById(id);
  const sheet = $("autoSheet"), input = $("potPct"), hint = $("potHint");
  const rule = S.autoRules.find(r => r.do === "use_potion");

  $("autoBtn").disabled = false;
  $("autoBtn").onclick = () => { input.value = rule.value; hint.textContent = ""; sheet.hidden = false; };
  $("autoClose").onclick = () => { save(); sheet.hidden = true; };
  sheet.onclick = e => { if (e.target === sheet) { save(); sheet.hidden = true; } };
  input.onchange = save;

  // 只收 1～99 的整數；打錯就保留原本的數字並提示
  function save() {
    const v = input.value.trim();
    if (/^\d{1,2}$/.test(v) && +v >= 1 && +v <= 99) {
      rule.value = +v;
      hint.textContent = `已設定：生命低於 ${rule.value}% 自動喝藥水`;
    } else {
      input.value = rule.value;
      hint.textContent = `請輸入 1～99 的整數，已保留 ${rule.value}%`;
    }
  }
};
