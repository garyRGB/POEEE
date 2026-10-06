// 裝備底材：每個類別的底材（傷害、攻速、暴擊、護甲、需求、內建詞綴、賦予技能）
// 由 tools/crawl_items.py 從 poe2db.tw 產生（2026-10-06）。照抄 poe2db；Gary 可以直接改這裡的數字。
window.DATA = window.DATA || {};
DATA.items = {
 "One_Hand_Maces": {
  "name": "單手錘",
  "slot": "weapon",
  "hands": 1,
  "weaponType": "mace",
  "source": "https://poe2db.tw/tw/One_Hand_Maces",
  "bases": [
   {
    "id": "Wooden_Club",
    "name": "木製棍棒",
    "reqLevel": 1,
    "implicits": [],
    "phys": [
     6,
     10
    ],
    "crit": 5,
    "aps": 1.45,
    "rangeM": 1.3
   },
   {
    "id": "Smithing_Hammer",
    "name": "鍛造錘",
    "reqLevel": 4,
    "implicits": [],
    "phys": [
     5.5,
     9
    ],
    "fire": [
     5.5,
     9
    ],
    "crit": 5,
    "aps": 1.45,
    "rangeM": 1.3,
    "reqStr": 11
   },
   {
    "id": "Slim_Mace",
    "name": "纖細之錘",
    "reqLevel": 10,
    "implicits": [],
    "phys": [
     11,
     17
    ],
    "crit": 5,
    "aps": 1.55,
    "rangeM": 1.3,
    "reqStr": 21
   },
   {
    "id": "Spiked_Club",
    "name": "鈍釘木棒",
    "reqLevel": 16,
    "implicits": [],
    "phys": [
     15,
     24
    ],
    "crit": 5,
    "aps": 1.45,
    "rangeM": 1.3,
    "reqStr": 31
   },
   {
    "id": "Warpick",
    "name": "戰鎬",
    "reqLevel": 22,
    "implicits": [
     {
      "text": "+(5—10)%的暴擊傷害加成",
      "template": "+#%的暴擊傷害加成",
      "ranges": [
       [
        5,
        10
       ]
      ]
     }
    ],
    "phys": [
     18,
     24
    ],
    "crit": 7,
    "aps": 1.45,
    "rangeM": 1.3,
    "reqStr": 41
   },
   {
    "id": "Plated_Mace",
    "name": "華麗之錘",
    "reqLevel": 26,
    "implicits": [],
    "phys": [
     18,
     38
    ],
    "crit": 5,
    "aps": 1.4,
    "rangeM": 1.3,
    "reqStr": 48
   },
   {
    "id": "Brigand_Mace",
    "name": "強盜之錘",
    "reqLevel": 33,
    "implicits": [],
    "phys": [
     28,
     38
    ],
    "crit": 5,
    "aps": 1.45,
    "rangeM": 1.3,
    "reqStr": 60
   },
   {
    "id": "Construct_Hammer",
    "name": "建造錘",
    "reqLevel": 36,
    "implicits": [
     {
      "text": "擊中時有40%機率造成目眩",
      "template": "擊中時有#%機率造成目眩",
      "ranges": [
       [
        40,
        40
       ]
      ]
     }
    ],
    "phys": [
     31,
     38
    ],
    "crit": 5,
    "aps": 1.4,
    "rangeM": 1.3,
    "reqStr": 65
   },
   {
    "id": "Morning_Star",
    "name": "晨星",
    "reqLevel": 45,
    "implicits": [],
    "phys": [
     33,
     49
    ],
    "crit": 6.5,
    "aps": 1.45,
    "rangeM": 1.3,
    "reqStr": 80
   },
   {
    "id": "Jade_Club",
    "name": "玉製棍棒",
    "reqLevel": 49,
    "implicits": [
     {
      "text": "必定擊中",
      "template": "必定擊中",
      "ranges": []
     }
    ],
    "phys": [
     31,
     51
    ],
    "crit": 5,
    "aps": 1.45,
    "rangeM": 1.3,
    "reqStr": 87
   },
   {
    "id": "Lumen_Mace",
    "name": "流明之錘",
    "reqLevel": 52,
    "implicits": [],
    "phys": [
     36,
     60
    ],
    "crit": 5,
    "aps": 1.45,
    "rangeM": 1.3,
    "reqStr": 92
   },
   {
    "id": "Execratus_Hammer",
    "name": "詛咒之錘",
    "reqLevel": 55,
    "implicits": [],
    "phys": [
     40,
     60
    ],
    "crit": 5,
    "aps": 1.45,
    "rangeM": 1.3,
    "reqStr": 97
   },
   {
    "id": "Torment_Club",
    "name": "磨難棍棒",
    "reqLevel": 65,
    "implicits": [],
    "phys": [
     44,
     73
    ],
    "crit": 5,
    "aps": 1.45,
    "rangeM": 1.3,
    "reqStr": 114
   },
   {
    "id": "Kalguuran_Forgehammer",
    "name": "卡爾葛鍛造錘",
    "reqLevel": 47,
    "implicits": [
     {
      "text": "有3個插槽",
      "template": "有#個插槽",
      "ranges": [
       [
        3,
        3
       ]
      ]
     }
    ],
    "phys": [
     33,
     55
    ],
    "crit": 5,
    "aps": 1.45,
    "rangeM": 1.3
   },
   {
    "id": "Calescent_Hammer",
    "name": "升溫之錘",
    "reqLevel": 45,
    "implicits": [],
    "phys": [
     22,
     37
    ],
    "fire": [
     22,
     37
    ],
    "crit": 5,
    "aps": 1.45,
    "rangeM": 1.3,
    "reqStr": 80
   },
   {
    "id": "Flared_Mace",
    "name": "閃光之錘",
    "reqLevel": 48,
    "implicits": [],
    "phys": [
     33,
     50
    ],
    "crit": 5,
    "aps": 1.55,
    "rangeM": 1.3,
    "reqStr": 86
   },
   {
    "id": "Battle_Pick",
    "name": "戰鬥鎬",
    "reqLevel": 51,
    "implicits": [
     {
      "text": "+(5—10)%的暴擊傷害加成",
      "template": "+#%的暴擊傷害加成",
      "ranges": [
       [
        5,
        10
       ]
      ]
     }
    ],
    "phys": [
     35,
     47
    ],
    "crit": 7,
    "aps": 1.45,
    "rangeM": 1.3,
    "reqStr": 91
   },
   {
    "id": "Marching_Mace",
    "name": "行軍之錘",
    "reqLevel": 54,
    "implicits": [],
    "phys": [
     33,
     69
    ],
    "crit": 5,
    "aps": 1.4,
    "rangeM": 1.3,
    "reqStr": 96
   },
   {
    "id": "Bandit_Mace",
    "name": "盜賊之錘",
    "reqLevel": 59,
    "implicits": [],
    "phys": [
     45,
     61
    ],
    "crit": 5,
    "aps": 1.45,
    "rangeM": 1.3,
    "reqStr": 104
   },
   {
    "id": "Structured_Hammer",
    "name": "建構之錘",
    "reqLevel": 62,
    "implicits": [
     {
      "text": "擊中時有40%機率造成目眩",
      "template": "擊中時有#%機率造成目眩",
      "ranges": [
       [
        40,
        40
       ]
      ]
     }
    ],
    "phys": [
     49,
     60
    ],
    "crit": 5,
    "aps": 1.4,
    "rangeM": 1.3,
    "reqStr": 109
   },
   {
    "id": "Flanged_Mace",
    "name": "輪緣之錘",
    "reqLevel": 67,
    "implicits": [],
    "phys": [
     45,
     67
    ],
    "crit": 5,
    "aps": 1.55,
    "rangeM": 1.3,
    "reqStr": 134
   },
   {
    "id": "Crown_Mace",
    "name": "皇冠之錘",
    "reqLevel": 72,
    "implicits": [],
    "phys": [
     43,
     89
    ],
    "crit": 5,
    "aps": 1.4,
    "rangeM": 1.3,
    "reqStr": 149
   },
   {
    "id": "Molten_Hammer",
    "name": "熔火之錘",
    "reqLevel": 77,
    "implicits": [],
    "phys": [
     35.5,
     59
    ],
    "fire": [
     35.5,
     59
    ],
    "crit": 5,
    "aps": 1.45,
    "rangeM": 1.3,
    "reqStr": 163
   },
   {
    "id": "Strife_Pick",
    "name": "鬥爭鎬",
    "reqLevel": 78,
    "implicits": [
     {
      "text": "+(5—10)%的暴擊傷害加成",
      "template": "+#%的暴擊傷害加成",
      "ranges": [
       [
        5,
        10
       ]
      ]
     }
    ],
    "phys": [
     49,
     66
    ],
    "crit": 7,
    "aps": 1.45,
    "rangeM": 1.3,
    "reqStr": 163
   },
   {
    "id": "Fortified_Hammer",
    "name": "強化之錘",
    "reqLevel": 79,
    "implicits": [
     {
      "text": "擊中時有40%機率造成目眩",
      "template": "擊中時有#%機率造成目眩",
      "ranges": [
       [
        40,
        40
       ]
      ]
     }
    ],
    "phys": [
     60,
     73
    ],
    "crit": 5,
    "aps": 1.4,
    "rangeM": 1.3,
    "reqStr": 163
   },
   {
    "id": "Marauding_Mace",
    "name": "劫掠之錘",
    "reqLevel": 77,
    "implicits": [],
    "phys": [
     51,
     84
    ],
    "crit": 5,
    "aps": 1.45,
    "rangeM": 1.3,
    "reqStr": 163
   },
   {
    "id": "Akoyan_Club",
    "name": "艾古亞棍棒",
    "reqLevel": 78,
    "implicits": [
     {
      "text": "必定擊中",
      "template": "必定擊中",
      "ranges": []
     }
    ],
    "phys": [
     46,
     76
    ],
    "crit": 5,
    "aps": 1.45,
    "rangeM": 1.3,
    "reqStr": 163
   }
  ],
  "special": [
   {
    "id": "Runemastered_Torment_Club",
    "name": "符煉磨難棍棒",
    "reqLevel": 65,
    "implicits": [
     {
      "text": "將100%的閃電傷害轉換為冰冷傷害",
      "template": "將#%的閃電傷害轉換為冰冷傷害",
      "ranges": [
       [
        100,
        100
       ]
      ]
     }
    ],
    "cold": [
     44,
     209
    ],
    "crit": 5,
    "aps": 1.45,
    "rangeM": 1.3,
    "reqStr": 114
   },
   {
    "id": "Runeforged_Marching_Mace",
    "name": "符鍛行軍之錘",
    "reqLevel": 65,
    "implicits": [],
    "phys": [
     46,
     96
    ],
    "crit": 7.5,
    "aps": 1.4,
    "rangeM": 1.3,
    "reqStr": 114
   },
   {
    "id": "Runeforged_Wooden_Club",
    "name": "符鍛木製棍棒",
    "reqLevel": 38,
    "implicits": [
     {
      "text": "攻擊增加(20—30)%範圍效果",
      "template": "攻擊增加#%範圍效果",
      "ranges": [
       [
        20,
        30
       ]
      ]
     }
    ],
    "phys": [
     83,
     138
    ],
    "crit": 5,
    "aps": 1.45,
    "rangeM": 1.3,
    "reqStr": 68
   },
   {
    "id": "Runemastered_Wooden_Club",
    "name": "符煉木製棍棒",
    "reqLevel": 55,
    "implicits": [
     {
      "text": "攻擊增加(20—30)%範圍效果",
      "template": "攻擊增加#%範圍效果",
      "ranges": [
       [
        20,
        30
       ]
      ]
     }
    ],
    "phys": [
     132,
     220
    ],
    "crit": 5,
    "aps": 1.45,
    "rangeM": 1.3,
    "reqStr": 97
   },
   {
    "id": "Runeforged_Slim_Mace",
    "name": "符鍛纖細之錘",
    "reqLevel": 38,
    "implicits": [],
    "phys": [
     48,
     72.5
    ],
    "cold": [
     48,
     72.5
    ],
    "crit": 5,
    "aps": 1.55,
    "rangeM": 1.3,
    "reqStr": 68
   },
   {
    "id": "Runeforged_Spiked_Club",
    "name": "符鍛鈍釘木棒",
    "reqLevel": 40,
    "implicits": [],
    "phys": [
     56,
     93
    ],
    "crit": 5,
    "aps": 1.5,
    "rangeM": 1.3,
    "reqStr": 72
   },
   {
    "id": "Runeforged_Warpick",
    "name": "符鍛戰鎬",
    "reqLevel": 38,
    "implicits": [
     {
      "text": "增加(30—40)%完全破甲的效果",
      "template": "增加#%完全破甲的效果",
      "ranges": [
       [
        30,
        40
       ]
      ]
     }
    ],
    "phys": [
     75,
     102
    ],
    "crit": 7,
    "aps": 1.45,
    "rangeM": 1.3,
    "reqStr": 68
   },
   {
    "id": "Runeforged_Kalguuran_Forgehammer",
    "name": "符鍛卡爾葛鍛造錘",
    "reqLevel": 65,
    "implicits": [
     {
      "text": "有3個插槽",
      "template": "有#個插槽",
      "ranges": [
       [
        3,
        3
       ]
      ]
     }
    ],
    "phys": [
     59,
     99
    ],
    "crit": 5,
    "aps": 1.75,
    "rangeM": 1.3
   },
   {
    "id": "Runeforged_Morning_Star",
    "name": "符鍛晨星",
    "reqLevel": 65,
    "implicits": [],
    "fire": [
     90,
     134
    ],
    "crit": 6.5,
    "aps": 1.45,
    "rangeM": 1.3,
    "reqStr": 114
   }
  ]
 },
 "Two_Hand_Maces": {
  "name": "雙手錘",
  "slot": "weapon",
  "hands": 2,
  "weaponType": "mace",
  "source": "https://poe2db.tw/tw/Two_Hand_Maces",
  "bases": [
   {
    "id": "Felled_Greatclub",
    "name": "墮落巨棍棒",
    "reqLevel": 1,
    "implicits": [],
    "phys": [
     13,
     18
    ],
    "crit": 5,
    "aps": 1.1,
    "rangeM": 1.5
   },
   {
    "id": "Oak_Greathammer",
    "name": "橡木巨錘",
    "reqLevel": 4,
    "implicits": [
     {
      "text": "增加(20—40)%暈眩累積",
      "template": "增加#%暈眩累積",
      "ranges": [
       [
        20,
        40
       ]
      ]
     }
    ],
    "phys": [
     16,
     30
    ],
    "crit": 5,
    "aps": 1,
    "rangeM": 1.5,
    "reqStr": 11
   },
   {
    "id": "Forge_Maul",
    "name": "鍛造重錘",
    "reqLevel": 11,
    "implicits": [
     {
      "text": "擊中時壓碎敵人",
      "template": "擊中時壓碎敵人",
      "ranges": []
     }
    ],
    "phys": [
     26,
     35
    ],
    "crit": 5,
    "aps": 1.05,
    "rangeM": 1.5,
    "reqStr": 23
   },
   {
    "id": "Studded_Greatclub",
    "name": "鑲釘巨棍棒",
    "reqLevel": 16,
    "implicits": [],
    "phys": [
     32,
     48
    ],
    "crit": 5,
    "aps": 1.1,
    "rangeM": 1.5,
    "reqStr": 31
   },
   {
    "id": "Cultist_Greathammer",
    "name": "教徒巨錘",
    "reqLevel": 22,
    "implicits": [
     {
      "text": "打擊造成擴散傷害",
      "template": "打擊造成擴散傷害",
      "ranges": []
     }
    ],
    "phys": [
     36,
     49
    ],
    "crit": 5,
    "aps": 1.05,
    "rangeM": 1.5,
    "reqStr": 41
   },
   {
    "id": "Temple_Maul",
    "name": "神殿重錘",
    "reqLevel": 28,
    "implicits": [],
    "phys": [
     35,
     72
    ],
    "crit": 5,
    "aps": 1.2,
    "rangeM": 1.5,
    "reqStr": 52
   },
   {
    "id": "Leaden_Greathammer",
    "name": "麻木巨錘",
    "reqLevel": 33,
    "implicits": [],
    "phys": [
     58,
     78
    ],
    "crit": 5,
    "aps": 1.1,
    "rangeM": 1.5,
    "reqStr": 60
   },
   {
    "id": "Crumbling_Maul",
    "name": "崩毀重錘",
    "reqLevel": 38,
    "implicits": [
     {
      "text": "透過暴擊擊殺敵人時使其爆炸，造成等同於其10%生命的物理傷害",
      "template": "透過暴擊擊殺敵人時使其爆炸，造成等同於其#%生命的物理傷害",
      "ranges": [
       [
        10,
        10
       ]
      ]
     }
    ],
    "phys": [
     62,
     75
    ],
    "crit": 8,
    "aps": 1.1,
    "rangeM": 1.5,
    "reqStr": 68
   },
   {
    "id": "Pointed_Maul",
    "name": "尖銳重錘",
    "reqLevel": 45,
    "implicits": [],
    "phys": [
     68,
     102
    ],
    "crit": 6.5,
    "aps": 1.1,
    "rangeM": 1.5,
    "reqStr": 80
   },
   {
    "id": "Totemic_Greatclub",
    "name": "圖騰巨棍棒",
    "reqLevel": 50,
    "implicits": [
     {
      "text": "戰吼強化額外1次攻擊",
      "template": "戰吼強化額外#次攻擊",
      "ranges": [
       [
        1,
        1
       ]
      ]
     }
    ],
    "phys": [
     77,
     105
    ],
    "crit": 5,
    "aps": 1.1,
    "rangeM": 1.5,
    "reqStr": 89
   },
   {
    "id": "Greatmace",
    "name": "巨釘錘",
    "reqLevel": 52,
    "implicits": [],
    "phys": [
     74,
     124
    ],
    "crit": 5,
    "aps": 1.1,
    "rangeM": 1.5,
    "reqStr": 92
   },
   {
    "id": "Precise_Greathammer",
    "name": "精準巨錘",
    "reqLevel": 54,
    "implicits": [],
    "phys": [
     87,
     118
    ],
    "crit": 5,
    "aps": 1.1,
    "rangeM": 1.5,
    "reqStr": 96
   },
   {
    "id": "Giant_Maul",
    "name": "巨型重錘",
    "reqLevel": 65,
    "implicits": [],
    "phys": [
     96,
     144
    ],
    "crit": 5,
    "aps": 1.1,
    "rangeM": 1.5,
    "reqStr": 114
   },
   {
    "id": "Snakewood_Greathammer",
    "name": "蛇木巨錘",
    "reqLevel": 45,
    "implicits": [
     {
      "text": "增加(20—40)%暈眩累積",
      "template": "增加#%暈眩累積",
      "ranges": [
       [
        20,
        40
       ]
      ]
     }
    ],
    "phys": [
     62,
     115
    ],
    "crit": 5,
    "aps": 1.05,
    "rangeM": 1.5,
    "reqStr": 80
   },
   {
    "id": "Blacksmith_Maul",
    "name": "鐵匠重錘",
    "reqLevel": 48,
    "implicits": [
     {
      "text": "擊中時壓碎敵人",
      "template": "擊中時壓碎敵人",
      "ranges": []
     }
    ],
    "phys": [
     75,
     102
    ],
    "crit": 5,
    "aps": 1.05,
    "rangeM": 1.5,
    "reqStr": 86
   },
   {
    "id": "Zealot_Greathammer",
    "name": "狂熱巨錘",
    "reqLevel": 51,
    "implicits": [
     {
      "text": "打擊造成擴散傷害",
      "template": "打擊造成擴散傷害",
      "ranges": []
     }
    ],
    "phys": [
     70,
     95
    ],
    "crit": 5,
    "aps": 1.05,
    "rangeM": 1.5,
    "reqStr": 91
   },
   {
    "id": "Solemn_Maul",
    "name": "莊嚴重錘",
    "reqLevel": 54,
    "implicits": [],
    "phys": [
     59,
     123
    ],
    "crit": 5,
    "aps": 1.2,
    "rangeM": 1.5,
    "reqStr": 96
   },
   {
    "id": "Heavy_Greathammer",
    "name": "重型巨錘",
    "reqLevel": 59,
    "implicits": [],
    "phys": [
     94,
     127
    ],
    "crit": 5,
    "aps": 1.1,
    "rangeM": 1.5,
    "reqStr": 104
   },
   {
    "id": "Disintegrating_Maul",
    "name": "崩解重錘",
    "reqLevel": 62,
    "implicits": [
     {
      "text": "透過暴擊擊殺敵人時使其爆炸，造成等同於其10%生命的物理傷害",
      "template": "透過暴擊擊殺敵人時使其爆炸，造成等同於其#%生命的物理傷害",
      "ranges": [
       [
        10,
        10
       ]
      ]
     }
    ],
    "phys": [
     92,
     112
    ],
    "crit": 8,
    "aps": 1.1,
    "rangeM": 1.5,
    "reqStr": 109
   },
   {
    "id": "Anvil_Maul",
    "name": "鐵砧重錘",
    "reqLevel": 67,
    "implicits": [
     {
      "text": "擊中時壓碎敵人",
      "template": "擊中時壓碎敵人",
      "ranges": []
     }
    ],
    "phys": [
     101,
     136
    ],
    "crit": 5,
    "aps": 1.05,
    "rangeM": 1.5,
    "reqStr": 134
   },
   {
    "id": "Sacred_Maul",
    "name": "神聖重錘",
    "reqLevel": 72,
    "implicits": [],
    "phys": [
     76,
     158
    ],
    "crit": 5,
    "aps": 1.2,
    "rangeM": 1.5,
    "reqStr": 149
   },
   {
    "id": "Ironwood_Greathammer",
    "name": "鐵木巨錘",
    "reqLevel": 77,
    "implicits": [
     {
      "text": "增加(30—50)%暈眩累積",
      "template": "增加#%暈眩累積",
      "ranges": [
       [
        30,
        50
       ]
      ]
     }
    ],
    "phys": [
     105,
     196
    ],
    "crit": 5,
    "aps": 1,
    "rangeM": 1.5,
    "reqStr": 163
   },
   {
    "id": "Fanatic_Greathammer",
    "name": "盲信巨錘",
    "reqLevel": 78,
    "implicits": [
     {
      "text": "打擊造成擴散傷害",
      "template": "打擊造成擴散傷害",
      "ranges": []
     }
    ],
    "phys": [
     101,
     137
    ],
    "crit": 5,
    "aps": 1.05,
    "rangeM": 1.5,
    "reqStr": 163
   },
   {
    "id": "Ruination_Maul",
    "name": "毀滅重錘",
    "reqLevel": 79,
    "implicits": [
     {
      "text": "透過暴擊擊殺敵人時使其爆炸，造成等同於其10%生命的物理傷害",
      "template": "透過暴擊擊殺敵人時使其爆炸，造成等同於其#%生命的物理傷害",
      "ranges": [
       [
        10,
        10
       ]
      ]
     }
    ],
    "phys": [
     104,
     127
    ],
    "crit": 8,
    "aps": 1.1,
    "rangeM": 1.5,
    "reqStr": 163
   },
   {
    "id": "Massive_Greathammer",
    "name": "巨型巨錘",
    "reqLevel": 77,
    "implicits": [],
    "phys": [
     119,
     161
    ],
    "crit": 5,
    "aps": 1.1,
    "rangeM": 1.5,
    "reqStr": 163
   },
   {
    "id": "Tawhoan_Greatclub",
    "name": "塔赫亞巨棍棒",
    "reqLevel": 78,
    "implicits": [
     {
      "text": "戰吼強化額外1次攻擊",
      "template": "戰吼強化額外#次攻擊",
      "ranges": [
       [
        1,
        1
       ]
      ]
     }
    ],
    "phys": [
     113,
     153
    ],
    "crit": 5,
    "aps": 1.1,
    "rangeM": 1.5,
    "reqStr": 163
   },
   {
    "id": "Aberrant_Sledge",
    "name": "怪異攻城錘",
    "reqLevel": 70,
    "implicits": [],
    "phys": [
     74,
     154
    ],
    "crit": 5,
    "aps": 1.2,
    "rangeM": 1.5,
    "reqStr": 163
   }
  ],
  "special": [
   {
    "id": "Runeforged_Felled_Greatclub",
    "name": "符鍛墮落巨棍棒",
    "reqLevel": 38,
    "implicits": [],
    "phys": [
     146,
     197
    ],
    "crit": 5,
    "aps": 1.1,
    "rangeM": 1.5,
    "reqStr": 68
   },
   {
    "id": "Runemastered_Felled_Greatclub",
    "name": "符煉墮落巨棍棒",
    "reqLevel": 55,
    "implicits": [],
    "phys": [
     217,
     293
    ],
    "crit": 10,
    "aps": 1.1,
    "rangeM": 1.5,
    "reqStr": 97
   },
   {
    "id": "Runeforged_Oak_Greathammer",
    "name": "符鍛橡木巨錘",
    "reqLevel": 38,
    "implicits": [
     {
      "text": "增加(20—40)%暈眩累積",
      "template": "增加#%暈眩累積",
      "ranges": [
       [
        20,
        40
       ]
      ]
     }
    ],
    "phys": [
     73,
     135
    ],
    "crit": 5,
    "aps": 1,
    "rangeM": 1.5,
    "reqStr": 68
   },
   {
    "id": "Runemastered_Oak_Greathammer",
    "name": "符煉橡木巨錘",
    "reqLevel": 55,
    "implicits": [
     {
      "text": "增加(20—40)%暈眩累積",
      "template": "增加#%暈眩累積",
      "ranges": [
       [
        20,
        40
       ]
      ]
     }
    ],
    "phys": [
     111,
     207
    ],
    "crit": 5,
    "aps": 1,
    "rangeM": 1.5,
    "reqStr": 97
   },
   {
    "id": "Runeforged_Forge_Maul",
    "name": "符鍛鍛造重錘",
    "reqLevel": 40,
    "implicits": [
     {
      "text": "擊中時壓碎敵人",
      "template": "擊中時壓碎敵人",
      "ranges": []
     }
    ],
    "phys": [
     147,
     199
    ],
    "crit": 10,
    "aps": 1.05,
    "rangeM": 1.5,
    "reqStr": 72
   },
   {
    "id": "Runeforged_Studded_Greatclub",
    "name": "符鍛鑲釘巨棍棒",
    "reqLevel": 38,
    "implicits": [],
    "phys": [
     23.5,
     62.25
    ],
    "lightning": [
     70.5,
     186.75
    ],
    "crit": 5,
    "aps": 1.1,
    "rangeM": 1.5,
    "reqStr": 68
   },
   {
    "id": "Runemastered_Studded_Greatclub",
    "name": "符煉鑲釘巨棍棒",
    "reqLevel": 55,
    "implicits": [],
    "phys": [
     15.5,
     140.25
    ],
    "lightning": [
     46.5,
     420.75
    ],
    "crit": 5,
    "aps": 1.1,
    "rangeM": 1.5,
    "reqStr": 97
   },
   {
    "id": "Runeforged_Cultist_Greathammer",
    "name": "符鍛教徒巨錘",
    "reqLevel": 40,
    "implicits": [
     {
      "text": "打擊造成擴散傷害",
      "template": "打擊造成擴散傷害",
      "ranges": []
     },
     {
      "text": "增加(20—30)%流血持續時間",
      "template": "增加#%流血持續時間",
      "ranges": [
       [
        20,
        30
       ]
      ]
     }
    ],
    "phys": [
     144,
     194
    ],
    "crit": 5,
    "aps": 1.05,
    "rangeM": 1.5,
    "reqStr": 72
   },
   {
    "id": "Runeforged_Temple_Maul",
    "name": "符鍛神殿重錘",
    "reqLevel": 55,
    "implicits": [],
    "phys": [
     64,
     134
    ],
    "crit": 5,
    "aps": 1.3,
    "rangeM": 1.5,
    "reqStr": 76,
    "reqDex": 40
   },
   {
    "id": "Runeforged_Leaden_Greathammer",
    "name": "符鍛麻木巨錘",
    "reqLevel": 55,
    "implicits": [],
    "phys": [
     132,
     179
    ],
    "crit": 5,
    "aps": 1.1,
    "rangeM": 1.5,
    "reqStr": 60,
    "reqInt": 50
   },
   {
    "id": "Runeforged_Crumbling_Maul",
    "name": "符鍛崩毀重錘",
    "reqLevel": 55,
    "implicits": [
     {
      "text": "透過暴擊擊殺敵人時使其爆炸，造成等同於其10%生命的物理傷害",
      "template": "透過暴擊擊殺敵人時使其爆炸，造成等同於其#%生命的物理傷害",
      "ranges": [
       [
        10,
        10
       ]
      ]
     }
    ],
    "phys": [
     105,
     128
    ],
    "crit": 8,
    "aps": 1.1,
    "rangeM": 1.5,
    "reqStr": 97
   },
   {
    "id": "Runeforged_Pointed_Maul",
    "name": "符鍛尖銳重錘",
    "reqLevel": 65,
    "implicits": [
     {
      "text": "打擊造成擴散傷害",
      "template": "打擊造成擴散傷害",
      "ranges": []
     }
    ],
    "phys": [
     125,
     188
    ],
    "crit": 6.5,
    "aps": 1.1,
    "rangeM": 1.5,
    "reqStr": 114
   },
   {
    "id": "Runemastered_Aberrant_Sledge",
    "name": "符煉怪異攻城錘",
    "reqLevel": 70,
    "implicits": [],
    "phys": [
     151,
     315
    ],
    "crit": 5,
    "aps": 1,
    "rangeM": 1.5,
    "reqStr": 163
   }
  ]
 },
 "Wands": {
  "name": "法杖",
  "slot": "weapon",
  "hands": 1,
  "weaponType": "wand",
  "source": "https://poe2db.tw/tw/Wands",
  "bases": [
   {
    "id": "Withered_Wand",
    "name": "凋零法杖",
    "reqLevel": 1,
    "implicits": [],
    "grantsSkill": {
     "id": "Chaos_Bolt",
     "name": "混沌弩箭"
    }
   },
   {
    "id": "Bone_Wand",
    "name": "骸骨法杖",
    "reqLevel": 2,
    "implicits": [],
    "grantsSkill": {
     "id": "Bone_Blast",
     "name": "骨之爆破"
    }
   },
   {
    "id": "Attuned_Wand",
    "name": "調和法杖",
    "reqLevel": 2,
    "implicits": [],
    "grantsSkill": {
     "id": "Mana_Drain",
     "name": "魔力吸取"
    }
   },
   {
    "id": "Siphoning_Wand",
    "name": "虹吸法杖",
    "reqLevel": 11,
    "implicits": [],
    "reqInt": 23,
    "grantsSkill": {
     "id": "Power_Siphon",
     "name": "力量抽取"
    }
   },
   {
    "id": "Volatile_Wand",
    "name": "失衡法杖",
    "reqLevel": 16,
    "implicits": [],
    "reqInt": 31,
    "grantsSkill": {
     "id": "Volatile_Dead",
     "name": "致命之息"
    }
   },
   {
    "id": "Galvanic_Wand",
    "name": "電能法杖",
    "reqLevel": 25,
    "implicits": [],
    "reqInt": 46,
    "grantsSkill": {
     "id": "Galvanic_Field",
     "name": "電光領域"
    }
   },
   {
    "id": "Acrid_Wand",
    "name": "刺鼻法杖",
    "reqLevel": 33,
    "implicits": [],
    "reqInt": 60,
    "grantsSkill": {
     "id": "Decompose",
     "name": "分解"
    }
   },
   {
    "id": "Offering_Wand",
    "name": "奉獻法杖",
    "reqLevel": 38,
    "implicits": [],
    "reqInt": 68,
    "grantsSkill": {
     "id": "Exsanguinate",
     "name": "抽血"
    }
   },
   {
    "id": "Frigid_Wand",
    "name": "冰冷法杖",
    "reqLevel": 45,
    "implicits": [],
    "reqInt": 80,
    "grantsSkill": {
     "id": "Chaos_Bolt",
     "name": "混沌弩箭"
    }
   },
   {
    "id": "Torture_Wand",
    "name": "暴虐法杖",
    "reqLevel": 49,
    "implicits": [],
    "reqInt": 87,
    "grantsSkill": {
     "id": "Chaos_Bolt",
     "name": "混沌弩箭"
    }
   },
   {
    "id": "Critical_Wand",
    "name": "致命法杖",
    "reqLevel": 52,
    "implicits": [],
    "reqInt": 92,
    "grantsSkill": {
     "id": "Chaos_Bolt",
     "name": "混沌弩箭"
    }
   },
   {
    "id": "Primordial_Wand",
    "name": "原始法杖",
    "reqLevel": 56,
    "implicits": [],
    "reqInt": 99,
    "grantsSkill": {
     "id": "Wither",
     "name": "死亡凋零"
    }
   },
   {
    "id": "Dueling_Wand",
    "name": "單挑法杖",
    "reqLevel": 65,
    "implicits": [],
    "reqInt": 114,
    "grantsSkill": {
     "id": "Spellslinger",
     "name": "拋法者"
    }
   },
   {
    "id": "Twisted_Wand",
    "name": "扭曲法杖",
    "reqLevel": 65,
    "implicits": [],
    "reqInt": 114,
    "grantsSkill": {
     "id": "Coiling_Bolts",
     "name": "寂纏彈"
    }
   },
   {
    "id": "Runic_Fork",
    "name": "符文尖叉",
    "reqLevel": 65,
    "implicits": [],
    "reqInt": 114
   }
  ],
  "special": [
   {
    "id": "Runemastered_Runic_Fork",
    "name": "符煉符文尖叉",
    "reqLevel": 65,
    "implicits": [
     {
      "text": "法術技能有(30—50)%機率發射額外2個投射物",
      "template": "法術技能有#%機率發射額外2個投射物",
      "ranges": [
       [
        30,
        50
       ]
      ]
     }
    ],
    "reqInt": 114
   }
  ]
 },
 "Staves": {
  "name": "長杖",
  "slot": "weapon",
  "hands": 2,
  "weaponType": "staff",
  "source": "https://poe2db.tw/tw/Staves",
  "bases": [
   {
    "id": "Ashen_Staff",
    "name": "灰燼長杖",
    "reqLevel": 1,
    "implicits": [],
    "grantsSkill": {
     "id": "Firebolt",
     "name": "火彈"
    }
   },
   {
    "id": "Gelid_Staff",
    "name": "極寒長杖",
    "reqLevel": 2,
    "implicits": [],
    "grantsSkill": {
     "id": "Freezing_Shards",
     "name": "冰凍裂片"
    }
   },
   {
    "id": "Voltaic_Staff",
    "name": "電流長杖",
    "reqLevel": 2,
    "implicits": [],
    "grantsSkill": {
     "id": "Lightning_Bolt",
     "name": "雷彈"
    }
   },
   {
    "id": "Spriggan_Staff",
    "name": "狡詐長杖",
    "reqLevel": 11,
    "implicits": [],
    "reqInt": 23,
    "grantsSkill": {
     "id": "Firebolt",
     "name": "火彈"
    }
   },
   {
    "id": "Pyrophyte_Staff",
    "name": "炎植長杖",
    "reqLevel": 16,
    "implicits": [],
    "reqInt": 31,
    "grantsSkill": {
     "id": "Solar_Orb",
     "name": "日耀球"
    }
   },
   {
    "id": "Chiming_Staff",
    "name": "鳴響長杖",
    "reqLevel": 25,
    "implicits": [],
    "reqInt": 46,
    "grantsSkill": {
     "id": "Sigil_of_Power",
     "name": "咒符之力"
    }
   },
   {
    "id": "Rending_Staff",
    "name": "撕裂長杖",
    "reqLevel": 33,
    "implicits": [],
    "reqInt": 60,
    "grantsSkill": {
     "id": "Soulrend",
     "name": "靈體撕裂"
    }
   },
   {
    "id": "Reaping_Staff",
    "name": "死神長杖",
    "reqLevel": 38,
    "implicits": [],
    "reqInt": 68,
    "grantsSkill": {
     "id": "Reap",
     "name": "收割"
    }
   },
   {
    "id": "Icicle_Staff",
    "name": "冰錐長杖",
    "reqLevel": 45,
    "implicits": [],
    "reqInt": 80,
    "grantsSkill": {
     "id": "Firebolt",
     "name": "火彈"
    }
   },
   {
    "id": "Roaring_Staff",
    "name": "咆哮長杖",
    "reqLevel": 49,
    "implicits": [],
    "reqInt": 87,
    "grantsSkill": {
     "id": "Unleash",
     "name": "釋放"
    }
   },
   {
    "id": "Paralysing_Staff",
    "name": "麻木長杖",
    "reqLevel": 52,
    "implicits": [],
    "reqInt": 92,
    "grantsSkill": {
     "id": "Enervating_Nova",
     "name": "超能新星"
    }
   },
   {
    "id": "Sanctified_Staff",
    "name": "神化長杖",
    "reqLevel": 56,
    "implicits": [],
    "reqInt": 99,
    "grantsSkill": {
     "id": "Consecrate",
     "name": "奉獻"
    }
   },
   {
    "id": "Dark_Staff",
    "name": "黑暗長杖",
    "reqLevel": 65,
    "implicits": [],
    "reqInt": 114,
    "grantsSkill": {
     "id": "Dark_Pact",
     "name": "暗夜血契"
    }
   },
   {
    "id": "Ravenous_Staff",
    "name": "貪婪長杖",
    "reqLevel": 65,
    "implicits": [],
    "reqInt": 114,
    "grantsSkill": {
     "id": "Feast_of_Flesh",
     "name": "血肉盛宴"
    }
   },
   {
    "id": "Permafrost_Staff",
    "name": "永凍長杖",
    "reqLevel": 75,
    "implicits": [],
    "reqInt": 114,
    "grantsSkill": {
     "id": "Heart_of_Ice",
     "name": "冰雪之心"
    }
   },
   {
    "id": "Reflecting_Staff",
    "name": "映像長杖",
    "reqLevel": 70,
    "implicits": [],
    "reqInt": 114,
    "grantsSkill": {
     "id": "Mirror_of_Refraction",
     "name": "鏡面折射"
    }
   },
   {
    "id": "Perching_Staff",
    "name": "棲羽長杖",
    "reqLevel": 65,
    "implicits": [],
    "reqInt": 114,
    "grantsSkill": {
     "id": "Spiraling_Conspiracy",
     "name": "邪鴉旋纏"
    }
   }
  ],
  "special": []
 },
 "Rings": {
  "name": "戒指",
  "slot": "ring",
  "source": "https://poe2db.tw/tw/Rings",
  "bases": [
   {
    "id": "Golden_Hoop",
    "name": "金環",
    "reqLevel": 12,
    "implicits": [
     {
      "text": "+(8—12)點全部能力值",
      "template": "+#點全部能力值",
      "ranges": [
       [
        8,
        12
       ]
      ]
     }
    ]
   },
   {
    "id": "Iron_Ring",
    "name": "鍛鐵戒指",
    "reqLevel": 1,
    "implicits": [
     {
      "text": "攻擊附加1至4物理傷害",
      "template": "攻擊附加#至#物理傷害",
      "ranges": [
       [
        1,
        1
       ],
       [
        4,
        4
       ]
      ]
     }
    ]
   },
   {
    "id": "Lazuli_Ring",
    "name": "青金石戒指",
    "reqLevel": 1,
    "implicits": [
     {
      "text": "+(20—30)最大魔力",
      "template": "+#最大魔力",
      "ranges": [
       [
        20,
        30
       ]
      ]
     }
    ]
   },
   {
    "id": "Ruby_Ring",
    "name": "紅玉戒指",
    "reqLevel": 8,
    "implicits": [
     {
      "text": "+(20—30)%火焰抗性",
      "template": "+#%火焰抗性",
      "ranges": [
       [
        20,
        30
       ]
      ]
     }
    ]
   },
   {
    "id": "Sapphire_Ring",
    "name": "藍玉戒指",
    "reqLevel": 12,
    "implicits": [
     {
      "text": "+(20—30)%冰冷抗性",
      "template": "+#%冰冷抗性",
      "ranges": [
       [
        20,
        30
       ]
      ]
     }
    ]
   },
   {
    "id": "Topaz_Ring",
    "name": "黃玉戒指",
    "reqLevel": 16,
    "implicits": [
     {
      "text": "+(20—30)%閃電抗性",
      "template": "+#%閃電抗性",
      "ranges": [
       [
        20,
        30
       ]
      ]
     }
    ]
   },
   {
    "id": "Amethyst_Ring",
    "name": "紫晶戒指",
    "reqLevel": 20,
    "implicits": [
     {
      "text": "+(7—13)%混沌抗性",
      "template": "+#%混沌抗性",
      "ranges": [
       [
        7,
        13
       ]
      ]
     }
    ]
   },
   {
    "id": "Emerald_Ring",
    "name": "綠寶石戒指",
    "reqLevel": 26,
    "implicits": [
     {
      "text": "+(120—160)命中值",
      "template": "+#命中值",
      "ranges": [
       [
        120,
        160
       ]
      ]
     }
    ]
   },
   {
    "id": "Pearl_Ring",
    "name": "珍珠戒指",
    "reqLevel": 32,
    "implicits": [
     {
      "text": "增加(7—10)%施法速度",
      "template": "增加#%施法速度",
      "ranges": [
       [
        7,
        10
       ]
      ]
     }
    ]
   },
   {
    "id": "Prismatic_Ring",
    "name": "三相戒指",
    "reqLevel": 35,
    "implicits": [
     {
      "text": "+(7—10)%全元素抗性",
      "template": "+#%全元素抗性",
      "ranges": [
       [
        7,
        10
       ]
      ]
     }
    ]
   },
   {
    "id": "Gold_Ring",
    "name": "金光戒指",
    "reqLevel": 40,
    "implicits": [
     {
      "text": "增加(6—15)%找到的物品稀有度",
      "template": "增加#%找到的物品稀有度",
      "ranges": [
       [
        6,
        15
       ]
      ]
     }
    ]
   },
   {
    "id": "Unset_Ring",
    "name": "潛能之戒",
    "reqLevel": 44,
    "implicits": [
     {
      "text": "賦予1個額外技能槽",
      "template": "賦予#個額外技能槽",
      "ranges": [
       [
        1,
        1
       ]
      ]
     }
    ]
   },
   {
    "id": "Abyssal_Signet",
    "name": "深淵之記",
    "reqLevel": 40,
    "implicits": [
     {
      "text": "擊中時造成深淵耗損",
      "template": "擊中時造成深淵耗損",
      "ranges": []
     }
    ]
   },
   {
    "id": "Two-Stone_Ring",
    "name": "雙玉戒指",
    "reqLevel": 35,
    "implicits": [
     {
      "text": "+(12—16)%火焰與冰冷抗性",
      "template": "+#%火焰與冰冷抗性",
      "ranges": [
       [
        12,
        16
       ]
      ]
     }
    ]
   },
   {
    "id": "Biostatic_Ring",
    "name": "恆生之戒",
    "reqLevel": 52,
    "implicits": [
     {
      "text": "+1%最大全部抗性",
      "template": "+#%最大全部抗性",
      "ranges": [
       [
        1,
        1
       ]
      ]
     }
    ]
   },
   {
    "id": "Vitalic_Ring",
    "name": "維生之戒",
    "reqLevel": 40,
    "implicits": [
     {
      "text": "增加(4—6)%最大生命",
      "template": "增加#%最大生命",
      "ranges": [
       [
        4,
        6
       ]
      ]
     }
    ]
   },
   {
    "id": "Mnemonic_Ring",
    "name": "憶念之戒",
    "reqLevel": 40,
    "implicits": [
     {
      "text": "增加(4—6)%最大魔力",
      "template": "增加#%最大魔力",
      "ranges": [
       [
        4,
        6
       ]
      ]
     }
    ]
   },
   {
    "id": "Kinetic_Ring",
    "name": "動力之戒",
    "reqLevel": 40,
    "implicits": [
     {
      "text": "攻擊附加(6—9)至(11—15)物理傷害",
      "template": "攻擊附加#至#物理傷害",
      "ranges": [
       [
        6,
        9
       ],
       [
        11,
        15
       ]
      ]
     }
    ]
   },
   {
    "id": "Oneiric_Ring",
    "name": "夢境之戒",
    "reqLevel": 47,
    "implicits": [
     {
      "text": "增加(11—23)%混沌傷害",
      "template": "增加#%混沌傷害",
      "ranges": [
       [
        11,
        23
       ]
      ]
     }
    ]
   },
   {
    "id": "Grasping_Ring",
    "name": "抓取之戒",
    "reqLevel": 40,
    "implicits": [
     {
      "text": "此物品會被視為手套，自插槽中的物品獲得加成",
      "template": "此物品會被視為手套，自插槽中的物品獲得加成",
      "ranges": []
     }
    ]
   },
   {
    "id": "Ring",
    "name": "戒指",
    "reqLevel": 1,
    "implicits": []
   },
   {
    "id": "Dusk_Ring",
    "name": "幽暗戒指",
    "reqLevel": 1,
    "implicits": [
     {
      "text": "允許前綴+1允許後綴-1",
      "template": "允許前綴+#允許後綴-#",
      "ranges": [
       [
        1,
        1
       ],
       [
        1,
        1
       ]
      ]
     }
    ]
   },
   {
    "id": "Gloam_Ring",
    "name": "黃昏戒指",
    "reqLevel": 1,
    "implicits": [
     {
      "text": "允許前綴-1允許後綴+1",
      "template": "允許前綴-#允許後綴+#",
      "ranges": [
       [
        1,
        1
       ],
       [
        1,
        1
       ]
      ]
     }
    ]
   },
   {
    "id": "Penumbra_Ring",
    "name": "半影戒指",
    "reqLevel": 1,
    "implicits": [
     {
      "text": "允許前綴+2允許後綴-2",
      "template": "允許前綴+#允許後綴-#",
      "ranges": [
       [
        2,
        2
       ],
       [
        2,
        2
       ]
      ]
     }
    ]
   },
   {
    "id": "Tenebrous_Ring",
    "name": "黑暗戒指",
    "reqLevel": 1,
    "implicits": [
     {
      "text": "允許前綴-2允許後綴+2",
      "template": "允許前綴-#允許後綴+#",
      "ranges": [
       [
        2,
        2
       ],
       [
        2,
        2
       ]
      ]
     }
    ]
   },
   {
    "id": "Breach_Ring",
    "name": "裂痕戒指",
    "reqLevel": 40,
    "implicits": [
     {
      "text": "+20%最大品質",
      "template": "+#%最大品質",
      "ranges": [
       [
        20,
        20
       ]
      ]
     }
    ]
   },
   {
    "id": "Refined_Breach_Ring",
    "name": "精製裂痕戒指",
    "reqLevel": 40,
    "implicits": [
     {
      "text": "+25%最大品質",
      "template": "+#%最大品質",
      "ranges": [
       [
        25,
        25
       ]
      ]
     }
    ]
   }
  ],
  "special": []
 },
 "Body_Armours_str": {
  "name": "胸甲（力量）",
  "slot": "body",
  "armourType": "str",
  "source": "https://poe2db.tw/tw/Body_Armours",
  "bases": [
   {
    "id": "Rusted_Cuirass",
    "name": "生鏽胸甲",
    "reqLevel": 1,
    "implicits": [],
    "armour": 45,
    "moveSpeed": -0.05
   },
   {
    "id": "Fur_Plate",
    "name": "毛皮鎧甲",
    "reqLevel": 4,
    "implicits": [],
    "armour": 66,
    "moveSpeed": -0.05,
    "reqStr": 10
   },
   {
    "id": "Iron_Cuirass",
    "name": "鍛鐵胸甲",
    "reqLevel": 11,
    "implicits": [],
    "armour": 115,
    "moveSpeed": -0.05,
    "reqStr": 21
   },
   {
    "id": "Raider_Plate",
    "name": "俠客鎧甲",
    "reqLevel": 16,
    "implicits": [],
    "armour": 150,
    "moveSpeed": -0.05,
    "reqStr": 28
   },
   {
    "id": "Maraketh_Cuirass",
    "name": "馬拉克斯胸甲",
    "reqLevel": 20,
    "implicits": [],
    "armour": 178,
    "moveSpeed": -0.05,
    "reqStr": 34
   },
   {
    "id": "Steel_Plate",
    "name": "堅鋼鎧甲",
    "reqLevel": 27,
    "implicits": [],
    "armour": 228,
    "moveSpeed": -0.05,
    "reqStr": 45
   },
   {
    "id": "Full_Plate",
    "name": "連身鎧甲",
    "reqLevel": 33,
    "implicits": [],
    "armour": 270,
    "moveSpeed": -0.05,
    "reqStr": 54
   },
   {
    "id": "Vaal_Cuirass",
    "name": "瓦爾胸甲",
    "reqLevel": 37,
    "implicits": [],
    "armour": 298,
    "moveSpeed": -0.05,
    "reqStr": 60
   },
   {
    "id": "Juggernaut_Plate",
    "name": "勇士鎧甲",
    "reqLevel": 45,
    "implicits": [],
    "armour": 355,
    "moveSpeed": -0.05,
    "reqStr": 72
   },
   {
    "id": "Chieftain_Cuirass",
    "name": "酋長胸甲",
    "reqLevel": 50,
    "implicits": [],
    "armour": 390,
    "moveSpeed": -0.05,
    "reqStr": 80
   },
   {
    "id": "Colosseum_Plate",
    "name": "決鬥之鎧",
    "reqLevel": 52,
    "implicits": [],
    "armour": 404,
    "moveSpeed": -0.05,
    "reqStr": 83
   },
   {
    "id": "Champion_Cuirass",
    "name": "冠軍胸甲",
    "reqLevel": 58,
    "implicits": [],
    "armour": 446,
    "moveSpeed": -0.05,
    "reqStr": 92
   },
   {
    "id": "Glorious_Plate",
    "name": "榮耀戰鎧",
    "reqLevel": 65,
    "implicits": [],
    "armour": 496,
    "moveSpeed": -0.05,
    "reqStr": 121
   },
   {
    "id": "Conqueror_Plate",
    "name": "征服者鎧甲",
    "reqLevel": 68,
    "implicits": [
     {
      "text": "增加(30—40)%暈眩門檻",
      "template": "增加#%暈眩門檻",
      "ranges": [
       [
        30,
        40
       ]
      ]
     }
    ],
    "armour": 496,
    "moveSpeed": -0.05,
    "reqStr": 121
   },
   {
    "id": "Abyssal_Cuirass",
    "name": "深淵胸甲",
    "reqLevel": 73,
    "implicits": [
     {
      "text": "每秒回復(1.5—2.5)%生命",
      "template": "每秒回復#%生命",
      "ranges": [
       [
        1.5,
        2.5
       ]
      ]
     }
    ],
    "armour": 496,
    "moveSpeed": -0.05,
    "reqStr": 121
   },
   {
    "id": "Barbarian_Plate",
    "name": "野蠻人鎧甲",
    "reqLevel": 45,
    "implicits": [],
    "armour": 355,
    "moveSpeed": -0.05,
    "reqStr": 72
   },
   {
    "id": "Rugged_Cuirass",
    "name": "堅實胸甲",
    "reqLevel": 48,
    "implicits": [],
    "armour": 376,
    "moveSpeed": -0.05,
    "reqStr": 77
   },
   {
    "id": "Sandsworn_Cuirass",
    "name": "沙誓胸甲",
    "reqLevel": 51,
    "implicits": [],
    "armour": 397,
    "moveSpeed": -0.05,
    "reqStr": 82
   },
   {
    "id": "Elegant_Plate",
    "name": "優雅鎧甲",
    "reqLevel": 54,
    "implicits": [],
    "armour": 418,
    "moveSpeed": -0.05,
    "reqStr": 86
   },
   {
    "id": "Heavy_Plate",
    "name": "重型鎧甲",
    "reqLevel": 59,
    "implicits": [],
    "armour": 453,
    "moveSpeed": -0.05,
    "reqStr": 94
   },
   {
    "id": "Stone_Cuirass",
    "name": "岩石胸甲",
    "reqLevel": 62,
    "implicits": [],
    "armour": 474,
    "moveSpeed": -0.05,
    "reqStr": 98
   },
   {
    "id": "Soldier_Cuirass",
    "name": "士兵胸甲",
    "reqLevel": 65,
    "implicits": [],
    "armour": 570,
    "moveSpeed": -0.05,
    "reqStr": 121
   },
   {
    "id": "Ornate_Plate",
    "name": "華麗鎧甲",
    "reqLevel": 70,
    "implicits": [
     {
      "text": "每秒回復(1.5—2.5)%生命",
      "template": "每秒回復#%生命",
      "ranges": [
       [
        1.5,
        2.5
       ]
      ]
     }
    ],
    "armour": 496,
    "moveSpeed": -0.05,
    "reqStr": 121
   },
   {
    "id": "Utzaal_Cuirass",
    "name": "奧札爾胸甲",
    "reqLevel": 75,
    "implicits": [
     {
      "text": "增加(30—40)%暈眩門檻",
      "template": "增加#%暈眩門檻",
      "ranges": [
       [
        30,
        40
       ]
      ]
     }
    ],
    "armour": 496,
    "moveSpeed": -0.05,
    "reqStr": 121
   },
   {
    "id": "Warlord_Cuirass",
    "name": "總督胸甲",
    "reqLevel": 80,
    "implicits": [
     {
      "text": "+(15—25)%的護甲值也會套用至元素傷害",
      "template": "+#%的護甲值也會套用至元素傷害",
      "ranges": [
       [
        15,
        25
       ]
      ]
     }
    ],
    "armour": 496,
    "moveSpeed": -0.05,
    "reqStr": 121
   }
  ],
  "special": [
   {
    "id": "Runemastered_Grasping_Mail",
    "name": "符煉貪婪鎧甲",
    "reqLevel": 65,
    "implicits": [
     {
      "text": "可骰出戒指詞綴",
      "template": "可骰出戒指詞綴",
      "ranges": []
     },
     {
      "text": "催化劑可使用於此物品",
      "template": "催化劑可使用於此物品",
      "ranges": []
     }
    ],
    "armour": 421,
    "moveSpeed": -0.04,
    "other": [
     "保護: 150"
    ],
    "reqStr": 112
   },
   {
    "id": "Runeforged_Rusted_Cuirass",
    "name": "符鍛生鏽胸甲",
    "reqLevel": 1,
    "implicits": [],
    "armour": 45,
    "moveSpeed": -0.05,
    "other": [
     "保護: 29"
    ]
   },
   {
    "id": "Runeforged_Fur_Plate",
    "name": "符鍛毛皮鎧甲",
    "reqLevel": 4,
    "implicits": [],
    "armour": 66,
    "moveSpeed": -0.05,
    "other": [
     "保護: 33"
    ],
    "reqStr": 10
   },
   {
    "id": "Runeforged_Iron_Cuirass",
    "name": "符鍛鍛鐵胸甲",
    "reqLevel": 11,
    "implicits": [],
    "armour": 115,
    "moveSpeed": -0.05,
    "other": [
     "保護: 43"
    ],
    "reqStr": 21
   },
   {
    "id": "Runeforged_Raider_Plate",
    "name": "符鍛俠客鎧甲",
    "reqLevel": 16,
    "implicits": [],
    "armour": 150,
    "moveSpeed": -0.05,
    "other": [
     "保護: 53"
    ],
    "reqStr": 28
   },
   {
    "id": "Runeforged_Maraketh_Cuirass",
    "name": "符鍛馬拉克斯胸甲",
    "reqLevel": 20,
    "implicits": [],
    "armour": 178,
    "moveSpeed": -0.05,
    "other": [
     "保護: 61"
    ],
    "reqStr": 34
   },
   {
    "id": "Runeforged_Steel_Plate",
    "name": "符鍛堅鋼鎧甲",
    "reqLevel": 27,
    "implicits": [],
    "armour": 228,
    "moveSpeed": -0.05,
    "other": [
     "保護: 64"
    ],
    "reqStr": 45
   },
   {
    "id": "Runeforged_Full_Plate",
    "name": "符鍛連身鎧甲",
    "reqLevel": 33,
    "implicits": [],
    "armour": 270,
    "moveSpeed": -0.05,
    "other": [
     "保護: 69"
    ],
    "reqStr": 54
   },
   {
    "id": "Runeforged_Vaal_Cuirass",
    "name": "符鍛瓦爾胸甲",
    "reqLevel": 37,
    "implicits": [],
    "armour": 298,
    "moveSpeed": -0.05,
    "other": [
     "保護: 70"
    ],
    "reqStr": 60
   },
   {
    "id": "Runeforged_Juggernaut_Plate",
    "name": "符鍛勇士鎧甲",
    "reqLevel": 45,
    "implicits": [],
    "armour": 355,
    "moveSpeed": -0.05,
    "other": [
     "保護: 76"
    ],
    "reqStr": 72
   },
   {
    "id": "Runeforged_Chieftain_Cuirass",
    "name": "符鍛酋長胸甲",
    "reqLevel": 50,
    "implicits": [],
    "armour": 390,
    "moveSpeed": -0.05,
    "other": [
     "保護: 69"
    ],
    "reqStr": 80
   },
   {
    "id": "Runeforged_Conqueror_Plate",
    "name": "符鍛征服者鎧甲",
    "reqLevel": 68,
    "implicits": [
     {
      "text": "增加(30—40)%暈眩門檻",
      "template": "增加#%暈眩門檻",
      "ranges": [
       [
        30,
        40
       ]
      ]
     }
    ],
    "armour": 595,
    "moveSpeed": -0.05,
    "reqStr": 121
   },
   {
    "id": "Runeforged_Elegant_Plate",
    "name": "符鍛優雅鎧甲",
    "reqLevel": 54,
    "implicits": [],
    "armour": 401,
    "moveSpeed": -0.05,
    "other": [
     "保護: 73"
    ],
    "reqStr": 86
   },
   {
    "id": "Runeforged_Heavy_Plate",
    "name": "符鍛重型鎧甲",
    "reqLevel": 59,
    "implicits": [],
    "armour": 363,
    "moveSpeed": -0.05,
    "other": [
     "保護: 158"
    ],
    "reqStr": 94
   },
   {
    "id": "Runeforged_Stone_Cuirass",
    "name": "符鍛岩石胸甲",
    "reqLevel": 62,
    "implicits": [],
    "armour": 417,
    "moveSpeed": -0.05,
    "other": [
     "保護: 103"
    ],
    "reqStr": 98
   },
   {
    "id": "Runeforged_Soldier_Cuirass",
    "name": "符鍛士兵胸甲",
    "reqLevel": 65,
    "implicits": [],
    "armour": 258,
    "moveSpeed": -0.05,
    "other": [
     "保護: 365"
    ],
    "reqStr": 121
   },
   {
    "id": "Runeforged_Ornate_Plate",
    "name": "符鍛華麗鎧甲",
    "reqLevel": 70,
    "implicits": [
     {
      "text": "每秒回復(1.5—2.5)%生命",
      "template": "每秒回復#%生命",
      "ranges": [
       [
        1.5,
        2.5
       ]
      ]
     }
    ],
    "armour": 327,
    "moveSpeed": -0.05,
    "other": [
     "保護: 236"
    ],
    "reqStr": 121
   },
   {
    "id": "Runeforged_Utzaal_Cuirass",
    "name": "符鍛奧札爾胸甲",
    "reqLevel": 75,
    "implicits": [
     {
      "text": "增加(30—40)%暈眩門檻",
      "template": "增加#%暈眩門檻",
      "ranges": [
       [
        30,
        40
       ]
      ]
     }
    ],
    "armour": 446,
    "moveSpeed": -0.05,
    "other": [
     "保護: 107"
    ],
    "reqStr": 121
   },
   {
    "id": "Runeforged_Warlord_Cuirass",
    "name": "符鍛總督胸甲",
    "reqLevel": 80,
    "implicits": [
     {
      "text": "+(15—25)%的護甲值也會套用至元素傷害",
      "template": "+#%的護甲值也會套用至元素傷害",
      "ranges": [
       [
        15,
        25
       ]
      ]
     }
    ],
    "armour": 466,
    "moveSpeed": -0.05,
    "other": [
     "保護: 86"
    ],
    "reqStr": 121
   },
   {
    "id": "Runemastered_Rusted_Cuirass",
    "name": "符煉生鏽胸甲",
    "reqLevel": 38,
    "implicits": [],
    "armour": 244,
    "moveSpeed": -0.05,
    "other": [
     "保護: 110"
    ],
    "reqStr": 61
   },
   {
    "id": "Runemastered_Iron_Cuirass",
    "name": "符煉鍛鐵胸甲",
    "reqLevel": 38,
    "implicits": [],
    "armour": 260,
    "moveSpeed": -0.05,
    "other": [
     "保護: 55"
    ],
    "reqStr": 61
   },
   {
    "id": "Runemastered_Raider_Plate",
    "name": "符煉俠客鎧甲",
    "reqLevel": 38,
    "implicits": [],
    "armour": 61,
    "moveSpeed": -0.05,
    "other": [
     "保護: 221"
    ],
    "reqStr": 61
   },
   {
    "id": "Runemastered_Maraketh_Cuirass",
    "name": "符煉馬拉克斯胸甲",
    "reqLevel": 38,
    "implicits": [],
    "armour": 275,
    "moveSpeed": -0.05,
    "other": [
     "保護: 28"
    ],
    "reqStr": 61
   },
   {
    "id": "Runemastered_Steel_Plate",
    "name": "符煉堅鋼鎧甲",
    "reqLevel": 40,
    "implicits": [],
    "armour": 271,
    "moveSpeed": -0.05,
    "other": [
     "保護: 43"
    ],
    "reqStr": 65
   },
   {
    "id": "Runemastered_Full_Plate",
    "name": "符煉連身鎧甲",
    "reqLevel": 45,
    "implicits": [],
    "armour": 231,
    "moveSpeed": -0.05,
    "other": [
     "保護: 126"
    ],
    "reqStr": 72
   },
   {
    "id": "Runemastered_Vaal_Cuirass",
    "name": "符煉瓦爾胸甲",
    "reqLevel": 55,
    "implicits": [],
    "armour": 340,
    "moveSpeed": -0.05,
    "other": [
     "保護: 93"
    ],
    "reqStr": 87
   }
  ]
 },
 "Body_Armours_dex": {
  "name": "胸甲（敏捷）",
  "slot": "body",
  "armourType": "dex",
  "source": "https://poe2db.tw/tw/Body_Armours",
  "bases": [
   {
    "id": "Leather_Vest",
    "name": "皮革背心",
    "reqLevel": 1,
    "implicits": [],
    "evasion": 30,
    "moveSpeed": -0.03
   },
   {
    "id": "Quilted_Vest",
    "name": "襯墊背心",
    "reqLevel": 4,
    "implicits": [],
    "evasion": 49,
    "moveSpeed": -0.03,
    "reqDex": 10
   },
   {
    "id": "Pathfinder_Coat",
    "name": "追獵者外套",
    "reqLevel": 11,
    "implicits": [],
    "evasion": 96,
    "moveSpeed": -0.03,
    "reqDex": 21
   },
   {
    "id": "Shrouded_Vest",
    "name": "籠罩背心",
    "reqLevel": 16,
    "implicits": [],
    "evasion": 128,
    "moveSpeed": -0.03,
    "reqDex": 28
   },
   {
    "id": "Rhoahide_Coat",
    "name": "恐喙鳥皮外套",
    "reqLevel": 22,
    "implicits": [],
    "evasion": 168,
    "moveSpeed": -0.03,
    "reqDex": 37
   },
   {
    "id": "Studded_Vest",
    "name": "鑲釘背心",
    "reqLevel": 26,
    "implicits": [],
    "evasion": 194,
    "moveSpeed": -0.03,
    "reqDex": 43
   },
   {
    "id": "Scouts_Vest",
    "name": "斥侯背心",
    "reqLevel": 33,
    "implicits": [],
    "evasion": 240,
    "moveSpeed": -0.03,
    "reqDex": 54
   },
   {
    "id": "Serpentscale_Coat",
    "name": "蛇鱗外套",
    "reqLevel": 36,
    "implicits": [],
    "evasion": 260,
    "moveSpeed": -0.03,
    "reqDex": 59
   },
   {
    "id": "Corsair_Vest",
    "name": "海盜背心",
    "reqLevel": 45,
    "implicits": [],
    "evasion": 320,
    "moveSpeed": -0.03,
    "reqDex": 72
   },
   {
    "id": "Smuggler_Coat",
    "name": "走私者外套",
    "reqLevel": 51,
    "implicits": [],
    "evasion": 359,
    "moveSpeed": -0.03,
    "reqDex": 82
   },
   {
    "id": "Strider_Vest",
    "name": "疾行者背心",
    "reqLevel": 52,
    "implicits": [],
    "evasion": 366,
    "moveSpeed": -0.03,
    "reqDex": 83
   },
   {
    "id": "Hardleather_Coat",
    "name": "硬皮外套",
    "reqLevel": 56,
    "implicits": [],
    "evasion": 392,
    "moveSpeed": -0.03,
    "reqDex": 89
   },
   {
    "id": "Exquisite_Vest",
    "name": "精美背心",
    "reqLevel": 65,
    "implicits": [],
    "evasion": 451,
    "moveSpeed": -0.03,
    "reqDex": 121
   },
   {
    "id": "Mail_Coat",
    "name": "鎖甲外套",
    "reqLevel": 68,
    "implicits": [
     {
      "text": "減少(20—30)%你身上的減益效果緩速程度",
      "template": "減少#%你身上的減益效果緩速程度",
      "ranges": [
       [
        20,
        30
       ]
      ]
     }
    ],
    "evasion": 451,
    "moveSpeed": -0.03,
    "reqDex": 121
   },
   {
    "id": "Armoured_Vest",
    "name": "裝甲背心",
    "reqLevel": 73,
    "implicits": [
     {
      "text": "增加(30—40)%元素異常狀態門檻",
      "template": "增加#%元素異常狀態門檻",
      "ranges": [
       [
        30,
        40
       ]
      ]
     }
    ],
    "evasion": 451,
    "moveSpeed": -0.03,
    "reqDex": 121
   },
   {
    "id": "Patchwork_Vest",
    "name": "拼湊背心",
    "reqLevel": 45,
    "implicits": [],
    "evasion": 320,
    "moveSpeed": -0.03,
    "reqDex": 72
   },
   {
    "id": "Hunting_Coat",
    "name": "狩獵外套",
    "reqLevel": 48,
    "implicits": [],
    "evasion": 339,
    "moveSpeed": -0.03,
    "reqDex": 77
   },
   {
    "id": "Riding_Coat",
    "name": "騎乘外套",
    "reqLevel": 51,
    "implicits": [],
    "evasion": 359,
    "moveSpeed": -0.03,
    "reqDex": 82
   },
   {
    "id": "Layered_Vest",
    "name": "分層背心",
    "reqLevel": 54,
    "implicits": [],
    "evasion": 379,
    "moveSpeed": -0.03,
    "reqDex": 86
   },
   {
    "id": "Runner_Vest",
    "name": "奔走者背心",
    "reqLevel": 59,
    "implicits": [],
    "evasion": 412,
    "moveSpeed": -0.03,
    "reqDex": 94
   },
   {
    "id": "Lizardscale_Coat",
    "name": "蜥蜴鱗外套",
    "reqLevel": 62,
    "implicits": [],
    "evasion": 432,
    "moveSpeed": -0.03,
    "reqDex": 98
   },
   {
    "id": "Swiftstalker_Coat",
    "name": "迅疾潛獵者外套",
    "reqLevel": 65,
    "implicits": [
     {
      "text": "減少(20—30)%你身上的減益效果緩速程度",
      "template": "減少#%你身上的減益效果緩速程度",
      "ranges": [
       [
        20,
        30
       ]
      ]
     }
    ],
    "evasion": 451,
    "moveSpeed": -0.03,
    "reqDex": 121
   },
   {
    "id": "Slipstrike_Vest",
    "name": "快速打擊背心",
    "reqLevel": 70,
    "implicits": [],
    "evasion": 519,
    "moveSpeed": -0.03,
    "reqDex": 121
   },
   {
    "id": "Wyrmscale_Coat",
    "name": "龍鱗外套",
    "reqLevel": 75,
    "implicits": [
     {
      "text": "增加(30—40)%元素異常狀態門檻",
      "template": "增加#%元素異常狀態門檻",
      "ranges": [
       [
        30,
        40
       ]
      ]
     }
    ],
    "evasion": 451,
    "moveSpeed": -0.03,
    "reqDex": 121
   },
   {
    "id": "Corsair_Coat",
    "name": "海盜外套",
    "reqLevel": 80,
    "implicits": [
     {
      "text": "增加5%移動速度",
      "template": "增加#%移動速度",
      "ranges": [
       [
        5,
        5
       ]
      ]
     }
    ],
    "evasion": 451,
    "moveSpeed": -0.03,
    "reqDex": 121
   }
  ],
  "special": [
   {
    "id": "Runeforged_Leather_Vest",
    "name": "符鍛皮革背心",
    "reqLevel": 1,
    "implicits": [],
    "evasion": 30,
    "moveSpeed": -0.03,
    "other": [
     "保護: 29"
    ]
   },
   {
    "id": "Runeforged_Quilted_Vest",
    "name": "符鍛襯墊背心",
    "reqLevel": 4,
    "implicits": [],
    "evasion": 49,
    "moveSpeed": -0.03,
    "other": [
     "保護: 33"
    ],
    "reqDex": 10
   },
   {
    "id": "Runeforged_Pathfinder_Coat",
    "name": "符鍛追獵者外套",
    "reqLevel": 11,
    "implicits": [],
    "evasion": 96,
    "moveSpeed": -0.03,
    "other": [
     "保護: 43"
    ],
    "reqDex": 21
   },
   {
    "id": "Runeforged_Shrouded_Vest",
    "name": "符鍛籠罩背心",
    "reqLevel": 16,
    "implicits": [],
    "evasion": 128,
    "moveSpeed": -0.03,
    "other": [
     "保護: 53"
    ],
    "reqDex": 28
   },
   {
    "id": "Runeforged_Rhoahide_Coat",
    "name": "符鍛恐喙鳥皮外套",
    "reqLevel": 22,
    "implicits": [],
    "evasion": 168,
    "moveSpeed": -0.03,
    "other": [
     "保護: 65"
    ],
    "reqDex": 37
   },
   {
    "id": "Runeforged_Studded_Vest",
    "name": "符鍛鑲釘背心",
    "reqLevel": 26,
    "implicits": [],
    "evasion": 194,
    "moveSpeed": -0.03,
    "other": [
     "保護: 62"
    ],
    "reqDex": 43
   },
   {
    "id": "Runeforged_Scouts_Vest",
    "name": "符鍛斥侯背心",
    "reqLevel": 33,
    "implicits": [],
    "evasion": 240,
    "moveSpeed": -0.03,
    "other": [
     "保護: 69"
    ],
    "reqDex": 54
   },
   {
    "id": "Runeforged_Serpentscale_Coat",
    "name": "符鍛蛇鱗外套",
    "reqLevel": 36,
    "implicits": [],
    "evasion": 260,
    "moveSpeed": -0.03,
    "other": [
     "保護: 69"
    ],
    "reqDex": 59
   },
   {
    "id": "Runeforged_Corsair_Vest",
    "name": "符鍛海盜背心",
    "reqLevel": 45,
    "implicits": [],
    "evasion": 320,
    "moveSpeed": -0.03,
    "other": [
     "保護: 76"
    ],
    "reqDex": 72
   },
   {
    "id": "Runeforged_Smuggler_Coat",
    "name": "符鍛走私者外套",
    "reqLevel": 51,
    "implicits": [],
    "evasion": 359,
    "moveSpeed": -0.03,
    "other": [
     "保護: 70"
    ],
    "reqDex": 82
   },
   {
    "id": "Runeforged_Layered_Vest",
    "name": "符鍛分層背心",
    "reqLevel": 54,
    "implicits": [],
    "evasion": 364,
    "moveSpeed": -0.03,
    "other": [
     "保護: 73"
    ],
    "reqDex": 86
   },
   {
    "id": "Runeforged_Runner_Vest",
    "name": "符鍛奔走者背心",
    "reqLevel": 59,
    "implicits": [],
    "evasion": 362,
    "moveSpeed": -0.03,
    "other": [
     "保護: 119"
    ],
    "reqDex": 94
   },
   {
    "id": "Runeforged_Lizardscale_Coat",
    "name": "符鍛蜥蜴鱗外套",
    "reqLevel": 62,
    "implicits": [],
    "evasion": 345,
    "moveSpeed": -0.03,
    "other": [
     "保護: 144"
    ],
    "reqDex": 98
   },
   {
    "id": "Runeforged_Swiftstalker_Coat",
    "name": "符鍛迅疾潛獵者外套",
    "reqLevel": 65,
    "implicits": [
     {
      "text": "減少(20—30)%你身上的減益效果緩速程度",
      "template": "減少#%你身上的減益效果緩速程度",
      "ranges": [
       [
        20,
        30
       ]
      ]
     }
    ],
    "evasion": 442,
    "moveSpeed": -0.03,
    "other": [
     "保護: 64"
    ],
    "reqDex": 121
   },
   {
    "id": "Runeforged_Slipstrike_Vest",
    "name": "符鍛快速打擊背心",
    "reqLevel": 70,
    "implicits": [],
    "evasion": 226,
    "moveSpeed": -0.03,
    "other": [
     "保護: 378"
    ],
    "reqDex": 121
   },
   {
    "id": "Runeforged_Wyrmscale_Coat",
    "name": "符鍛龍鱗外套",
    "reqLevel": 75,
    "implicits": [
     {
      "text": "增加(30—40)%元素異常狀態門檻",
      "template": "增加#%元素異常狀態門檻",
      "ranges": [
       [
        30,
        40
       ]
      ]
     }
    ],
    "evasion": 298,
    "moveSpeed": -0.03,
    "other": [
     "保護: 236"
    ],
    "reqDex": 121
   },
   {
    "id": "Runeforged_Corsair_Coat",
    "name": "符鍛海盜外套",
    "reqLevel": 80,
    "implicits": [
     {
      "text": "增加5%移動速度",
      "template": "增加#%移動速度",
      "ranges": [
       [
        5,
        5
       ]
      ]
     }
    ],
    "evasion": 406,
    "moveSpeed": -0.03,
    "other": [
     "保護: 107"
    ],
    "reqDex": 121
   },
   {
    "id": "Runemastered_Leather_Vest",
    "name": "符煉皮革背心",
    "reqLevel": 38,
    "implicits": [],
    "evasion": 82,
    "moveSpeed": -0.03,
    "other": [
     "保護: 165"
    ],
    "reqDex": 61
   },
   {
    "id": "Runemastered_Quilted_Vest",
    "name": "符煉襯墊背心",
    "reqLevel": 38,
    "implicits": [],
    "evasion": 178,
    "moveSpeed": -0.03,
    "other": [
     "保護: 152"
    ],
    "reqDex": 61
   },
   {
    "id": "Runemastered_Pathfinder_Coat",
    "name": "符煉追獵者外套",
    "reqLevel": 38,
    "implicits": [],
    "evasion": 219,
    "moveSpeed": -0.03,
    "other": [
     "保護: 55"
    ],
    "reqDex": 61
   },
   {
    "id": "Runemastered_Shrouded_Vest",
    "name": "符煉籠罩背心",
    "reqLevel": 38,
    "implicits": [],
    "evasion": 164,
    "moveSpeed": -0.03,
    "other": [
     "保護: 138"
    ],
    "reqDex": 61
   },
   {
    "id": "Runemastered_Rhoahide_Coat",
    "name": "符煉恐喙鳥皮外套",
    "reqLevel": 38,
    "implicits": [],
    "evasion": 219,
    "moveSpeed": -0.03,
    "other": [
     "保護: 69"
    ],
    "reqDex": 61
   },
   {
    "id": "Runemastered_Studded_Vest",
    "name": "符煉鑲釘背心",
    "reqLevel": 40,
    "implicits": [],
    "evasion": 301,
    "moveSpeed": -0.03,
    "other": [
     "保護: 29"
    ],
    "reqDex": 65
   },
   {
    "id": "Runemastered_Scouts_Vest",
    "name": "符煉斥侯背心",
    "reqLevel": 55,
    "implicits": [],
    "evasion": 270,
    "moveSpeed": -0.03,
    "other": [
     "保護: 130"
    ],
    "reqDex": 87
   },
   {
    "id": "Runemastered_Serpentscale_Coat",
    "name": "符煉蛇鱗外套",
    "reqLevel": 55,
    "implicits": [],
    "evasion": 385,
    "moveSpeed": -0.03,
    "other": [
     "保護: 19"
    ],
    "reqDex": 87
   },
   {
    "id": "Runemastered_Smuggler_Coat",
    "name": "符煉走私者外套",
    "reqLevel": 65,
    "implicits": [],
    "evasion": 406,
    "moveSpeed": -0.03,
    "other": [
     "保護: 86"
    ],
    "reqDex": 103
   },
   {
    "id": "Runemastered_Strider_Vest",
    "name": "符煉疾行者背心",
    "reqLevel": 70,
    "implicits": [],
    "evasion": 384,
    "moveSpeed": -0.03,
    "other": [
     "保護: 107"
    ],
    "reqDex": 103
   },
   {
    "id": "Runemastered_Exquisite_Vest",
    "name": "符煉精美背心",
    "reqLevel": 70,
    "implicits": [],
    "evasion": 338,
    "moveSpeed": -0.03,
    "other": [
     "保護: 86"
    ],
    "reqDex": 121
   },
   {
    "id": "Runemastered_Armoured_Vest",
    "name": "符煉裝甲背心",
    "reqLevel": 80,
    "implicits": [
     {
      "text": "增加(30—40)%元素異常狀態門檻",
      "template": "增加#%元素異常狀態門檻",
      "ranges": [
       [
        30,
        40
       ]
      ]
     }
    ],
    "evasion": 361,
    "moveSpeed": -0.03,
    "other": [
     "保護: 129"
    ],
    "reqDex": 121
   }
  ]
 },
 "Body_Armours_int": {
  "name": "胸甲（智慧）",
  "slot": "body",
  "armourType": "int",
  "source": "https://poe2db.tw/tw/Body_Armours",
  "bases": [
   {
    "id": "Tattered_Robe",
    "name": "殘破長袍",
    "reqLevel": 1,
    "implicits": [],
    "energyShield": 28,
    "moveSpeed": -0.03
   },
   {
    "id": "Feathered_Robe",
    "name": "羽毛長袍",
    "reqLevel": 5,
    "implicits": [],
    "energyShield": 35,
    "moveSpeed": -0.03,
    "reqInt": 11
   },
   {
    "id": "Hexers_Robe",
    "name": "咒術師長袍",
    "reqLevel": 11,
    "implicits": [],
    "energyShield": 45,
    "moveSpeed": -0.03,
    "reqInt": 21
   },
   {
    "id": "Bone_Raiment",
    "name": "骸骨之衣",
    "reqLevel": 16,
    "implicits": [],
    "energyShield": 54,
    "moveSpeed": -0.03,
    "reqInt": 28
   },
   {
    "id": "Silk_Robe",
    "name": "絲質之袍",
    "reqLevel": 22,
    "implicits": [],
    "energyShield": 64,
    "moveSpeed": -0.03,
    "reqInt": 37
   },
   {
    "id": "Keth_Raiment",
    "name": "凱斯之衣",
    "reqLevel": 28,
    "implicits": [],
    "energyShield": 74,
    "moveSpeed": -0.03,
    "reqInt": 47
   },
   {
    "id": "Votive_Raiment",
    "name": "還願之衣",
    "reqLevel": 33,
    "implicits": [],
    "energyShield": 83,
    "moveSpeed": -0.03,
    "reqInt": 54
   },
   {
    "id": "Altar_Robe",
    "name": "祭壇長袍",
    "reqLevel": 40,
    "implicits": [],
    "energyShield": 95,
    "moveSpeed": -0.03,
    "reqInt": 65
   },
   {
    "id": "Elementalist_Robe",
    "name": "元素使長袍",
    "reqLevel": 45,
    "implicits": [],
    "energyShield": 103,
    "moveSpeed": -0.03,
    "reqInt": 72
   },
   {
    "id": "Mystic_Raiment",
    "name": "神秘之衣",
    "reqLevel": 49,
    "implicits": [],
    "energyShield": 110,
    "moveSpeed": -0.03,
    "reqInt": 78
   },
   {
    "id": "Imperial_Robe",
    "name": "帝國長袍",
    "reqLevel": 52,
    "implicits": [],
    "energyShield": 115,
    "moveSpeed": -0.03,
    "reqInt": 83
   },
   {
    "id": "Plated_Raiment",
    "name": "鎧甲之衣",
    "reqLevel": 58,
    "implicits": [],
    "energyShield": 126,
    "moveSpeed": -0.03,
    "reqInt": 92
   },
   {
    "id": "Havoc_Raiment",
    "name": "禍害之衣",
    "reqLevel": 65,
    "implicits": [],
    "energyShield": 138,
    "moveSpeed": -0.03,
    "reqInt": 121
   },
   {
    "id": "Enlightened_Robe",
    "name": "啟蒙長袍",
    "reqLevel": 68,
    "implicits": [
     {
      "text": "增加(40—50)%魔力回復率",
      "template": "增加#%魔力回復率",
      "ranges": [
       [
        40,
        50
       ]
      ]
     }
    ],
    "energyShield": 138,
    "moveSpeed": -0.03,
    "reqInt": 121
   },
   {
    "id": "Arcane_Raiment",
    "name": "奧術之衣",
    "reqLevel": 73,
    "implicits": [
     {
      "text": "增加(20—25)%能量護盾充能率",
      "template": "增加#%能量護盾充能率",
      "ranges": [
       [
        20,
        25
       ]
      ]
     }
    ],
    "energyShield": 138,
    "moveSpeed": -0.03,
    "reqInt": 121
   },
   {
    "id": "Avian_Robe",
    "name": "飛羽長袍",
    "reqLevel": 45,
    "implicits": [],
    "energyShield": 103,
    "moveSpeed": -0.03,
    "reqInt": 72
   },
   {
    "id": "Cursespeakers_Robe",
    "name": "詛咒語者長袍",
    "reqLevel": 48,
    "implicits": [],
    "energyShield": 109,
    "moveSpeed": -0.03,
    "reqInt": 77
   },
   {
    "id": "Luxurious_Robe",
    "name": "奢華長袍",
    "reqLevel": 51,
    "implicits": [],
    "energyShield": 114,
    "moveSpeed": -0.03,
    "reqInt": 82
   },
   {
    "id": "River_Raiment",
    "name": "河流之衣",
    "reqLevel": 54,
    "implicits": [],
    "energyShield": 119,
    "moveSpeed": -0.03,
    "reqInt": 86
   },
   {
    "id": "Adherents_Raiment",
    "name": "信徒之衣",
    "reqLevel": 59,
    "implicits": [],
    "energyShield": 127,
    "moveSpeed": -0.03,
    "reqInt": 94
   },
   {
    "id": "Ceremonial_Robe",
    "name": "儀式長袍",
    "reqLevel": 62,
    "implicits": [],
    "energyShield": 132,
    "moveSpeed": -0.03,
    "reqInt": 98
   },
   {
    "id": "Vile_Robe",
    "name": "惡毒長袍",
    "reqLevel": 65,
    "implicits": [],
    "energyShield": 171,
    "moveSpeed": -0.03,
    "reqInt": 121
   },
   {
    "id": "Flowing_Raiment",
    "name": "奔流之衣",
    "reqLevel": 70,
    "implicits": [
     {
      "text": "增加(40—50)%魔力回復率",
      "template": "增加#%魔力回復率",
      "ranges": [
       [
        40,
        50
       ]
      ]
     }
    ],
    "energyShield": 153,
    "moveSpeed": -0.03,
    "reqInt": 121
   },
   {
    "id": "Sacramental_Robe",
    "name": "聖禮長袍",
    "reqLevel": 75,
    "implicits": [
     {
      "text": "增加(20—25)%能量護盾充能率",
      "template": "增加#%能量護盾充能率",
      "ranges": [
       [
        20,
        25
       ]
      ]
     }
    ],
    "energyShield": 153,
    "moveSpeed": -0.03,
    "reqInt": 121
   },
   {
    "id": "Feathered_Raiment",
    "name": "羽絨之衣",
    "reqLevel": 80,
    "implicits": [
     {
      "text": "生命值所受的(5—10)%傷害由魔力扣除",
      "template": "生命值所受的#%傷害由魔力扣除",
      "ranges": [
       [
        5,
        10
       ]
      ]
     }
    ],
    "energyShield": 153,
    "moveSpeed": -0.03,
    "reqInt": 121
   }
  ],
  "special": [
   {
    "id": "Runeforged_Tattered_Robe",
    "name": "符鍛殘破長袍",
    "reqLevel": 1,
    "implicits": [],
    "energyShield": 28,
    "moveSpeed": -0.03,
    "other": [
     "保護: 29"
    ]
   },
   {
    "id": "Runeforged_Feathered_Robe",
    "name": "符鍛羽毛長袍",
    "reqLevel": 5,
    "implicits": [],
    "energyShield": 35,
    "moveSpeed": -0.03,
    "other": [
     "保護: 35"
    ],
    "reqInt": 11
   },
   {
    "id": "Runeforged_Hexers_Robe",
    "name": "符鍛咒術師長袍",
    "reqLevel": 11,
    "implicits": [],
    "energyShield": 45,
    "moveSpeed": -0.03,
    "other": [
     "保護: 43"
    ],
    "reqInt": 21
   },
   {
    "id": "Runeforged_Bone_Raiment",
    "name": "符鍛骸骨之衣",
    "reqLevel": 16,
    "implicits": [],
    "energyShield": 54,
    "moveSpeed": -0.03,
    "other": [
     "保護: 53"
    ],
    "reqInt": 28
   },
   {
    "id": "Runeforged_Silk_Robe",
    "name": "符鍛絲質之袍",
    "reqLevel": 22,
    "implicits": [],
    "energyShield": 64,
    "moveSpeed": -0.03,
    "other": [
     "保護: 65"
    ],
    "reqInt": 37
   },
   {
    "id": "Runeforged_Keth_Raiment",
    "name": "符鍛凱斯之衣",
    "reqLevel": 28,
    "implicits": [],
    "energyShield": 74,
    "moveSpeed": -0.03,
    "other": [
     "保護: 66"
    ],
    "reqInt": 47
   },
   {
    "id": "Runeforged_Votive_Raiment",
    "name": "符鍛還願之衣",
    "reqLevel": 33,
    "implicits": [],
    "energyShield": 83,
    "moveSpeed": -0.03,
    "other": [
     "保護: 69"
    ],
    "reqInt": 54
   },
   {
    "id": "Runeforged_Altar_Robe",
    "name": "符鍛祭壇長袍",
    "reqLevel": 40,
    "implicits": [],
    "energyShield": 95,
    "moveSpeed": -0.03,
    "other": [
     "保護: 75"
    ],
    "reqInt": 65
   },
   {
    "id": "Runeforged_Elementalist_Robe",
    "name": "符鍛元素使長袍",
    "reqLevel": 45,
    "implicits": [],
    "energyShield": 103,
    "moveSpeed": -0.03,
    "other": [
     "保護: 76"
    ],
    "reqInt": 72
   },
   {
    "id": "Runeforged_Mystic_Raiment",
    "name": "符鍛神秘之衣",
    "reqLevel": 49,
    "implicits": [],
    "energyShield": 110,
    "moveSpeed": -0.03,
    "other": [
     "保護: 68"
    ],
    "reqInt": 78
   },
   {
    "id": "Runeforged_River_Raiment",
    "name": "符鍛河流之衣",
    "reqLevel": 54,
    "implicits": [],
    "energyShield": 114,
    "moveSpeed": -0.03,
    "other": [
     "保護: 73"
    ],
    "reqInt": 86
   },
   {
    "id": "Runeforged_Adherents_Raiment",
    "name": "符鍛信徒之衣",
    "reqLevel": 59,
    "implicits": [],
    "energyShield": 107,
    "moveSpeed": -0.03,
    "other": [
     "保護: 138"
    ],
    "reqInt": 94
   },
   {
    "id": "Runeforged_Ceremonial_Robe",
    "name": "符鍛儀式長袍",
    "reqLevel": 62,
    "implicits": [],
    "energyShield": 117,
    "moveSpeed": -0.03,
    "other": [
     "保護: 103"
    ],
    "reqInt": 98
   },
   {
    "id": "Runeforged_Vile_Robe",
    "name": "符鍛惡毒長袍",
    "reqLevel": 65,
    "implicits": [],
    "energyShield": 66,
    "moveSpeed": -0.03,
    "other": [
     "保護: 387"
    ],
    "reqInt": 121
   },
   {
    "id": "Runeforged_Flowing_Raiment",
    "name": "符鍛奔流之衣",
    "reqLevel": 70,
    "implicits": [
     {
      "text": "增加(30—40)%符文保護回復率",
      "template": "增加#%符文保護回復率",
      "ranges": [
       [
        30,
        40
       ]
      ]
     }
    ],
    "energyShield": 91,
    "moveSpeed": -0.03,
    "other": [
     "保護: 236"
    ],
    "reqInt": 121
   },
   {
    "id": "Runeforged_Sacramental_Robe",
    "name": "符鍛聖禮長袍",
    "reqLevel": 75,
    "implicits": [
     {
      "text": "增加(20—25)%能量護盾充能率",
      "template": "增加#%能量護盾充能率",
      "ranges": [
       [
        20,
        25
       ]
      ]
     }
    ],
    "energyShield": 142,
    "moveSpeed": -0.03,
    "other": [
     "保護: 64"
    ],
    "reqInt": 121
   },
   {
    "id": "Runeforged_Feathered_Raiment",
    "name": "符鍛羽絨之衣",
    "reqLevel": 80,
    "implicits": [
     {
      "text": "生命值所受的(5—10)%傷害由魔力扣除",
      "template": "生命值所受的#%傷害由魔力扣除",
      "ranges": [
       [
        5,
        10
       ]
      ]
     }
    ],
    "energyShield": 132,
    "moveSpeed": -0.03,
    "other": [
     "保護: 133"
    ],
    "reqInt": 121
   },
   {
    "id": "Runemastered_Tattered_Robe",
    "name": "符煉殘破長袍",
    "reqLevel": 38,
    "implicits": [],
    "energyShield": 9,
    "moveSpeed": -0.03,
    "other": [
     "保護: 138"
    ],
    "reqInt": 61
   },
   {
    "id": "Runemastered_Feathered_Robe",
    "name": "符煉羽毛長袍",
    "reqLevel": 38,
    "implicits": [],
    "energyShield": 55,
    "moveSpeed": -0.03,
    "other": [
     "保護: 99"
    ],
    "reqInt": 61
   },
   {
    "id": "Runemastered_Hexers_Robe",
    "name": "符煉咒術師長袍",
    "reqLevel": 38,
    "implicits": [],
    "energyShield": 64,
    "moveSpeed": -0.03,
    "other": [
     "保護: 83"
    ],
    "reqInt": 61
   },
   {
    "id": "Runemastered_Bone_Raiment",
    "name": "符煉骸骨之衣",
    "reqLevel": 38,
    "implicits": [],
    "energyShield": 46,
    "moveSpeed": -0.03,
    "other": [
     "保護: 138"
    ],
    "reqInt": 61
   },
   {
    "id": "Runemastered_Silk_Robe",
    "name": "符煉絲質之袍",
    "reqLevel": 38,
    "implicits": [],
    "energyShield": 27,
    "moveSpeed": -0.03,
    "other": [
     "保護: 110"
    ],
    "reqInt": 61
   },
   {
    "id": "Runemastered_Keth_Raiment",
    "name": "符煉凱斯之衣",
    "reqLevel": 38,
    "implicits": [],
    "energyShield": 73,
    "moveSpeed": -0.03,
    "other": [
     "保護: 55"
    ],
    "reqInt": 61
   },
   {
    "id": "Runemastered_Votive_Raiment",
    "name": "符煉還願之衣",
    "reqLevel": 55,
    "implicits": [],
    "energyShield": 48,
    "moveSpeed": -0.03,
    "other": [
     "保護: 186"
    ],
    "reqInt": 87
   },
   {
    "id": "Runemastered_Altar_Robe",
    "name": "符煉祭壇長袍",
    "reqLevel": 55,
    "implicits": [],
    "energyShield": 72,
    "moveSpeed": -0.03,
    "other": [
     "保護: 149"
    ],
    "reqInt": 87
   },
   {
    "id": "Runemastered_Elementalist_Robe",
    "name": "符煉元素使長袍",
    "reqLevel": 55,
    "implicits": [],
    "energyShield": 96,
    "moveSpeed": -0.03,
    "other": [
     "保護: 75"
    ],
    "reqInt": 87
   },
   {
    "id": "Runemastered_Plated_Raiment",
    "name": "符煉鎧甲之衣",
    "reqLevel": 65,
    "implicits": [],
    "energyShield": 124,
    "moveSpeed": -0.03,
    "other": [
     "保護: 43"
    ],
    "reqInt": 103
   },
   {
    "id": "Runemastered_Havoc_Raiment",
    "name": "符煉禍害之衣",
    "reqLevel": 70,
    "implicits": [],
    "energyShield": 96,
    "moveSpeed": -0.03,
    "other": [
     "保護: 129"
    ],
    "reqInt": 121
   },
   {
    "id": "Runemastered_Enlightened_Robe",
    "name": "符煉啟蒙長袍",
    "reqLevel": 75,
    "implicits": [
     {
      "text": "增加(40—50)%魔力回復率",
      "template": "增加#%魔力回復率",
      "ranges": [
       [
        40,
        50
       ]
      ]
     }
    ],
    "energyShield": 124,
    "moveSpeed": -0.03,
    "other": [
     "保護: 86"
    ],
    "reqInt": 121
   }
  ]
 },
 "Body_Armours_str_dex": {
  "name": "胸甲（力量/敏捷）",
  "slot": "body",
  "armourType": "str_dex",
  "source": "https://poe2db.tw/tw/Body_Armours",
  "bases": [
   {
    "id": "Chain_Mail",
    "name": "鎖鍊鎖甲",
    "reqLevel": 1,
    "implicits": [],
    "armour": 25,
    "evasion": 16,
    "moveSpeed": -0.04
   },
   {
    "id": "Rogue_Armour",
    "name": "盜賊護甲",
    "reqLevel": 11,
    "implicits": [],
    "armour": 63,
    "evasion": 53,
    "moveSpeed": -0.04,
    "reqStr": 13,
    "reqDex": 13
   },
   {
    "id": "Vagabond_Armour",
    "name": "流浪者護甲",
    "reqLevel": 16,
    "implicits": [],
    "armour": 83,
    "evasion": 71,
    "moveSpeed": -0.04,
    "reqStr": 17,
    "reqDex": 17
   },
   {
    "id": "Cloaked_Mail",
    "name": "斗篷鎖甲",
    "reqLevel": 26,
    "implicits": [],
    "armour": 121,
    "evasion": 107,
    "moveSpeed": -0.04,
    "reqStr": 25,
    "reqDex": 25
   },
   {
    "id": "Explorer_Armour",
    "name": "探索者護甲",
    "reqLevel": 33,
    "implicits": [],
    "armour": 149,
    "evasion": 132,
    "moveSpeed": -0.04,
    "reqStr": 31,
    "reqDex": 31
   },
   {
    "id": "Scale_Mail",
    "name": "鱗片鎖甲",
    "reqLevel": 37,
    "implicits": [],
    "armour": 164,
    "evasion": 147,
    "moveSpeed": -0.04,
    "reqStr": 34,
    "reqDex": 34
   },
   {
    "id": "Knight_Armour",
    "name": "騎士護甲",
    "reqLevel": 45,
    "implicits": [],
    "armour": 195,
    "evasion": 176,
    "moveSpeed": -0.04,
    "reqStr": 41,
    "reqDex": 41
   },
   {
    "id": "Ancestral_Mail",
    "name": "先祖鎖甲",
    "reqLevel": 50,
    "implicits": [],
    "armour": 214,
    "evasion": 194,
    "moveSpeed": -0.04,
    "reqStr": 44,
    "reqDex": 44
   },
   {
    "id": "Lamellar_Mail",
    "name": "分層鎖甲",
    "reqLevel": 52,
    "implicits": [],
    "armour": 222,
    "evasion": 201,
    "moveSpeed": -0.04,
    "reqStr": 46,
    "reqDex": 46
   },
   {
    "id": "Gladiator_Armour",
    "name": "衛士護甲",
    "reqLevel": 58,
    "implicits": [],
    "armour": 245,
    "evasion": 223,
    "moveSpeed": -0.04,
    "reqStr": 51,
    "reqDex": 51
   },
   {
    "id": "Heroic_Armour",
    "name": "英雄護甲",
    "reqLevel": 65,
    "implicits": [
     {
      "text": "+(60—80)最大生命",
      "template": "+#最大生命",
      "ranges": [
       [
        60,
        80
       ]
      ]
     }
    ],
    "armour": 273,
    "evasion": 248,
    "moveSpeed": -0.04,
    "reqStr": 67,
    "reqDex": 67
   },
   {
    "id": "Tournament_Mail",
    "name": "競技鎖甲",
    "reqLevel": 68,
    "implicits": [
     {
      "text": "+(20—25)%火焰抗性",
      "template": "+#%火焰抗性",
      "ranges": [
       [
        20,
        25
       ]
      ]
     }
    ],
    "armour": 273,
    "evasion": 248,
    "moveSpeed": -0.04,
    "reqStr": 67,
    "reqDex": 67
   },
   {
    "id": "Slayer_Armour",
    "name": "處刑者護甲",
    "reqLevel": 73,
    "implicits": [],
    "armour": 273,
    "evasion": 248,
    "moveSpeed": -0.04,
    "reqStr": 67,
    "reqDex": 67
   },
   {
    "id": "Ring_Mail",
    "name": "鐵環鎖甲",
    "reqLevel": 45,
    "implicits": [],
    "armour": 195,
    "evasion": 176,
    "moveSpeed": -0.04,
    "reqStr": 41,
    "reqDex": 41
   },
   {
    "id": "Scoundrel_Armour",
    "name": "惡棍護甲",
    "reqLevel": 48,
    "implicits": [],
    "armour": 207,
    "evasion": 187,
    "moveSpeed": -0.04,
    "reqStr": 43,
    "reqDex": 43
   },
   {
    "id": "Wanderer_Armour",
    "name": "漫遊者護甲",
    "reqLevel": 51,
    "implicits": [],
    "armour": 218,
    "evasion": 197,
    "moveSpeed": -0.04,
    "reqStr": 45,
    "reqDex": 45
   },
   {
    "id": "Mantled_Mail",
    "name": "披風鎖甲",
    "reqLevel": 54,
    "implicits": [],
    "armour": 230,
    "evasion": 208,
    "moveSpeed": -0.04,
    "reqStr": 48,
    "reqDex": 48
   },
   {
    "id": "Trailblazer_Armour",
    "name": "開拓者護甲",
    "reqLevel": 59,
    "implicits": [],
    "armour": 249,
    "evasion": 226,
    "moveSpeed": -0.04,
    "reqStr": 52,
    "reqDex": 52
   },
   {
    "id": "Golden_Mail",
    "name": "耀金鎖甲",
    "reqLevel": 62,
    "implicits": [],
    "armour": 261,
    "evasion": 237,
    "moveSpeed": -0.04,
    "reqStr": 54,
    "reqDex": 54
   },
   {
    "id": "Dastard_Armour",
    "name": "惡徒護甲",
    "reqLevel": 65,
    "implicits": [
     {
      "text": "+(60—80)最大生命",
      "template": "+#最大生命",
      "ranges": [
       [
        60,
        80
       ]
      ]
     }
    ],
    "armour": 303,
    "evasion": 276,
    "moveSpeed": -0.04,
    "reqStr": 67,
    "reqDex": 67
   },
   {
    "id": "Shrouded_Mail",
    "name": "遮蔽鎖甲",
    "reqLevel": 70,
    "implicits": [
     {
      "text": "+(20—25)%火焰抗性",
      "template": "+#%火焰抗性",
      "ranges": [
       [
        20,
        25
       ]
      ]
     }
    ],
    "armour": 273,
    "evasion": 248,
    "moveSpeed": -0.04,
    "reqStr": 67,
    "reqDex": 67
   },
   {
    "id": "Death_Mail",
    "name": "死亡鎖甲",
    "reqLevel": 75,
    "implicits": [],
    "armour": 313,
    "evasion": 285,
    "moveSpeed": -0.04,
    "reqStr": 67,
    "reqDex": 67
   },
   {
    "id": "Thane_Mail",
    "name": "領主鎖甲",
    "reqLevel": 80,
    "implicits": [
     {
      "text": "對你的擊中減少(15—25)%暴擊傷害加成",
      "template": "對你的擊中減少#%暴擊傷害加成",
      "ranges": [
       [
        15,
        25
       ]
      ]
     }
    ],
    "armour": 273,
    "evasion": 248,
    "moveSpeed": -0.04,
    "reqStr": 67,
    "reqDex": 67
   }
  ],
  "special": [
   {
    "id": "Runeforged_Grasping_Mail",
    "name": "符鍛貪婪鎧甲",
    "reqLevel": 65,
    "implicits": [
     {
      "text": "可骰出戒指詞綴",
      "template": "可骰出戒指詞綴",
      "ranges": []
     },
     {
      "text": "催化劑可使用於此物品",
      "template": "催化劑可使用於此物品",
      "ranges": []
     }
    ],
    "armour": 232,
    "evasion": 211,
    "moveSpeed": -0.04,
    "other": [
     "保護: 107"
    ],
    "reqStr": 61,
    "reqDex": 61
   },
   {
    "id": "Runeforged_Chain_Mail",
    "name": "符鍛鎖鍊鎖甲",
    "reqLevel": 1,
    "implicits": [],
    "armour": 25,
    "evasion": 16,
    "moveSpeed": -0.04,
    "other": [
     "保護: 29"
    ]
   },
   {
    "id": "Runeforged_Rogue_Armour",
    "name": "符鍛盜賊護甲",
    "reqLevel": 11,
    "implicits": [],
    "armour": 63,
    "evasion": 53,
    "moveSpeed": -0.04,
    "other": [
     "保護: 43"
    ],
    "reqStr": 13,
    "reqDex": 13
   },
   {
    "id": "Runeforged_Vagabond_Armour",
    "name": "符鍛流浪者護甲",
    "reqLevel": 16,
    "implicits": [],
    "armour": 83,
    "evasion": 71,
    "moveSpeed": -0.04,
    "other": [
     "保護: 53"
    ],
    "reqStr": 17,
    "reqDex": 17
   },
   {
    "id": "Runeforged_Cloaked_Mail",
    "name": "符鍛斗篷鎖甲",
    "reqLevel": 26,
    "implicits": [],
    "armour": 121,
    "evasion": 107,
    "moveSpeed": -0.04,
    "other": [
     "保護: 73"
    ],
    "reqStr": 25,
    "reqDex": 25
   },
   {
    "id": "Runeforged_Explorer_Armour",
    "name": "符鍛探索者護甲",
    "reqLevel": 33,
    "implicits": [],
    "armour": 149,
    "evasion": 132,
    "moveSpeed": -0.04,
    "other": [
     "保護: 74"
    ],
    "reqStr": 31,
    "reqDex": 31
   },
   {
    "id": "Runeforged_Scale_Mail",
    "name": "符鍛鱗片鎖甲",
    "reqLevel": 37,
    "implicits": [],
    "armour": 164,
    "evasion": 147,
    "moveSpeed": -0.04,
    "other": [
     "保護: 78"
    ],
    "reqStr": 34,
    "reqDex": 34
   },
   {
    "id": "Runeforged_Knight_Armour",
    "name": "符鍛騎士護甲",
    "reqLevel": 45,
    "implicits": [],
    "armour": 195,
    "evasion": 176,
    "moveSpeed": -0.04,
    "other": [
     "保護: 85"
    ],
    "reqStr": 41,
    "reqDex": 41
   },
   {
    "id": "Runeforged_Ancestral_Mail",
    "name": "符鍛先祖鎖甲",
    "reqLevel": 50,
    "implicits": [],
    "armour": 214,
    "evasion": 194,
    "moveSpeed": -0.04,
    "other": [
     "保護: 86"
    ],
    "reqStr": 44,
    "reqDex": 44
   },
   {
    "id": "Runeforged_Slayer_Armour",
    "name": "符鍛處刑者護甲",
    "reqLevel": 73,
    "implicits": [],
    "armour": 218,
    "evasion": 199,
    "moveSpeed": -0.04,
    "other": [
     "保護: 107"
    ],
    "reqStr": 67,
    "reqDex": 67
   },
   {
    "id": "Runeforged_Mantled_Mail",
    "name": "符鍛披風鎖甲",
    "reqLevel": 54,
    "implicits": [],
    "armour": 221,
    "evasion": 200,
    "moveSpeed": -0.04,
    "other": [
     "保護: 73"
    ],
    "reqStr": 48,
    "reqDex": 48
   },
   {
    "id": "Runeforged_Trailblazer_Armour",
    "name": "符鍛開拓者護甲",
    "reqLevel": 59,
    "implicits": [],
    "armour": 199,
    "evasion": 181,
    "moveSpeed": -0.04,
    "other": [
     "保護: 158"
    ],
    "reqStr": 52,
    "reqDex": 52
   },
   {
    "id": "Runeforged_Golden_Mail",
    "name": "符鍛耀金鎖甲",
    "reqLevel": 62,
    "implicits": [],
    "armour": 235,
    "evasion": 214,
    "moveSpeed": -0.04,
    "other": [
     "保護: 124"
    ],
    "reqStr": 54,
    "reqDex": 54
   },
   {
    "id": "Runeforged_Dastard_Armour",
    "name": "符鍛惡徒護甲",
    "reqLevel": 65,
    "implicits": [
     {
      "text": "+(60—80)最大生命",
      "template": "+#最大生命",
      "ranges": [
       [
        60,
        80
       ]
      ]
     }
    ],
    "armour": 180,
    "evasion": 164,
    "moveSpeed": -0.04,
    "other": [
     "保護: 236"
    ],
    "reqStr": 67,
    "reqDex": 67
   },
   {
    "id": "Runeforged_Shrouded_Mail",
    "name": "符鍛遮蔽鎖甲",
    "reqLevel": 70,
    "implicits": [
     {
      "text": "+(20—25)%火焰抗性",
      "template": "+#%火焰抗性",
      "ranges": [
       [
        20,
        25
       ]
      ]
     }
    ],
    "armour": 245,
    "evasion": 223,
    "moveSpeed": -0.04,
    "other": [
     "保護: 107"
    ],
    "reqStr": 67,
    "reqDex": 67
   },
   {
    "id": "Runeforged_Death_Mail",
    "name": "符鍛死亡鎖甲",
    "reqLevel": 75,
    "implicits": [],
    "armour": 120,
    "evasion": 109,
    "moveSpeed": -0.04,
    "other": [
     "保護: 408"
    ],
    "reqStr": 67,
    "reqDex": 67
   },
   {
    "id": "Runeforged_Thane_Mail",
    "name": "符鍛領主鎖甲",
    "reqLevel": 80,
    "implicits": [
     {
      "text": "對你的擊中減少(15—25)%暴擊傷害加成",
      "template": "對你的擊中減少#%暴擊傷害加成",
      "ranges": [
       [
        15,
        25
       ]
      ]
     }
    ],
    "armour": 267,
    "evasion": 243,
    "moveSpeed": -0.04,
    "other": [
     "保護: 64"
    ],
    "reqStr": 67,
    "reqDex": 67
   },
   {
    "id": "Runemastered_Chain_Mail",
    "name": "符煉鎖鍊鎖甲",
    "reqLevel": 38,
    "implicits": [],
    "armour": 151,
    "evasion": 135,
    "moveSpeed": -0.04,
    "other": [
     "保護: 55"
    ],
    "reqStr": 35,
    "reqDex": 35
   },
   {
    "id": "Runemastered_Rogue_Armour",
    "name": "符煉盜賊護甲",
    "reqLevel": 38,
    "implicits": [],
    "armour": 118,
    "evasion": 105,
    "moveSpeed": -0.04,
    "other": [
     "保護: 83"
    ],
    "reqStr": 35,
    "reqDex": 35
   },
   {
    "id": "Runemastered_Vagabond_Armour",
    "name": "符煉流浪者護甲",
    "reqLevel": 38,
    "implicits": [],
    "armour": 143,
    "evasion": 128,
    "moveSpeed": -0.04,
    "other": [
     "保護: 41"
    ],
    "reqStr": 35,
    "reqDex": 35
   },
   {
    "id": "Runemastered_Cloaked_Mail",
    "name": "符煉斗篷鎖甲",
    "reqLevel": 40,
    "implicits": [],
    "armour": 114,
    "evasion": 102,
    "moveSpeed": -0.04,
    "other": [
     "保護: 115"
    ],
    "reqStr": 36,
    "reqDex": 36
   },
   {
    "id": "Runemastered_Explorer_Armour",
    "name": "符煉探索者護甲",
    "reqLevel": 55,
    "implicits": [],
    "armour": 199,
    "evasion": 180,
    "moveSpeed": -0.04,
    "other": [
     "保護: 56"
    ],
    "reqStr": 49,
    "reqDex": 49
   },
   {
    "id": "Runemastered_Scale_Mail",
    "name": "符煉鱗片鎖甲",
    "reqLevel": 55,
    "implicits": [],
    "armour": 187,
    "evasion": 170,
    "moveSpeed": -0.04,
    "other": [
     "保護: 75"
    ],
    "reqStr": 49,
    "reqDex": 49
   },
   {
    "id": "Runemastered_Knight_Armour",
    "name": "符煉騎士護甲",
    "reqLevel": 55,
    "implicits": [],
    "armour": 175,
    "evasion": 159,
    "moveSpeed": -0.04,
    "other": [
     "保護: 93"
    ],
    "reqStr": 49,
    "reqDex": 49
   },
   {
    "id": "Runemastered_Ancestral_Mail",
    "name": "符煉先祖鎖甲",
    "reqLevel": 65,
    "implicits": [],
    "armour": 191,
    "evasion": 174,
    "moveSpeed": -0.04,
    "other": [
     "保護: 107"
    ],
    "reqStr": 57,
    "reqDex": 57
   },
   {
    "id": "Runemastered_Heroic_Armour",
    "name": "符煉英雄護甲",
    "reqLevel": 65,
    "implicits": [
     {
      "text": "+(60—80)最大生命",
      "template": "+#最大生命",
      "ranges": [
       [
        60,
        80
       ]
      ]
     }
    ],
    "armour": 136,
    "evasion": 124,
    "moveSpeed": -0.04,
    "other": [
     "保護: 215"
    ],
    "reqStr": 67,
    "reqDex": 67
   }
  ]
 },
 "Body_Armours_str_int": {
  "name": "胸甲（力量/智慧）",
  "slot": "body",
  "armourType": "str_int",
  "source": "https://poe2db.tw/tw/Body_Armours",
  "bases": [
   {
    "id": "Pilgrim_Vestments",
    "name": "朝聖者法衣",
    "reqLevel": 1,
    "implicits": [],
    "armour": 25,
    "energyShield": 16,
    "moveSpeed": -0.04
   },
   {
    "id": "Pelt_Mantle",
    "name": "堅皮披肩",
    "reqLevel": 10,
    "implicits": [],
    "armour": 59,
    "energyShield": 24,
    "moveSpeed": -0.04,
    "reqStr": 12,
    "reqInt": 12
   },
   {
    "id": "Mail_Vestments",
    "name": "鎖甲法衣",
    "reqLevel": 16,
    "implicits": [],
    "armour": 83,
    "energyShield": 30,
    "moveSpeed": -0.04,
    "reqStr": 17,
    "reqInt": 17
   },
   {
    "id": "Shaman_Mantle",
    "name": "薩滿披肩",
    "reqLevel": 28,
    "implicits": [],
    "armour": 129,
    "energyShield": 41,
    "moveSpeed": -0.04,
    "reqStr": 26,
    "reqInt": 26
   },
   {
    "id": "Ironclad_Vestments",
    "name": "鐵甲法衣",
    "reqLevel": 33,
    "implicits": [],
    "armour": 149,
    "energyShield": 46,
    "moveSpeed": -0.04,
    "reqStr": 31,
    "reqInt": 31
   },
   {
    "id": "Sacrificial_Mantle",
    "name": "獻祭披肩",
    "reqLevel": 36,
    "implicits": [],
    "armour": 160,
    "energyShield": 48,
    "moveSpeed": -0.04,
    "reqStr": 33,
    "reqInt": 33
   },
   {
    "id": "Cleric_Vestments",
    "name": "教士法衣",
    "reqLevel": 45,
    "implicits": [],
    "armour": 195,
    "energyShield": 57,
    "moveSpeed": -0.04,
    "reqStr": 41,
    "reqInt": 41
   },
   {
    "id": "Tideseer_Mantle",
    "name": "潮汐先知披肩",
    "reqLevel": 51,
    "implicits": [],
    "armour": 218,
    "energyShield": 63,
    "moveSpeed": -0.04,
    "reqStr": 45,
    "reqInt": 45
   },
   {
    "id": "Gilded_Vestments",
    "name": "鍍金法衣",
    "reqLevel": 52,
    "implicits": [],
    "armour": 222,
    "energyShield": 63,
    "moveSpeed": -0.04,
    "reqStr": 46,
    "reqInt": 46
   },
   {
    "id": "Venerated_Mantle",
    "name": "崇敬披肩",
    "reqLevel": 54,
    "implicits": [],
    "armour": 230,
    "energyShield": 65,
    "moveSpeed": -0.04,
    "reqStr": 48,
    "reqInt": 48
   },
   {
    "id": "Revered_Vestments",
    "name": "尊敬法衣",
    "reqLevel": 65,
    "implicits": [
     {
      "text": "+1%最大全元素抗性",
      "template": "+#%最大全元素抗性",
      "ranges": [
       [
        1,
        1
       ]
      ]
     }
    ],
    "armour": 273,
    "energyShield": 76,
    "moveSpeed": -0.04,
    "reqStr": 67,
    "reqInt": 67
   },
   {
    "id": "Corvus_Mantle",
    "name": "烏鴉披肩",
    "reqLevel": 68,
    "implicits": [
     {
      "text": "+(20—30)精魂",
      "template": "+#精魂",
      "ranges": [
       [
        20,
        30
       ]
      ]
     }
    ],
    "armour": 273,
    "energyShield": 76,
    "moveSpeed": -0.04,
    "reqStr": 67,
    "reqInt": 67
   },
   {
    "id": "Zenith_Vestments",
    "name": "極盛法衣",
    "reqLevel": 73,
    "implicits": [],
    "armour": 273,
    "energyShield": 76,
    "moveSpeed": -0.04,
    "reqStr": 67,
    "reqInt": 67
   },
   {
    "id": "Ornate_Ringmail",
    "name": "華貴環甲",
    "reqLevel": 43,
    "implicits": [],
    "armour": 749,
    "energyShield": 220,
    "moveSpeed": -0.04,
    "reqStr": 45,
    "reqInt": 45
   },
   {
    "id": "Ancient_Mail",
    "name": "遠古鎖甲",
    "reqLevel": 70,
    "implicits": [],
    "armour": 273,
    "energyShield": 76,
    "moveSpeed": -0.04,
    "reqStr": 67,
    "reqInt": 67
   },
   {
    "id": "Templar_Vestments",
    "name": "聖騎士法衣",
    "reqLevel": 45,
    "implicits": [],
    "armour": 195,
    "energyShield": 57,
    "moveSpeed": -0.04,
    "reqStr": 41,
    "reqInt": 41
   },
   {
    "id": "Bearskin_Mantle",
    "name": "熊皮披肩",
    "reqLevel": 48,
    "implicits": [],
    "armour": 207,
    "energyShield": 60,
    "moveSpeed": -0.04,
    "reqStr": 43,
    "reqInt": 43
   },
   {
    "id": "Chain_Vestments",
    "name": "鎖鏈法衣",
    "reqLevel": 51,
    "implicits": [],
    "armour": 218,
    "energyShield": 63,
    "moveSpeed": -0.04,
    "reqStr": 45,
    "reqInt": 45
   },
   {
    "id": "Occultist_Mantle",
    "name": "秘術披肩",
    "reqLevel": 54,
    "implicits": [],
    "armour": 230,
    "energyShield": 65,
    "moveSpeed": -0.04,
    "reqStr": 48,
    "reqInt": 48
   },
   {
    "id": "Plated_Vestments",
    "name": "鎧甲法衣",
    "reqLevel": 59,
    "implicits": [],
    "armour": 249,
    "energyShield": 70,
    "moveSpeed": -0.04,
    "reqStr": 52,
    "reqInt": 52
   },
   {
    "id": "Heartcarver_Mantle",
    "name": "雕心者披肩",
    "reqLevel": 62,
    "implicits": [],
    "armour": 261,
    "energyShield": 73,
    "moveSpeed": -0.04,
    "reqStr": 54,
    "reqInt": 54
   },
   {
    "id": "Wolfskin_Mantle",
    "name": "狼皮披肩",
    "reqLevel": 65,
    "implicits": [],
    "armour": 313,
    "energyShield": 87,
    "moveSpeed": -0.04,
    "reqStr": 67,
    "reqInt": 67
   },
   {
    "id": "Conjurer_Mantle",
    "name": "巫術師披肩",
    "reqLevel": 70,
    "implicits": [
     {
      "text": "+(20—30)精魂",
      "template": "+#精魂",
      "ranges": [
       [
        20,
        30
       ]
      ]
     }
    ],
    "armour": 273,
    "energyShield": 76,
    "moveSpeed": -0.04,
    "reqStr": 67,
    "reqInt": 67
   },
   {
    "id": "Death_Mantle",
    "name": "死亡披肩",
    "reqLevel": 75,
    "implicits": [
     {
      "text": "+1%最大全元素抗性",
      "template": "+#%最大全元素抗性",
      "ranges": [
       [
        1,
        1
       ]
      ]
     }
    ],
    "armour": 273,
    "energyShield": 76,
    "moveSpeed": -0.04,
    "reqStr": 67,
    "reqInt": 67
   },
   {
    "id": "Seastorm_Mantle",
    "name": "海洋風暴披肩",
    "reqLevel": 80,
    "implicits": [
     {
      "text": "承受的(8—14)%傷害補償為生命",
      "template": "承受的#%傷害補償為生命",
      "ranges": [
       [
        8,
        14
       ]
      ]
     }
    ],
    "armour": 273,
    "energyShield": 76,
    "moveSpeed": -0.04,
    "reqStr": 67,
    "reqInt": 67
   }
  ],
  "special": [
   {
    "id": "Runeforged_Pilgrim_Vestments",
    "name": "符鍛朝聖者法衣",
    "reqLevel": 1,
    "implicits": [],
    "armour": 25,
    "energyShield": 16,
    "moveSpeed": -0.04,
    "other": [
     "保護: 29"
    ]
   },
   {
    "id": "Runeforged_Pelt_Mantle",
    "name": "符鍛堅皮披肩",
    "reqLevel": 10,
    "implicits": [],
    "armour": 59,
    "energyShield": 24,
    "moveSpeed": -0.04,
    "other": [
     "保護: 41"
    ],
    "reqStr": 12,
    "reqInt": 12
   },
   {
    "id": "Runeforged_Mail_Vestments",
    "name": "符鍛鎖甲法衣",
    "reqLevel": 16,
    "implicits": [],
    "armour": 83,
    "energyShield": 30,
    "moveSpeed": -0.04,
    "other": [
     "保護: 53"
    ],
    "reqStr": 17,
    "reqInt": 17
   },
   {
    "id": "Runeforged_Shaman_Mantle",
    "name": "符鍛薩滿披肩",
    "reqLevel": 28,
    "implicits": [],
    "armour": 129,
    "energyShield": 41,
    "moveSpeed": -0.04,
    "other": [
     "保護: 77"
    ],
    "reqStr": 26,
    "reqInt": 26
   },
   {
    "id": "Runeforged_Ironclad_Vestments",
    "name": "符鍛鐵甲法衣",
    "reqLevel": 33,
    "implicits": [],
    "armour": 149,
    "energyShield": 46,
    "moveSpeed": -0.04,
    "other": [
     "保護: 74"
    ],
    "reqStr": 31,
    "reqInt": 31
   },
   {
    "id": "Runeforged_Sacrificial_Mantle",
    "name": "符鍛獻祭披肩",
    "reqLevel": 36,
    "implicits": [],
    "armour": 160,
    "energyShield": 48,
    "moveSpeed": -0.04,
    "other": [
     "保護: 77"
    ],
    "reqStr": 33,
    "reqInt": 33
   },
   {
    "id": "Runeforged_Cleric_Vestments",
    "name": "符鍛教士法衣",
    "reqLevel": 45,
    "implicits": [],
    "armour": 195,
    "energyShield": 57,
    "moveSpeed": -0.04,
    "other": [
     "保護: 85"
    ],
    "reqStr": 41,
    "reqInt": 41
   },
   {
    "id": "Runeforged_Tideseer_Mantle",
    "name": "符鍛潮汐先知披肩",
    "reqLevel": 51,
    "implicits": [],
    "armour": 218,
    "energyShield": 63,
    "moveSpeed": -0.04,
    "other": [
     "保護: 87"
    ],
    "reqStr": 45,
    "reqInt": 45
   },
   {
    "id": "Runeforged_Occultist_Mantle",
    "name": "符鍛秘術披肩",
    "reqLevel": 54,
    "implicits": [],
    "armour": 193,
    "energyShield": 55,
    "moveSpeed": -0.04,
    "other": [
     "保護: 128"
    ],
    "reqStr": 48,
    "reqInt": 48
   },
   {
    "id": "Runeforged_Plated_Vestments",
    "name": "符鍛鎧甲法衣",
    "reqLevel": 59,
    "implicits": [],
    "armour": 199,
    "energyShield": 56,
    "moveSpeed": -0.04,
    "other": [
     "保護: 158"
    ],
    "reqStr": 52,
    "reqInt": 52
   },
   {
    "id": "Runeforged_Heartcarver_Mantle",
    "name": "符鍛雕心者披肩",
    "reqLevel": 62,
    "implicits": [],
    "armour": 230,
    "energyShield": 64,
    "moveSpeed": -0.04,
    "other": [
     "保護: 103"
    ],
    "reqStr": 54,
    "reqInt": 54
   },
   {
    "id": "Runeforged_Wolfskin_Mantle",
    "name": "符鍛狼皮披肩",
    "reqLevel": 65,
    "implicits": [],
    "armour": 114,
    "energyShield": 32,
    "moveSpeed": -0.04,
    "other": [
     "保護: 417"
    ],
    "reqStr": 67,
    "reqInt": 67
   },
   {
    "id": "Runeforged_Conjurer_Mantle",
    "name": "符鍛巫術師披肩",
    "reqLevel": 70,
    "implicits": [
     {
      "text": "+(20—30)精魂",
      "template": "+#精魂",
      "ranges": [
       [
        20,
        30
       ]
      ]
     }
    ],
    "armour": 245,
    "energyShield": 68,
    "moveSpeed": -0.04,
    "other": [
     "保護: 107"
    ],
    "reqStr": 67,
    "reqInt": 67
   },
   {
    "id": "Runeforged_Death_Mantle",
    "name": "符鍛死亡披肩",
    "reqLevel": 75,
    "implicits": [
     {
      "text": "+1%最大全元素抗性",
      "template": "+#%最大全元素抗性",
      "ranges": [
       [
        1,
        1
       ]
      ]
     }
    ],
    "armour": 191,
    "energyShield": 53,
    "moveSpeed": -0.04,
    "other": [
     "保護: 215"
    ],
    "reqStr": 67,
    "reqInt": 67
   },
   {
    "id": "Runeforged_Seastorm_Mantle",
    "name": "符鍛海洋風暴披肩",
    "reqLevel": 80,
    "implicits": [
     {
      "text": "承受的(8—14)%傷害補償為生命",
      "template": "承受的#%傷害補償為生命",
      "ranges": [
       [
        8,
        14
       ]
      ]
     }
    ],
    "armour": 112,
    "energyShield": 31,
    "moveSpeed": -0.04,
    "other": [
     "保護: 344"
    ],
    "reqStr": 67,
    "reqInt": 67
   },
   {
    "id": "Runemastered_Pilgrim_Vestments",
    "name": "符煉朝聖者法衣",
    "reqLevel": 38,
    "implicits": [],
    "armour": 202,
    "energyShield": 60,
    "moveSpeed": -0.04,
    "other": [
     "保護: 55"
    ],
    "reqStr": 35,
    "reqInt": 35
   },
   {
    "id": "Runemastered_Mail_Vestments",
    "name": "符煉鎖甲法衣",
    "reqLevel": 38,
    "implicits": [],
    "armour": 118,
    "energyShield": 35,
    "moveSpeed": -0.04,
    "other": [
     "保護: 83"
    ],
    "reqStr": 35,
    "reqInt": 35
   },
   {
    "id": "Runemastered_Shaman_Mantle",
    "name": "符煉薩滿披肩",
    "reqLevel": 38,
    "implicits": [],
    "armour": 141,
    "energyShield": 42,
    "moveSpeed": -0.04,
    "other": [
     "保護: 44"
    ],
    "reqStr": 35,
    "reqInt": 35
   },
   {
    "id": "Runemastered_Ironclad_Vestments",
    "name": "符煉鐵甲法衣",
    "reqLevel": 55,
    "implicits": [],
    "armour": 210,
    "energyShield": 60,
    "moveSpeed": -0.04,
    "other": [
     "保護: 37"
    ],
    "reqStr": 49,
    "reqInt": 49
   },
   {
    "id": "Runemastered_Sacrificial_Mantle",
    "name": "符煉獻祭披肩",
    "reqLevel": 55,
    "implicits": [],
    "armour": 210,
    "energyShield": 60,
    "moveSpeed": -0.04,
    "other": [
     "保護: 37"
    ],
    "reqStr": 49,
    "reqInt": 49
   },
   {
    "id": "Runemastered_Cleric_Vestments",
    "name": "符煉教士法衣",
    "reqLevel": 55,
    "implicits": [],
    "armour": 187,
    "energyShield": 53,
    "moveSpeed": -0.04,
    "other": [
     "保護: 75"
    ],
    "reqStr": 49,
    "reqInt": 49
   },
   {
    "id": "Runemastered_Tideseer_Mantle",
    "name": "符煉潮汐先知披肩",
    "reqLevel": 65,
    "implicits": [],
    "armour": 55,
    "energyShield": 15,
    "moveSpeed": -0.04,
    "other": [
     "保護: 129"
    ],
    "reqStr": 57,
    "reqInt": 57
   },
   {
    "id": "Runemastered_Gilded_Vestments",
    "name": "符煉鍍金法衣",
    "reqLevel": 65,
    "implicits": [],
    "armour": 218,
    "energyShield": 61,
    "moveSpeed": -0.04,
    "other": [
     "保護: 86"
    ],
    "reqStr": 57,
    "reqInt": 57
   },
   {
    "id": "Runemastered_Revered_Vestments",
    "name": "符煉尊敬法衣",
    "reqLevel": 70,
    "implicits": [
     {
      "text": "+1%最大全元素抗性",
      "template": "+#%最大全元素抗性",
      "ranges": [
       [
        1,
        1
       ]
      ]
     },
     {
      "text": "增加(30—50)%你身上的秘能波動效果",
      "template": "增加#%你身上的秘能波動效果",
      "ranges": [
       [
        30,
        50
       ]
      ]
     }
    ],
    "armour": 232,
    "energyShield": 64,
    "moveSpeed": -0.04,
    "other": [
     "保護: 86"
    ],
    "reqStr": 67,
    "reqInt": 67
   },
   {
    "id": "Runemastered_Corvus_Mantle",
    "name": "符煉烏鴉披肩",
    "reqLevel": 70,
    "implicits": [
     {
      "text": "+(20—30)精魂",
      "template": "+#精魂",
      "ranges": [
       [
        20,
        30
       ]
      ]
     }
    ],
    "armour": 218,
    "energyShield": 61,
    "moveSpeed": -0.04,
    "other": [
     "保護: 86"
    ],
    "reqStr": 67,
    "reqInt": 67
   },
   {
    "id": "Runemastered_Ornate_Ringmail",
    "name": "符煉華貴環甲",
    "reqLevel": 55,
    "implicits": [],
    "armour": 725,
    "energyShield": 206,
    "moveSpeed": -0.04,
    "other": [
     "保護: 130"
    ],
    "reqStr": 57,
    "reqInt": 57
   },
   {
    "id": "Runemastered_Ancient_Mail",
    "name": "符煉遠古鎖甲",
    "reqLevel": 70,
    "implicits": [],
    "armour": 218,
    "energyShield": 61,
    "moveSpeed": -0.04,
    "other": [
     "保護: 86"
    ],
    "reqStr": 67,
    "reqInt": 67
   }
  ]
 },
 "Body_Armours_dex_int": {
  "name": "胸甲（敏捷/智慧）",
  "slot": "body",
  "armourType": "dex_int",
  "source": "https://poe2db.tw/tw/Body_Armours",
  "bases": [
   {
    "id": "Hermit_Garb",
    "name": "隱士裝束",
    "reqLevel": 1,
    "implicits": [],
    "evasion": 16,
    "energyShield": 16,
    "moveSpeed": -0.03
   },
   {
    "id": "Waxed_Jacket",
    "name": "打蠟外衣",
    "reqLevel": 11,
    "implicits": [],
    "evasion": 53,
    "energyShield": 25,
    "moveSpeed": -0.03,
    "reqDex": 13,
    "reqInt": 13
   },
   {
    "id": "Marabout_Garb",
    "name": "修士裝束",
    "reqLevel": 16,
    "implicits": [],
    "evasion": 71,
    "energyShield": 30,
    "moveSpeed": -0.03,
    "reqDex": 17,
    "reqInt": 17
   },
   {
    "id": "Wayfarer_Jacket",
    "name": "旅人外衣",
    "reqLevel": 28,
    "implicits": [],
    "evasion": 114,
    "energyShield": 41,
    "moveSpeed": -0.03,
    "reqDex": 26,
    "reqInt": 26
   },
   {
    "id": "Anchorite_Garb",
    "name": "隱者裝束",
    "reqLevel": 33,
    "implicits": [],
    "evasion": 132,
    "energyShield": 46,
    "moveSpeed": -0.03,
    "reqDex": 31,
    "reqInt": 31
   },
   {
    "id": "Scalpers_Jacket",
    "name": "投機者外衣",
    "reqLevel": 39,
    "implicits": [],
    "evasion": 154,
    "energyShield": 51,
    "moveSpeed": -0.03,
    "reqDex": 35,
    "reqInt": 35
   },
   {
    "id": "Scoundrel_Jacket",
    "name": "流氓外衣",
    "reqLevel": 45,
    "implicits": [],
    "evasion": 176,
    "energyShield": 57,
    "moveSpeed": -0.03,
    "reqDex": 41,
    "reqInt": 41
   },
   {
    "id": "Ascetic_Garb",
    "name": "苦行者裝束",
    "reqLevel": 51,
    "implicits": [],
    "evasion": 197,
    "energyShield": 63,
    "moveSpeed": -0.03,
    "reqDex": 45,
    "reqInt": 45
   },
   {
    "id": "Clandestine_Jacket",
    "name": "隱蔽外衣",
    "reqLevel": 52,
    "implicits": [],
    "evasion": 201,
    "energyShield": 63,
    "moveSpeed": -0.03,
    "reqDex": 46,
    "reqInt": 46
   },
   {
    "id": "Monastic_Garb",
    "name": "僧侶裝束",
    "reqLevel": 56,
    "implicits": [],
    "evasion": 216,
    "energyShield": 67,
    "moveSpeed": -0.03,
    "reqDex": 50,
    "reqInt": 50
   },
   {
    "id": "Torment_Jacket",
    "name": "苦難外衣",
    "reqLevel": 65,
    "implicits": [],
    "evasion": 248,
    "energyShield": 76,
    "moveSpeed": -0.03,
    "reqDex": 67,
    "reqInt": 67
   },
   {
    "id": "Devout_Garb",
    "name": "虔誠裝束",
    "reqLevel": 68,
    "implicits": [
     {
      "text": "+(7—13)%混沌抗性",
      "template": "+#%混沌抗性",
      "ranges": [
       [
        7,
        13
       ]
      ]
     }
    ],
    "evasion": 248,
    "energyShield": 76,
    "moveSpeed": -0.03,
    "reqDex": 67,
    "reqInt": 67
   },
   {
    "id": "Assassin_Garb",
    "name": "刺客裝束",
    "reqLevel": 73,
    "implicits": [
     {
      "text": "增加5%移動速度",
      "template": "增加#%移動速度",
      "ranges": [
       [
        5,
        5
       ]
      ]
     }
    ],
    "evasion": 248,
    "energyShield": 76,
    "moveSpeed": -0.03,
    "reqDex": 67,
    "reqInt": 67
   },
   {
    "id": "Oiled_Jacket",
    "name": "上油外衣",
    "reqLevel": 48,
    "implicits": [],
    "evasion": 187,
    "energyShield": 60,
    "moveSpeed": -0.03,
    "reqDex": 43,
    "reqInt": 43
   },
   {
    "id": "Evangelist_Garb",
    "name": "傳道者裝束",
    "reqLevel": 51,
    "implicits": [],
    "evasion": 197,
    "energyShield": 63,
    "moveSpeed": -0.03,
    "reqDex": 45,
    "reqInt": 45
   },
   {
    "id": "Itinerant_Jacket",
    "name": "遊歷者外衣",
    "reqLevel": 54,
    "implicits": [],
    "evasion": 208,
    "energyShield": 65,
    "moveSpeed": -0.03,
    "reqDex": 48,
    "reqInt": 48
   },
   {
    "id": "Hatungo_Garb",
    "name": "靈語者裝束",
    "reqLevel": 59,
    "implicits": [],
    "evasion": 226,
    "energyShield": 70,
    "moveSpeed": -0.03,
    "reqDex": 52,
    "reqInt": 52
   },
   {
    "id": "Hawkers_Jacket",
    "name": "飼鷹者外衣",
    "reqLevel": 62,
    "implicits": [],
    "evasion": 237,
    "energyShield": 73,
    "moveSpeed": -0.03,
    "reqDex": 54,
    "reqInt": 54
   },
   {
    "id": "Sleek_Jacket",
    "name": "光滑外衣",
    "reqLevel": 65,
    "implicits": [],
    "evasion": 285,
    "energyShield": 87,
    "moveSpeed": -0.03,
    "reqDex": 67,
    "reqInt": 67
   },
   {
    "id": "Rambler_Jacket",
    "name": "漫步者外衣",
    "reqLevel": 70,
    "implicits": [
     {
      "text": "+(7—13)%混沌抗性",
      "template": "+#%混沌抗性",
      "ranges": [
       [
        7,
        13
       ]
      ]
     }
    ],
    "evasion": 248,
    "energyShield": 76,
    "moveSpeed": -0.03,
    "reqDex": 67,
    "reqInt": 67
   },
   {
    "id": "Falconers_Jacket",
    "name": "訓鷹者外衣",
    "reqLevel": 75,
    "implicits": [
     {
      "text": "增加5%移動速度",
      "template": "增加#%移動速度",
      "ranges": [
       [
        5,
        5
       ]
      ]
     }
    ],
    "evasion": 248,
    "energyShield": 76,
    "moveSpeed": -0.03,
    "reqDex": 67,
    "reqInt": 67
   },
   {
    "id": "Austere_Garb",
    "name": "樸素裝束",
    "reqLevel": 80,
    "implicits": [
     {
      "text": "減少(10—15)%身上元素異常狀態時間",
      "template": "減少#%身上元素異常狀態時間",
      "ranges": [
       [
        10,
        15
       ]
      ]
     }
    ],
    "evasion": 248,
    "energyShield": 76,
    "moveSpeed": -0.03,
    "reqDex": 67,
    "reqInt": 67
   },
   {
    "id": "Primal_Markings",
    "name": "野性標記",
    "reqLevel": 70,
    "implicits": [],
    "evasion": 268,
    "energyShield": 82,
    "moveSpeed": -0.03,
    "reqDex": 67,
    "reqInt": 67
   }
  ],
  "special": [
   {
    "id": "Runeforged_Hermit_Garb",
    "name": "符鍛隱士裝束",
    "reqLevel": 1,
    "implicits": [],
    "evasion": 16,
    "energyShield": 16,
    "moveSpeed": -0.03,
    "other": [
     "保護: 29"
    ]
   },
   {
    "id": "Runeforged_Waxed_Jacket",
    "name": "符鍛打蠟外衣",
    "reqLevel": 11,
    "implicits": [],
    "evasion": 53,
    "energyShield": 25,
    "moveSpeed": -0.03,
    "other": [
     "保護: 43"
    ],
    "reqDex": 13,
    "reqInt": 13
   },
   {
    "id": "Runeforged_Marabout_Garb",
    "name": "符鍛修士裝束",
    "reqLevel": 16,
    "implicits": [],
    "evasion": 71,
    "energyShield": 30,
    "moveSpeed": -0.03,
    "other": [
     "保護: 53"
    ],
    "reqDex": 17,
    "reqInt": 17
   },
   {
    "id": "Runeforged_Wayfarer_Jacket",
    "name": "符鍛旅人外衣",
    "reqLevel": 28,
    "implicits": [],
    "evasion": 114,
    "energyShield": 41,
    "moveSpeed": -0.03,
    "other": [
     "保護: 77"
    ],
    "reqDex": 26,
    "reqInt": 26
   },
   {
    "id": "Runeforged_Anchorite_Garb",
    "name": "符鍛隱者裝束",
    "reqLevel": 33,
    "implicits": [],
    "evasion": 132,
    "energyShield": 46,
    "moveSpeed": -0.03,
    "other": [
     "保護: 74"
    ],
    "reqDex": 31,
    "reqInt": 31
   },
   {
    "id": "Runeforged_Scalpers_Jacket",
    "name": "符鍛投機者外衣",
    "reqLevel": 39,
    "implicits": [],
    "evasion": 154,
    "energyShield": 51,
    "moveSpeed": -0.03,
    "other": [
     "保護: 82"
    ],
    "reqDex": 35,
    "reqInt": 35
   },
   {
    "id": "Runeforged_Scoundrel_Jacket",
    "name": "符鍛流氓外衣",
    "reqLevel": 45,
    "implicits": [],
    "evasion": 176,
    "energyShield": 57,
    "moveSpeed": -0.03,
    "other": [
     "保護: 85"
    ],
    "reqDex": 41,
    "reqInt": 41
   },
   {
    "id": "Runeforged_Ascetic_Garb",
    "name": "符鍛苦行者裝束",
    "reqLevel": 51,
    "implicits": [],
    "evasion": 197,
    "energyShield": 63,
    "moveSpeed": -0.03,
    "other": [
     "保護: 87"
    ],
    "reqDex": 45,
    "reqInt": 45
   },
   {
    "id": "Runeforged_Itinerant_Jacket",
    "name": "符鍛遊歷者外衣",
    "reqLevel": 54,
    "implicits": [],
    "evasion": 192,
    "energyShield": 60,
    "moveSpeed": -0.03,
    "other": [
     "保護: 92"
    ],
    "reqDex": 48,
    "reqInt": 48
   },
   {
    "id": "Runeforged_Hatungo_Garb",
    "name": "符鍛靈語者裝束",
    "reqLevel": 59,
    "implicits": [],
    "evasion": 181,
    "energyShield": 56,
    "moveSpeed": -0.03,
    "other": [
     "保護: 158"
    ],
    "reqDex": 52,
    "reqInt": 52
   },
   {
    "id": "Runeforged_Hawkers_Jacket",
    "name": "符鍛飼鷹者外衣",
    "reqLevel": 62,
    "implicits": [],
    "evasion": 209,
    "energyShield": 64,
    "moveSpeed": -0.03,
    "other": [
     "保護: 103"
    ],
    "reqDex": 54,
    "reqInt": 54
   },
   {
    "id": "Runeforged_Primal_Markings",
    "name": "符鍛原始印記",
    "reqLevel": 70,
    "implicits": [],
    "evasion": 236,
    "energyShield": 72,
    "moveSpeed": -0.03,
    "other": [
     "保護: 86"
    ],
    "reqDex": 67,
    "reqInt": 67
   },
   {
    "id": "Runeforged_Sleek_Jacket",
    "name": "符鍛光滑外衣",
    "reqLevel": 65,
    "implicits": [],
    "evasion": 114,
    "energyShield": 35,
    "moveSpeed": -0.03,
    "other": [
     "保護: 395"
    ],
    "reqDex": 67,
    "reqInt": 67
   },
   {
    "id": "Runeforged_Rambler_Jacket",
    "name": "符鍛漫步者外衣",
    "reqLevel": 70,
    "implicits": [
     {
      "text": "+(7—13)%混沌抗性",
      "template": "+#%混沌抗性",
      "ranges": [
       [
        7,
        13
       ]
      ]
     }
    ],
    "evasion": 223,
    "energyShield": 68,
    "moveSpeed": -0.03,
    "other": [
     "保護: 107"
    ],
    "reqDex": 67,
    "reqInt": 67
   },
   {
    "id": "Runeforged_Falconers_Jacket",
    "name": "符鍛訓鷹者外衣",
    "reqLevel": 75,
    "implicits": [
     {
      "text": "增加5%移動速度",
      "template": "增加#%移動速度",
      "ranges": [
       [
        5,
        5
       ]
      ]
     }
    ],
    "evasion": 186,
    "energyShield": 57,
    "moveSpeed": -0.03,
    "other": [
     "保護: 189"
    ],
    "reqDex": 67,
    "reqInt": 67
   },
   {
    "id": "Runeforged_Austere_Garb",
    "name": "符鍛樸素裝束",
    "reqLevel": 80,
    "implicits": [
     {
      "text": "減少(10—15)%身上元素異常狀態時間",
      "template": "減少#%身上元素異常狀態時間",
      "ranges": [
       [
        10,
        15
       ]
      ]
     }
    ],
    "evasion": 246,
    "energyShield": 75,
    "moveSpeed": -0.03,
    "other": [
     "保護: 86"
    ],
    "reqDex": 67,
    "reqInt": 67
   },
   {
    "id": "Runemastered_Hermit_Garb",
    "name": "符煉隱士裝束",
    "reqLevel": 38,
    "implicits": [],
    "evasion": 135,
    "energyShield": 45,
    "moveSpeed": -0.03,
    "other": [
     "保護: 28"
    ],
    "reqDex": 35,
    "reqInt": 35
   },
   {
    "id": "Runemastered_Waxed_Jacket",
    "name": "符煉打蠟外衣",
    "reqLevel": 38,
    "implicits": [],
    "evasion": 113,
    "energyShield": 38,
    "moveSpeed": -0.03,
    "other": [
     "保護: 69"
    ],
    "reqDex": 35,
    "reqInt": 35
   },
   {
    "id": "Runemastered_Marabout_Garb",
    "name": "符煉修士裝束",
    "reqLevel": 38,
    "implicits": [],
    "evasion": 90,
    "energyShield": 30,
    "moveSpeed": -0.03,
    "other": [
     "保護: 110"
    ],
    "reqDex": 35,
    "reqInt": 35
   },
   {
    "id": "Runemastered_Wayfarer_Jacket",
    "name": "符煉旅人外衣",
    "reqLevel": 40,
    "implicits": [],
    "evasion": 134,
    "energyShield": 44,
    "moveSpeed": -0.03,
    "other": [
     "保護: 43"
    ],
    "reqDex": 36,
    "reqInt": 36
   },
   {
    "id": "Runemastered_Anchorite_Garb",
    "name": "符煉隱者裝束",
    "reqLevel": 55,
    "implicits": [],
    "evasion": 138,
    "energyShield": 43,
    "moveSpeed": -0.03,
    "other": [
     "保護: 130"
    ],
    "reqDex": 49,
    "reqInt": 49
   },
   {
    "id": "Runemastered_Scalpers_Jacket",
    "name": "符煉投機者外衣",
    "reqLevel": 55,
    "implicits": [],
    "evasion": 170,
    "energyShield": 53,
    "moveSpeed": -0.03,
    "other": [
     "保護: 75"
    ],
    "reqDex": 49,
    "reqInt": 49
   },
   {
    "id": "Runemastered_Assassin_Garb",
    "name": "符煉刺客裝束",
    "reqLevel": 73,
    "implicits": [
     {
      "text": "增加5%移動速度",
      "template": "增加#%移動速度",
      "ranges": [
       [
        5,
        5
       ]
      ]
     }
    ],
    "evasion": 223,
    "energyShield": 68,
    "moveSpeed": -0.03,
    "other": [
     "保護: 43"
    ],
    "reqDex": 67,
    "reqInt": 67
   },
   {
    "id": "Runemastered_Primal_Markings",
    "name": "符煉野性標記",
    "reqLevel": 80,
    "implicits": [],
    "evasion": 223,
    "energyShield": 68,
    "moveSpeed": -0.03,
    "other": [
     "保護: 107"
    ],
    "reqDex": 67,
    "reqInt": 67
   }
  ]
 },
 "Body_Armours_str_dex_int": {
  "name": "胸甲（力量/敏捷/智慧）",
  "slot": "body",
  "armourType": "str_dex_int",
  "source": "https://poe2db.tw/tw/Body_Armours",
  "bases": [
   {
    "id": "Golden_Mantle",
    "name": "黃金戰甲",
    "reqLevel": 20,
    "implicits": [
     {
      "text": "+(15—25)%全元素抗性",
      "template": "+#%全元素抗性",
      "ranges": [
       [
        15,
        25
       ]
      ]
     }
    ],
    "armour": 216,
    "evasion": 187,
    "energyShield": 74,
    "reqStr": 7,
    "reqDex": 7,
    "reqInt": 7
   },
   {
    "id": "Grand_Regalia",
    "name": "宏偉華服",
    "reqLevel": 65,
    "implicits": [],
    "armour": 182,
    "evasion": 165,
    "energyShield": 50,
    "moveSpeed": -0.04,
    "reqStr": 41,
    "reqDex": 41,
    "reqInt": 41
   },
   {
    "id": "Sacrificial_Regalia",
    "name": "獻祭法衣",
    "reqLevel": 65,
    "implicits": [
     {
      "text": "+1全部腐化技能寶石",
      "template": "+#全部腐化技能寶石",
      "ranges": [
       [
        1,
        1
       ]
      ]
     }
    ],
    "armour": 273,
    "evasion": 248,
    "energyShield": 76,
    "moveSpeed": -0.03,
    "reqStr": 72,
    "reqDex": 72,
    "reqInt": 72
   },
   {
    "id": "Grasping_Mail",
    "name": "貪婪鎧甲",
    "reqLevel": 65,
    "implicits": [
     {
      "text": "可骰出戒指詞綴",
      "template": "可骰出戒指詞綴",
      "ranges": []
     },
     {
      "text": "催化劑可使用於此物品",
      "template": "催化劑可使用於此物品",
      "ranges": []
     }
    ],
    "armour": 182,
    "evasion": 165,
    "energyShield": 50,
    "moveSpeed": -0.04,
    "reqStr": 41,
    "reqDex": 41,
    "reqInt": 41
   }
  ],
  "special": [
   {
    "id": "Runeforged_Grand_Regalia",
    "name": "符鍛宏偉華服",
    "reqLevel": 65,
    "implicits": [],
    "armour": 182,
    "evasion": 165,
    "energyShield": 50,
    "moveSpeed": -0.04,
    "other": [
     "保護: 215"
    ],
    "reqStr": 41,
    "reqDex": 41,
    "reqInt": 41
   },
   {
    "id": "Runeforged_Sacrificial_Regalia",
    "name": "符鍛獻祭法衣",
    "reqLevel": 65,
    "implicits": [
     {
      "text": "+1全部腐化技能寶石",
      "template": "+#全部腐化技能寶石",
      "ranges": [
       [
        1,
        1
       ]
      ]
     }
    ],
    "armour": 200,
    "evasion": 182,
    "energyShield": 56,
    "moveSpeed": -0.03,
    "other": [
     "保護: 301"
    ],
    "reqStr": 72,
    "reqDex": 72,
    "reqInt": 72
   },
   {
    "id": "Runemastered_Grand_Regalia",
    "name": "符煉宏偉華服",
    "reqLevel": 65,
    "implicits": [],
    "armour": 145,
    "evasion": 132,
    "energyShield": 40,
    "moveSpeed": -0.04,
    "other": [
     "保護: 86"
    ],
    "reqStr": 41,
    "reqDex": 41,
    "reqInt": 41
   },
   {
    "id": "Runemastered_Sacrificial_Regalia",
    "name": "符煉獻祭法衣",
    "reqLevel": 65,
    "implicits": [
     {
      "text": "+1全部腐化技能寶石",
      "template": "+#全部腐化技能寶石",
      "ranges": [
       [
        1,
        1
       ]
      ]
     }
    ],
    "armour": 136,
    "evasion": 124,
    "energyShield": 38,
    "moveSpeed": -0.03,
    "other": [
     "保護: 215"
    ],
    "reqStr": 72,
    "reqDex": 72,
    "reqInt": 72
   }
  ]
 }
};
