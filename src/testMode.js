// 測試版：網址加 ?test=1 才開（例：https://garyrgb.github.io/POEEE/?test=1）。正常網址完全不受影響。
// 數字在 data/rules.js 的 testMode。給 Gary 快速驗收死亡畫面用。
window.G = window.G || {};
G.isTestMode = () => new URLSearchParams(location.search).get("test") === "1";
G.applyTestMode = function (hero, rules) {
  if (!G.isTestMode()) return;
  const t = rules.testMode;
  hero.cls = { ...hero.cls, maxLife: hero.cls.maxLife * t.lifePct / 100 }; // 升級後也維持一半
  hero.revives = t.revives;
  hero.name += "（測試版）";
  G.applyLevel(hero);
};
