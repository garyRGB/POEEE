// 啟動：檢查資料 → 選角 → 建立狀態、接上按鈕。各系統的規則放各自的檔案，這裡只負責串起來。
(function () {
  const need = ["classes", "monsters", "rules", "skills", "supports", "skillPlay", "supportPlay"];
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
    G.setupArena(rules); // 主畫面顯示後才量得到戰場大小
    G.renderStatic(hero);
    G.render(S, hero);
    G.feed("等待怪物出現…");

    G.setupAutoPanel(S);
    G.setupSheets();
    G.setupSocketPanel(S, hero);

    G.step = dt => {
      if (S.dead) return; // 倒下後整個停住（死亡與復活之後做）
      if (G.spawnTick(S, dt, rules, DATA.monsters, hero.level).length)
        G.feed(`${DATA.monsters[0].name}群 ×${S.lastPack.n} 從${G.DIR_NAMES[S.lastPack.dir]}方進場`);
      G.moveTick(S, dt);
      const killed = G.combatTick(S, dt, hero);
      S.castLog.push(...S.msgs.splice(0)); S.castLog.splice(0, S.castLog.length - 50); // 施放訊息留給 #19 戰鬥紀錄，戰場上只顯示擊倒、升級
      for (const msg of G.onKills(S, hero, killed, rules)) G.feed(msg);
      G.manaTick(S, hero, dt);
      for (const msg of G.autoRulesTick(S, hero, rules)) G.feed(msg);
      if (S.dead) G.feed("你倒下了");
      G.render(S, hero);
    };
    // 遊戲迴圈：每 0.05 秒走一步（畫面每秒 20 格）。G.step 也給自動檢查用來快轉時間。
    setInterval(() => G.step(0.05), 50);

    document.getElementById("atlasBtn").addEventListener("click", () => G.feed("輿圖之後開放"));

    // 點戰場任何地方（輿圖按鈕除外）＝下一群怪提早出現
    document.getElementById("battle").addEventListener("click", e => {
      if (e.target.closest("#atlasBtn") || S.dead) return;
      G.tapSpeedUp(S, rules);
      G.render(S, hero);
    });
  });
})();
