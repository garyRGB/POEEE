// 技能在我們遊戲裡「怎麼用」。技能本身的名字、說明、耗魔、施放時間、傷害倍率都照抄 data/skills.js（poe2db），這裡不重複。
// 傷害公式（2026-10-06 定案 B）：技能傷害 ＝ 角色攻擊力 × 倍率
//   攻擊技能：倍率照 poe2db 的「Base Damage」%（例：碎骨 100%、震波 200%）
//   法術：用 poe2db 第 1 級的傷害 ÷ 職業 Lv1 攻擊力換算成倍率（例：混沌弩箭 5～9 ÷ 女巫 12）
// 標「Claude 定」的數字是 poe2db 沒有、為了放置玩法補的，Gary 可以直接改。
window.DATA = window.DATA || {};
DATA.skillPlay = {
  // 出手順序：越前面越優先；條件不符（魔力不夠、怪不夠多）就往下找；都不行就普通攻擊
  order: {
    witch: ["Bone_Blast", "Chaos_Bolt"],
    duelist: ["Rolling_Slam", "Boneshatter"]
  },
  skills: {
    Chaos_Bolt: {
      kind: "projectile",       // 射最近的一隻
      rangeM: 4                 // Claude 定：跟女巫普攻範圍一樣
    },
    Bone_Blast: {
      kind: "area",             // 選怪最密集的位置，範圍內全部打到
      rangeM: 4,                // Claude 定：多遠的地方可以放
      radiusM: 1,               // poe2db：範圍 1 公尺
      minTargets: 2             // Claude 定：範圍內至少 2 隻才放，不然用混沌弩箭
    },
    Boneshatter: {
      kind: "melee",            // 打目標一下
      hitPctColumn: 0,          // Base Damage 第 1 個 %：打擊
      shockPctColumn: -1,       // Base Damage 最後一個 %：震波
      shockEvery: 3,            // Claude 定：POE2 是「打暈時」放震波，我們沒有暈眩，改成每打 3 下放一次
      shockRadiusM: 1.5         // Claude 定：震波範圍
    },
    Rolling_Slam: {
      kind: "slam",             // 往目標方向連打兩段範圍
      stages: [                 // 兩段重擊：倍率照 Base Damage 第 4、5 個 %（75%、150%）
        { pctColumn: 3, distM: 1.0, radiusM: 1.2 },   // Claude 定：距離、範圍
        { pctColumn: 4, distM: 2.2, radiusM: 1.4 }
      ],
      extraTimeSec: 1,          // poe2db：總攻擊時間 +1 秒
      minTargets: 2             // Claude 定：第一段範圍內至少 2 隻才放
    }
  }
};
