// 戰場畫面：只負責把角色、怪物畫到畫布上。不改任何數字。
window.G = window.G || {};
(function () {
  let cv, ctx, pxPerM = 30, W = 0, H = 0;
  const css = name => getComputedStyle(document.documentElement).getPropertyValue(name).trim();

  // 量畫面大小，算出「1 公尺 = 幾個像素」，並告訴 world.js 戰場有幾公尺高
  G.setupArena = function (rules) {
    cv = document.getElementById("arenaCanvas");
    ctx = cv.getContext("2d");
    const fit = () => {
      const box = cv.parentElement.getBoundingClientRect(), dpr = window.devicePixelRatio || 1;
      W = box.width; H = box.height;
      cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr);
      cv.style.width = W + "px"; cv.style.height = H + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      pxPerM = W / rules.arenaWidthM;
      G.setArena(rules.arenaWidthM, H / pxPerM);
    };
    fit();
    window.addEventListener("resize", fit);
  };

  const toPx = p => ({ x: W / 2 + p.x * pxPerM, y: H / 2 + p.y * pxPerM });

  G.drawArena = function (S, hero, rules) {
    if (!ctx) return;
    ctx.clearRect(0, 0, W, H);
    // 每公尺一條淡格線
    ctx.strokeStyle = css("--line"); ctx.globalAlpha = 0.18; ctx.lineWidth = 1;
    ctx.beginPath();
    for (let x = (W / 2) % pxPerM; x < W; x += pxPerM) { ctx.moveTo(x, 0); ctx.lineTo(x, H); }
    for (let y = (H / 2) % pxPerM; y < H; y += pxPerM) { ctx.moveTo(0, y); ctx.lineTo(W, y); }
    ctx.stroke(); ctx.globalAlpha = 1;

    // 角色攻擊範圍（淡圈）
    const c = toPx({ x: 0, y: 0 });
    ctx.strokeStyle = css("--gold"); ctx.globalAlpha = 0.25; ctx.setLineDash([4, 4]);
    ctx.beginPath(); ctx.arc(c.x, c.y, hero.attackRangeM * pxPerM, 0, Math.PI * 2); ctx.stroke();
    ctx.setLineDash([]); ctx.globalAlpha = 1;

    // 怪物：圓點＋頭上小血條；正在打的那隻有金框
    for (const m of S.monsters) {
      const p = toPx(m), r = Math.max(4, m.radiusM * pxPerM);
      ctx.fillStyle = css("--mon");
      ctx.beginPath(); ctx.arc(p.x, p.y, r, 0, Math.PI * 2); ctx.fill();
      if (m === S.target) { ctx.strokeStyle = css("--gold"); ctx.lineWidth = 2; ctx.stroke(); ctx.lineWidth = 1; }
      if (m.contagion) { ctx.strokeStyle = css("--chaos"); ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(p.x, p.y, r + 3, 0, Math.PI * 2); ctx.stroke(); ctx.lineWidth = 1; }
      const bw = r * 2.4, bx = p.x - bw / 2, by = p.y - r - 6;
      ctx.fillStyle = css("--bg"); ctx.fillRect(bx, by, bw, 3);
      ctx.fillStyle = css("--life"); ctx.fillRect(bx, by, bw * Math.max(0, m.hp / m.maxLife), 3);
    }

    // 碎裂地面（震地）：虛線圈，越接近爆發越亮
    for (const g of S.grounds || []) {
      const p = toPx(g);
      ctx.strokeStyle = css("--gold"); ctx.globalAlpha = 0.35 + 0.55 * (1 - g.remain / g.total); ctx.setLineDash([3, 3]); ctx.lineWidth = 2;
      ctx.beginPath(); ctx.arc(p.x, p.y, g.r * pxPerM, 0, Math.PI * 2); ctx.stroke();
      ctx.setLineDash([]); ctx.globalAlpha = 1; ctx.lineWidth = 1;
    }

    // 技能特效：投射物命中閃一下、範圍技能畫圈
    for (const f of S.fx || []) {
      const p = toPx(f), a = 1 - f.age / f.life;
      ctx.globalAlpha = Math.max(0, a);
      if (f.type === "ring") {
        ctx.strokeStyle = css("--chaos"); ctx.lineWidth = 2;
        ctx.beginPath(); ctx.arc(p.x, p.y, f.r * pxPerM, 0, Math.PI * 2); ctx.stroke();
      } else if (f.type === "circle") {

        ctx.strokeStyle = css("--mana"); ctx.lineWidth = 2;
        ctx.beginPath(); ctx.arc(p.x, p.y, f.r * pxPerM, 0, Math.PI * 2); ctx.stroke();
        ctx.fillStyle = css("--mana"); ctx.globalAlpha = Math.max(0, a * 0.18); ctx.fill();
      } else {
        ctx.strokeStyle = css("--gold"); ctx.lineWidth = 2;
        const from = f.fx !== undefined ? toPx({ x: f.fx, y: f.fy }) : c; // 連鎖從上一隻跳過來
        ctx.beginPath(); ctx.moveTo(from.x, from.y); ctx.lineTo(p.x, p.y); ctx.stroke();
      }
      ctx.globalAlpha = 1; ctx.lineWidth = 1;
    }

    // 角色
    ctx.fillStyle = css("--panel"); ctx.strokeStyle = css("--gold"); ctx.lineWidth = 2.5;
    ctx.beginPath(); ctx.arc(c.x, c.y, rules.heroRadiusM * pxPerM, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    ctx.lineWidth = 1;
  };
})();
