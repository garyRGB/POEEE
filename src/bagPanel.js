// 「背包」頁：只負責把 S.bag 列出來（新的在最上面）。詞綴（#4）、穿上（#5）之後再加。
window.G = window.G || {};
G.setupBagPanel = function (S) {
  const $ = id => document.getElementById(id);
  const draw = () => {
    const list = $("bagList");
    if (!S.bag.length) { list.innerHTML = `<p class="hint">背包是空的。打怪大約每 ${Math.round(1 / DATA.loot.dropChance)} 隻會掉 1 件裝備。</p>`; return; }
    list.innerHTML = S.bag.map(it => {
      const b = G.findItem(it.itemClass, it.baseId), cls = DATA.items[it.itemClass].name;
      return `<div class="bagItem ${it.rarity}" data-uid="${it.uid}"><b>${it.name}</b><small>${DATA.loot.rarityName[it.rarity]}・${cls}・物品等級 ${it.ilvl}・需求 Lv${b.reqLevel}</small></div>`;
    }).join("");
    $("bagCount").textContent = S.bag.length;
  };
  G.drawBag = draw;
  $("bagBtn").disabled = false;
  $("bagBtn").onclick = () => { draw(); $("bagSheet").hidden = false; };
  draw();
};
