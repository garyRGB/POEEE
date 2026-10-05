// 啟動：檢查資料、建立狀態、接上按鈕。各系統的規則放各自的檔案，這裡只負責串起來。
(function () {
  const need = ["hero", "monsters", "rules"];
  const missing = need.filter(k => !window.DATA || !DATA[k]);
  if (missing.length) {
    reportError(`資料檔沒有載入：${missing.map(k => "data/" + k + ".js").join("、")}`);
    return;
  }
  const hero = DATA.hero, rules = DATA.rules;
  const S = G.createState(hero, rules);
  G.S = S; // 給自動檢查讀狀態用

  G.renderStatic(hero);
  G.render(S, hero);
  G.feed("等待怪物出現…");

  document.getElementById("atlasBtn").addEventListener("click", () => G.feed("輿圖之後開放"));
})();
