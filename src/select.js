// 選角畫面：只負責「選哪個職業」，選好後把職業交給 onStart。
window.G = window.G || {};
G.showSelect = function (classes, onStart) {
  const screen = document.getElementById("selectScreen");
  const list = document.getElementById("classList");
  const startBtn = document.getElementById("startBtn");
  let picked = null;

  list.innerHTML = classes.list.map(c => `
    <button class="classCard" data-id="${c.id}">
      <b>${c.name}</b>
      <span class="hint">${c.desc}</span>
      <span class="classStats num">生命 ${c.maxLife}　攻擊 ${c.attack}　攻速 ${c.attacksPerSec.toFixed(1)}/秒</span>
    </button>`).join("");

  list.onclick = e => {
    const card = e.target.closest(".classCard");
    if (!card) return;
    picked = classes.list.find(c => c.id === card.dataset.id);
    list.querySelectorAll(".classCard").forEach(el => el.classList.toggle("picked", el === card));
    startBtn.disabled = false;
  };

  startBtn.disabled = true;
  startBtn.onclick = () => {
    if (!picked) return;
    screen.hidden = true;
    onStart({ ...classes.base, ...picked, cls: { ...picked } }); // cls 留著 Lv1 數值，升級時用
  };
  screen.hidden = false;
};
