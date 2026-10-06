// 輔助寶石在我們遊戲裡的效果。數字照抄 poe2db（原文附在每顆的 text），名字、說明在 data/supports.js。
// needTags：被輔助的技能要有其中一個標籤才插得上去（照 poe2db「輔助 XX 技能」的說法）
// 規則（poe2db）：同一個技能不能插多個同類別的輔助寶石。
// 標「Claude 定」的是 poe2db 沒有、為了放置玩法補的，Gary 可以直接改。
window.DATA = window.DATA || {};
DATA.supportPlay = {
  socketsPerSkill: 2,          // Claude 定：第 1 階段每招 2 個插槽
  stock: {                     // Claude 定：第 1 階段每顆送 1 個（之後靠掉寶）
    Chain_I: 1, Multishot_I: 1, Concentrated_Area: 1, Prolonged_Duration_I: 1
  },
  supports: {
    Chain_I: {
      text: "被輔助技能 連鎖 增加 +1 次 / 被輔助的技能造成 30 %更少 擊中 傷害",
      needTags: ["投射物", "連鎖"],
      chainPlus: 1, hitDamageLessPct: 30,
      chainRangeM: 3           // Claude 定：連鎖跳到幾公尺內的下一隻
    },
    Multishot_I: {
      text: "被輔助的技能造成 35 %更少傷害 / 被輔助的技能發射 2 個額外 投射物 / 被輔助的技能有 20 %更少 技能速度",
      needTags: ["投射物"],
      extraProjectiles: 2, damageLessPct: 35, skillSpeedLessPct: 20
    },
    Concentrated_Area: {
      text: "被輔助的技能造成 30 %更多範圍傷害 / 被輔助的技能有 50 %更少範圍效果",
      needTags: ["範圍效果"],
      areaDamageMorePct: 30, areaLessPct: 50   // 範圍效果是面積：50% 更少面積 → 半徑 × 0.71
    },
    Prolonged_Duration_I: {
      text: "被輔助的技能有 30 %更多技能持續時間（消耗加成 120%）",
      needTags: ["持續時間"],
      durationMorePct: 30, costMultiplierPct: 120
    }
  }
};
