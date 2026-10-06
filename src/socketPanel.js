// 「角色」頁裡的「技能與輔助寶石」：只負責畫插槽、點了換寶石。規則在 src/sockets.js。
window.G = window.G || {};
G.setupSocketPanel = function (S, hero) {
  const box = document.getElementById("skillPanel"), hint = document.getElementById("socketHint");
  const gem = id => DATA.skills.gems[id], sup = id => DATA.supports.gems[id];
  let open = null; // 正在選的插槽 { skill, slot }

  function draw() {
    box.innerHTML = G.heroSkills(hero).map(id => {
      const slots = S.sockets[id].map((sid, i) => {
        const on = open && open.skill === id && open.slot === i;
        return `<button class="sock${sid ? " filled" : ""}${on ? " on" : ""}" data-skill="${id}" data-slot="${i}">${sid ? sup(sid).name : "＋ 空插槽"}</button>`;
      }).join("");
      let picker = "";
      if (open && open.skill === id) {
        const cur = S.sockets[id][open.slot];
        picker = `<div class="picker">` + G.supportIds().map(sid => {
          const why = sid === cur ? "插著" : G.socketProblem(S, id, open.slot, sid);
          return `<button class="pick" data-pick="${sid}" ${why ? "disabled" : ""}><b>${sup(sid).name}</b>
            <span>${DATA.supportPlay.supports[sid].text}</span>${why ? `<em>${why}</em>` : ""}</button>`;
        }).join("") + (cur ? `<button class="pick out" data-pick="">拔掉 ${sup(cur).name}</button>` : "") + `</div>`;
      }
      return `<div class="skillRow"><div class="skillHead"><b>${gem(id).name}</b><small>${gem(id).tags.join("・")}</small></div>
        <div class="socks">${slots}</div>${picker}</div>`;
    }).join("");
  }

  box.onclick = e => {
    const s = e.target.closest("[data-slot]"), p = e.target.closest("[data-pick]");
    if (s) {
      const k = { skill: s.dataset.skill, slot: +s.dataset.slot };
      open = open && open.skill === k.skill && open.slot === k.slot ? null : k;
      hint.textContent = open ? "選一顆輔助寶石插進去" : "";
    } else if (p && open) {
      const err = G.setSocket(S, open.skill, open.slot, p.dataset.pick || null);
      hint.textContent = err || (p.dataset.pick ? `已插上 ${sup(p.dataset.pick).name}` : "已拔掉");
      if (!err) open = null;
    }
    draw();
  };
  document.getElementById("charBtn").addEventListener("click", () => { open = null; hint.textContent = ""; draw(); });
  draw();
};
