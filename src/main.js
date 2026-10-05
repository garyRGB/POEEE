// 啟動：檢查資料 → 選角 → 建立狀態、接上按鈕。各系統的規則放各自的檔案，這裡只負責串起來。
(function () {
  const need = ["classes", "monsters", "rules"];
  const missing = need.filter(k => !window.DATA || !DATA[k]);
  if (missing.length) {
    reportError(`資料檔沒有載入：${missing.map(k => "data/" + k + ".js").join("、")}`);
    return;
  }

  G.showSelect(DATA.classes, hero => {
    const rules = DATA.rules;
    const S = G.createState(hero, rules);
    G.S = S; G.hero = hero; // 給自動檢查讀狀態用

    document.getElementById("game").hidden = false;
    G.renderStatic(hero);
    G.render(S, hero);
    G.feed("等待怪物出現…");

    // 遊戲迴圈：每 0.1 秒走一步。G.step 也給自動檢查用來快轉時間。
    G.step = dt => {
      if (S.dead) return; // 倒下後整個停住（死亡與復活之後做）
      for (const m of G.spawnTick(S, dt, rules, DATA.monsters, hero.level)) G.feed(`${m.name} 出現了`);
      for (const k of G.combatTick(S, dt, hero))
        for (const msg of G.onKill(S, hero, k, rules)) G.feed(msg);
      if (S.dead) G.feed("你倒下了");
      G.render(S, hero);
    };
    setInterval(() => G.step(0.1), 100);

    document.getElementById("atlasBtn").addEventListener("click", () => G.feed("輿圖之後開放"));

    // 點戰鬥框任何地方（輿圖按鈕除外）＝所有空格倒數一起減少
    document.getElementById("battle").addEventListener("click", e => {
      if (e.target.closest("#atlasBtn") || S.dead) return;
      G.tapSpeedUp(S, rules);
      G.render(S, hero);
    });
  });
})();
