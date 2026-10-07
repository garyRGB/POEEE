// 「背包」頁：只負責把 S.bag 列出來（新的在最上面），點一件展開看詞綴。穿上（#5）之後再加。
window.G = window.G || {};
G.setupBagPanel = function (S) {
  const $ = id => document.getElementById(id);
  let openUid = null; // 現在展開的那件

  // 展開後的詞綴：灰色是底材內建，藍色是擲出來的（標前綴／後綴、第幾階）
  const detail = it => {
    const imp = it.implicits.map(a => `<li class="imp">${G.affixText(a)}</li>`);
    const exp = it.affixes.map(a => `<li>${G.affixText(a)} <em>${a.kind === "prefix" ? "前綴" : "後綴"} T${a.tier}</em></li>`);
    const rows = [...imp, ...(imp.length && exp.length ? [`<li class="sep"></li>`] : []), ...exp];
    return `<ul class="mods">${rows.join("") || `<li class="imp">沒有詞綴</li>`}</ul>`;
  };

  const draw = () => {
    const list = $("bagList");
    $("bagCount").textContent = S.bag.length;
    if (!S.bag.length) { list.innerHTML = `<p class="hint">背包是空的。打怪大約每 ${Math.round(1 / DATA.loot.dropChance)} 隻會掉 1 件裝備。</p>`; return; }
    list.innerHTML = S.bag.map(it => {
      const b = G.findItem(it.itemClass, it.baseId), cls = DATA.items[it.itemClass].name, open = openUid === it.uid;
      const n = it.affixes.length ? `・${it.affixes.length} 條詞綴` : "";
      return `<div class="bagItem ${it.rarity}${open ? " open" : ""}" data-uid="${it.uid}"><b>${it.name}</b>` +
        `<small>${DATA.loot.rarityName[it.rarity]}・${cls}・物品等級 ${it.ilvl}・需求 Lv${b.reqLevel}${n}</small>${open ? detail(it) : ""}</div>`;
    }).join("");
  };

  $("bagList").onclick = e => {
    const el = e.target.closest(".bagItem");
    if (!el) return;
    openUid = openUid === +el.dataset.uid ? null : +el.dataset.uid;
    draw();
  };
  G.drawBag = draw;
  $("bagBtn").disabled = false;
  $("bagBtn").onclick = () => { draw(); $("bagSheet").hidden = false; };
  draw();
};
