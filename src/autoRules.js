// 自動規則：照 data/rules.js 的 autoRules（{ when, value, do }）自動執行。不碰畫面。
// 要加新規則 = 在 WHEN 或 DO 加一種，再到 data/rules.js 寫一筆。
window.G = window.G || {};
(function () {
  // 條件：什麼時候觸發
  const WHEN = {
    hp_below_pct: (S, hero, v) => S.hp / hero.maxLife * 100 < v
  };
  // 動作：觸發後做什麼；回傳要顯示的訊息（沒做事就回傳 null）
  const DO = {
    use_potion: (S, hero) => {
      if (S.potions <= 0) return null;
      S.potions--;
      const heal = Math.round(hero.maxLife * hero.potionHealPct / 100);
      S.hp = Math.min(hero.maxLife, S.hp + heal);
      return `自動喝藥水，生命 +${heal}（剩 ${S.potions} 瓶）`;
    }
  };

  G.autoRulesTick = function (S, hero, rules) {
    const msgs = [];
    if (S.dead) return msgs;
    for (const r of rules.autoRules) {
      const when = WHEN[r.when], act = DO[r.do];
      if (!when || !act) { reportError(`data/rules.js 的自動規則看不懂：${JSON.stringify(r)}`); continue; }
      if (when(S, hero, r.value)) { const m = act(S, hero); if (m) msgs.push(m); }
    }
    return msgs;
  };
})();
