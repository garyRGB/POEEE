// 詞綴：每個物品類別能出的前綴、後綴，每一族依物品等級分階（T1 最強），weight 是出現權重
// 由 tools/crawl_items.py 從 poe2db.tw 產生（2026-10-06）。照抄 poe2db；Gary 可以直接改這裡的數字。
window.DATA = window.DATA || {};
DATA.affixes = {
 "One_Hand_Maces": {
  "prefix": [
   {
    "family": "ColdDamage",
    "tiers": [
     {
      "name": "結霜的",
      "ilvl": 1,
      "weight": 800,
      "text": "附加(1—2)至(3—4)冰冷傷害",
      "template": "附加#至#冰冷傷害",
      "ranges": [
       [
        1,
        2
       ],
       [
        3,
        4
       ]
      ],
      "tier": 10
     },
     {
      "name": "冷凍的",
      "ilvl": 8,
      "weight": 800,
      "text": "附加(3—5)至(6—9)冰冷傷害",
      "template": "附加#至#冰冷傷害",
      "ranges": [
       [
        3,
        5
       ],
       [
        6,
        9
       ]
      ],
      "tier": 9
     },
     {
      "name": "結冰的",
      "ilvl": 16,
      "weight": 800,
      "text": "附加(6—9)至(10—16)冰冷傷害",
      "template": "附加#至#冰冷傷害",
      "ranges": [
       [
        6,
        9
       ],
       [
        10,
        16
       ]
      ],
      "tier": 8
     },
     {
      "name": "寒風的",
      "ilvl": 33,
      "weight": 800,
      "text": "附加(11—15)至(17—24)冰冷傷害",
      "template": "附加#至#冰冷傷害",
      "ranges": [
       [
        11,
        15
       ],
       [
        17,
        24
       ]
      ],
      "tier": 7
     },
     {
      "name": "急凍的",
      "ilvl": 46,
      "weight": 800,
      "text": "附加(17—20)至(26—32)冰冷傷害",
      "template": "附加#至#冰冷傷害",
      "ranges": [
       [
        17,
        20
       ],
       [
        26,
        32
       ]
      ],
      "tier": 6
     },
     {
      "name": "冰凍",
      "ilvl": 54,
      "weight": 800,
      "text": "附加(22—29)至(34—44)冰冷傷害",
      "template": "附加#至#冰冷傷害",
      "ranges": [
       [
        22,
        29
       ],
       [
        34,
        44
       ]
      ],
      "tier": 5
     },
     {
      "name": "冰河的",
      "ilvl": 60,
      "weight": 480,
      "text": "附加(31—38)至(47—59)冰冷傷害",
      "template": "附加#至#冰冷傷害",
      "ranges": [
       [
        31,
        38
       ],
       [
        47,
        59
       ]
      ],
      "tier": 4
     },
     {
      "name": "極地的",
      "ilvl": 65,
      "weight": 320,
      "text": "附加(40—53)至(62—80)冰冷傷害",
      "template": "附加#至#冰冷傷害",
      "ranges": [
       [
        40,
        53
       ],
       [
        62,
        80
       ]
      ],
      "tier": 3
     },
     {
      "name": "埋葬的",
      "ilvl": 75,
      "weight": 200,
      "text": "附加(55—69)至(83—106)冰冷傷害",
      "template": "附加#至#冰冷傷害",
      "ranges": [
       [
        55,
        69
       ],
       [
        83,
        106
       ]
      ],
      "tier": 2
     },
     {
      "name": "晶化的",
      "ilvl": 81,
      "weight": 80,
      "text": "附加(72—81)至(110—123)冰冷傷害",
      "template": "附加#至#冰冷傷害",
      "ranges": [
       [
        72,
        81
       ],
       [
        110,
        123
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "FireDamage",
    "tiers": [
     {
      "name": "加熱的",
      "ilvl": 1,
      "weight": 1200,
      "text": "附加(1—2)至(3—5)火焰傷害",
      "template": "附加#至#火焰傷害",
      "ranges": [
       [
        1,
        2
       ],
       [
        3,
        5
       ]
      ],
      "tier": 10
     },
     {
      "name": "悶燒的",
      "ilvl": 8,
      "weight": 1200,
      "text": "附加(4—6)至(7—10)火焰傷害",
      "template": "附加#至#火焰傷害",
      "ranges": [
       [
        4,
        6
       ],
       [
        7,
        10
       ]
      ],
      "tier": 9
     },
     {
      "name": "冒煙的",
      "ilvl": 16,
      "weight": 1200,
      "text": "附加(7—11)至(13—19)火焰傷害",
      "template": "附加#至#火焰傷害",
      "ranges": [
       [
        7,
        11
       ],
       [
        13,
        19
       ]
      ],
      "tier": 8
     },
     {
      "name": "燃燒的",
      "ilvl": 33,
      "weight": 1200,
      "text": "附加(13—19)至(21—29)火焰傷害",
      "template": "附加#至#火焰傷害",
      "ranges": [
       [
        13,
        19
       ],
       [
        21,
        29
       ]
      ],
      "tier": 7
     },
     {
      "name": "火焰的",
      "ilvl": 46,
      "weight": 1200,
      "text": "附加(20—24)至(32—37)火焰傷害",
      "template": "附加#至#火焰傷害",
      "ranges": [
       [
        20,
        24
       ],
       [
        32,
        37
       ]
      ],
      "tier": 6
     },
     {
      "name": "酷熱的",
      "ilvl": 54,
      "weight": 1200,
      "text": "附加(25—33)至(38—54)火焰傷害",
      "template": "附加#至#火焰傷害",
      "ranges": [
       [
        25,
        33
       ],
       [
        38,
        54
       ]
      ],
      "tier": 5
     },
     {
      "name": "焚燒的",
      "ilvl": 60,
      "weight": 720,
      "text": "附加(35—44)至(56—71)火焰傷害",
      "template": "附加#至#火焰傷害",
      "ranges": [
       [
        35,
        44
       ],
       [
        56,
        71
       ]
      ],
      "tier": 4
     },
     {
      "name": "爆破的",
      "ilvl": 65,
      "weight": 480,
      "text": "附加(47—59)至(74—97)火焰傷害",
      "template": "附加#至#火焰傷害",
      "ranges": [
       [
        47,
        59
       ],
       [
        74,
        97
       ]
      ],
      "tier": 3
     },
     {
      "name": "火化的",
      "ilvl": 75,
      "weight": 300,
      "text": "附加(62—85)至(101—129)火焰傷害",
      "template": "附加#至#火焰傷害",
      "ranges": [
       [
        62,
        85
       ],
       [
        101,
        129
       ]
      ],
      "tier": 2
     },
     {
      "name": "碳化的",
      "ilvl": 81,
      "weight": 120,
      "text": "附加(88—101)至(133—154)火焰傷害",
      "template": "附加#至#火焰傷害",
      "ranges": [
       [
        88,
        101
       ],
       [
        133,
        154
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "IncreasedAccuracy",
    "tiers": [
     {
      "name": "精確的",
      "ilvl": 8,
      "weight": 800,
      "text": "+(11—32)命中值",
      "template": "+#命中值",
      "ranges": [
       [
        11,
        32
       ]
      ],
      "tier": 9
     },
     {
      "name": "可靠的",
      "ilvl": 13,
      "weight": 800,
      "text": "+(33—60)命中值",
      "template": "+#命中值",
      "ranges": [
       [
        33,
        60
       ]
      ],
      "tier": 8
     },
     {
      "name": "專注的",
      "ilvl": 18,
      "weight": 800,
      "text": "+(61—84)命中值",
      "template": "+#命中值",
      "ranges": [
       [
        61,
        84
       ]
      ],
      "tier": 7
     },
     {
      "name": "慎重之",
      "ilvl": 26,
      "weight": 800,
      "text": "+(85—123)命中值",
      "template": "+#命中值",
      "ranges": [
       [
        85,
        123
       ]
      ],
      "tier": 6
     },
     {
      "name": "穩定之",
      "ilvl": 36,
      "weight": 800,
      "text": "+(124—167)命中值",
      "template": "+#命中值",
      "ranges": [
       [
        124,
        167
       ]
      ],
      "tier": 5
     },
     {
      "name": "安穩的",
      "ilvl": 48,
      "weight": 600,
      "text": "+(168—236)命中值",
      "template": "+#命中值",
      "ranges": [
       [
        168,
        236
       ]
      ],
      "tier": 4
     },
     {
      "name": "狩獵者的",
      "ilvl": 58,
      "weight": 600,
      "text": "+(237—346)命中值",
      "template": "+#命中值",
      "ranges": [
       [
        237,
        346
       ]
      ],
      "tier": 3
     },
     {
      "name": "遊俠的",
      "ilvl": 67,
      "weight": 300,
      "text": "+(347—450)命中值",
      "template": "+#命中值",
      "ranges": [
       [
        347,
        450
       ]
      ],
      "tier": 2
     },
     {
      "name": "亞馬遜的",
      "ilvl": 76,
      "weight": 200,
      "text": "+(451—550)命中值",
      "template": "+#命中值",
      "ranges": [
       [
        451,
        550
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "IncreasedWeaponElementalDamagePercent",
    "tiers": [
     {
      "name": "催化的",
      "ilvl": 4,
      "weight": 500,
      "text": "增加(19—35)%攻擊元素傷害",
      "template": "增加#%攻擊元素傷害",
      "ranges": [
       [
        19,
        35
       ]
      ],
      "tier": 6
     },
     {
      "name": "注入的",
      "ilvl": 16,
      "weight": 500,
      "text": "增加(36—52)%攻擊元素傷害",
      "template": "增加#%攻擊元素傷害",
      "ranges": [
       [
        36,
        52
       ]
      ],
      "tier": 5
     },
     {
      "name": "賦予的",
      "ilvl": 33,
      "weight": 500,
      "text": "增加(53—62)%攻擊元素傷害",
      "template": "增加#%攻擊元素傷害",
      "ranges": [
       [
        53,
        62
       ]
      ],
      "tier": 4
     },
     {
      "name": "釋放的",
      "ilvl": 46,
      "weight": 500,
      "text": "增加(63—72)%攻擊元素傷害",
      "template": "增加#%攻擊元素傷害",
      "ranges": [
       [
        63,
        72
       ]
      ],
      "tier": 3
     },
     {
      "name": "壓倒的",
      "ilvl": 60,
      "weight": 500,
      "text": "增加(73—86)%攻擊元素傷害",
      "template": "增加#%攻擊元素傷害",
      "ranges": [
       [
        73,
        86
       ]
      ],
      "tier": 2
     },
     {
      "name": "破壞的",
      "ilvl": 81,
      "weight": 500,
      "text": "增加(87—100)%攻擊元素傷害",
      "template": "增加#%攻擊元素傷害",
      "ranges": [
       [
        87,
        100
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "LightningDamage",
    "tiers": [
     {
      "name": "低鳴的",
      "ilvl": 1,
      "weight": 800,
      "text": "附加1至(4—6)閃電傷害",
      "template": "附加#至#閃電傷害",
      "ranges": [
       [
        1,
        1
       ],
       [
        4,
        6
       ]
      ],
      "tier": 10
     },
     {
      "name": "嗡嗡的",
      "ilvl": 8,
      "weight": 800,
      "text": "附加1至(13—19)閃電傷害",
      "template": "附加#至#閃電傷害",
      "ranges": [
       [
        1,
        1
       ],
       [
        13,
        19
       ]
      ],
      "tier": 9
     },
     {
      "name": "捕捉的",
      "ilvl": 16,
      "weight": 800,
      "text": "附加(1—2)至(20—30)閃電傷害",
      "template": "附加#至#閃電傷害",
      "ranges": [
       [
        1,
        2
       ],
       [
        20,
        30
       ]
      ],
      "tier": 8
     },
     {
      "name": "劈哩啪啦的",
      "ilvl": 33,
      "weight": 800,
      "text": "附加(1—2)至(36—52)閃電傷害",
      "template": "附加#至#閃電傷害",
      "ranges": [
       [
        1,
        2
       ],
       [
        36,
        52
       ]
      ],
      "tier": 7
     },
     {
      "name": "火花的",
      "ilvl": 46,
      "weight": 800,
      "text": "附加(1—3)至(55—60)閃電傷害",
      "template": "附加#至#閃電傷害",
      "ranges": [
       [
        1,
        3
       ],
       [
        55,
        60
       ]
      ],
      "tier": 6
     },
     {
      "name": "電弧的",
      "ilvl": 54,
      "weight": 800,
      "text": "附加(1—4)至(63—82)閃電傷害",
      "template": "附加#至#閃電傷害",
      "ranges": [
       [
        1,
        4
       ],
       [
        63,
        82
       ]
      ],
      "tier": 5
     },
     {
      "name": "電震的",
      "ilvl": 60,
      "weight": 480,
      "text": "附加(1—6)至(85—107)閃電傷害",
      "template": "附加#至#閃電傷害",
      "ranges": [
       [
        1,
        6
       ],
       [
        85,
        107
       ]
      ],
      "tier": 4
     },
     {
      "name": "放電的",
      "ilvl": 65,
      "weight": 320,
      "text": "附加(1—8)至(111—152)閃電傷害",
      "template": "附加#至#閃電傷害",
      "ranges": [
       [
        1,
        8
       ],
       [
        111,
        152
       ]
      ],
      "tier": 3
     },
     {
      "name": "電極的",
      "ilvl": 75,
      "weight": 200,
      "text": "附加(1—10)至(157—196)閃電傷害",
      "template": "附加#至#閃電傷害",
      "ranges": [
       [
        1,
        10
       ],
       [
        157,
        196
       ]
      ],
      "tier": 2
     },
     {
      "name": "心臟不跳的",
      "ilvl": 81,
      "weight": 80,
      "text": "附加(1—12)至(202—234)閃電傷害",
      "template": "附加#至#閃電傷害",
      "ranges": [
       [
        1,
        12
       ],
       [
        202,
        234
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "LocalIncreasedPhysicalDamagePercentAndAccuracyRating",
    "tiers": [
     {
      "name": "侍從的",
      "ilvl": 8,
      "weight": 1000,
      "text": "增加(15—19)%物理傷害+(16—20)命中值",
      "template": "增加#%物理傷害+#命中值",
      "ranges": [
       [
        15,
        19
       ],
       [
        16,
        20
       ]
      ],
      "tier": 8
     },
     {
      "name": "旅人的",
      "ilvl": 14,
      "weight": 1000,
      "text": "增加(20—24)%物理傷害+(21—46)命中值",
      "template": "增加#%物理傷害+#命中值",
      "ranges": [
       [
        20,
        24
       ],
       [
        21,
        46
       ]
      ],
      "tier": 7
     },
     {
      "name": "掠奪者的",
      "ilvl": 23,
      "weight": 1000,
      "text": "增加(25—34)%物理傷害+(47—72)命中值",
      "template": "增加#%物理傷害+#命中值",
      "ranges": [
       [
        25,
        34
       ],
       [
        47,
        72
       ]
      ],
      "tier": 6
     },
     {
      "name": "傭兵的",
      "ilvl": 38,
      "weight": 1000,
      "text": "增加(35—44)%物理傷害+(73—97)命中值",
      "template": "增加#%物理傷害+#命中值",
      "ranges": [
       [
        35,
        44
       ],
       [
        73,
        97
       ]
      ],
      "tier": 5
     },
     {
      "name": "冠軍的",
      "ilvl": 54,
      "weight": 600,
      "text": "增加(45—54)%物理傷害+(98—123)命中值",
      "template": "增加#%物理傷害+#命中值",
      "ranges": [
       [
        45,
        54
       ],
       [
        98,
        123
       ]
      ],
      "tier": 4
     },
     {
      "name": "征服者的",
      "ilvl": 65,
      "weight": 400,
      "text": "增加(55—64)%物理傷害+(124—149)命中值",
      "template": "增加#%物理傷害+#命中值",
      "ranges": [
       [
        55,
        64
       ],
       [
        124,
        149
       ]
      ],
      "tier": 3
     },
     {
      "name": "帝王的",
      "ilvl": 70,
      "weight": 200,
      "text": "增加(65—74)%物理傷害+(150—174)命中值",
      "template": "增加#%物理傷害+#命中值",
      "ranges": [
       [
        65,
        74
       ],
       [
        150,
        174
       ]
      ],
      "tier": 2
     },
     {
      "name": "獨裁者的",
      "ilvl": 81,
      "weight": 100,
      "text": "增加(75—79)%物理傷害+(175—200)命中值",
      "template": "增加#%物理傷害+#命中值",
      "ranges": [
       [
        75,
        79
       ],
       [
        175,
        200
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "LocalPhysicalDamagePercent",
    "tiers": [
     {
      "name": "重量的",
      "ilvl": 1,
      "weight": 1000,
      "text": "增加(40—49)%物理傷害",
      "template": "增加#%物理傷害",
      "ranges": [
       [
        40,
        49
       ]
      ],
      "tier": 8
     },
     {
      "name": "鋸齒的",
      "ilvl": 8,
      "weight": 1000,
      "text": "增加(50—64)%物理傷害",
      "template": "增加#%物理傷害",
      "ranges": [
       [
        50,
        64
       ]
      ],
      "tier": 7
     },
     {
      "name": "邪惡的",
      "ilvl": 16,
      "weight": 1000,
      "text": "增加(65—84)%物理傷害",
      "template": "增加#%物理傷害",
      "ranges": [
       [
        65,
        84
       ]
      ],
      "tier": 6
     },
     {
      "name": "狠毒的",
      "ilvl": 33,
      "weight": 400,
      "text": "增加(85—109)%物理傷害",
      "template": "增加#%物理傷害",
      "ranges": [
       [
        85,
        109
       ]
      ],
      "tier": 5
     },
     {
      "name": "嗜血的",
      "ilvl": 46,
      "weight": 200,
      "text": "增加(110—134)%物理傷害",
      "template": "增加#%物理傷害",
      "ranges": [
       [
        110,
        134
       ]
      ],
      "tier": 4
     },
     {
      "name": "殘酷的",
      "ilvl": 60,
      "weight": 100,
      "text": "增加(135—154)%物理傷害",
      "template": "增加#%物理傷害",
      "ranges": [
       [
        135,
        154
       ]
      ],
      "tier": 3
     },
     {
      "name": "強橫的",
      "ilvl": 75,
      "weight": 50,
      "text": "增加(155—169)%物理傷害",
      "template": "增加#%物理傷害",
      "ranges": [
       [
        155,
        169
       ]
      ],
      "tier": 2
     },
     {
      "name": "無情的",
      "ilvl": 82,
      "weight": 25,
      "text": "增加(170—179)%物理傷害",
      "template": "增加#%物理傷害",
      "ranges": [
       [
        170,
        179
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "PhysicalDamage",
    "tiers": [
     {
      "name": "反光的",
      "ilvl": 1,
      "weight": 1000,
      "text": "附加(1—2)至(4—5)物理傷害",
      "template": "附加#至#物理傷害",
      "ranges": [
       [
        1,
        2
       ],
       [
        4,
        5
       ]
      ],
      "tier": 9
     },
     {
      "name": "磨光的",
      "ilvl": 8,
      "weight": 1000,
      "text": "附加(4—6)至(7—11)物理傷害",
      "template": "附加#至#物理傷害",
      "ranges": [
       [
        4,
        6
       ],
       [
        7,
        11
       ]
      ],
      "tier": 8
     },
     {
      "name": "拋光的",
      "ilvl": 16,
      "weight": 1000,
      "text": "附加(6—9)至(11—16)物理傷害",
      "template": "附加#至#物理傷害",
      "ranges": [
       [
        6,
        9
       ],
       [
        11,
        16
       ]
      ],
      "tier": 7
     },
     {
      "name": "砥礪的",
      "ilvl": 33,
      "weight": 1000,
      "text": "附加(8—12)至(14—21)物理傷害",
      "template": "附加#至#物理傷害",
      "ranges": [
       [
        8,
        12
       ],
       [
        14,
        21
       ]
      ],
      "tier": 6
     },
     {
      "name": "熠熠的",
      "ilvl": 46,
      "weight": 1000,
      "text": "附加(10—15)至(18—26)物理傷害",
      "template": "附加#至#物理傷害",
      "ranges": [
       [
        10,
        15
       ],
       [
        18,
        26
       ]
      ],
      "tier": 5
     },
     {
      "name": "韌煉的",
      "ilvl": 54,
      "weight": 600,
      "text": "附加(13—20)至(23—35)物理傷害",
      "template": "附加#至#物理傷害",
      "ranges": [
       [
        13,
        20
       ],
       [
        23,
        35
       ]
      ],
      "tier": 4
     },
     {
      "name": "鋒利的",
      "ilvl": 60,
      "weight": 400,
      "text": "附加(16—24)至(28—42)物理傷害",
      "template": "附加#至#物理傷害",
      "ranges": [
       [
        16,
        24
       ],
       [
        28,
        42
       ]
      ],
      "tier": 3
     },
     {
      "name": "鍛煉的",
      "ilvl": 65,
      "weight": 200,
      "text": "附加(21—31)至(36—53)物理傷害",
      "template": "附加#至#物理傷害",
      "ranges": [
       [
        21,
        31
       ],
       [
        36,
        53
       ]
      ],
      "tier": 2
     },
     {
      "name": "迸出的",
      "ilvl": 75,
      "weight": 100,
      "text": "附加(26—39)至(44—66)物理傷害",
      "template": "附加#至#物理傷害",
      "ranges": [
       [
        26,
        39
       ],
       [
        44,
        66
       ]
      ],
      "tier": 1
     }
    ]
   }
  ],
  "suffix": [
   {
    "family": "CriticalStrikeChanceIncrease",
    "tiers": [
     {
      "name": "威脅之",
      "ilvl": 1,
      "weight": 1000,
      "text": "+(1.01—1.5)%暴擊率",
      "template": "+#%暴擊率",
      "ranges": [
       [
        1.01,
        1.5
       ]
      ],
      "tier": 6
     },
     {
      "name": "浩劫之",
      "ilvl": 20,
      "weight": 1000,
      "text": "+(1.51—2.1)%暴擊率",
      "template": "+#%暴擊率",
      "ranges": [
       [
        1.51,
        2.1
       ]
      ],
      "tier": 5
     },
     {
      "name": "災害之",
      "ilvl": 30,
      "weight": 1000,
      "text": "+(2.11—2.7)%暴擊率",
      "template": "+#%暴擊率",
      "ranges": [
       [
        2.11,
        2.7
       ]
      ],
      "tier": 4
     },
     {
      "name": "血禍之",
      "ilvl": 44,
      "weight": 500,
      "text": "+(3.11—3.8)%暴擊率",
      "template": "+#%暴擊率",
      "ranges": [
       [
        3.11,
        3.8
       ]
      ],
      "tier": 3
     },
     {
      "name": "滅絕之",
      "ilvl": 59,
      "weight": 250,
      "text": "+(3.81—4.4)%暴擊率",
      "template": "+#%暴擊率",
      "ranges": [
       [
        3.81,
        4.4
       ]
      ],
      "tier": 2
     },
     {
      "name": "奪位之",
      "ilvl": 73,
      "weight": 125,
      "text": "+(4.41—5)%暴擊率",
      "template": "+#%暴擊率",
      "ranges": [
       [
        4.41,
        5
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "CriticalStrikeMultiplier",
    "tiers": [
     {
      "name": "怒火之",
      "ilvl": 8,
      "weight": 1000,
      "text": "+(10—11)%的暴擊傷害加成",
      "template": "+#%的暴擊傷害加成",
      "ranges": [
       [
        10,
        11
       ]
      ],
      "tier": 6
     },
     {
      "name": "憤怒之",
      "ilvl": 21,
      "weight": 1000,
      "text": "+(12—13)%的暴擊傷害加成",
      "template": "+#%的暴擊傷害加成",
      "ranges": [
       [
        12,
        13
       ]
      ],
      "tier": 5
     },
     {
      "name": "狂怒之",
      "ilvl": 30,
      "weight": 1000,
      "text": "+(14—16)%的暴擊傷害加成",
      "template": "+#%的暴擊傷害加成",
      "ranges": [
       [
        14,
        16
       ]
      ],
      "tier": 4
     },
     {
      "name": "憤恨之",
      "ilvl": 44,
      "weight": 500,
      "text": "+(17—19)%的暴擊傷害加成",
      "template": "+#%的暴擊傷害加成",
      "ranges": [
       [
        17,
        19
       ]
      ],
      "tier": 3
     },
     {
      "name": "狂暴之",
      "ilvl": 59,
      "weight": 250,
      "text": "+(20—22)%的暴擊傷害加成",
      "template": "+#%的暴擊傷害加成",
      "ranges": [
       [
        20,
        22
       ]
      ],
      "tier": 2
     },
     {
      "name": "毀滅之",
      "ilvl": 73,
      "weight": 125,
      "text": "+(23—25)%的暴擊傷害加成",
      "template": "+#%的暴擊傷害加成",
      "ranges": [
       [
        23,
        25
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "IncreaseSocketedGemLevel",
    "tiers": [
     {
      "name": "決鬥之",
      "ilvl": 18,
      "weight": 750,
      "text": "全部近戰技能的等級+1",
      "template": "全部近戰技能的等級+#",
      "ranges": [
       [
        1,
        1
       ]
      ],
      "tier": 4
     },
     {
      "name": "衝突之",
      "ilvl": 36,
      "weight": 500,
      "text": "全部近戰技能的等級+2",
      "template": "全部近戰技能的等級+#",
      "ranges": [
       [
        2,
        2
       ]
      ],
      "tier": 3
     },
     {
      "name": "戰鬥之",
      "ilvl": 55,
      "weight": 250,
      "text": "全部近戰技能的等級+3",
      "template": "全部近戰技能的等級+#",
      "ranges": [
       [
        3,
        3
       ]
      ],
      "tier": 2
     },
     {
      "name": "戰爭之",
      "ilvl": 81,
      "weight": 100,
      "text": "全部近戰技能的等級+4",
      "template": "全部近戰技能的等級+#",
      "ranges": [
       [
        4,
        4
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "IncreasedAttackSpeed",
    "tiers": [
     {
      "name": "技巧之",
      "ilvl": 1,
      "weight": 1000,
      "text": "增加(5—7)%攻擊速度",
      "template": "增加#%攻擊速度",
      "ranges": [
       [
        5,
        7
       ]
      ],
      "tier": 8
     },
     {
      "name": "輕鬆之",
      "ilvl": 11,
      "weight": 1000,
      "text": "增加(8—10)%攻擊速度",
      "template": "增加#%攻擊速度",
      "ranges": [
       [
        8,
        10
       ]
      ],
      "tier": 7
     },
     {
      "name": "成熟之",
      "ilvl": 22,
      "weight": 1000,
      "text": "增加(11—13)%攻擊速度",
      "template": "增加#%攻擊速度",
      "ranges": [
       [
        11,
        13
       ]
      ],
      "tier": 6
     },
     {
      "name": "聲望之",
      "ilvl": 30,
      "weight": 1000,
      "text": "增加(14—16)%攻擊速度",
      "template": "增加#%攻擊速度",
      "ranges": [
       [
        14,
        16
       ]
      ],
      "tier": 5
     },
     {
      "name": "讚賞之",
      "ilvl": 37,
      "weight": 500,
      "text": "增加(17—19)%攻擊速度",
      "template": "增加#%攻擊速度",
      "ranges": [
       [
        17,
        19
       ]
      ],
      "tier": 4
     },
     {
      "name": "名聲之",
      "ilvl": 45,
      "weight": 500,
      "text": "增加(20—22)%攻擊速度",
      "template": "增加#%攻擊速度",
      "ranges": [
       [
        20,
        22
       ]
      ],
      "tier": 3
     },
     {
      "name": "惡名之",
      "ilvl": 60,
      "weight": 200,
      "text": "增加(23—25)%攻擊速度",
      "template": "增加#%攻擊速度",
      "ranges": [
       [
        23,
        25
       ]
      ],
      "tier": 2
     },
     {
      "name": "慶典之",
      "ilvl": 77,
      "weight": 100,
      "text": "增加(26—28)%攻擊速度",
      "template": "增加#%攻擊速度",
      "ranges": [
       [
        26,
        28
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "LifeGainPerTarget",
    "tiers": [
     {
      "name": "回春之",
      "ilvl": 8,
      "weight": 1000,
      "text": "每擊中一名敵人，獲得2生命",
      "template": "每擊中一名敵人，獲得#生命",
      "ranges": [
       [
        2,
        2
       ]
      ],
      "tier": 4
     },
     {
      "name": "恢復之",
      "ilvl": 20,
      "weight": 1000,
      "text": "每擊中一名敵人，獲得3生命",
      "template": "每擊中一名敵人，獲得#生命",
      "ranges": [
       [
        3,
        3
       ]
      ],
      "tier": 3
     },
     {
      "name": "再生之",
      "ilvl": 30,
      "weight": 1000,
      "text": "每擊中一名敵人，獲得4生命",
      "template": "每擊中一名敵人，獲得#生命",
      "ranges": [
       [
        4,
        4
       ]
      ],
      "tier": 2
     },
     {
      "name": "營養之",
      "ilvl": 40,
      "weight": 1000,
      "text": "每擊中一名敵人，獲得5生命",
      "template": "每擊中一名敵人，獲得#生命",
      "ranges": [
       [
        5,
        5
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "LifeGainedFromEnemyDeath",
    "tiers": [
     {
      "name": "成功之",
      "ilvl": 1,
      "weight": 750,
      "text": "每個被擊殺的敵人，獲得(4—6)生命",
      "template": "每個被擊殺的敵人，獲得#生命",
      "ranges": [
       [
        4,
        6
       ]
      ],
      "tier": 8
     },
     {
      "name": "勝利之",
      "ilvl": 11,
      "weight": 750,
      "text": "每個被擊殺的敵人，獲得(7—9)生命",
      "template": "每個被擊殺的敵人，獲得#生命",
      "ranges": [
       [
        7,
        9
       ]
      ],
      "tier": 7
     },
     {
      "name": "凱旋之",
      "ilvl": 22,
      "weight": 750,
      "text": "每個被擊殺的敵人，獲得(10—18)生命",
      "template": "每個被擊殺的敵人，獲得#生命",
      "ranges": [
       [
        10,
        18
       ]
      ],
      "tier": 6
     },
     {
      "name": "征服之",
      "ilvl": 33,
      "weight": 750,
      "text": "每個被擊殺的敵人，獲得(19—28)生命",
      "template": "每個被擊殺的敵人，獲得#生命",
      "ranges": [
       [
        19,
        28
       ]
      ],
      "tier": 5
     },
     {
      "name": "征服之",
      "ilvl": 44,
      "weight": 750,
      "text": "每個被擊殺的敵人，獲得(29—40)生命",
      "template": "每個被擊殺的敵人，獲得#生命",
      "ranges": [
       [
        29,
        40
       ]
      ],
      "tier": 4
     },
     {
      "name": "勇氣之",
      "ilvl": 55,
      "weight": 750,
      "text": "每個被擊殺的敵人，獲得(41—53)生命",
      "template": "每個被擊殺的敵人，獲得#生命",
      "ranges": [
       [
        41,
        53
       ]
      ],
      "tier": 3
     },
     {
      "name": "榮耀之",
      "ilvl": 66,
      "weight": 750,
      "text": "每個被擊殺的敵人，獲得(54—68)生命",
      "template": "每個被擊殺的敵人，獲得#生命",
      "ranges": [
       [
        54,
        68
       ]
      ],
      "tier": 2
     },
     {
      "name": "傳說之",
      "ilvl": 77,
      "weight": 750,
      "text": "每個被擊殺的敵人，獲得(69—84)生命",
      "template": "每個被擊殺的敵人，獲得#生命",
      "ranges": [
       [
        69,
        84
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "LifeLeech",
    "tiers": [
     {
      "name": "蝗蟲之",
      "ilvl": 21,
      "weight": 1000,
      "text": "以(6—6.9)%物理傷害偷取生命",
      "template": "以#%物理傷害偷取生命",
      "ranges": [
       [
        6,
        6.9
       ]
      ],
      "tier": 4
     },
     {
      "name": "鯽魚之",
      "ilvl": 38,
      "weight": 1000,
      "text": "以(7—7.9)%物理傷害偷取生命",
      "template": "以#%物理傷害偷取生命",
      "ranges": [
       [
        7,
        7.9
       ]
      ],
      "tier": 3
     },
     {
      "name": "七鰓鰻之",
      "ilvl": 54,
      "weight": 1000,
      "text": "以(8—8.9)%物理傷害偷取生命",
      "template": "以#%物理傷害偷取生命",
      "ranges": [
       [
        8,
        8.9
       ]
      ],
      "tier": 2
     },
     {
      "name": "吸血鬼之",
      "ilvl": 65,
      "weight": 1000,
      "text": "以(9—9.9)%物理傷害偷取生命",
      "template": "以#%物理傷害偷取生命",
      "ranges": [
       [
        9,
        9.9
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "LightRadiusAndAccuracy",
    "tiers": [
     {
      "name": "閃亮之",
      "ilvl": 8,
      "weight": 1000,
      "text": "+(10—20)命中值增加5%照亮範圍",
      "template": "+#命中值增加#%照亮範圍",
      "ranges": [
       [
        10,
        20
       ],
       [
        5,
        5
       ]
      ],
      "tier": 3
     },
     {
      "name": "光明之",
      "ilvl": 15,
      "weight": 1000,
      "text": "+(21—40)命中值增加10%照亮範圍",
      "template": "+#命中值增加#%照亮範圍",
      "ranges": [
       [
        21,
        40
       ],
       [
        10,
        10
       ]
      ],
      "tier": 2
     },
     {
      "name": "光輝之",
      "ilvl": 30,
      "weight": 1000,
      "text": "+(41—60)命中值增加15%照亮範圍",
      "template": "+#命中值增加#%照亮範圍",
      "ranges": [
       [
        41,
        60
       ],
       [
        15,
        15
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "LocalAttributeRequirements",
    "tiers": [
     {
      "name": "值得之",
      "ilvl": 24,
      "weight": 1000,
      "text": "減少15%能力值需求",
      "template": "減少#%能力值需求",
      "ranges": [
       [
        15,
        15
       ]
      ],
      "tier": 5
     },
     {
      "name": "容易之",
      "ilvl": 32,
      "weight": 1000,
      "text": "減少20%能力值需求",
      "template": "減少#%能力值需求",
      "ranges": [
       [
        20,
        20
       ]
      ],
      "tier": 4
     },
     {
      "name": "長才之",
      "ilvl": 40,
      "weight": 1000,
      "text": "減少25%能力值需求",
      "template": "減少#%能力值需求",
      "ranges": [
       [
        25,
        25
       ]
      ],
      "tier": 3
     },
     {
      "name": "高超之",
      "ilvl": 52,
      "weight": 1000,
      "text": "減少30%能力值需求",
      "template": "減少#%能力值需求",
      "ranges": [
       [
        30,
        30
       ]
      ],
      "tier": 2
     },
     {
      "name": "熟習之",
      "ilvl": 60,
      "weight": 1000,
      "text": "減少35%能力值需求",
      "template": "減少#%能力值需求",
      "ranges": [
       [
        35,
        35
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "ManaGainedFromEnemyDeath",
    "tiers": [
     {
      "name": "吸收之",
      "ilvl": 1,
      "weight": 750,
      "text": "每個被擊殺的敵人，獲得(2—3)魔力",
      "template": "每個被擊殺的敵人，獲得#魔力",
      "ranges": [
       [
        2,
        3
       ]
      ],
      "tier": 8
     },
     {
      "name": "逆滲透之",
      "ilvl": 12,
      "weight": 750,
      "text": "每個被擊殺的敵人，獲得(4—5)魔力",
      "template": "每個被擊殺的敵人，獲得#魔力",
      "ranges": [
       [
        4,
        5
       ]
      ],
      "tier": 7
     },
     {
      "name": "注入之",
      "ilvl": 23,
      "weight": 750,
      "text": "每個被擊殺的敵人，獲得(6—9)魔力",
      "template": "每個被擊殺的敵人，獲得#魔力",
      "ranges": [
       [
        6,
        9
       ]
      ],
      "tier": 6
     },
     {
      "name": "包覆之",
      "ilvl": 34,
      "weight": 750,
      "text": "每個被擊殺的敵人，獲得(10—14)魔力",
      "template": "每個被擊殺的敵人，獲得#魔力",
      "ranges": [
       [
        10,
        14
       ]
      ],
      "tier": 5
     },
     {
      "name": "消耗之",
      "ilvl": 45,
      "weight": 750,
      "text": "每個被擊殺的敵人，獲得(15—20)魔力",
      "template": "每個被擊殺的敵人，獲得#魔力",
      "ranges": [
       [
        15,
        20
       ]
      ],
      "tier": 4
     },
     {
      "name": "虹吸之",
      "ilvl": 56,
      "weight": 750,
      "text": "每個被擊殺的敵人，獲得(21—27)魔力",
      "template": "每個被擊殺的敵人，獲得#魔力",
      "ranges": [
       [
        21,
        27
       ]
      ],
      "tier": 3
     },
     {
      "name": "吞噬之",
      "ilvl": 67,
      "weight": 750,
      "text": "每個被擊殺的敵人，獲得(28—35)魔力",
      "template": "每個被擊殺的敵人，獲得#魔力",
      "ranges": [
       [
        28,
        35
       ]
      ],
      "tier": 2
     },
     {
      "name": "同化之",
      "ilvl": 78,
      "weight": 750,
      "text": "每個被擊殺的敵人，獲得(36—45)魔力",
      "template": "每個被擊殺的敵人，獲得#魔力",
      "ranges": [
       [
        36,
        45
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "ManaLeech",
    "tiers": [
     {
      "name": "乾渴之",
      "ilvl": 21,
      "weight": 1000,
      "text": "以(5—5.9)%物理傷害偷取魔力",
      "template": "以#%物理傷害偷取魔力",
      "ranges": [
       [
        5,
        5.9
       ]
      ],
      "tier": 4
     },
     {
      "name": "乾燥之",
      "ilvl": 38,
      "weight": 1000,
      "text": "以(6—6.9)%物理傷害偷取魔力",
      "template": "以#%物理傷害偷取魔力",
      "ranges": [
       [
        6,
        6.9
       ]
      ],
      "tier": 3
     },
     {
      "name": "乾旱之",
      "ilvl": 54,
      "weight": 1000,
      "text": "以(7—7.9)%物理傷害偷取魔力",
      "template": "以#%物理傷害偷取魔力",
      "ranges": [
       [
        7,
        7.9
       ]
      ],
      "tier": 2
     },
     {
      "name": "絕望之",
      "ilvl": 65,
      "weight": 1000,
      "text": "以(8—8.9)%物理傷害偷取魔力",
      "template": "以#%物理傷害偷取魔力",
      "ranges": [
       [
        8,
        8.9
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "Strength",
    "tiers": [
     {
      "name": "野蠻之",
      "ilvl": 1,
      "weight": 1000,
      "text": "+(5—8)點力量",
      "template": "+#點力量",
      "ranges": [
       [
        5,
        8
       ]
      ],
      "tier": 8
     },
     {
      "name": "摔角手之",
      "ilvl": 11,
      "weight": 1000,
      "text": "+(9—12)點力量",
      "template": "+#點力量",
      "ranges": [
       [
        9,
        12
       ]
      ],
      "tier": 7
     },
     {
      "name": "熊之",
      "ilvl": 22,
      "weight": 1000,
      "text": "+(13—16)點力量",
      "template": "+#點力量",
      "ranges": [
       [
        13,
        16
       ]
      ],
      "tier": 6
     },
     {
      "name": "獅子之",
      "ilvl": 33,
      "weight": 1000,
      "text": "+(17—20)點力量",
      "template": "+#點力量",
      "ranges": [
       [
        17,
        20
       ]
      ],
      "tier": 5
     },
     {
      "name": "大猩猩之",
      "ilvl": 44,
      "weight": 1000,
      "text": "+(21—24)點力量",
      "template": "+#點力量",
      "ranges": [
       [
        21,
        24
       ]
      ],
      "tier": 4
     },
     {
      "name": "巨人之",
      "ilvl": 55,
      "weight": 1000,
      "text": "+(25—27)點力量",
      "template": "+#點力量",
      "ranges": [
       [
        25,
        27
       ]
      ],
      "tier": 3
     },
     {
      "name": "海獸之",
      "ilvl": 66,
      "weight": 1000,
      "text": "+(28—30)點力量",
      "template": "+#點力量",
      "ranges": [
       [
        28,
        30
       ]
      ],
      "tier": 2
     },
     {
      "name": "泰坦之",
      "ilvl": 74,
      "weight": 1000,
      "text": "+(31—33)點力量",
      "template": "+#點力量",
      "ranges": [
       [
        31,
        33
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "StunDamageIncrease",
    "tiers": [
     {
      "name": "拳擊之",
      "ilvl": 5,
      "weight": 1000,
      "text": "增加(21—30)%暈眩累積",
      "template": "增加#%暈眩累積",
      "ranges": [
       [
        21,
        30
       ]
      ],
      "tier": 6
     },
     {
      "name": "打鬥之",
      "ilvl": 20,
      "weight": 1000,
      "text": "增加(31—40)%暈眩累積",
      "template": "增加#%暈眩累積",
      "ranges": [
       [
        31,
        40
       ]
      ],
      "tier": 5
     },
     {
      "name": "格鬥家之",
      "ilvl": 30,
      "weight": 1000,
      "text": "增加(41—50)%暈眩累積",
      "template": "增加#%暈眩累積",
      "ranges": [
       [
        41,
        50
       ]
      ],
      "tier": 4
     },
     {
      "name": "戰鬥之",
      "ilvl": 44,
      "weight": 1000,
      "text": "增加(51—60)%暈眩累積",
      "template": "增加#%暈眩累積",
      "ranges": [
       [
        51,
        60
       ]
      ],
      "tier": 3
     },
     {
      "name": "角鬥士之",
      "ilvl": 58,
      "weight": 1000,
      "text": "增加(61—70)%暈眩累積",
      "template": "增加#%暈眩累積",
      "ranges": [
       [
        61,
        70
       ]
      ],
      "tier": 2
     },
     {
      "name": "冠軍之",
      "ilvl": 74,
      "weight": 1000,
      "text": "增加(71—80)%暈眩累積",
      "template": "增加#%暈眩累積",
      "ranges": [
       [
        71,
        80
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "StunDurationIncreasePercent",
    "tiers": [
     {
      "name": "衝擊之",
      "ilvl": 5,
      "weight": 1000,
      "text": "增加(11—13)%暈眩持續時間",
      "template": "增加#%暈眩持續時間",
      "ranges": [
       [
        11,
        13
       ]
      ],
      "tier": 6
     },
     {
      "name": "暈眩之",
      "ilvl": 18,
      "weight": 1000,
      "text": "增加(14—16)%暈眩持續時間",
      "template": "增加#%暈眩持續時間",
      "ranges": [
       [
        14,
        16
       ]
      ],
      "tier": 5
     },
     {
      "name": "擊暈之",
      "ilvl": 30,
      "weight": 1000,
      "text": "增加(17—19)%暈眩持續時間",
      "template": "增加#%暈眩持續時間",
      "ranges": [
       [
        17,
        19
       ]
      ],
      "tier": 4
     },
     {
      "name": "轟擊之",
      "ilvl": 44,
      "weight": 1000,
      "text": "增加(20—22)%暈眩持續時間",
      "template": "增加#%暈眩持續時間",
      "ranges": [
       [
        20,
        22
       ]
      ],
      "tier": 3
     },
     {
      "name": "蹣跚之",
      "ilvl": 58,
      "weight": 1000,
      "text": "增加(23—26)%暈眩持續時間",
      "template": "增加#%暈眩持續時間",
      "ranges": [
       [
        23,
        26
       ]
      ],
      "tier": 2
     },
     {
      "name": "頭昏腦脹之",
      "ilvl": 71,
      "weight": 1000,
      "text": "增加(27—30)%暈眩持續時間",
      "template": "增加#%暈眩持續時間",
      "ranges": [
       [
        27,
        30
       ]
      ],
      "tier": 1
     }
    ]
   }
  ]
 },
 "Two_Hand_Maces": {
  "prefix": [
   {
    "family": "ColdDamage",
    "tiers": [
     {
      "name": "結霜的",
      "ilvl": 1,
      "weight": 800,
      "text": "附加(2—3)至(4—6)冰冷傷害",
      "template": "附加#至#冰冷傷害",
      "ranges": [
       [
        2,
        3
       ],
       [
        4,
        6
       ]
      ],
      "tier": 10
     },
     {
      "name": "冷凍的",
      "ilvl": 8,
      "weight": 800,
      "text": "附加(5—8)至(9—14)冰冷傷害",
      "template": "附加#至#冰冷傷害",
      "ranges": [
       [
        5,
        8
       ],
       [
        9,
        14
       ]
      ],
      "tier": 9
     },
     {
      "name": "結冰的",
      "ilvl": 16,
      "weight": 800,
      "text": "附加(10—14)至(15—23)冰冷傷害",
      "template": "附加#至#冰冷傷害",
      "ranges": [
       [
        10,
        14
       ],
       [
        15,
        23
       ]
      ],
      "tier": 8
     },
     {
      "name": "寒風的",
      "ilvl": 33,
      "weight": 800,
      "text": "附加(16—23)至(25—35)冰冷傷害",
      "template": "附加#至#冰冷傷害",
      "ranges": [
       [
        16,
        23
       ],
       [
        25,
        35
       ]
      ],
      "tier": 7
     },
     {
      "name": "急凍的",
      "ilvl": 46,
      "weight": 800,
      "text": "附加(25—30)至(38—46)冰冷傷害",
      "template": "附加#至#冰冷傷害",
      "ranges": [
       [
        25,
        30
       ],
       [
        38,
        46
       ]
      ],
      "tier": 6
     },
     {
      "name": "冰凍",
      "ilvl": 54,
      "weight": 800,
      "text": "附加(32—43)至(49—66)冰冷傷害",
      "template": "附加#至#冰冷傷害",
      "ranges": [
       [
        32,
        43
       ],
       [
        49,
        66
       ]
      ],
      "tier": 5
     },
     {
      "name": "冰河的",
      "ilvl": 60,
      "weight": 480,
      "text": "附加(46—57)至(70—88)冰冷傷害",
      "template": "附加#至#冰冷傷害",
      "ranges": [
       [
        46,
        57
       ],
       [
        70,
        88
       ]
      ],
      "tier": 4
     },
     {
      "name": "極地的",
      "ilvl": 65,
      "weight": 320,
      "text": "附加(60—80)至(92—121)冰冷傷害",
      "template": "附加#至#冰冷傷害",
      "ranges": [
       [
        60,
        80
       ],
       [
        92,
        121
       ]
      ],
      "tier": 3
     },
     {
      "name": "埋葬的",
      "ilvl": 75,
      "weight": 200,
      "text": "附加(84—107)至(126—161)冰冷傷害",
      "template": "附加#至#冰冷傷害",
      "ranges": [
       [
        84,
        107
       ],
       [
        126,
        161
       ]
      ],
      "tier": 2
     },
     {
      "name": "晶化的",
      "ilvl": 81,
      "weight": 80,
      "text": "附加(112—124)至(168—189)冰冷傷害",
      "template": "附加#至#冰冷傷害",
      "ranges": [
       [
        112,
        124
       ],
       [
        168,
        189
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "FireDamage",
    "tiers": [
     {
      "name": "加熱的",
      "ilvl": 1,
      "weight": 1200,
      "text": "附加(2—4)至(5—7)火焰傷害",
      "template": "附加#至#火焰傷害",
      "ranges": [
       [
        2,
        4
       ],
       [
        5,
        7
       ]
      ],
      "tier": 10
     },
     {
      "name": "悶燒的",
      "ilvl": 8,
      "weight": 1200,
      "text": "附加(6—9)至(10—16)火焰傷害",
      "template": "附加#至#火焰傷害",
      "ranges": [
       [
        6,
        9
       ],
       [
        10,
        16
       ]
      ],
      "tier": 9
     },
     {
      "name": "冒煙的",
      "ilvl": 16,
      "weight": 1200,
      "text": "附加(11—17)至(19—28)火焰傷害",
      "template": "附加#至#火焰傷害",
      "ranges": [
       [
        11,
        17
       ],
       [
        19,
        28
       ]
      ],
      "tier": 8
     },
     {
      "name": "燃燒的",
      "ilvl": 33,
      "weight": 1200,
      "text": "附加(19—27)至(30—42)火焰傷害",
      "template": "附加#至#火焰傷害",
      "ranges": [
       [
        19,
        27
       ],
       [
        30,
        42
       ]
      ],
      "tier": 7
     },
     {
      "name": "火焰的",
      "ilvl": 46,
      "weight": 1200,
      "text": "附加(30—37)至(45—56)火焰傷害",
      "template": "附加#至#火焰傷害",
      "ranges": [
       [
        30,
        37
       ],
       [
        45,
        56
       ]
      ],
      "tier": 6
     },
     {
      "name": "酷熱的",
      "ilvl": 54,
      "weight": 1200,
      "text": "附加(39—53)至(59—80)火焰傷害",
      "template": "附加#至#火焰傷害",
      "ranges": [
       [
        39,
        53
       ],
       [
        59,
        80
       ]
      ],
      "tier": 5
     },
     {
      "name": "焚燒的",
      "ilvl": 60,
      "weight": 720,
      "text": "附加(56—70)至(84—107)火焰傷害",
      "template": "附加#至#火焰傷害",
      "ranges": [
       [
        56,
        70
       ],
       [
        84,
        107
       ]
      ],
      "tier": 4
     },
     {
      "name": "爆破的",
      "ilvl": 65,
      "weight": 480,
      "text": "附加(73—97)至(112—149)火焰傷害",
      "template": "附加#至#火焰傷害",
      "ranges": [
       [
        73,
        97
       ],
       [
        112,
        149
       ]
      ],
      "tier": 3
     },
     {
      "name": "火化的",
      "ilvl": 75,
      "weight": 300,
      "text": "附加(102—130)至(155—198)火焰傷害",
      "template": "附加#至#火焰傷害",
      "ranges": [
       [
        102,
        130
       ],
       [
        155,
        198
       ]
      ],
      "tier": 2
     },
     {
      "name": "碳化的",
      "ilvl": 81,
      "weight": 120,
      "text": "附加(135—156)至(205—236)火焰傷害",
      "template": "附加#至#火焰傷害",
      "ranges": [
       [
        135,
        156
       ],
       [
        205,
        236
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "IncreasedAccuracy",
    "tiers": [
     {
      "name": "精確的",
      "ilvl": 8,
      "weight": 800,
      "text": "+(11—32)命中值",
      "template": "+#命中值",
      "ranges": [
       [
        11,
        32
       ]
      ],
      "tier": 9
     },
     {
      "name": "可靠的",
      "ilvl": 13,
      "weight": 800,
      "text": "+(33—60)命中值",
      "template": "+#命中值",
      "ranges": [
       [
        33,
        60
       ]
      ],
      "tier": 8
     },
     {
      "name": "專注的",
      "ilvl": 18,
      "weight": 800,
      "text": "+(61—84)命中值",
      "template": "+#命中值",
      "ranges": [
       [
        61,
        84
       ]
      ],
      "tier": 7
     },
     {
      "name": "慎重之",
      "ilvl": 26,
      "weight": 800,
      "text": "+(85—123)命中值",
      "template": "+#命中值",
      "ranges": [
       [
        85,
        123
       ]
      ],
      "tier": 6
     },
     {
      "name": "穩定之",
      "ilvl": 36,
      "weight": 800,
      "text": "+(124—167)命中值",
      "template": "+#命中值",
      "ranges": [
       [
        124,
        167
       ]
      ],
      "tier": 5
     },
     {
      "name": "安穩的",
      "ilvl": 48,
      "weight": 600,
      "text": "+(168—236)命中值",
      "template": "+#命中值",
      "ranges": [
       [
        168,
        236
       ]
      ],
      "tier": 4
     },
     {
      "name": "狩獵者的",
      "ilvl": 58,
      "weight": 600,
      "text": "+(237—346)命中值",
      "template": "+#命中值",
      "ranges": [
       [
        237,
        346
       ]
      ],
      "tier": 3
     },
     {
      "name": "遊俠的",
      "ilvl": 67,
      "weight": 300,
      "text": "+(347—450)命中值",
      "template": "+#命中值",
      "ranges": [
       [
        347,
        450
       ]
      ],
      "tier": 2
     },
     {
      "name": "亞馬遜的",
      "ilvl": 76,
      "weight": 200,
      "text": "+(451—550)命中值",
      "template": "+#命中值",
      "ranges": [
       [
        451,
        550
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "IncreasedWeaponElementalDamagePercent",
    "tiers": [
     {
      "name": "催化的",
      "ilvl": 4,
      "weight": 500,
      "text": "增加(34—47)%攻擊元素傷害",
      "template": "增加#%攻擊元素傷害",
      "ranges": [
       [
        34,
        47
       ]
      ],
      "tier": 6
     },
     {
      "name": "注入的",
      "ilvl": 16,
      "weight": 500,
      "text": "增加(48—71)%攻擊元素傷害",
      "template": "增加#%攻擊元素傷害",
      "ranges": [
       [
        48,
        71
       ]
      ],
      "tier": 5
     },
     {
      "name": "賦予的",
      "ilvl": 33,
      "weight": 500,
      "text": "增加(72—85)%攻擊元素傷害",
      "template": "增加#%攻擊元素傷害",
      "ranges": [
       [
        72,
        85
       ]
      ],
      "tier": 4
     },
     {
      "name": "釋放的",
      "ilvl": 46,
      "weight": 500,
      "text": "增加(86—99)%攻擊元素傷害",
      "template": "增加#%攻擊元素傷害",
      "ranges": [
       [
        86,
        99
       ]
      ],
      "tier": 3
     },
     {
      "name": "壓倒的",
      "ilvl": 60,
      "weight": 500,
      "text": "增加(100—119)%攻擊元素傷害",
      "template": "增加#%攻擊元素傷害",
      "ranges": [
       [
        100,
        119
       ]
      ],
      "tier": 2
     },
     {
      "name": "破壞的",
      "ilvl": 81,
      "weight": 500,
      "text": "增加(120—139)%攻擊元素傷害",
      "template": "增加#%攻擊元素傷害",
      "ranges": [
       [
        120,
        139
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "LightningDamage",
    "tiers": [
     {
      "name": "低鳴的",
      "ilvl": 1,
      "weight": 800,
      "text": "附加1至(7—10)閃電傷害",
      "template": "附加#至#閃電傷害",
      "ranges": [
       [
        1,
        1
       ],
       [
        7,
        10
       ]
      ],
      "tier": 10
     },
     {
      "name": "嗡嗡的",
      "ilvl": 8,
      "weight": 800,
      "text": "附加(1—2)至(19—27)閃電傷害",
      "template": "附加#至#閃電傷害",
      "ranges": [
       [
        1,
        2
       ],
       [
        19,
        27
       ]
      ],
      "tier": 9
     },
     {
      "name": "捕捉的",
      "ilvl": 16,
      "weight": 800,
      "text": "附加(1—3)至(31—43)閃電傷害",
      "template": "附加#至#閃電傷害",
      "ranges": [
       [
        1,
        3
       ],
       [
        31,
        43
       ]
      ],
      "tier": 8
     },
     {
      "name": "劈哩啪啦的",
      "ilvl": 33,
      "weight": 800,
      "text": "附加(1—4)至(53—76)閃電傷害",
      "template": "附加#至#閃電傷害",
      "ranges": [
       [
        1,
        4
       ],
       [
        53,
        76
       ]
      ],
      "tier": 7
     },
     {
      "name": "火花的",
      "ilvl": 46,
      "weight": 800,
      "text": "附加(1—4)至(80—88)閃電傷害",
      "template": "附加#至#閃電傷害",
      "ranges": [
       [
        1,
        4
       ],
       [
        80,
        88
       ]
      ],
      "tier": 6
     },
     {
      "name": "電弧的",
      "ilvl": 54,
      "weight": 800,
      "text": "附加(1—6)至(93—122)閃電傷害",
      "template": "附加#至#閃電傷害",
      "ranges": [
       [
        1,
        6
       ],
       [
        93,
        122
       ]
      ],
      "tier": 5
     },
     {
      "name": "電震的",
      "ilvl": 60,
      "weight": 480,
      "text": "附加(1—8)至(128—162)閃電傷害",
      "template": "附加#至#閃電傷害",
      "ranges": [
       [
        1,
        8
       ],
       [
        128,
        162
       ]
      ],
      "tier": 4
     },
     {
      "name": "放電的",
      "ilvl": 65,
      "weight": 320,
      "text": "附加(1—13)至(168—231)閃電傷害",
      "template": "附加#至#閃電傷害",
      "ranges": [
       [
        1,
        13
       ],
       [
        168,
        231
       ]
      ],
      "tier": 3
     },
     {
      "name": "電極的",
      "ilvl": 75,
      "weight": 200,
      "text": "附加(1—16)至(239—300)閃電傷害",
      "template": "附加#至#閃電傷害",
      "ranges": [
       [
        1,
        16
       ],
       [
        239,
        300
       ]
      ],
      "tier": 2
     },
     {
      "name": "心臟不跳的",
      "ilvl": 81,
      "weight": 80,
      "text": "附加(1—19)至(310—358)閃電傷害",
      "template": "附加#至#閃電傷害",
      "ranges": [
       [
        1,
        19
       ],
       [
        310,
        358
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "LocalIncreasedPhysicalDamagePercentAndAccuracyRating",
    "tiers": [
     {
      "name": "侍從的",
      "ilvl": 8,
      "weight": 1000,
      "text": "增加(15—19)%物理傷害+(16—20)命中值",
      "template": "增加#%物理傷害+#命中值",
      "ranges": [
       [
        15,
        19
       ],
       [
        16,
        20
       ]
      ],
      "tier": 8
     },
     {
      "name": "旅人的",
      "ilvl": 14,
      "weight": 1000,
      "text": "增加(20—24)%物理傷害+(21—46)命中值",
      "template": "增加#%物理傷害+#命中值",
      "ranges": [
       [
        20,
        24
       ],
       [
        21,
        46
       ]
      ],
      "tier": 7
     },
     {
      "name": "掠奪者的",
      "ilvl": 23,
      "weight": 1000,
      "text": "增加(25—34)%物理傷害+(47—72)命中值",
      "template": "增加#%物理傷害+#命中值",
      "ranges": [
       [
        25,
        34
       ],
       [
        47,
        72
       ]
      ],
      "tier": 6
     },
     {
      "name": "傭兵的",
      "ilvl": 38,
      "weight": 1000,
      "text": "增加(35—44)%物理傷害+(73—97)命中值",
      "template": "增加#%物理傷害+#命中值",
      "ranges": [
       [
        35,
        44
       ],
       [
        73,
        97
       ]
      ],
      "tier": 5
     },
     {
      "name": "冠軍的",
      "ilvl": 54,
      "weight": 600,
      "text": "增加(45—54)%物理傷害+(98—123)命中值",
      "template": "增加#%物理傷害+#命中值",
      "ranges": [
       [
        45,
        54
       ],
       [
        98,
        123
       ]
      ],
      "tier": 4
     },
     {
      "name": "征服者的",
      "ilvl": 65,
      "weight": 400,
      "text": "增加(55—64)%物理傷害+(124—149)命中值",
      "template": "增加#%物理傷害+#命中值",
      "ranges": [
       [
        55,
        64
       ],
       [
        124,
        149
       ]
      ],
      "tier": 3
     },
     {
      "name": "帝王的",
      "ilvl": 70,
      "weight": 200,
      "text": "增加(65—74)%物理傷害+(150—174)命中值",
      "template": "增加#%物理傷害+#命中值",
      "ranges": [
       [
        65,
        74
       ],
       [
        150,
        174
       ]
      ],
      "tier": 2
     },
     {
      "name": "獨裁者的",
      "ilvl": 81,
      "weight": 100,
      "text": "增加(75—79)%物理傷害+(175—200)命中值",
      "template": "增加#%物理傷害+#命中值",
      "ranges": [
       [
        75,
        79
       ],
       [
        175,
        200
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "LocalPhysicalDamagePercent",
    "tiers": [
     {
      "name": "重量的",
      "ilvl": 1,
      "weight": 1000,
      "text": "增加(40—49)%物理傷害",
      "template": "增加#%物理傷害",
      "ranges": [
       [
        40,
        49
       ]
      ],
      "tier": 8
     },
     {
      "name": "鋸齒的",
      "ilvl": 8,
      "weight": 1000,
      "text": "增加(50—64)%物理傷害",
      "template": "增加#%物理傷害",
      "ranges": [
       [
        50,
        64
       ]
      ],
      "tier": 7
     },
     {
      "name": "邪惡的",
      "ilvl": 16,
      "weight": 1000,
      "text": "增加(65—84)%物理傷害",
      "template": "增加#%物理傷害",
      "ranges": [
       [
        65,
        84
       ]
      ],
      "tier": 6
     },
     {
      "name": "狠毒的",
      "ilvl": 33,
      "weight": 400,
      "text": "增加(85—109)%物理傷害",
      "template": "增加#%物理傷害",
      "ranges": [
       [
        85,
        109
       ]
      ],
      "tier": 5
     },
     {
      "name": "嗜血的",
      "ilvl": 46,
      "weight": 200,
      "text": "增加(110—134)%物理傷害",
      "template": "增加#%物理傷害",
      "ranges": [
       [
        110,
        134
       ]
      ],
      "tier": 4
     },
     {
      "name": "殘酷的",
      "ilvl": 60,
      "weight": 100,
      "text": "增加(135—154)%物理傷害",
      "template": "增加#%物理傷害",
      "ranges": [
       [
        135,
        154
       ]
      ],
      "tier": 3
     },
     {
      "name": "強橫的",
      "ilvl": 75,
      "weight": 50,
      "text": "增加(155—169)%物理傷害",
      "template": "增加#%物理傷害",
      "ranges": [
       [
        155,
        169
       ]
      ],
      "tier": 2
     },
     {
      "name": "無情的",
      "ilvl": 82,
      "weight": 25,
      "text": "增加(170—179)%物理傷害",
      "template": "增加#%物理傷害",
      "ranges": [
       [
        170,
        179
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "PhysicalDamage",
    "tiers": [
     {
      "name": "反光的",
      "ilvl": 1,
      "weight": 1000,
      "text": "附加(2—3)至(5—7)物理傷害",
      "template": "附加#至#物理傷害",
      "ranges": [
       [
        2,
        3
       ],
       [
        5,
        7
       ]
      ],
      "tier": 9
     },
     {
      "name": "磨光的",
      "ilvl": 8,
      "weight": 1000,
      "text": "附加(5—8)至(10—15)物理傷害",
      "template": "附加#至#物理傷害",
      "ranges": [
       [
        5,
        8
       ],
       [
        10,
        15
       ]
      ],
      "tier": 8
     },
     {
      "name": "拋光的",
      "ilvl": 16,
      "weight": 1000,
      "text": "附加(8—12)至(15—22)物理傷害",
      "template": "附加#至#物理傷害",
      "ranges": [
       [
        8,
        12
       ],
       [
        15,
        22
       ]
      ],
      "tier": 7
     },
     {
      "name": "砥礪的",
      "ilvl": 33,
      "weight": 1000,
      "text": "附加(11—17)至(20—30)物理傷害",
      "template": "附加#至#物理傷害",
      "ranges": [
       [
        11,
        17
       ],
       [
        20,
        30
       ]
      ],
      "tier": 6
     },
     {
      "name": "熠熠的",
      "ilvl": 46,
      "weight": 1000,
      "text": "附加(14—21)至(25—37)物理傷害",
      "template": "附加#至#物理傷害",
      "ranges": [
       [
        14,
        21
       ],
       [
        25,
        37
       ]
      ],
      "tier": 5
     },
     {
      "name": "韌煉的",
      "ilvl": 54,
      "weight": 600,
      "text": "附加(19—29)至(33—49)物理傷害",
      "template": "附加#至#物理傷害",
      "ranges": [
       [
        19,
        29
       ],
       [
        33,
        49
       ]
      ],
      "tier": 4
     },
     {
      "name": "鋒利的",
      "ilvl": 60,
      "weight": 400,
      "text": "附加(23—35)至(39—59)物理傷害",
      "template": "附加#至#物理傷害",
      "ranges": [
       [
        23,
        35
       ],
       [
        39,
        59
       ]
      ],
      "tier": 3
     },
     {
      "name": "鍛煉的",
      "ilvl": 65,
      "weight": 200,
      "text": "附加(29—44)至(50—75)物理傷害",
      "template": "附加#至#物理傷害",
      "ranges": [
       [
        29,
        44
       ],
       [
        50,
        75
       ]
      ],
      "tier": 2
     },
     {
      "name": "迸出的",
      "ilvl": 75,
      "weight": 100,
      "text": "附加(37—55)至(63—94)物理傷害",
      "template": "附加#至#物理傷害",
      "ranges": [
       [
        37,
        55
       ],
       [
        63,
        94
       ]
      ],
      "tier": 1
     }
    ]
   }
  ],
  "suffix": [
   {
    "family": "CriticalStrikeChanceIncrease",
    "tiers": [
     {
      "name": "威脅之",
      "ilvl": 1,
      "weight": 1000,
      "text": "+(1.01—1.5)%暴擊率",
      "template": "+#%暴擊率",
      "ranges": [
       [
        1.01,
        1.5
       ]
      ],
      "tier": 6
     },
     {
      "name": "浩劫之",
      "ilvl": 20,
      "weight": 1000,
      "text": "+(1.51—2.1)%暴擊率",
      "template": "+#%暴擊率",
      "ranges": [
       [
        1.51,
        2.1
       ]
      ],
      "tier": 5
     },
     {
      "name": "災害之",
      "ilvl": 30,
      "weight": 1000,
      "text": "+(2.11—2.7)%暴擊率",
      "template": "+#%暴擊率",
      "ranges": [
       [
        2.11,
        2.7
       ]
      ],
      "tier": 4
     },
     {
      "name": "血禍之",
      "ilvl": 44,
      "weight": 500,
      "text": "+(3.11—3.8)%暴擊率",
      "template": "+#%暴擊率",
      "ranges": [
       [
        3.11,
        3.8
       ]
      ],
      "tier": 3
     },
     {
      "name": "滅絕之",
      "ilvl": 59,
      "weight": 250,
      "text": "+(3.81—4.4)%暴擊率",
      "template": "+#%暴擊率",
      "ranges": [
       [
        3.81,
        4.4
       ]
      ],
      "tier": 2
     },
     {
      "name": "奪位之",
      "ilvl": 73,
      "weight": 125,
      "text": "+(4.41—5)%暴擊率",
      "template": "+#%暴擊率",
      "ranges": [
       [
        4.41,
        5
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "CriticalStrikeMultiplier",
    "tiers": [
     {
      "name": "怒火之",
      "ilvl": 8,
      "weight": 1000,
      "text": "+(10—11)%的暴擊傷害加成",
      "template": "+#%的暴擊傷害加成",
      "ranges": [
       [
        10,
        11
       ]
      ],
      "tier": 6
     },
     {
      "name": "憤怒之",
      "ilvl": 21,
      "weight": 1000,
      "text": "+(12—13)%的暴擊傷害加成",
      "template": "+#%的暴擊傷害加成",
      "ranges": [
       [
        12,
        13
       ]
      ],
      "tier": 5
     },
     {
      "name": "狂怒之",
      "ilvl": 30,
      "weight": 1000,
      "text": "+(14—16)%的暴擊傷害加成",
      "template": "+#%的暴擊傷害加成",
      "ranges": [
       [
        14,
        16
       ]
      ],
      "tier": 4
     },
     {
      "name": "憤恨之",
      "ilvl": 44,
      "weight": 500,
      "text": "+(17—19)%的暴擊傷害加成",
      "template": "+#%的暴擊傷害加成",
      "ranges": [
       [
        17,
        19
       ]
      ],
      "tier": 3
     },
     {
      "name": "狂暴之",
      "ilvl": 59,
      "weight": 250,
      "text": "+(20—22)%的暴擊傷害加成",
      "template": "+#%的暴擊傷害加成",
      "ranges": [
       [
        20,
        22
       ]
      ],
      "tier": 2
     },
     {
      "name": "毀滅之",
      "ilvl": 73,
      "weight": 125,
      "text": "+(23—25)%的暴擊傷害加成",
      "template": "+#%的暴擊傷害加成",
      "ranges": [
       [
        23,
        25
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "IncreaseSocketedGemLevel",
    "tiers": [
     {
      "name": "決鬥之",
      "ilvl": 18,
      "weight": 750,
      "text": "全部近戰技能的等級+2",
      "template": "全部近戰技能的等級+#",
      "ranges": [
       [
        2,
        2
       ]
      ],
      "tier": 4
     },
     {
      "name": "衝突之",
      "ilvl": 36,
      "weight": 500,
      "text": "全部近戰技能的等級+3",
      "template": "全部近戰技能的等級+#",
      "ranges": [
       [
        3,
        3
       ]
      ],
      "tier": 3
     },
     {
      "name": "戰鬥之",
      "ilvl": 55,
      "weight": 250,
      "text": "全部近戰技能的等級+4",
      "template": "全部近戰技能的等級+#",
      "ranges": [
       [
        4,
        4
       ]
      ],
      "tier": 2
     },
     {
      "name": "戰爭之",
      "ilvl": 81,
      "weight": 100,
      "text": "全部近戰技能的等級+5",
      "template": "全部近戰技能的等級+#",
      "ranges": [
       [
        5,
        5
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "IncreasedAttackSpeed",
    "tiers": [
     {
      "name": "技巧之",
      "ilvl": 1,
      "weight": 1000,
      "text": "增加(5—7)%攻擊速度",
      "template": "增加#%攻擊速度",
      "ranges": [
       [
        5,
        7
       ]
      ],
      "tier": 8
     },
     {
      "name": "輕鬆之",
      "ilvl": 11,
      "weight": 1000,
      "text": "增加(8—10)%攻擊速度",
      "template": "增加#%攻擊速度",
      "ranges": [
       [
        8,
        10
       ]
      ],
      "tier": 7
     },
     {
      "name": "成熟之",
      "ilvl": 22,
      "weight": 1000,
      "text": "增加(11—13)%攻擊速度",
      "template": "增加#%攻擊速度",
      "ranges": [
       [
        11,
        13
       ]
      ],
      "tier": 6
     },
     {
      "name": "聲望之",
      "ilvl": 30,
      "weight": 1000,
      "text": "增加(14—16)%攻擊速度",
      "template": "增加#%攻擊速度",
      "ranges": [
       [
        14,
        16
       ]
      ],
      "tier": 5
     },
     {
      "name": "讚賞之",
      "ilvl": 37,
      "weight": 500,
      "text": "增加(17—19)%攻擊速度",
      "template": "增加#%攻擊速度",
      "ranges": [
       [
        17,
        19
       ]
      ],
      "tier": 4
     },
     {
      "name": "名聲之",
      "ilvl": 45,
      "weight": 500,
      "text": "增加(20—22)%攻擊速度",
      "template": "增加#%攻擊速度",
      "ranges": [
       [
        20,
        22
       ]
      ],
      "tier": 3
     },
     {
      "name": "惡名之",
      "ilvl": 60,
      "weight": 200,
      "text": "增加(23—25)%攻擊速度",
      "template": "增加#%攻擊速度",
      "ranges": [
       [
        23,
        25
       ]
      ],
      "tier": 2
     },
     {
      "name": "慶典之",
      "ilvl": 77,
      "weight": 100,
      "text": "增加(26—28)%攻擊速度",
      "template": "增加#%攻擊速度",
      "ranges": [
       [
        26,
        28
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "LifeGainPerTarget",
    "tiers": [
     {
      "name": "回春之",
      "ilvl": 8,
      "weight": 1000,
      "text": "每擊中一名敵人，獲得2生命",
      "template": "每擊中一名敵人，獲得#生命",
      "ranges": [
       [
        2,
        2
       ]
      ],
      "tier": 4
     },
     {
      "name": "恢復之",
      "ilvl": 20,
      "weight": 1000,
      "text": "每擊中一名敵人，獲得3生命",
      "template": "每擊中一名敵人，獲得#生命",
      "ranges": [
       [
        3,
        3
       ]
      ],
      "tier": 3
     },
     {
      "name": "再生之",
      "ilvl": 30,
      "weight": 1000,
      "text": "每擊中一名敵人，獲得4生命",
      "template": "每擊中一名敵人，獲得#生命",
      "ranges": [
       [
        4,
        4
       ]
      ],
      "tier": 2
     },
     {
      "name": "營養之",
      "ilvl": 40,
      "weight": 1000,
      "text": "每擊中一名敵人，獲得5生命",
      "template": "每擊中一名敵人，獲得#生命",
      "ranges": [
       [
        5,
        5
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "LifeGainedFromEnemyDeath",
    "tiers": [
     {
      "name": "成功之",
      "ilvl": 1,
      "weight": 750,
      "text": "每個被擊殺的敵人，獲得(4—6)生命",
      "template": "每個被擊殺的敵人，獲得#生命",
      "ranges": [
       [
        4,
        6
       ]
      ],
      "tier": 8
     },
     {
      "name": "勝利之",
      "ilvl": 11,
      "weight": 750,
      "text": "每個被擊殺的敵人，獲得(7—9)生命",
      "template": "每個被擊殺的敵人，獲得#生命",
      "ranges": [
       [
        7,
        9
       ]
      ],
      "tier": 7
     },
     {
      "name": "凱旋之",
      "ilvl": 22,
      "weight": 750,
      "text": "每個被擊殺的敵人，獲得(10—18)生命",
      "template": "每個被擊殺的敵人，獲得#生命",
      "ranges": [
       [
        10,
        18
       ]
      ],
      "tier": 6
     },
     {
      "name": "征服之",
      "ilvl": 33,
      "weight": 750,
      "text": "每個被擊殺的敵人，獲得(19—28)生命",
      "template": "每個被擊殺的敵人，獲得#生命",
      "ranges": [
       [
        19,
        28
       ]
      ],
      "tier": 5
     },
     {
      "name": "征服之",
      "ilvl": 44,
      "weight": 750,
      "text": "每個被擊殺的敵人，獲得(29—40)生命",
      "template": "每個被擊殺的敵人，獲得#生命",
      "ranges": [
       [
        29,
        40
       ]
      ],
      "tier": 4
     },
     {
      "name": "勇氣之",
      "ilvl": 55,
      "weight": 750,
      "text": "每個被擊殺的敵人，獲得(41—53)生命",
      "template": "每個被擊殺的敵人，獲得#生命",
      "ranges": [
       [
        41,
        53
       ]
      ],
      "tier": 3
     },
     {
      "name": "榮耀之",
      "ilvl": 66,
      "weight": 750,
      "text": "每個被擊殺的敵人，獲得(54—68)生命",
      "template": "每個被擊殺的敵人，獲得#生命",
      "ranges": [
       [
        54,
        68
       ]
      ],
      "tier": 2
     },
     {
      "name": "傳說之",
      "ilvl": 77,
      "weight": 750,
      "text": "每個被擊殺的敵人，獲得(69—84)生命",
      "template": "每個被擊殺的敵人，獲得#生命",
      "ranges": [
       [
        69,
        84
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "LifeLeech",
    "tiers": [
     {
      "name": "蝗蟲之",
      "ilvl": 21,
      "weight": 1000,
      "text": "以(6—6.9)%物理傷害偷取生命",
      "template": "以#%物理傷害偷取生命",
      "ranges": [
       [
        6,
        6.9
       ]
      ],
      "tier": 4
     },
     {
      "name": "鯽魚之",
      "ilvl": 38,
      "weight": 1000,
      "text": "以(7—7.9)%物理傷害偷取生命",
      "template": "以#%物理傷害偷取生命",
      "ranges": [
       [
        7,
        7.9
       ]
      ],
      "tier": 3
     },
     {
      "name": "七鰓鰻之",
      "ilvl": 54,
      "weight": 1000,
      "text": "以(8—8.9)%物理傷害偷取生命",
      "template": "以#%物理傷害偷取生命",
      "ranges": [
       [
        8,
        8.9
       ]
      ],
      "tier": 2
     },
     {
      "name": "吸血鬼之",
      "ilvl": 65,
      "weight": 1000,
      "text": "以(9—9.9)%物理傷害偷取生命",
      "template": "以#%物理傷害偷取生命",
      "ranges": [
       [
        9,
        9.9
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "LightRadiusAndAccuracy",
    "tiers": [
     {
      "name": "閃亮之",
      "ilvl": 8,
      "weight": 1000,
      "text": "+(10—20)命中值增加5%照亮範圍",
      "template": "+#命中值增加#%照亮範圍",
      "ranges": [
       [
        10,
        20
       ],
       [
        5,
        5
       ]
      ],
      "tier": 3
     },
     {
      "name": "光明之",
      "ilvl": 15,
      "weight": 1000,
      "text": "+(21—40)命中值增加10%照亮範圍",
      "template": "+#命中值增加#%照亮範圍",
      "ranges": [
       [
        21,
        40
       ],
       [
        10,
        10
       ]
      ],
      "tier": 2
     },
     {
      "name": "光輝之",
      "ilvl": 30,
      "weight": 1000,
      "text": "+(41—60)命中值增加15%照亮範圍",
      "template": "+#命中值增加#%照亮範圍",
      "ranges": [
       [
        41,
        60
       ],
       [
        15,
        15
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "LocalAttributeRequirements",
    "tiers": [
     {
      "name": "值得之",
      "ilvl": 24,
      "weight": 1000,
      "text": "減少15%能力值需求",
      "template": "減少#%能力值需求",
      "ranges": [
       [
        15,
        15
       ]
      ],
      "tier": 5
     },
     {
      "name": "容易之",
      "ilvl": 32,
      "weight": 1000,
      "text": "減少20%能力值需求",
      "template": "減少#%能力值需求",
      "ranges": [
       [
        20,
        20
       ]
      ],
      "tier": 4
     },
     {
      "name": "長才之",
      "ilvl": 40,
      "weight": 1000,
      "text": "減少25%能力值需求",
      "template": "減少#%能力值需求",
      "ranges": [
       [
        25,
        25
       ]
      ],
      "tier": 3
     },
     {
      "name": "高超之",
      "ilvl": 52,
      "weight": 1000,
      "text": "減少30%能力值需求",
      "template": "減少#%能力值需求",
      "ranges": [
       [
        30,
        30
       ]
      ],
      "tier": 2
     },
     {
      "name": "熟習之",
      "ilvl": 60,
      "weight": 1000,
      "text": "減少35%能力值需求",
      "template": "減少#%能力值需求",
      "ranges": [
       [
        35,
        35
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "ManaGainedFromEnemyDeath",
    "tiers": [
     {
      "name": "吸收之",
      "ilvl": 1,
      "weight": 750,
      "text": "每個被擊殺的敵人，獲得(2—3)魔力",
      "template": "每個被擊殺的敵人，獲得#魔力",
      "ranges": [
       [
        2,
        3
       ]
      ],
      "tier": 8
     },
     {
      "name": "逆滲透之",
      "ilvl": 12,
      "weight": 750,
      "text": "每個被擊殺的敵人，獲得(4—5)魔力",
      "template": "每個被擊殺的敵人，獲得#魔力",
      "ranges": [
       [
        4,
        5
       ]
      ],
      "tier": 7
     },
     {
      "name": "注入之",
      "ilvl": 23,
      "weight": 750,
      "text": "每個被擊殺的敵人，獲得(6—9)魔力",
      "template": "每個被擊殺的敵人，獲得#魔力",
      "ranges": [
       [
        6,
        9
       ]
      ],
      "tier": 6
     },
     {
      "name": "包覆之",
      "ilvl": 34,
      "weight": 750,
      "text": "每個被擊殺的敵人，獲得(10—14)魔力",
      "template": "每個被擊殺的敵人，獲得#魔力",
      "ranges": [
       [
        10,
        14
       ]
      ],
      "tier": 5
     },
     {
      "name": "消耗之",
      "ilvl": 45,
      "weight": 750,
      "text": "每個被擊殺的敵人，獲得(15—20)魔力",
      "template": "每個被擊殺的敵人，獲得#魔力",
      "ranges": [
       [
        15,
        20
       ]
      ],
      "tier": 4
     },
     {
      "name": "虹吸之",
      "ilvl": 56,
      "weight": 750,
      "text": "每個被擊殺的敵人，獲得(21—27)魔力",
      "template": "每個被擊殺的敵人，獲得#魔力",
      "ranges": [
       [
        21,
        27
       ]
      ],
      "tier": 3
     },
     {
      "name": "吞噬之",
      "ilvl": 67,
      "weight": 750,
      "text": "每個被擊殺的敵人，獲得(28—35)魔力",
      "template": "每個被擊殺的敵人，獲得#魔力",
      "ranges": [
       [
        28,
        35
       ]
      ],
      "tier": 2
     },
     {
      "name": "同化之",
      "ilvl": 78,
      "weight": 750,
      "text": "每個被擊殺的敵人，獲得(36—45)魔力",
      "template": "每個被擊殺的敵人，獲得#魔力",
      "ranges": [
       [
        36,
        45
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "ManaLeech",
    "tiers": [
     {
      "name": "乾渴之",
      "ilvl": 21,
      "weight": 1000,
      "text": "以(5—5.9)%物理傷害偷取魔力",
      "template": "以#%物理傷害偷取魔力",
      "ranges": [
       [
        5,
        5.9
       ]
      ],
      "tier": 4
     },
     {
      "name": "乾燥之",
      "ilvl": 38,
      "weight": 1000,
      "text": "以(6—6.9)%物理傷害偷取魔力",
      "template": "以#%物理傷害偷取魔力",
      "ranges": [
       [
        6,
        6.9
       ]
      ],
      "tier": 3
     },
     {
      "name": "乾旱之",
      "ilvl": 54,
      "weight": 1000,
      "text": "以(7—7.9)%物理傷害偷取魔力",
      "template": "以#%物理傷害偷取魔力",
      "ranges": [
       [
        7,
        7.9
       ]
      ],
      "tier": 2
     },
     {
      "name": "絕望之",
      "ilvl": 65,
      "weight": 1000,
      "text": "以(8—8.9)%物理傷害偷取魔力",
      "template": "以#%物理傷害偷取魔力",
      "ranges": [
       [
        8,
        8.9
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "Strength",
    "tiers": [
     {
      "name": "野蠻之",
      "ilvl": 1,
      "weight": 1000,
      "text": "+(5—8)點力量",
      "template": "+#點力量",
      "ranges": [
       [
        5,
        8
       ]
      ],
      "tier": 8
     },
     {
      "name": "摔角手之",
      "ilvl": 11,
      "weight": 1000,
      "text": "+(9—12)點力量",
      "template": "+#點力量",
      "ranges": [
       [
        9,
        12
       ]
      ],
      "tier": 7
     },
     {
      "name": "熊之",
      "ilvl": 22,
      "weight": 1000,
      "text": "+(13—16)點力量",
      "template": "+#點力量",
      "ranges": [
       [
        13,
        16
       ]
      ],
      "tier": 6
     },
     {
      "name": "獅子之",
      "ilvl": 33,
      "weight": 1000,
      "text": "+(17—20)點力量",
      "template": "+#點力量",
      "ranges": [
       [
        17,
        20
       ]
      ],
      "tier": 5
     },
     {
      "name": "大猩猩之",
      "ilvl": 44,
      "weight": 1000,
      "text": "+(21—24)點力量",
      "template": "+#點力量",
      "ranges": [
       [
        21,
        24
       ]
      ],
      "tier": 4
     },
     {
      "name": "巨人之",
      "ilvl": 55,
      "weight": 1000,
      "text": "+(25—27)點力量",
      "template": "+#點力量",
      "ranges": [
       [
        25,
        27
       ]
      ],
      "tier": 3
     },
     {
      "name": "海獸之",
      "ilvl": 66,
      "weight": 1000,
      "text": "+(28—30)點力量",
      "template": "+#點力量",
      "ranges": [
       [
        28,
        30
       ]
      ],
      "tier": 2
     },
     {
      "name": "泰坦之",
      "ilvl": 74,
      "weight": 1000,
      "text": "+(31—33)點力量",
      "template": "+#點力量",
      "ranges": [
       [
        31,
        33
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "StunDamageIncrease",
    "tiers": [
     {
      "name": "拳擊之",
      "ilvl": 5,
      "weight": 1000,
      "text": "增加(21—30)%暈眩累積",
      "template": "增加#%暈眩累積",
      "ranges": [
       [
        21,
        30
       ]
      ],
      "tier": 6
     },
     {
      "name": "打鬥之",
      "ilvl": 20,
      "weight": 1000,
      "text": "增加(31—40)%暈眩累積",
      "template": "增加#%暈眩累積",
      "ranges": [
       [
        31,
        40
       ]
      ],
      "tier": 5
     },
     {
      "name": "格鬥家之",
      "ilvl": 30,
      "weight": 1000,
      "text": "增加(41—50)%暈眩累積",
      "template": "增加#%暈眩累積",
      "ranges": [
       [
        41,
        50
       ]
      ],
      "tier": 4
     },
     {
      "name": "戰鬥之",
      "ilvl": 44,
      "weight": 1000,
      "text": "增加(51—60)%暈眩累積",
      "template": "增加#%暈眩累積",
      "ranges": [
       [
        51,
        60
       ]
      ],
      "tier": 3
     },
     {
      "name": "角鬥士之",
      "ilvl": 58,
      "weight": 1000,
      "text": "增加(61—70)%暈眩累積",
      "template": "增加#%暈眩累積",
      "ranges": [
       [
        61,
        70
       ]
      ],
      "tier": 2
     },
     {
      "name": "冠軍之",
      "ilvl": 74,
      "weight": 1000,
      "text": "增加(71—80)%暈眩累積",
      "template": "增加#%暈眩累積",
      "ranges": [
       [
        71,
        80
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "StunDurationIncreasePercent",
    "tiers": [
     {
      "name": "衝擊之",
      "ilvl": 5,
      "weight": 1000,
      "text": "增加(11—13)%暈眩持續時間",
      "template": "增加#%暈眩持續時間",
      "ranges": [
       [
        11,
        13
       ]
      ],
      "tier": 6
     },
     {
      "name": "暈眩之",
      "ilvl": 18,
      "weight": 1000,
      "text": "增加(14—16)%暈眩持續時間",
      "template": "增加#%暈眩持續時間",
      "ranges": [
       [
        14,
        16
       ]
      ],
      "tier": 5
     },
     {
      "name": "擊暈之",
      "ilvl": 30,
      "weight": 1000,
      "text": "增加(17—19)%暈眩持續時間",
      "template": "增加#%暈眩持續時間",
      "ranges": [
       [
        17,
        19
       ]
      ],
      "tier": 4
     },
     {
      "name": "轟擊之",
      "ilvl": 44,
      "weight": 1000,
      "text": "增加(20—22)%暈眩持續時間",
      "template": "增加#%暈眩持續時間",
      "ranges": [
       [
        20,
        22
       ]
      ],
      "tier": 3
     },
     {
      "name": "蹣跚之",
      "ilvl": 58,
      "weight": 1000,
      "text": "增加(23—26)%暈眩持續時間",
      "template": "增加#%暈眩持續時間",
      "ranges": [
       [
        23,
        26
       ]
      ],
      "tier": 2
     },
     {
      "name": "頭昏腦脹之",
      "ilvl": 71,
      "weight": 1000,
      "text": "增加(27—30)%暈眩持續時間",
      "template": "增加#%暈眩持續時間",
      "ranges": [
       [
        27,
        30
       ]
      ],
      "tier": 1
     }
    ]
   }
  ]
 },
 "Wands": {
  "prefix": [
   {
    "family": "ColdDamage",
    "tiers": [
     {
      "name": "惡性的",
      "ilvl": 5,
      "weight": 500,
      "text": "獲得等同於傷害(13—15)%的額外冰冷傷害",
      "template": "獲得等同於傷害#%的額外冰冷傷害",
      "ranges": [
       [
        13,
        15
       ]
      ],
      "tier": 6
     },
     {
      "name": "有害的",
      "ilvl": 16,
      "weight": 500,
      "text": "獲得等同於傷害(16—18)%的額外冰冷傷害",
      "template": "獲得等同於傷害#%的額外冰冷傷害",
      "ranges": [
       [
        16,
        18
       ]
      ],
      "tier": 5
     },
     {
      "name": "破壞的",
      "ilvl": 33,
      "weight": 500,
      "text": "獲得等同於傷害(19—21)%的額外冰冷傷害",
      "template": "獲得等同於傷害#%的額外冰冷傷害",
      "ranges": [
       [
        19,
        21
       ]
      ],
      "tier": 4
     },
     {
      "name": "惡意的",
      "ilvl": 46,
      "weight": 500,
      "text": "獲得等同於傷害(22—24)%的額外冰冷傷害",
      "template": "獲得等同於傷害#%的額外冰冷傷害",
      "ranges": [
       [
        22,
        24
       ]
      ],
      "tier": 3
     },
     {
      "name": "殘暴",
      "ilvl": 60,
      "weight": 500,
      "text": "獲得等同於傷害(25—27)%的額外冰冷傷害",
      "template": "獲得等同於傷害#%的額外冰冷傷害",
      "ranges": [
       [
        25,
        27
       ]
      ],
      "tier": 2
     },
     {
      "name": "霜縛的",
      "ilvl": 80,
      "weight": 500,
      "text": "獲得等同於傷害(28—30)%的額外冰冷傷害",
      "template": "獲得等同於傷害#%的額外冰冷傷害",
      "ranges": [
       [
        28,
        30
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "FireDamage",
    "tiers": [
     {
      "name": "熱切的",
      "ilvl": 5,
      "weight": 500,
      "text": "獲得等同於傷害(13—15)%的額外火焰傷害",
      "template": "獲得等同於傷害#%的額外火焰傷害",
      "ranges": [
       [
        13,
        15
       ]
      ],
      "tier": 6
     },
     {
      "name": "熱烈的",
      "ilvl": 16,
      "weight": 500,
      "text": "獲得等同於傷害(16—18)%的額外火焰傷害",
      "template": "獲得等同於傷害#%的額外火焰傷害",
      "ranges": [
       [
        16,
        18
       ]
      ],
      "tier": 5
     },
     {
      "name": "狂熱之",
      "ilvl": 33,
      "weight": 500,
      "text": "獲得等同於傷害(19—21)%的額外火焰傷害",
      "template": "獲得等同於傷害#%的額外火焰傷害",
      "ranges": [
       [
        19,
        21
       ]
      ],
      "tier": 4
     },
     {
      "name": "狂熱者之",
      "ilvl": 46,
      "weight": 500,
      "text": "獲得等同於傷害(22—24)%的額外火焰傷害",
      "template": "獲得等同於傷害#%的額外火焰傷害",
      "ranges": [
       [
        22,
        24
       ]
      ],
      "tier": 3
     },
     {
      "name": "獄炎的",
      "ilvl": 60,
      "weight": 500,
      "text": "獲得等同於傷害(25—27)%的額外火焰傷害",
      "template": "獲得等同於傷害#%的額外火焰傷害",
      "ranges": [
       [
        25,
        27
       ]
      ],
      "tier": 2
     },
     {
      "name": "炎縛的",
      "ilvl": 80,
      "weight": 500,
      "text": "獲得等同於傷害(28—30)%的額外火焰傷害",
      "template": "獲得等同於傷害#%的額外火焰傷害",
      "ranges": [
       [
        28,
        30
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "IncreasedMana",
    "tiers": [
     {
      "name": "綠寶石的",
      "ilvl": 1,
      "weight": 1000,
      "text": "+(10—14)最大魔力",
      "template": "+#最大魔力",
      "ranges": [
       [
        10,
        14
       ]
      ],
      "tier": 11
     },
     {
      "name": "鈷藍的",
      "ilvl": 6,
      "weight": 1000,
      "text": "+(15—24)最大魔力",
      "template": "+#最大魔力",
      "ranges": [
       [
        15,
        24
       ]
      ],
      "tier": 10
     },
     {
      "name": "湛藍的",
      "ilvl": 16,
      "weight": 1000,
      "text": "+(25—34)最大魔力",
      "template": "+#最大魔力",
      "ranges": [
       [
        25,
        34
       ]
      ],
      "tier": 9
     },
     {
      "name": "清綠",
      "ilvl": 25,
      "weight": 1000,
      "text": "+(35—54)最大魔力",
      "template": "+#最大魔力",
      "ranges": [
       [
        35,
        54
       ]
      ],
      "tier": 8
     },
     {
      "name": "天藍的",
      "ilvl": 33,
      "weight": 1000,
      "text": "+(55—64)最大魔力",
      "template": "+#最大魔力",
      "ranges": [
       [
        55,
        64
       ]
      ],
      "tier": 7
     },
     {
      "name": "水星的",
      "ilvl": 38,
      "weight": 1000,
      "text": "+(65—79)最大魔力",
      "template": "+#最大魔力",
      "ranges": [
       [
        65,
        79
       ]
      ],
      "tier": 6
     },
     {
      "name": "乳白色的",
      "ilvl": 46,
      "weight": 1000,
      "text": "+(80—89)最大魔力",
      "template": "+#最大魔力",
      "ranges": [
       [
        80,
        89
       ]
      ],
      "tier": 5
     },
     {
      "name": "龍膽的",
      "ilvl": 54,
      "weight": 1000,
      "text": "+(90—104)最大魔力",
      "template": "+#最大魔力",
      "ranges": [
       [
        90,
        104
       ]
      ],
      "tier": 4
     },
     {
      "name": "靛藍的",
      "ilvl": 60,
      "weight": 1000,
      "text": "+(105—124)最大魔力",
      "template": "+#最大魔力",
      "ranges": [
       [
        105,
        124
       ]
      ],
      "tier": 3
     },
     {
      "name": "深藍的",
      "ilvl": 65,
      "weight": 1000,
      "text": "+(125—149)最大魔力",
      "template": "+#最大魔力",
      "ranges": [
       [
        125,
        149
       ]
      ],
      "tier": 2
     },
     {
      "name": "純藍的",
      "ilvl": 70,
      "weight": 1000,
      "text": "+(150—164)最大魔力",
      "template": "+#最大魔力",
      "ranges": [
       [
        150,
        164
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "LightningDamage",
    "tiers": [
     {
      "name": "致死的",
      "ilvl": 5,
      "weight": 500,
      "text": "獲得等同於傷害(13—15)%的額外閃電傷害",
      "template": "獲得等同於傷害#%的額外閃電傷害",
      "ranges": [
       [
        13,
        15
       ]
      ],
      "tier": 6
     },
     {
      "name": "致命的",
      "ilvl": 16,
      "weight": 500,
      "text": "獲得等同於傷害(16—18)%的額外閃電傷害",
      "template": "獲得等同於傷害#%的額外閃電傷害",
      "ranges": [
       [
        16,
        18
       ]
      ],
      "tier": 5
     },
     {
      "name": "致命的",
      "ilvl": 33,
      "weight": 500,
      "text": "獲得等同於傷害(19—21)%的額外閃電傷害",
      "template": "獲得等同於傷害#%的額外閃電傷害",
      "ranges": [
       [
        19,
        21
       ]
      ],
      "tier": 4
     },
     {
      "name": "銳利的",
      "ilvl": 46,
      "weight": 500,
      "text": "獲得等同於傷害(22—24)%的額外閃電傷害",
      "template": "獲得等同於傷害#%的額外閃電傷害",
      "ranges": [
       [
        22,
        24
       ]
      ],
      "tier": 3
     },
     {
      "name": "通電的",
      "ilvl": 60,
      "weight": 500,
      "text": "獲得等同於傷害(25—27)%的額外閃電傷害",
      "template": "獲得等同於傷害#%的額外閃電傷害",
      "ranges": [
       [
        25,
        27
       ]
      ],
      "tier": 2
     },
     {
      "name": "風縛的",
      "ilvl": 80,
      "weight": 500,
      "text": "獲得等同於傷害(28—30)%的額外閃電傷害",
      "template": "獲得等同於傷害#%的額外閃電傷害",
      "ranges": [
       [
        28,
        30
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "SpellDamageAndMana",
    "tiers": [
     {
      "name": "施放者的",
      "ilvl": 2,
      "weight": 1000,
      "text": "增加(15—19)%法術傷害+(17—20)最大魔力",
      "template": "增加#%法術傷害+#最大魔力",
      "ranges": [
       [
        15,
        19
       ],
       [
        17,
        20
       ]
      ],
      "tier": 7
     },
     {
      "name": "咒術師的",
      "ilvl": 11,
      "weight": 1000,
      "text": "增加(20—24)%法術傷害+(21—24)最大魔力",
      "template": "增加#%法術傷害+#最大魔力",
      "ranges": [
       [
        20,
        24
       ],
       [
        21,
        24
       ]
      ],
      "tier": 6
     },
     {
      "name": "巫師的",
      "ilvl": 23,
      "weight": 1000,
      "text": "增加(25—29)%法術傷害+(25—28)最大魔力",
      "template": "增加#%法術傷害+#最大魔力",
      "ranges": [
       [
        25,
        29
       ],
       [
        25,
        28
       ]
      ],
      "tier": 5
     },
     {
      "name": "術士的",
      "ilvl": 38,
      "weight": 600,
      "text": "增加(30—34)%法術傷害+(29—33)最大魔力",
      "template": "增加#%法術傷害+#最大魔力",
      "ranges": [
       [
        30,
        34
       ],
       [
        29,
        33
       ]
      ],
      "tier": 4
     },
     {
      "name": "魔導師的",
      "ilvl": 46,
      "weight": 400,
      "text": "增加(35—39)%法術傷害+(34—37)最大魔力",
      "template": "增加#%法術傷害+#最大魔力",
      "ranges": [
       [
        35,
        39
       ],
       [
        34,
        37
       ]
      ],
      "tier": 3
     },
     {
      "name": "大法師的",
      "ilvl": 60,
      "weight": 200,
      "text": "增加(40—44)%法術傷害+(38—41)最大魔力",
      "template": "增加#%法術傷害+#最大魔力",
      "ranges": [
       [
        40,
        44
       ],
       [
        38,
        41
       ]
      ],
      "tier": 2
     },
     {
      "name": "巫妖的",
      "ilvl": 80,
      "weight": 100,
      "text": "增加(45—49)%法術傷害+(42—45)最大魔力",
      "template": "增加#%法術傷害+#最大魔力",
      "ranges": [
       [
        45,
        49
       ],
       [
        42,
        45
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "WeaponCasterDamagePrefix",
    "tiers": [
     {
      "name": "學徒的",
      "ilvl": 1,
      "weight": 1000,
      "text": "增加(25—34)%法術傷害",
      "template": "增加#%法術傷害",
      "ranges": [
       [
        25,
        34
       ]
      ],
      "tier": 8
     },
     {
      "name": "嫻熟的",
      "ilvl": 8,
      "weight": 1000,
      "text": "增加(35—44)%法術傷害",
      "template": "增加#%法術傷害",
      "ranges": [
       [
        35,
        44
       ]
      ],
      "tier": 7
     },
     {
      "name": "學者的",
      "ilvl": 16,
      "weight": 1000,
      "text": "增加(45—54)%法術傷害",
      "template": "增加#%法術傷害",
      "ranges": [
       [
        45,
        54
       ]
      ],
      "tier": 6
     },
     {
      "name": "教授的",
      "ilvl": 33,
      "weight": 600,
      "text": "增加(55—64)%法術傷害",
      "template": "增加#%法術傷害",
      "ranges": [
       [
        55,
        64
       ]
      ],
      "tier": 5
     },
     {
      "name": "神秘學者的",
      "ilvl": 46,
      "weight": 400,
      "text": "增加(65—74)%法術傷害",
      "template": "增加#%法術傷害",
      "ranges": [
       [
        65,
        74
       ]
      ],
      "tier": 4
     },
     {
      "name": "魔咒師的",
      "ilvl": 60,
      "weight": 200,
      "text": "增加(75—89)%法術傷害",
      "template": "增加#%法術傷害",
      "ranges": [
       [
        75,
        89
       ]
      ],
      "tier": 3
     },
     {
      "name": "雕紋的",
      "ilvl": 70,
      "weight": 100,
      "text": "增加(90—104)%法術傷害",
      "template": "增加#%法術傷害",
      "ranges": [
       [
        90,
        104
       ]
      ],
      "tier": 2
     },
     {
      "name": "符文",
      "ilvl": 80,
      "weight": 50,
      "text": "增加(105—119)%法術傷害",
      "template": "增加#%法術傷害",
      "ranges": [
       [
        105,
        119
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "WeaponDamageTypePrefix",
    "tiers": [
     {
      "name": "燒灼的",
      "ilvl": 2,
      "weight": 500,
      "text": "增加(25—34)%火焰傷害",
      "template": "增加#%火焰傷害",
      "ranges": [
       [
        25,
        34
       ]
      ],
      "tier": 40
     },
     {
      "name": "苦味的",
      "ilvl": 2,
      "weight": 500,
      "text": "增加(25—34)%冰冷傷害",
      "template": "增加#%冰冷傷害",
      "ranges": [
       [
        25,
        34
       ]
      ],
      "tier": 39
     },
     {
      "name": "充電的",
      "ilvl": 2,
      "weight": 500,
      "text": "增加(25—34)%閃電傷害",
      "template": "增加#%閃電傷害",
      "ranges": [
       [
        25,
        34
       ]
      ],
      "tier": 38
     },
     {
      "name": "不潔的",
      "ilvl": 2,
      "weight": 500,
      "text": "增加(25—34)%混沌傷害",
      "template": "增加#%混沌傷害",
      "ranges": [
       [
        25,
        34
       ]
      ],
      "tier": 37
     },
     {
      "name": "懲戒的",
      "ilvl": 2,
      "weight": 500,
      "text": "增加(25—34)%法術物理傷害",
      "template": "增加#%法術物理傷害",
      "ranges": [
       [
        25,
        34
       ]
      ],
      "tier": 36
     },
     {
      "name": "極熱的",
      "ilvl": 8,
      "weight": 500,
      "text": "增加(35—44)%火焰傷害",
      "template": "增加#%火焰傷害",
      "ranges": [
       [
        35,
        44
       ]
      ],
      "tier": 35
     },
     {
      "name": "刺人的",
      "ilvl": 8,
      "weight": 500,
      "text": "增加(35—44)%冰冷傷害",
      "template": "增加#%冰冷傷害",
      "ranges": [
       [
        35,
        44
       ]
      ],
      "tier": 34
     },
     {
      "name": "嘶聲的",
      "ilvl": 8,
      "weight": 500,
      "text": "增加(35—44)%閃電傷害",
      "template": "增加#%閃電傷害",
      "ranges": [
       [
        35,
        44
       ]
      ],
      "tier": 33
     },
     {
      "name": "被污染的",
      "ilvl": 8,
      "weight": 500,
      "text": "增加(35—44)%混沌傷害",
      "template": "增加#%混沌傷害",
      "ranges": [
       [
        35,
        44
       ]
      ],
      "tier": 32
     },
     {
      "name": "嚴苛",
      "ilvl": 8,
      "weight": 500,
      "text": "增加(35—44)%法術物理傷害",
      "template": "增加#%法術物理傷害",
      "ranges": [
       [
        35,
        44
       ]
      ],
      "tier": 31
     },
     {
      "name": "極度的",
      "ilvl": 16,
      "weight": 500,
      "text": "增加(45—54)%火焰傷害",
      "template": "增加#%火焰傷害",
      "ranges": [
       [
        45,
        54
       ]
      ],
      "tier": 30
     },
     {
      "name": "高山的",
      "ilvl": 16,
      "weight": 500,
      "text": "增加(45—54)%冰冷傷害",
      "template": "增加#%冰冷傷害",
      "ranges": [
       [
        45,
        54
       ]
      ],
      "tier": 29
     },
     {
      "name": "電光的",
      "ilvl": 16,
      "weight": 500,
      "text": "增加(45—54)%閃電傷害",
      "template": "增加#%閃電傷害",
      "ranges": [
       [
        45,
        54
       ]
      ],
      "tier": 28
     },
     {
      "name": "多雲的",
      "ilvl": 16,
      "weight": 500,
      "text": "增加(45—54)%混沌傷害",
      "template": "增加#%混沌傷害",
      "ranges": [
       [
        45,
        54
       ]
      ],
      "tier": 27
     },
     {
      "name": "復仇的",
      "ilvl": 16,
      "weight": 500,
      "text": "增加(45—54)%法術物理傷害",
      "template": "增加#%法術物理傷害",
      "ranges": [
       [
        45,
        54
       ]
      ],
      "tier": 26
     },
     {
      "name": "灼燒的",
      "ilvl": 33,
      "weight": 400,
      "text": "增加(55—64)%火焰傷害",
      "template": "增加#%火焰傷害",
      "ranges": [
       [
        55,
        64
       ]
      ],
      "tier": 25
     },
     {
      "name": "雪白的",
      "ilvl": 33,
      "weight": 400,
      "text": "增加(55—64)%冰冷傷害",
      "template": "增加#%冰冷傷害",
      "ranges": [
       [
        55,
        64
       ]
      ],
      "tier": 24
     },
     {
      "name": "奔馳的",
      "ilvl": 33,
      "weight": 400,
      "text": "增加(55—64)%閃電傷害",
      "template": "增加#%閃電傷害",
      "ranges": [
       [
        55,
        64
       ]
      ],
      "tier": 23
     },
     {
      "name": "黑暗的",
      "ilvl": 33,
      "weight": 400,
      "text": "增加(55—64)%混沌傷害",
      "template": "增加#%混沌傷害",
      "ranges": [
       [
        55,
        64
       ]
      ],
      "tier": 22
     },
     {
      "name": "施暴",
      "ilvl": 33,
      "weight": 400,
      "text": "增加(55—64)%法術物理傷害",
      "template": "增加#%法術物理傷害",
      "ranges": [
       [
        55,
        64
       ]
      ],
      "tier": 21
     },
     {
      "name": "悶燒的",
      "ilvl": 46,
      "weight": 300,
      "text": "增加(65—74)%火焰傷害",
      "template": "增加#%火焰傷害",
      "ranges": [
       [
        65,
        74
       ]
      ],
      "tier": 20
     },
     {
      "name": "喝采的",
      "ilvl": 46,
      "weight": 300,
      "text": "增加(65—74)%冰冷傷害",
      "template": "增加#%冰冷傷害",
      "ranges": [
       [
        65,
        74
       ]
      ],
      "tier": 19
     },
     {
      "name": "敲擊的",
      "ilvl": 46,
      "weight": 300,
      "text": "增加(65—74)%閃電傷害",
      "template": "增加#%閃電傷害",
      "ranges": [
       [
        65,
        74
       ]
      ],
      "tier": 18
     },
     {
      "name": "惡性的",
      "ilvl": 46,
      "weight": 300,
      "text": "增加(65—74)%混沌傷害",
      "template": "增加#%混沌傷害",
      "ranges": [
       [
        65,
        74
       ]
      ],
      "tier": 17
     },
     {
      "name": "殘酷",
      "ilvl": 46,
      "weight": 300,
      "text": "增加(65—74)%法術物理傷害",
      "template": "增加#%法術物理傷害",
      "ranges": [
       [
        65,
        74
       ]
      ],
      "tier": 16
     },
     {
      "name": "岩漿的",
      "ilvl": 60,
      "weight": 200,
      "text": "增加(75—89)%火焰傷害",
      "template": "增加#%火焰傷害",
      "ranges": [
       [
        75,
        89
       ]
      ],
      "tier": 15
     },
     {
      "name": "極地的",
      "ilvl": 60,
      "weight": 200,
      "text": "增加(75—89)%冰冷傷害",
      "template": "增加#%冰冷傷害",
      "ranges": [
       [
        75,
        89
       ]
      ],
      "tier": 14
     },
     {
      "name": "猛打的",
      "ilvl": 60,
      "weight": 200,
      "text": "增加(75—89)%閃電傷害",
      "template": "增加#%閃電傷害",
      "ranges": [
       [
        75,
        89
       ]
      ],
      "tier": 13
     },
     {
      "name": "惡劣的",
      "ilvl": 60,
      "weight": 200,
      "text": "增加(75—89)%混沌傷害",
      "template": "增加#%混沌傷害",
      "ranges": [
       [
        75,
        89
       ]
      ],
      "tier": 12
     },
     {
      "name": "慘痛",
      "ilvl": 60,
      "weight": 200,
      "text": "增加(75—89)%法術物理傷害",
      "template": "增加#%法術物理傷害",
      "ranges": [
       [
        75,
        89
       ]
      ],
      "tier": 11
     },
     {
      "name": "火山的",
      "ilvl": 70,
      "weight": 100,
      "text": "增加(90—104)%火焰傷害",
      "template": "增加#%火焰傷害",
      "ranges": [
       [
        90,
        104
       ]
      ],
      "tier": 10
     },
     {
      "name": "結晶的",
      "ilvl": 70,
      "weight": 100,
      "text": "增加(90—104)%冰冷傷害",
      "template": "增加#%冰冷傷害",
      "ranges": [
       [
        90,
        104
       ]
      ],
      "tier": 9
     },
     {
      "name": "電離的",
      "ilvl": 70,
      "weight": 100,
      "text": "增加(90—104)%閃電傷害",
      "template": "增加#%閃電傷害",
      "ranges": [
       [
        90,
        104
       ]
      ],
      "tier": 8
     },
     {
      "name": "扭曲的",
      "ilvl": 70,
      "weight": 100,
      "text": "增加(90—104)%混沌傷害",
      "template": "增加#%混沌傷害",
      "ranges": [
       [
        90,
        104
       ]
      ],
      "tier": 7
     },
     {
      "name": "壓迫者的",
      "ilvl": 70,
      "weight": 100,
      "text": "增加(90—104)%法術物理傷害",
      "template": "增加#%法術物理傷害",
      "ranges": [
       [
        90,
        104
       ]
      ],
      "tier": 6
     },
     {
      "name": "火焰術士的",
      "ilvl": 81,
      "weight": 50,
      "text": "增加(105—119)%火焰傷害",
      "template": "增加#%火焰傷害",
      "ranges": [
       [
        105,
        119
       ]
      ],
      "tier": 5
     },
     {
      "name": "晶體的",
      "ilvl": 81,
      "weight": 50,
      "text": "增加(105—119)%冰冷傷害",
      "template": "增加#%冰冷傷害",
      "ranges": [
       [
        105,
        119
       ]
      ],
      "tier": 4
     },
     {
      "name": "電能法師的",
      "ilvl": 81,
      "weight": 50,
      "text": "增加(105—119)%閃電傷害",
      "template": "增加#%閃電傷害",
      "ranges": [
       [
        105,
        119
       ]
      ],
      "tier": 3
     },
     {
      "name": "惡劣",
      "ilvl": 81,
      "weight": 50,
      "text": "增加(105—119)%混沌傷害",
      "template": "增加#%混沌傷害",
      "ranges": [
       [
        105,
        119
       ]
      ],
      "tier": 2
     },
     {
      "name": "折磨者的",
      "ilvl": 81,
      "weight": 50,
      "text": "增加(105—119)%法術物理傷害",
      "template": "增加#%法術物理傷害",
      "ranges": [
       [
        105,
        119
       ]
      ],
      "tier": 1
     }
    ]
   }
  ],
  "suffix": [
   {
    "family": "CriticalStrikeMultiplier",
    "tiers": [
     {
      "name": "怒火之",
      "ilvl": 8,
      "weight": 1000,
      "text": "增加(10—14)%法術暴擊傷害加成",
      "template": "增加#%法術暴擊傷害加成",
      "ranges": [
       [
        10,
        14
       ]
      ],
      "tier": 6
     },
     {
      "name": "憤怒之",
      "ilvl": 21,
      "weight": 1000,
      "text": "增加(15—19)%法術暴擊傷害加成",
      "template": "增加#%法術暴擊傷害加成",
      "ranges": [
       [
        15,
        19
       ]
      ],
      "tier": 5
     },
     {
      "name": "狂怒之",
      "ilvl": 30,
      "weight": 1000,
      "text": "增加(20—24)%法術暴擊傷害加成",
      "template": "增加#%法術暴擊傷害加成",
      "ranges": [
       [
        20,
        24
       ]
      ],
      "tier": 4
     },
     {
      "name": "憤恨之",
      "ilvl": 44,
      "weight": 500,
      "text": "增加(25—29)%法術暴擊傷害加成",
      "template": "增加#%法術暴擊傷害加成",
      "ranges": [
       [
        25,
        29
       ]
      ],
      "tier": 3
     },
     {
      "name": "狂暴之",
      "ilvl": 59,
      "weight": 250,
      "text": "增加(30—34)%法術暴擊傷害加成",
      "template": "增加#%法術暴擊傷害加成",
      "ranges": [
       [
        30,
        34
       ]
      ],
      "tier": 2
     },
     {
      "name": "毀滅之",
      "ilvl": 73,
      "weight": 125,
      "text": "增加(35—39)%法術暴擊傷害加成",
      "template": "增加#%法術暴擊傷害加成",
      "ranges": [
       [
        35,
        39
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "FreezeDamageIncrease",
    "tiers": [
     {
      "name": "冰凍之",
      "ilvl": 15,
      "weight": 1000,
      "text": "增加(31—40)%冰凍累積",
      "template": "增加#%冰凍累積",
      "ranges": [
       [
        31,
        40
       ]
      ],
      "tier": 5
     },
     {
      "name": "淒涼之",
      "ilvl": 30,
      "weight": 1000,
      "text": "增加(41—50)%冰凍累積",
      "template": "增加#%冰凍累積",
      "ranges": [
       [
        41,
        50
       ]
      ],
      "tier": 4
     },
     {
      "name": "冰川之",
      "ilvl": 45,
      "weight": 1000,
      "text": "增加(51—60)%冰凍累積",
      "template": "增加#%冰凍累積",
      "ranges": [
       [
        51,
        60
       ]
      ],
      "tier": 3
     },
     {
      "name": "超北方之",
      "ilvl": 60,
      "weight": 500,
      "text": "增加(61—70)%冰凍累積",
      "template": "增加#%冰凍累積",
      "ranges": [
       [
        61,
        70
       ]
      ],
      "tier": 2
     },
     {
      "name": "寒帶之",
      "ilvl": 75,
      "weight": 500,
      "text": "增加(71—80)%冰凍累積",
      "template": "增加#%冰凍累積",
      "ranges": [
       [
        71,
        80
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "IgniteChanceIncrease",
    "tiers": [
     {
      "name": "點燃之",
      "ilvl": 15,
      "weight": 1000,
      "text": "增加(51—60)%易燃幅度",
      "template": "增加#%易燃幅度",
      "ranges": [
       [
        51,
        60
       ]
      ],
      "tier": 5
     },
     {
      "name": "焦灼之",
      "ilvl": 30,
      "weight": 1000,
      "text": "增加(61—70)%易燃幅度",
      "template": "增加#%易燃幅度",
      "ranges": [
       [
        61,
        70
       ]
      ],
      "tier": 4
     },
     {
      "name": "焚燒之",
      "ilvl": 45,
      "weight": 1000,
      "text": "增加(71—80)%易燃幅度",
      "template": "增加#%易燃幅度",
      "ranges": [
       [
        71,
        80
       ]
      ],
      "tier": 3
     },
     {
      "name": "燃燒之",
      "ilvl": 60,
      "weight": 500,
      "text": "增加(81—90)%易燃幅度",
      "template": "增加#%易燃幅度",
      "ranges": [
       [
        81,
        90
       ]
      ],
      "tier": 2
     },
     {
      "name": "大火之",
      "ilvl": 75,
      "weight": 500,
      "text": "增加(91—100)%易燃幅度",
      "template": "增加#%易燃幅度",
      "ranges": [
       [
        91,
        100
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "IncreaseSocketedGemLevel",
    "tiers": [
     {
      "name": "煤之",
      "ilvl": 2,
      "weight": 1000,
      "text": "全部火焰法術技能等級+1",
      "template": "全部火焰法術技能等級+#",
      "ranges": [
       [
        1,
        1
       ]
      ],
      "tier": 29
     },
     {
      "name": "雪之",
      "ilvl": 2,
      "weight": 1000,
      "text": "全部冰冷法術技能等級+1",
      "template": "全部冰冷法術技能等級+#",
      "ranges": [
       [
        1,
        1
       ]
      ],
      "tier": 28
     },
     {
      "name": "火花之",
      "ilvl": 2,
      "weight": 1000,
      "text": "全部閃電法術技能等級+1",
      "template": "全部閃電法術技能等級+#",
      "ranges": [
       [
        1,
        1
       ]
      ],
      "tier": 27
     },
     {
      "name": "無法者之",
      "ilvl": 2,
      "weight": 1000,
      "text": "全部混沌法術技能等級+1",
      "template": "全部混沌法術技能等級+#",
      "ranges": [
       [
        1,
        1
       ]
      ],
      "tier": 26
     },
     {
      "name": "苦痛之",
      "ilvl": 2,
      "weight": 1000,
      "text": "全部物理法術技能等級+1",
      "template": "全部物理法術技能等級+#",
      "ranges": [
       [
        1,
        1
       ]
      ],
      "tier": 25
     },
     {
      "name": "法師之",
      "ilvl": 5,
      "weight": 200,
      "text": "全部法術技能等級+1",
      "template": "全部法術技能等級+#",
      "ranges": [
       [
        1,
        1
       ]
      ],
      "tier": 24
     },
     {
      "name": "灰燼之",
      "ilvl": 18,
      "weight": 750,
      "text": "全部火焰法術技能等級+2",
      "template": "全部火焰法術技能等級+#",
      "ranges": [
       [
        2,
        2
       ]
      ],
      "tier": 23
     },
     {
      "name": "雨雪之",
      "ilvl": 18,
      "weight": 750,
      "text": "全部冰冷法術技能等級+2",
      "template": "全部冰冷法術技能等級+#",
      "ranges": [
       [
        2,
        2
       ]
      ],
      "tier": 22
     },
     {
      "name": "靜電之",
      "ilvl": 18,
      "weight": 750,
      "text": "全部閃電法術技能等級+2",
      "template": "全部閃電法術技能等級+#",
      "ranges": [
       [
        2,
        2
       ]
      ],
      "tier": 21
     },
     {
      "name": "－動亂",
      "ilvl": 18,
      "weight": 750,
      "text": "全部混沌法術技能等級+2",
      "template": "全部混沌法術技能等級+#",
      "ranges": [
       [
        2,
        2
       ]
      ],
      "tier": 20
     },
     {
      "name": "受苦難之",
      "ilvl": 18,
      "weight": 750,
      "text": "全部物理法術技能等級+2",
      "template": "全部物理法術技能等級+#",
      "ranges": [
       [
        2,
        2
       ]
      ],
      "tier": 19
     },
     {
      "name": "附魔者之",
      "ilvl": 25,
      "weight": 150,
      "text": "全部法術技能等級+2",
      "template": "全部法術技能等級+#",
      "ranges": [
       [
        2,
        2
       ]
      ],
      "tier": 18
     },
     {
      "name": "烈焰之",
      "ilvl": 36,
      "weight": 500,
      "text": "全部火焰法術技能等級+3",
      "template": "全部火焰法術技能等級+#",
      "ranges": [
       [
        3,
        3
       ]
      ],
      "tier": 17
     },
     {
      "name": "冰之",
      "ilvl": 36,
      "weight": 500,
      "text": "全部冰冷法術技能等級+3",
      "template": "全部冰冷法術技能等級+#",
      "ranges": [
       [
        3,
        3
       ]
      ],
      "tier": 16
     },
     {
      "name": "電能之",
      "ilvl": 36,
      "weight": 500,
      "text": "全部閃電法術技能等級+3",
      "template": "全部閃電法術技能等級+#",
      "ranges": [
       [
        3,
        3
       ]
      ],
      "tier": 15
     },
     {
      "name": "滅絕之",
      "ilvl": 36,
      "weight": 500,
      "text": "全部混沌法術技能等級+3",
      "template": "全部混沌法術技能等級+#",
      "ranges": [
       [
        3,
        3
       ]
      ],
      "tier": 14
     },
     {
      "name": "折磨之",
      "ilvl": 36,
      "weight": 500,
      "text": "全部物理法術技能等級+3",
      "template": "全部物理法術技能等級+#",
      "ranges": [
       [
        3,
        3
       ]
      ],
      "tier": 13
     },
     {
      "name": "巫師之",
      "ilvl": 55,
      "weight": 100,
      "text": "全部法術技能等級+3",
      "template": "全部法術技能等級+#",
      "ranges": [
       [
        3,
        3
       ]
      ],
      "tier": 12
     },
     {
      "name": "獻祭之",
      "ilvl": 55,
      "weight": 250,
      "text": "全部火焰法術技能等級+4",
      "template": "全部火焰法術技能等級+#",
      "ranges": [
       [
        4,
        4
       ]
      ],
      "tier": 11
     },
     {
      "name": "霧淞之",
      "ilvl": 55,
      "weight": 250,
      "text": "全部冰冷法術技能等級+4",
      "template": "全部冰冷法術技能等級+#",
      "ranges": [
       [
        4,
        4
       ]
      ],
      "tier": 10
     },
     {
      "name": "伏特之",
      "ilvl": 55,
      "weight": 250,
      "text": "全部閃電法術技能等級+4",
      "template": "全部閃電法術技能等級+#",
      "ranges": [
       [
        4,
        4
       ]
      ],
      "tier": 9
     },
     {
      "name": "浩劫之",
      "ilvl": 55,
      "weight": 250,
      "text": "全部混沌法術技能等級+4",
      "template": "全部混沌法術技能等級+#",
      "ranges": [
       [
        4,
        4
       ]
      ],
      "tier": 8
     },
     {
      "name": "荒蕪之",
      "ilvl": 55,
      "weight": 250,
      "text": "全部物理法術技能等級+4",
      "template": "全部物理法術技能等級+#",
      "ranges": [
       [
        4,
        4
       ]
      ],
      "tier": 7
     },
     {
      "name": "巫師之",
      "ilvl": 78,
      "weight": 50,
      "text": "全部法術技能等級+4",
      "template": "全部法術技能等級+#",
      "ranges": [
       [
        4,
        4
       ]
      ],
      "tier": 6
     },
     {
      "name": "獄火之",
      "ilvl": 81,
      "weight": 100,
      "text": "全部火焰法術技能等級+5",
      "template": "全部火焰法術技能等級+#",
      "ranges": [
       [
        5,
        5
       ]
      ],
      "tier": 5
     },
     {
      "name": "凍傷之",
      "ilvl": 81,
      "weight": 100,
      "text": "全部冰冷法術技能等級+5",
      "template": "全部冰冷法術技能等級+#",
      "ranges": [
       [
        5,
        5
       ]
      ],
      "tier": 4
     },
     {
      "name": "雷鳴之",
      "ilvl": 81,
      "weight": 100,
      "text": "全部閃電法術技能等級+5",
      "template": "全部閃電法術技能等級+#",
      "ranges": [
       [
        5,
        5
       ]
      ],
      "tier": 3
     },
     {
      "name": "末日之",
      "ilvl": 81,
      "weight": 100,
      "text": "全部混沌法術技能等級+5",
      "template": "全部混沌法術技能等級+#",
      "ranges": [
       [
        5,
        5
       ]
      ],
      "tier": 2
     },
     {
      "name": "悲痛之",
      "ilvl": 81,
      "weight": 100,
      "text": "全部物理法術技能等級+5",
      "template": "全部物理法術技能等級+#",
      "ranges": [
       [
        5,
        5
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "IncreasedCastSpeed",
    "tiers": [
     {
      "name": "人才之",
      "ilvl": 1,
      "weight": 1000,
      "text": "增加(9—12)%施法速度",
      "template": "增加#%施法速度",
      "ranges": [
       [
        9,
        12
       ]
      ],
      "tier": 7
     },
     {
      "name": "靈活應變之",
      "ilvl": 15,
      "weight": 1000,
      "text": "增加(13—16)%施法速度",
      "template": "增加#%施法速度",
      "ranges": [
       [
        13,
        16
       ]
      ],
      "tier": 6
     },
     {
      "name": "有經驗之",
      "ilvl": 30,
      "weight": 1000,
      "text": "增加(17—20)%施法速度",
      "template": "增加#%施法速度",
      "ranges": [
       [
        17,
        20
       ]
      ],
      "tier": 5
     },
     {
      "name": "籤卜之",
      "ilvl": 45,
      "weight": 1000,
      "text": "增加(21—24)%施法速度",
      "template": "增加#%施法速度",
      "ranges": [
       [
        21,
        24
       ]
      ],
      "tier": 4
     },
     {
      "name": "戲法之",
      "ilvl": 60,
      "weight": 1000,
      "text": "增加(25—28)%施法速度",
      "template": "增加#%施法速度",
      "ranges": [
       [
        25,
        28
       ]
      ],
      "tier": 3
     },
     {
      "name": "騙術之",
      "ilvl": 70,
      "weight": 500,
      "text": "增加(29—32)%施法速度",
      "template": "增加#%施法速度",
      "ranges": [
       [
        29,
        32
       ]
      ],
      "tier": 2
     },
     {
      "name": "嫻熟之",
      "ilvl": 80,
      "weight": 250,
      "text": "增加(33—35)%施法速度",
      "template": "增加#%施法速度",
      "ranges": [
       [
        33,
        35
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "Intelligence",
    "tiers": [
     {
      "name": "瞳孔之",
      "ilvl": 1,
      "weight": 1000,
      "text": "+(5—8)點智慧",
      "template": "+#點智慧",
      "ranges": [
       [
        5,
        8
       ]
      ],
      "tier": 8
     },
     {
      "name": "學徒之",
      "ilvl": 11,
      "weight": 1000,
      "text": "+(9—12)點智慧",
      "template": "+#點智慧",
      "ranges": [
       [
        9,
        12
       ]
      ],
      "tier": 7
     },
     {
      "name": "奇才之",
      "ilvl": 22,
      "weight": 1000,
      "text": "+(13—16)點智慧",
      "template": "+#點智慧",
      "ranges": [
       [
        13,
        16
       ]
      ],
      "tier": 6
     },
     {
      "name": "預言之",
      "ilvl": 33,
      "weight": 1000,
      "text": "+(17—20)點智慧",
      "template": "+#點智慧",
      "ranges": [
       [
        17,
        20
       ]
      ],
      "tier": 5
     },
     {
      "name": "哲學家之",
      "ilvl": 44,
      "weight": 1000,
      "text": "+(21—24)點智慧",
      "template": "+#點智慧",
      "ranges": [
       [
        21,
        24
       ]
      ],
      "tier": 4
     },
     {
      "name": "聖人之",
      "ilvl": 55,
      "weight": 1000,
      "text": "+(25—27)點智慧",
      "template": "+#點智慧",
      "ranges": [
       [
        25,
        27
       ]
      ],
      "tier": 3
     },
     {
      "name": "大學者之",
      "ilvl": 66,
      "weight": 1000,
      "text": "+(28—30)點智慧",
      "template": "+#點智慧",
      "ranges": [
       [
        28,
        30
       ]
      ],
      "tier": 2
     },
     {
      "name": "神技之",
      "ilvl": 74,
      "weight": 1000,
      "text": "+(31—33)點智慧",
      "template": "+#點智慧",
      "ranges": [
       [
        31,
        33
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "LifeGainedFromEnemyDeath",
    "tiers": [
     {
      "name": "成功之",
      "ilvl": 1,
      "weight": 750,
      "text": "每個被擊殺的敵人，獲得(4—6)生命",
      "template": "每個被擊殺的敵人，獲得#生命",
      "ranges": [
       [
        4,
        6
       ]
      ],
      "tier": 8
     },
     {
      "name": "勝利之",
      "ilvl": 11,
      "weight": 750,
      "text": "每個被擊殺的敵人，獲得(7—9)生命",
      "template": "每個被擊殺的敵人，獲得#生命",
      "ranges": [
       [
        7,
        9
       ]
      ],
      "tier": 7
     },
     {
      "name": "凱旋之",
      "ilvl": 22,
      "weight": 750,
      "text": "每個被擊殺的敵人，獲得(10—18)生命",
      "template": "每個被擊殺的敵人，獲得#生命",
      "ranges": [
       [
        10,
        18
       ]
      ],
      "tier": 6
     },
     {
      "name": "征服之",
      "ilvl": 33,
      "weight": 750,
      "text": "每個被擊殺的敵人，獲得(19—28)生命",
      "template": "每個被擊殺的敵人，獲得#生命",
      "ranges": [
       [
        19,
        28
       ]
      ],
      "tier": 5
     },
     {
      "name": "征服之",
      "ilvl": 44,
      "weight": 750,
      "text": "每個被擊殺的敵人，獲得(29—40)生命",
      "template": "每個被擊殺的敵人，獲得#生命",
      "ranges": [
       [
        29,
        40
       ]
      ],
      "tier": 4
     },
     {
      "name": "勇氣之",
      "ilvl": 55,
      "weight": 750,
      "text": "每個被擊殺的敵人，獲得(41—53)生命",
      "template": "每個被擊殺的敵人，獲得#生命",
      "ranges": [
       [
        41,
        53
       ]
      ],
      "tier": 3
     },
     {
      "name": "榮耀之",
      "ilvl": 66,
      "weight": 750,
      "text": "每個被擊殺的敵人，獲得(54—68)生命",
      "template": "每個被擊殺的敵人，獲得#生命",
      "ranges": [
       [
        54,
        68
       ]
      ],
      "tier": 2
     },
     {
      "name": "傳說之",
      "ilvl": 77,
      "weight": 750,
      "text": "每個被擊殺的敵人，獲得(69—84)生命",
      "template": "每個被擊殺的敵人，獲得#生命",
      "ranges": [
       [
        69,
        84
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "LightRadiusAndManaRegeneration",
    "tiers": [
     {
      "name": "溫暖之",
      "ilvl": 8,
      "weight": 1000,
      "text": "增加(8—12)%魔力回復率增加5%照亮範圍",
      "template": "增加#%魔力回復率增加#%照亮範圍",
      "ranges": [
       [
        8,
        12
       ],
       [
        5,
        5
       ]
      ],
      "tier": 3
     },
     {
      "name": "點燃之",
      "ilvl": 15,
      "weight": 1000,
      "text": "增加(13—17)%魔力回復率增加10%照亮範圍",
      "template": "增加#%魔力回復率增加#%照亮範圍",
      "ranges": [
       [
        13,
        17
       ],
       [
        10,
        10
       ]
      ],
      "tier": 2
     },
     {
      "name": "真誠之",
      "ilvl": 30,
      "weight": 1000,
      "text": "增加(18—22)%魔力回復率增加15%照亮範圍",
      "template": "增加#%魔力回復率增加#%照亮範圍",
      "ranges": [
       [
        18,
        22
       ],
       [
        15,
        15
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "LocalAttributeRequirements",
    "tiers": [
     {
      "name": "值得之",
      "ilvl": 24,
      "weight": 1000,
      "text": "減少15%能力值需求",
      "template": "減少#%能力值需求",
      "ranges": [
       [
        15,
        15
       ]
      ],
      "tier": 5
     },
     {
      "name": "容易之",
      "ilvl": 32,
      "weight": 1000,
      "text": "減少20%能力值需求",
      "template": "減少#%能力值需求",
      "ranges": [
       [
        20,
        20
       ]
      ],
      "tier": 4
     },
     {
      "name": "長才之",
      "ilvl": 40,
      "weight": 1000,
      "text": "減少25%能力值需求",
      "template": "減少#%能力值需求",
      "ranges": [
       [
        25,
        25
       ]
      ],
      "tier": 3
     },
     {
      "name": "高超之",
      "ilvl": 52,
      "weight": 1000,
      "text": "減少30%能力值需求",
      "template": "減少#%能力值需求",
      "ranges": [
       [
        30,
        30
       ]
      ],
      "tier": 2
     },
     {
      "name": "熟習之",
      "ilvl": 60,
      "weight": 1000,
      "text": "減少35%能力值需求",
      "template": "減少#%能力值需求",
      "ranges": [
       [
        35,
        35
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "ManaGainedFromEnemyDeath",
    "tiers": [
     {
      "name": "吸收之",
      "ilvl": 1,
      "weight": 750,
      "text": "每個被擊殺的敵人，獲得(2—3)魔力",
      "template": "每個被擊殺的敵人，獲得#魔力",
      "ranges": [
       [
        2,
        3
       ]
      ],
      "tier": 8
     },
     {
      "name": "逆滲透之",
      "ilvl": 12,
      "weight": 750,
      "text": "每個被擊殺的敵人，獲得(4—5)魔力",
      "template": "每個被擊殺的敵人，獲得#魔力",
      "ranges": [
       [
        4,
        5
       ]
      ],
      "tier": 7
     },
     {
      "name": "注入之",
      "ilvl": 23,
      "weight": 750,
      "text": "每個被擊殺的敵人，獲得(6—9)魔力",
      "template": "每個被擊殺的敵人，獲得#魔力",
      "ranges": [
       [
        6,
        9
       ]
      ],
      "tier": 6
     },
     {
      "name": "包覆之",
      "ilvl": 34,
      "weight": 750,
      "text": "每個被擊殺的敵人，獲得(10—14)魔力",
      "template": "每個被擊殺的敵人，獲得#魔力",
      "ranges": [
       [
        10,
        14
       ]
      ],
      "tier": 5
     },
     {
      "name": "消耗之",
      "ilvl": 45,
      "weight": 750,
      "text": "每個被擊殺的敵人，獲得(15—20)魔力",
      "template": "每個被擊殺的敵人，獲得#魔力",
      "ranges": [
       [
        15,
        20
       ]
      ],
      "tier": 4
     },
     {
      "name": "虹吸之",
      "ilvl": 56,
      "weight": 750,
      "text": "每個被擊殺的敵人，獲得(21—27)魔力",
      "template": "每個被擊殺的敵人，獲得#魔力",
      "ranges": [
       [
        21,
        27
       ]
      ],
      "tier": 3
     },
     {
      "name": "吞噬之",
      "ilvl": 67,
      "weight": 750,
      "text": "每個被擊殺的敵人，獲得(28—35)魔力",
      "template": "每個被擊殺的敵人，獲得#魔力",
      "ranges": [
       [
        28,
        35
       ]
      ],
      "tier": 2
     },
     {
      "name": "同化之",
      "ilvl": 78,
      "weight": 750,
      "text": "每個被擊殺的敵人，獲得(36—45)魔力",
      "template": "每個被擊殺的敵人，獲得#魔力",
      "ranges": [
       [
        36,
        45
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "ManaRegeneration",
    "tiers": [
     {
      "name": "興奮之",
      "ilvl": 1,
      "weight": 1000,
      "text": "增加(10—19)%魔力回復率",
      "template": "增加#%魔力回復率",
      "ranges": [
       [
        10,
        19
       ]
      ],
      "tier": 6
     },
     {
      "name": "喜悅之",
      "ilvl": 18,
      "weight": 1000,
      "text": "增加(20—29)%魔力回復率",
      "template": "增加#%魔力回復率",
      "ranges": [
       [
        20,
        29
       ]
      ],
      "tier": 5
     },
     {
      "name": "興高采烈之",
      "ilvl": 29,
      "weight": 1000,
      "text": "增加(30—39)%魔力回復率",
      "template": "增加#%魔力回復率",
      "ranges": [
       [
        30,
        39
       ]
      ],
      "tier": 4
     },
     {
      "name": "極樂之",
      "ilvl": 42,
      "weight": 1000,
      "text": "增加(40—49)%魔力回復率",
      "template": "增加#%魔力回復率",
      "ranges": [
       [
        40,
        49
       ]
      ],
      "tier": 3
     },
     {
      "name": "幸福之",
      "ilvl": 55,
      "weight": 1000,
      "text": "增加(50—59)%魔力回復率",
      "template": "增加#%魔力回復率",
      "ranges": [
       [
        50,
        59
       ]
      ],
      "tier": 2
     },
     {
      "name": "涅槃之",
      "ilvl": 79,
      "weight": 1000,
      "text": "增加(60—69)%魔力回復率",
      "template": "增加#%魔力回復率",
      "ranges": [
       [
        60,
        69
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "ShockChanceIncrease",
    "tiers": [
     {
      "name": "感電之",
      "ilvl": 15,
      "weight": 1000,
      "text": "增加(51—60)%感電機率",
      "template": "增加#%感電機率",
      "ranges": [
       [
        51,
        60
       ]
      ],
      "tier": 5
     },
     {
      "name": "殘喘之",
      "ilvl": 30,
      "weight": 1000,
      "text": "增加(61—70)%感電機率",
      "template": "增加#%感電機率",
      "ranges": [
       [
        61,
        70
       ]
      ],
      "tier": 4
     },
     {
      "name": "觸電之",
      "ilvl": 45,
      "weight": 1000,
      "text": "增加(71—80)%感電機率",
      "template": "增加#%感電機率",
      "ranges": [
       [
        71,
        80
       ]
      ],
      "tier": 3
     },
     {
      "name": "電壓之",
      "ilvl": 60,
      "weight": 500,
      "text": "增加(81—90)%感電機率",
      "template": "增加#%感電機率",
      "ranges": [
       [
        81,
        90
       ]
      ],
      "tier": 2
     },
     {
      "name": "雷擊之",
      "ilvl": 75,
      "weight": 500,
      "text": "增加(91—100)%感電機率",
      "template": "增加#%感電機率",
      "ranges": [
       [
        91,
        100
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "SpellCriticalStrikeChanceIncrease",
    "tiers": [
     {
      "name": "威脅之",
      "ilvl": 11,
      "weight": 1000,
      "text": "增加(27—33)%法術暴擊率",
      "template": "增加#%法術暴擊率",
      "ranges": [
       [
        27,
        33
       ]
      ],
      "tier": 6
     },
     {
      "name": "浩劫之",
      "ilvl": 21,
      "weight": 1000,
      "text": "增加(34—39)%法術暴擊率",
      "template": "增加#%法術暴擊率",
      "ranges": [
       [
        34,
        39
       ]
      ],
      "tier": 5
     },
     {
      "name": "災害之",
      "ilvl": 28,
      "weight": 1000,
      "text": "增加(40—46)%法術暴擊率",
      "template": "增加#%法術暴擊率",
      "ranges": [
       [
        40,
        46
       ]
      ],
      "tier": 4
     },
     {
      "name": "血禍之",
      "ilvl": 41,
      "weight": 500,
      "text": "增加(47—53)%法術暴擊率",
      "template": "增加#%法術暴擊率",
      "ranges": [
       [
        47,
        53
       ]
      ],
      "tier": 3
     },
     {
      "name": "滅絕之",
      "ilvl": 59,
      "weight": 250,
      "text": "增加(54—59)%法術暴擊率",
      "template": "增加#%法術暴擊率",
      "ranges": [
       [
        54,
        59
       ]
      ],
      "tier": 2
     },
     {
      "name": "奪位之",
      "ilvl": 76,
      "weight": 125,
      "text": "增加(60—73)%法術暴擊率",
      "template": "增加#%法術暴擊率",
      "ranges": [
       [
        60,
        73
       ]
      ],
      "tier": 1
     }
    ]
   }
  ]
 },
 "Staves": {
  "prefix": [
   {
    "family": "ColdDamage",
    "tiers": [
     {
      "name": "惡性的",
      "ilvl": 5,
      "weight": 500,
      "text": "獲得等同於傷害(26—30)%的額外冰冷傷害",
      "template": "獲得等同於傷害#%的額外冰冷傷害",
      "ranges": [
       [
        26,
        30
       ]
      ],
      "tier": 6
     },
     {
      "name": "有害的",
      "ilvl": 16,
      "weight": 500,
      "text": "獲得等同於傷害(31—36)%的額外冰冷傷害",
      "template": "獲得等同於傷害#%的額外冰冷傷害",
      "ranges": [
       [
        31,
        36
       ]
      ],
      "tier": 5
     },
     {
      "name": "破壞的",
      "ilvl": 33,
      "weight": 500,
      "text": "獲得等同於傷害(37—42)%的額外冰冷傷害",
      "template": "獲得等同於傷害#%的額外冰冷傷害",
      "ranges": [
       [
        37,
        42
       ]
      ],
      "tier": 4
     },
     {
      "name": "惡意的",
      "ilvl": 46,
      "weight": 500,
      "text": "獲得等同於傷害(43—48)%的額外冰冷傷害",
      "template": "獲得等同於傷害#%的額外冰冷傷害",
      "ranges": [
       [
        43,
        48
       ]
      ],
      "tier": 3
     },
     {
      "name": "殘暴",
      "ilvl": 60,
      "weight": 500,
      "text": "獲得等同於傷害(49—54)%的額外冰冷傷害",
      "template": "獲得等同於傷害#%的額外冰冷傷害",
      "ranges": [
       [
        49,
        54
       ]
      ],
      "tier": 2
     },
     {
      "name": "霜縛的",
      "ilvl": 80,
      "weight": 500,
      "text": "獲得等同於傷害(55—60)%的額外冰冷傷害",
      "template": "獲得等同於傷害#%的額外冰冷傷害",
      "ranges": [
       [
        55,
        60
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "FireDamage",
    "tiers": [
     {
      "name": "熱切的",
      "ilvl": 5,
      "weight": 500,
      "text": "獲得等同於傷害(26—30)%的額外火焰傷害",
      "template": "獲得等同於傷害#%的額外火焰傷害",
      "ranges": [
       [
        26,
        30
       ]
      ],
      "tier": 6
     },
     {
      "name": "熱烈的",
      "ilvl": 16,
      "weight": 500,
      "text": "獲得等同於傷害(31—36)%的額外火焰傷害",
      "template": "獲得等同於傷害#%的額外火焰傷害",
      "ranges": [
       [
        31,
        36
       ]
      ],
      "tier": 5
     },
     {
      "name": "狂熱之",
      "ilvl": 33,
      "weight": 500,
      "text": "獲得等同於傷害(37—42)%的額外火焰傷害",
      "template": "獲得等同於傷害#%的額外火焰傷害",
      "ranges": [
       [
        37,
        42
       ]
      ],
      "tier": 4
     },
     {
      "name": "狂熱者之",
      "ilvl": 46,
      "weight": 500,
      "text": "獲得等同於傷害(43—48)%的額外火焰傷害",
      "template": "獲得等同於傷害#%的額外火焰傷害",
      "ranges": [
       [
        43,
        48
       ]
      ],
      "tier": 3
     },
     {
      "name": "獄炎",
      "ilvl": 60,
      "weight": 500,
      "text": "獲得等同於傷害(49—54)%的額外火焰傷害",
      "template": "獲得等同於傷害#%的額外火焰傷害",
      "ranges": [
       [
        49,
        54
       ]
      ],
      "tier": 2
     },
     {
      "name": "炎縛的",
      "ilvl": 80,
      "weight": 500,
      "text": "獲得等同於傷害(55—60)%的額外火焰傷害",
      "template": "獲得等同於傷害#%的額外火焰傷害",
      "ranges": [
       [
        55,
        60
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "IncreasedMana",
    "tiers": [
     {
      "name": "綠寶石的",
      "ilvl": 1,
      "weight": 1000,
      "text": "+(20—28)最大魔力",
      "template": "+#最大魔力",
      "ranges": [
       [
        20,
        28
       ]
      ],
      "tier": 11
     },
     {
      "name": "鈷藍的",
      "ilvl": 6,
      "weight": 1000,
      "text": "+(29—48)最大魔力",
      "template": "+#最大魔力",
      "ranges": [
       [
        29,
        48
       ]
      ],
      "tier": 10
     },
     {
      "name": "湛藍的",
      "ilvl": 16,
      "weight": 1000,
      "text": "+(49—68)最大魔力",
      "template": "+#最大魔力",
      "ranges": [
       [
        49,
        68
       ]
      ],
      "tier": 9
     },
     {
      "name": "藍寶石的",
      "ilvl": 25,
      "weight": 1000,
      "text": "+(69—108)最大魔力",
      "template": "+#最大魔力",
      "ranges": [
       [
        69,
        108
       ]
      ],
      "tier": 8
     },
     {
      "name": "天藍的",
      "ilvl": 33,
      "weight": 1000,
      "text": "+(109—128)最大魔力",
      "template": "+#最大魔力",
      "ranges": [
       [
        109,
        128
       ]
      ],
      "tier": 7
     },
     {
      "name": "水星的",
      "ilvl": 38,
      "weight": 1000,
      "text": "+(129—158)最大魔力",
      "template": "+#最大魔力",
      "ranges": [
       [
        129,
        158
       ]
      ],
      "tier": 6
     },
     {
      "name": "乳白色的",
      "ilvl": 46,
      "weight": 1000,
      "text": "+(159—178)最大魔力",
      "template": "+#最大魔力",
      "ranges": [
       [
        159,
        178
       ]
      ],
      "tier": 5
     },
     {
      "name": "龍膽的",
      "ilvl": 54,
      "weight": 1000,
      "text": "+(179—208)最大魔力",
      "template": "+#最大魔力",
      "ranges": [
       [
        179,
        208
       ]
      ],
      "tier": 4
     },
     {
      "name": "靛藍的",
      "ilvl": 60,
      "weight": 1000,
      "text": "+(209—248)最大魔力",
      "template": "+#最大魔力",
      "ranges": [
       [
        209,
        248
       ]
      ],
      "tier": 3
     },
     {
      "name": "深藍的",
      "ilvl": 65,
      "weight": 1000,
      "text": "+(249—298)最大魔力",
      "template": "+#最大魔力",
      "ranges": [
       [
        249,
        298
       ]
      ],
      "tier": 2
     },
     {
      "name": "純藍的",
      "ilvl": 70,
      "weight": 1000,
      "text": "+(299—328)最大魔力",
      "template": "+#最大魔力",
      "ranges": [
       [
        299,
        328
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "LightningDamage",
    "tiers": [
     {
      "name": "致命",
      "ilvl": 5,
      "weight": 500,
      "text": "獲得等同於傷害(26—30)%的額外閃電傷害",
      "template": "獲得等同於傷害#%的額外閃電傷害",
      "ranges": [
       [
        26,
        30
       ]
      ],
      "tier": 6
     },
     {
      "name": "致命之",
      "ilvl": 16,
      "weight": 500,
      "text": "獲得等同於傷害(31—36)%的額外閃電傷害",
      "template": "獲得等同於傷害#%的額外閃電傷害",
      "ranges": [
       [
        31,
        36
       ]
      ],
      "tier": 5
     },
     {
      "name": "致命的",
      "ilvl": 33,
      "weight": 500,
      "text": "獲得等同於傷害(37—42)%的額外閃電傷害",
      "template": "獲得等同於傷害#%的額外閃電傷害",
      "ranges": [
       [
        37,
        42
       ]
      ],
      "tier": 4
     },
     {
      "name": "銳利的",
      "ilvl": 46,
      "weight": 500,
      "text": "獲得等同於傷害(43—48)%的額外閃電傷害",
      "template": "獲得等同於傷害#%的額外閃電傷害",
      "ranges": [
       [
        43,
        48
       ]
      ],
      "tier": 3
     },
     {
      "name": "通電的",
      "ilvl": 60,
      "weight": 500,
      "text": "獲得等同於傷害(49—54)%的額外閃電傷害",
      "template": "獲得等同於傷害#%的額外閃電傷害",
      "ranges": [
       [
        49,
        54
       ]
      ],
      "tier": 2
     },
     {
      "name": "風縛的",
      "ilvl": 80,
      "weight": 500,
      "text": "獲得等同於傷害(55—60)%的額外閃電傷害",
      "template": "獲得等同於傷害#%的額外閃電傷害",
      "ranges": [
       [
        55,
        60
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "SpellDamageAndMana",
    "tiers": [
     {
      "name": "施放者的",
      "ilvl": 2,
      "weight": 1000,
      "text": "增加(30—38)%法術傷害+(34—40)最大魔力",
      "template": "增加#%法術傷害+#最大魔力",
      "ranges": [
       [
        30,
        38
       ],
       [
        34,
        40
       ]
      ],
      "tier": 7
     },
     {
      "name": "咒術師的",
      "ilvl": 11,
      "weight": 1000,
      "text": "增加(39—48)%法術傷害+(41—48)最大魔力",
      "template": "增加#%法術傷害+#最大魔力",
      "ranges": [
       [
        39,
        48
       ],
       [
        41,
        48
       ]
      ],
      "tier": 6
     },
     {
      "name": "巫師的",
      "ilvl": 23,
      "weight": 1000,
      "text": "增加(49—58)%法術傷害+(49—56)最大魔力",
      "template": "增加#%法術傷害+#最大魔力",
      "ranges": [
       [
        49,
        58
       ],
       [
        49,
        56
       ]
      ],
      "tier": 5
     },
     {
      "name": "術士的",
      "ilvl": 38,
      "weight": 600,
      "text": "增加(59—68)%法術傷害+(57—66)最大魔力",
      "template": "增加#%法術傷害+#最大魔力",
      "ranges": [
       [
        59,
        68
       ],
       [
        57,
        66
       ]
      ],
      "tier": 4
     },
     {
      "name": "魔導師的",
      "ilvl": 48,
      "weight": 400,
      "text": "增加(69—78)%法術傷害+(67—74)最大魔力",
      "template": "增加#%法術傷害+#最大魔力",
      "ranges": [
       [
        69,
        78
       ],
       [
        67,
        74
       ]
      ],
      "tier": 3
     },
     {
      "name": "大法師的",
      "ilvl": 63,
      "weight": 200,
      "text": "增加(79—88)%法術傷害+(75—82)最大魔力",
      "template": "增加#%法術傷害+#最大魔力",
      "ranges": [
       [
        79,
        88
       ],
       [
        75,
        82
       ]
      ],
      "tier": 2
     },
     {
      "name": "巫妖的",
      "ilvl": 79,
      "weight": 100,
      "text": "增加(89—98)%法術傷害+(83—90)最大魔力",
      "template": "增加#%法術傷害+#最大魔力",
      "ranges": [
       [
        89,
        98
       ],
       [
        83,
        90
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "WeaponCasterDamagePrefix",
    "tiers": [
     {
      "name": "學徒的",
      "ilvl": 1,
      "weight": 1000,
      "text": "增加(50—68)%法術傷害",
      "template": "增加#%法術傷害",
      "ranges": [
       [
        50,
        68
       ]
      ],
      "tier": 8
     },
     {
      "name": "嫻熟的",
      "ilvl": 8,
      "weight": 1000,
      "text": "增加(69—88)%法術傷害",
      "template": "增加#%法術傷害",
      "ranges": [
       [
        69,
        88
       ]
      ],
      "tier": 7
     },
     {
      "name": "學者的",
      "ilvl": 16,
      "weight": 1000,
      "text": "增加(89—108)%法術傷害",
      "template": "增加#%法術傷害",
      "ranges": [
       [
        89,
        108
       ]
      ],
      "tier": 6
     },
     {
      "name": "教授的",
      "ilvl": 33,
      "weight": 600,
      "text": "增加(109—128)%法術傷害",
      "template": "增加#%法術傷害",
      "ranges": [
       [
        109,
        128
       ]
      ],
      "tier": 5
     },
     {
      "name": "神秘學者的",
      "ilvl": 46,
      "weight": 400,
      "text": "增加(129—148)%法術傷害",
      "template": "增加#%法術傷害",
      "ranges": [
       [
        129,
        148
       ]
      ],
      "tier": 4
     },
     {
      "name": "魔咒師的",
      "ilvl": 60,
      "weight": 200,
      "text": "增加(149—188)%法術傷害",
      "template": "增加#%法術傷害",
      "ranges": [
       [
        149,
        188
       ]
      ],
      "tier": 3
     },
     {
      "name": "雕紋的",
      "ilvl": 70,
      "weight": 100,
      "text": "增加(189—208)%法術傷害",
      "template": "增加#%法術傷害",
      "ranges": [
       [
        189,
        208
       ]
      ],
      "tier": 2
     },
     {
      "name": "符文",
      "ilvl": 80,
      "weight": 50,
      "text": "增加(209—238)%法術傷害",
      "template": "增加#%法術傷害",
      "ranges": [
       [
        209,
        238
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "WeaponDamageTypePrefix",
    "tiers": [
     {
      "name": "燒灼的",
      "ilvl": 2,
      "weight": 500,
      "text": "增加(50—68)%火焰傷害",
      "template": "增加#%火焰傷害",
      "ranges": [
       [
        50,
        68
       ]
      ],
      "tier": 40
     },
     {
      "name": "苦味的",
      "ilvl": 2,
      "weight": 500,
      "text": "增加(50—68)%冰冷傷害",
      "template": "增加#%冰冷傷害",
      "ranges": [
       [
        50,
        68
       ]
      ],
      "tier": 39
     },
     {
      "name": "充電的",
      "ilvl": 2,
      "weight": 500,
      "text": "增加(50—68)%閃電傷害",
      "template": "增加#%閃電傷害",
      "ranges": [
       [
        50,
        68
       ]
      ],
      "tier": 38
     },
     {
      "name": "不潔的",
      "ilvl": 2,
      "weight": 500,
      "text": "增加(50—68)%混沌傷害",
      "template": "增加#%混沌傷害",
      "ranges": [
       [
        50,
        68
       ]
      ],
      "tier": 37
     },
     {
      "name": "懲戒的",
      "ilvl": 2,
      "weight": 500,
      "text": "增加(50—68)%法術物理傷害",
      "template": "增加#%法術物理傷害",
      "ranges": [
       [
        50,
        68
       ]
      ],
      "tier": 36
     },
     {
      "name": "極熱的",
      "ilvl": 8,
      "weight": 500,
      "text": "增加(69—88)%火焰傷害",
      "template": "增加#%火焰傷害",
      "ranges": [
       [
        69,
        88
       ]
      ],
      "tier": 35
     },
     {
      "name": "刺人的",
      "ilvl": 8,
      "weight": 500,
      "text": "增加(69—88)%冰冷傷害",
      "template": "增加#%冰冷傷害",
      "ranges": [
       [
        69,
        88
       ]
      ],
      "tier": 34
     },
     {
      "name": "嘶聲的",
      "ilvl": 8,
      "weight": 500,
      "text": "增加(69—88)%閃電傷害",
      "template": "增加#%閃電傷害",
      "ranges": [
       [
        69,
        88
       ]
      ],
      "tier": 33
     },
     {
      "name": "被污染的",
      "ilvl": 8,
      "weight": 500,
      "text": "增加(69—88)%混沌傷害",
      "template": "增加#%混沌傷害",
      "ranges": [
       [
        69,
        88
       ]
      ],
      "tier": 32
     },
     {
      "name": "嚴苛",
      "ilvl": 8,
      "weight": 500,
      "text": "增加(69—88)%法術物理傷害",
      "template": "增加#%法術物理傷害",
      "ranges": [
       [
        69,
        88
       ]
      ],
      "tier": 31
     },
     {
      "name": "極度的",
      "ilvl": 16,
      "weight": 500,
      "text": "增加(89—108)%火焰傷害",
      "template": "增加#%火焰傷害",
      "ranges": [
       [
        89,
        108
       ]
      ],
      "tier": 30
     },
     {
      "name": "高山的",
      "ilvl": 16,
      "weight": 500,
      "text": "增加(89—108)%冰冷傷害",
      "template": "增加#%冰冷傷害",
      "ranges": [
       [
        89,
        108
       ]
      ],
      "tier": 29
     },
     {
      "name": "電光的",
      "ilvl": 16,
      "weight": 500,
      "text": "增加(89—108)%閃電傷害",
      "template": "增加#%閃電傷害",
      "ranges": [
       [
        89,
        108
       ]
      ],
      "tier": 28
     },
     {
      "name": "多雲的",
      "ilvl": 16,
      "weight": 500,
      "text": "增加(89—108)%混沌傷害",
      "template": "增加#%混沌傷害",
      "ranges": [
       [
        89,
        108
       ]
      ],
      "tier": 27
     },
     {
      "name": "復仇的",
      "ilvl": 16,
      "weight": 500,
      "text": "增加(89—108)%法術物理傷害",
      "template": "增加#%法術物理傷害",
      "ranges": [
       [
        89,
        108
       ]
      ],
      "tier": 26
     },
     {
      "name": "灼燒的",
      "ilvl": 33,
      "weight": 400,
      "text": "增加(109—128)%火焰傷害",
      "template": "增加#%火焰傷害",
      "ranges": [
       [
        109,
        128
       ]
      ],
      "tier": 25
     },
     {
      "name": "雪白的",
      "ilvl": 33,
      "weight": 400,
      "text": "增加(109—128)%冰冷傷害",
      "template": "增加#%冰冷傷害",
      "ranges": [
       [
        109,
        128
       ]
      ],
      "tier": 24
     },
     {
      "name": "奔馳的",
      "ilvl": 33,
      "weight": 400,
      "text": "增加(109—128)%閃電傷害",
      "template": "增加#%閃電傷害",
      "ranges": [
       [
        109,
        128
       ]
      ],
      "tier": 23
     },
     {
      "name": "黑暗的",
      "ilvl": 33,
      "weight": 400,
      "text": "增加(109—128)%混沌傷害",
      "template": "增加#%混沌傷害",
      "ranges": [
       [
        109,
        128
       ]
      ],
      "tier": 22
     },
     {
      "name": "施暴",
      "ilvl": 33,
      "weight": 400,
      "text": "增加(109—128)%法術物理傷害",
      "template": "增加#%法術物理傷害",
      "ranges": [
       [
        109,
        128
       ]
      ],
      "tier": 21
     },
     {
      "name": "悶燒的",
      "ilvl": 46,
      "weight": 300,
      "text": "增加(129—148)%火焰傷害",
      "template": "增加#%火焰傷害",
      "ranges": [
       [
        129,
        148
       ]
      ],
      "tier": 20
     },
     {
      "name": "喝采的",
      "ilvl": 46,
      "weight": 300,
      "text": "增加(129—148)%冰冷傷害",
      "template": "增加#%冰冷傷害",
      "ranges": [
       [
        129,
        148
       ]
      ],
      "tier": 19
     },
     {
      "name": "敲擊的",
      "ilvl": 46,
      "weight": 300,
      "text": "增加(129—148)%閃電傷害",
      "template": "增加#%閃電傷害",
      "ranges": [
       [
        129,
        148
       ]
      ],
      "tier": 18
     },
     {
      "name": "惡性的",
      "ilvl": 46,
      "weight": 300,
      "text": "增加(129—148)%混沌傷害",
      "template": "增加#%混沌傷害",
      "ranges": [
       [
        129,
        148
       ]
      ],
      "tier": 17
     },
     {
      "name": "殘酷",
      "ilvl": 46,
      "weight": 300,
      "text": "增加(129—148)%法術物理傷害",
      "template": "增加#%法術物理傷害",
      "ranges": [
       [
        129,
        148
       ]
      ],
      "tier": 16
     },
     {
      "name": "岩漿的",
      "ilvl": 60,
      "weight": 200,
      "text": "增加(149—188)%火焰傷害",
      "template": "增加#%火焰傷害",
      "ranges": [
       [
        149,
        188
       ]
      ],
      "tier": 15
     },
     {
      "name": "極地的",
      "ilvl": 60,
      "weight": 200,
      "text": "增加(149—188)%冰冷傷害",
      "template": "增加#%冰冷傷害",
      "ranges": [
       [
        149,
        188
       ]
      ],
      "tier": 14
     },
     {
      "name": "猛打的",
      "ilvl": 60,
      "weight": 200,
      "text": "增加(149—188)%閃電傷害",
      "template": "增加#%閃電傷害",
      "ranges": [
       [
        149,
        188
       ]
      ],
      "tier": 13
     },
     {
      "name": "惡劣的",
      "ilvl": 60,
      "weight": 200,
      "text": "增加(149—188)%混沌傷害",
      "template": "增加#%混沌傷害",
      "ranges": [
       [
        149,
        188
       ]
      ],
      "tier": 12
     },
     {
      "name": "慘痛",
      "ilvl": 60,
      "weight": 200,
      "text": "增加(149—188)%法術物理傷害",
      "template": "增加#%法術物理傷害",
      "ranges": [
       [
        149,
        188
       ]
      ],
      "tier": 11
     },
     {
      "name": "火山的",
      "ilvl": 70,
      "weight": 100,
      "text": "增加(189—208)%火焰傷害",
      "template": "增加#%火焰傷害",
      "ranges": [
       [
        189,
        208
       ]
      ],
      "tier": 10
     },
     {
      "name": "結晶的",
      "ilvl": 70,
      "weight": 100,
      "text": "增加(189—208)%冰冷傷害",
      "template": "增加#%冰冷傷害",
      "ranges": [
       [
        189,
        208
       ]
      ],
      "tier": 9
     },
     {
      "name": "電離的",
      "ilvl": 70,
      "weight": 100,
      "text": "增加(189—208)%閃電傷害",
      "template": "增加#%閃電傷害",
      "ranges": [
       [
        189,
        208
       ]
      ],
      "tier": 8
     },
     {
      "name": "扭曲的",
      "ilvl": 70,
      "weight": 100,
      "text": "增加(189—208)%混沌傷害",
      "template": "增加#%混沌傷害",
      "ranges": [
       [
        189,
        208
       ]
      ],
      "tier": 7
     },
     {
      "name": "壓迫者的",
      "ilvl": 70,
      "weight": 100,
      "text": "增加(189—208)%法術物理傷害",
      "template": "增加#%法術物理傷害",
      "ranges": [
       [
        189,
        208
       ]
      ],
      "tier": 6
     },
     {
      "name": "火焰術士的",
      "ilvl": 81,
      "weight": 50,
      "text": "增加(209—238)%火焰傷害",
      "template": "增加#%火焰傷害",
      "ranges": [
       [
        209,
        238
       ]
      ],
      "tier": 5
     },
     {
      "name": "晶體的",
      "ilvl": 81,
      "weight": 50,
      "text": "增加(209—238)%冰冷傷害",
      "template": "增加#%冰冷傷害",
      "ranges": [
       [
        209,
        238
       ]
      ],
      "tier": 4
     },
     {
      "name": "閃電術士的",
      "ilvl": 81,
      "weight": 50,
      "text": "增加(209—238)%閃電傷害",
      "template": "增加#%閃電傷害",
      "ranges": [
       [
        209,
        238
       ]
      ],
      "tier": 3
     },
     {
      "name": "惡劣",
      "ilvl": 81,
      "weight": 50,
      "text": "增加(209—238)%混沌傷害",
      "template": "增加#%混沌傷害",
      "ranges": [
       [
        209,
        238
       ]
      ],
      "tier": 2
     },
     {
      "name": "折磨者的",
      "ilvl": 81,
      "weight": 50,
      "text": "增加(209—238)%法術物理傷害",
      "template": "增加#%法術物理傷害",
      "ranges": [
       [
        209,
        238
       ]
      ],
      "tier": 1
     }
    ]
   }
  ],
  "suffix": [
   {
    "family": "CriticalStrikeMultiplier",
    "tiers": [
     {
      "name": "怒火之",
      "ilvl": 8,
      "weight": 1000,
      "text": "增加(15—21)%法術暴擊傷害加成",
      "template": "增加#%法術暴擊傷害加成",
      "ranges": [
       [
        15,
        21
       ]
      ],
      "tier": 6
     },
     {
      "name": "憤怒之",
      "ilvl": 21,
      "weight": 1000,
      "text": "增加(23—29)%法術暴擊傷害加成",
      "template": "增加#%法術暴擊傷害加成",
      "ranges": [
       [
        23,
        29
       ]
      ],
      "tier": 5
     },
     {
      "name": "狂怒之",
      "ilvl": 30,
      "weight": 1000,
      "text": "增加(30—36)%法術暴擊傷害加成",
      "template": "增加#%法術暴擊傷害加成",
      "ranges": [
       [
        30,
        36
       ]
      ],
      "tier": 4
     },
     {
      "name": "憤恨之",
      "ilvl": 44,
      "weight": 500,
      "text": "增加(38—44)%法術暴擊傷害加成",
      "template": "增加#%法術暴擊傷害加成",
      "ranges": [
       [
        38,
        44
       ]
      ],
      "tier": 3
     },
     {
      "name": "狂暴之",
      "ilvl": 59,
      "weight": 250,
      "text": "增加(45—51)%法術暴擊傷害加成",
      "template": "增加#%法術暴擊傷害加成",
      "ranges": [
       [
        45,
        51
       ]
      ],
      "tier": 2
     },
     {
      "name": "毀滅之",
      "ilvl": 73,
      "weight": 125,
      "text": "增加(53—59)%法術暴擊傷害加成",
      "template": "增加#%法術暴擊傷害加成",
      "ranges": [
       [
        53,
        59
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "FreezeDamageIncrease",
    "tiers": [
     {
      "name": "冰凍之",
      "ilvl": 15,
      "weight": 1000,
      "text": "增加(31—40)%冰凍累積",
      "template": "增加#%冰凍累積",
      "ranges": [
       [
        31,
        40
       ]
      ],
      "tier": 5
     },
     {
      "name": "淒涼之",
      "ilvl": 30,
      "weight": 1000,
      "text": "增加(41—50)%冰凍累積",
      "template": "增加#%冰凍累積",
      "ranges": [
       [
        41,
        50
       ]
      ],
      "tier": 4
     },
     {
      "name": "冰川之",
      "ilvl": 45,
      "weight": 1000,
      "text": "增加(51—60)%冰凍累積",
      "template": "增加#%冰凍累積",
      "ranges": [
       [
        51,
        60
       ]
      ],
      "tier": 3
     },
     {
      "name": "超北方之",
      "ilvl": 60,
      "weight": 500,
      "text": "增加(61—70)%冰凍累積",
      "template": "增加#%冰凍累積",
      "ranges": [
       [
        61,
        70
       ]
      ],
      "tier": 2
     },
     {
      "name": "寒帶之",
      "ilvl": 75,
      "weight": 500,
      "text": "增加(71—80)%冰凍累積",
      "template": "增加#%冰凍累積",
      "ranges": [
       [
        71,
        80
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "IgniteChanceIncrease",
    "tiers": [
     {
      "name": "點燃之",
      "ilvl": 15,
      "weight": 1000,
      "text": "增加(51—60)%易燃幅度",
      "template": "增加#%易燃幅度",
      "ranges": [
       [
        51,
        60
       ]
      ],
      "tier": 5
     },
     {
      "name": "焦灼之",
      "ilvl": 30,
      "weight": 1000,
      "text": "增加(61—70)%易燃幅度",
      "template": "增加#%易燃幅度",
      "ranges": [
       [
        61,
        70
       ]
      ],
      "tier": 4
     },
     {
      "name": "焚燒之",
      "ilvl": 45,
      "weight": 1000,
      "text": "增加(71—80)%易燃幅度",
      "template": "增加#%易燃幅度",
      "ranges": [
       [
        71,
        80
       ]
      ],
      "tier": 3
     },
     {
      "name": "燃燒之",
      "ilvl": 60,
      "weight": 500,
      "text": "增加(81—90)%易燃幅度",
      "template": "增加#%易燃幅度",
      "ranges": [
       [
        81,
        90
       ]
      ],
      "tier": 2
     },
     {
      "name": "大火之",
      "ilvl": 75,
      "weight": 500,
      "text": "增加(91—100)%易燃幅度",
      "template": "增加#%易燃幅度",
      "ranges": [
       [
        91,
        100
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "IncreaseSocketedGemLevel",
    "tiers": [
     {
      "name": "煤之",
      "ilvl": 2,
      "weight": 1000,
      "text": "全部火焰法術技能等級+1",
      "template": "全部火焰法術技能等級+#",
      "ranges": [
       [
        1,
        1
       ]
      ],
      "tier": 29
     },
     {
      "name": "雪之",
      "ilvl": 2,
      "weight": 1000,
      "text": "全部冰冷法術技能等級+1",
      "template": "全部冰冷法術技能等級+#",
      "ranges": [
       [
        1,
        1
       ]
      ],
      "tier": 28
     },
     {
      "name": "火花之",
      "ilvl": 2,
      "weight": 1000,
      "text": "全部閃電法術技能等級+1",
      "template": "全部閃電法術技能等級+#",
      "ranges": [
       [
        1,
        1
       ]
      ],
      "tier": 27
     },
     {
      "name": "無法者之",
      "ilvl": 2,
      "weight": 1000,
      "text": "全部混沌法術技能等級+1",
      "template": "全部混沌法術技能等級+#",
      "ranges": [
       [
        1,
        1
       ]
      ],
      "tier": 26
     },
     {
      "name": "苦痛之",
      "ilvl": 2,
      "weight": 1000,
      "text": "全部物理法術技能等級+1",
      "template": "全部物理法術技能等級+#",
      "ranges": [
       [
        1,
        1
       ]
      ],
      "tier": 25
     },
     {
      "name": "法師之",
      "ilvl": 5,
      "weight": 200,
      "text": "全部法術技能等級+2",
      "template": "全部法術技能等級+#",
      "ranges": [
       [
        2,
        2
       ]
      ],
      "tier": 24
     },
     {
      "name": "灰燼之",
      "ilvl": 18,
      "weight": 750,
      "text": "全部火焰法術技能等級+2",
      "template": "全部火焰法術技能等級+#",
      "ranges": [
       [
        2,
        2
       ]
      ],
      "tier": 23
     },
     {
      "name": "雨雪之",
      "ilvl": 18,
      "weight": 750,
      "text": "全部冰冷法術技能等級+2",
      "template": "全部冰冷法術技能等級+#",
      "ranges": [
       [
        2,
        2
       ]
      ],
      "tier": 22
     },
     {
      "name": "靜電之",
      "ilvl": 18,
      "weight": 750,
      "text": "全部閃電法術技能等級+2",
      "template": "全部閃電法術技能等級+#",
      "ranges": [
       [
        2,
        2
       ]
      ],
      "tier": 21
     },
     {
      "name": "－動亂",
      "ilvl": 18,
      "weight": 750,
      "text": "全部混沌法術技能等級+2",
      "template": "全部混沌法術技能等級+#",
      "ranges": [
       [
        2,
        2
       ]
      ],
      "tier": 20
     },
     {
      "name": "受苦難之",
      "ilvl": 18,
      "weight": 750,
      "text": "全部物理法術技能等級+2",
      "template": "全部物理法術技能等級+#",
      "ranges": [
       [
        2,
        2
       ]
      ],
      "tier": 19
     },
     {
      "name": "附魔者之",
      "ilvl": 25,
      "weight": 150,
      "text": "全部法術技能等級+3",
      "template": "全部法術技能等級+#",
      "ranges": [
       [
        3,
        3
       ]
      ],
      "tier": 18
     },
     {
      "name": "烈焰之",
      "ilvl": 36,
      "weight": 500,
      "text": "全部火焰法術技能等級+(3—4)",
      "template": "全部火焰法術技能等級+#",
      "ranges": [
       [
        3,
        4
       ]
      ],
      "tier": 17
     },
     {
      "name": "冰之",
      "ilvl": 36,
      "weight": 500,
      "text": "全部冰冷法術技能等級+(3—4)",
      "template": "全部冰冷法術技能等級+#",
      "ranges": [
       [
        3,
        4
       ]
      ],
      "tier": 16
     },
     {
      "name": "電能之",
      "ilvl": 36,
      "weight": 500,
      "text": "全部閃電法術技能等級+(3—4)",
      "template": "全部閃電法術技能等級+#",
      "ranges": [
       [
        3,
        4
       ]
      ],
      "tier": 15
     },
     {
      "name": "滅絕之",
      "ilvl": 36,
      "weight": 500,
      "text": "全部混沌法術技能等級+(3—4)",
      "template": "全部混沌法術技能等級+#",
      "ranges": [
       [
        3,
        4
       ]
      ],
      "tier": 14
     },
     {
      "name": "折磨之",
      "ilvl": 36,
      "weight": 500,
      "text": "全部物理法術技能等級+(3—4)",
      "template": "全部物理法術技能等級+#",
      "ranges": [
       [
        3,
        4
       ]
      ],
      "tier": 13
     },
     {
      "name": "喚能者之",
      "ilvl": 55,
      "weight": 100,
      "text": "全部法術技能等級+4",
      "template": "全部法術技能等級+#",
      "ranges": [
       [
        4,
        4
       ]
      ],
      "tier": 12
     },
     {
      "name": "獻祭之",
      "ilvl": 55,
      "weight": 250,
      "text": "全部火焰法術技能等級+(5—6)",
      "template": "全部火焰法術技能等級+#",
      "ranges": [
       [
        5,
        6
       ]
      ],
      "tier": 11
     },
     {
      "name": "霧淞之",
      "ilvl": 55,
      "weight": 250,
      "text": "全部冰冷法術技能等級+(5—6)",
      "template": "全部冰冷法術技能等級+#",
      "ranges": [
       [
        5,
        6
       ]
      ],
      "tier": 10
     },
     {
      "name": "伏特之",
      "ilvl": 55,
      "weight": 250,
      "text": "全部閃電法術技能等級+(5—6)",
      "template": "全部閃電法術技能等級+#",
      "ranges": [
       [
        5,
        6
       ]
      ],
      "tier": 9
     },
     {
      "name": "浩劫之",
      "ilvl": 55,
      "weight": 250,
      "text": "全部混沌法術技能等級+(5—6)",
      "template": "全部混沌法術技能等級+#",
      "ranges": [
       [
        5,
        6
       ]
      ],
      "tier": 8
     },
     {
      "name": "荒蕪之",
      "ilvl": 55,
      "weight": 250,
      "text": "全部物理法術技能等級+(5—6)",
      "template": "全部物理法術技能等級+#",
      "ranges": [
       [
        5,
        6
       ]
      ],
      "tier": 7
     },
     {
      "name": "巫師之",
      "ilvl": 78,
      "weight": 50,
      "text": "全部法術技能等級+(5—6)",
      "template": "全部法術技能等級+#",
      "ranges": [
       [
        5,
        6
       ]
      ],
      "tier": 6
     },
     {
      "name": "獄火之",
      "ilvl": 81,
      "weight": 100,
      "text": "全部火焰法術技能等級+7",
      "template": "全部火焰法術技能等級+#",
      "ranges": [
       [
        7,
        7
       ]
      ],
      "tier": 5
     },
     {
      "name": "凍傷之",
      "ilvl": 81,
      "weight": 100,
      "text": "全部冰冷法術技能等級+7",
      "template": "全部冰冷法術技能等級+#",
      "ranges": [
       [
        7,
        7
       ]
      ],
      "tier": 4
     },
     {
      "name": "雷鳴之",
      "ilvl": 81,
      "weight": 100,
      "text": "全部閃電法術技能等級+7",
      "template": "全部閃電法術技能等級+#",
      "ranges": [
       [
        7,
        7
       ]
      ],
      "tier": 3
     },
     {
      "name": "末日之",
      "ilvl": 81,
      "weight": 100,
      "text": "全部混沌法術技能等級+7",
      "template": "全部混沌法術技能等級+#",
      "ranges": [
       [
        7,
        7
       ]
      ],
      "tier": 2
     },
     {
      "name": "悲痛之",
      "ilvl": 81,
      "weight": 100,
      "text": "全部物理法術技能等級+7",
      "template": "全部物理法術技能等級+#",
      "ranges": [
       [
        7,
        7
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "IncreasedCastSpeed",
    "tiers": [
     {
      "name": "人才之",
      "ilvl": 1,
      "weight": 1000,
      "text": "增加(14—19)%施法速度",
      "template": "增加#%施法速度",
      "ranges": [
       [
        14,
        19
       ]
      ],
      "tier": 7
     },
     {
      "name": "靈活應變之",
      "ilvl": 15,
      "weight": 1000,
      "text": "增加(20—25)%施法速度",
      "template": "增加#%施法速度",
      "ranges": [
       [
        20,
        25
       ]
      ],
      "tier": 6
     },
     {
      "name": "有經驗之",
      "ilvl": 30,
      "weight": 1000,
      "text": "增加(26—31)%施法速度",
      "template": "增加#%施法速度",
      "ranges": [
       [
        26,
        31
       ]
      ],
      "tier": 5
     },
     {
      "name": "籤卜之",
      "ilvl": 45,
      "weight": 1000,
      "text": "增加(32—37)%施法速度",
      "template": "增加#%施法速度",
      "ranges": [
       [
        32,
        37
       ]
      ],
      "tier": 4
     },
     {
      "name": "戲法之",
      "ilvl": 60,
      "weight": 1000,
      "text": "增加(38—43)%施法速度",
      "template": "增加#%施法速度",
      "ranges": [
       [
        38,
        43
       ]
      ],
      "tier": 3
     },
     {
      "name": "騙術之",
      "ilvl": 70,
      "weight": 500,
      "text": "增加(44—49)%施法速度",
      "template": "增加#%施法速度",
      "ranges": [
       [
        44,
        49
       ]
      ],
      "tier": 2
     },
     {
      "name": "嫻熟之",
      "ilvl": 80,
      "weight": 250,
      "text": "增加(50—52)%施法速度",
      "template": "增加#%施法速度",
      "ranges": [
       [
        50,
        52
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "Intelligence",
    "tiers": [
     {
      "name": "瞳孔之",
      "ilvl": 1,
      "weight": 1000,
      "text": "+(5—8)點智慧",
      "template": "+#點智慧",
      "ranges": [
       [
        5,
        8
       ]
      ],
      "tier": 8
     },
     {
      "name": "學徒之",
      "ilvl": 11,
      "weight": 1000,
      "text": "+(9—12)點智慧",
      "template": "+#點智慧",
      "ranges": [
       [
        9,
        12
       ]
      ],
      "tier": 7
     },
     {
      "name": "奇才之",
      "ilvl": 22,
      "weight": 1000,
      "text": "+(13—16)點智慧",
      "template": "+#點智慧",
      "ranges": [
       [
        13,
        16
       ]
      ],
      "tier": 6
     },
     {
      "name": "預言之",
      "ilvl": 33,
      "weight": 1000,
      "text": "+(17—20)點智慧",
      "template": "+#點智慧",
      "ranges": [
       [
        17,
        20
       ]
      ],
      "tier": 5
     },
     {
      "name": "哲學家之",
      "ilvl": 44,
      "weight": 1000,
      "text": "+(21—24)點智慧",
      "template": "+#點智慧",
      "ranges": [
       [
        21,
        24
       ]
      ],
      "tier": 4
     },
     {
      "name": "聖人之",
      "ilvl": 55,
      "weight": 1000,
      "text": "+(25—27)點智慧",
      "template": "+#點智慧",
      "ranges": [
       [
        25,
        27
       ]
      ],
      "tier": 3
     },
     {
      "name": "大學者之",
      "ilvl": 66,
      "weight": 1000,
      "text": "+(28—30)點智慧",
      "template": "+#點智慧",
      "ranges": [
       [
        28,
        30
       ]
      ],
      "tier": 2
     },
     {
      "name": "神技之",
      "ilvl": 74,
      "weight": 1000,
      "text": "+(31—33)點智慧",
      "template": "+#點智慧",
      "ranges": [
       [
        31,
        33
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "LifeGainedFromEnemyDeath",
    "tiers": [
     {
      "name": "成功之",
      "ilvl": 1,
      "weight": 750,
      "text": "每個被擊殺的敵人，獲得(4—6)生命",
      "template": "每個被擊殺的敵人，獲得#生命",
      "ranges": [
       [
        4,
        6
       ]
      ],
      "tier": 8
     },
     {
      "name": "勝利之",
      "ilvl": 11,
      "weight": 750,
      "text": "每個被擊殺的敵人，獲得(7—9)生命",
      "template": "每個被擊殺的敵人，獲得#生命",
      "ranges": [
       [
        7,
        9
       ]
      ],
      "tier": 7
     },
     {
      "name": "凱旋之",
      "ilvl": 22,
      "weight": 750,
      "text": "每個被擊殺的敵人，獲得(10—18)生命",
      "template": "每個被擊殺的敵人，獲得#生命",
      "ranges": [
       [
        10,
        18
       ]
      ],
      "tier": 6
     },
     {
      "name": "征服之",
      "ilvl": 33,
      "weight": 750,
      "text": "每個被擊殺的敵人，獲得(19—28)生命",
      "template": "每個被擊殺的敵人，獲得#生命",
      "ranges": [
       [
        19,
        28
       ]
      ],
      "tier": 5
     },
     {
      "name": "征服之",
      "ilvl": 44,
      "weight": 750,
      "text": "每個被擊殺的敵人，獲得(29—40)生命",
      "template": "每個被擊殺的敵人，獲得#生命",
      "ranges": [
       [
        29,
        40
       ]
      ],
      "tier": 4
     },
     {
      "name": "勇氣之",
      "ilvl": 55,
      "weight": 750,
      "text": "每個被擊殺的敵人，獲得(41—53)生命",
      "template": "每個被擊殺的敵人，獲得#生命",
      "ranges": [
       [
        41,
        53
       ]
      ],
      "tier": 3
     },
     {
      "name": "榮耀之",
      "ilvl": 66,
      "weight": 750,
      "text": "每個被擊殺的敵人，獲得(54—68)生命",
      "template": "每個被擊殺的敵人，獲得#生命",
      "ranges": [
       [
        54,
        68
       ]
      ],
      "tier": 2
     },
     {
      "name": "傳說之",
      "ilvl": 77,
      "weight": 750,
      "text": "每個被擊殺的敵人，獲得(69—84)生命",
      "template": "每個被擊殺的敵人，獲得#生命",
      "ranges": [
       [
        69,
        84
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "LightRadiusAndManaRegeneration",
    "tiers": [
     {
      "name": "溫暖之",
      "ilvl": 8,
      "weight": 1000,
      "text": "增加(8—12)%魔力回復率增加5%照亮範圍",
      "template": "增加#%魔力回復率增加#%照亮範圍",
      "ranges": [
       [
        8,
        12
       ],
       [
        5,
        5
       ]
      ],
      "tier": 3
     },
     {
      "name": "點燃之",
      "ilvl": 15,
      "weight": 1000,
      "text": "增加(13—17)%魔力回復率增加10%照亮範圍",
      "template": "增加#%魔力回復率增加#%照亮範圍",
      "ranges": [
       [
        13,
        17
       ],
       [
        10,
        10
       ]
      ],
      "tier": 2
     },
     {
      "name": "真誠之",
      "ilvl": 30,
      "weight": 1000,
      "text": "增加(18—22)%魔力回復率增加15%照亮範圍",
      "template": "增加#%魔力回復率增加#%照亮範圍",
      "ranges": [
       [
        18,
        22
       ],
       [
        15,
        15
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "LocalAttributeRequirements",
    "tiers": [
     {
      "name": "值得之",
      "ilvl": 24,
      "weight": 1000,
      "text": "減少15%能力值需求",
      "template": "減少#%能力值需求",
      "ranges": [
       [
        15,
        15
       ]
      ],
      "tier": 5
     },
     {
      "name": "容易之",
      "ilvl": 32,
      "weight": 1000,
      "text": "減少20%能力值需求",
      "template": "減少#%能力值需求",
      "ranges": [
       [
        20,
        20
       ]
      ],
      "tier": 4
     },
     {
      "name": "長才之",
      "ilvl": 40,
      "weight": 1000,
      "text": "減少25%能力值需求",
      "template": "減少#%能力值需求",
      "ranges": [
       [
        25,
        25
       ]
      ],
      "tier": 3
     },
     {
      "name": "高超之",
      "ilvl": 52,
      "weight": 1000,
      "text": "減少30%能力值需求",
      "template": "減少#%能力值需求",
      "ranges": [
       [
        30,
        30
       ]
      ],
      "tier": 2
     },
     {
      "name": "熟習之",
      "ilvl": 60,
      "weight": 1000,
      "text": "減少35%能力值需求",
      "template": "減少#%能力值需求",
      "ranges": [
       [
        35,
        35
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "ManaGainedFromEnemyDeath",
    "tiers": [
     {
      "name": "吸收之",
      "ilvl": 1,
      "weight": 750,
      "text": "每個被擊殺的敵人，獲得(2—3)魔力",
      "template": "每個被擊殺的敵人，獲得#魔力",
      "ranges": [
       [
        2,
        3
       ]
      ],
      "tier": 8
     },
     {
      "name": "逆滲透之",
      "ilvl": 12,
      "weight": 750,
      "text": "每個被擊殺的敵人，獲得(4—5)魔力",
      "template": "每個被擊殺的敵人，獲得#魔力",
      "ranges": [
       [
        4,
        5
       ]
      ],
      "tier": 7
     },
     {
      "name": "注入之",
      "ilvl": 23,
      "weight": 750,
      "text": "每個被擊殺的敵人，獲得(6—9)魔力",
      "template": "每個被擊殺的敵人，獲得#魔力",
      "ranges": [
       [
        6,
        9
       ]
      ],
      "tier": 6
     },
     {
      "name": "包覆之",
      "ilvl": 34,
      "weight": 750,
      "text": "每個被擊殺的敵人，獲得(10—14)魔力",
      "template": "每個被擊殺的敵人，獲得#魔力",
      "ranges": [
       [
        10,
        14
       ]
      ],
      "tier": 5
     },
     {
      "name": "消耗之",
      "ilvl": 45,
      "weight": 750,
      "text": "每個被擊殺的敵人，獲得(15—20)魔力",
      "template": "每個被擊殺的敵人，獲得#魔力",
      "ranges": [
       [
        15,
        20
       ]
      ],
      "tier": 4
     },
     {
      "name": "虹吸之",
      "ilvl": 56,
      "weight": 750,
      "text": "每個被擊殺的敵人，獲得(21—27)魔力",
      "template": "每個被擊殺的敵人，獲得#魔力",
      "ranges": [
       [
        21,
        27
       ]
      ],
      "tier": 3
     },
     {
      "name": "吞噬之",
      "ilvl": 67,
      "weight": 750,
      "text": "每個被擊殺的敵人，獲得(28—35)魔力",
      "template": "每個被擊殺的敵人，獲得#魔力",
      "ranges": [
       [
        28,
        35
       ]
      ],
      "tier": 2
     },
     {
      "name": "同化之",
      "ilvl": 78,
      "weight": 750,
      "text": "每個被擊殺的敵人，獲得(36—45)魔力",
      "template": "每個被擊殺的敵人，獲得#魔力",
      "ranges": [
       [
        36,
        45
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "ManaRegeneration",
    "tiers": [
     {
      "name": "興奮之",
      "ilvl": 1,
      "weight": 1000,
      "text": "增加(15—29)%魔力回復率",
      "template": "增加#%魔力回復率",
      "ranges": [
       [
        15,
        29
       ]
      ],
      "tier": 6
     },
     {
      "name": "喜悅之",
      "ilvl": 18,
      "weight": 1000,
      "text": "增加(30—44)%魔力回復率",
      "template": "增加#%魔力回復率",
      "ranges": [
       [
        30,
        44
       ]
      ],
      "tier": 5
     },
     {
      "name": "興高采烈之",
      "ilvl": 29,
      "weight": 1000,
      "text": "增加(45—59)%魔力回復率",
      "template": "增加#%魔力回復率",
      "ranges": [
       [
        45,
        59
       ]
      ],
      "tier": 4
     },
     {
      "name": "極樂之",
      "ilvl": 42,
      "weight": 1000,
      "text": "增加(60—74)%魔力回復率",
      "template": "增加#%魔力回復率",
      "ranges": [
       [
        60,
        74
       ]
      ],
      "tier": 3
     },
     {
      "name": "幸福之",
      "ilvl": 55,
      "weight": 1000,
      "text": "增加(75—89)%魔力回復率",
      "template": "增加#%魔力回復率",
      "ranges": [
       [
        75,
        89
       ]
      ],
      "tier": 2
     },
     {
      "name": "涅槃之",
      "ilvl": 79,
      "weight": 1000,
      "text": "增加(90—104)%魔力回復率",
      "template": "增加#%魔力回復率",
      "ranges": [
       [
        90,
        104
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "ShockChanceIncrease",
    "tiers": [
     {
      "name": "感電之",
      "ilvl": 15,
      "weight": 1000,
      "text": "增加(51—60)%感電機率",
      "template": "增加#%感電機率",
      "ranges": [
       [
        51,
        60
       ]
      ],
      "tier": 5
     },
     {
      "name": "殘喘之",
      "ilvl": 30,
      "weight": 1000,
      "text": "增加(61—70)%感電機率",
      "template": "增加#%感電機率",
      "ranges": [
       [
        61,
        70
       ]
      ],
      "tier": 4
     },
     {
      "name": "觸電之",
      "ilvl": 45,
      "weight": 1000,
      "text": "增加(71—80)%感電機率",
      "template": "增加#%感電機率",
      "ranges": [
       [
        71,
        80
       ]
      ],
      "tier": 3
     },
     {
      "name": "電壓之",
      "ilvl": 60,
      "weight": 500,
      "text": "增加(81—90)%感電機率",
      "template": "增加#%感電機率",
      "ranges": [
       [
        81,
        90
       ]
      ],
      "tier": 2
     },
     {
      "name": "雷擊之",
      "ilvl": 75,
      "weight": 500,
      "text": "增加(91—100)%感電機率",
      "template": "增加#%感電機率",
      "ranges": [
       [
        91,
        100
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "SpellCriticalStrikeChanceIncrease",
    "tiers": [
     {
      "name": "威脅之",
      "ilvl": 11,
      "weight": 1000,
      "text": "增加(40—49)%法術暴擊率",
      "template": "增加#%法術暴擊率",
      "ranges": [
       [
        40,
        49
       ]
      ],
      "tier": 6
     },
     {
      "name": "浩劫之",
      "ilvl": 21,
      "weight": 1000,
      "text": "增加(50—59)%法術暴擊率",
      "template": "增加#%法術暴擊率",
      "ranges": [
       [
        50,
        59
       ]
      ],
      "tier": 5
     },
     {
      "name": "災害之",
      "ilvl": 28,
      "weight": 1000,
      "text": "增加(60—69)%法術暴擊率",
      "template": "增加#%法術暴擊率",
      "ranges": [
       [
        60,
        69
       ]
      ],
      "tier": 4
     },
     {
      "name": "血禍之",
      "ilvl": 41,
      "weight": 500,
      "text": "增加(70—79)%法術暴擊率",
      "template": "增加#%法術暴擊率",
      "ranges": [
       [
        70,
        79
       ]
      ],
      "tier": 3
     },
     {
      "name": "滅絕之",
      "ilvl": 59,
      "weight": 250,
      "text": "增加(80—89)%法術暴擊率",
      "template": "增加#%法術暴擊率",
      "ranges": [
       [
        80,
        89
       ]
      ],
      "tier": 2
     },
     {
      "name": "奪位之",
      "ilvl": 76,
      "weight": 125,
      "text": "增加(90—109)%法術暴擊率",
      "template": "增加#%法術暴擊率",
      "ranges": [
       [
        90,
        109
       ]
      ],
      "tier": 1
     }
    ]
   }
  ]
 },
 "Rings": {
  "prefix": [
   {
    "family": "ColdDamage",
    "tiers": [
     {
      "name": "結霜的",
      "ilvl": 1,
      "weight": 500,
      "text": "攻擊附加1至(2—3)冰冷傷害",
      "template": "攻擊附加#至#冰冷傷害",
      "ranges": [
       [
        1,
        1
       ],
       [
        2,
        3
       ]
      ],
      "tier": 9
     },
     {
      "name": "冷凍的",
      "ilvl": 8,
      "weight": 500,
      "text": "攻擊附加(3—4)至(5—8)冰冷傷害",
      "template": "攻擊附加#至#冰冷傷害",
      "ranges": [
       [
        3,
        4
       ],
       [
        5,
        8
       ]
      ],
      "tier": 8
     },
     {
      "name": "結冰的",
      "ilvl": 16,
      "weight": 500,
      "text": "攻擊附加(5—6)至(9—11)冰冷傷害",
      "template": "攻擊附加#至#冰冷傷害",
      "ranges": [
       [
        5,
        6
       ],
       [
        9,
        11
       ]
      ],
      "tier": 7
     },
     {
      "name": "寒風的",
      "ilvl": 33,
      "weight": 500,
      "text": "攻擊附加(7—8)至(12—14)冰冷傷害",
      "template": "攻擊附加#至#冰冷傷害",
      "ranges": [
       [
        7,
        8
       ],
       [
        12,
        14
       ]
      ],
      "tier": 6
     },
     {
      "name": "急凍的",
      "ilvl": 46,
      "weight": 500,
      "text": "攻擊附加(9—10)至(15—17)冰冷傷害",
      "template": "攻擊附加#至#冰冷傷害",
      "ranges": [
       [
        9,
        10
       ],
       [
        15,
        17
       ]
      ],
      "tier": 5
     },
     {
      "name": "冰凍",
      "ilvl": 54,
      "weight": 500,
      "text": "攻擊附加(11—13)至(18—21)冰冷傷害",
      "template": "攻擊附加#至#冰冷傷害",
      "ranges": [
       [
        11,
        13
       ],
       [
        18,
        21
       ]
      ],
      "tier": 4
     },
     {
      "name": "冰河的",
      "ilvl": 60,
      "weight": 400,
      "text": "攻擊附加(14—15)至(22—24)冰冷傷害",
      "template": "攻擊附加#至#冰冷傷害",
      "ranges": [
       [
        14,
        15
       ],
       [
        22,
        24
       ]
      ],
      "tier": 3
     },
     {
      "name": "極地的",
      "ilvl": 65,
      "weight": 300,
      "text": "攻擊附加(16—20)至(25—31)冰冷傷害",
      "template": "攻擊附加#至#冰冷傷害",
      "ranges": [
       [
        16,
        20
       ],
       [
        25,
        31
       ]
      ],
      "tier": 2
     },
     {
      "name": "埋葬的",
      "ilvl": 75,
      "weight": 200,
      "text": "攻擊附加(21—24)至(32—37)冰冷傷害",
      "template": "攻擊附加#至#冰冷傷害",
      "ranges": [
       [
        21,
        24
       ],
       [
        32,
        37
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "ColdDamagePercentage",
    "tiers": [
     {
      "name": "苦味的",
      "ilvl": 8,
      "weight": 500,
      "text": "增加(3—7)%冰冷傷害",
      "template": "增加#%冰冷傷害",
      "ranges": [
       [
        3,
        7
       ]
      ],
      "tier": 6
     },
     {
      "name": "刺人的",
      "ilvl": 16,
      "weight": 500,
      "text": "增加(8—12)%冰冷傷害",
      "template": "增加#%冰冷傷害",
      "ranges": [
       [
        8,
        12
       ]
      ],
      "tier": 5
     },
     {
      "name": "高山的",
      "ilvl": 33,
      "weight": 500,
      "text": "增加(13—17)%冰冷傷害",
      "template": "增加#%冰冷傷害",
      "ranges": [
       [
        13,
        17
       ]
      ],
      "tier": 4
     },
     {
      "name": "雪白的",
      "ilvl": 46,
      "weight": 500,
      "text": "增加(18—22)%冰冷傷害",
      "template": "增加#%冰冷傷害",
      "ranges": [
       [
        18,
        22
       ]
      ],
      "tier": 3
     },
     {
      "name": "冰雹的",
      "ilvl": 65,
      "weight": 500,
      "text": "增加(23—26)%冰冷傷害",
      "template": "增加#%冰冷傷害",
      "ranges": [
       [
        23,
        26
       ]
      ],
      "tier": 2
     },
     {
      "name": "結晶的",
      "ilvl": 75,
      "weight": 500,
      "text": "增加(27—30)%冰冷傷害",
      "template": "增加#%冰冷傷害",
      "ranges": [
       [
        27,
        30
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "FireDamage",
    "tiers": [
     {
      "name": "加熱的",
      "ilvl": 1,
      "weight": 500,
      "text": "攻擊附加(1—2)至3火焰傷害",
      "template": "攻擊附加#至#火焰傷害",
      "ranges": [
       [
        1,
        2
       ],
       [
        3,
        3
       ]
      ],
      "tier": 9
     },
     {
      "name": "悶燒的",
      "ilvl": 8,
      "weight": 500,
      "text": "攻擊附加(3—5)至(6—9)火焰傷害",
      "template": "攻擊附加#至#火焰傷害",
      "ranges": [
       [
        3,
        5
       ],
       [
        6,
        9
       ]
      ],
      "tier": 8
     },
     {
      "name": "冒煙的",
      "ilvl": 16,
      "weight": 500,
      "text": "攻擊附加(6—8)至(10—13)火焰傷害",
      "template": "攻擊附加#至#火焰傷害",
      "ranges": [
       [
        6,
        8
       ],
       [
        10,
        13
       ]
      ],
      "tier": 7
     },
     {
      "name": "燃燒的",
      "ilvl": 33,
      "weight": 500,
      "text": "攻擊附加(9—11)至(14—17)火焰傷害",
      "template": "攻擊附加#至#火焰傷害",
      "ranges": [
       [
        9,
        11
       ],
       [
        14,
        17
       ]
      ],
      "tier": 6
     },
     {
      "name": "火焰的",
      "ilvl": 46,
      "weight": 500,
      "text": "攻擊附加(12—13)至(18—20)火焰傷害",
      "template": "攻擊附加#至#火焰傷害",
      "ranges": [
       [
        12,
        13
       ],
       [
        18,
        20
       ]
      ],
      "tier": 5
     },
     {
      "name": "酷熱的",
      "ilvl": 54,
      "weight": 500,
      "text": "攻擊附加(11—16)至(21—26)火焰傷害",
      "template": "攻擊附加#至#火焰傷害",
      "ranges": [
       [
        11,
        16
       ],
       [
        21,
        26
       ]
      ],
      "tier": 4
     },
     {
      "name": "焚燒的",
      "ilvl": 60,
      "weight": 400,
      "text": "攻擊附加(13—19)至(27—32)火焰傷害",
      "template": "攻擊附加#至#火焰傷害",
      "ranges": [
       [
        13,
        19
       ],
       [
        27,
        32
       ]
      ],
      "tier": 3
     },
     {
      "name": "爆破的",
      "ilvl": 65,
      "weight": 300,
      "text": "攻擊附加(20—24)至(33—36)火焰傷害",
      "template": "攻擊附加#至#火焰傷害",
      "ranges": [
       [
        20,
        24
       ],
       [
        33,
        36
       ]
      ],
      "tier": 2
     },
     {
      "name": "火化的",
      "ilvl": 75,
      "weight": 200,
      "text": "攻擊附加(25—29)至(37—45)火焰傷害",
      "template": "攻擊附加#至#火焰傷害",
      "ranges": [
       [
        25,
        29
       ],
       [
        37,
        45
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "FireDamagePercentage",
    "tiers": [
     {
      "name": "灼燒的",
      "ilvl": 8,
      "weight": 500,
      "text": "增加(3—7)%火焰傷害",
      "template": "增加#%火焰傷害",
      "ranges": [
       [
        3,
        7
       ]
      ],
      "tier": 6
     },
     {
      "name": "嘶嘶作響的",
      "ilvl": 16,
      "weight": 500,
      "text": "增加(8—12)%火焰傷害",
      "template": "增加#%火焰傷害",
      "ranges": [
       [
        8,
        12
       ]
      ],
      "tier": 5
     },
     {
      "name": "起泡的",
      "ilvl": 33,
      "weight": 500,
      "text": "增加(13—17)%火焰傷害",
      "template": "增加#%火焰傷害",
      "ranges": [
       [
        13,
        17
       ]
      ],
      "tier": 4
     },
     {
      "name": "灼燒的",
      "ilvl": 46,
      "weight": 500,
      "text": "增加(18—22)%火焰傷害",
      "template": "增加#%火焰傷害",
      "ranges": [
       [
        18,
        22
       ]
      ],
      "tier": 3
     },
     {
      "name": "火山的",
      "ilvl": 65,
      "weight": 500,
      "text": "增加(23—26)%火焰傷害",
      "template": "增加#%火焰傷害",
      "ranges": [
       [
        23,
        26
       ]
      ],
      "tier": 2
     },
     {
      "name": "岩漿的",
      "ilvl": 75,
      "weight": 500,
      "text": "增加(27—30)%火焰傷害",
      "template": "增加#%火焰傷害",
      "ranges": [
       [
        27,
        30
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "IncreasedAccuracy",
    "tiers": [
     {
      "name": "精確的",
      "ilvl": 1,
      "weight": 800,
      "text": "+(11—32)命中值",
      "template": "+#命中值",
      "ranges": [
       [
        11,
        32
       ]
      ],
      "tier": 8
     },
     {
      "name": "可靠的",
      "ilvl": 11,
      "weight": 800,
      "text": "+(33—60)命中值",
      "template": "+#命中值",
      "ranges": [
       [
        33,
        60
       ]
      ],
      "tier": 7
     },
     {
      "name": "專注的",
      "ilvl": 18,
      "weight": 800,
      "text": "+(61—84)命中值",
      "template": "+#命中值",
      "ranges": [
       [
        61,
        84
       ]
      ],
      "tier": 6
     },
     {
      "name": "慎重之",
      "ilvl": 26,
      "weight": 800,
      "text": "+(85—123)命中值",
      "template": "+#命中值",
      "ranges": [
       [
        85,
        123
       ]
      ],
      "tier": 5
     },
     {
      "name": "穩定之",
      "ilvl": 36,
      "weight": 800,
      "text": "+(124—167)命中值",
      "template": "+#命中值",
      "ranges": [
       [
        124,
        167
       ]
      ],
      "tier": 4
     },
     {
      "name": "安穩的",
      "ilvl": 48,
      "weight": 800,
      "text": "+(168—236)命中值",
      "template": "+#命中值",
      "ranges": [
       [
        168,
        236
       ]
      ],
      "tier": 3
     },
     {
      "name": "狩獵者的",
      "ilvl": 58,
      "weight": 800,
      "text": "+(237—346)命中值",
      "template": "+#命中值",
      "ranges": [
       [
        237,
        346
       ]
      ],
      "tier": 2
     },
     {
      "name": "遊俠的",
      "ilvl": 67,
      "weight": 400,
      "text": "+(347—450)命中值",
      "template": "+#命中值",
      "ranges": [
       [
        347,
        450
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "IncreasedChaosDamage",
    "tiers": [
     {
      "name": "不潔的",
      "ilvl": 8,
      "weight": 500,
      "text": "增加(3—7)%混沌傷害",
      "template": "增加#%混沌傷害",
      "ranges": [
       [
        3,
        7
       ]
      ],
      "tier": 6
     },
     {
      "name": "被污染的",
      "ilvl": 16,
      "weight": 500,
      "text": "增加(8—12)%混沌傷害",
      "template": "增加#%混沌傷害",
      "ranges": [
       [
        8,
        12
       ]
      ],
      "tier": 5
     },
     {
      "name": "多雲的",
      "ilvl": 33,
      "weight": 500,
      "text": "增加(13—17)%混沌傷害",
      "template": "增加#%混沌傷害",
      "ranges": [
       [
        13,
        17
       ]
      ],
      "tier": 4
     },
     {
      "name": "黑暗的",
      "ilvl": 46,
      "weight": 500,
      "text": "增加(18—22)%混沌傷害",
      "template": "增加#%混沌傷害",
      "ranges": [
       [
        18,
        22
       ]
      ],
      "tier": 3
     },
     {
      "name": "惡性的",
      "ilvl": 65,
      "weight": 500,
      "text": "增加(23—26)%混沌傷害",
      "template": "增加#%混沌傷害",
      "ranges": [
       [
        23,
        26
       ]
      ],
      "tier": 2
     },
     {
      "name": "惡劣的",
      "ilvl": 75,
      "weight": 500,
      "text": "增加(27—30)%混沌傷害",
      "template": "增加#%混沌傷害",
      "ranges": [
       [
        27,
        30
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "IncreasedEvasionRating",
    "tiers": [
     {
      "name": "敏捷的",
      "ilvl": 1,
      "weight": 1000,
      "text": "+(8—17)閃避值",
      "template": "+#閃避值",
      "ranges": [
       [
        8,
        17
       ]
      ],
      "tier": 9
     },
     {
      "name": "舞者的",
      "ilvl": 11,
      "weight": 1000,
      "text": "+(18—38)閃避值",
      "template": "+#閃避值",
      "ranges": [
       [
        18,
        38
       ]
      ],
      "tier": 8
     },
     {
      "name": "雜技的",
      "ilvl": 16,
      "weight": 1000,
      "text": "+(39—51)閃避值",
      "template": "+#閃避值",
      "ranges": [
       [
        39,
        51
       ]
      ],
      "tier": 7
     },
     {
      "name": "飄忽的",
      "ilvl": 25,
      "weight": 1000,
      "text": "+(52—79)閃避值",
      "template": "+#閃避值",
      "ranges": [
       [
        52,
        79
       ]
      ],
      "tier": 6
     },
     {
      "name": "模糊的",
      "ilvl": 33,
      "weight": 1000,
      "text": "+(80—107)閃避值",
      "template": "+#閃避值",
      "ranges": [
       [
        80,
        107
       ]
      ],
      "tier": 5
     },
     {
      "name": "相位的",
      "ilvl": 46,
      "weight": 1000,
      "text": "+(108—141)閃避值",
      "template": "+#閃避值",
      "ranges": [
       [
        108,
        141
       ]
      ],
      "tier": 4
     },
     {
      "name": "氣態的",
      "ilvl": 54,
      "weight": 1000,
      "text": "+(142—174)閃避值",
      "template": "+#閃避值",
      "ranges": [
       [
        142,
        174
       ]
      ],
      "tier": 3
     },
     {
      "name": "難以捉摸的",
      "ilvl": 65,
      "weight": 1000,
      "text": "+(175—202)閃避值",
      "template": "+#閃避值",
      "ranges": [
       [
        175,
        202
       ]
      ],
      "tier": 2
     },
     {
      "name": "熟練的",
      "ilvl": 70,
      "weight": 1000,
      "text": "+(203—233)閃避值",
      "template": "+#閃避值",
      "ranges": [
       [
        203,
        233
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "IncreasedLife",
    "tiers": [
     {
      "name": "健壯之",
      "ilvl": 1,
      "weight": 1000,
      "text": "+(10—19)最大生命",
      "template": "+#最大生命",
      "ranges": [
       [
        10,
        19
       ]
      ],
      "tier": 8
     },
     {
      "name": "健康的",
      "ilvl": 6,
      "weight": 1000,
      "text": "+(20—29)最大生命",
      "template": "+#最大生命",
      "ranges": [
       [
        20,
        29
       ]
      ],
      "tier": 7
     },
     {
      "name": "樂觀的",
      "ilvl": 16,
      "weight": 1000,
      "text": "+(30—39)最大生命",
      "template": "+#最大生命",
      "ranges": [
       [
        30,
        39
       ]
      ],
      "tier": 6
     },
     {
      "name": "堅信的",
      "ilvl": 24,
      "weight": 1000,
      "text": "+(40—59)最大生命",
      "template": "+#最大生命",
      "ranges": [
       [
        40,
        59
       ]
      ],
      "tier": 5
     },
     {
      "name": "堅毅者",
      "ilvl": 33,
      "weight": 1000,
      "text": "+(60—69)最大生命",
      "template": "+#最大生命",
      "ranges": [
       [
        60,
        69
       ]
      ],
      "tier": 4
     },
     {
      "name": "健壯的",
      "ilvl": 38,
      "weight": 1000,
      "text": "+(70—84)最大生命",
      "template": "+#最大生命",
      "ranges": [
       [
        70,
        84
       ]
      ],
      "tier": 3
     },
     {
      "name": "豐腴的",
      "ilvl": 46,
      "weight": 1000,
      "text": "+(85—99)最大生命",
      "template": "+#最大生命",
      "ranges": [
       [
        85,
        99
       ]
      ],
      "tier": 2
     },
     {
      "name": "陽剛的",
      "ilvl": 54,
      "weight": 1000,
      "text": "+(100—119)最大生命",
      "template": "+#最大生命",
      "ranges": [
       [
        100,
        119
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "IncreasedMana",
    "tiers": [
     {
      "name": "綠寶石的",
      "ilvl": 1,
      "weight": 1000,
      "text": "+(10—14)最大魔力",
      "template": "+#最大魔力",
      "ranges": [
       [
        10,
        14
       ]
      ],
      "tier": 12
     },
     {
      "name": "鈷藍的",
      "ilvl": 6,
      "weight": 1000,
      "text": "+(15—24)最大魔力",
      "template": "+#最大魔力",
      "ranges": [
       [
        15,
        24
       ]
      ],
      "tier": 11
     },
     {
      "name": "湛藍的",
      "ilvl": 16,
      "weight": 1000,
      "text": "+(25—34)最大魔力",
      "template": "+#最大魔力",
      "ranges": [
       [
        25,
        34
       ]
      ],
      "tier": 10
     },
     {
      "name": "清綠",
      "ilvl": 25,
      "weight": 1000,
      "text": "+(35—54)最大魔力",
      "template": "+#最大魔力",
      "ranges": [
       [
        35,
        54
       ]
      ],
      "tier": 9
     },
     {
      "name": "天藍的",
      "ilvl": 33,
      "weight": 1000,
      "text": "+(55—64)最大魔力",
      "template": "+#最大魔力",
      "ranges": [
       [
        55,
        64
       ]
      ],
      "tier": 8
     },
     {
      "name": "水星的",
      "ilvl": 38,
      "weight": 1000,
      "text": "+(65—79)最大魔力",
      "template": "+#最大魔力",
      "ranges": [
       [
        65,
        79
       ]
      ],
      "tier": 7
     },
     {
      "name": "乳白色的",
      "ilvl": 46,
      "weight": 1000,
      "text": "+(80—89)最大魔力",
      "template": "+#最大魔力",
      "ranges": [
       [
        80,
        89
       ]
      ],
      "tier": 6
     },
     {
      "name": "龍膽的",
      "ilvl": 54,
      "weight": 1000,
      "text": "+(90—104)最大魔力",
      "template": "+#最大魔力",
      "ranges": [
       [
        90,
        104
       ]
      ],
      "tier": 5
     },
     {
      "name": "靛藍的",
      "ilvl": 60,
      "weight": 1000,
      "text": "+(105—124)最大魔力",
      "template": "+#最大魔力",
      "ranges": [
       [
        105,
        124
       ]
      ],
      "tier": 4
     },
     {
      "name": "深藍的",
      "ilvl": 65,
      "weight": 1000,
      "text": "+(125—149)最大魔力",
      "template": "+#最大魔力",
      "ranges": [
       [
        125,
        149
       ]
      ],
      "tier": 3
     },
     {
      "name": "純藍的",
      "ilvl": 70,
      "weight": 1000,
      "text": "+(150—164)最大魔力",
      "template": "+#最大魔力",
      "ranges": [
       [
        150,
        164
       ]
      ],
      "tier": 2
     },
     {
      "name": "鈷藍的",
      "ilvl": 75,
      "weight": 1000,
      "text": "+(165—179)最大魔力",
      "template": "+#最大魔力",
      "ranges": [
       [
        165,
        179
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "ItemFoundRarityIncreasePrefix",
    "tiers": [
     {
      "name": "喜鵲的",
      "ilvl": 10,
      "weight": 1000,
      "text": "增加(8—11)%找到的物品稀有度",
      "template": "增加#%找到的物品稀有度",
      "ranges": [
       [
        8,
        11
       ]
      ],
      "tier": 3
     },
     {
      "name": "蒐集者的",
      "ilvl": 29,
      "weight": 1000,
      "text": "增加(12—15)%找到的物品稀有度",
      "template": "增加#%找到的物品稀有度",
      "ranges": [
       [
        12,
        15
       ]
      ],
      "tier": 2
     },
     {
      "name": "囤積者的",
      "ilvl": 47,
      "weight": 1000,
      "text": "增加(16—19)%找到的物品稀有度",
      "template": "增加#%找到的物品稀有度",
      "ranges": [
       [
        16,
        19
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "LightningDamage",
    "tiers": [
     {
      "name": "低鳴的",
      "ilvl": 1,
      "weight": 500,
      "text": "攻擊附加1至(4—6)閃電傷害",
      "template": "攻擊附加#至#閃電傷害",
      "ranges": [
       [
        1,
        1
       ],
       [
        4,
        6
       ]
      ],
      "tier": 9
     },
     {
      "name": "嗡嗡的",
      "ilvl": 8,
      "weight": 500,
      "text": "攻擊附加1至(10—15)閃電傷害",
      "template": "攻擊附加#至#閃電傷害",
      "ranges": [
       [
        1,
        1
       ],
       [
        10,
        15
       ]
      ],
      "tier": 8
     },
     {
      "name": "捕捉的",
      "ilvl": 16,
      "weight": 500,
      "text": "攻擊附加1至(16—22)閃電傷害",
      "template": "攻擊附加#至#閃電傷害",
      "ranges": [
       [
        1,
        1
       ],
       [
        16,
        22
       ]
      ],
      "tier": 7
     },
     {
      "name": "劈哩啪啦的",
      "ilvl": 33,
      "weight": 500,
      "text": "攻擊附加1至(23—27)閃電傷害",
      "template": "攻擊附加#至#閃電傷害",
      "ranges": [
       [
        1,
        1
       ],
       [
        23,
        27
       ]
      ],
      "tier": 6
     },
     {
      "name": "火花的",
      "ilvl": 46,
      "weight": 500,
      "text": "攻擊附加1至(28—32)閃電傷害",
      "template": "攻擊附加#至#閃電傷害",
      "ranges": [
       [
        1,
        1
       ],
       [
        28,
        32
       ]
      ],
      "tier": 5
     },
     {
      "name": "電弧的",
      "ilvl": 54,
      "weight": 500,
      "text": "攻擊附加(1—2)至(33—40)閃電傷害",
      "template": "攻擊附加#至#閃電傷害",
      "ranges": [
       [
        1,
        2
       ],
       [
        33,
        40
       ]
      ],
      "tier": 4
     },
     {
      "name": "電震的",
      "ilvl": 60,
      "weight": 400,
      "text": "攻擊附加(1—2)至(41—47)閃電傷害",
      "template": "攻擊附加#至#閃電傷害",
      "ranges": [
       [
        1,
        2
       ],
       [
        41,
        47
       ]
      ],
      "tier": 3
     },
     {
      "name": "放電的",
      "ilvl": 65,
      "weight": 300,
      "text": "攻擊附加(1—3)至(48—59)閃電傷害",
      "template": "攻擊附加#至#閃電傷害",
      "ranges": [
       [
        1,
        3
       ],
       [
        48,
        59
       ]
      ],
      "tier": 2
     },
     {
      "name": "電極的",
      "ilvl": 75,
      "weight": 200,
      "text": "攻擊附加(1—4)至(60—71)閃電傷害",
      "template": "攻擊附加#至#閃電傷害",
      "ranges": [
       [
        1,
        4
       ],
       [
        60,
        71
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "LightningDamagePercentage",
    "tiers": [
     {
      "name": "充能的",
      "ilvl": 8,
      "weight": 500,
      "text": "增加(3—7)%閃電傷害",
      "template": "增加#%閃電傷害",
      "ranges": [
       [
        3,
        7
       ]
      ],
      "tier": 6
     },
     {
      "name": "嘶聲的",
      "ilvl": 16,
      "weight": 500,
      "text": "增加(8—12)%閃電傷害",
      "template": "增加#%閃電傷害",
      "ranges": [
       [
        8,
        12
       ]
      ],
      "tier": 5
     },
     {
      "name": "電光的",
      "ilvl": 33,
      "weight": 500,
      "text": "增加(13—17)%閃電傷害",
      "template": "增加#%閃電傷害",
      "ranges": [
       [
        13,
        17
       ]
      ],
      "tier": 4
     },
     {
      "name": "奔馳的",
      "ilvl": 46,
      "weight": 500,
      "text": "增加(18—22)%閃電傷害",
      "template": "增加#%閃電傷害",
      "ranges": [
       [
        18,
        22
       ]
      ],
      "tier": 3
     },
     {
      "name": "敲擊的",
      "ilvl": 65,
      "weight": 500,
      "text": "增加(23—26)%閃電傷害",
      "template": "增加#%閃電傷害",
      "ranges": [
       [
        23,
        26
       ]
      ],
      "tier": 2
     },
     {
      "name": "猛打的",
      "ilvl": 75,
      "weight": 500,
      "text": "增加(27—30)%閃電傷害",
      "template": "增加#%閃電傷害",
      "ranges": [
       [
        27,
        30
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "PhysicalDamage",
    "tiers": [
     {
      "name": "反光的",
      "ilvl": 1,
      "weight": 1000,
      "text": "攻擊附加(1—2)至3物理傷害",
      "template": "攻擊附加#至#物理傷害",
      "ranges": [
       [
        1,
        2
       ],
       [
        3,
        3
       ]
      ],
      "tier": 9
     },
     {
      "name": "磨光的",
      "ilvl": 8,
      "weight": 1000,
      "text": "攻擊附加(2—3)至(4—6)物理傷害",
      "template": "攻擊附加#至#物理傷害",
      "ranges": [
       [
        2,
        3
       ],
       [
        4,
        6
       ]
      ],
      "tier": 8
     },
     {
      "name": "拋光的",
      "ilvl": 16,
      "weight": 1000,
      "text": "攻擊附加(2—4)至(5—8)物理傷害",
      "template": "攻擊附加#至#物理傷害",
      "ranges": [
       [
        2,
        4
       ],
       [
        5,
        8
       ]
      ],
      "tier": 7
     },
     {
      "name": "砥礪的",
      "ilvl": 33,
      "weight": 1000,
      "text": "攻擊附加(4—6)至(8—11)物理傷害",
      "template": "攻擊附加#至#物理傷害",
      "ranges": [
       [
        4,
        6
       ],
       [
        8,
        11
       ]
      ],
      "tier": 6
     },
     {
      "name": "熠熠的",
      "ilvl": 46,
      "weight": 1000,
      "text": "攻擊附加(5—7)至(9—13)物理傷害",
      "template": "攻擊附加#至#物理傷害",
      "ranges": [
       [
        5,
        7
       ],
       [
        9,
        13
       ]
      ],
      "tier": 5
     },
     {
      "name": "韌煉的",
      "ilvl": 54,
      "weight": 1000,
      "text": "攻擊附加(6—10)至(12—17)物理傷害",
      "template": "攻擊附加#至#物理傷害",
      "ranges": [
       [
        6,
        10
       ],
       [
        12,
        17
       ]
      ],
      "tier": 4
     },
     {
      "name": "鋒利的",
      "ilvl": 60,
      "weight": 800,
      "text": "攻擊附加(7—11)至(14—20)物理傷害",
      "template": "攻擊附加#至#物理傷害",
      "ranges": [
       [
        7,
        11
       ],
       [
        14,
        20
       ]
      ],
      "tier": 3
     },
     {
      "name": "鍛煉的",
      "ilvl": 65,
      "weight": 600,
      "text": "攻擊附加(10—15)至(18—26)物理傷害",
      "template": "攻擊附加#至#物理傷害",
      "ranges": [
       [
        10,
        15
       ],
       [
        18,
        26
       ]
      ],
      "tier": 2
     },
     {
      "name": "迸出的",
      "ilvl": 75,
      "weight": 400,
      "text": "攻擊附加(12—19)至(22—32)物理傷害",
      "template": "攻擊附加#至#物理傷害",
      "ranges": [
       [
        12,
        19
       ],
       [
        22,
        32
       ]
      ],
      "tier": 1
     }
    ]
   }
  ],
  "suffix": [
   {
    "family": "AllAttributes",
    "tiers": [
     {
      "name": "雲端之",
      "ilvl": 1,
      "weight": 400,
      "text": "+(2—4)點全部能力值",
      "template": "+#點全部能力值",
      "ranges": [
       [
        2,
        4
       ]
      ],
      "tier": 4
     },
     {
      "name": "天空之",
      "ilvl": 11,
      "weight": 400,
      "text": "+(5—7)點全部能力值",
      "template": "+#點全部能力值",
      "ranges": [
       [
        5,
        7
       ]
      ],
      "tier": 3
     },
     {
      "name": "流星之",
      "ilvl": 22,
      "weight": 400,
      "text": "+(8—10)點全部能力值",
      "template": "+#點全部能力值",
      "ranges": [
       [
        8,
        10
       ]
      ],
      "tier": 2
     },
     {
      "name": "彗星之",
      "ilvl": 33,
      "weight": 400,
      "text": "+(11—13)點全部能力值",
      "template": "+#點全部能力值",
      "ranges": [
       [
        11,
        13
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "AllResistances",
    "tiers": [
     {
      "name": "水晶之",
      "ilvl": 12,
      "weight": 800,
      "text": "+(3—5)%全元素抗性",
      "template": "+#%全元素抗性",
      "ranges": [
       [
        3,
        5
       ]
      ],
      "tier": 5
     },
     {
      "name": "稜鏡之",
      "ilvl": 26,
      "weight": 800,
      "text": "+(6—8)%全元素抗性",
      "template": "+#%全元素抗性",
      "ranges": [
       [
        6,
        8
       ]
      ],
      "tier": 4
     },
     {
      "name": "萬花筒之",
      "ilvl": 40,
      "weight": 800,
      "text": "+(9—11)%全元素抗性",
      "template": "+#%全元素抗性",
      "ranges": [
       [
        9,
        11
       ]
      ],
      "tier": 3
     },
     {
      "name": "多彩之",
      "ilvl": 54,
      "weight": 800,
      "text": "+(12—14)%全元素抗性",
      "template": "+#%全元素抗性",
      "ranges": [
       [
        12,
        14
       ]
      ],
      "tier": 2
     },
     {
      "name": "彩虹之",
      "ilvl": 68,
      "weight": 800,
      "text": "+(15—16)%全元素抗性",
      "template": "+#%全元素抗性",
      "ranges": [
       [
        15,
        16
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "ChaosResistance",
    "tiers": [
     {
      "name": "失落之",
      "ilvl": 16,
      "weight": 250,
      "text": "+(4—7)%混沌抗性",
      "template": "+#%混沌抗性",
      "ranges": [
       [
        4,
        7
       ]
      ],
      "tier": 6
     },
     {
      "name": "放逐之",
      "ilvl": 30,
      "weight": 250,
      "text": "+(8—11)%混沌抗性",
      "template": "+#%混沌抗性",
      "ranges": [
       [
        8,
        11
       ]
      ],
      "tier": 5
     },
     {
      "name": "驅逐之",
      "ilvl": 44,
      "weight": 250,
      "text": "+(12—15)%混沌抗性",
      "template": "+#%混沌抗性",
      "ranges": [
       [
        12,
        15
       ]
      ],
      "tier": 4
     },
     {
      "name": "出境之",
      "ilvl": 56,
      "weight": 250,
      "text": "+(16—19)%混沌抗性",
      "template": "+#%混沌抗性",
      "ranges": [
       [
        16,
        19
       ]
      ],
      "tier": 3
     },
     {
      "name": "流亡之",
      "ilvl": 68,
      "weight": 250,
      "text": "+(20—23)%混沌抗性",
      "template": "+#%混沌抗性",
      "ranges": [
       [
        20,
        23
       ]
      ],
      "tier": 2
     },
     {
      "name": "巴曼斯之",
      "ilvl": 81,
      "weight": 250,
      "text": "+(24—27)%混沌抗性",
      "template": "+#%混沌抗性",
      "ranges": [
       [
        24,
        27
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "ColdResistance",
    "tiers": [
     {
      "name": "海豹之",
      "ilvl": 1,
      "weight": 1000,
      "text": "+(6—10)%冰冷抗性",
      "template": "+#%冰冷抗性",
      "ranges": [
       [
        6,
        10
       ]
      ],
      "tier": 8
     },
     {
      "name": "企鵝之",
      "ilvl": 14,
      "weight": 1000,
      "text": "+(11—15)%冰冷抗性",
      "template": "+#%冰冷抗性",
      "ranges": [
       [
        11,
        15
       ]
      ],
      "tier": 7
     },
     {
      "name": "獨角鯨之",
      "ilvl": 26,
      "weight": 1000,
      "text": "+(16—20)%冰冷抗性",
      "template": "+#%冰冷抗性",
      "ranges": [
       [
        16,
        20
       ]
      ],
      "tier": 6
     },
     {
      "name": "雪人之",
      "ilvl": 38,
      "weight": 1000,
      "text": "+(21—25)%冰冷抗性",
      "template": "+#%冰冷抗性",
      "ranges": [
       [
        21,
        25
       ]
      ],
      "tier": 5
     },
     {
      "name": "海象之",
      "ilvl": 50,
      "weight": 1000,
      "text": "+(26—30)%冰冷抗性",
      "template": "+#%冰冷抗性",
      "ranges": [
       [
        26,
        30
       ]
      ],
      "tier": 4
     },
     {
      "name": "北極熊之",
      "ilvl": 60,
      "weight": 1000,
      "text": "+(31—35)%冰冷抗性",
      "template": "+#%冰冷抗性",
      "ranges": [
       [
        31,
        35
       ]
      ],
      "tier": 3
     },
     {
      "name": "冰之",
      "ilvl": 71,
      "weight": 1000,
      "text": "+(36—40)%冰冷抗性",
      "template": "+#%冰冷抗性",
      "ranges": [
       [
        36,
        40
       ]
      ],
      "tier": 2
     },
     {
      "name": "哈斯特之",
      "ilvl": 82,
      "weight": 1000,
      "text": "+(41—45)%冰冷抗性",
      "template": "+#%冰冷抗性",
      "ranges": [
       [
        41,
        45
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "Dexterity",
    "tiers": [
     {
      "name": "貓鼬之",
      "ilvl": 1,
      "weight": 1000,
      "text": "+(5—8)點敏捷",
      "template": "+#點敏捷",
      "ranges": [
       [
        5,
        8
       ]
      ],
      "tier": 8
     },
     {
      "name": "山貓之",
      "ilvl": 11,
      "weight": 1000,
      "text": "+(9—12)點敏捷",
      "template": "+#點敏捷",
      "ranges": [
       [
        9,
        12
       ]
      ],
      "tier": 7
     },
     {
      "name": "狐狸之",
      "ilvl": 22,
      "weight": 1000,
      "text": "+(13—16)點敏捷",
      "template": "+#點敏捷",
      "ranges": [
       [
        13,
        16
       ]
      ],
      "tier": 6
     },
     {
      "name": "獵鷹之",
      "ilvl": 33,
      "weight": 1000,
      "text": "+(17—20)點敏捷",
      "template": "+#點敏捷",
      "ranges": [
       [
        17,
        20
       ]
      ],
      "tier": 5
     },
     {
      "name": "豹之",
      "ilvl": 44,
      "weight": 1000,
      "text": "+(21—24)點敏捷",
      "template": "+#點敏捷",
      "ranges": [
       [
        21,
        24
       ]
      ],
      "tier": 4
     },
     {
      "name": "花豹之",
      "ilvl": 55,
      "weight": 1000,
      "text": "+(25—27)點敏捷",
      "template": "+#點敏捷",
      "ranges": [
       [
        25,
        27
       ]
      ],
      "tier": 3
     },
     {
      "name": "美洲豹之",
      "ilvl": 66,
      "weight": 1000,
      "text": "+(28—30)點敏捷",
      "template": "+#點敏捷",
      "ranges": [
       [
        28,
        30
       ]
      ],
      "tier": 2
     },
     {
      "name": "幻影之",
      "ilvl": 74,
      "weight": 1000,
      "text": "+(31—33)點敏捷",
      "template": "+#點敏捷",
      "ranges": [
       [
        31,
        33
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "FireResistance",
    "tiers": [
     {
      "name": "幼龍之",
      "ilvl": 1,
      "weight": 1000,
      "text": "+(6—10)%火焰抗性",
      "template": "+#%火焰抗性",
      "ranges": [
       [
        6,
        10
       ]
      ],
      "tier": 8
     },
     {
      "name": "火蜥蜴之",
      "ilvl": 12,
      "weight": 1000,
      "text": "+(11—15)%火焰抗性",
      "template": "+#%火焰抗性",
      "ranges": [
       [
        11,
        15
       ]
      ],
      "tier": 7
     },
     {
      "name": "火龍之",
      "ilvl": 24,
      "weight": 1000,
      "text": "+(16—20)%火焰抗性",
      "template": "+#%火焰抗性",
      "ranges": [
       [
        16,
        20
       ]
      ],
      "tier": 6
     },
     {
      "name": "窯爐之",
      "ilvl": 36,
      "weight": 1000,
      "text": "+(21—25)%火焰抗性",
      "template": "+#%火焰抗性",
      "ranges": [
       [
        21,
        25
       ]
      ],
      "tier": 5
     },
     {
      "name": "爐火之",
      "ilvl": 48,
      "weight": 1000,
      "text": "+(26—30)%火焰抗性",
      "template": "+#%火焰抗性",
      "ranges": [
       [
        26,
        30
       ]
      ],
      "tier": 4
     },
     {
      "name": "火山之",
      "ilvl": 60,
      "weight": 1000,
      "text": "+(31—35)%火焰抗性",
      "template": "+#%火焰抗性",
      "ranges": [
       [
        31,
        35
       ]
      ],
      "tier": 3
     },
     {
      "name": "熔岩屏障之",
      "ilvl": 71,
      "weight": 1000,
      "text": "+(36—40)%火焰抗性",
      "template": "+#%火焰抗性",
      "ranges": [
       [
        36,
        40
       ]
      ],
      "tier": 2
     },
     {
      "name": "提耶須之",
      "ilvl": 82,
      "weight": 1000,
      "text": "+(41—45)%火焰抗性",
      "template": "+#%火焰抗性",
      "ranges": [
       [
        41,
        45
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "IncreasedCastSpeed",
    "tiers": [
     {
      "name": "天賦之",
      "ilvl": 1,
      "weight": 1,
      "text": "增加(9—12)%施法速度",
      "template": "增加#%施法速度",
      "ranges": [
       [
        9,
        12
       ]
      ],
      "tier": 5
     },
     {
      "name": "敏捷之",
      "ilvl": 18,
      "weight": 1,
      "text": "增加(13—15)%施法速度",
      "template": "增加#%施法速度",
      "ranges": [
       [
        13,
        15
       ]
      ],
      "tier": 4
     },
     {
      "name": "專精之",
      "ilvl": 35,
      "weight": 1,
      "text": "增加(16—18)%施法速度",
      "template": "增加#%施法速度",
      "ranges": [
       [
        16,
        18
       ]
      ],
      "tier": 3
     },
     {
      "name": "巫術之",
      "ilvl": 51,
      "weight": 1,
      "text": "增加(19—21)%施法速度",
      "template": "增加#%施法速度",
      "ranges": [
       [
        19,
        21
       ]
      ],
      "tier": 2
     },
     {
      "name": "手法之",
      "ilvl": 60,
      "weight": 1,
      "text": "增加(22—24)%施法速度",
      "template": "增加#%施法速度",
      "ranges": [
       [
        22,
        24
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "Intelligence",
    "tiers": [
     {
      "name": "瞳孔之",
      "ilvl": 1,
      "weight": 1000,
      "text": "+(5—8)點智慧",
      "template": "+#點智慧",
      "ranges": [
       [
        5,
        8
       ]
      ],
      "tier": 8
     },
     {
      "name": "學徒之",
      "ilvl": 11,
      "weight": 1000,
      "text": "+(9—12)點智慧",
      "template": "+#點智慧",
      "ranges": [
       [
        9,
        12
       ]
      ],
      "tier": 7
     },
     {
      "name": "奇才之",
      "ilvl": 22,
      "weight": 1000,
      "text": "+(13—16)點智慧",
      "template": "+#點智慧",
      "ranges": [
       [
        13,
        16
       ]
      ],
      "tier": 6
     },
     {
      "name": "預言之",
      "ilvl": 33,
      "weight": 1000,
      "text": "+(17—20)點智慧",
      "template": "+#點智慧",
      "ranges": [
       [
        17,
        20
       ]
      ],
      "tier": 5
     },
     {
      "name": "哲學家之",
      "ilvl": 44,
      "weight": 1000,
      "text": "+(21—24)點智慧",
      "template": "+#點智慧",
      "ranges": [
       [
        21,
        24
       ]
      ],
      "tier": 4
     },
     {
      "name": "聖人之",
      "ilvl": 55,
      "weight": 1000,
      "text": "+(25—27)點智慧",
      "template": "+#點智慧",
      "ranges": [
       [
        25,
        27
       ]
      ],
      "tier": 3
     },
     {
      "name": "大學者之",
      "ilvl": 66,
      "weight": 1000,
      "text": "+(28—30)點智慧",
      "template": "+#點智慧",
      "ranges": [
       [
        28,
        30
       ]
      ],
      "tier": 2
     },
     {
      "name": "神技之",
      "ilvl": 74,
      "weight": 1000,
      "text": "+(31—33)點智慧",
      "template": "+#點智慧",
      "ranges": [
       [
        31,
        33
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "ItemFoundRarityIncrease",
    "tiers": [
     {
      "name": "掠奪之",
      "ilvl": 3,
      "weight": 1000,
      "text": "增加(6—10)%找到的物品稀有度",
      "template": "增加#%找到的物品稀有度",
      "ranges": [
       [
        6,
        10
       ]
      ],
      "tier": 3
     },
     {
      "name": "掃蕩之",
      "ilvl": 24,
      "weight": 1000,
      "text": "增加(11—14)%找到的物品稀有度",
      "template": "增加#%找到的物品稀有度",
      "ranges": [
       [
        11,
        14
       ]
      ],
      "tier": 2
     },
     {
      "name": "考古之",
      "ilvl": 40,
      "weight": 1000,
      "text": "增加(15—18)%找到的物品稀有度",
      "template": "增加#%找到的物品稀有度",
      "ranges": [
       [
        15,
        18
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "LifeGainedFromEnemyDeath",
    "tiers": [
     {
      "name": "成功之",
      "ilvl": 1,
      "weight": 750,
      "text": "每個被擊殺的敵人，獲得(4—6)生命",
      "template": "每個被擊殺的敵人，獲得#生命",
      "ranges": [
       [
        4,
        6
       ]
      ],
      "tier": 6
     },
     {
      "name": "勝利之",
      "ilvl": 11,
      "weight": 750,
      "text": "每個被擊殺的敵人，獲得(7—9)生命",
      "template": "每個被擊殺的敵人，獲得#生命",
      "ranges": [
       [
        7,
        9
       ]
      ],
      "tier": 5
     },
     {
      "name": "凱旋之",
      "ilvl": 22,
      "weight": 750,
      "text": "每個被擊殺的敵人，獲得(10—18)生命",
      "template": "每個被擊殺的敵人，獲得#生命",
      "ranges": [
       [
        10,
        18
       ]
      ],
      "tier": 4
     },
     {
      "name": "征服之",
      "ilvl": 33,
      "weight": 750,
      "text": "每個被擊殺的敵人，獲得(19—28)生命",
      "template": "每個被擊殺的敵人，獲得#生命",
      "ranges": [
       [
        19,
        28
       ]
      ],
      "tier": 3
     },
     {
      "name": "征服之",
      "ilvl": 44,
      "weight": 750,
      "text": "每個被擊殺的敵人，獲得(29—40)生命",
      "template": "每個被擊殺的敵人，獲得#生命",
      "ranges": [
       [
        29,
        40
       ]
      ],
      "tier": 2
     },
     {
      "name": "勇氣之",
      "ilvl": 55,
      "weight": 750,
      "text": "每個被擊殺的敵人，獲得(41—53)生命",
      "template": "每個被擊殺的敵人，獲得#生命",
      "ranges": [
       [
        41,
        53
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "LifeLeech",
    "tiers": [
     {
      "name": "蝗蟲之",
      "ilvl": 21,
      "weight": 1000,
      "text": "以(6—6.9)%物理攻擊傷害偷取生命",
      "template": "以#%物理攻擊傷害偷取生命",
      "ranges": [
       [
        6,
        6.9
       ]
      ],
      "tier": 2
     },
     {
      "name": "鯽魚之",
      "ilvl": 38,
      "weight": 1000,
      "text": "以(7—7.9)%物理攻擊傷害偷取生命",
      "template": "以#%物理攻擊傷害偷取生命",
      "ranges": [
       [
        7,
        7.9
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "LifeRegeneration",
    "tiers": [
     {
      "name": "蠑螈之",
      "ilvl": 1,
      "weight": 1000,
      "text": "(1—2)每秒生命回復",
      "template": "#每秒生命回復",
      "ranges": [
       [
        1,
        2
       ]
      ],
      "tier": 7
     },
     {
      "name": "蜥蜴之",
      "ilvl": 5,
      "weight": 1000,
      "text": "(2.1—3)每秒生命回復",
      "template": "#每秒生命回復",
      "ranges": [
       [
        2.1,
        3
       ]
      ],
      "tier": 6
     },
     {
      "name": "阿扁蟲之",
      "ilvl": 11,
      "weight": 1000,
      "text": "(3.1—4)每秒生命回復",
      "template": "#每秒生命回復",
      "ranges": [
       [
        3.1,
        4
       ]
      ],
      "tier": 5
     },
     {
      "name": "海星之",
      "ilvl": 17,
      "weight": 1000,
      "text": "(4.1—6)每秒生命回復",
      "template": "#每秒生命回復",
      "ranges": [
       [
        4.1,
        6
       ]
      ],
      "tier": 4
     },
     {
      "name": "九頭蛇之",
      "ilvl": 26,
      "weight": 1000,
      "text": "(6.1—9)每秒生命回復",
      "template": "#每秒生命回復",
      "ranges": [
       [
        6.1,
        9
       ]
      ],
      "tier": 3
     },
     {
      "name": "食人之",
      "ilvl": 35,
      "weight": 1000,
      "text": "(9.1—13)每秒生命回復",
      "template": "#每秒生命回復",
      "ranges": [
       [
        9.1,
        13
       ]
      ],
      "tier": 2
     },
     {
      "name": "康復之",
      "ilvl": 47,
      "weight": 1000,
      "text": "(13.1—18)每秒生命回復",
      "template": "#每秒生命回復",
      "ranges": [
       [
        13.1,
        18
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "LightRadiusAndManaRegeneration",
    "tiers": [
     {
      "name": "溫暖之",
      "ilvl": 8,
      "weight": 1000,
      "text": "增加(8—12)%魔力回復率增加5%照亮範圍",
      "template": "增加#%魔力回復率增加#%照亮範圍",
      "ranges": [
       [
        8,
        12
       ],
       [
        5,
        5
       ]
      ],
      "tier": 3
     },
     {
      "name": "點燃之",
      "ilvl": 15,
      "weight": 1000,
      "text": "增加(13—17)%魔力回復率增加10%照亮範圍",
      "template": "增加#%魔力回復率增加#%照亮範圍",
      "ranges": [
       [
        13,
        17
       ],
       [
        10,
        10
       ]
      ],
      "tier": 2
     },
     {
      "name": "真誠之",
      "ilvl": 30,
      "weight": 1000,
      "text": "增加(18—22)%魔力回復率增加15%照亮範圍",
      "template": "增加#%魔力回復率增加#%照亮範圍",
      "ranges": [
       [
        18,
        22
       ],
       [
        15,
        15
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "LightningResistance",
    "tiers": [
     {
      "name": "雲朵之",
      "ilvl": 1,
      "weight": 1000,
      "text": "+(6—10)%閃電抗性",
      "template": "+#%閃電抗性",
      "ranges": [
       [
        6,
        10
       ]
      ],
      "tier": 8
     },
     {
      "name": "冰雹之",
      "ilvl": 13,
      "weight": 1000,
      "text": "+(11—15)%閃電抗性",
      "template": "+#%閃電抗性",
      "ranges": [
       [
        11,
        15
       ]
      ],
      "tier": 7
     },
     {
      "name": "暴風之",
      "ilvl": 25,
      "weight": 1000,
      "text": "+(16—20)%閃電抗性",
      "template": "+#%閃電抗性",
      "ranges": [
       [
        16,
        20
       ]
      ],
      "tier": 6
     },
     {
      "name": "積雨雲之",
      "ilvl": 37,
      "weight": 1000,
      "text": "+(21—25)%閃電抗性",
      "template": "+#%閃電抗性",
      "ranges": [
       [
        21,
        25
       ]
      ],
      "tier": 5
     },
     {
      "name": "暴風雨之",
      "ilvl": 49,
      "weight": 1000,
      "text": "+(26—30)%閃電抗性",
      "template": "+#%閃電抗性",
      "ranges": [
       [
        26,
        30
       ]
      ],
      "tier": 4
     },
     {
      "name": "颱風之",
      "ilvl": 60,
      "weight": 1000,
      "text": "+(31—35)%閃電抗性",
      "template": "+#%閃電抗性",
      "ranges": [
       [
        31,
        35
       ]
      ],
      "tier": 3
     },
     {
      "name": "電之",
      "ilvl": 71,
      "weight": 1000,
      "text": "+(36—40)%閃電抗性",
      "template": "+#%閃電抗性",
      "ranges": [
       [
        36,
        40
       ]
      ],
      "tier": 2
     },
     {
      "name": "艾菲吉之",
      "ilvl": 82,
      "weight": 1000,
      "text": "+(41—45)%閃電抗性",
      "template": "+#%閃電抗性",
      "ranges": [
       [
        41,
        45
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "ManaGainedFromEnemyDeath",
    "tiers": [
     {
      "name": "吸收之",
      "ilvl": 1,
      "weight": 750,
      "text": "每個被擊殺的敵人，獲得(2—3)魔力",
      "template": "每個被擊殺的敵人，獲得#魔力",
      "ranges": [
       [
        2,
        3
       ]
      ],
      "tier": 6
     },
     {
      "name": "逆滲透之",
      "ilvl": 12,
      "weight": 750,
      "text": "每個被擊殺的敵人，獲得(4—5)魔力",
      "template": "每個被擊殺的敵人，獲得#魔力",
      "ranges": [
       [
        4,
        5
       ]
      ],
      "tier": 5
     },
     {
      "name": "注入之",
      "ilvl": 23,
      "weight": 750,
      "text": "每個被擊殺的敵人，獲得(6—9)魔力",
      "template": "每個被擊殺的敵人，獲得#魔力",
      "ranges": [
       [
        6,
        9
       ]
      ],
      "tier": 4
     },
     {
      "name": "包覆之",
      "ilvl": 34,
      "weight": 750,
      "text": "每個被擊殺的敵人，獲得(10—14)魔力",
      "template": "每個被擊殺的敵人，獲得#魔力",
      "ranges": [
       [
        10,
        14
       ]
      ],
      "tier": 3
     },
     {
      "name": "消耗之",
      "ilvl": 45,
      "weight": 750,
      "text": "每個被擊殺的敵人，獲得(15—20)魔力",
      "template": "每個被擊殺的敵人，獲得#魔力",
      "ranges": [
       [
        15,
        20
       ]
      ],
      "tier": 2
     },
     {
      "name": "虹吸之",
      "ilvl": 56,
      "weight": 750,
      "text": "每個被擊殺的敵人，獲得(21—27)魔力",
      "template": "每個被擊殺的敵人，獲得#魔力",
      "ranges": [
       [
        21,
        27
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "ManaLeech",
    "tiers": [
     {
      "name": "乾渴之",
      "ilvl": 21,
      "weight": 1000,
      "text": "以(5—5.9)%物理攻擊傷害偷取魔力",
      "template": "以#%物理攻擊傷害偷取魔力",
      "ranges": [
       [
        5,
        5.9
       ]
      ],
      "tier": 2
     },
     {
      "name": "乾燥之",
      "ilvl": 38,
      "weight": 1000,
      "text": "以(6—6.9)%物理攻擊傷害偷取魔力",
      "template": "以#%物理攻擊傷害偷取魔力",
      "ranges": [
       [
        6,
        6.9
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "ManaRegeneration",
    "tiers": [
     {
      "name": "興奮之",
      "ilvl": 1,
      "weight": 1000,
      "text": "增加(10—19)%魔力回復率",
      "template": "增加#%魔力回復率",
      "ranges": [
       [
        10,
        19
       ]
      ],
      "tier": 6
     },
     {
      "name": "喜悅之",
      "ilvl": 18,
      "weight": 1000,
      "text": "增加(20—29)%魔力回復率",
      "template": "增加#%魔力回復率",
      "ranges": [
       [
        20,
        29
       ]
      ],
      "tier": 5
     },
     {
      "name": "興高采烈之",
      "ilvl": 29,
      "weight": 1000,
      "text": "增加(30—39)%魔力回復率",
      "template": "增加#%魔力回復率",
      "ranges": [
       [
        30,
        39
       ]
      ],
      "tier": 4
     },
     {
      "name": "極樂之",
      "ilvl": 42,
      "weight": 1000,
      "text": "增加(40—49)%魔力回復率",
      "template": "增加#%魔力回復率",
      "ranges": [
       [
        40,
        49
       ]
      ],
      "tier": 3
     },
     {
      "name": "幸福之",
      "ilvl": 55,
      "weight": 1000,
      "text": "增加(50—59)%魔力回復率",
      "template": "增加#%魔力回復率",
      "ranges": [
       [
        50,
        59
       ]
      ],
      "tier": 2
     },
     {
      "name": "涅槃之",
      "ilvl": 79,
      "weight": 1000,
      "text": "增加(60—69)%魔力回復率",
      "template": "增加#%魔力回復率",
      "ranges": [
       [
        60,
        69
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "Strength",
    "tiers": [
     {
      "name": "野蠻之",
      "ilvl": 1,
      "weight": 1000,
      "text": "+(5—8)點力量",
      "template": "+#點力量",
      "ranges": [
       [
        5,
        8
       ]
      ],
      "tier": 8
     },
     {
      "name": "摔角手之",
      "ilvl": 11,
      "weight": 1000,
      "text": "+(9—12)點力量",
      "template": "+#點力量",
      "ranges": [
       [
        9,
        12
       ]
      ],
      "tier": 7
     },
     {
      "name": "熊之",
      "ilvl": 22,
      "weight": 1000,
      "text": "+(13—16)點力量",
      "template": "+#點力量",
      "ranges": [
       [
        13,
        16
       ]
      ],
      "tier": 6
     },
     {
      "name": "獅子之",
      "ilvl": 33,
      "weight": 1000,
      "text": "+(17—20)點力量",
      "template": "+#點力量",
      "ranges": [
       [
        17,
        20
       ]
      ],
      "tier": 5
     },
     {
      "name": "大猩猩之",
      "ilvl": 44,
      "weight": 1000,
      "text": "+(21—24)點力量",
      "template": "+#點力量",
      "ranges": [
       [
        21,
        24
       ]
      ],
      "tier": 4
     },
     {
      "name": "巨人之",
      "ilvl": 55,
      "weight": 1000,
      "text": "+(25—27)點力量",
      "template": "+#點力量",
      "ranges": [
       [
        25,
        27
       ]
      ],
      "tier": 3
     },
     {
      "name": "海獸之",
      "ilvl": 66,
      "weight": 1000,
      "text": "+(28—30)點力量",
      "template": "+#點力量",
      "ranges": [
       [
        28,
        30
       ]
      ],
      "tier": 2
     },
     {
      "name": "泰坦之",
      "ilvl": 74,
      "weight": 1000,
      "text": "+(31—33)點力量",
      "template": "+#點力量",
      "ranges": [
       [
        31,
        33
       ]
      ],
      "tier": 1
     }
    ]
   }
  ]
 },
 "Body_Armours_str": {
  "prefix": [
   {
    "family": "BaseLocalDefences",
    "tiers": [
     {
      "name": "上漆的",
      "ilvl": 1,
      "weight": 1000,
      "text": "+(16—27)護甲值",
      "template": "+#護甲值",
      "ranges": [
       [
        16,
        27
       ]
      ],
      "tier": 11
     },
     {
      "name": "鑲嵌的",
      "ilvl": 8,
      "weight": 1000,
      "text": "+(28—56)護甲值",
      "template": "+#護甲值",
      "ranges": [
       [
        28,
        56
       ]
      ],
      "tier": 10
     },
     {
      "name": "螺紋的",
      "ilvl": 16,
      "weight": 1000,
      "text": "+(57—77)護甲值",
      "template": "+#護甲值",
      "ranges": [
       [
        57,
        77
       ]
      ],
      "tier": 9
     },
     {
      "name": "強化的",
      "ilvl": 25,
      "weight": 1000,
      "text": "+(78—98)護甲值",
      "template": "+#護甲值",
      "ranges": [
       [
        78,
        98
       ]
      ],
      "tier": 8
     },
     {
      "name": "電鍍的",
      "ilvl": 33,
      "weight": 1000,
      "text": "+(99—127)護甲值",
      "template": "+#護甲值",
      "ranges": [
       [
        99,
        127
       ]
      ],
      "tier": 7
     },
     {
      "name": "裝甲化的",
      "ilvl": 46,
      "weight": 1000,
      "text": "+(128—159)護甲值",
      "template": "+#護甲值",
      "ranges": [
       [
        128,
        159
       ]
      ],
      "tier": 6
     },
     {
      "name": "圍繞的",
      "ilvl": 54,
      "weight": 1000,
      "text": "+(160—190)護甲值",
      "template": "+#護甲值",
      "ranges": [
       [
        160,
        190
       ]
      ],
      "tier": 5
     },
     {
      "name": "籠罩的",
      "ilvl": 60,
      "weight": 1000,
      "text": "+(191—221)護甲值",
      "template": "+#護甲值",
      "ranges": [
       [
        191,
        221
       ]
      ],
      "tier": 4
     },
     {
      "name": "減弱的",
      "ilvl": 65,
      "weight": 1000,
      "text": "+(222—248)護甲值",
      "template": "+#護甲值",
      "ranges": [
       [
        222,
        248
       ]
      ],
      "tier": 3
     },
     {
      "name": "不動的",
      "ilvl": 75,
      "weight": 1000,
      "text": "+(249—277)護甲值",
      "template": "+#護甲值",
      "ranges": [
       [
        249,
        277
       ]
      ],
      "tier": 2
     },
     {
      "name": "抗滲的",
      "ilvl": 79,
      "weight": 1000,
      "text": "+(278—310)護甲值",
      "template": "+#護甲值",
      "ranges": [
       [
        278,
        310
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "BaseLocalDefencesAndDefencePercent",
    "tiers": [
     {
      "name": "鮑魚的",
      "ilvl": 8,
      "weight": 1000,
      "text": "+(5—9)護甲值增加(6—13)%護甲值",
      "template": "+#護甲值增加#%護甲值",
      "ranges": [
       [
        5,
        9
       ],
       [
        6,
        13
       ]
      ],
      "tier": 6
     },
     {
      "name": "蝸牛的",
      "ilvl": 16,
      "weight": 1000,
      "text": "+(10—29)護甲值增加(14—20)%護甲值",
      "template": "+#護甲值增加#%護甲值",
      "ranges": [
       [
        10,
        29
       ],
       [
        14,
        20
       ]
      ],
      "tier": 5
     },
     {
      "name": "陸龜的",
      "ilvl": 33,
      "weight": 1000,
      "text": "+(30—41)護甲值增加(21—26)%護甲值",
      "template": "+#護甲值增加#%護甲值",
      "ranges": [
       [
        30,
        41
       ],
       [
        21,
        26
       ]
      ],
      "tier": 4
     },
     {
      "name": "穿山甲的",
      "ilvl": 46,
      "weight": 1000,
      "text": "+(42—57)護甲值增加(27—32)%護甲值",
      "template": "+#護甲值增加#%護甲值",
      "ranges": [
       [
        42,
        57
       ],
       [
        27,
        32
       ]
      ],
      "tier": 3
     },
     {
      "name": "有殼的",
      "ilvl": 60,
      "weight": 1000,
      "text": "+(58—75)護甲值增加(33—38)%護甲值",
      "template": "+#護甲值增加#%護甲值",
      "ranges": [
       [
        58,
        75
       ],
       [
        33,
        38
       ]
      ],
      "tier": 2
     },
     {
      "name": "硬化的",
      "ilvl": 78,
      "weight": 1000,
      "text": "+(76—95)護甲值增加(39—42)%護甲值",
      "template": "+#護甲值增加#%護甲值",
      "ranges": [
       [
        76,
        95
       ],
       [
        39,
        42
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "BaseLocalDefencesAndLife",
    "tiers": [
     {
      "name": "牡蠣的",
      "ilvl": 8,
      "weight": 1000,
      "text": "增加(6—13)%護甲值+(7—10)最大生命",
      "template": "增加#%護甲值+#最大生命",
      "ranges": [
       [
        6,
        13
       ],
       [
        7,
        10
       ]
      ],
      "tier": 6
     },
     {
      "name": "巨螯的",
      "ilvl": 16,
      "weight": 1000,
      "text": "增加(14—20)%護甲值+(11—19)最大生命",
      "template": "增加#%護甲值+#最大生命",
      "ranges": [
       [
        14,
        20
       ],
       [
        11,
        19
       ]
      ],
      "tier": 5
     },
     {
      "name": "海膽的",
      "ilvl": 33,
      "weight": 1000,
      "text": "增加(21—26)%護甲值+(20—25)最大生命",
      "template": "增加#%護甲值+#最大生命",
      "ranges": [
       [
        21,
        26
       ],
       [
        20,
        25
       ]
      ],
      "tier": 4
     },
     {
      "name": "鸚鵡螺的",
      "ilvl": 46,
      "weight": 1000,
      "text": "增加(27—32)%護甲值+(26—32)最大生命",
      "template": "增加#%護甲值+#最大生命",
      "ranges": [
       [
        27,
        32
       ],
       [
        26,
        32
       ]
      ],
      "tier": 3
     },
     {
      "name": "八爪的",
      "ilvl": 60,
      "weight": 1000,
      "text": "增加(33—38)%護甲值+(33—41)最大生命",
      "template": "增加#%護甲值+#最大生命",
      "ranges": [
       [
        33,
        38
       ],
       [
        33,
        41
       ]
      ],
      "tier": 2
     },
     {
      "name": "鱷魚的",
      "ilvl": 78,
      "weight": 1000,
      "text": "增加(39—42)%護甲值+(42—49)最大生命",
      "template": "增加#%護甲值+#最大生命",
      "ranges": [
       [
        39,
        42
       ],
       [
        42,
        49
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "BaseSpirit",
    "tiers": [
     {
      "name": "淑女的",
      "ilvl": 16,
      "weight": 500,
      "text": "+(30—33)精魂",
      "template": "+#精魂",
      "ranges": [
       [
        30,
        33
       ]
      ],
      "tier": 8
     },
     {
      "name": "女爵的",
      "ilvl": 25,
      "weight": 500,
      "text": "+(34—37)精魂",
      "template": "+#精魂",
      "ranges": [
       [
        34,
        37
       ]
      ],
      "tier": 7
     },
     {
      "name": "女子爵的",
      "ilvl": 33,
      "weight": 500,
      "text": "+(38—42)精魂",
      "template": "+#精魂",
      "ranges": [
       [
        38,
        42
       ]
      ],
      "tier": 6
     },
     {
      "name": "子爵夫人的",
      "ilvl": 46,
      "weight": 500,
      "text": "+(43—46)精魂",
      "template": "+#精魂",
      "ranges": [
       [
        43,
        46
       ]
      ],
      "tier": 5
     },
     {
      "name": "伯爵夫人的",
      "ilvl": 54,
      "weight": 400,
      "text": "+(47—50)精魂",
      "template": "+#精魂",
      "ranges": [
       [
        47,
        50
       ]
      ],
      "tier": 4
     },
     {
      "name": "公爵夫人的",
      "ilvl": 60,
      "weight": 300,
      "text": "+(51—53)精魂",
      "template": "+#精魂",
      "ranges": [
       [
        51,
        53
       ]
      ],
      "tier": 3
     },
     {
      "name": "公主的",
      "ilvl": 65,
      "weight": 200,
      "text": "+(54—56)精魂",
      "template": "+#精魂",
      "ranges": [
       [
        54,
        56
       ]
      ],
      "tier": 2
     },
     {
      "name": "女皇的",
      "ilvl": 78,
      "weight": 100,
      "text": "+(57—61)精魂",
      "template": "+#精魂",
      "ranges": [
       [
        57,
        61
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "DefencesPercent",
    "tiers": [
     {
      "name": "增強的",
      "ilvl": 2,
      "weight": 1000,
      "text": "增加(15—26)%護甲值",
      "template": "增加#%護甲值",
      "ranges": [
       [
        15,
        26
       ]
      ],
      "tier": 8
     },
     {
      "name": "分層的",
      "ilvl": 16,
      "weight": 1000,
      "text": "增加(27—42)%護甲值",
      "template": "增加#%護甲值",
      "ranges": [
       [
        27,
        42
       ]
      ],
      "tier": 7
     },
     {
      "name": "甲殼的",
      "ilvl": 35,
      "weight": 1000,
      "text": "增加(43—55)%護甲值",
      "template": "增加#%護甲值",
      "ranges": [
       [
        43,
        55
       ]
      ],
      "tier": 6
     },
     {
      "name": "支持的",
      "ilvl": 46,
      "weight": 1000,
      "text": "增加(56—67)%護甲值",
      "template": "增加#%護甲值",
      "ranges": [
       [
        56,
        67
       ]
      ],
      "tier": 5
     },
     {
      "name": "加厚的",
      "ilvl": 54,
      "weight": 1000,
      "text": "增加(68—79)%護甲值",
      "template": "增加#%護甲值",
      "ranges": [
       [
        68,
        79
       ]
      ],
      "tier": 4
     },
     {
      "name": "圍城的",
      "ilvl": 60,
      "weight": 1000,
      "text": "增加(80—91)%護甲值",
      "template": "增加#%護甲值",
      "ranges": [
       [
        80,
        91
       ]
      ],
      "tier": 3
     },
     {
      "name": "堅不可摧的",
      "ilvl": 65,
      "weight": 1000,
      "text": "增加(92—100)%護甲值",
      "template": "增加#%護甲值",
      "ranges": [
       [
        92,
        100
       ]
      ],
      "tier": 2
     },
     {
      "name": "費解的",
      "ilvl": 75,
      "weight": 1000,
      "text": "增加(101—110)%護甲值",
      "template": "增加#%護甲值",
      "ranges": [
       [
        101,
        110
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "IncreasedLife",
    "tiers": [
     {
      "name": "健壯之",
      "ilvl": 1,
      "weight": 1000,
      "text": "+(10—19)最大生命",
      "template": "+#最大生命",
      "ranges": [
       [
        10,
        19
       ]
      ],
      "tier": 13
     },
     {
      "name": "健康的",
      "ilvl": 6,
      "weight": 1000,
      "text": "+(20—29)最大生命",
      "template": "+#最大生命",
      "ranges": [
       [
        20,
        29
       ]
      ],
      "tier": 12
     },
     {
      "name": "樂觀的",
      "ilvl": 16,
      "weight": 1000,
      "text": "+(30—39)最大生命",
      "template": "+#最大生命",
      "ranges": [
       [
        30,
        39
       ]
      ],
      "tier": 11
     },
     {
      "name": "堅信的",
      "ilvl": 24,
      "weight": 1000,
      "text": "+(40—59)最大生命",
      "template": "+#最大生命",
      "ranges": [
       [
        40,
        59
       ]
      ],
      "tier": 10
     },
     {
      "name": "堅毅者",
      "ilvl": 33,
      "weight": 1000,
      "text": "+(60—69)最大生命",
      "template": "+#最大生命",
      "ranges": [
       [
        60,
        69
       ]
      ],
      "tier": 9
     },
     {
      "name": "健壯的",
      "ilvl": 38,
      "weight": 1000,
      "text": "+(70—84)最大生命",
      "template": "+#最大生命",
      "ranges": [
       [
        70,
        84
       ]
      ],
      "tier": 8
     },
     {
      "name": "豐腴的",
      "ilvl": 46,
      "weight": 1000,
      "text": "+(85—99)最大生命",
      "template": "+#最大生命",
      "ranges": [
       [
        85,
        99
       ]
      ],
      "tier": 7
     },
     {
      "name": "陽剛的",
      "ilvl": 54,
      "weight": 1000,
      "text": "+(100—119)最大生命",
      "template": "+#最大生命",
      "ranges": [
       [
        100,
        119
       ]
      ],
      "tier": 6
     },
     {
      "name": "運動員的",
      "ilvl": 60,
      "weight": 1000,
      "text": "+(120—149)最大生命",
      "template": "+#最大生命",
      "ranges": [
       [
        120,
        149
       ]
      ],
      "tier": 5
     },
     {
      "name": "豐饒的",
      "ilvl": 65,
      "weight": 1000,
      "text": "+(150—174)最大生命",
      "template": "+#最大生命",
      "ranges": [
       [
        150,
        174
       ]
      ],
      "tier": 4
     },
     {
      "name": "蓬勃的",
      "ilvl": 70,
      "weight": 1000,
      "text": "+(175—189)最大生命",
      "template": "+#最大生命",
      "ranges": [
       [
        175,
        189
       ]
      ],
      "tier": 3
     },
     {
      "name": "狂喜的",
      "ilvl": 75,
      "weight": 1000,
      "text": "+(190—199)最大生命",
      "template": "+#最大生命",
      "ranges": [
       [
        190,
        199
       ]
      ],
      "tier": 2
     },
     {
      "name": "重要的",
      "ilvl": 80,
      "weight": 1000,
      "text": "+(200—214)最大生命",
      "template": "+#最大生命",
      "ranges": [
       [
        200,
        214
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "Thorns",
    "tiers": [
     {
      "name": "多刺的",
      "ilvl": 1,
      "weight": 1000,
      "text": "(1—2)至(3—4)點物理荊棘傷害",
      "template": "#至#點物理荊棘傷害",
      "ranges": [
       [
        1,
        2
       ],
       [
        3,
        4
       ]
      ],
      "tier": 7
     },
     {
      "name": "帶刺的",
      "ilvl": 10,
      "weight": 1000,
      "text": "(5—7)至(7—10)點物理荊棘傷害",
      "template": "#至#點物理荊棘傷害",
      "ranges": [
       [
        5,
        7
       ],
       [
        7,
        10
       ]
      ],
      "tier": 6
     },
     {
      "name": "尖刺的",
      "ilvl": 19,
      "weight": 1000,
      "text": "(11—16)至(17—23)點物理荊棘傷害",
      "template": "#至#點物理荊棘傷害",
      "ranges": [
       [
        11,
        16
       ],
       [
        17,
        23
       ]
      ],
      "tier": 5
     },
     {
      "name": "尖銳的",
      "ilvl": 38,
      "weight": 1000,
      "text": "(24—35)至(36—53)點物理荊棘傷害",
      "template": "#至#點物理荊棘傷害",
      "ranges": [
       [
        24,
        35
       ],
       [
        36,
        53
       ]
      ],
      "tier": 4
     },
     {
      "name": "尖刺",
      "ilvl": 48,
      "weight": 1000,
      "text": "(40—60)至(61—92)點物理荊棘傷害",
      "template": "#至#點物理荊棘傷害",
      "ranges": [
       [
        40,
        60
       ],
       [
        61,
        92
       ]
      ],
      "tier": 3
     },
     {
      "name": "尖刃",
      "ilvl": 63,
      "weight": 1000,
      "text": "(64—97)至(98—145)點物理荊棘傷害",
      "template": "#至#點物理荊棘傷害",
      "ranges": [
       [
        64,
        97
       ],
       [
        98,
        145
       ]
      ],
      "tier": 2
     },
     {
      "name": "鋸齒的",
      "ilvl": 74,
      "weight": 1000,
      "text": "(101—151)至(152—220)點物理荊棘傷害",
      "template": "#至#點物理荊棘傷害",
      "ranges": [
       [
        101,
        151
       ],
       [
        152,
        220
       ]
      ],
      "tier": 1
     }
    ]
   }
  ],
  "suffix": [
   {
    "family": "ArmourAppliesToElementalDamage",
    "tiers": [
     {
      "name": "覆蓋之",
      "ilvl": 1,
      "weight": 1000,
      "text": "+(14—19)%的護甲值也會套用至元素傷害",
      "template": "+#%的護甲值也會套用至元素傷害",
      "ranges": [
       [
        14,
        19
       ]
      ],
      "tier": 6
     },
     {
      "name": "覆套之",
      "ilvl": 16,
      "weight": 1000,
      "text": "+(20—25)%的護甲值也會套用至元素傷害",
      "template": "+#%的護甲值也會套用至元素傷害",
      "ranges": [
       [
        20,
        25
       ]
      ],
      "tier": 5
     },
     {
      "name": "內襯之",
      "ilvl": 36,
      "weight": 1000,
      "text": "+(26—31)%的護甲值也會套用至元素傷害",
      "template": "+#%的護甲值也會套用至元素傷害",
      "ranges": [
       [
        26,
        31
       ]
      ],
      "tier": 4
     },
     {
      "name": "鋪墊之",
      "ilvl": 48,
      "weight": 1000,
      "text": "+(32—37)%的護甲值也會套用至元素傷害",
      "template": "+#%的護甲值也會套用至元素傷害",
      "ranges": [
       [
        32,
        37
       ]
      ],
      "tier": 3
     },
     {
      "name": "鑲邊之",
      "ilvl": 66,
      "weight": 1000,
      "text": "+(38—43)%的護甲值也會套用至元素傷害",
      "template": "+#%的護甲值也會套用至元素傷害",
      "ranges": [
       [
        38,
        43
       ]
      ],
      "tier": 2
     },
     {
      "name": "熱反射之",
      "ilvl": 81,
      "weight": 1000,
      "text": "+(44—50)%的護甲值也會套用至元素傷害",
      "template": "+#%的護甲值也會套用至元素傷害",
      "ranges": [
       [
        44,
        50
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "ChaosResistance",
    "tiers": [
     {
      "name": "失落之",
      "ilvl": 16,
      "weight": 250,
      "text": "+(4—7)%混沌抗性",
      "template": "+#%混沌抗性",
      "ranges": [
       [
        4,
        7
       ]
      ],
      "tier": 6
     },
     {
      "name": "放逐之",
      "ilvl": 30,
      "weight": 250,
      "text": "+(8—11)%混沌抗性",
      "template": "+#%混沌抗性",
      "ranges": [
       [
        8,
        11
       ]
      ],
      "tier": 5
     },
     {
      "name": "驅逐之",
      "ilvl": 44,
      "weight": 250,
      "text": "+(12—15)%混沌抗性",
      "template": "+#%混沌抗性",
      "ranges": [
       [
        12,
        15
       ]
      ],
      "tier": 4
     },
     {
      "name": "出境之",
      "ilvl": 56,
      "weight": 250,
      "text": "+(16—19)%混沌抗性",
      "template": "+#%混沌抗性",
      "ranges": [
       [
        16,
        19
       ]
      ],
      "tier": 3
     },
     {
      "name": "流亡之",
      "ilvl": 68,
      "weight": 250,
      "text": "+(20—23)%混沌抗性",
      "template": "+#%混沌抗性",
      "ranges": [
       [
        20,
        23
       ]
      ],
      "tier": 2
     },
     {
      "name": "巴曼斯之",
      "ilvl": 81,
      "weight": 250,
      "text": "+(24—27)%混沌抗性",
      "template": "+#%混沌抗性",
      "ranges": [
       [
        24,
        27
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "ColdResistance",
    "tiers": [
     {
      "name": "海豹之",
      "ilvl": 1,
      "weight": 1000,
      "text": "+(6—10)%冰冷抗性",
      "template": "+#%冰冷抗性",
      "ranges": [
       [
        6,
        10
       ]
      ],
      "tier": 8
     },
     {
      "name": "企鵝之",
      "ilvl": 14,
      "weight": 1000,
      "text": "+(11—15)%冰冷抗性",
      "template": "+#%冰冷抗性",
      "ranges": [
       [
        11,
        15
       ]
      ],
      "tier": 7
     },
     {
      "name": "獨角鯨之",
      "ilvl": 26,
      "weight": 1000,
      "text": "+(16—20)%冰冷抗性",
      "template": "+#%冰冷抗性",
      "ranges": [
       [
        16,
        20
       ]
      ],
      "tier": 6
     },
     {
      "name": "雪人之",
      "ilvl": 38,
      "weight": 1000,
      "text": "+(21—25)%冰冷抗性",
      "template": "+#%冰冷抗性",
      "ranges": [
       [
        21,
        25
       ]
      ],
      "tier": 5
     },
     {
      "name": "海象之",
      "ilvl": 50,
      "weight": 1000,
      "text": "+(26—30)%冰冷抗性",
      "template": "+#%冰冷抗性",
      "ranges": [
       [
        26,
        30
       ]
      ],
      "tier": 4
     },
     {
      "name": "北極熊之",
      "ilvl": 60,
      "weight": 1000,
      "text": "+(31—35)%冰冷抗性",
      "template": "+#%冰冷抗性",
      "ranges": [
       [
        31,
        35
       ]
      ],
      "tier": 3
     },
     {
      "name": "冰之",
      "ilvl": 71,
      "weight": 1000,
      "text": "+(36—40)%冰冷抗性",
      "template": "+#%冰冷抗性",
      "ranges": [
       [
        36,
        40
       ]
      ],
      "tier": 2
     },
     {
      "name": "哈斯特之",
      "ilvl": 82,
      "weight": 1000,
      "text": "+(41—45)%冰冷抗性",
      "template": "+#%冰冷抗性",
      "ranges": [
       [
        41,
        45
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "FireResistance",
    "tiers": [
     {
      "name": "幼龍之",
      "ilvl": 1,
      "weight": 1000,
      "text": "+(6—10)%火焰抗性",
      "template": "+#%火焰抗性",
      "ranges": [
       [
        6,
        10
       ]
      ],
      "tier": 8
     },
     {
      "name": "火蜥蜴之",
      "ilvl": 12,
      "weight": 1000,
      "text": "+(11—15)%火焰抗性",
      "template": "+#%火焰抗性",
      "ranges": [
       [
        11,
        15
       ]
      ],
      "tier": 7
     },
     {
      "name": "火龍之",
      "ilvl": 24,
      "weight": 1000,
      "text": "+(16—20)%火焰抗性",
      "template": "+#%火焰抗性",
      "ranges": [
       [
        16,
        20
       ]
      ],
      "tier": 6
     },
     {
      "name": "窯爐之",
      "ilvl": 36,
      "weight": 1000,
      "text": "+(21—25)%火焰抗性",
      "template": "+#%火焰抗性",
      "ranges": [
       [
        21,
        25
       ]
      ],
      "tier": 5
     },
     {
      "name": "爐火之",
      "ilvl": 48,
      "weight": 1000,
      "text": "+(26—30)%火焰抗性",
      "template": "+#%火焰抗性",
      "ranges": [
       [
        26,
        30
       ]
      ],
      "tier": 4
     },
     {
      "name": "火山之",
      "ilvl": 60,
      "weight": 1000,
      "text": "+(31—35)%火焰抗性",
      "template": "+#%火焰抗性",
      "ranges": [
       [
        31,
        35
       ]
      ],
      "tier": 3
     },
     {
      "name": "熔岩屏障之",
      "ilvl": 71,
      "weight": 1000,
      "text": "+(36—40)%火焰抗性",
      "template": "+#%火焰抗性",
      "ranges": [
       [
        36,
        40
       ]
      ],
      "tier": 2
     },
     {
      "name": "提耶須之",
      "ilvl": 82,
      "weight": 1000,
      "text": "+(41—45)%火焰抗性",
      "template": "+#%火焰抗性",
      "ranges": [
       [
        41,
        45
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "LifeRegeneration",
    "tiers": [
     {
      "name": "蠑螈之",
      "ilvl": 1,
      "weight": 1000,
      "text": "(1—2)每秒生命回復",
      "template": "#每秒生命回復",
      "ranges": [
       [
        1,
        2
       ]
      ],
      "tier": 11
     },
     {
      "name": "蜥蜴之",
      "ilvl": 5,
      "weight": 1000,
      "text": "(2.1—3)每秒生命回復",
      "template": "#每秒生命回復",
      "ranges": [
       [
        2.1,
        3
       ]
      ],
      "tier": 10
     },
     {
      "name": "阿扁蟲之",
      "ilvl": 11,
      "weight": 1000,
      "text": "(3.1—4)每秒生命回復",
      "template": "#每秒生命回復",
      "ranges": [
       [
        3.1,
        4
       ]
      ],
      "tier": 9
     },
     {
      "name": "海星之",
      "ilvl": 17,
      "weight": 1000,
      "text": "(4.1—6)每秒生命回復",
      "template": "#每秒生命回復",
      "ranges": [
       [
        4.1,
        6
       ]
      ],
      "tier": 8
     },
     {
      "name": "九頭蛇之",
      "ilvl": 26,
      "weight": 1000,
      "text": "(6.1—9)每秒生命回復",
      "template": "#每秒生命回復",
      "ranges": [
       [
        6.1,
        9
       ]
      ],
      "tier": 7
     },
     {
      "name": "食人之",
      "ilvl": 35,
      "weight": 1000,
      "text": "(9.1—13)每秒生命回復",
      "template": "#每秒生命回復",
      "ranges": [
       [
        9.1,
        13
       ]
      ],
      "tier": 6
     },
     {
      "name": "康復之",
      "ilvl": 47,
      "weight": 1000,
      "text": "(13.1—18)每秒生命回復",
      "template": "#每秒生命回復",
      "ranges": [
       [
        13.1,
        18
       ]
      ],
      "tier": 5
     },
     {
      "name": "療養之",
      "ilvl": 58,
      "weight": 1000,
      "text": "(18.1—23)每秒生命回復",
      "template": "#每秒生命回復",
      "ranges": [
       [
        18.1,
        23
       ]
      ],
      "tier": 4
     },
     {
      "name": "復興之",
      "ilvl": 68,
      "weight": 1000,
      "text": "(23.1—29)每秒生命回復",
      "template": "#每秒生命回復",
      "ranges": [
       [
        23.1,
        29
       ]
      ],
      "tier": 3
     },
     {
      "name": "不朽之",
      "ilvl": 75,
      "weight": 1000,
      "text": "(29.1—33)每秒生命回復",
      "template": "#每秒生命回復",
      "ranges": [
       [
        29.1,
        33
       ]
      ],
      "tier": 2
     },
     {
      "name": "鳳凰之",
      "ilvl": 81,
      "weight": 1000,
      "text": "(33.1—36)每秒生命回復",
      "template": "#每秒生命回復",
      "ranges": [
       [
        33.1,
        36
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "LightningResistance",
    "tiers": [
     {
      "name": "雲朵之",
      "ilvl": 1,
      "weight": 1000,
      "text": "+(6—10)%閃電抗性",
      "template": "+#%閃電抗性",
      "ranges": [
       [
        6,
        10
       ]
      ],
      "tier": 8
     },
     {
      "name": "冰雹之",
      "ilvl": 13,
      "weight": 1000,
      "text": "+(11—15)%閃電抗性",
      "template": "+#%閃電抗性",
      "ranges": [
       [
        11,
        15
       ]
      ],
      "tier": 7
     },
     {
      "name": "暴風之",
      "ilvl": 25,
      "weight": 1000,
      "text": "+(16—20)%閃電抗性",
      "template": "+#%閃電抗性",
      "ranges": [
       [
        16,
        20
       ]
      ],
      "tier": 6
     },
     {
      "name": "積雨雲之",
      "ilvl": 37,
      "weight": 1000,
      "text": "+(21—25)%閃電抗性",
      "template": "+#%閃電抗性",
      "ranges": [
       [
        21,
        25
       ]
      ],
      "tier": 5
     },
     {
      "name": "暴風雨之",
      "ilvl": 49,
      "weight": 1000,
      "text": "+(26—30)%閃電抗性",
      "template": "+#%閃電抗性",
      "ranges": [
       [
        26,
        30
       ]
      ],
      "tier": 4
     },
     {
      "name": "颱風之",
      "ilvl": 60,
      "weight": 1000,
      "text": "+(31—35)%閃電抗性",
      "template": "+#%閃電抗性",
      "ranges": [
       [
        31,
        35
       ]
      ],
      "tier": 3
     },
     {
      "name": "電之",
      "ilvl": 71,
      "weight": 1000,
      "text": "+(36—40)%閃電抗性",
      "template": "+#%閃電抗性",
      "ranges": [
       [
        36,
        40
       ]
      ],
      "tier": 2
     },
     {
      "name": "艾菲吉之",
      "ilvl": 82,
      "weight": 1000,
      "text": "+(41—45)%閃電抗性",
      "template": "+#%閃電抗性",
      "ranges": [
       [
        41,
        45
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "LocalAttributeRequirements",
    "tiers": [
     {
      "name": "值得之",
      "ilvl": 24,
      "weight": 900,
      "text": "減少15%能力值需求",
      "template": "減少#%能力值需求",
      "ranges": [
       [
        15,
        15
       ]
      ],
      "tier": 5
     },
     {
      "name": "容易之",
      "ilvl": 32,
      "weight": 900,
      "text": "減少20%能力值需求",
      "template": "減少#%能力值需求",
      "ranges": [
       [
        20,
        20
       ]
      ],
      "tier": 4
     },
     {
      "name": "長才之",
      "ilvl": 40,
      "weight": 900,
      "text": "減少25%能力值需求",
      "template": "減少#%能力值需求",
      "ranges": [
       [
        25,
        25
       ]
      ],
      "tier": 3
     },
     {
      "name": "高超之",
      "ilvl": 52,
      "weight": 900,
      "text": "減少30%能力值需求",
      "template": "減少#%能力值需求",
      "ranges": [
       [
        30,
        30
       ]
      ],
      "tier": 2
     },
     {
      "name": "熟習之",
      "ilvl": 60,
      "weight": 900,
      "text": "減少35%能力值需求",
      "template": "減少#%能力值需求",
      "ranges": [
       [
        35,
        35
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "ReducedAilmentDuration",
    "tiers": [
     {
      "name": "密封之",
      "ilvl": 21,
      "weight": 500,
      "text": "減少(36—40)%你身上的流血持續時間",
      "template": "減少#%你身上的流血持續時間",
      "ranges": [
       [
        36,
        40
       ]
      ],
      "tier": 15
     },
     {
      "name": "抗毒素之",
      "ilvl": 21,
      "weight": 500,
      "text": "減少(36—40)%你身上的中毒持續時間",
      "template": "減少#%你身上的中毒持續時間",
      "ranges": [
       [
        36,
        40
       ]
      ],
      "tier": 14
     },
     {
      "name": "阻尼之",
      "ilvl": 21,
      "weight": 500,
      "text": "減少(36—40)%你身上的點燃持續時間",
      "template": "減少#%你身上的點燃持續時間",
      "ranges": [
       [
        36,
        40
       ]
      ],
      "tier": 13
     },
     {
      "name": "緩解之",
      "ilvl": 37,
      "weight": 500,
      "text": "減少(41—45)%你身上的流血持續時間",
      "template": "減少#%你身上的流血持續時間",
      "ranges": [
       [
        41,
        45
       ]
      ],
      "tier": 12
     },
     {
      "name": "補救措施之",
      "ilvl": 37,
      "weight": 500,
      "text": "減少(41—45)%你身上的中毒持續時間",
      "template": "減少#%你身上的中毒持續時間",
      "ranges": [
       [
        41,
        45
       ]
      ],
      "tier": 11
     },
     {
      "name": "鎮壓之",
      "ilvl": 37,
      "weight": 500,
      "text": "減少(41—45)%你身上的點燃持續時間",
      "template": "減少#%你身上的點燃持續時間",
      "ranges": [
       [
        41,
        45
       ]
      ],
      "tier": 10
     },
     {
      "name": "緩和之",
      "ilvl": 50,
      "weight": 500,
      "text": "減少(46—50)%你身上的流血持續時間",
      "template": "減少#%你身上的流血持續時間",
      "ranges": [
       [
        46,
        50
       ]
      ],
      "tier": 9
     },
     {
      "name": "治癒之",
      "ilvl": 50,
      "weight": 500,
      "text": "減少(46—50)%你身上的中毒持續時間",
      "template": "減少#%你身上的中毒持續時間",
      "ranges": [
       [
        46,
        50
       ]
      ],
      "tier": 8
     },
     {
      "name": "驚魂之",
      "ilvl": 50,
      "weight": 500,
      "text": "減少(46—50)%你身上的點燃持續時間",
      "template": "減少#%你身上的點燃持續時間",
      "ranges": [
       [
        46,
        50
       ]
      ],
      "tier": 7
     },
     {
      "name": "安撫之",
      "ilvl": 64,
      "weight": 500,
      "text": "減少(51—55)%你身上的流血持續時間",
      "template": "減少#%你身上的流血持續時間",
      "ranges": [
       [
        51,
        55
       ]
      ],
      "tier": 6
     },
     {
      "name": "萬靈丹之",
      "ilvl": 64,
      "weight": 500,
      "text": "減少(51—55)%你身上的中毒持續時間",
      "template": "減少#%你身上的中毒持續時間",
      "ranges": [
       [
        51,
        55
       ]
      ],
      "tier": 5
     },
     {
      "name": "淬火之",
      "ilvl": 64,
      "weight": 500,
      "text": "減少(51—55)%你身上的點燃持續時間",
      "template": "減少#%你身上的點燃持續時間",
      "ranges": [
       [
        51,
        55
       ]
      ],
      "tier": 4
     },
     {
      "name": "止血之",
      "ilvl": 76,
      "weight": 500,
      "text": "減少(56—60)%你身上的流血持續時間",
      "template": "減少#%你身上的流血持續時間",
      "ranges": [
       [
        56,
        60
       ]
      ],
      "tier": 3
     },
     {
      "name": "解藥之",
      "ilvl": 76,
      "weight": 500,
      "text": "減少(56—60)%你身上的中毒持續時間",
      "template": "減少#%你身上的中毒持續時間",
      "ranges": [
       [
        56,
        60
       ]
      ],
      "tier": 2
     },
     {
      "name": "澆熄之",
      "ilvl": 76,
      "weight": 500,
      "text": "減少(56—60)%你身上的點燃持續時間",
      "template": "減少#%你身上的點燃持續時間",
      "ranges": [
       [
        56,
        60
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "Strength",
    "tiers": [
     {
      "name": "野蠻之",
      "ilvl": 1,
      "weight": 1000,
      "text": "+(5—8)點力量",
      "template": "+#點力量",
      "ranges": [
       [
        5,
        8
       ]
      ],
      "tier": 8
     },
     {
      "name": "摔角手之",
      "ilvl": 11,
      "weight": 1000,
      "text": "+(9—12)點力量",
      "template": "+#點力量",
      "ranges": [
       [
        9,
        12
       ]
      ],
      "tier": 7
     },
     {
      "name": "熊之",
      "ilvl": 22,
      "weight": 1000,
      "text": "+(13—16)點力量",
      "template": "+#點力量",
      "ranges": [
       [
        13,
        16
       ]
      ],
      "tier": 6
     },
     {
      "name": "獅子之",
      "ilvl": 33,
      "weight": 1000,
      "text": "+(17—20)點力量",
      "template": "+#點力量",
      "ranges": [
       [
        17,
        20
       ]
      ],
      "tier": 5
     },
     {
      "name": "大猩猩之",
      "ilvl": 44,
      "weight": 1000,
      "text": "+(21—24)點力量",
      "template": "+#點力量",
      "ranges": [
       [
        21,
        24
       ]
      ],
      "tier": 4
     },
     {
      "name": "巨人之",
      "ilvl": 55,
      "weight": 1000,
      "text": "+(25—27)點力量",
      "template": "+#點力量",
      "ranges": [
       [
        25,
        27
       ]
      ],
      "tier": 3
     },
     {
      "name": "海獸之",
      "ilvl": 66,
      "weight": 1000,
      "text": "+(28—30)點力量",
      "template": "+#點力量",
      "ranges": [
       [
        28,
        30
       ]
      ],
      "tier": 2
     },
     {
      "name": "泰坦之",
      "ilvl": 74,
      "weight": 1000,
      "text": "+(31—33)點力量",
      "template": "+#點力量",
      "ranges": [
       [
        31,
        33
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "StunThreshold",
    "tiers": [
     {
      "name": "厚皮之",
      "ilvl": 1,
      "weight": 800,
      "text": "暈眩門檻+(6—11)",
      "template": "暈眩門檻+#",
      "ranges": [
       [
        6,
        11
       ]
      ],
      "tier": 10
     },
     {
      "name": "韌膚之",
      "ilvl": 8,
      "weight": 800,
      "text": "暈眩門檻+(12—29)",
      "template": "暈眩門檻+#",
      "ranges": [
       [
        12,
        29
       ]
      ],
      "tier": 9
     },
     {
      "name": "石皮之",
      "ilvl": 15,
      "weight": 800,
      "text": "暈眩門檻+(30—49)",
      "template": "暈眩門檻+#",
      "ranges": [
       [
        30,
        49
       ]
      ],
      "tier": 8
     },
     {
      "name": "金屬皮之",
      "ilvl": 22,
      "weight": 800,
      "text": "暈眩門檻+(50—72)",
      "template": "暈眩門檻+#",
      "ranges": [
       [
        50,
        72
       ]
      ],
      "tier": 7
     },
     {
      "name": "鋼皮之",
      "ilvl": 29,
      "weight": 800,
      "text": "暈眩門檻+(73—97)",
      "template": "暈眩門檻+#",
      "ranges": [
       [
        73,
        97
       ]
      ],
      "tier": 6
     },
     {
      "name": "石膚之",
      "ilvl": 36,
      "weight": 800,
      "text": "暈眩門檻+(98—124)",
      "template": "暈眩門檻+#",
      "ranges": [
       [
        98,
        124
       ]
      ],
      "tier": 5
     },
     {
      "name": "鉑膚之",
      "ilvl": 45,
      "weight": 800,
      "text": "暈眩門檻+(125—163)",
      "template": "暈眩門檻+#",
      "ranges": [
       [
        125,
        163
       ]
      ],
      "tier": 4
     },
     {
      "name": "金剛皮之",
      "ilvl": 54,
      "weight": 800,
      "text": "暈眩門檻+(164—206)",
      "template": "暈眩門檻+#",
      "ranges": [
       [
        164,
        206
       ]
      ],
      "tier": 3
     },
     {
      "name": "玉皮之",
      "ilvl": 63,
      "weight": 800,
      "text": "暈眩門檻+(207—253)",
      "template": "暈眩門檻+#",
      "ranges": [
       [
        207,
        253
       ]
      ],
      "tier": 2
     },
     {
      "name": "曜膚之",
      "ilvl": 72,
      "weight": 800,
      "text": "暈眩門檻+(254—304)",
      "template": "暈眩門檻+#",
      "ranges": [
       [
        254,
        304
       ]
      ],
      "tier": 1
     }
    ]
   }
  ]
 },
 "Body_Armours_dex": {
  "prefix": [
   {
    "family": "BaseLocalDefences",
    "tiers": [
     {
      "name": "敏捷的",
      "ilvl": 1,
      "weight": 1000,
      "text": "+(11—18)閃避值",
      "template": "+#閃避值",
      "ranges": [
       [
        11,
        18
       ]
      ],
      "tier": 11
     },
     {
      "name": "舞者的",
      "ilvl": 8,
      "weight": 1000,
      "text": "+(19—46)閃避值",
      "template": "+#閃避值",
      "ranges": [
       [
        19,
        46
       ]
      ],
      "tier": 10
     },
     {
      "name": "雜技的",
      "ilvl": 16,
      "weight": 1000,
      "text": "+(47—66)閃避值",
      "template": "+#閃避值",
      "ranges": [
       [
        47,
        66
       ]
      ],
      "tier": 9
     },
     {
      "name": "飄忽的",
      "ilvl": 25,
      "weight": 1000,
      "text": "+(67—87)閃避值",
      "template": "+#閃避值",
      "ranges": [
       [
        67,
        87
       ]
      ],
      "tier": 8
     },
     {
      "name": "模糊的",
      "ilvl": 33,
      "weight": 1000,
      "text": "+(88—116)閃避值",
      "template": "+#閃避值",
      "ranges": [
       [
        88,
        116
       ]
      ],
      "tier": 7
     },
     {
      "name": "相位的",
      "ilvl": 46,
      "weight": 1000,
      "text": "+(117—146)閃避值",
      "template": "+#閃避值",
      "ranges": [
       [
        117,
        146
       ]
      ],
      "tier": 6
     },
     {
      "name": "氣態的",
      "ilvl": 54,
      "weight": 1000,
      "text": "+(147—176)閃避值",
      "template": "+#閃避值",
      "ranges": [
       [
        147,
        176
       ]
      ],
      "tier": 5
     },
     {
      "name": "難以捉摸的",
      "ilvl": 60,
      "weight": 1000,
      "text": "+(177—207)閃避值",
      "template": "+#閃避值",
      "ranges": [
       [
        177,
        207
       ]
      ],
      "tier": 4
     },
     {
      "name": "熟練的",
      "ilvl": 65,
      "weight": 1000,
      "text": "+(208—234)閃避值",
      "template": "+#閃避值",
      "ranges": [
       [
        208,
        234
       ]
      ],
      "tier": 3
     },
     {
      "name": "柔軟的",
      "ilvl": 75,
      "weight": 1000,
      "text": "+(235—261)閃避值",
      "template": "+#閃避值",
      "ranges": [
       [
        235,
        261
       ]
      ],
      "tier": 2
     },
     {
      "name": "逃亡的",
      "ilvl": 79,
      "weight": 1000,
      "text": "+(262—300)閃避值",
      "template": "+#閃避值",
      "ranges": [
       [
        262,
        300
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "BaseLocalDefencesAndDefencePercent",
    "tiers": [
     {
      "name": "黑斑羚的",
      "ilvl": 8,
      "weight": 1000,
      "text": "+(4—6)閃避值增加(6—13)%閃避值",
      "template": "+#閃避值增加#%閃避值",
      "ranges": [
       [
        4,
        6
       ],
       [
        6,
        13
       ]
      ],
      "tier": 6
     },
     {
      "name": "公羊的",
      "ilvl": 16,
      "weight": 1000,
      "text": "+(7—26)閃避值增加(14—20)%閃避值",
      "template": "+#閃避值增加#%閃避值",
      "ranges": [
       [
        7,
        26
       ],
       [
        14,
        20
       ]
      ],
      "tier": 5
     },
     {
      "name": "駝鹿的",
      "ilvl": 33,
      "weight": 1000,
      "text": "+(27—38)閃避值增加(21—26)%閃避值",
      "template": "+#閃避值增加#%閃避值",
      "ranges": [
       [
        27,
        38
       ],
       [
        21,
        26
       ]
      ],
      "tier": 4
     },
     {
      "name": "鹿的",
      "ilvl": 46,
      "weight": 1000,
      "text": "+(39—53)閃避值增加(27—32)%閃避值",
      "template": "+#閃避值增加#%閃避值",
      "ranges": [
       [
        39,
        53
       ],
       [
        27,
        32
       ]
      ],
      "tier": 3
     },
     {
      "name": "馴鹿的",
      "ilvl": 60,
      "weight": 1000,
      "text": "+(54—70)閃避值增加(33—38)%閃避值",
      "template": "+#閃避值增加#%閃避值",
      "ranges": [
       [
        54,
        70
       ],
       [
        33,
        38
       ]
      ],
      "tier": 2
     },
     {
      "name": "羚羊的",
      "ilvl": 78,
      "weight": 1000,
      "text": "+(71—90)閃避值增加(39—42)%閃避值",
      "template": "+#閃避值增加#%閃避值",
      "ranges": [
       [
        71,
        90
       ],
       [
        39,
        42
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "BaseLocalDefencesAndLife",
    "tiers": [
     {
      "name": "跳蚤的",
      "ilvl": 8,
      "weight": 1000,
      "text": "增加(6—13)%閃避值+(7—10)最大生命",
      "template": "增加#%閃避值+#最大生命",
      "ranges": [
       [
        6,
        13
       ],
       [
        7,
        10
       ]
      ],
      "tier": 6
     },
     {
      "name": "幼鹿的",
      "ilvl": 16,
      "weight": 1000,
      "text": "增加(14—20)%閃避值+(11—19)最大生命",
      "template": "增加#%閃避值+#最大生命",
      "ranges": [
       [
        14,
        20
       ],
       [
        11,
        19
       ]
      ],
      "tier": 5
     },
     {
      "name": "巨角羊的",
      "ilvl": 33,
      "weight": 1000,
      "text": "增加(21—26)%閃避值+(20—25)最大生命",
      "template": "增加#%閃避值+#最大生命",
      "ranges": [
       [
        21,
        26
       ],
       [
        20,
        25
       ]
      ],
      "tier": 4
     },
     {
      "name": "公羊的",
      "ilvl": 46,
      "weight": 1000,
      "text": "增加(27—32)%閃避值+(26—32)最大生命",
      "template": "增加#%閃避值+#最大生命",
      "ranges": [
       [
        27,
        32
       ],
       [
        26,
        32
       ]
      ],
      "tier": 3
     },
     {
      "name": "山羊的",
      "ilvl": 60,
      "weight": 1000,
      "text": "增加(33—38)%閃避值+(33—41)最大生命",
      "template": "增加#%閃避值+#最大生命",
      "ranges": [
       [
        33,
        38
       ],
       [
        33,
        41
       ]
      ],
      "tier": 2
     },
     {
      "name": "雄鹿的",
      "ilvl": 78,
      "weight": 1000,
      "text": "增加(39—42)%閃避值+(42—49)最大生命",
      "template": "增加#%閃避值+#最大生命",
      "ranges": [
       [
        39,
        42
       ],
       [
        42,
        49
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "BaseSpirit",
    "tiers": [
     {
      "name": "淑女的",
      "ilvl": 16,
      "weight": 500,
      "text": "+(30—33)精魂",
      "template": "+#精魂",
      "ranges": [
       [
        30,
        33
       ]
      ],
      "tier": 8
     },
     {
      "name": "女爵的",
      "ilvl": 25,
      "weight": 500,
      "text": "+(34—37)精魂",
      "template": "+#精魂",
      "ranges": [
       [
        34,
        37
       ]
      ],
      "tier": 7
     },
     {
      "name": "女子爵的",
      "ilvl": 33,
      "weight": 500,
      "text": "+(38—42)精魂",
      "template": "+#精魂",
      "ranges": [
       [
        38,
        42
       ]
      ],
      "tier": 6
     },
     {
      "name": "子爵夫人的",
      "ilvl": 46,
      "weight": 500,
      "text": "+(43—46)精魂",
      "template": "+#精魂",
      "ranges": [
       [
        43,
        46
       ]
      ],
      "tier": 5
     },
     {
      "name": "伯爵夫人的",
      "ilvl": 54,
      "weight": 400,
      "text": "+(47—50)精魂",
      "template": "+#精魂",
      "ranges": [
       [
        47,
        50
       ]
      ],
      "tier": 4
     },
     {
      "name": "公爵夫人的",
      "ilvl": 60,
      "weight": 300,
      "text": "+(51—53)精魂",
      "template": "+#精魂",
      "ranges": [
       [
        51,
        53
       ]
      ],
      "tier": 3
     },
     {
      "name": "公主的",
      "ilvl": 65,
      "weight": 200,
      "text": "+(54—56)精魂",
      "template": "+#精魂",
      "ranges": [
       [
        54,
        56
       ]
      ],
      "tier": 2
     },
     {
      "name": "女皇的",
      "ilvl": 78,
      "weight": 100,
      "text": "+(57—61)精魂",
      "template": "+#精魂",
      "ranges": [
       [
        57,
        61
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "DefencesPercent",
    "tiers": [
     {
      "name": "陰暗的",
      "ilvl": 2,
      "weight": 1000,
      "text": "增加(15—26)%閃避值",
      "template": "增加#%閃避值",
      "ranges": [
       [
        15,
        26
       ]
      ],
      "tier": 8
     },
     {
      "name": "鬼魂的",
      "ilvl": 16,
      "weight": 1000,
      "text": "增加(27—42)%閃避值",
      "template": "增加#%閃避值",
      "ranges": [
       [
        27,
        42
       ]
      ],
      "tier": 7
     },
     {
      "name": "幽魂的",
      "ilvl": 33,
      "weight": 1000,
      "text": "增加(43—55)%閃避值",
      "template": "增加#%閃避值",
      "ranges": [
       [
        43,
        55
       ]
      ],
      "tier": 6
     },
     {
      "name": "幽靈的",
      "ilvl": 46,
      "weight": 1000,
      "text": "增加(56—67)%閃避值",
      "template": "增加#%閃避值",
      "ranges": [
       [
        56,
        67
       ]
      ],
      "tier": 5
     },
     {
      "name": "幻象的",
      "ilvl": 54,
      "weight": 1000,
      "text": "增加(68—79)%閃避值",
      "template": "增加#%閃避值",
      "ranges": [
       [
        68,
        79
       ]
      ],
      "tier": 4
     },
     {
      "name": "夢魘的",
      "ilvl": 60,
      "weight": 1000,
      "text": "增加(80—91)%閃避值",
      "template": "增加#%閃避值",
      "ranges": [
       [
        80,
        91
       ]
      ],
      "tier": 3
     },
     {
      "name": "幻象的",
      "ilvl": 65,
      "weight": 1000,
      "text": "增加(92—100)%閃避值",
      "template": "增加#%閃避值",
      "ranges": [
       [
        92,
        100
       ]
      ],
      "tier": 2
     },
     {
      "name": "幻影的",
      "ilvl": 75,
      "weight": 1000,
      "text": "增加(101—110)%閃避值",
      "template": "增加#%閃避值",
      "ranges": [
       [
        101,
        110
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "IncreasedLife",
    "tiers": [
     {
      "name": "健壯之",
      "ilvl": 1,
      "weight": 1000,
      "text": "+(10—19)最大生命",
      "template": "+#最大生命",
      "ranges": [
       [
        10,
        19
       ]
      ],
      "tier": 13
     },
     {
      "name": "健康的",
      "ilvl": 6,
      "weight": 1000,
      "text": "+(20—29)最大生命",
      "template": "+#最大生命",
      "ranges": [
       [
        20,
        29
       ]
      ],
      "tier": 12
     },
     {
      "name": "樂觀的",
      "ilvl": 16,
      "weight": 1000,
      "text": "+(30—39)最大生命",
      "template": "+#最大生命",
      "ranges": [
       [
        30,
        39
       ]
      ],
      "tier": 11
     },
     {
      "name": "堅信的",
      "ilvl": 24,
      "weight": 1000,
      "text": "+(40—59)最大生命",
      "template": "+#最大生命",
      "ranges": [
       [
        40,
        59
       ]
      ],
      "tier": 10
     },
     {
      "name": "堅毅者",
      "ilvl": 33,
      "weight": 1000,
      "text": "+(60—69)最大生命",
      "template": "+#最大生命",
      "ranges": [
       [
        60,
        69
       ]
      ],
      "tier": 9
     },
     {
      "name": "健壯的",
      "ilvl": 38,
      "weight": 1000,
      "text": "+(70—84)最大生命",
      "template": "+#最大生命",
      "ranges": [
       [
        70,
        84
       ]
      ],
      "tier": 8
     },
     {
      "name": "豐腴的",
      "ilvl": 46,
      "weight": 1000,
      "text": "+(85—99)最大生命",
      "template": "+#最大生命",
      "ranges": [
       [
        85,
        99
       ]
      ],
      "tier": 7
     },
     {
      "name": "陽剛的",
      "ilvl": 54,
      "weight": 1000,
      "text": "+(100—119)最大生命",
      "template": "+#最大生命",
      "ranges": [
       [
        100,
        119
       ]
      ],
      "tier": 6
     },
     {
      "name": "運動員的",
      "ilvl": 60,
      "weight": 1000,
      "text": "+(120—149)最大生命",
      "template": "+#最大生命",
      "ranges": [
       [
        120,
        149
       ]
      ],
      "tier": 5
     },
     {
      "name": "豐饒的",
      "ilvl": 65,
      "weight": 1000,
      "text": "+(150—174)最大生命",
      "template": "+#最大生命",
      "ranges": [
       [
        150,
        174
       ]
      ],
      "tier": 4
     },
     {
      "name": "蓬勃的",
      "ilvl": 70,
      "weight": 1000,
      "text": "+(175—189)最大生命",
      "template": "+#最大生命",
      "ranges": [
       [
        175,
        189
       ]
      ],
      "tier": 3
     },
     {
      "name": "狂喜的",
      "ilvl": 75,
      "weight": 1000,
      "text": "+(190—199)最大生命",
      "template": "+#最大生命",
      "ranges": [
       [
        190,
        199
       ]
      ],
      "tier": 2
     },
     {
      "name": "重要的",
      "ilvl": 80,
      "weight": 1000,
      "text": "+(200—214)最大生命",
      "template": "+#最大生命",
      "ranges": [
       [
        200,
        214
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "Thorns",
    "tiers": [
     {
      "name": "多刺的",
      "ilvl": 1,
      "weight": 1000,
      "text": "(1—2)至(3—4)點物理荊棘傷害",
      "template": "#至#點物理荊棘傷害",
      "ranges": [
       [
        1,
        2
       ],
       [
        3,
        4
       ]
      ],
      "tier": 7
     },
     {
      "name": "帶刺的",
      "ilvl": 10,
      "weight": 1000,
      "text": "(5—7)至(7—10)點物理荊棘傷害",
      "template": "#至#點物理荊棘傷害",
      "ranges": [
       [
        5,
        7
       ],
       [
        7,
        10
       ]
      ],
      "tier": 6
     },
     {
      "name": "尖刺的",
      "ilvl": 19,
      "weight": 1000,
      "text": "(11—16)至(17—23)點物理荊棘傷害",
      "template": "#至#點物理荊棘傷害",
      "ranges": [
       [
        11,
        16
       ],
       [
        17,
        23
       ]
      ],
      "tier": 5
     },
     {
      "name": "尖銳的",
      "ilvl": 38,
      "weight": 1000,
      "text": "(24—35)至(36—53)點物理荊棘傷害",
      "template": "#至#點物理荊棘傷害",
      "ranges": [
       [
        24,
        35
       ],
       [
        36,
        53
       ]
      ],
      "tier": 4
     },
     {
      "name": "尖刺",
      "ilvl": 48,
      "weight": 1000,
      "text": "(40—60)至(61—92)點物理荊棘傷害",
      "template": "#至#點物理荊棘傷害",
      "ranges": [
       [
        40,
        60
       ],
       [
        61,
        92
       ]
      ],
      "tier": 3
     },
     {
      "name": "尖刃",
      "ilvl": 63,
      "weight": 1000,
      "text": "(64—97)至(98—145)點物理荊棘傷害",
      "template": "#至#點物理荊棘傷害",
      "ranges": [
       [
        64,
        97
       ],
       [
        98,
        145
       ]
      ],
      "tier": 2
     },
     {
      "name": "鋸齒的",
      "ilvl": 74,
      "weight": 1000,
      "text": "(101—151)至(152—220)點物理荊棘傷害",
      "template": "#至#點物理荊棘傷害",
      "ranges": [
       [
        101,
        151
       ],
       [
        152,
        220
       ]
      ],
      "tier": 1
     }
    ]
   }
  ],
  "suffix": [
   {
    "family": "ChaosResistance",
    "tiers": [
     {
      "name": "失落之",
      "ilvl": 16,
      "weight": 250,
      "text": "+(4—7)%混沌抗性",
      "template": "+#%混沌抗性",
      "ranges": [
       [
        4,
        7
       ]
      ],
      "tier": 6
     },
     {
      "name": "放逐之",
      "ilvl": 30,
      "weight": 250,
      "text": "+(8—11)%混沌抗性",
      "template": "+#%混沌抗性",
      "ranges": [
       [
        8,
        11
       ]
      ],
      "tier": 5
     },
     {
      "name": "驅逐之",
      "ilvl": 44,
      "weight": 250,
      "text": "+(12—15)%混沌抗性",
      "template": "+#%混沌抗性",
      "ranges": [
       [
        12,
        15
       ]
      ],
      "tier": 4
     },
     {
      "name": "出境之",
      "ilvl": 56,
      "weight": 250,
      "text": "+(16—19)%混沌抗性",
      "template": "+#%混沌抗性",
      "ranges": [
       [
        16,
        19
       ]
      ],
      "tier": 3
     },
     {
      "name": "流亡之",
      "ilvl": 68,
      "weight": 250,
      "text": "+(20—23)%混沌抗性",
      "template": "+#%混沌抗性",
      "ranges": [
       [
        20,
        23
       ]
      ],
      "tier": 2
     },
     {
      "name": "巴曼斯之",
      "ilvl": 81,
      "weight": 250,
      "text": "+(24—27)%混沌抗性",
      "template": "+#%混沌抗性",
      "ranges": [
       [
        24,
        27
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "ColdResistance",
    "tiers": [
     {
      "name": "海豹之",
      "ilvl": 1,
      "weight": 1000,
      "text": "+(6—10)%冰冷抗性",
      "template": "+#%冰冷抗性",
      "ranges": [
       [
        6,
        10
       ]
      ],
      "tier": 8
     },
     {
      "name": "企鵝之",
      "ilvl": 14,
      "weight": 1000,
      "text": "+(11—15)%冰冷抗性",
      "template": "+#%冰冷抗性",
      "ranges": [
       [
        11,
        15
       ]
      ],
      "tier": 7
     },
     {
      "name": "獨角鯨之",
      "ilvl": 26,
      "weight": 1000,
      "text": "+(16—20)%冰冷抗性",
      "template": "+#%冰冷抗性",
      "ranges": [
       [
        16,
        20
       ]
      ],
      "tier": 6
     },
     {
      "name": "雪人之",
      "ilvl": 38,
      "weight": 1000,
      "text": "+(21—25)%冰冷抗性",
      "template": "+#%冰冷抗性",
      "ranges": [
       [
        21,
        25
       ]
      ],
      "tier": 5
     },
     {
      "name": "海象之",
      "ilvl": 50,
      "weight": 1000,
      "text": "+(26—30)%冰冷抗性",
      "template": "+#%冰冷抗性",
      "ranges": [
       [
        26,
        30
       ]
      ],
      "tier": 4
     },
     {
      "name": "北極熊之",
      "ilvl": 60,
      "weight": 1000,
      "text": "+(31—35)%冰冷抗性",
      "template": "+#%冰冷抗性",
      "ranges": [
       [
        31,
        35
       ]
      ],
      "tier": 3
     },
     {
      "name": "冰之",
      "ilvl": 71,
      "weight": 1000,
      "text": "+(36—40)%冰冷抗性",
      "template": "+#%冰冷抗性",
      "ranges": [
       [
        36,
        40
       ]
      ],
      "tier": 2
     },
     {
      "name": "哈斯特之",
      "ilvl": 82,
      "weight": 1000,
      "text": "+(41—45)%冰冷抗性",
      "template": "+#%冰冷抗性",
      "ranges": [
       [
        41,
        45
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "Dexterity",
    "tiers": [
     {
      "name": "貓鼬之",
      "ilvl": 1,
      "weight": 1000,
      "text": "+(5—8)點敏捷",
      "template": "+#點敏捷",
      "ranges": [
       [
        5,
        8
       ]
      ],
      "tier": 8
     },
     {
      "name": "山貓之",
      "ilvl": 11,
      "weight": 1000,
      "text": "+(9—12)點敏捷",
      "template": "+#點敏捷",
      "ranges": [
       [
        9,
        12
       ]
      ],
      "tier": 7
     },
     {
      "name": "狐狸之",
      "ilvl": 22,
      "weight": 1000,
      "text": "+(13—16)點敏捷",
      "template": "+#點敏捷",
      "ranges": [
       [
        13,
        16
       ]
      ],
      "tier": 6
     },
     {
      "name": "獵鷹之",
      "ilvl": 33,
      "weight": 1000,
      "text": "+(17—20)點敏捷",
      "template": "+#點敏捷",
      "ranges": [
       [
        17,
        20
       ]
      ],
      "tier": 5
     },
     {
      "name": "豹之",
      "ilvl": 44,
      "weight": 1000,
      "text": "+(21—24)點敏捷",
      "template": "+#點敏捷",
      "ranges": [
       [
        21,
        24
       ]
      ],
      "tier": 4
     },
     {
      "name": "花豹之",
      "ilvl": 55,
      "weight": 1000,
      "text": "+(25—27)點敏捷",
      "template": "+#點敏捷",
      "ranges": [
       [
        25,
        27
       ]
      ],
      "tier": 3
     },
     {
      "name": "美洲豹之",
      "ilvl": 66,
      "weight": 1000,
      "text": "+(28—30)點敏捷",
      "template": "+#點敏捷",
      "ranges": [
       [
        28,
        30
       ]
      ],
      "tier": 2
     },
     {
      "name": "幻影之",
      "ilvl": 74,
      "weight": 1000,
      "text": "+(31—33)點敏捷",
      "template": "+#點敏捷",
      "ranges": [
       [
        31,
        33
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "EvasionAppliesToDeflection",
    "tiers": [
     {
      "name": "偏斜之",
      "ilvl": 1,
      "weight": 1000,
      "text": "獲得等同(8—11)%閃避值的偏斜值",
      "template": "獲得等同#%閃避值的偏斜值",
      "ranges": [
       [
        8,
        11
       ]
      ],
      "tier": 6
     },
     {
      "name": "彎折之",
      "ilvl": 16,
      "weight": 1000,
      "text": "獲得等同(12—14)%閃避值的偏斜值",
      "template": "獲得等同#%閃避值的偏斜值",
      "ranges": [
       [
        12,
        14
       ]
      ],
      "tier": 5
     },
     {
      "name": "彎曲之",
      "ilvl": 36,
      "weight": 1000,
      "text": "獲得等同(15—17)%閃避值的偏斜值",
      "template": "獲得等同#%閃避值的偏斜值",
      "ranges": [
       [
        15,
        17
       ]
      ],
      "tier": 4
     },
     {
      "name": "繞行之",
      "ilvl": 48,
      "weight": 1000,
      "text": "獲得等同(18—20)%閃避值的偏斜值",
      "template": "獲得等同#%閃避值的偏斜值",
      "ranges": [
       [
        18,
        20
       ]
      ],
      "tier": 3
     },
     {
      "name": "屈曲之",
      "ilvl": 66,
      "weight": 1000,
      "text": "獲得等同(21—23)%閃避值的偏斜值",
      "template": "獲得等同#%閃避值的偏斜值",
      "ranges": [
       [
        21,
        23
       ]
      ],
      "tier": 2
     },
     {
      "name": "扭曲之",
      "ilvl": 81,
      "weight": 1000,
      "text": "獲得等同(24—26)%閃避值的偏斜值",
      "template": "獲得等同#%閃避值的偏斜值",
      "ranges": [
       [
        24,
        26
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "FireResistance",
    "tiers": [
     {
      "name": "幼龍之",
      "ilvl": 1,
      "weight": 1000,
      "text": "+(6—10)%火焰抗性",
      "template": "+#%火焰抗性",
      "ranges": [
       [
        6,
        10
       ]
      ],
      "tier": 8
     },
     {
      "name": "火蜥蜴之",
      "ilvl": 12,
      "weight": 1000,
      "text": "+(11—15)%火焰抗性",
      "template": "+#%火焰抗性",
      "ranges": [
       [
        11,
        15
       ]
      ],
      "tier": 7
     },
     {
      "name": "火龍之",
      "ilvl": 24,
      "weight": 1000,
      "text": "+(16—20)%火焰抗性",
      "template": "+#%火焰抗性",
      "ranges": [
       [
        16,
        20
       ]
      ],
      "tier": 6
     },
     {
      "name": "窯爐之",
      "ilvl": 36,
      "weight": 1000,
      "text": "+(21—25)%火焰抗性",
      "template": "+#%火焰抗性",
      "ranges": [
       [
        21,
        25
       ]
      ],
      "tier": 5
     },
     {
      "name": "爐火之",
      "ilvl": 48,
      "weight": 1000,
      "text": "+(26—30)%火焰抗性",
      "template": "+#%火焰抗性",
      "ranges": [
       [
        26,
        30
       ]
      ],
      "tier": 4
     },
     {
      "name": "火山之",
      "ilvl": 60,
      "weight": 1000,
      "text": "+(31—35)%火焰抗性",
      "template": "+#%火焰抗性",
      "ranges": [
       [
        31,
        35
       ]
      ],
      "tier": 3
     },
     {
      "name": "熔岩屏障之",
      "ilvl": 71,
      "weight": 1000,
      "text": "+(36—40)%火焰抗性",
      "template": "+#%火焰抗性",
      "ranges": [
       [
        36,
        40
       ]
      ],
      "tier": 2
     },
     {
      "name": "提耶須之",
      "ilvl": 82,
      "weight": 1000,
      "text": "+(41—45)%火焰抗性",
      "template": "+#%火焰抗性",
      "ranges": [
       [
        41,
        45
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "LifeRegeneration",
    "tiers": [
     {
      "name": "蠑螈之",
      "ilvl": 1,
      "weight": 1000,
      "text": "(1—2)每秒生命回復",
      "template": "#每秒生命回復",
      "ranges": [
       [
        1,
        2
       ]
      ],
      "tier": 11
     },
     {
      "name": "蜥蜴之",
      "ilvl": 5,
      "weight": 1000,
      "text": "(2.1—3)每秒生命回復",
      "template": "#每秒生命回復",
      "ranges": [
       [
        2.1,
        3
       ]
      ],
      "tier": 10
     },
     {
      "name": "阿扁蟲之",
      "ilvl": 11,
      "weight": 1000,
      "text": "(3.1—4)每秒生命回復",
      "template": "#每秒生命回復",
      "ranges": [
       [
        3.1,
        4
       ]
      ],
      "tier": 9
     },
     {
      "name": "海星之",
      "ilvl": 17,
      "weight": 1000,
      "text": "(4.1—6)每秒生命回復",
      "template": "#每秒生命回復",
      "ranges": [
       [
        4.1,
        6
       ]
      ],
      "tier": 8
     },
     {
      "name": "九頭蛇之",
      "ilvl": 26,
      "weight": 1000,
      "text": "(6.1—9)每秒生命回復",
      "template": "#每秒生命回復",
      "ranges": [
       [
        6.1,
        9
       ]
      ],
      "tier": 7
     },
     {
      "name": "食人之",
      "ilvl": 35,
      "weight": 1000,
      "text": "(9.1—13)每秒生命回復",
      "template": "#每秒生命回復",
      "ranges": [
       [
        9.1,
        13
       ]
      ],
      "tier": 6
     },
     {
      "name": "康復之",
      "ilvl": 47,
      "weight": 1000,
      "text": "(13.1—18)每秒生命回復",
      "template": "#每秒生命回復",
      "ranges": [
       [
        13.1,
        18
       ]
      ],
      "tier": 5
     },
     {
      "name": "療養之",
      "ilvl": 58,
      "weight": 1000,
      "text": "(18.1—23)每秒生命回復",
      "template": "#每秒生命回復",
      "ranges": [
       [
        18.1,
        23
       ]
      ],
      "tier": 4
     },
     {
      "name": "復興之",
      "ilvl": 68,
      "weight": 1000,
      "text": "(23.1—29)每秒生命回復",
      "template": "#每秒生命回復",
      "ranges": [
       [
        23.1,
        29
       ]
      ],
      "tier": 3
     },
     {
      "name": "不朽之",
      "ilvl": 75,
      "weight": 1000,
      "text": "(29.1—33)每秒生命回復",
      "template": "#每秒生命回復",
      "ranges": [
       [
        29.1,
        33
       ]
      ],
      "tier": 2
     },
     {
      "name": "鳳凰之",
      "ilvl": 81,
      "weight": 1000,
      "text": "(33.1—36)每秒生命回復",
      "template": "#每秒生命回復",
      "ranges": [
       [
        33.1,
        36
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "LightningResistance",
    "tiers": [
     {
      "name": "雲朵之",
      "ilvl": 1,
      "weight": 1000,
      "text": "+(6—10)%閃電抗性",
      "template": "+#%閃電抗性",
      "ranges": [
       [
        6,
        10
       ]
      ],
      "tier": 8
     },
     {
      "name": "冰雹之",
      "ilvl": 13,
      "weight": 1000,
      "text": "+(11—15)%閃電抗性",
      "template": "+#%閃電抗性",
      "ranges": [
       [
        11,
        15
       ]
      ],
      "tier": 7
     },
     {
      "name": "暴風之",
      "ilvl": 25,
      "weight": 1000,
      "text": "+(16—20)%閃電抗性",
      "template": "+#%閃電抗性",
      "ranges": [
       [
        16,
        20
       ]
      ],
      "tier": 6
     },
     {
      "name": "積雨雲之",
      "ilvl": 37,
      "weight": 1000,
      "text": "+(21—25)%閃電抗性",
      "template": "+#%閃電抗性",
      "ranges": [
       [
        21,
        25
       ]
      ],
      "tier": 5
     },
     {
      "name": "暴風雨之",
      "ilvl": 49,
      "weight": 1000,
      "text": "+(26—30)%閃電抗性",
      "template": "+#%閃電抗性",
      "ranges": [
       [
        26,
        30
       ]
      ],
      "tier": 4
     },
     {
      "name": "颱風之",
      "ilvl": 60,
      "weight": 1000,
      "text": "+(31—35)%閃電抗性",
      "template": "+#%閃電抗性",
      "ranges": [
       [
        31,
        35
       ]
      ],
      "tier": 3
     },
     {
      "name": "電之",
      "ilvl": 71,
      "weight": 1000,
      "text": "+(36—40)%閃電抗性",
      "template": "+#%閃電抗性",
      "ranges": [
       [
        36,
        40
       ]
      ],
      "tier": 2
     },
     {
      "name": "艾菲吉之",
      "ilvl": 82,
      "weight": 1000,
      "text": "+(41—45)%閃電抗性",
      "template": "+#%閃電抗性",
      "ranges": [
       [
        41,
        45
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "LocalAttributeRequirements",
    "tiers": [
     {
      "name": "值得之",
      "ilvl": 24,
      "weight": 900,
      "text": "減少15%能力值需求",
      "template": "減少#%能力值需求",
      "ranges": [
       [
        15,
        15
       ]
      ],
      "tier": 5
     },
     {
      "name": "容易之",
      "ilvl": 32,
      "weight": 900,
      "text": "減少20%能力值需求",
      "template": "減少#%能力值需求",
      "ranges": [
       [
        20,
        20
       ]
      ],
      "tier": 4
     },
     {
      "name": "長才之",
      "ilvl": 40,
      "weight": 900,
      "text": "減少25%能力值需求",
      "template": "減少#%能力值需求",
      "ranges": [
       [
        25,
        25
       ]
      ],
      "tier": 3
     },
     {
      "name": "高超之",
      "ilvl": 52,
      "weight": 900,
      "text": "減少30%能力值需求",
      "template": "減少#%能力值需求",
      "ranges": [
       [
        30,
        30
       ]
      ],
      "tier": 2
     },
     {
      "name": "熟習之",
      "ilvl": 60,
      "weight": 900,
      "text": "減少35%能力值需求",
      "template": "減少#%能力值需求",
      "ranges": [
       [
        35,
        35
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "ReducedAilmentDuration",
    "tiers": [
     {
      "name": "密封之",
      "ilvl": 21,
      "weight": 500,
      "text": "減少(36—40)%你身上的流血持續時間",
      "template": "減少#%你身上的流血持續時間",
      "ranges": [
       [
        36,
        40
       ]
      ],
      "tier": 15
     },
     {
      "name": "抗毒素之",
      "ilvl": 21,
      "weight": 500,
      "text": "減少(36—40)%你身上的中毒持續時間",
      "template": "減少#%你身上的中毒持續時間",
      "ranges": [
       [
        36,
        40
       ]
      ],
      "tier": 14
     },
     {
      "name": "阻尼之",
      "ilvl": 21,
      "weight": 500,
      "text": "減少(36—40)%你身上的點燃持續時間",
      "template": "減少#%你身上的點燃持續時間",
      "ranges": [
       [
        36,
        40
       ]
      ],
      "tier": 13
     },
     {
      "name": "緩解之",
      "ilvl": 37,
      "weight": 500,
      "text": "減少(41—45)%你身上的流血持續時間",
      "template": "減少#%你身上的流血持續時間",
      "ranges": [
       [
        41,
        45
       ]
      ],
      "tier": 12
     },
     {
      "name": "補救措施之",
      "ilvl": 37,
      "weight": 500,
      "text": "減少(41—45)%你身上的中毒持續時間",
      "template": "減少#%你身上的中毒持續時間",
      "ranges": [
       [
        41,
        45
       ]
      ],
      "tier": 11
     },
     {
      "name": "鎮壓之",
      "ilvl": 37,
      "weight": 500,
      "text": "減少(41—45)%你身上的點燃持續時間",
      "template": "減少#%你身上的點燃持續時間",
      "ranges": [
       [
        41,
        45
       ]
      ],
      "tier": 10
     },
     {
      "name": "緩和之",
      "ilvl": 50,
      "weight": 500,
      "text": "減少(46—50)%你身上的流血持續時間",
      "template": "減少#%你身上的流血持續時間",
      "ranges": [
       [
        46,
        50
       ]
      ],
      "tier": 9
     },
     {
      "name": "治癒之",
      "ilvl": 50,
      "weight": 500,
      "text": "減少(46—50)%你身上的中毒持續時間",
      "template": "減少#%你身上的中毒持續時間",
      "ranges": [
       [
        46,
        50
       ]
      ],
      "tier": 8
     },
     {
      "name": "驚魂之",
      "ilvl": 50,
      "weight": 500,
      "text": "減少(46—50)%你身上的點燃持續時間",
      "template": "減少#%你身上的點燃持續時間",
      "ranges": [
       [
        46,
        50
       ]
      ],
      "tier": 7
     },
     {
      "name": "安撫之",
      "ilvl": 64,
      "weight": 500,
      "text": "減少(51—55)%你身上的流血持續時間",
      "template": "減少#%你身上的流血持續時間",
      "ranges": [
       [
        51,
        55
       ]
      ],
      "tier": 6
     },
     {
      "name": "萬靈丹之",
      "ilvl": 64,
      "weight": 500,
      "text": "減少(51—55)%你身上的中毒持續時間",
      "template": "減少#%你身上的中毒持續時間",
      "ranges": [
       [
        51,
        55
       ]
      ],
      "tier": 5
     },
     {
      "name": "淬火之",
      "ilvl": 64,
      "weight": 500,
      "text": "減少(51—55)%你身上的點燃持續時間",
      "template": "減少#%你身上的點燃持續時間",
      "ranges": [
       [
        51,
        55
       ]
      ],
      "tier": 4
     },
     {
      "name": "止血之",
      "ilvl": 76,
      "weight": 500,
      "text": "減少(56—60)%你身上的流血持續時間",
      "template": "減少#%你身上的流血持續時間",
      "ranges": [
       [
        56,
        60
       ]
      ],
      "tier": 3
     },
     {
      "name": "解藥之",
      "ilvl": 76,
      "weight": 500,
      "text": "減少(56—60)%你身上的中毒持續時間",
      "template": "減少#%你身上的中毒持續時間",
      "ranges": [
       [
        56,
        60
       ]
      ],
      "tier": 2
     },
     {
      "name": "澆熄之",
      "ilvl": 76,
      "weight": 500,
      "text": "減少(56—60)%你身上的點燃持續時間",
      "template": "減少#%你身上的點燃持續時間",
      "ranges": [
       [
        56,
        60
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "StunThreshold",
    "tiers": [
     {
      "name": "厚皮之",
      "ilvl": 1,
      "weight": 800,
      "text": "暈眩門檻+(6—11)",
      "template": "暈眩門檻+#",
      "ranges": [
       [
        6,
        11
       ]
      ],
      "tier": 10
     },
     {
      "name": "韌膚之",
      "ilvl": 8,
      "weight": 800,
      "text": "暈眩門檻+(12—29)",
      "template": "暈眩門檻+#",
      "ranges": [
       [
        12,
        29
       ]
      ],
      "tier": 9
     },
     {
      "name": "石皮之",
      "ilvl": 15,
      "weight": 800,
      "text": "暈眩門檻+(30—49)",
      "template": "暈眩門檻+#",
      "ranges": [
       [
        30,
        49
       ]
      ],
      "tier": 8
     },
     {
      "name": "金屬皮之",
      "ilvl": 22,
      "weight": 800,
      "text": "暈眩門檻+(50—72)",
      "template": "暈眩門檻+#",
      "ranges": [
       [
        50,
        72
       ]
      ],
      "tier": 7
     },
     {
      "name": "鋼皮之",
      "ilvl": 29,
      "weight": 800,
      "text": "暈眩門檻+(73—97)",
      "template": "暈眩門檻+#",
      "ranges": [
       [
        73,
        97
       ]
      ],
      "tier": 6
     },
     {
      "name": "石膚之",
      "ilvl": 36,
      "weight": 800,
      "text": "暈眩門檻+(98—124)",
      "template": "暈眩門檻+#",
      "ranges": [
       [
        98,
        124
       ]
      ],
      "tier": 5
     },
     {
      "name": "鉑膚之",
      "ilvl": 45,
      "weight": 800,
      "text": "暈眩門檻+(125—163)",
      "template": "暈眩門檻+#",
      "ranges": [
       [
        125,
        163
       ]
      ],
      "tier": 4
     },
     {
      "name": "金剛皮之",
      "ilvl": 54,
      "weight": 800,
      "text": "暈眩門檻+(164—206)",
      "template": "暈眩門檻+#",
      "ranges": [
       [
        164,
        206
       ]
      ],
      "tier": 3
     },
     {
      "name": "玉皮之",
      "ilvl": 63,
      "weight": 800,
      "text": "暈眩門檻+(207—253)",
      "template": "暈眩門檻+#",
      "ranges": [
       [
        207,
        253
       ]
      ],
      "tier": 2
     },
     {
      "name": "曜膚之",
      "ilvl": 72,
      "weight": 800,
      "text": "暈眩門檻+(254—304)",
      "template": "暈眩門檻+#",
      "ranges": [
       [
        254,
        304
       ]
      ],
      "tier": 1
     }
    ]
   }
  ]
 },
 "Body_Armours_int": {
  "prefix": [
   {
    "family": "BaseLocalDefences",
    "tiers": [
     {
      "name": "發光的",
      "ilvl": 1,
      "weight": 1000,
      "text": "+(10—17)最大能量護盾",
      "template": "+#最大能量護盾",
      "ranges": [
       [
        10,
        17
       ]
      ],
      "tier": 11
     },
     {
      "name": "微光的",
      "ilvl": 8,
      "weight": 1000,
      "text": "+(18—24)最大能量護盾",
      "template": "+#最大能量護盾",
      "ranges": [
       [
        18,
        24
       ]
      ],
      "tier": 10
     },
     {
      "name": "閃閃發亮的",
      "ilvl": 16,
      "weight": 1000,
      "text": "+(25—30)最大能量護盾",
      "template": "+#最大能量護盾",
      "ranges": [
       [
        25,
        30
       ]
      ],
      "tier": 9
     },
     {
      "name": "泛光的",
      "ilvl": 25,
      "weight": 1000,
      "text": "+(31—35)最大能量護盾",
      "template": "+#最大能量護盾",
      "ranges": [
       [
        31,
        35
       ]
      ],
      "tier": 8
     },
     {
      "name": "輻射的",
      "ilvl": 33,
      "weight": 1000,
      "text": "+(36—41)最大能量護盾",
      "template": "+#最大能量護盾",
      "ranges": [
       [
        36,
        41
       ]
      ],
      "tier": 7
     },
     {
      "name": "脈衝的",
      "ilvl": 46,
      "weight": 1000,
      "text": "+(42—47)最大能量護盾",
      "template": "+#最大能量護盾",
      "ranges": [
       [
        42,
        47
       ]
      ],
      "tier": 6
     },
     {
      "name": "熾烈的",
      "ilvl": 54,
      "weight": 1000,
      "text": "+(48—60)最大能量護盾",
      "template": "+#最大能量護盾",
      "ranges": [
       [
        48,
        60
       ]
      ],
      "tier": 5
     },
     {
      "name": "眩目的",
      "ilvl": 60,
      "weight": 1000,
      "text": "+(61—73)最大能量護盾",
      "template": "+#最大能量護盾",
      "ranges": [
       [
        61,
        73
       ]
      ],
      "tier": 4
     },
     {
      "name": "奪目的",
      "ilvl": 65,
      "weight": 1000,
      "text": "+(74—80)最大能量護盾",
      "template": "+#最大能量護盾",
      "ranges": [
       [
        74,
        80
       ]
      ],
      "tier": 3
     },
     {
      "name": "熾焰的",
      "ilvl": 70,
      "weight": 1000,
      "text": "+(81—90)最大能量護盾",
      "template": "+#最大能量護盾",
      "ranges": [
       [
        81,
        90
       ]
      ],
      "tier": 2
     },
     {
      "name": "燦爛的",
      "ilvl": 79,
      "weight": 1000,
      "text": "+(91—96)最大能量護盾",
      "template": "+#最大能量護盾",
      "ranges": [
       [
        91,
        96
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "BaseLocalDefencesAndDefencePercent",
    "tiers": [
     {
      "name": "執事的",
      "ilvl": 8,
      "weight": 1000,
      "text": "+(4—7)最大能量護盾增加(6—13)%能量護盾",
      "template": "+#最大能量護盾增加#%能量護盾",
      "ranges": [
       [
        4,
        7
       ],
       [
        6,
        13
       ]
      ],
      "tier": 6
     },
     {
      "name": "紅衣主教的",
      "ilvl": 16,
      "weight": 1000,
      "text": "+(8—13)最大能量護盾增加(14—20)%能量護盾",
      "template": "+#最大能量護盾增加#%能量護盾",
      "ranges": [
       [
        8,
        13
       ],
       [
        14,
        20
       ]
      ],
      "tier": 5
     },
     {
      "name": "牧師的",
      "ilvl": 33,
      "weight": 1000,
      "text": "+(14—16)最大能量護盾增加(21—26)%能量護盾",
      "template": "+#最大能量護盾增加#%能量護盾",
      "ranges": [
       [
        14,
        16
       ],
       [
        21,
        26
       ]
      ],
      "tier": 4
     },
     {
      "name": "神聖主教的",
      "ilvl": 46,
      "weight": 1000,
      "text": "+(17—20)最大能量護盾增加(27—32)%能量護盾",
      "template": "+#最大能量護盾增加#%能量護盾",
      "ranges": [
       [
        17,
        20
       ],
       [
        27,
        32
       ]
      ],
      "tier": 3
     },
     {
      "name": "執政官的",
      "ilvl": 60,
      "weight": 1000,
      "text": "+(21—25)最大能量護盾增加(33—38)%能量護盾",
      "template": "+#最大能量護盾增加#%能量護盾",
      "ranges": [
       [
        21,
        25
       ],
       [
        33,
        38
       ]
      ],
      "tier": 2
     },
     {
      "name": "神聖的",
      "ilvl": 78,
      "weight": 1000,
      "text": "+(26—30)最大能量護盾增加(39—42)%能量護盾",
      "template": "+#最大能量護盾增加#%能量護盾",
      "ranges": [
       [
        26,
        30
       ],
       [
        39,
        42
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "BaseLocalDefencesAndLife",
    "tiers": [
     {
      "name": "僧侶之",
      "ilvl": 8,
      "weight": 1000,
      "text": "增加(6—13)%能量護盾+(7—10)最大生命",
      "template": "增加#%能量護盾+#最大生命",
      "ranges": [
       [
        6,
        13
       ],
       [
        7,
        10
       ]
      ],
      "tier": 6
     },
     {
      "name": "院長的",
      "ilvl": 16,
      "weight": 1000,
      "text": "增加(14—20)%能量護盾+(11—19)最大生命",
      "template": "增加#%能量護盾+#最大生命",
      "ranges": [
       [
        14,
        20
       ],
       [
        11,
        19
       ]
      ],
      "tier": 5
     },
     {
      "name": "住持的",
      "ilvl": 33,
      "weight": 1000,
      "text": "增加(21—26)%能量護盾+(20—25)最大生命",
      "template": "增加#%能量護盾+#最大生命",
      "ranges": [
       [
        21,
        26
       ],
       [
        20,
        25
       ]
      ],
      "tier": 4
     },
     {
      "name": "主教的",
      "ilvl": 46,
      "weight": 1000,
      "text": "增加(27—32)%能量護盾+(26—32)最大生命",
      "template": "增加#%能量護盾+#最大生命",
      "ranges": [
       [
        27,
        32
       ],
       [
        26,
        32
       ]
      ],
      "tier": 3
     },
     {
      "name": "總督的",
      "ilvl": 60,
      "weight": 1000,
      "text": "增加(33—38)%能量護盾+(33—41)最大生命",
      "template": "增加#%能量護盾+#最大生命",
      "ranges": [
       [
        33,
        38
       ],
       [
        33,
        41
       ]
      ],
      "tier": 2
     },
     {
      "name": "教宗的",
      "ilvl": 78,
      "weight": 1000,
      "text": "增加(39—42)%能量護盾+(42—49)最大生命",
      "template": "增加#%能量護盾+#最大生命",
      "ranges": [
       [
        39,
        42
       ],
       [
        42,
        49
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "BaseSpirit",
    "tiers": [
     {
      "name": "淑女的",
      "ilvl": 16,
      "weight": 500,
      "text": "+(30—33)精魂",
      "template": "+#精魂",
      "ranges": [
       [
        30,
        33
       ]
      ],
      "tier": 8
     },
     {
      "name": "女爵的",
      "ilvl": 25,
      "weight": 500,
      "text": "+(34—37)精魂",
      "template": "+#精魂",
      "ranges": [
       [
        34,
        37
       ]
      ],
      "tier": 7
     },
     {
      "name": "女子爵的",
      "ilvl": 33,
      "weight": 500,
      "text": "+(38—42)精魂",
      "template": "+#精魂",
      "ranges": [
       [
        38,
        42
       ]
      ],
      "tier": 6
     },
     {
      "name": "子爵夫人的",
      "ilvl": 46,
      "weight": 500,
      "text": "+(43—46)精魂",
      "template": "+#精魂",
      "ranges": [
       [
        43,
        46
       ]
      ],
      "tier": 5
     },
     {
      "name": "伯爵夫人的",
      "ilvl": 54,
      "weight": 400,
      "text": "+(47—50)精魂",
      "template": "+#精魂",
      "ranges": [
       [
        47,
        50
       ]
      ],
      "tier": 4
     },
     {
      "name": "公爵夫人的",
      "ilvl": 60,
      "weight": 300,
      "text": "+(51—53)精魂",
      "template": "+#精魂",
      "ranges": [
       [
        51,
        53
       ]
      ],
      "tier": 3
     },
     {
      "name": "公主的",
      "ilvl": 65,
      "weight": 200,
      "text": "+(54—56)精魂",
      "template": "+#精魂",
      "ranges": [
       [
        54,
        56
       ]
      ],
      "tier": 2
     },
     {
      "name": "女皇的",
      "ilvl": 78,
      "weight": 100,
      "text": "+(57—61)精魂",
      "template": "+#精魂",
      "ranges": [
       [
        57,
        61
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "DefencesPercent",
    "tiers": [
     {
      "name": "保護的",
      "ilvl": 2,
      "weight": 1000,
      "text": "增加(15—26)%能量護盾",
      "template": "增加#%能量護盾",
      "ranges": [
       [
        15,
        26
       ]
      ],
      "tier": 8
     },
     {
      "name": "意志堅強的",
      "ilvl": 16,
      "weight": 1000,
      "text": "增加(27—42)%能量護盾",
      "template": "增加#%能量護盾",
      "ranges": [
       [
        27,
        42
       ]
      ],
      "tier": 7
     },
     {
      "name": "堅決的",
      "ilvl": 33,
      "weight": 1000,
      "text": "增加(43—55)%能量護盾",
      "template": "增加#%能量護盾",
      "ranges": [
       [
        43,
        55
       ]
      ],
      "tier": 6
     },
     {
      "name": "無懼的",
      "ilvl": 46,
      "weight": 1000,
      "text": "增加(56—67)%能量護盾",
      "template": "增加#%能量護盾",
      "ranges": [
       [
        56,
        67
       ]
      ],
      "tier": 5
     },
     {
      "name": "無畏的",
      "ilvl": 54,
      "weight": 1000,
      "text": "增加(68—79)%能量護盾",
      "template": "增加#%能量護盾",
      "ranges": [
       [
        68,
        79
       ]
      ],
      "tier": 4
     },
     {
      "name": "無法征服的",
      "ilvl": 60,
      "weight": 1000,
      "text": "增加(80—91)%能量護盾",
      "template": "增加#%能量護盾",
      "ranges": [
       [
        80,
        91
       ]
      ],
      "tier": 3
     },
     {
      "name": "攻不可破的",
      "ilvl": 65,
      "weight": 1000,
      "text": "增加(92—100)%能量護盾",
      "template": "增加#%能量護盾",
      "ranges": [
       [
        92,
        100
       ]
      ],
      "tier": 2
     },
     {
      "name": "堅定的",
      "ilvl": 75,
      "weight": 1000,
      "text": "增加(101—110)%能量護盾",
      "template": "增加#%能量護盾",
      "ranges": [
       [
        101,
        110
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "IncreasedLife",
    "tiers": [
     {
      "name": "健壯之",
      "ilvl": 1,
      "weight": 1000,
      "text": "+(10—19)最大生命",
      "template": "+#最大生命",
      "ranges": [
       [
        10,
        19
       ]
      ],
      "tier": 13
     },
     {
      "name": "健康的",
      "ilvl": 6,
      "weight": 1000,
      "text": "+(20—29)最大生命",
      "template": "+#最大生命",
      "ranges": [
       [
        20,
        29
       ]
      ],
      "tier": 12
     },
     {
      "name": "樂觀的",
      "ilvl": 16,
      "weight": 1000,
      "text": "+(30—39)最大生命",
      "template": "+#最大生命",
      "ranges": [
       [
        30,
        39
       ]
      ],
      "tier": 11
     },
     {
      "name": "堅信的",
      "ilvl": 24,
      "weight": 1000,
      "text": "+(40—59)最大生命",
      "template": "+#最大生命",
      "ranges": [
       [
        40,
        59
       ]
      ],
      "tier": 10
     },
     {
      "name": "堅毅者",
      "ilvl": 33,
      "weight": 1000,
      "text": "+(60—69)最大生命",
      "template": "+#最大生命",
      "ranges": [
       [
        60,
        69
       ]
      ],
      "tier": 9
     },
     {
      "name": "健壯的",
      "ilvl": 38,
      "weight": 1000,
      "text": "+(70—84)最大生命",
      "template": "+#最大生命",
      "ranges": [
       [
        70,
        84
       ]
      ],
      "tier": 8
     },
     {
      "name": "豐腴的",
      "ilvl": 46,
      "weight": 1000,
      "text": "+(85—99)最大生命",
      "template": "+#最大生命",
      "ranges": [
       [
        85,
        99
       ]
      ],
      "tier": 7
     },
     {
      "name": "陽剛的",
      "ilvl": 54,
      "weight": 1000,
      "text": "+(100—119)最大生命",
      "template": "+#最大生命",
      "ranges": [
       [
        100,
        119
       ]
      ],
      "tier": 6
     },
     {
      "name": "運動員的",
      "ilvl": 60,
      "weight": 1000,
      "text": "+(120—149)最大生命",
      "template": "+#最大生命",
      "ranges": [
       [
        120,
        149
       ]
      ],
      "tier": 5
     },
     {
      "name": "豐饒的",
      "ilvl": 65,
      "weight": 1000,
      "text": "+(150—174)最大生命",
      "template": "+#最大生命",
      "ranges": [
       [
        150,
        174
       ]
      ],
      "tier": 4
     },
     {
      "name": "蓬勃的",
      "ilvl": 70,
      "weight": 1000,
      "text": "+(175—189)最大生命",
      "template": "+#最大生命",
      "ranges": [
       [
        175,
        189
       ]
      ],
      "tier": 3
     },
     {
      "name": "狂喜的",
      "ilvl": 75,
      "weight": 1000,
      "text": "+(190—199)最大生命",
      "template": "+#最大生命",
      "ranges": [
       [
        190,
        199
       ]
      ],
      "tier": 2
     },
     {
      "name": "重要的",
      "ilvl": 80,
      "weight": 1000,
      "text": "+(200—214)最大生命",
      "template": "+#最大生命",
      "ranges": [
       [
        200,
        214
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "Thorns",
    "tiers": [
     {
      "name": "多刺的",
      "ilvl": 1,
      "weight": 1000,
      "text": "(1—2)至(3—4)點物理荊棘傷害",
      "template": "#至#點物理荊棘傷害",
      "ranges": [
       [
        1,
        2
       ],
       [
        3,
        4
       ]
      ],
      "tier": 7
     },
     {
      "name": "帶刺的",
      "ilvl": 10,
      "weight": 1000,
      "text": "(5—7)至(7—10)點物理荊棘傷害",
      "template": "#至#點物理荊棘傷害",
      "ranges": [
       [
        5,
        7
       ],
       [
        7,
        10
       ]
      ],
      "tier": 6
     },
     {
      "name": "尖刺的",
      "ilvl": 19,
      "weight": 1000,
      "text": "(11—16)至(17—23)點物理荊棘傷害",
      "template": "#至#點物理荊棘傷害",
      "ranges": [
       [
        11,
        16
       ],
       [
        17,
        23
       ]
      ],
      "tier": 5
     },
     {
      "name": "尖銳的",
      "ilvl": 38,
      "weight": 1000,
      "text": "(24—35)至(36—53)點物理荊棘傷害",
      "template": "#至#點物理荊棘傷害",
      "ranges": [
       [
        24,
        35
       ],
       [
        36,
        53
       ]
      ],
      "tier": 4
     },
     {
      "name": "尖刺",
      "ilvl": 48,
      "weight": 1000,
      "text": "(40—60)至(61—92)點物理荊棘傷害",
      "template": "#至#點物理荊棘傷害",
      "ranges": [
       [
        40,
        60
       ],
       [
        61,
        92
       ]
      ],
      "tier": 3
     },
     {
      "name": "尖刃",
      "ilvl": 63,
      "weight": 1000,
      "text": "(64—97)至(98—145)點物理荊棘傷害",
      "template": "#至#點物理荊棘傷害",
      "ranges": [
       [
        64,
        97
       ],
       [
        98,
        145
       ]
      ],
      "tier": 2
     },
     {
      "name": "鋸齒的",
      "ilvl": 74,
      "weight": 1000,
      "text": "(101—151)至(152—220)點物理荊棘傷害",
      "template": "#至#點物理荊棘傷害",
      "ranges": [
       [
        101,
        151
       ],
       [
        152,
        220
       ]
      ],
      "tier": 1
     }
    ]
   }
  ],
  "suffix": [
   {
    "family": "ChaosResistance",
    "tiers": [
     {
      "name": "失落之",
      "ilvl": 16,
      "weight": 250,
      "text": "+(4—7)%混沌抗性",
      "template": "+#%混沌抗性",
      "ranges": [
       [
        4,
        7
       ]
      ],
      "tier": 6
     },
     {
      "name": "放逐之",
      "ilvl": 30,
      "weight": 250,
      "text": "+(8—11)%混沌抗性",
      "template": "+#%混沌抗性",
      "ranges": [
       [
        8,
        11
       ]
      ],
      "tier": 5
     },
     {
      "name": "驅逐之",
      "ilvl": 44,
      "weight": 250,
      "text": "+(12—15)%混沌抗性",
      "template": "+#%混沌抗性",
      "ranges": [
       [
        12,
        15
       ]
      ],
      "tier": 4
     },
     {
      "name": "出境之",
      "ilvl": 56,
      "weight": 250,
      "text": "+(16—19)%混沌抗性",
      "template": "+#%混沌抗性",
      "ranges": [
       [
        16,
        19
       ]
      ],
      "tier": 3
     },
     {
      "name": "流亡之",
      "ilvl": 68,
      "weight": 250,
      "text": "+(20—23)%混沌抗性",
      "template": "+#%混沌抗性",
      "ranges": [
       [
        20,
        23
       ]
      ],
      "tier": 2
     },
     {
      "name": "巴曼斯之",
      "ilvl": 81,
      "weight": 250,
      "text": "+(24—27)%混沌抗性",
      "template": "+#%混沌抗性",
      "ranges": [
       [
        24,
        27
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "ColdResistance",
    "tiers": [
     {
      "name": "海豹之",
      "ilvl": 1,
      "weight": 1000,
      "text": "+(6—10)%冰冷抗性",
      "template": "+#%冰冷抗性",
      "ranges": [
       [
        6,
        10
       ]
      ],
      "tier": 8
     },
     {
      "name": "企鵝之",
      "ilvl": 14,
      "weight": 1000,
      "text": "+(11—15)%冰冷抗性",
      "template": "+#%冰冷抗性",
      "ranges": [
       [
        11,
        15
       ]
      ],
      "tier": 7
     },
     {
      "name": "獨角鯨之",
      "ilvl": 26,
      "weight": 1000,
      "text": "+(16—20)%冰冷抗性",
      "template": "+#%冰冷抗性",
      "ranges": [
       [
        16,
        20
       ]
      ],
      "tier": 6
     },
     {
      "name": "雪人之",
      "ilvl": 38,
      "weight": 1000,
      "text": "+(21—25)%冰冷抗性",
      "template": "+#%冰冷抗性",
      "ranges": [
       [
        21,
        25
       ]
      ],
      "tier": 5
     },
     {
      "name": "海象之",
      "ilvl": 50,
      "weight": 1000,
      "text": "+(26—30)%冰冷抗性",
      "template": "+#%冰冷抗性",
      "ranges": [
       [
        26,
        30
       ]
      ],
      "tier": 4
     },
     {
      "name": "北極熊之",
      "ilvl": 60,
      "weight": 1000,
      "text": "+(31—35)%冰冷抗性",
      "template": "+#%冰冷抗性",
      "ranges": [
       [
        31,
        35
       ]
      ],
      "tier": 3
     },
     {
      "name": "冰之",
      "ilvl": 71,
      "weight": 1000,
      "text": "+(36—40)%冰冷抗性",
      "template": "+#%冰冷抗性",
      "ranges": [
       [
        36,
        40
       ]
      ],
      "tier": 2
     },
     {
      "name": "哈斯特之",
      "ilvl": 82,
      "weight": 1000,
      "text": "+(41—45)%冰冷抗性",
      "template": "+#%冰冷抗性",
      "ranges": [
       [
        41,
        45
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "EnergyShieldRegeneration",
    "tiers": [
     {
      "name": "緩衝之",
      "ilvl": 48,
      "weight": 1,
      "text": "增加(16—19)%能量護盾充能率",
      "template": "增加#%能量護盾充能率",
      "ranges": [
       [
        16,
        19
       ]
      ],
      "tier": 3
     },
     {
      "name": "熱情之",
      "ilvl": 66,
      "weight": 1,
      "text": "增加(20—23)%能量護盾充能率",
      "template": "增加#%能量護盾充能率",
      "ranges": [
       [
        20,
        23
       ]
      ],
      "tier": 2
     },
     {
      "name": "遍布之",
      "ilvl": 81,
      "weight": 1,
      "text": "增加(24—27)%能量護盾充能率",
      "template": "增加#%能量護盾充能率",
      "ranges": [
       [
        24,
        27
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "FireResistance",
    "tiers": [
     {
      "name": "幼龍之",
      "ilvl": 1,
      "weight": 1000,
      "text": "+(6—10)%火焰抗性",
      "template": "+#%火焰抗性",
      "ranges": [
       [
        6,
        10
       ]
      ],
      "tier": 8
     },
     {
      "name": "火蜥蜴之",
      "ilvl": 12,
      "weight": 1000,
      "text": "+(11—15)%火焰抗性",
      "template": "+#%火焰抗性",
      "ranges": [
       [
        11,
        15
       ]
      ],
      "tier": 7
     },
     {
      "name": "火龍之",
      "ilvl": 24,
      "weight": 1000,
      "text": "+(16—20)%火焰抗性",
      "template": "+#%火焰抗性",
      "ranges": [
       [
        16,
        20
       ]
      ],
      "tier": 6
     },
     {
      "name": "窯爐之",
      "ilvl": 36,
      "weight": 1000,
      "text": "+(21—25)%火焰抗性",
      "template": "+#%火焰抗性",
      "ranges": [
       [
        21,
        25
       ]
      ],
      "tier": 5
     },
     {
      "name": "爐火之",
      "ilvl": 48,
      "weight": 1000,
      "text": "+(26—30)%火焰抗性",
      "template": "+#%火焰抗性",
      "ranges": [
       [
        26,
        30
       ]
      ],
      "tier": 4
     },
     {
      "name": "火山之",
      "ilvl": 60,
      "weight": 1000,
      "text": "+(31—35)%火焰抗性",
      "template": "+#%火焰抗性",
      "ranges": [
       [
        31,
        35
       ]
      ],
      "tier": 3
     },
     {
      "name": "熔岩屏障之",
      "ilvl": 71,
      "weight": 1000,
      "text": "+(36—40)%火焰抗性",
      "template": "+#%火焰抗性",
      "ranges": [
       [
        36,
        40
       ]
      ],
      "tier": 2
     },
     {
      "name": "提耶須之",
      "ilvl": 82,
      "weight": 1000,
      "text": "+(41—45)%火焰抗性",
      "template": "+#%火焰抗性",
      "ranges": [
       [
        41,
        45
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "Intelligence",
    "tiers": [
     {
      "name": "瞳孔之",
      "ilvl": 1,
      "weight": 1000,
      "text": "+(5—8)點智慧",
      "template": "+#點智慧",
      "ranges": [
       [
        5,
        8
       ]
      ],
      "tier": 8
     },
     {
      "name": "學徒之",
      "ilvl": 11,
      "weight": 1000,
      "text": "+(9—12)點智慧",
      "template": "+#點智慧",
      "ranges": [
       [
        9,
        12
       ]
      ],
      "tier": 7
     },
     {
      "name": "奇才之",
      "ilvl": 22,
      "weight": 1000,
      "text": "+(13—16)點智慧",
      "template": "+#點智慧",
      "ranges": [
       [
        13,
        16
       ]
      ],
      "tier": 6
     },
     {
      "name": "預言之",
      "ilvl": 33,
      "weight": 1000,
      "text": "+(17—20)點智慧",
      "template": "+#點智慧",
      "ranges": [
       [
        17,
        20
       ]
      ],
      "tier": 5
     },
     {
      "name": "哲學家之",
      "ilvl": 44,
      "weight": 1000,
      "text": "+(21—24)點智慧",
      "template": "+#點智慧",
      "ranges": [
       [
        21,
        24
       ]
      ],
      "tier": 4
     },
     {
      "name": "聖人之",
      "ilvl": 55,
      "weight": 1000,
      "text": "+(25—27)點智慧",
      "template": "+#點智慧",
      "ranges": [
       [
        25,
        27
       ]
      ],
      "tier": 3
     },
     {
      "name": "大學者之",
      "ilvl": 66,
      "weight": 1000,
      "text": "+(28—30)點智慧",
      "template": "+#點智慧",
      "ranges": [
       [
        28,
        30
       ]
      ],
      "tier": 2
     },
     {
      "name": "神技之",
      "ilvl": 74,
      "weight": 1000,
      "text": "+(31—33)點智慧",
      "template": "+#點智慧",
      "ranges": [
       [
        31,
        33
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "LifeRegeneration",
    "tiers": [
     {
      "name": "蠑螈之",
      "ilvl": 1,
      "weight": 1000,
      "text": "(1—2)每秒生命回復",
      "template": "#每秒生命回復",
      "ranges": [
       [
        1,
        2
       ]
      ],
      "tier": 11
     },
     {
      "name": "蜥蜴之",
      "ilvl": 5,
      "weight": 1000,
      "text": "(2.1—3)每秒生命回復",
      "template": "#每秒生命回復",
      "ranges": [
       [
        2.1,
        3
       ]
      ],
      "tier": 10
     },
     {
      "name": "阿扁蟲之",
      "ilvl": 11,
      "weight": 1000,
      "text": "(3.1—4)每秒生命回復",
      "template": "#每秒生命回復",
      "ranges": [
       [
        3.1,
        4
       ]
      ],
      "tier": 9
     },
     {
      "name": "海星之",
      "ilvl": 17,
      "weight": 1000,
      "text": "(4.1—6)每秒生命回復",
      "template": "#每秒生命回復",
      "ranges": [
       [
        4.1,
        6
       ]
      ],
      "tier": 8
     },
     {
      "name": "九頭蛇之",
      "ilvl": 26,
      "weight": 1000,
      "text": "(6.1—9)每秒生命回復",
      "template": "#每秒生命回復",
      "ranges": [
       [
        6.1,
        9
       ]
      ],
      "tier": 7
     },
     {
      "name": "食人之",
      "ilvl": 35,
      "weight": 1000,
      "text": "(9.1—13)每秒生命回復",
      "template": "#每秒生命回復",
      "ranges": [
       [
        9.1,
        13
       ]
      ],
      "tier": 6
     },
     {
      "name": "康復之",
      "ilvl": 47,
      "weight": 1000,
      "text": "(13.1—18)每秒生命回復",
      "template": "#每秒生命回復",
      "ranges": [
       [
        13.1,
        18
       ]
      ],
      "tier": 5
     },
     {
      "name": "療養之",
      "ilvl": 58,
      "weight": 1000,
      "text": "(18.1—23)每秒生命回復",
      "template": "#每秒生命回復",
      "ranges": [
       [
        18.1,
        23
       ]
      ],
      "tier": 4
     },
     {
      "name": "復興之",
      "ilvl": 68,
      "weight": 1000,
      "text": "(23.1—29)每秒生命回復",
      "template": "#每秒生命回復",
      "ranges": [
       [
        23.1,
        29
       ]
      ],
      "tier": 3
     },
     {
      "name": "不朽之",
      "ilvl": 75,
      "weight": 1000,
      "text": "(29.1—33)每秒生命回復",
      "template": "#每秒生命回復",
      "ranges": [
       [
        29.1,
        33
       ]
      ],
      "tier": 2
     },
     {
      "name": "鳳凰之",
      "ilvl": 81,
      "weight": 1000,
      "text": "(33.1—36)每秒生命回復",
      "template": "#每秒生命回復",
      "ranges": [
       [
        33.1,
        36
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "LightningResistance",
    "tiers": [
     {
      "name": "雲朵之",
      "ilvl": 1,
      "weight": 1000,
      "text": "+(6—10)%閃電抗性",
      "template": "+#%閃電抗性",
      "ranges": [
       [
        6,
        10
       ]
      ],
      "tier": 8
     },
     {
      "name": "冰雹之",
      "ilvl": 13,
      "weight": 1000,
      "text": "+(11—15)%閃電抗性",
      "template": "+#%閃電抗性",
      "ranges": [
       [
        11,
        15
       ]
      ],
      "tier": 7
     },
     {
      "name": "暴風之",
      "ilvl": 25,
      "weight": 1000,
      "text": "+(16—20)%閃電抗性",
      "template": "+#%閃電抗性",
      "ranges": [
       [
        16,
        20
       ]
      ],
      "tier": 6
     },
     {
      "name": "積雨雲之",
      "ilvl": 37,
      "weight": 1000,
      "text": "+(21—25)%閃電抗性",
      "template": "+#%閃電抗性",
      "ranges": [
       [
        21,
        25
       ]
      ],
      "tier": 5
     },
     {
      "name": "暴風雨之",
      "ilvl": 49,
      "weight": 1000,
      "text": "+(26—30)%閃電抗性",
      "template": "+#%閃電抗性",
      "ranges": [
       [
        26,
        30
       ]
      ],
      "tier": 4
     },
     {
      "name": "颱風之",
      "ilvl": 60,
      "weight": 1000,
      "text": "+(31—35)%閃電抗性",
      "template": "+#%閃電抗性",
      "ranges": [
       [
        31,
        35
       ]
      ],
      "tier": 3
     },
     {
      "name": "電之",
      "ilvl": 71,
      "weight": 1000,
      "text": "+(36—40)%閃電抗性",
      "template": "+#%閃電抗性",
      "ranges": [
       [
        36,
        40
       ]
      ],
      "tier": 2
     },
     {
      "name": "艾菲吉之",
      "ilvl": 82,
      "weight": 1000,
      "text": "+(41—45)%閃電抗性",
      "template": "+#%閃電抗性",
      "ranges": [
       [
        41,
        45
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "LocalAttributeRequirements",
    "tiers": [
     {
      "name": "值得之",
      "ilvl": 24,
      "weight": 900,
      "text": "減少15%能力值需求",
      "template": "減少#%能力值需求",
      "ranges": [
       [
        15,
        15
       ]
      ],
      "tier": 5
     },
     {
      "name": "容易之",
      "ilvl": 32,
      "weight": 900,
      "text": "減少20%能力值需求",
      "template": "減少#%能力值需求",
      "ranges": [
       [
        20,
        20
       ]
      ],
      "tier": 4
     },
     {
      "name": "長才之",
      "ilvl": 40,
      "weight": 900,
      "text": "減少25%能力值需求",
      "template": "減少#%能力值需求",
      "ranges": [
       [
        25,
        25
       ]
      ],
      "tier": 3
     },
     {
      "name": "高超之",
      "ilvl": 52,
      "weight": 900,
      "text": "減少30%能力值需求",
      "template": "減少#%能力值需求",
      "ranges": [
       [
        30,
        30
       ]
      ],
      "tier": 2
     },
     {
      "name": "熟習之",
      "ilvl": 60,
      "weight": 900,
      "text": "減少35%能力值需求",
      "template": "減少#%能力值需求",
      "ranges": [
       [
        35,
        35
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "ReducedAilmentDuration",
    "tiers": [
     {
      "name": "密封之",
      "ilvl": 21,
      "weight": 500,
      "text": "減少(36—40)%你身上的流血持續時間",
      "template": "減少#%你身上的流血持續時間",
      "ranges": [
       [
        36,
        40
       ]
      ],
      "tier": 15
     },
     {
      "name": "抗毒素之",
      "ilvl": 21,
      "weight": 500,
      "text": "減少(36—40)%你身上的中毒持續時間",
      "template": "減少#%你身上的中毒持續時間",
      "ranges": [
       [
        36,
        40
       ]
      ],
      "tier": 14
     },
     {
      "name": "阻尼之",
      "ilvl": 21,
      "weight": 500,
      "text": "減少(36—40)%你身上的點燃持續時間",
      "template": "減少#%你身上的點燃持續時間",
      "ranges": [
       [
        36,
        40
       ]
      ],
      "tier": 13
     },
     {
      "name": "緩解之",
      "ilvl": 37,
      "weight": 500,
      "text": "減少(41—45)%你身上的流血持續時間",
      "template": "減少#%你身上的流血持續時間",
      "ranges": [
       [
        41,
        45
       ]
      ],
      "tier": 12
     },
     {
      "name": "補救措施之",
      "ilvl": 37,
      "weight": 500,
      "text": "減少(41—45)%你身上的中毒持續時間",
      "template": "減少#%你身上的中毒持續時間",
      "ranges": [
       [
        41,
        45
       ]
      ],
      "tier": 11
     },
     {
      "name": "鎮壓之",
      "ilvl": 37,
      "weight": 500,
      "text": "減少(41—45)%你身上的點燃持續時間",
      "template": "減少#%你身上的點燃持續時間",
      "ranges": [
       [
        41,
        45
       ]
      ],
      "tier": 10
     },
     {
      "name": "緩和之",
      "ilvl": 50,
      "weight": 500,
      "text": "減少(46—50)%你身上的流血持續時間",
      "template": "減少#%你身上的流血持續時間",
      "ranges": [
       [
        46,
        50
       ]
      ],
      "tier": 9
     },
     {
      "name": "治癒之",
      "ilvl": 50,
      "weight": 500,
      "text": "減少(46—50)%你身上的中毒持續時間",
      "template": "減少#%你身上的中毒持續時間",
      "ranges": [
       [
        46,
        50
       ]
      ],
      "tier": 8
     },
     {
      "name": "驚魂之",
      "ilvl": 50,
      "weight": 500,
      "text": "減少(46—50)%你身上的點燃持續時間",
      "template": "減少#%你身上的點燃持續時間",
      "ranges": [
       [
        46,
        50
       ]
      ],
      "tier": 7
     },
     {
      "name": "安撫之",
      "ilvl": 64,
      "weight": 500,
      "text": "減少(51—55)%你身上的流血持續時間",
      "template": "減少#%你身上的流血持續時間",
      "ranges": [
       [
        51,
        55
       ]
      ],
      "tier": 6
     },
     {
      "name": "萬靈丹之",
      "ilvl": 64,
      "weight": 500,
      "text": "減少(51—55)%你身上的中毒持續時間",
      "template": "減少#%你身上的中毒持續時間",
      "ranges": [
       [
        51,
        55
       ]
      ],
      "tier": 5
     },
     {
      "name": "淬火之",
      "ilvl": 64,
      "weight": 500,
      "text": "減少(51—55)%你身上的點燃持續時間",
      "template": "減少#%你身上的點燃持續時間",
      "ranges": [
       [
        51,
        55
       ]
      ],
      "tier": 4
     },
     {
      "name": "止血之",
      "ilvl": 76,
      "weight": 500,
      "text": "減少(56—60)%你身上的流血持續時間",
      "template": "減少#%你身上的流血持續時間",
      "ranges": [
       [
        56,
        60
       ]
      ],
      "tier": 3
     },
     {
      "name": "解藥之",
      "ilvl": 76,
      "weight": 500,
      "text": "減少(56—60)%你身上的中毒持續時間",
      "template": "減少#%你身上的中毒持續時間",
      "ranges": [
       [
        56,
        60
       ]
      ],
      "tier": 2
     },
     {
      "name": "澆熄之",
      "ilvl": 76,
      "weight": 500,
      "text": "減少(56—60)%你身上的點燃持續時間",
      "template": "減少#%你身上的點燃持續時間",
      "ranges": [
       [
        56,
        60
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "StunThreshold",
    "tiers": [
     {
      "name": "厚皮之",
      "ilvl": 1,
      "weight": 800,
      "text": "暈眩門檻+(6—11)",
      "template": "暈眩門檻+#",
      "ranges": [
       [
        6,
        11
       ]
      ],
      "tier": 10
     },
     {
      "name": "韌膚之",
      "ilvl": 8,
      "weight": 800,
      "text": "暈眩門檻+(12—29)",
      "template": "暈眩門檻+#",
      "ranges": [
       [
        12,
        29
       ]
      ],
      "tier": 9
     },
     {
      "name": "石皮之",
      "ilvl": 15,
      "weight": 800,
      "text": "暈眩門檻+(30—49)",
      "template": "暈眩門檻+#",
      "ranges": [
       [
        30,
        49
       ]
      ],
      "tier": 8
     },
     {
      "name": "金屬皮之",
      "ilvl": 22,
      "weight": 800,
      "text": "暈眩門檻+(50—72)",
      "template": "暈眩門檻+#",
      "ranges": [
       [
        50,
        72
       ]
      ],
      "tier": 7
     },
     {
      "name": "鋼皮之",
      "ilvl": 29,
      "weight": 800,
      "text": "暈眩門檻+(73—97)",
      "template": "暈眩門檻+#",
      "ranges": [
       [
        73,
        97
       ]
      ],
      "tier": 6
     },
     {
      "name": "石膚之",
      "ilvl": 36,
      "weight": 800,
      "text": "暈眩門檻+(98—124)",
      "template": "暈眩門檻+#",
      "ranges": [
       [
        98,
        124
       ]
      ],
      "tier": 5
     },
     {
      "name": "鉑膚之",
      "ilvl": 45,
      "weight": 800,
      "text": "暈眩門檻+(125—163)",
      "template": "暈眩門檻+#",
      "ranges": [
       [
        125,
        163
       ]
      ],
      "tier": 4
     },
     {
      "name": "金剛皮之",
      "ilvl": 54,
      "weight": 800,
      "text": "暈眩門檻+(164—206)",
      "template": "暈眩門檻+#",
      "ranges": [
       [
        164,
        206
       ]
      ],
      "tier": 3
     },
     {
      "name": "玉皮之",
      "ilvl": 63,
      "weight": 800,
      "text": "暈眩門檻+(207—253)",
      "template": "暈眩門檻+#",
      "ranges": [
       [
        207,
        253
       ]
      ],
      "tier": 2
     },
     {
      "name": "曜膚之",
      "ilvl": 72,
      "weight": 800,
      "text": "暈眩門檻+(254—304)",
      "template": "暈眩門檻+#",
      "ranges": [
       [
        254,
        304
       ]
      ],
      "tier": 1
     }
    ]
   }
  ]
 },
 "Body_Armours_str_dex": {
  "prefix": [
   {
    "family": "BaseLocalDefences",
    "tiers": [
     {
      "name": "柔軟的",
      "ilvl": 1,
      "weight": 1000,
      "text": "+(9—16)護甲值+(6—10)閃避值",
      "template": "+#護甲值+#閃避值",
      "ranges": [
       [
        9,
        16
       ],
       [
        6,
        10
       ]
      ],
      "tier": 8
     },
     {
      "name": "易彎的",
      "ilvl": 16,
      "weight": 1000,
      "text": "+(17—46)護甲值+(11—41)閃避值",
      "template": "+#護甲值+#閃避值",
      "ranges": [
       [
        17,
        46
       ],
       [
        11,
        41
       ]
      ],
      "tier": 7
     },
     {
      "name": "彈性的",
      "ilvl": 33,
      "weight": 1000,
      "text": "+(47—71)護甲值+(42—64)閃避值",
      "template": "+#護甲值+#閃避值",
      "ranges": [
       [
        47,
        71
       ],
       [
        42,
        64
       ]
      ],
      "tier": 6
     },
     {
      "name": "耐用的",
      "ilvl": 46,
      "weight": 1000,
      "text": "+(72—85)護甲值+(65—78)閃避值",
      "template": "+#護甲值+#閃避值",
      "ranges": [
       [
        72,
        85
       ],
       [
        65,
        78
       ]
      ],
      "tier": 5
     },
     {
      "name": "強健的",
      "ilvl": 54,
      "weight": 1000,
      "text": "+(86—102)護甲值+(79—94)閃避值",
      "template": "+#護甲值+#閃避值",
      "ranges": [
       [
        86,
        102
       ],
       [
        79,
        94
       ]
      ],
      "tier": 4
     },
     {
      "name": "彈力的",
      "ilvl": 60,
      "weight": 1000,
      "text": "+(103—127)護甲值+(95—119)閃避值",
      "template": "+#護甲值+#閃避值",
      "ranges": [
       [
        103,
        127
       ],
       [
        95,
        119
       ]
      ],
      "tier": 3
     },
     {
      "name": "適應的",
      "ilvl": 65,
      "weight": 1000,
      "text": "+(128—149)護甲值+(120—141)閃避值",
      "template": "+#護甲值+#閃避值",
      "ranges": [
       [
        128,
        149
       ],
       [
        120,
        141
       ]
      ],
      "tier": 2
     },
     {
      "name": "多才多藝的",
      "ilvl": 75,
      "weight": 1000,
      "text": "+(150—170)護甲值+(142—161)閃避值",
      "template": "+#護甲值+#閃避值",
      "ranges": [
       [
        150,
        170
       ],
       [
        142,
        161
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "BaseLocalDefencesAndDefencePercent",
    "tiers": [
     {
      "name": "劍士的",
      "ilvl": 8,
      "weight": 1000,
      "text": "+(3—5)護甲值+(2—3)閃避值增加(6—13)%護甲值和閃避",
      "template": "+#護甲值+#閃避值增加#%護甲值和閃避",
      "ranges": [
       [
        3,
        5
       ],
       [
        2,
        3
       ],
       [
        6,
        13
       ]
      ],
      "tier": 6
     },
     {
      "name": "鬥士的",
      "ilvl": 16,
      "weight": 1000,
      "text": "+(6—16)護甲值+(4—14)閃避值增加(14—20)%護甲值和閃避",
      "template": "+#護甲值+#閃避值增加#%護甲值和閃避",
      "ranges": [
       [
        6,
        16
       ],
       [
        4,
        14
       ],
       [
        14,
        20
       ]
      ],
      "tier": 5
     },
     {
      "name": "老兵的",
      "ilvl": 33,
      "weight": 1000,
      "text": "+(17—23)護甲值+(15—21)閃避值增加(21—26)%護甲值和閃避",
      "template": "+#護甲值+#閃避值增加#%護甲值和閃避",
      "ranges": [
       [
        17,
        23
       ],
       [
        15,
        21
       ],
       [
        21,
        26
       ]
      ],
      "tier": 4
     },
     {
      "name": "戰士的",
      "ilvl": 46,
      "weight": 1000,
      "text": "+(24—32)護甲值+(22—29)閃避值增加(27—32)%護甲值和閃避",
      "template": "+#護甲值+#閃避值增加#%護甲值和閃避",
      "ranges": [
       [
        24,
        32
       ],
       [
        22,
        29
       ],
       [
        27,
        32
       ]
      ],
      "tier": 3
     },
     {
      "name": "騎士的",
      "ilvl": 60,
      "weight": 1000,
      "text": "+(33—41)護甲值+(30—39)閃避值增加(33—38)%護甲值和閃避",
      "template": "+#護甲值+#閃避值增加#%護甲值和閃避",
      "ranges": [
       [
        33,
        41
       ],
       [
        30,
        39
       ],
       [
        33,
        38
       ]
      ],
      "tier": 2
     },
     {
      "name": "百夫長的",
      "ilvl": 78,
      "weight": 1000,
      "text": "+(42—52)護甲值+(40—50)閃避值增加(39—42)%護甲值和閃避",
      "template": "+#護甲值+#閃避值增加#%護甲值和閃避",
      "ranges": [
       [
        42,
        52
       ],
       [
        40,
        50
       ],
       [
        39,
        42
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "BaseLocalDefencesAndLife",
    "tiers": [
     {
      "name": "暴力的",
      "ilvl": 8,
      "weight": 1000,
      "text": "增加(6—13)%護甲值和閃避+(7—10)最大生命",
      "template": "增加#%護甲值和閃避+#最大生命",
      "ranges": [
       [
        6,
        13
       ],
       [
        7,
        10
       ]
      ],
      "tier": 6
     },
     {
      "name": "暴徒的",
      "ilvl": 16,
      "weight": 1000,
      "text": "增加(14—20)%護甲值和閃避+(11—19)最大生命",
      "template": "增加#%護甲值和閃避+#最大生命",
      "ranges": [
       [
        14,
        20
       ],
       [
        11,
        19
       ]
      ],
      "tier": 5
     },
     {
      "name": "野蠻的",
      "ilvl": 33,
      "weight": 1000,
      "text": "增加(21—26)%護甲值和閃避+(20—25)最大生命",
      "template": "增加#%護甲值和閃避+#最大生命",
      "ranges": [
       [
        21,
        26
       ],
       [
        20,
        25
       ]
      ],
      "tier": 4
     },
     {
      "name": "襲擊者的",
      "ilvl": 46,
      "weight": 1000,
      "text": "增加(27—32)%護甲值和閃避+(26—32)最大生命",
      "template": "增加#%護甲值和閃避+#最大生命",
      "ranges": [
       [
        27,
        32
       ],
       [
        26,
        32
       ]
      ],
      "tier": 3
     },
     {
      "name": "攻擊者的",
      "ilvl": 60,
      "weight": 1000,
      "text": "增加(33—38)%護甲值和閃避+(33—41)最大生命",
      "template": "增加#%護甲值和閃避+#最大生命",
      "ranges": [
       [
        33,
        38
       ],
       [
        33,
        41
       ]
      ],
      "tier": 2
     },
     {
      "name": "迷彩的",
      "ilvl": 78,
      "weight": 1000,
      "text": "增加(39—42)%護甲值和閃避+(42—49)最大生命",
      "template": "增加#%護甲值和閃避+#最大生命",
      "ranges": [
       [
        39,
        42
       ],
       [
        42,
        49
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "BaseSpirit",
    "tiers": [
     {
      "name": "淑女的",
      "ilvl": 16,
      "weight": 500,
      "text": "+(30—33)精魂",
      "template": "+#精魂",
      "ranges": [
       [
        30,
        33
       ]
      ],
      "tier": 8
     },
     {
      "name": "女爵的",
      "ilvl": 25,
      "weight": 500,
      "text": "+(34—37)精魂",
      "template": "+#精魂",
      "ranges": [
       [
        34,
        37
       ]
      ],
      "tier": 7
     },
     {
      "name": "女子爵的",
      "ilvl": 33,
      "weight": 500,
      "text": "+(38—42)精魂",
      "template": "+#精魂",
      "ranges": [
       [
        38,
        42
       ]
      ],
      "tier": 6
     },
     {
      "name": "子爵夫人的",
      "ilvl": 46,
      "weight": 500,
      "text": "+(43—46)精魂",
      "template": "+#精魂",
      "ranges": [
       [
        43,
        46
       ]
      ],
      "tier": 5
     },
     {
      "name": "伯爵夫人的",
      "ilvl": 54,
      "weight": 400,
      "text": "+(47—50)精魂",
      "template": "+#精魂",
      "ranges": [
       [
        47,
        50
       ]
      ],
      "tier": 4
     },
     {
      "name": "公爵夫人的",
      "ilvl": 60,
      "weight": 300,
      "text": "+(51—53)精魂",
      "template": "+#精魂",
      "ranges": [
       [
        51,
        53
       ]
      ],
      "tier": 3
     },
     {
      "name": "公主的",
      "ilvl": 65,
      "weight": 200,
      "text": "+(54—56)精魂",
      "template": "+#精魂",
      "ranges": [
       [
        54,
        56
       ]
      ],
      "tier": 2
     },
     {
      "name": "女皇的",
      "ilvl": 78,
      "weight": 100,
      "text": "+(57—61)精魂",
      "template": "+#精魂",
      "ranges": [
       [
        57,
        61
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "DefencesPercent",
    "tiers": [
     {
      "name": "拆解的",
      "ilvl": 2,
      "weight": 1000,
      "text": "增加(15—26)%護甲值和閃避",
      "template": "增加#%護甲值和閃避",
      "ranges": [
       [
        15,
        26
       ]
      ],
      "tier": 8
     },
     {
      "name": "打鬥者的",
      "ilvl": 16,
      "weight": 1000,
      "text": "增加(27—42)%護甲值和閃避",
      "template": "增加#%護甲值和閃避",
      "ranges": [
       [
        27,
        42
       ]
      ],
      "tier": 7
     },
     {
      "name": "擊劍士的",
      "ilvl": 33,
      "weight": 1000,
      "text": "增加(43—55)%護甲值和閃避",
      "template": "增加#%護甲值和閃避",
      "ranges": [
       [
        43,
        55
       ]
      ],
      "tier": 6
     },
     {
      "name": "角鬥士的",
      "ilvl": 46,
      "weight": 1000,
      "text": "增加(56—67)%護甲值和閃避",
      "template": "增加#%護甲值和閃避",
      "ranges": [
       [
        56,
        67
       ]
      ],
      "tier": 5
     },
     {
      "name": "決鬥的",
      "ilvl": 54,
      "weight": 1000,
      "text": "增加(68—79)%護甲值和閃避",
      "template": "增加#%護甲值和閃避",
      "ranges": [
       [
        68,
        79
       ]
      ],
      "tier": 4
     },
     {
      "name": "英雄的",
      "ilvl": 60,
      "weight": 1000,
      "text": "增加(80—91)%護甲值和閃避",
      "template": "增加#%護甲值和閃避",
      "ranges": [
       [
        80,
        91
       ]
      ],
      "tier": 3
     },
     {
      "name": "傳說的",
      "ilvl": 65,
      "weight": 1000,
      "text": "增加(92—100)%護甲值和閃避",
      "template": "增加#%護甲值和閃避",
      "ranges": [
       [
        92,
        100
       ]
      ],
      "tier": 2
     },
     {
      "name": "勝利的",
      "ilvl": 75,
      "weight": 1000,
      "text": "增加(101—110)%護甲值和閃避",
      "template": "增加#%護甲值和閃避",
      "ranges": [
       [
        101,
        110
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "IncreasedLife",
    "tiers": [
     {
      "name": "健壯之",
      "ilvl": 1,
      "weight": 1000,
      "text": "+(10—19)最大生命",
      "template": "+#最大生命",
      "ranges": [
       [
        10,
        19
       ]
      ],
      "tier": 13
     },
     {
      "name": "健康的",
      "ilvl": 6,
      "weight": 1000,
      "text": "+(20—29)最大生命",
      "template": "+#最大生命",
      "ranges": [
       [
        20,
        29
       ]
      ],
      "tier": 12
     },
     {
      "name": "樂觀的",
      "ilvl": 16,
      "weight": 1000,
      "text": "+(30—39)最大生命",
      "template": "+#最大生命",
      "ranges": [
       [
        30,
        39
       ]
      ],
      "tier": 11
     },
     {
      "name": "堅信的",
      "ilvl": 24,
      "weight": 1000,
      "text": "+(40—59)最大生命",
      "template": "+#最大生命",
      "ranges": [
       [
        40,
        59
       ]
      ],
      "tier": 10
     },
     {
      "name": "堅毅者",
      "ilvl": 33,
      "weight": 1000,
      "text": "+(60—69)最大生命",
      "template": "+#最大生命",
      "ranges": [
       [
        60,
        69
       ]
      ],
      "tier": 9
     },
     {
      "name": "健壯的",
      "ilvl": 38,
      "weight": 1000,
      "text": "+(70—84)最大生命",
      "template": "+#最大生命",
      "ranges": [
       [
        70,
        84
       ]
      ],
      "tier": 8
     },
     {
      "name": "豐腴的",
      "ilvl": 46,
      "weight": 1000,
      "text": "+(85—99)最大生命",
      "template": "+#最大生命",
      "ranges": [
       [
        85,
        99
       ]
      ],
      "tier": 7
     },
     {
      "name": "陽剛的",
      "ilvl": 54,
      "weight": 1000,
      "text": "+(100—119)最大生命",
      "template": "+#最大生命",
      "ranges": [
       [
        100,
        119
       ]
      ],
      "tier": 6
     },
     {
      "name": "運動員的",
      "ilvl": 60,
      "weight": 1000,
      "text": "+(120—149)最大生命",
      "template": "+#最大生命",
      "ranges": [
       [
        120,
        149
       ]
      ],
      "tier": 5
     },
     {
      "name": "豐饒的",
      "ilvl": 65,
      "weight": 1000,
      "text": "+(150—174)最大生命",
      "template": "+#最大生命",
      "ranges": [
       [
        150,
        174
       ]
      ],
      "tier": 4
     },
     {
      "name": "蓬勃的",
      "ilvl": 70,
      "weight": 1000,
      "text": "+(175—189)最大生命",
      "template": "+#最大生命",
      "ranges": [
       [
        175,
        189
       ]
      ],
      "tier": 3
     },
     {
      "name": "狂喜的",
      "ilvl": 75,
      "weight": 1000,
      "text": "+(190—199)最大生命",
      "template": "+#最大生命",
      "ranges": [
       [
        190,
        199
       ]
      ],
      "tier": 2
     },
     {
      "name": "重要的",
      "ilvl": 80,
      "weight": 1000,
      "text": "+(200—214)最大生命",
      "template": "+#最大生命",
      "ranges": [
       [
        200,
        214
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "Thorns",
    "tiers": [
     {
      "name": "多刺的",
      "ilvl": 1,
      "weight": 1000,
      "text": "(1—2)至(3—4)點物理荊棘傷害",
      "template": "#至#點物理荊棘傷害",
      "ranges": [
       [
        1,
        2
       ],
       [
        3,
        4
       ]
      ],
      "tier": 7
     },
     {
      "name": "帶刺的",
      "ilvl": 10,
      "weight": 1000,
      "text": "(5—7)至(7—10)點物理荊棘傷害",
      "template": "#至#點物理荊棘傷害",
      "ranges": [
       [
        5,
        7
       ],
       [
        7,
        10
       ]
      ],
      "tier": 6
     },
     {
      "name": "尖刺的",
      "ilvl": 19,
      "weight": 1000,
      "text": "(11—16)至(17—23)點物理荊棘傷害",
      "template": "#至#點物理荊棘傷害",
      "ranges": [
       [
        11,
        16
       ],
       [
        17,
        23
       ]
      ],
      "tier": 5
     },
     {
      "name": "尖銳的",
      "ilvl": 38,
      "weight": 1000,
      "text": "(24—35)至(36—53)點物理荊棘傷害",
      "template": "#至#點物理荊棘傷害",
      "ranges": [
       [
        24,
        35
       ],
       [
        36,
        53
       ]
      ],
      "tier": 4
     },
     {
      "name": "尖刺",
      "ilvl": 48,
      "weight": 1000,
      "text": "(40—60)至(61—92)點物理荊棘傷害",
      "template": "#至#點物理荊棘傷害",
      "ranges": [
       [
        40,
        60
       ],
       [
        61,
        92
       ]
      ],
      "tier": 3
     },
     {
      "name": "尖刃",
      "ilvl": 63,
      "weight": 1000,
      "text": "(64—97)至(98—145)點物理荊棘傷害",
      "template": "#至#點物理荊棘傷害",
      "ranges": [
       [
        64,
        97
       ],
       [
        98,
        145
       ]
      ],
      "tier": 2
     },
     {
      "name": "鋸齒的",
      "ilvl": 74,
      "weight": 1000,
      "text": "(101—151)至(152—220)點物理荊棘傷害",
      "template": "#至#點物理荊棘傷害",
      "ranges": [
       [
        101,
        151
       ],
       [
        152,
        220
       ]
      ],
      "tier": 1
     }
    ]
   }
  ],
  "suffix": [
   {
    "family": "ArmourAppliesToElementalDamage",
    "tiers": [
     {
      "name": "覆蓋之",
      "ilvl": 1,
      "weight": 500,
      "text": "+(14—19)%的護甲值也會套用至元素傷害",
      "template": "+#%的護甲值也會套用至元素傷害",
      "ranges": [
       [
        14,
        19
       ]
      ],
      "tier": 6
     },
     {
      "name": "覆套之",
      "ilvl": 16,
      "weight": 500,
      "text": "+(20—25)%的護甲值也會套用至元素傷害",
      "template": "+#%的護甲值也會套用至元素傷害",
      "ranges": [
       [
        20,
        25
       ]
      ],
      "tier": 5
     },
     {
      "name": "內襯之",
      "ilvl": 36,
      "weight": 500,
      "text": "+(26—31)%的護甲值也會套用至元素傷害",
      "template": "+#%的護甲值也會套用至元素傷害",
      "ranges": [
       [
        26,
        31
       ]
      ],
      "tier": 4
     },
     {
      "name": "鋪墊之",
      "ilvl": 48,
      "weight": 500,
      "text": "+(32—37)%的護甲值也會套用至元素傷害",
      "template": "+#%的護甲值也會套用至元素傷害",
      "ranges": [
       [
        32,
        37
       ]
      ],
      "tier": 3
     },
     {
      "name": "鑲邊之",
      "ilvl": 66,
      "weight": 500,
      "text": "+(38—43)%的護甲值也會套用至元素傷害",
      "template": "+#%的護甲值也會套用至元素傷害",
      "ranges": [
       [
        38,
        43
       ]
      ],
      "tier": 2
     },
     {
      "name": "熱反射之",
      "ilvl": 81,
      "weight": 500,
      "text": "+(44—50)%的護甲值也會套用至元素傷害",
      "template": "+#%的護甲值也會套用至元素傷害",
      "ranges": [
       [
        44,
        50
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "ChaosResistance",
    "tiers": [
     {
      "name": "失落之",
      "ilvl": 16,
      "weight": 250,
      "text": "+(4—7)%混沌抗性",
      "template": "+#%混沌抗性",
      "ranges": [
       [
        4,
        7
       ]
      ],
      "tier": 6
     },
     {
      "name": "放逐之",
      "ilvl": 30,
      "weight": 250,
      "text": "+(8—11)%混沌抗性",
      "template": "+#%混沌抗性",
      "ranges": [
       [
        8,
        11
       ]
      ],
      "tier": 5
     },
     {
      "name": "驅逐之",
      "ilvl": 44,
      "weight": 250,
      "text": "+(12—15)%混沌抗性",
      "template": "+#%混沌抗性",
      "ranges": [
       [
        12,
        15
       ]
      ],
      "tier": 4
     },
     {
      "name": "出境之",
      "ilvl": 56,
      "weight": 250,
      "text": "+(16—19)%混沌抗性",
      "template": "+#%混沌抗性",
      "ranges": [
       [
        16,
        19
       ]
      ],
      "tier": 3
     },
     {
      "name": "流亡之",
      "ilvl": 68,
      "weight": 250,
      "text": "+(20—23)%混沌抗性",
      "template": "+#%混沌抗性",
      "ranges": [
       [
        20,
        23
       ]
      ],
      "tier": 2
     },
     {
      "name": "巴曼斯之",
      "ilvl": 81,
      "weight": 250,
      "text": "+(24—27)%混沌抗性",
      "template": "+#%混沌抗性",
      "ranges": [
       [
        24,
        27
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "ColdResistance",
    "tiers": [
     {
      "name": "海豹之",
      "ilvl": 1,
      "weight": 1000,
      "text": "+(6—10)%冰冷抗性",
      "template": "+#%冰冷抗性",
      "ranges": [
       [
        6,
        10
       ]
      ],
      "tier": 8
     },
     {
      "name": "企鵝之",
      "ilvl": 14,
      "weight": 1000,
      "text": "+(11—15)%冰冷抗性",
      "template": "+#%冰冷抗性",
      "ranges": [
       [
        11,
        15
       ]
      ],
      "tier": 7
     },
     {
      "name": "獨角鯨之",
      "ilvl": 26,
      "weight": 1000,
      "text": "+(16—20)%冰冷抗性",
      "template": "+#%冰冷抗性",
      "ranges": [
       [
        16,
        20
       ]
      ],
      "tier": 6
     },
     {
      "name": "雪人之",
      "ilvl": 38,
      "weight": 1000,
      "text": "+(21—25)%冰冷抗性",
      "template": "+#%冰冷抗性",
      "ranges": [
       [
        21,
        25
       ]
      ],
      "tier": 5
     },
     {
      "name": "海象之",
      "ilvl": 50,
      "weight": 1000,
      "text": "+(26—30)%冰冷抗性",
      "template": "+#%冰冷抗性",
      "ranges": [
       [
        26,
        30
       ]
      ],
      "tier": 4
     },
     {
      "name": "北極熊之",
      "ilvl": 60,
      "weight": 1000,
      "text": "+(31—35)%冰冷抗性",
      "template": "+#%冰冷抗性",
      "ranges": [
       [
        31,
        35
       ]
      ],
      "tier": 3
     },
     {
      "name": "冰之",
      "ilvl": 71,
      "weight": 1000,
      "text": "+(36—40)%冰冷抗性",
      "template": "+#%冰冷抗性",
      "ranges": [
       [
        36,
        40
       ]
      ],
      "tier": 2
     },
     {
      "name": "哈斯特之",
      "ilvl": 82,
      "weight": 1000,
      "text": "+(41—45)%冰冷抗性",
      "template": "+#%冰冷抗性",
      "ranges": [
       [
        41,
        45
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "Dexterity",
    "tiers": [
     {
      "name": "貓鼬之",
      "ilvl": 1,
      "weight": 500,
      "text": "+(5—8)點敏捷",
      "template": "+#點敏捷",
      "ranges": [
       [
        5,
        8
       ]
      ],
      "tier": 8
     },
     {
      "name": "山貓之",
      "ilvl": 11,
      "weight": 500,
      "text": "+(9—12)點敏捷",
      "template": "+#點敏捷",
      "ranges": [
       [
        9,
        12
       ]
      ],
      "tier": 7
     },
     {
      "name": "狐狸之",
      "ilvl": 22,
      "weight": 500,
      "text": "+(13—16)點敏捷",
      "template": "+#點敏捷",
      "ranges": [
       [
        13,
        16
       ]
      ],
      "tier": 6
     },
     {
      "name": "獵鷹之",
      "ilvl": 33,
      "weight": 500,
      "text": "+(17—20)點敏捷",
      "template": "+#點敏捷",
      "ranges": [
       [
        17,
        20
       ]
      ],
      "tier": 5
     },
     {
      "name": "豹之",
      "ilvl": 44,
      "weight": 500,
      "text": "+(21—24)點敏捷",
      "template": "+#點敏捷",
      "ranges": [
       [
        21,
        24
       ]
      ],
      "tier": 4
     },
     {
      "name": "花豹之",
      "ilvl": 55,
      "weight": 500,
      "text": "+(25—27)點敏捷",
      "template": "+#點敏捷",
      "ranges": [
       [
        25,
        27
       ]
      ],
      "tier": 3
     },
     {
      "name": "美洲豹之",
      "ilvl": 66,
      "weight": 500,
      "text": "+(28—30)點敏捷",
      "template": "+#點敏捷",
      "ranges": [
       [
        28,
        30
       ]
      ],
      "tier": 2
     },
     {
      "name": "幻影之",
      "ilvl": 74,
      "weight": 500,
      "text": "+(31—33)點敏捷",
      "template": "+#點敏捷",
      "ranges": [
       [
        31,
        33
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "EvasionAppliesToDeflection",
    "tiers": [
     {
      "name": "偏斜之",
      "ilvl": 1,
      "weight": 500,
      "text": "獲得等同(8—11)%閃避值的偏斜值",
      "template": "獲得等同#%閃避值的偏斜值",
      "ranges": [
       [
        8,
        11
       ]
      ],
      "tier": 6
     },
     {
      "name": "彎折之",
      "ilvl": 16,
      "weight": 500,
      "text": "獲得等同(12—14)%閃避值的偏斜值",
      "template": "獲得等同#%閃避值的偏斜值",
      "ranges": [
       [
        12,
        14
       ]
      ],
      "tier": 5
     },
     {
      "name": "彎曲之",
      "ilvl": 36,
      "weight": 500,
      "text": "獲得等同(15—17)%閃避值的偏斜值",
      "template": "獲得等同#%閃避值的偏斜值",
      "ranges": [
       [
        15,
        17
       ]
      ],
      "tier": 4
     },
     {
      "name": "繞行之",
      "ilvl": 48,
      "weight": 500,
      "text": "獲得等同(18—20)%閃避值的偏斜值",
      "template": "獲得等同#%閃避值的偏斜值",
      "ranges": [
       [
        18,
        20
       ]
      ],
      "tier": 3
     },
     {
      "name": "屈曲之",
      "ilvl": 66,
      "weight": 500,
      "text": "獲得等同(21—23)%閃避值的偏斜值",
      "template": "獲得等同#%閃避值的偏斜值",
      "ranges": [
       [
        21,
        23
       ]
      ],
      "tier": 2
     },
     {
      "name": "扭曲之",
      "ilvl": 81,
      "weight": 500,
      "text": "獲得等同(24—26)%閃避值的偏斜值",
      "template": "獲得等同#%閃避值的偏斜值",
      "ranges": [
       [
        24,
        26
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "FireResistance",
    "tiers": [
     {
      "name": "幼龍之",
      "ilvl": 1,
      "weight": 1000,
      "text": "+(6—10)%火焰抗性",
      "template": "+#%火焰抗性",
      "ranges": [
       [
        6,
        10
       ]
      ],
      "tier": 8
     },
     {
      "name": "火蜥蜴之",
      "ilvl": 12,
      "weight": 1000,
      "text": "+(11—15)%火焰抗性",
      "template": "+#%火焰抗性",
      "ranges": [
       [
        11,
        15
       ]
      ],
      "tier": 7
     },
     {
      "name": "火龍之",
      "ilvl": 24,
      "weight": 1000,
      "text": "+(16—20)%火焰抗性",
      "template": "+#%火焰抗性",
      "ranges": [
       [
        16,
        20
       ]
      ],
      "tier": 6
     },
     {
      "name": "窯爐之",
      "ilvl": 36,
      "weight": 1000,
      "text": "+(21—25)%火焰抗性",
      "template": "+#%火焰抗性",
      "ranges": [
       [
        21,
        25
       ]
      ],
      "tier": 5
     },
     {
      "name": "爐火之",
      "ilvl": 48,
      "weight": 1000,
      "text": "+(26—30)%火焰抗性",
      "template": "+#%火焰抗性",
      "ranges": [
       [
        26,
        30
       ]
      ],
      "tier": 4
     },
     {
      "name": "火山之",
      "ilvl": 60,
      "weight": 1000,
      "text": "+(31—35)%火焰抗性",
      "template": "+#%火焰抗性",
      "ranges": [
       [
        31,
        35
       ]
      ],
      "tier": 3
     },
     {
      "name": "熔岩屏障之",
      "ilvl": 71,
      "weight": 1000,
      "text": "+(36—40)%火焰抗性",
      "template": "+#%火焰抗性",
      "ranges": [
       [
        36,
        40
       ]
      ],
      "tier": 2
     },
     {
      "name": "提耶須之",
      "ilvl": 82,
      "weight": 1000,
      "text": "+(41—45)%火焰抗性",
      "template": "+#%火焰抗性",
      "ranges": [
       [
        41,
        45
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "LifeRegeneration",
    "tiers": [
     {
      "name": "蠑螈之",
      "ilvl": 1,
      "weight": 1000,
      "text": "(1—2)每秒生命回復",
      "template": "#每秒生命回復",
      "ranges": [
       [
        1,
        2
       ]
      ],
      "tier": 11
     },
     {
      "name": "蜥蜴之",
      "ilvl": 5,
      "weight": 1000,
      "text": "(2.1—3)每秒生命回復",
      "template": "#每秒生命回復",
      "ranges": [
       [
        2.1,
        3
       ]
      ],
      "tier": 10
     },
     {
      "name": "阿扁蟲之",
      "ilvl": 11,
      "weight": 1000,
      "text": "(3.1—4)每秒生命回復",
      "template": "#每秒生命回復",
      "ranges": [
       [
        3.1,
        4
       ]
      ],
      "tier": 9
     },
     {
      "name": "海星之",
      "ilvl": 17,
      "weight": 1000,
      "text": "(4.1—6)每秒生命回復",
      "template": "#每秒生命回復",
      "ranges": [
       [
        4.1,
        6
       ]
      ],
      "tier": 8
     },
     {
      "name": "九頭蛇之",
      "ilvl": 26,
      "weight": 1000,
      "text": "(6.1—9)每秒生命回復",
      "template": "#每秒生命回復",
      "ranges": [
       [
        6.1,
        9
       ]
      ],
      "tier": 7
     },
     {
      "name": "食人之",
      "ilvl": 35,
      "weight": 1000,
      "text": "(9.1—13)每秒生命回復",
      "template": "#每秒生命回復",
      "ranges": [
       [
        9.1,
        13
       ]
      ],
      "tier": 6
     },
     {
      "name": "康復之",
      "ilvl": 47,
      "weight": 1000,
      "text": "(13.1—18)每秒生命回復",
      "template": "#每秒生命回復",
      "ranges": [
       [
        13.1,
        18
       ]
      ],
      "tier": 5
     },
     {
      "name": "療養之",
      "ilvl": 58,
      "weight": 1000,
      "text": "(18.1—23)每秒生命回復",
      "template": "#每秒生命回復",
      "ranges": [
       [
        18.1,
        23
       ]
      ],
      "tier": 4
     },
     {
      "name": "復興之",
      "ilvl": 68,
      "weight": 1000,
      "text": "(23.1—29)每秒生命回復",
      "template": "#每秒生命回復",
      "ranges": [
       [
        23.1,
        29
       ]
      ],
      "tier": 3
     },
     {
      "name": "不朽之",
      "ilvl": 75,
      "weight": 1000,
      "text": "(29.1—33)每秒生命回復",
      "template": "#每秒生命回復",
      "ranges": [
       [
        29.1,
        33
       ]
      ],
      "tier": 2
     },
     {
      "name": "鳳凰之",
      "ilvl": 81,
      "weight": 1000,
      "text": "(33.1—36)每秒生命回復",
      "template": "#每秒生命回復",
      "ranges": [
       [
        33.1,
        36
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "LightningResistance",
    "tiers": [
     {
      "name": "雲朵之",
      "ilvl": 1,
      "weight": 1000,
      "text": "+(6—10)%閃電抗性",
      "template": "+#%閃電抗性",
      "ranges": [
       [
        6,
        10
       ]
      ],
      "tier": 8
     },
     {
      "name": "冰雹之",
      "ilvl": 13,
      "weight": 1000,
      "text": "+(11—15)%閃電抗性",
      "template": "+#%閃電抗性",
      "ranges": [
       [
        11,
        15
       ]
      ],
      "tier": 7
     },
     {
      "name": "暴風之",
      "ilvl": 25,
      "weight": 1000,
      "text": "+(16—20)%閃電抗性",
      "template": "+#%閃電抗性",
      "ranges": [
       [
        16,
        20
       ]
      ],
      "tier": 6
     },
     {
      "name": "積雨雲之",
      "ilvl": 37,
      "weight": 1000,
      "text": "+(21—25)%閃電抗性",
      "template": "+#%閃電抗性",
      "ranges": [
       [
        21,
        25
       ]
      ],
      "tier": 5
     },
     {
      "name": "暴風雨之",
      "ilvl": 49,
      "weight": 1000,
      "text": "+(26—30)%閃電抗性",
      "template": "+#%閃電抗性",
      "ranges": [
       [
        26,
        30
       ]
      ],
      "tier": 4
     },
     {
      "name": "颱風之",
      "ilvl": 60,
      "weight": 1000,
      "text": "+(31—35)%閃電抗性",
      "template": "+#%閃電抗性",
      "ranges": [
       [
        31,
        35
       ]
      ],
      "tier": 3
     },
     {
      "name": "電之",
      "ilvl": 71,
      "weight": 1000,
      "text": "+(36—40)%閃電抗性",
      "template": "+#%閃電抗性",
      "ranges": [
       [
        36,
        40
       ]
      ],
      "tier": 2
     },
     {
      "name": "艾菲吉之",
      "ilvl": 82,
      "weight": 1000,
      "text": "+(41—45)%閃電抗性",
      "template": "+#%閃電抗性",
      "ranges": [
       [
        41,
        45
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "LocalAttributeRequirements",
    "tiers": [
     {
      "name": "值得之",
      "ilvl": 24,
      "weight": 900,
      "text": "減少15%能力值需求",
      "template": "減少#%能力值需求",
      "ranges": [
       [
        15,
        15
       ]
      ],
      "tier": 5
     },
     {
      "name": "容易之",
      "ilvl": 32,
      "weight": 900,
      "text": "減少20%能力值需求",
      "template": "減少#%能力值需求",
      "ranges": [
       [
        20,
        20
       ]
      ],
      "tier": 4
     },
     {
      "name": "長才之",
      "ilvl": 40,
      "weight": 900,
      "text": "減少25%能力值需求",
      "template": "減少#%能力值需求",
      "ranges": [
       [
        25,
        25
       ]
      ],
      "tier": 3
     },
     {
      "name": "高超之",
      "ilvl": 52,
      "weight": 900,
      "text": "減少30%能力值需求",
      "template": "減少#%能力值需求",
      "ranges": [
       [
        30,
        30
       ]
      ],
      "tier": 2
     },
     {
      "name": "熟習之",
      "ilvl": 60,
      "weight": 900,
      "text": "減少35%能力值需求",
      "template": "減少#%能力值需求",
      "ranges": [
       [
        35,
        35
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "ReducedAilmentDuration",
    "tiers": [
     {
      "name": "密封之",
      "ilvl": 21,
      "weight": 500,
      "text": "減少(36—40)%你身上的流血持續時間",
      "template": "減少#%你身上的流血持續時間",
      "ranges": [
       [
        36,
        40
       ]
      ],
      "tier": 15
     },
     {
      "name": "抗毒素之",
      "ilvl": 21,
      "weight": 500,
      "text": "減少(36—40)%你身上的中毒持續時間",
      "template": "減少#%你身上的中毒持續時間",
      "ranges": [
       [
        36,
        40
       ]
      ],
      "tier": 14
     },
     {
      "name": "阻尼之",
      "ilvl": 21,
      "weight": 500,
      "text": "減少(36—40)%你身上的點燃持續時間",
      "template": "減少#%你身上的點燃持續時間",
      "ranges": [
       [
        36,
        40
       ]
      ],
      "tier": 13
     },
     {
      "name": "緩解之",
      "ilvl": 37,
      "weight": 500,
      "text": "減少(41—45)%你身上的流血持續時間",
      "template": "減少#%你身上的流血持續時間",
      "ranges": [
       [
        41,
        45
       ]
      ],
      "tier": 12
     },
     {
      "name": "補救措施之",
      "ilvl": 37,
      "weight": 500,
      "text": "減少(41—45)%你身上的中毒持續時間",
      "template": "減少#%你身上的中毒持續時間",
      "ranges": [
       [
        41,
        45
       ]
      ],
      "tier": 11
     },
     {
      "name": "鎮壓之",
      "ilvl": 37,
      "weight": 500,
      "text": "減少(41—45)%你身上的點燃持續時間",
      "template": "減少#%你身上的點燃持續時間",
      "ranges": [
       [
        41,
        45
       ]
      ],
      "tier": 10
     },
     {
      "name": "緩和之",
      "ilvl": 50,
      "weight": 500,
      "text": "減少(46—50)%你身上的流血持續時間",
      "template": "減少#%你身上的流血持續時間",
      "ranges": [
       [
        46,
        50
       ]
      ],
      "tier": 9
     },
     {
      "name": "治癒之",
      "ilvl": 50,
      "weight": 500,
      "text": "減少(46—50)%你身上的中毒持續時間",
      "template": "減少#%你身上的中毒持續時間",
      "ranges": [
       [
        46,
        50
       ]
      ],
      "tier": 8
     },
     {
      "name": "驚魂之",
      "ilvl": 50,
      "weight": 500,
      "text": "減少(46—50)%你身上的點燃持續時間",
      "template": "減少#%你身上的點燃持續時間",
      "ranges": [
       [
        46,
        50
       ]
      ],
      "tier": 7
     },
     {
      "name": "安撫之",
      "ilvl": 64,
      "weight": 500,
      "text": "減少(51—55)%你身上的流血持續時間",
      "template": "減少#%你身上的流血持續時間",
      "ranges": [
       [
        51,
        55
       ]
      ],
      "tier": 6
     },
     {
      "name": "萬靈丹之",
      "ilvl": 64,
      "weight": 500,
      "text": "減少(51—55)%你身上的中毒持續時間",
      "template": "減少#%你身上的中毒持續時間",
      "ranges": [
       [
        51,
        55
       ]
      ],
      "tier": 5
     },
     {
      "name": "淬火之",
      "ilvl": 64,
      "weight": 500,
      "text": "減少(51—55)%你身上的點燃持續時間",
      "template": "減少#%你身上的點燃持續時間",
      "ranges": [
       [
        51,
        55
       ]
      ],
      "tier": 4
     },
     {
      "name": "止血之",
      "ilvl": 76,
      "weight": 500,
      "text": "減少(56—60)%你身上的流血持續時間",
      "template": "減少#%你身上的流血持續時間",
      "ranges": [
       [
        56,
        60
       ]
      ],
      "tier": 3
     },
     {
      "name": "解藥之",
      "ilvl": 76,
      "weight": 500,
      "text": "減少(56—60)%你身上的中毒持續時間",
      "template": "減少#%你身上的中毒持續時間",
      "ranges": [
       [
        56,
        60
       ]
      ],
      "tier": 2
     },
     {
      "name": "澆熄之",
      "ilvl": 76,
      "weight": 500,
      "text": "減少(56—60)%你身上的點燃持續時間",
      "template": "減少#%你身上的點燃持續時間",
      "ranges": [
       [
        56,
        60
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "Strength",
    "tiers": [
     {
      "name": "野蠻之",
      "ilvl": 1,
      "weight": 500,
      "text": "+(5—8)點力量",
      "template": "+#點力量",
      "ranges": [
       [
        5,
        8
       ]
      ],
      "tier": 8
     },
     {
      "name": "摔角手之",
      "ilvl": 11,
      "weight": 500,
      "text": "+(9—12)點力量",
      "template": "+#點力量",
      "ranges": [
       [
        9,
        12
       ]
      ],
      "tier": 7
     },
     {
      "name": "熊之",
      "ilvl": 22,
      "weight": 500,
      "text": "+(13—16)點力量",
      "template": "+#點力量",
      "ranges": [
       [
        13,
        16
       ]
      ],
      "tier": 6
     },
     {
      "name": "獅子之",
      "ilvl": 33,
      "weight": 500,
      "text": "+(17—20)點力量",
      "template": "+#點力量",
      "ranges": [
       [
        17,
        20
       ]
      ],
      "tier": 5
     },
     {
      "name": "大猩猩之",
      "ilvl": 44,
      "weight": 500,
      "text": "+(21—24)點力量",
      "template": "+#點力量",
      "ranges": [
       [
        21,
        24
       ]
      ],
      "tier": 4
     },
     {
      "name": "巨人之",
      "ilvl": 55,
      "weight": 500,
      "text": "+(25—27)點力量",
      "template": "+#點力量",
      "ranges": [
       [
        25,
        27
       ]
      ],
      "tier": 3
     },
     {
      "name": "海獸之",
      "ilvl": 66,
      "weight": 500,
      "text": "+(28—30)點力量",
      "template": "+#點力量",
      "ranges": [
       [
        28,
        30
       ]
      ],
      "tier": 2
     },
     {
      "name": "泰坦之",
      "ilvl": 74,
      "weight": 500,
      "text": "+(31—33)點力量",
      "template": "+#點力量",
      "ranges": [
       [
        31,
        33
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "StunThreshold",
    "tiers": [
     {
      "name": "厚皮之",
      "ilvl": 1,
      "weight": 800,
      "text": "暈眩門檻+(6—11)",
      "template": "暈眩門檻+#",
      "ranges": [
       [
        6,
        11
       ]
      ],
      "tier": 10
     },
     {
      "name": "韌膚之",
      "ilvl": 8,
      "weight": 800,
      "text": "暈眩門檻+(12—29)",
      "template": "暈眩門檻+#",
      "ranges": [
       [
        12,
        29
       ]
      ],
      "tier": 9
     },
     {
      "name": "石皮之",
      "ilvl": 15,
      "weight": 800,
      "text": "暈眩門檻+(30—49)",
      "template": "暈眩門檻+#",
      "ranges": [
       [
        30,
        49
       ]
      ],
      "tier": 8
     },
     {
      "name": "金屬皮之",
      "ilvl": 22,
      "weight": 800,
      "text": "暈眩門檻+(50—72)",
      "template": "暈眩門檻+#",
      "ranges": [
       [
        50,
        72
       ]
      ],
      "tier": 7
     },
     {
      "name": "鋼皮之",
      "ilvl": 29,
      "weight": 800,
      "text": "暈眩門檻+(73—97)",
      "template": "暈眩門檻+#",
      "ranges": [
       [
        73,
        97
       ]
      ],
      "tier": 6
     },
     {
      "name": "石膚之",
      "ilvl": 36,
      "weight": 800,
      "text": "暈眩門檻+(98—124)",
      "template": "暈眩門檻+#",
      "ranges": [
       [
        98,
        124
       ]
      ],
      "tier": 5
     },
     {
      "name": "鉑膚之",
      "ilvl": 45,
      "weight": 800,
      "text": "暈眩門檻+(125—163)",
      "template": "暈眩門檻+#",
      "ranges": [
       [
        125,
        163
       ]
      ],
      "tier": 4
     },
     {
      "name": "金剛皮之",
      "ilvl": 54,
      "weight": 800,
      "text": "暈眩門檻+(164—206)",
      "template": "暈眩門檻+#",
      "ranges": [
       [
        164,
        206
       ]
      ],
      "tier": 3
     },
     {
      "name": "玉皮之",
      "ilvl": 63,
      "weight": 800,
      "text": "暈眩門檻+(207—253)",
      "template": "暈眩門檻+#",
      "ranges": [
       [
        207,
        253
       ]
      ],
      "tier": 2
     },
     {
      "name": "曜膚之",
      "ilvl": 72,
      "weight": 800,
      "text": "暈眩門檻+(254—304)",
      "template": "暈眩門檻+#",
      "ranges": [
       [
        254,
        304
       ]
      ],
      "tier": 1
     }
    ]
   }
  ]
 },
 "Body_Armours_str_int": {
  "prefix": [
   {
    "family": "BaseLocalDefences",
    "tiers": [
     {
      "name": "被祝福的",
      "ilvl": 1,
      "weight": 1000,
      "text": "+(9—16)護甲值+(5—8)最大能量護盾",
      "template": "+#護甲值+#最大能量護盾",
      "ranges": [
       [
        9,
        16
       ],
       [
        5,
        8
       ]
      ],
      "tier": 8
     },
     {
      "name": "神聖的",
      "ilvl": 16,
      "weight": 1000,
      "text": "+(17—46)護甲值+(9—15)最大能量護盾",
      "template": "+#護甲值+#最大能量護盾",
      "ranges": [
       [
        17,
        46
       ],
       [
        9,
        15
       ]
      ],
      "tier": 7
     },
     {
      "name": "聖化的",
      "ilvl": 33,
      "weight": 1000,
      "text": "+(47—71)護甲值+(16—21)最大能量護盾",
      "template": "+#護甲值+#最大能量護盾",
      "ranges": [
       [
        47,
        71
       ],
       [
        16,
        21
       ]
      ],
      "tier": 6
     },
     {
      "name": "聖潔的",
      "ilvl": 46,
      "weight": 1000,
      "text": "+(72—85)護甲值+(22—25)最大能量護盾",
      "template": "+#護甲值+#最大能量護盾",
      "ranges": [
       [
        72,
        85
       ],
       [
        22,
        25
       ]
      ],
      "tier": 5
     },
     {
      "name": "幸福的",
      "ilvl": 54,
      "weight": 1000,
      "text": "+(86—102)護甲值+(26—29)最大能量護盾",
      "template": "+#護甲值+#最大能量護盾",
      "ranges": [
       [
        86,
        102
       ],
       [
        26,
        29
       ]
      ],
      "tier": 4
     },
     {
      "name": "神祭的",
      "ilvl": 60,
      "weight": 1000,
      "text": "+(103—127)護甲值+(30—36)最大能量護盾",
      "template": "+#護甲值+#最大能量護盾",
      "ranges": [
       [
        103,
        127
       ],
       [
        30,
        36
       ]
      ],
      "tier": 3
     },
     {
      "name": "聖潔的",
      "ilvl": 65,
      "weight": 1000,
      "text": "+(128—149)護甲值+(37—42)最大能量護盾",
      "template": "+#護甲值+#最大能量護盾",
      "ranges": [
       [
        128,
        149
       ],
       [
        37,
        42
       ]
      ],
      "tier": 2
     },
     {
      "name": "虔誠的",
      "ilvl": 75,
      "weight": 1000,
      "text": "+(150—170)護甲值+(43—48)最大能量護盾",
      "template": "+#護甲值+#最大能量護盾",
      "ranges": [
       [
        150,
        170
       ],
       [
        43,
        48
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "BaseLocalDefencesAndDefencePercent",
    "tiers": [
     {
      "name": "信仰的",
      "ilvl": 8,
      "weight": 1000,
      "text": "+(3—5)護甲值+(2—4)最大能量護盾增加(6—13)%護甲值和能量護盾",
      "template": "+#護甲值+#最大能量護盾增加#%護甲值和能量護盾",
      "ranges": [
       [
        3,
        5
       ],
       [
        2,
        4
       ],
       [
        6,
        13
       ]
      ],
      "tier": 6
     },
     {
      "name": "高貴的",
      "ilvl": 16,
      "weight": 1000,
      "text": "+(6—16)護甲值+(5—6)最大能量護盾增加(14—20)%護甲值和能量護盾",
      "template": "+#護甲值+#最大能量護盾增加#%護甲值和能量護盾",
      "ranges": [
       [
        6,
        16
       ],
       [
        5,
        6
       ],
       [
        14,
        20
       ]
      ],
      "tier": 5
     },
     {
      "name": "判官的",
      "ilvl": 33,
      "weight": 1000,
      "text": "+(17—23)護甲值+(7—8)最大能量護盾增加(21—26)%護甲值和能量護盾",
      "template": "+#護甲值+#最大能量護盾增加#%護甲值和能量護盾",
      "ranges": [
       [
        17,
        23
       ],
       [
        7,
        8
       ],
       [
        21,
        26
       ]
      ],
      "tier": 4
     },
     {
      "name": "聖戰士的",
      "ilvl": 46,
      "weight": 1000,
      "text": "+(24—32)護甲值+(9—10)最大能量護盾增加(27—32)%護甲值和能量護盾",
      "template": "+#護甲值+#最大能量護盾增加#%護甲值和能量護盾",
      "ranges": [
       [
        24,
        32
       ],
       [
        9,
        10
       ],
       [
        27,
        32
       ]
      ],
      "tier": 3
     },
     {
      "name": "聖騎的",
      "ilvl": 60,
      "weight": 1000,
      "text": "+(33—41)護甲值+(11—12)最大能量護盾增加(33—38)%護甲值和能量護盾",
      "template": "+#護甲值+#最大能量護盾增加#%護甲值和能量護盾",
      "ranges": [
       [
        33,
        41
       ],
       [
        11,
        12
       ],
       [
        33,
        38
       ]
      ],
      "tier": 2
     },
     {
      "name": "宏偉",
      "ilvl": 78,
      "weight": 1000,
      "text": "+(42—52)護甲值+(13—15)最大能量護盾增加(39—42)%護甲值和能量護盾",
      "template": "+#護甲值+#最大能量護盾增加#%護甲值和能量護盾",
      "ranges": [
       [
        42,
        52
       ],
       [
        13,
        15
       ],
       [
        39,
        42
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "BaseLocalDefencesAndLife",
    "tiers": [
     {
      "name": "預言的",
      "ilvl": 8,
      "weight": 1000,
      "text": "增加(6—13)%護甲值和能量護盾+(7—10)最大生命",
      "template": "增加#%護甲值和能量護盾+#最大生命",
      "ranges": [
       [
        6,
        13
       ],
       [
        7,
        10
       ]
      ],
      "tier": 6
     },
     {
      "name": "占卜的",
      "ilvl": 16,
      "weight": 1000,
      "text": "增加(14—20)%護甲值和能量護盾+(11—19)最大生命",
      "template": "增加#%護甲值和能量護盾+#最大生命",
      "ranges": [
       [
        14,
        20
       ],
       [
        11,
        19
       ]
      ],
      "tier": 5
     },
     {
      "name": "德魯伊的",
      "ilvl": 33,
      "weight": 1000,
      "text": "增加(21—26)%護甲值和能量護盾+(20—25)最大生命",
      "template": "增加#%護甲值和能量護盾+#最大生命",
      "ranges": [
       [
        21,
        26
       ],
       [
        20,
        25
       ]
      ],
      "tier": 4
     },
     {
      "name": "占星的",
      "ilvl": 46,
      "weight": 1000,
      "text": "增加(27—32)%護甲值和能量護盾+(26—32)最大生命",
      "template": "增加#%護甲值和能量護盾+#最大生命",
      "ranges": [
       [
        27,
        32
       ],
       [
        26,
        32
       ]
      ],
      "tier": 3
     },
     {
      "name": "空想家的",
      "ilvl": 60,
      "weight": 1000,
      "text": "增加(33—38)%護甲值和能量護盾+(33—41)最大生命",
      "template": "增加#%護甲值和能量護盾+#最大生命",
      "ranges": [
       [
        33,
        38
       ],
       [
        33,
        41
       ]
      ],
      "tier": 2
     },
     {
      "name": "預言者的",
      "ilvl": 78,
      "weight": 1000,
      "text": "增加(39—42)%護甲值和能量護盾+(42—49)最大生命",
      "template": "增加#%護甲值和能量護盾+#最大生命",
      "ranges": [
       [
        39,
        42
       ],
       [
        42,
        49
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "BaseSpirit",
    "tiers": [
     {
      "name": "淑女的",
      "ilvl": 16,
      "weight": 500,
      "text": "+(30—33)精魂",
      "template": "+#精魂",
      "ranges": [
       [
        30,
        33
       ]
      ],
      "tier": 8
     },
     {
      "name": "女爵的",
      "ilvl": 25,
      "weight": 500,
      "text": "+(34—37)精魂",
      "template": "+#精魂",
      "ranges": [
       [
        34,
        37
       ]
      ],
      "tier": 7
     },
     {
      "name": "女子爵的",
      "ilvl": 33,
      "weight": 500,
      "text": "+(38—42)精魂",
      "template": "+#精魂",
      "ranges": [
       [
        38,
        42
       ]
      ],
      "tier": 6
     },
     {
      "name": "子爵夫人的",
      "ilvl": 46,
      "weight": 500,
      "text": "+(43—46)精魂",
      "template": "+#精魂",
      "ranges": [
       [
        43,
        46
       ]
      ],
      "tier": 5
     },
     {
      "name": "伯爵夫人的",
      "ilvl": 54,
      "weight": 400,
      "text": "+(47—50)精魂",
      "template": "+#精魂",
      "ranges": [
       [
        47,
        50
       ]
      ],
      "tier": 4
     },
     {
      "name": "公爵夫人的",
      "ilvl": 60,
      "weight": 300,
      "text": "+(51—53)精魂",
      "template": "+#精魂",
      "ranges": [
       [
        51,
        53
       ]
      ],
      "tier": 3
     },
     {
      "name": "公主的",
      "ilvl": 65,
      "weight": 200,
      "text": "+(54—56)精魂",
      "template": "+#精魂",
      "ranges": [
       [
        54,
        56
       ]
      ],
      "tier": 2
     },
     {
      "name": "女皇的",
      "ilvl": 78,
      "weight": 100,
      "text": "+(57—61)精魂",
      "template": "+#精魂",
      "ranges": [
       [
        57,
        61
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "DefencesPercent",
    "tiers": [
     {
      "name": "嵌入的",
      "ilvl": 2,
      "weight": 1000,
      "text": "增加(15—26)%護甲值和能量護盾",
      "template": "增加#%護甲值和能量護盾",
      "ranges": [
       [
        15,
        26
       ]
      ],
      "tier": 8
     },
     {
      "name": "紮根的",
      "ilvl": 16,
      "weight": 1000,
      "text": "增加(27—42)%護甲值和能量護盾",
      "template": "增加#%護甲值和能量護盾",
      "ranges": [
       [
        27,
        42
       ]
      ],
      "tier": 7
     },
     {
      "name": "灌輸的",
      "ilvl": 33,
      "weight": 1000,
      "text": "增加(43—55)%護甲值和能量護盾",
      "template": "增加#%護甲值和能量護盾",
      "ranges": [
       [
        43,
        55
       ]
      ],
      "tier": 6
     },
     {
      "name": "灌注的",
      "ilvl": 46,
      "weight": 1000,
      "text": "增加(56—67)%護甲值和能量護盾",
      "template": "增加#%護甲值和能量護盾",
      "ranges": [
       [
        56,
        67
       ]
      ],
      "tier": 5
     },
     {
      "name": "重灌的",
      "ilvl": 54,
      "weight": 1000,
      "text": "增加(68—79)%護甲值和能量護盾",
      "template": "增加#%護甲值和能量護盾",
      "ranges": [
       [
        68,
        79
       ]
      ],
      "tier": 4
     },
     {
      "name": "竄改的",
      "ilvl": 60,
      "weight": 1000,
      "text": "增加(80—91)%護甲值和能量護盾",
      "template": "增加#%護甲值和能量護盾",
      "ranges": [
       [
        80,
        91
       ]
      ],
      "tier": 3
     },
     {
      "name": "鼓舞的",
      "ilvl": 65,
      "weight": 1000,
      "text": "增加(92—100)%護甲值和能量護盾",
      "template": "增加#%護甲值和能量護盾",
      "ranges": [
       [
        92,
        100
       ]
      ],
      "tier": 2
     },
     {
      "name": "滲入的",
      "ilvl": 75,
      "weight": 1000,
      "text": "增加(101—110)%護甲值和能量護盾",
      "template": "增加#%護甲值和能量護盾",
      "ranges": [
       [
        101,
        110
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "IncreasedLife",
    "tiers": [
     {
      "name": "健壯之",
      "ilvl": 1,
      "weight": 1000,
      "text": "+(10—19)最大生命",
      "template": "+#最大生命",
      "ranges": [
       [
        10,
        19
       ]
      ],
      "tier": 13
     },
     {
      "name": "健康的",
      "ilvl": 6,
      "weight": 1000,
      "text": "+(20—29)最大生命",
      "template": "+#最大生命",
      "ranges": [
       [
        20,
        29
       ]
      ],
      "tier": 12
     },
     {
      "name": "樂觀的",
      "ilvl": 16,
      "weight": 1000,
      "text": "+(30—39)最大生命",
      "template": "+#最大生命",
      "ranges": [
       [
        30,
        39
       ]
      ],
      "tier": 11
     },
     {
      "name": "堅信的",
      "ilvl": 24,
      "weight": 1000,
      "text": "+(40—59)最大生命",
      "template": "+#最大生命",
      "ranges": [
       [
        40,
        59
       ]
      ],
      "tier": 10
     },
     {
      "name": "堅毅者",
      "ilvl": 33,
      "weight": 1000,
      "text": "+(60—69)最大生命",
      "template": "+#最大生命",
      "ranges": [
       [
        60,
        69
       ]
      ],
      "tier": 9
     },
     {
      "name": "健壯的",
      "ilvl": 38,
      "weight": 1000,
      "text": "+(70—84)最大生命",
      "template": "+#最大生命",
      "ranges": [
       [
        70,
        84
       ]
      ],
      "tier": 8
     },
     {
      "name": "豐腴的",
      "ilvl": 46,
      "weight": 1000,
      "text": "+(85—99)最大生命",
      "template": "+#最大生命",
      "ranges": [
       [
        85,
        99
       ]
      ],
      "tier": 7
     },
     {
      "name": "陽剛的",
      "ilvl": 54,
      "weight": 1000,
      "text": "+(100—119)最大生命",
      "template": "+#最大生命",
      "ranges": [
       [
        100,
        119
       ]
      ],
      "tier": 6
     },
     {
      "name": "運動員的",
      "ilvl": 60,
      "weight": 1000,
      "text": "+(120—149)最大生命",
      "template": "+#最大生命",
      "ranges": [
       [
        120,
        149
       ]
      ],
      "tier": 5
     },
     {
      "name": "豐饒的",
      "ilvl": 65,
      "weight": 1000,
      "text": "+(150—174)最大生命",
      "template": "+#最大生命",
      "ranges": [
       [
        150,
        174
       ]
      ],
      "tier": 4
     },
     {
      "name": "蓬勃的",
      "ilvl": 70,
      "weight": 1000,
      "text": "+(175—189)最大生命",
      "template": "+#最大生命",
      "ranges": [
       [
        175,
        189
       ]
      ],
      "tier": 3
     },
     {
      "name": "狂喜的",
      "ilvl": 75,
      "weight": 1000,
      "text": "+(190—199)最大生命",
      "template": "+#最大生命",
      "ranges": [
       [
        190,
        199
       ]
      ],
      "tier": 2
     },
     {
      "name": "重要的",
      "ilvl": 80,
      "weight": 1000,
      "text": "+(200—214)最大生命",
      "template": "+#最大生命",
      "ranges": [
       [
        200,
        214
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "Thorns",
    "tiers": [
     {
      "name": "多刺的",
      "ilvl": 1,
      "weight": 1000,
      "text": "(1—2)至(3—4)點物理荊棘傷害",
      "template": "#至#點物理荊棘傷害",
      "ranges": [
       [
        1,
        2
       ],
       [
        3,
        4
       ]
      ],
      "tier": 7
     },
     {
      "name": "帶刺的",
      "ilvl": 10,
      "weight": 1000,
      "text": "(5—7)至(7—10)點物理荊棘傷害",
      "template": "#至#點物理荊棘傷害",
      "ranges": [
       [
        5,
        7
       ],
       [
        7,
        10
       ]
      ],
      "tier": 6
     },
     {
      "name": "尖刺的",
      "ilvl": 19,
      "weight": 1000,
      "text": "(11—16)至(17—23)點物理荊棘傷害",
      "template": "#至#點物理荊棘傷害",
      "ranges": [
       [
        11,
        16
       ],
       [
        17,
        23
       ]
      ],
      "tier": 5
     },
     {
      "name": "尖銳的",
      "ilvl": 38,
      "weight": 1000,
      "text": "(24—35)至(36—53)點物理荊棘傷害",
      "template": "#至#點物理荊棘傷害",
      "ranges": [
       [
        24,
        35
       ],
       [
        36,
        53
       ]
      ],
      "tier": 4
     },
     {
      "name": "尖刺",
      "ilvl": 48,
      "weight": 1000,
      "text": "(40—60)至(61—92)點物理荊棘傷害",
      "template": "#至#點物理荊棘傷害",
      "ranges": [
       [
        40,
        60
       ],
       [
        61,
        92
       ]
      ],
      "tier": 3
     },
     {
      "name": "尖刃",
      "ilvl": 63,
      "weight": 1000,
      "text": "(64—97)至(98—145)點物理荊棘傷害",
      "template": "#至#點物理荊棘傷害",
      "ranges": [
       [
        64,
        97
       ],
       [
        98,
        145
       ]
      ],
      "tier": 2
     },
     {
      "name": "鋸齒的",
      "ilvl": 74,
      "weight": 1000,
      "text": "(101—151)至(152—220)點物理荊棘傷害",
      "template": "#至#點物理荊棘傷害",
      "ranges": [
       [
        101,
        151
       ],
       [
        152,
        220
       ]
      ],
      "tier": 1
     }
    ]
   }
  ],
  "suffix": [
   {
    "family": "ArmourAppliesToElementalDamage",
    "tiers": [
     {
      "name": "覆蓋之",
      "ilvl": 1,
      "weight": 500,
      "text": "+(14—19)%的護甲值也會套用至元素傷害",
      "template": "+#%的護甲值也會套用至元素傷害",
      "ranges": [
       [
        14,
        19
       ]
      ],
      "tier": 6
     },
     {
      "name": "覆套之",
      "ilvl": 16,
      "weight": 500,
      "text": "+(20—25)%的護甲值也會套用至元素傷害",
      "template": "+#%的護甲值也會套用至元素傷害",
      "ranges": [
       [
        20,
        25
       ]
      ],
      "tier": 5
     },
     {
      "name": "內襯之",
      "ilvl": 36,
      "weight": 500,
      "text": "+(26—31)%的護甲值也會套用至元素傷害",
      "template": "+#%的護甲值也會套用至元素傷害",
      "ranges": [
       [
        26,
        31
       ]
      ],
      "tier": 4
     },
     {
      "name": "鋪墊之",
      "ilvl": 48,
      "weight": 500,
      "text": "+(32—37)%的護甲值也會套用至元素傷害",
      "template": "+#%的護甲值也會套用至元素傷害",
      "ranges": [
       [
        32,
        37
       ]
      ],
      "tier": 3
     },
     {
      "name": "鑲邊之",
      "ilvl": 66,
      "weight": 500,
      "text": "+(38—43)%的護甲值也會套用至元素傷害",
      "template": "+#%的護甲值也會套用至元素傷害",
      "ranges": [
       [
        38,
        43
       ]
      ],
      "tier": 2
     },
     {
      "name": "熱反射之",
      "ilvl": 81,
      "weight": 500,
      "text": "+(44—50)%的護甲值也會套用至元素傷害",
      "template": "+#%的護甲值也會套用至元素傷害",
      "ranges": [
       [
        44,
        50
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "ChaosResistance",
    "tiers": [
     {
      "name": "失落之",
      "ilvl": 16,
      "weight": 250,
      "text": "+(4—7)%混沌抗性",
      "template": "+#%混沌抗性",
      "ranges": [
       [
        4,
        7
       ]
      ],
      "tier": 6
     },
     {
      "name": "放逐之",
      "ilvl": 30,
      "weight": 250,
      "text": "+(8—11)%混沌抗性",
      "template": "+#%混沌抗性",
      "ranges": [
       [
        8,
        11
       ]
      ],
      "tier": 5
     },
     {
      "name": "驅逐之",
      "ilvl": 44,
      "weight": 250,
      "text": "+(12—15)%混沌抗性",
      "template": "+#%混沌抗性",
      "ranges": [
       [
        12,
        15
       ]
      ],
      "tier": 4
     },
     {
      "name": "出境之",
      "ilvl": 56,
      "weight": 250,
      "text": "+(16—19)%混沌抗性",
      "template": "+#%混沌抗性",
      "ranges": [
       [
        16,
        19
       ]
      ],
      "tier": 3
     },
     {
      "name": "流亡之",
      "ilvl": 68,
      "weight": 250,
      "text": "+(20—23)%混沌抗性",
      "template": "+#%混沌抗性",
      "ranges": [
       [
        20,
        23
       ]
      ],
      "tier": 2
     },
     {
      "name": "巴曼斯之",
      "ilvl": 81,
      "weight": 250,
      "text": "+(24—27)%混沌抗性",
      "template": "+#%混沌抗性",
      "ranges": [
       [
        24,
        27
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "ColdResistance",
    "tiers": [
     {
      "name": "海豹之",
      "ilvl": 1,
      "weight": 1000,
      "text": "+(6—10)%冰冷抗性",
      "template": "+#%冰冷抗性",
      "ranges": [
       [
        6,
        10
       ]
      ],
      "tier": 8
     },
     {
      "name": "企鵝之",
      "ilvl": 14,
      "weight": 1000,
      "text": "+(11—15)%冰冷抗性",
      "template": "+#%冰冷抗性",
      "ranges": [
       [
        11,
        15
       ]
      ],
      "tier": 7
     },
     {
      "name": "獨角鯨之",
      "ilvl": 26,
      "weight": 1000,
      "text": "+(16—20)%冰冷抗性",
      "template": "+#%冰冷抗性",
      "ranges": [
       [
        16,
        20
       ]
      ],
      "tier": 6
     },
     {
      "name": "雪人之",
      "ilvl": 38,
      "weight": 1000,
      "text": "+(21—25)%冰冷抗性",
      "template": "+#%冰冷抗性",
      "ranges": [
       [
        21,
        25
       ]
      ],
      "tier": 5
     },
     {
      "name": "海象之",
      "ilvl": 50,
      "weight": 1000,
      "text": "+(26—30)%冰冷抗性",
      "template": "+#%冰冷抗性",
      "ranges": [
       [
        26,
        30
       ]
      ],
      "tier": 4
     },
     {
      "name": "北極熊之",
      "ilvl": 60,
      "weight": 1000,
      "text": "+(31—35)%冰冷抗性",
      "template": "+#%冰冷抗性",
      "ranges": [
       [
        31,
        35
       ]
      ],
      "tier": 3
     },
     {
      "name": "冰之",
      "ilvl": 71,
      "weight": 1000,
      "text": "+(36—40)%冰冷抗性",
      "template": "+#%冰冷抗性",
      "ranges": [
       [
        36,
        40
       ]
      ],
      "tier": 2
     },
     {
      "name": "哈斯特之",
      "ilvl": 82,
      "weight": 1000,
      "text": "+(41—45)%冰冷抗性",
      "template": "+#%冰冷抗性",
      "ranges": [
       [
        41,
        45
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "EnergyShieldRegeneration",
    "tiers": [
     {
      "name": "緩衝之",
      "ilvl": 48,
      "weight": 1,
      "text": "增加(16—19)%能量護盾充能率",
      "template": "增加#%能量護盾充能率",
      "ranges": [
       [
        16,
        19
       ]
      ],
      "tier": 3
     },
     {
      "name": "熱情之",
      "ilvl": 66,
      "weight": 1,
      "text": "增加(20—23)%能量護盾充能率",
      "template": "增加#%能量護盾充能率",
      "ranges": [
       [
        20,
        23
       ]
      ],
      "tier": 2
     },
     {
      "name": "遍布之",
      "ilvl": 81,
      "weight": 1,
      "text": "增加(24—27)%能量護盾充能率",
      "template": "增加#%能量護盾充能率",
      "ranges": [
       [
        24,
        27
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "FireResistance",
    "tiers": [
     {
      "name": "幼龍之",
      "ilvl": 1,
      "weight": 1000,
      "text": "+(6—10)%火焰抗性",
      "template": "+#%火焰抗性",
      "ranges": [
       [
        6,
        10
       ]
      ],
      "tier": 8
     },
     {
      "name": "火蜥蜴之",
      "ilvl": 12,
      "weight": 1000,
      "text": "+(11—15)%火焰抗性",
      "template": "+#%火焰抗性",
      "ranges": [
       [
        11,
        15
       ]
      ],
      "tier": 7
     },
     {
      "name": "火龍之",
      "ilvl": 24,
      "weight": 1000,
      "text": "+(16—20)%火焰抗性",
      "template": "+#%火焰抗性",
      "ranges": [
       [
        16,
        20
       ]
      ],
      "tier": 6
     },
     {
      "name": "窯爐之",
      "ilvl": 36,
      "weight": 1000,
      "text": "+(21—25)%火焰抗性",
      "template": "+#%火焰抗性",
      "ranges": [
       [
        21,
        25
       ]
      ],
      "tier": 5
     },
     {
      "name": "爐火之",
      "ilvl": 48,
      "weight": 1000,
      "text": "+(26—30)%火焰抗性",
      "template": "+#%火焰抗性",
      "ranges": [
       [
        26,
        30
       ]
      ],
      "tier": 4
     },
     {
      "name": "火山之",
      "ilvl": 60,
      "weight": 1000,
      "text": "+(31—35)%火焰抗性",
      "template": "+#%火焰抗性",
      "ranges": [
       [
        31,
        35
       ]
      ],
      "tier": 3
     },
     {
      "name": "熔岩屏障之",
      "ilvl": 71,
      "weight": 1000,
      "text": "+(36—40)%火焰抗性",
      "template": "+#%火焰抗性",
      "ranges": [
       [
        36,
        40
       ]
      ],
      "tier": 2
     },
     {
      "name": "提耶須之",
      "ilvl": 82,
      "weight": 1000,
      "text": "+(41—45)%火焰抗性",
      "template": "+#%火焰抗性",
      "ranges": [
       [
        41,
        45
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "Intelligence",
    "tiers": [
     {
      "name": "瞳孔之",
      "ilvl": 1,
      "weight": 500,
      "text": "+(5—8)點智慧",
      "template": "+#點智慧",
      "ranges": [
       [
        5,
        8
       ]
      ],
      "tier": 8
     },
     {
      "name": "學徒之",
      "ilvl": 11,
      "weight": 500,
      "text": "+(9—12)點智慧",
      "template": "+#點智慧",
      "ranges": [
       [
        9,
        12
       ]
      ],
      "tier": 7
     },
     {
      "name": "奇才之",
      "ilvl": 22,
      "weight": 500,
      "text": "+(13—16)點智慧",
      "template": "+#點智慧",
      "ranges": [
       [
        13,
        16
       ]
      ],
      "tier": 6
     },
     {
      "name": "預言之",
      "ilvl": 33,
      "weight": 500,
      "text": "+(17—20)點智慧",
      "template": "+#點智慧",
      "ranges": [
       [
        17,
        20
       ]
      ],
      "tier": 5
     },
     {
      "name": "哲學家之",
      "ilvl": 44,
      "weight": 500,
      "text": "+(21—24)點智慧",
      "template": "+#點智慧",
      "ranges": [
       [
        21,
        24
       ]
      ],
      "tier": 4
     },
     {
      "name": "聖人之",
      "ilvl": 55,
      "weight": 500,
      "text": "+(25—27)點智慧",
      "template": "+#點智慧",
      "ranges": [
       [
        25,
        27
       ]
      ],
      "tier": 3
     },
     {
      "name": "大學者之",
      "ilvl": 66,
      "weight": 500,
      "text": "+(28—30)點智慧",
      "template": "+#點智慧",
      "ranges": [
       [
        28,
        30
       ]
      ],
      "tier": 2
     },
     {
      "name": "神技之",
      "ilvl": 74,
      "weight": 500,
      "text": "+(31—33)點智慧",
      "template": "+#點智慧",
      "ranges": [
       [
        31,
        33
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "LifeRegeneration",
    "tiers": [
     {
      "name": "蠑螈之",
      "ilvl": 1,
      "weight": 1000,
      "text": "(1—2)每秒生命回復",
      "template": "#每秒生命回復",
      "ranges": [
       [
        1,
        2
       ]
      ],
      "tier": 11
     },
     {
      "name": "蜥蜴之",
      "ilvl": 5,
      "weight": 1000,
      "text": "(2.1—3)每秒生命回復",
      "template": "#每秒生命回復",
      "ranges": [
       [
        2.1,
        3
       ]
      ],
      "tier": 10
     },
     {
      "name": "阿扁蟲之",
      "ilvl": 11,
      "weight": 1000,
      "text": "(3.1—4)每秒生命回復",
      "template": "#每秒生命回復",
      "ranges": [
       [
        3.1,
        4
       ]
      ],
      "tier": 9
     },
     {
      "name": "海星之",
      "ilvl": 17,
      "weight": 1000,
      "text": "(4.1—6)每秒生命回復",
      "template": "#每秒生命回復",
      "ranges": [
       [
        4.1,
        6
       ]
      ],
      "tier": 8
     },
     {
      "name": "九頭蛇之",
      "ilvl": 26,
      "weight": 1000,
      "text": "(6.1—9)每秒生命回復",
      "template": "#每秒生命回復",
      "ranges": [
       [
        6.1,
        9
       ]
      ],
      "tier": 7
     },
     {
      "name": "食人之",
      "ilvl": 35,
      "weight": 1000,
      "text": "(9.1—13)每秒生命回復",
      "template": "#每秒生命回復",
      "ranges": [
       [
        9.1,
        13
       ]
      ],
      "tier": 6
     },
     {
      "name": "康復之",
      "ilvl": 47,
      "weight": 1000,
      "text": "(13.1—18)每秒生命回復",
      "template": "#每秒生命回復",
      "ranges": [
       [
        13.1,
        18
       ]
      ],
      "tier": 5
     },
     {
      "name": "療養之",
      "ilvl": 58,
      "weight": 1000,
      "text": "(18.1—23)每秒生命回復",
      "template": "#每秒生命回復",
      "ranges": [
       [
        18.1,
        23
       ]
      ],
      "tier": 4
     },
     {
      "name": "復興之",
      "ilvl": 68,
      "weight": 1000,
      "text": "(23.1—29)每秒生命回復",
      "template": "#每秒生命回復",
      "ranges": [
       [
        23.1,
        29
       ]
      ],
      "tier": 3
     },
     {
      "name": "不朽之",
      "ilvl": 75,
      "weight": 1000,
      "text": "(29.1—33)每秒生命回復",
      "template": "#每秒生命回復",
      "ranges": [
       [
        29.1,
        33
       ]
      ],
      "tier": 2
     },
     {
      "name": "鳳凰之",
      "ilvl": 81,
      "weight": 1000,
      "text": "(33.1—36)每秒生命回復",
      "template": "#每秒生命回復",
      "ranges": [
       [
        33.1,
        36
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "LightningResistance",
    "tiers": [
     {
      "name": "雲朵之",
      "ilvl": 1,
      "weight": 1000,
      "text": "+(6—10)%閃電抗性",
      "template": "+#%閃電抗性",
      "ranges": [
       [
        6,
        10
       ]
      ],
      "tier": 8
     },
     {
      "name": "冰雹之",
      "ilvl": 13,
      "weight": 1000,
      "text": "+(11—15)%閃電抗性",
      "template": "+#%閃電抗性",
      "ranges": [
       [
        11,
        15
       ]
      ],
      "tier": 7
     },
     {
      "name": "暴風之",
      "ilvl": 25,
      "weight": 1000,
      "text": "+(16—20)%閃電抗性",
      "template": "+#%閃電抗性",
      "ranges": [
       [
        16,
        20
       ]
      ],
      "tier": 6
     },
     {
      "name": "積雨雲之",
      "ilvl": 37,
      "weight": 1000,
      "text": "+(21—25)%閃電抗性",
      "template": "+#%閃電抗性",
      "ranges": [
       [
        21,
        25
       ]
      ],
      "tier": 5
     },
     {
      "name": "暴風雨之",
      "ilvl": 49,
      "weight": 1000,
      "text": "+(26—30)%閃電抗性",
      "template": "+#%閃電抗性",
      "ranges": [
       [
        26,
        30
       ]
      ],
      "tier": 4
     },
     {
      "name": "颱風之",
      "ilvl": 60,
      "weight": 1000,
      "text": "+(31—35)%閃電抗性",
      "template": "+#%閃電抗性",
      "ranges": [
       [
        31,
        35
       ]
      ],
      "tier": 3
     },
     {
      "name": "電之",
      "ilvl": 71,
      "weight": 1000,
      "text": "+(36—40)%閃電抗性",
      "template": "+#%閃電抗性",
      "ranges": [
       [
        36,
        40
       ]
      ],
      "tier": 2
     },
     {
      "name": "艾菲吉之",
      "ilvl": 82,
      "weight": 1000,
      "text": "+(41—45)%閃電抗性",
      "template": "+#%閃電抗性",
      "ranges": [
       [
        41,
        45
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "LocalAttributeRequirements",
    "tiers": [
     {
      "name": "值得之",
      "ilvl": 24,
      "weight": 900,
      "text": "減少15%能力值需求",
      "template": "減少#%能力值需求",
      "ranges": [
       [
        15,
        15
       ]
      ],
      "tier": 5
     },
     {
      "name": "容易之",
      "ilvl": 32,
      "weight": 900,
      "text": "減少20%能力值需求",
      "template": "減少#%能力值需求",
      "ranges": [
       [
        20,
        20
       ]
      ],
      "tier": 4
     },
     {
      "name": "長才之",
      "ilvl": 40,
      "weight": 900,
      "text": "減少25%能力值需求",
      "template": "減少#%能力值需求",
      "ranges": [
       [
        25,
        25
       ]
      ],
      "tier": 3
     },
     {
      "name": "高超之",
      "ilvl": 52,
      "weight": 900,
      "text": "減少30%能力值需求",
      "template": "減少#%能力值需求",
      "ranges": [
       [
        30,
        30
       ]
      ],
      "tier": 2
     },
     {
      "name": "熟習之",
      "ilvl": 60,
      "weight": 900,
      "text": "減少35%能力值需求",
      "template": "減少#%能力值需求",
      "ranges": [
       [
        35,
        35
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "ReducedAilmentDuration",
    "tiers": [
     {
      "name": "密封之",
      "ilvl": 21,
      "weight": 500,
      "text": "減少(36—40)%你身上的流血持續時間",
      "template": "減少#%你身上的流血持續時間",
      "ranges": [
       [
        36,
        40
       ]
      ],
      "tier": 15
     },
     {
      "name": "抗毒素之",
      "ilvl": 21,
      "weight": 500,
      "text": "減少(36—40)%你身上的中毒持續時間",
      "template": "減少#%你身上的中毒持續時間",
      "ranges": [
       [
        36,
        40
       ]
      ],
      "tier": 14
     },
     {
      "name": "阻尼之",
      "ilvl": 21,
      "weight": 500,
      "text": "減少(36—40)%你身上的點燃持續時間",
      "template": "減少#%你身上的點燃持續時間",
      "ranges": [
       [
        36,
        40
       ]
      ],
      "tier": 13
     },
     {
      "name": "緩解之",
      "ilvl": 37,
      "weight": 500,
      "text": "減少(41—45)%你身上的流血持續時間",
      "template": "減少#%你身上的流血持續時間",
      "ranges": [
       [
        41,
        45
       ]
      ],
      "tier": 12
     },
     {
      "name": "補救措施之",
      "ilvl": 37,
      "weight": 500,
      "text": "減少(41—45)%你身上的中毒持續時間",
      "template": "減少#%你身上的中毒持續時間",
      "ranges": [
       [
        41,
        45
       ]
      ],
      "tier": 11
     },
     {
      "name": "鎮壓之",
      "ilvl": 37,
      "weight": 500,
      "text": "減少(41—45)%你身上的點燃持續時間",
      "template": "減少#%你身上的點燃持續時間",
      "ranges": [
       [
        41,
        45
       ]
      ],
      "tier": 10
     },
     {
      "name": "緩和之",
      "ilvl": 50,
      "weight": 500,
      "text": "減少(46—50)%你身上的流血持續時間",
      "template": "減少#%你身上的流血持續時間",
      "ranges": [
       [
        46,
        50
       ]
      ],
      "tier": 9
     },
     {
      "name": "治癒之",
      "ilvl": 50,
      "weight": 500,
      "text": "減少(46—50)%你身上的中毒持續時間",
      "template": "減少#%你身上的中毒持續時間",
      "ranges": [
       [
        46,
        50
       ]
      ],
      "tier": 8
     },
     {
      "name": "驚魂之",
      "ilvl": 50,
      "weight": 500,
      "text": "減少(46—50)%你身上的點燃持續時間",
      "template": "減少#%你身上的點燃持續時間",
      "ranges": [
       [
        46,
        50
       ]
      ],
      "tier": 7
     },
     {
      "name": "安撫之",
      "ilvl": 64,
      "weight": 500,
      "text": "減少(51—55)%你身上的流血持續時間",
      "template": "減少#%你身上的流血持續時間",
      "ranges": [
       [
        51,
        55
       ]
      ],
      "tier": 6
     },
     {
      "name": "萬靈丹之",
      "ilvl": 64,
      "weight": 500,
      "text": "減少(51—55)%你身上的中毒持續時間",
      "template": "減少#%你身上的中毒持續時間",
      "ranges": [
       [
        51,
        55
       ]
      ],
      "tier": 5
     },
     {
      "name": "淬火之",
      "ilvl": 64,
      "weight": 500,
      "text": "減少(51—55)%你身上的點燃持續時間",
      "template": "減少#%你身上的點燃持續時間",
      "ranges": [
       [
        51,
        55
       ]
      ],
      "tier": 4
     },
     {
      "name": "止血之",
      "ilvl": 76,
      "weight": 500,
      "text": "減少(56—60)%你身上的流血持續時間",
      "template": "減少#%你身上的流血持續時間",
      "ranges": [
       [
        56,
        60
       ]
      ],
      "tier": 3
     },
     {
      "name": "解藥之",
      "ilvl": 76,
      "weight": 500,
      "text": "減少(56—60)%你身上的中毒持續時間",
      "template": "減少#%你身上的中毒持續時間",
      "ranges": [
       [
        56,
        60
       ]
      ],
      "tier": 2
     },
     {
      "name": "澆熄之",
      "ilvl": 76,
      "weight": 500,
      "text": "減少(56—60)%你身上的點燃持續時間",
      "template": "減少#%你身上的點燃持續時間",
      "ranges": [
       [
        56,
        60
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "Strength",
    "tiers": [
     {
      "name": "野蠻之",
      "ilvl": 1,
      "weight": 500,
      "text": "+(5—8)點力量",
      "template": "+#點力量",
      "ranges": [
       [
        5,
        8
       ]
      ],
      "tier": 8
     },
     {
      "name": "摔角手之",
      "ilvl": 11,
      "weight": 500,
      "text": "+(9—12)點力量",
      "template": "+#點力量",
      "ranges": [
       [
        9,
        12
       ]
      ],
      "tier": 7
     },
     {
      "name": "熊之",
      "ilvl": 22,
      "weight": 500,
      "text": "+(13—16)點力量",
      "template": "+#點力量",
      "ranges": [
       [
        13,
        16
       ]
      ],
      "tier": 6
     },
     {
      "name": "獅子之",
      "ilvl": 33,
      "weight": 500,
      "text": "+(17—20)點力量",
      "template": "+#點力量",
      "ranges": [
       [
        17,
        20
       ]
      ],
      "tier": 5
     },
     {
      "name": "大猩猩之",
      "ilvl": 44,
      "weight": 500,
      "text": "+(21—24)點力量",
      "template": "+#點力量",
      "ranges": [
       [
        21,
        24
       ]
      ],
      "tier": 4
     },
     {
      "name": "巨人之",
      "ilvl": 55,
      "weight": 500,
      "text": "+(25—27)點力量",
      "template": "+#點力量",
      "ranges": [
       [
        25,
        27
       ]
      ],
      "tier": 3
     },
     {
      "name": "海獸之",
      "ilvl": 66,
      "weight": 500,
      "text": "+(28—30)點力量",
      "template": "+#點力量",
      "ranges": [
       [
        28,
        30
       ]
      ],
      "tier": 2
     },
     {
      "name": "泰坦之",
      "ilvl": 74,
      "weight": 500,
      "text": "+(31—33)點力量",
      "template": "+#點力量",
      "ranges": [
       [
        31,
        33
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "StunThreshold",
    "tiers": [
     {
      "name": "厚皮之",
      "ilvl": 1,
      "weight": 800,
      "text": "暈眩門檻+(6—11)",
      "template": "暈眩門檻+#",
      "ranges": [
       [
        6,
        11
       ]
      ],
      "tier": 10
     },
     {
      "name": "韌膚之",
      "ilvl": 8,
      "weight": 800,
      "text": "暈眩門檻+(12—29)",
      "template": "暈眩門檻+#",
      "ranges": [
       [
        12,
        29
       ]
      ],
      "tier": 9
     },
     {
      "name": "石皮之",
      "ilvl": 15,
      "weight": 800,
      "text": "暈眩門檻+(30—49)",
      "template": "暈眩門檻+#",
      "ranges": [
       [
        30,
        49
       ]
      ],
      "tier": 8
     },
     {
      "name": "金屬皮之",
      "ilvl": 22,
      "weight": 800,
      "text": "暈眩門檻+(50—72)",
      "template": "暈眩門檻+#",
      "ranges": [
       [
        50,
        72
       ]
      ],
      "tier": 7
     },
     {
      "name": "鋼皮之",
      "ilvl": 29,
      "weight": 800,
      "text": "暈眩門檻+(73—97)",
      "template": "暈眩門檻+#",
      "ranges": [
       [
        73,
        97
       ]
      ],
      "tier": 6
     },
     {
      "name": "石膚之",
      "ilvl": 36,
      "weight": 800,
      "text": "暈眩門檻+(98—124)",
      "template": "暈眩門檻+#",
      "ranges": [
       [
        98,
        124
       ]
      ],
      "tier": 5
     },
     {
      "name": "鉑膚之",
      "ilvl": 45,
      "weight": 800,
      "text": "暈眩門檻+(125—163)",
      "template": "暈眩門檻+#",
      "ranges": [
       [
        125,
        163
       ]
      ],
      "tier": 4
     },
     {
      "name": "金剛皮之",
      "ilvl": 54,
      "weight": 800,
      "text": "暈眩門檻+(164—206)",
      "template": "暈眩門檻+#",
      "ranges": [
       [
        164,
        206
       ]
      ],
      "tier": 3
     },
     {
      "name": "玉皮之",
      "ilvl": 63,
      "weight": 800,
      "text": "暈眩門檻+(207—253)",
      "template": "暈眩門檻+#",
      "ranges": [
       [
        207,
        253
       ]
      ],
      "tier": 2
     },
     {
      "name": "曜膚之",
      "ilvl": 72,
      "weight": 800,
      "text": "暈眩門檻+(254—304)",
      "template": "暈眩門檻+#",
      "ranges": [
       [
        254,
        304
       ]
      ],
      "tier": 1
     }
    ]
   }
  ]
 },
 "Body_Armours_dex_int": {
  "prefix": [
   {
    "family": "BaseLocalDefences",
    "tiers": [
     {
      "name": "試驗的",
      "ilvl": 1,
      "weight": 1000,
      "text": "+(6—10)閃避值+(5—8)最大能量護盾",
      "template": "+#閃避值+#最大能量護盾",
      "ranges": [
       [
        6,
        10
       ],
       [
        5,
        8
       ]
      ],
      "tier": 8
     },
     {
      "name": "女神的",
      "ilvl": 16,
      "weight": 1000,
      "text": "+(11—41)閃避值+(9—15)最大能量護盾",
      "template": "+#閃避值+#最大能量護盾",
      "ranges": [
       [
        11,
        41
       ],
       [
        9,
        15
       ]
      ],
      "tier": 7
     },
     {
      "name": "氣精的",
      "ilvl": 33,
      "weight": 1000,
      "text": "+(42—64)閃避值+(16—21)最大能量護盾",
      "template": "+#閃避值+#最大能量護盾",
      "ranges": [
       [
        42,
        64
       ],
       [
        16,
        21
       ]
      ],
      "tier": 6
     },
     {
      "name": "天使的",
      "ilvl": 46,
      "weight": 1000,
      "text": "+(65—78)閃避值+(22—25)最大能量護盾",
      "template": "+#閃避值+#最大能量護盾",
      "ranges": [
       [
        65,
        78
       ],
       [
        22,
        25
       ]
      ],
      "tier": 5
     },
     {
      "name": "精神的",
      "ilvl": 54,
      "weight": 1000,
      "text": "+(79—94)閃避值+(26—29)最大能量護盾",
      "template": "+#閃避值+#最大能量護盾",
      "ranges": [
       [
        79,
        94
       ],
       [
        26,
        29
       ]
      ],
      "tier": 4
     },
     {
      "name": "幻像的",
      "ilvl": 60,
      "weight": 1000,
      "text": "+(95—119)閃避值+(30—36)最大能量護盾",
      "template": "+#閃避值+#最大能量護盾",
      "ranges": [
       [
        95,
        119
       ],
       [
        30,
        36
       ]
      ],
      "tier": 3
     },
     {
      "name": "幻影的",
      "ilvl": 65,
      "weight": 1000,
      "text": "+(120—141)閃避值+(37—42)最大能量護盾",
      "template": "+#閃避值+#最大能量護盾",
      "ranges": [
       [
        120,
        141
       ],
       [
        37,
        42
       ]
      ],
      "tier": 2
     },
     {
      "name": "幻想的",
      "ilvl": 75,
      "weight": 1000,
      "text": "+(142—161)閃避值+(43—48)最大能量護盾",
      "template": "+#閃避值+#最大能量護盾",
      "ranges": [
       [
        142,
        161
       ],
       [
        43,
        48
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "BaseLocalDefencesAndDefencePercent",
    "tiers": [
     {
      "name": "追擊者的",
      "ilvl": 8,
      "weight": 1000,
      "text": "+(2—3)閃避值+(2—4)最大能量護盾增加(6—13)%閃避和能量護盾",
      "template": "+#閃避值+#最大能量護盾增加#%閃避和能量護盾",
      "ranges": [
       [
        2,
        3
       ],
       [
        2,
        4
       ],
       [
        6,
        13
       ]
      ],
      "tier": 6
     },
     {
      "name": "追蹤者的",
      "ilvl": 16,
      "weight": 1000,
      "text": "+(4—14)閃避值+(5—6)最大能量護盾增加(14—20)%閃避和能量護盾",
      "template": "+#閃避值+#最大能量護盾增加#%閃避和能量護盾",
      "ranges": [
       [
        4,
        14
       ],
       [
        5,
        6
       ],
       [
        14,
        20
       ]
      ],
      "tier": 5
     },
     {
      "name": "獵人的",
      "ilvl": 33,
      "weight": 1000,
      "text": "+(15—21)閃避值+(7—8)最大能量護盾增加(21—26)%閃避和能量護盾",
      "template": "+#閃避值+#最大能量護盾增加#%閃避和能量護盾",
      "ranges": [
       [
        15,
        21
       ],
       [
        7,
        8
       ],
       [
        21,
        26
       ]
      ],
      "tier": 4
     },
     {
      "name": "幻像的",
      "ilvl": 46,
      "weight": 1000,
      "text": "+(22—29)閃避值+(9—10)最大能量護盾增加(27—32)%閃避和能量護盾",
      "template": "+#閃避值+#最大能量護盾增加#%閃避和能量護盾",
      "ranges": [
       [
        22,
        29
       ],
       [
        9,
        10
       ],
       [
        27,
        32
       ]
      ],
      "tier": 3
     },
     {
      "name": "盜賊的",
      "ilvl": 60,
      "weight": 1000,
      "text": "+(30—39)閃避值+(11—12)最大能量護盾增加(33—38)%閃避和能量護盾",
      "template": "+#閃避值+#最大能量護盾增加#%閃避和能量護盾",
      "ranges": [
       [
        30,
        39
       ],
       [
        11,
        12
       ],
       [
        33,
        38
       ]
      ],
      "tier": 2
     },
     {
      "name": "懼靈的",
      "ilvl": 78,
      "weight": 1000,
      "text": "+(40—50)閃避值+(13—15)最大能量護盾增加(39—42)%閃避和能量護盾",
      "template": "+#閃避值+#最大能量護盾增加#%閃避和能量護盾",
      "ranges": [
       [
        40,
        50
       ],
       [
        13,
        15
       ],
       [
        39,
        42
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "BaseLocalDefencesAndLife",
    "tiers": [
     {
      "name": "詩人的",
      "ilvl": 8,
      "weight": 1000,
      "text": "增加(6—13)%閃避和能量護盾+(7—10)最大生命",
      "template": "增加#%閃避和能量護盾+#最大生命",
      "ranges": [
       [
        6,
        13
       ],
       [
        7,
        10
       ]
      ],
      "tier": 6
     },
     {
      "name": "音樂家的",
      "ilvl": 16,
      "weight": 1000,
      "text": "增加(14—20)%閃避和能量護盾+(11—19)最大生命",
      "template": "增加#%閃避和能量護盾+#最大生命",
      "ranges": [
       [
        14,
        20
       ],
       [
        11,
        19
       ]
      ],
      "tier": 5
     },
     {
      "name": "遊唱詩人的",
      "ilvl": 33,
      "weight": 1000,
      "text": "增加(21—26)%閃避和能量護盾+(20—25)最大生命",
      "template": "增加#%閃避和能量護盾+#最大生命",
      "ranges": [
       [
        21,
        26
       ],
       [
        20,
        25
       ]
      ],
      "tier": 4
     },
     {
      "name": "吟詩者的",
      "ilvl": 46,
      "weight": 1000,
      "text": "增加(27—32)%閃避和能量護盾+(26—32)最大生命",
      "template": "增加#%閃避和能量護盾+#最大生命",
      "ranges": [
       [
        27,
        32
       ],
       [
        26,
        32
       ]
      ],
      "tier": 3
     },
     {
      "name": "吟遊詩人的",
      "ilvl": 60,
      "weight": 1000,
      "text": "增加(33—38)%閃避和能量護盾+(33—41)最大生命",
      "template": "增加#%閃避和能量護盾+#最大生命",
      "ranges": [
       [
        33,
        38
       ],
       [
        33,
        41
       ]
      ],
      "tier": 2
     },
     {
      "name": "演奏家的",
      "ilvl": 78,
      "weight": 1000,
      "text": "增加(39—42)%閃避和能量護盾+(42—49)最大生命",
      "template": "增加#%閃避和能量護盾+#最大生命",
      "ranges": [
       [
        39,
        42
       ],
       [
        42,
        49
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "BaseSpirit",
    "tiers": [
     {
      "name": "淑女的",
      "ilvl": 16,
      "weight": 500,
      "text": "+(30—33)精魂",
      "template": "+#精魂",
      "ranges": [
       [
        30,
        33
       ]
      ],
      "tier": 8
     },
     {
      "name": "女爵的",
      "ilvl": 25,
      "weight": 500,
      "text": "+(34—37)精魂",
      "template": "+#精魂",
      "ranges": [
       [
        34,
        37
       ]
      ],
      "tier": 7
     },
     {
      "name": "女子爵的",
      "ilvl": 33,
      "weight": 500,
      "text": "+(38—42)精魂",
      "template": "+#精魂",
      "ranges": [
       [
        38,
        42
       ]
      ],
      "tier": 6
     },
     {
      "name": "子爵夫人的",
      "ilvl": 46,
      "weight": 500,
      "text": "+(43—46)精魂",
      "template": "+#精魂",
      "ranges": [
       [
        43,
        46
       ]
      ],
      "tier": 5
     },
     {
      "name": "伯爵夫人的",
      "ilvl": 54,
      "weight": 400,
      "text": "+(47—50)精魂",
      "template": "+#精魂",
      "ranges": [
       [
        47,
        50
       ]
      ],
      "tier": 4
     },
     {
      "name": "公爵夫人的",
      "ilvl": 60,
      "weight": 300,
      "text": "+(51—53)精魂",
      "template": "+#精魂",
      "ranges": [
       [
        51,
        53
       ]
      ],
      "tier": 3
     },
     {
      "name": "公主的",
      "ilvl": 65,
      "weight": 200,
      "text": "+(54—56)精魂",
      "template": "+#精魂",
      "ranges": [
       [
        54,
        56
       ]
      ],
      "tier": 2
     },
     {
      "name": "女皇的",
      "ilvl": 78,
      "weight": 100,
      "text": "+(57—61)精魂",
      "template": "+#精魂",
      "ranges": [
       [
        57,
        61
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "DefencesPercent",
    "tiers": [
     {
      "name": "陰影的",
      "ilvl": 2,
      "weight": 1000,
      "text": "增加(15—26)%閃避和能量護盾",
      "template": "增加#%閃避和能量護盾",
      "ranges": [
       [
        15,
        26
       ]
      ],
      "tier": 8
     },
     {
      "name": "空靈的",
      "ilvl": 16,
      "weight": 1000,
      "text": "增加(27—42)%閃避和能量護盾",
      "template": "增加#%閃避和能量護盾",
      "ranges": [
       [
        27,
        42
       ]
      ],
      "tier": 7
     },
     {
      "name": "脫俗的",
      "ilvl": 33,
      "weight": 1000,
      "text": "增加(43—55)%閃避和能量護盾",
      "template": "增加#%閃避和能量護盾",
      "ranges": [
       [
        43,
        55
       ]
      ],
      "tier": 6
     },
     {
      "name": "無常的",
      "ilvl": 46,
      "weight": 1000,
      "text": "增加(56—67)%閃避和能量護盾",
      "template": "增加#%閃避和能量護盾",
      "ranges": [
       [
        56,
        67
       ]
      ],
      "tier": 5
     },
     {
      "name": "逝去的",
      "ilvl": 54,
      "weight": 1000,
      "text": "增加(68—79)%閃避和能量護盾",
      "template": "增加#%閃避和能量護盾",
      "ranges": [
       [
        68,
        79
       ]
      ],
      "tier": 4
     },
     {
      "name": "虛幻的",
      "ilvl": 60,
      "weight": 1000,
      "text": "增加(80—91)%閃避和能量護盾",
      "template": "增加#%閃避和能量護盾",
      "ranges": [
       [
        80,
        91
       ]
      ],
      "tier": 3
     },
     {
      "name": "幻覺的",
      "ilvl": 65,
      "weight": 1000,
      "text": "增加(92—100)%閃避和能量護盾",
      "template": "增加#%閃避和能量護盾",
      "ranges": [
       [
        92,
        100
       ]
      ],
      "tier": 2
     },
     {
      "name": "無形的",
      "ilvl": 75,
      "weight": 1000,
      "text": "增加(101—110)%閃避和能量護盾",
      "template": "增加#%閃避和能量護盾",
      "ranges": [
       [
        101,
        110
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "IncreasedLife",
    "tiers": [
     {
      "name": "健壯之",
      "ilvl": 1,
      "weight": 1000,
      "text": "+(10—19)最大生命",
      "template": "+#最大生命",
      "ranges": [
       [
        10,
        19
       ]
      ],
      "tier": 13
     },
     {
      "name": "健康的",
      "ilvl": 6,
      "weight": 1000,
      "text": "+(20—29)最大生命",
      "template": "+#最大生命",
      "ranges": [
       [
        20,
        29
       ]
      ],
      "tier": 12
     },
     {
      "name": "樂觀的",
      "ilvl": 16,
      "weight": 1000,
      "text": "+(30—39)最大生命",
      "template": "+#最大生命",
      "ranges": [
       [
        30,
        39
       ]
      ],
      "tier": 11
     },
     {
      "name": "堅信的",
      "ilvl": 24,
      "weight": 1000,
      "text": "+(40—59)最大生命",
      "template": "+#最大生命",
      "ranges": [
       [
        40,
        59
       ]
      ],
      "tier": 10
     },
     {
      "name": "堅毅者",
      "ilvl": 33,
      "weight": 1000,
      "text": "+(60—69)最大生命",
      "template": "+#最大生命",
      "ranges": [
       [
        60,
        69
       ]
      ],
      "tier": 9
     },
     {
      "name": "健壯的",
      "ilvl": 38,
      "weight": 1000,
      "text": "+(70—84)最大生命",
      "template": "+#最大生命",
      "ranges": [
       [
        70,
        84
       ]
      ],
      "tier": 8
     },
     {
      "name": "豐腴的",
      "ilvl": 46,
      "weight": 1000,
      "text": "+(85—99)最大生命",
      "template": "+#最大生命",
      "ranges": [
       [
        85,
        99
       ]
      ],
      "tier": 7
     },
     {
      "name": "陽剛的",
      "ilvl": 54,
      "weight": 1000,
      "text": "+(100—119)最大生命",
      "template": "+#最大生命",
      "ranges": [
       [
        100,
        119
       ]
      ],
      "tier": 6
     },
     {
      "name": "運動員的",
      "ilvl": 60,
      "weight": 1000,
      "text": "+(120—149)最大生命",
      "template": "+#最大生命",
      "ranges": [
       [
        120,
        149
       ]
      ],
      "tier": 5
     },
     {
      "name": "豐饒的",
      "ilvl": 65,
      "weight": 1000,
      "text": "+(150—174)最大生命",
      "template": "+#最大生命",
      "ranges": [
       [
        150,
        174
       ]
      ],
      "tier": 4
     },
     {
      "name": "蓬勃的",
      "ilvl": 70,
      "weight": 1000,
      "text": "+(175—189)最大生命",
      "template": "+#最大生命",
      "ranges": [
       [
        175,
        189
       ]
      ],
      "tier": 3
     },
     {
      "name": "狂喜的",
      "ilvl": 75,
      "weight": 1000,
      "text": "+(190—199)最大生命",
      "template": "+#最大生命",
      "ranges": [
       [
        190,
        199
       ]
      ],
      "tier": 2
     },
     {
      "name": "重要的",
      "ilvl": 80,
      "weight": 1000,
      "text": "+(200—214)最大生命",
      "template": "+#最大生命",
      "ranges": [
       [
        200,
        214
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "Thorns",
    "tiers": [
     {
      "name": "多刺的",
      "ilvl": 1,
      "weight": 1000,
      "text": "(1—2)至(3—4)點物理荊棘傷害",
      "template": "#至#點物理荊棘傷害",
      "ranges": [
       [
        1,
        2
       ],
       [
        3,
        4
       ]
      ],
      "tier": 7
     },
     {
      "name": "帶刺的",
      "ilvl": 10,
      "weight": 1000,
      "text": "(5—7)至(7—10)點物理荊棘傷害",
      "template": "#至#點物理荊棘傷害",
      "ranges": [
       [
        5,
        7
       ],
       [
        7,
        10
       ]
      ],
      "tier": 6
     },
     {
      "name": "尖刺的",
      "ilvl": 19,
      "weight": 1000,
      "text": "(11—16)至(17—23)點物理荊棘傷害",
      "template": "#至#點物理荊棘傷害",
      "ranges": [
       [
        11,
        16
       ],
       [
        17,
        23
       ]
      ],
      "tier": 5
     },
     {
      "name": "尖銳的",
      "ilvl": 38,
      "weight": 1000,
      "text": "(24—35)至(36—53)點物理荊棘傷害",
      "template": "#至#點物理荊棘傷害",
      "ranges": [
       [
        24,
        35
       ],
       [
        36,
        53
       ]
      ],
      "tier": 4
     },
     {
      "name": "尖刺",
      "ilvl": 48,
      "weight": 1000,
      "text": "(40—60)至(61—92)點物理荊棘傷害",
      "template": "#至#點物理荊棘傷害",
      "ranges": [
       [
        40,
        60
       ],
       [
        61,
        92
       ]
      ],
      "tier": 3
     },
     {
      "name": "尖刃",
      "ilvl": 63,
      "weight": 1000,
      "text": "(64—97)至(98—145)點物理荊棘傷害",
      "template": "#至#點物理荊棘傷害",
      "ranges": [
       [
        64,
        97
       ],
       [
        98,
        145
       ]
      ],
      "tier": 2
     },
     {
      "name": "鋸齒的",
      "ilvl": 74,
      "weight": 1000,
      "text": "(101—151)至(152—220)點物理荊棘傷害",
      "template": "#至#點物理荊棘傷害",
      "ranges": [
       [
        101,
        151
       ],
       [
        152,
        220
       ]
      ],
      "tier": 1
     }
    ]
   }
  ],
  "suffix": [
   {
    "family": "ChaosResistance",
    "tiers": [
     {
      "name": "失落之",
      "ilvl": 16,
      "weight": 250,
      "text": "+(4—7)%混沌抗性",
      "template": "+#%混沌抗性",
      "ranges": [
       [
        4,
        7
       ]
      ],
      "tier": 6
     },
     {
      "name": "放逐之",
      "ilvl": 30,
      "weight": 250,
      "text": "+(8—11)%混沌抗性",
      "template": "+#%混沌抗性",
      "ranges": [
       [
        8,
        11
       ]
      ],
      "tier": 5
     },
     {
      "name": "驅逐之",
      "ilvl": 44,
      "weight": 250,
      "text": "+(12—15)%混沌抗性",
      "template": "+#%混沌抗性",
      "ranges": [
       [
        12,
        15
       ]
      ],
      "tier": 4
     },
     {
      "name": "出境之",
      "ilvl": 56,
      "weight": 250,
      "text": "+(16—19)%混沌抗性",
      "template": "+#%混沌抗性",
      "ranges": [
       [
        16,
        19
       ]
      ],
      "tier": 3
     },
     {
      "name": "流亡之",
      "ilvl": 68,
      "weight": 250,
      "text": "+(20—23)%混沌抗性",
      "template": "+#%混沌抗性",
      "ranges": [
       [
        20,
        23
       ]
      ],
      "tier": 2
     },
     {
      "name": "巴曼斯之",
      "ilvl": 81,
      "weight": 250,
      "text": "+(24—27)%混沌抗性",
      "template": "+#%混沌抗性",
      "ranges": [
       [
        24,
        27
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "ColdResistance",
    "tiers": [
     {
      "name": "海豹之",
      "ilvl": 1,
      "weight": 1000,
      "text": "+(6—10)%冰冷抗性",
      "template": "+#%冰冷抗性",
      "ranges": [
       [
        6,
        10
       ]
      ],
      "tier": 8
     },
     {
      "name": "企鵝之",
      "ilvl": 14,
      "weight": 1000,
      "text": "+(11—15)%冰冷抗性",
      "template": "+#%冰冷抗性",
      "ranges": [
       [
        11,
        15
       ]
      ],
      "tier": 7
     },
     {
      "name": "獨角鯨之",
      "ilvl": 26,
      "weight": 1000,
      "text": "+(16—20)%冰冷抗性",
      "template": "+#%冰冷抗性",
      "ranges": [
       [
        16,
        20
       ]
      ],
      "tier": 6
     },
     {
      "name": "雪人之",
      "ilvl": 38,
      "weight": 1000,
      "text": "+(21—25)%冰冷抗性",
      "template": "+#%冰冷抗性",
      "ranges": [
       [
        21,
        25
       ]
      ],
      "tier": 5
     },
     {
      "name": "海象之",
      "ilvl": 50,
      "weight": 1000,
      "text": "+(26—30)%冰冷抗性",
      "template": "+#%冰冷抗性",
      "ranges": [
       [
        26,
        30
       ]
      ],
      "tier": 4
     },
     {
      "name": "北極熊之",
      "ilvl": 60,
      "weight": 1000,
      "text": "+(31—35)%冰冷抗性",
      "template": "+#%冰冷抗性",
      "ranges": [
       [
        31,
        35
       ]
      ],
      "tier": 3
     },
     {
      "name": "冰之",
      "ilvl": 71,
      "weight": 1000,
      "text": "+(36—40)%冰冷抗性",
      "template": "+#%冰冷抗性",
      "ranges": [
       [
        36,
        40
       ]
      ],
      "tier": 2
     },
     {
      "name": "哈斯特之",
      "ilvl": 82,
      "weight": 1000,
      "text": "+(41—45)%冰冷抗性",
      "template": "+#%冰冷抗性",
      "ranges": [
       [
        41,
        45
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "Dexterity",
    "tiers": [
     {
      "name": "貓鼬之",
      "ilvl": 1,
      "weight": 500,
      "text": "+(5—8)點敏捷",
      "template": "+#點敏捷",
      "ranges": [
       [
        5,
        8
       ]
      ],
      "tier": 8
     },
     {
      "name": "山貓之",
      "ilvl": 11,
      "weight": 500,
      "text": "+(9—12)點敏捷",
      "template": "+#點敏捷",
      "ranges": [
       [
        9,
        12
       ]
      ],
      "tier": 7
     },
     {
      "name": "狐狸之",
      "ilvl": 22,
      "weight": 500,
      "text": "+(13—16)點敏捷",
      "template": "+#點敏捷",
      "ranges": [
       [
        13,
        16
       ]
      ],
      "tier": 6
     },
     {
      "name": "獵鷹之",
      "ilvl": 33,
      "weight": 500,
      "text": "+(17—20)點敏捷",
      "template": "+#點敏捷",
      "ranges": [
       [
        17,
        20
       ]
      ],
      "tier": 5
     },
     {
      "name": "豹之",
      "ilvl": 44,
      "weight": 500,
      "text": "+(21—24)點敏捷",
      "template": "+#點敏捷",
      "ranges": [
       [
        21,
        24
       ]
      ],
      "tier": 4
     },
     {
      "name": "花豹之",
      "ilvl": 55,
      "weight": 500,
      "text": "+(25—27)點敏捷",
      "template": "+#點敏捷",
      "ranges": [
       [
        25,
        27
       ]
      ],
      "tier": 3
     },
     {
      "name": "美洲豹之",
      "ilvl": 66,
      "weight": 500,
      "text": "+(28—30)點敏捷",
      "template": "+#點敏捷",
      "ranges": [
       [
        28,
        30
       ]
      ],
      "tier": 2
     },
     {
      "name": "幻影之",
      "ilvl": 74,
      "weight": 500,
      "text": "+(31—33)點敏捷",
      "template": "+#點敏捷",
      "ranges": [
       [
        31,
        33
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "EnergyShieldRegeneration",
    "tiers": [
     {
      "name": "緩衝之",
      "ilvl": 48,
      "weight": 1,
      "text": "增加(16—19)%能量護盾充能率",
      "template": "增加#%能量護盾充能率",
      "ranges": [
       [
        16,
        19
       ]
      ],
      "tier": 3
     },
     {
      "name": "熱情之",
      "ilvl": 66,
      "weight": 1,
      "text": "增加(20—23)%能量護盾充能率",
      "template": "增加#%能量護盾充能率",
      "ranges": [
       [
        20,
        23
       ]
      ],
      "tier": 2
     },
     {
      "name": "遍布之",
      "ilvl": 81,
      "weight": 1,
      "text": "增加(24—27)%能量護盾充能率",
      "template": "增加#%能量護盾充能率",
      "ranges": [
       [
        24,
        27
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "EvasionAppliesToDeflection",
    "tiers": [
     {
      "name": "偏斜之",
      "ilvl": 1,
      "weight": 500,
      "text": "獲得等同(8—11)%閃避值的偏斜值",
      "template": "獲得等同#%閃避值的偏斜值",
      "ranges": [
       [
        8,
        11
       ]
      ],
      "tier": 6
     },
     {
      "name": "彎折之",
      "ilvl": 16,
      "weight": 500,
      "text": "獲得等同(12—14)%閃避值的偏斜值",
      "template": "獲得等同#%閃避值的偏斜值",
      "ranges": [
       [
        12,
        14
       ]
      ],
      "tier": 5
     },
     {
      "name": "彎曲之",
      "ilvl": 36,
      "weight": 500,
      "text": "獲得等同(15—17)%閃避值的偏斜值",
      "template": "獲得等同#%閃避值的偏斜值",
      "ranges": [
       [
        15,
        17
       ]
      ],
      "tier": 4
     },
     {
      "name": "繞行之",
      "ilvl": 48,
      "weight": 500,
      "text": "獲得等同(18—20)%閃避值的偏斜值",
      "template": "獲得等同#%閃避值的偏斜值",
      "ranges": [
       [
        18,
        20
       ]
      ],
      "tier": 3
     },
     {
      "name": "屈曲之",
      "ilvl": 66,
      "weight": 500,
      "text": "獲得等同(21—23)%閃避值的偏斜值",
      "template": "獲得等同#%閃避值的偏斜值",
      "ranges": [
       [
        21,
        23
       ]
      ],
      "tier": 2
     },
     {
      "name": "扭曲之",
      "ilvl": 81,
      "weight": 500,
      "text": "獲得等同(24—26)%閃避值的偏斜值",
      "template": "獲得等同#%閃避值的偏斜值",
      "ranges": [
       [
        24,
        26
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "FireResistance",
    "tiers": [
     {
      "name": "幼龍之",
      "ilvl": 1,
      "weight": 1000,
      "text": "+(6—10)%火焰抗性",
      "template": "+#%火焰抗性",
      "ranges": [
       [
        6,
        10
       ]
      ],
      "tier": 8
     },
     {
      "name": "火蜥蜴之",
      "ilvl": 12,
      "weight": 1000,
      "text": "+(11—15)%火焰抗性",
      "template": "+#%火焰抗性",
      "ranges": [
       [
        11,
        15
       ]
      ],
      "tier": 7
     },
     {
      "name": "火龍之",
      "ilvl": 24,
      "weight": 1000,
      "text": "+(16—20)%火焰抗性",
      "template": "+#%火焰抗性",
      "ranges": [
       [
        16,
        20
       ]
      ],
      "tier": 6
     },
     {
      "name": "窯爐之",
      "ilvl": 36,
      "weight": 1000,
      "text": "+(21—25)%火焰抗性",
      "template": "+#%火焰抗性",
      "ranges": [
       [
        21,
        25
       ]
      ],
      "tier": 5
     },
     {
      "name": "爐火之",
      "ilvl": 48,
      "weight": 1000,
      "text": "+(26—30)%火焰抗性",
      "template": "+#%火焰抗性",
      "ranges": [
       [
        26,
        30
       ]
      ],
      "tier": 4
     },
     {
      "name": "火山之",
      "ilvl": 60,
      "weight": 1000,
      "text": "+(31—35)%火焰抗性",
      "template": "+#%火焰抗性",
      "ranges": [
       [
        31,
        35
       ]
      ],
      "tier": 3
     },
     {
      "name": "熔岩屏障之",
      "ilvl": 71,
      "weight": 1000,
      "text": "+(36—40)%火焰抗性",
      "template": "+#%火焰抗性",
      "ranges": [
       [
        36,
        40
       ]
      ],
      "tier": 2
     },
     {
      "name": "提耶須之",
      "ilvl": 82,
      "weight": 1000,
      "text": "+(41—45)%火焰抗性",
      "template": "+#%火焰抗性",
      "ranges": [
       [
        41,
        45
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "Intelligence",
    "tiers": [
     {
      "name": "瞳孔之",
      "ilvl": 1,
      "weight": 500,
      "text": "+(5—8)點智慧",
      "template": "+#點智慧",
      "ranges": [
       [
        5,
        8
       ]
      ],
      "tier": 8
     },
     {
      "name": "學徒之",
      "ilvl": 11,
      "weight": 500,
      "text": "+(9—12)點智慧",
      "template": "+#點智慧",
      "ranges": [
       [
        9,
        12
       ]
      ],
      "tier": 7
     },
     {
      "name": "奇才之",
      "ilvl": 22,
      "weight": 500,
      "text": "+(13—16)點智慧",
      "template": "+#點智慧",
      "ranges": [
       [
        13,
        16
       ]
      ],
      "tier": 6
     },
     {
      "name": "預言之",
      "ilvl": 33,
      "weight": 500,
      "text": "+(17—20)點智慧",
      "template": "+#點智慧",
      "ranges": [
       [
        17,
        20
       ]
      ],
      "tier": 5
     },
     {
      "name": "哲學家之",
      "ilvl": 44,
      "weight": 500,
      "text": "+(21—24)點智慧",
      "template": "+#點智慧",
      "ranges": [
       [
        21,
        24
       ]
      ],
      "tier": 4
     },
     {
      "name": "聖人之",
      "ilvl": 55,
      "weight": 500,
      "text": "+(25—27)點智慧",
      "template": "+#點智慧",
      "ranges": [
       [
        25,
        27
       ]
      ],
      "tier": 3
     },
     {
      "name": "大學者之",
      "ilvl": 66,
      "weight": 500,
      "text": "+(28—30)點智慧",
      "template": "+#點智慧",
      "ranges": [
       [
        28,
        30
       ]
      ],
      "tier": 2
     },
     {
      "name": "神技之",
      "ilvl": 74,
      "weight": 500,
      "text": "+(31—33)點智慧",
      "template": "+#點智慧",
      "ranges": [
       [
        31,
        33
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "LifeRegeneration",
    "tiers": [
     {
      "name": "蠑螈之",
      "ilvl": 1,
      "weight": 1000,
      "text": "(1—2)每秒生命回復",
      "template": "#每秒生命回復",
      "ranges": [
       [
        1,
        2
       ]
      ],
      "tier": 11
     },
     {
      "name": "蜥蜴之",
      "ilvl": 5,
      "weight": 1000,
      "text": "(2.1—3)每秒生命回復",
      "template": "#每秒生命回復",
      "ranges": [
       [
        2.1,
        3
       ]
      ],
      "tier": 10
     },
     {
      "name": "阿扁蟲之",
      "ilvl": 11,
      "weight": 1000,
      "text": "(3.1—4)每秒生命回復",
      "template": "#每秒生命回復",
      "ranges": [
       [
        3.1,
        4
       ]
      ],
      "tier": 9
     },
     {
      "name": "海星之",
      "ilvl": 17,
      "weight": 1000,
      "text": "(4.1—6)每秒生命回復",
      "template": "#每秒生命回復",
      "ranges": [
       [
        4.1,
        6
       ]
      ],
      "tier": 8
     },
     {
      "name": "九頭蛇之",
      "ilvl": 26,
      "weight": 1000,
      "text": "(6.1—9)每秒生命回復",
      "template": "#每秒生命回復",
      "ranges": [
       [
        6.1,
        9
       ]
      ],
      "tier": 7
     },
     {
      "name": "食人之",
      "ilvl": 35,
      "weight": 1000,
      "text": "(9.1—13)每秒生命回復",
      "template": "#每秒生命回復",
      "ranges": [
       [
        9.1,
        13
       ]
      ],
      "tier": 6
     },
     {
      "name": "康復之",
      "ilvl": 47,
      "weight": 1000,
      "text": "(13.1—18)每秒生命回復",
      "template": "#每秒生命回復",
      "ranges": [
       [
        13.1,
        18
       ]
      ],
      "tier": 5
     },
     {
      "name": "療養之",
      "ilvl": 58,
      "weight": 1000,
      "text": "(18.1—23)每秒生命回復",
      "template": "#每秒生命回復",
      "ranges": [
       [
        18.1,
        23
       ]
      ],
      "tier": 4
     },
     {
      "name": "復興之",
      "ilvl": 68,
      "weight": 1000,
      "text": "(23.1—29)每秒生命回復",
      "template": "#每秒生命回復",
      "ranges": [
       [
        23.1,
        29
       ]
      ],
      "tier": 3
     },
     {
      "name": "不朽之",
      "ilvl": 75,
      "weight": 1000,
      "text": "(29.1—33)每秒生命回復",
      "template": "#每秒生命回復",
      "ranges": [
       [
        29.1,
        33
       ]
      ],
      "tier": 2
     },
     {
      "name": "鳳凰之",
      "ilvl": 81,
      "weight": 1000,
      "text": "(33.1—36)每秒生命回復",
      "template": "#每秒生命回復",
      "ranges": [
       [
        33.1,
        36
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "LightningResistance",
    "tiers": [
     {
      "name": "雲朵之",
      "ilvl": 1,
      "weight": 1000,
      "text": "+(6—10)%閃電抗性",
      "template": "+#%閃電抗性",
      "ranges": [
       [
        6,
        10
       ]
      ],
      "tier": 8
     },
     {
      "name": "冰雹之",
      "ilvl": 13,
      "weight": 1000,
      "text": "+(11—15)%閃電抗性",
      "template": "+#%閃電抗性",
      "ranges": [
       [
        11,
        15
       ]
      ],
      "tier": 7
     },
     {
      "name": "暴風之",
      "ilvl": 25,
      "weight": 1000,
      "text": "+(16—20)%閃電抗性",
      "template": "+#%閃電抗性",
      "ranges": [
       [
        16,
        20
       ]
      ],
      "tier": 6
     },
     {
      "name": "積雨雲之",
      "ilvl": 37,
      "weight": 1000,
      "text": "+(21—25)%閃電抗性",
      "template": "+#%閃電抗性",
      "ranges": [
       [
        21,
        25
       ]
      ],
      "tier": 5
     },
     {
      "name": "暴風雨之",
      "ilvl": 49,
      "weight": 1000,
      "text": "+(26—30)%閃電抗性",
      "template": "+#%閃電抗性",
      "ranges": [
       [
        26,
        30
       ]
      ],
      "tier": 4
     },
     {
      "name": "颱風之",
      "ilvl": 60,
      "weight": 1000,
      "text": "+(31—35)%閃電抗性",
      "template": "+#%閃電抗性",
      "ranges": [
       [
        31,
        35
       ]
      ],
      "tier": 3
     },
     {
      "name": "電之",
      "ilvl": 71,
      "weight": 1000,
      "text": "+(36—40)%閃電抗性",
      "template": "+#%閃電抗性",
      "ranges": [
       [
        36,
        40
       ]
      ],
      "tier": 2
     },
     {
      "name": "艾菲吉之",
      "ilvl": 82,
      "weight": 1000,
      "text": "+(41—45)%閃電抗性",
      "template": "+#%閃電抗性",
      "ranges": [
       [
        41,
        45
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "LocalAttributeRequirements",
    "tiers": [
     {
      "name": "值得之",
      "ilvl": 24,
      "weight": 900,
      "text": "減少15%能力值需求",
      "template": "減少#%能力值需求",
      "ranges": [
       [
        15,
        15
       ]
      ],
      "tier": 5
     },
     {
      "name": "容易之",
      "ilvl": 32,
      "weight": 900,
      "text": "減少20%能力值需求",
      "template": "減少#%能力值需求",
      "ranges": [
       [
        20,
        20
       ]
      ],
      "tier": 4
     },
     {
      "name": "長才之",
      "ilvl": 40,
      "weight": 900,
      "text": "減少25%能力值需求",
      "template": "減少#%能力值需求",
      "ranges": [
       [
        25,
        25
       ]
      ],
      "tier": 3
     },
     {
      "name": "高超之",
      "ilvl": 52,
      "weight": 900,
      "text": "減少30%能力值需求",
      "template": "減少#%能力值需求",
      "ranges": [
       [
        30,
        30
       ]
      ],
      "tier": 2
     },
     {
      "name": "熟習之",
      "ilvl": 60,
      "weight": 900,
      "text": "減少35%能力值需求",
      "template": "減少#%能力值需求",
      "ranges": [
       [
        35,
        35
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "ReducedAilmentDuration",
    "tiers": [
     {
      "name": "密封之",
      "ilvl": 21,
      "weight": 500,
      "text": "減少(36—40)%你身上的流血持續時間",
      "template": "減少#%你身上的流血持續時間",
      "ranges": [
       [
        36,
        40
       ]
      ],
      "tier": 15
     },
     {
      "name": "抗毒素之",
      "ilvl": 21,
      "weight": 500,
      "text": "減少(36—40)%你身上的中毒持續時間",
      "template": "減少#%你身上的中毒持續時間",
      "ranges": [
       [
        36,
        40
       ]
      ],
      "tier": 14
     },
     {
      "name": "阻尼之",
      "ilvl": 21,
      "weight": 500,
      "text": "減少(36—40)%你身上的點燃持續時間",
      "template": "減少#%你身上的點燃持續時間",
      "ranges": [
       [
        36,
        40
       ]
      ],
      "tier": 13
     },
     {
      "name": "緩解之",
      "ilvl": 37,
      "weight": 500,
      "text": "減少(41—45)%你身上的流血持續時間",
      "template": "減少#%你身上的流血持續時間",
      "ranges": [
       [
        41,
        45
       ]
      ],
      "tier": 12
     },
     {
      "name": "補救措施之",
      "ilvl": 37,
      "weight": 500,
      "text": "減少(41—45)%你身上的中毒持續時間",
      "template": "減少#%你身上的中毒持續時間",
      "ranges": [
       [
        41,
        45
       ]
      ],
      "tier": 11
     },
     {
      "name": "鎮壓之",
      "ilvl": 37,
      "weight": 500,
      "text": "減少(41—45)%你身上的點燃持續時間",
      "template": "減少#%你身上的點燃持續時間",
      "ranges": [
       [
        41,
        45
       ]
      ],
      "tier": 10
     },
     {
      "name": "緩和之",
      "ilvl": 50,
      "weight": 500,
      "text": "減少(46—50)%你身上的流血持續時間",
      "template": "減少#%你身上的流血持續時間",
      "ranges": [
       [
        46,
        50
       ]
      ],
      "tier": 9
     },
     {
      "name": "治癒之",
      "ilvl": 50,
      "weight": 500,
      "text": "減少(46—50)%你身上的中毒持續時間",
      "template": "減少#%你身上的中毒持續時間",
      "ranges": [
       [
        46,
        50
       ]
      ],
      "tier": 8
     },
     {
      "name": "驚魂之",
      "ilvl": 50,
      "weight": 500,
      "text": "減少(46—50)%你身上的點燃持續時間",
      "template": "減少#%你身上的點燃持續時間",
      "ranges": [
       [
        46,
        50
       ]
      ],
      "tier": 7
     },
     {
      "name": "安撫之",
      "ilvl": 64,
      "weight": 500,
      "text": "減少(51—55)%你身上的流血持續時間",
      "template": "減少#%你身上的流血持續時間",
      "ranges": [
       [
        51,
        55
       ]
      ],
      "tier": 6
     },
     {
      "name": "萬靈丹之",
      "ilvl": 64,
      "weight": 500,
      "text": "減少(51—55)%你身上的中毒持續時間",
      "template": "減少#%你身上的中毒持續時間",
      "ranges": [
       [
        51,
        55
       ]
      ],
      "tier": 5
     },
     {
      "name": "淬火之",
      "ilvl": 64,
      "weight": 500,
      "text": "減少(51—55)%你身上的點燃持續時間",
      "template": "減少#%你身上的點燃持續時間",
      "ranges": [
       [
        51,
        55
       ]
      ],
      "tier": 4
     },
     {
      "name": "止血之",
      "ilvl": 76,
      "weight": 500,
      "text": "減少(56—60)%你身上的流血持續時間",
      "template": "減少#%你身上的流血持續時間",
      "ranges": [
       [
        56,
        60
       ]
      ],
      "tier": 3
     },
     {
      "name": "解藥之",
      "ilvl": 76,
      "weight": 500,
      "text": "減少(56—60)%你身上的中毒持續時間",
      "template": "減少#%你身上的中毒持續時間",
      "ranges": [
       [
        56,
        60
       ]
      ],
      "tier": 2
     },
     {
      "name": "澆熄之",
      "ilvl": 76,
      "weight": 500,
      "text": "減少(56—60)%你身上的點燃持續時間",
      "template": "減少#%你身上的點燃持續時間",
      "ranges": [
       [
        56,
        60
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "StunThreshold",
    "tiers": [
     {
      "name": "厚皮之",
      "ilvl": 1,
      "weight": 800,
      "text": "暈眩門檻+(6—11)",
      "template": "暈眩門檻+#",
      "ranges": [
       [
        6,
        11
       ]
      ],
      "tier": 10
     },
     {
      "name": "韌膚之",
      "ilvl": 8,
      "weight": 800,
      "text": "暈眩門檻+(12—29)",
      "template": "暈眩門檻+#",
      "ranges": [
       [
        12,
        29
       ]
      ],
      "tier": 9
     },
     {
      "name": "石皮之",
      "ilvl": 15,
      "weight": 800,
      "text": "暈眩門檻+(30—49)",
      "template": "暈眩門檻+#",
      "ranges": [
       [
        30,
        49
       ]
      ],
      "tier": 8
     },
     {
      "name": "金屬皮之",
      "ilvl": 22,
      "weight": 800,
      "text": "暈眩門檻+(50—72)",
      "template": "暈眩門檻+#",
      "ranges": [
       [
        50,
        72
       ]
      ],
      "tier": 7
     },
     {
      "name": "鋼皮之",
      "ilvl": 29,
      "weight": 800,
      "text": "暈眩門檻+(73—97)",
      "template": "暈眩門檻+#",
      "ranges": [
       [
        73,
        97
       ]
      ],
      "tier": 6
     },
     {
      "name": "石膚之",
      "ilvl": 36,
      "weight": 800,
      "text": "暈眩門檻+(98—124)",
      "template": "暈眩門檻+#",
      "ranges": [
       [
        98,
        124
       ]
      ],
      "tier": 5
     },
     {
      "name": "鉑膚之",
      "ilvl": 45,
      "weight": 800,
      "text": "暈眩門檻+(125—163)",
      "template": "暈眩門檻+#",
      "ranges": [
       [
        125,
        163
       ]
      ],
      "tier": 4
     },
     {
      "name": "金剛皮之",
      "ilvl": 54,
      "weight": 800,
      "text": "暈眩門檻+(164—206)",
      "template": "暈眩門檻+#",
      "ranges": [
       [
        164,
        206
       ]
      ],
      "tier": 3
     },
     {
      "name": "玉皮之",
      "ilvl": 63,
      "weight": 800,
      "text": "暈眩門檻+(207—253)",
      "template": "暈眩門檻+#",
      "ranges": [
       [
        207,
        253
       ]
      ],
      "tier": 2
     },
     {
      "name": "曜膚之",
      "ilvl": 72,
      "weight": 800,
      "text": "暈眩門檻+(254—304)",
      "template": "暈眩門檻+#",
      "ranges": [
       [
        254,
        304
       ]
      ],
      "tier": 1
     }
    ]
   }
  ]
 },
 "Body_Armours_str_dex_int": {
  "prefix": [
   {
    "family": "BaseLocalDefences",
    "tiers": [
     {
      "name": "上漆的",
      "ilvl": 1,
      "weight": 1,
      "text": "+(16—27)護甲值",
      "template": "+#護甲值",
      "ranges": [
       [
        16,
        27
       ]
      ],
      "tier": 57
     },
     {
      "name": "敏捷的",
      "ilvl": 1,
      "weight": 1,
      "text": "+(11—18)閃避值",
      "template": "+#閃避值",
      "ranges": [
       [
        11,
        18
       ]
      ],
      "tier": 56
     },
     {
      "name": "發光的",
      "ilvl": 1,
      "weight": 1,
      "text": "+(10—17)最大能量護盾",
      "template": "+#最大能量護盾",
      "ranges": [
       [
        10,
        17
       ]
      ],
      "tier": 55
     },
     {
      "name": "柔軟的",
      "ilvl": 1,
      "weight": 1,
      "text": "+(9—16)護甲值+(6—10)閃避值",
      "template": "+#護甲值+#閃避值",
      "ranges": [
       [
        9,
        16
       ],
       [
        6,
        10
       ]
      ],
      "tier": 54
     },
     {
      "name": "被祝福的",
      "ilvl": 1,
      "weight": 1,
      "text": "+(9—16)護甲值+(5—8)最大能量護盾",
      "template": "+#護甲值+#最大能量護盾",
      "ranges": [
       [
        9,
        16
       ],
       [
        5,
        8
       ]
      ],
      "tier": 53
     },
     {
      "name": "試驗的",
      "ilvl": 1,
      "weight": 1,
      "text": "+(6—10)閃避值+(5—8)最大能量護盾",
      "template": "+#閃避值+#最大能量護盾",
      "ranges": [
       [
        6,
        10
       ],
       [
        5,
        8
       ]
      ],
      "tier": 52
     },
     {
      "name": "鑲嵌的",
      "ilvl": 8,
      "weight": 1,
      "text": "+(28—56)護甲值",
      "template": "+#護甲值",
      "ranges": [
       [
        28,
        56
       ]
      ],
      "tier": 51
     },
     {
      "name": "舞者的",
      "ilvl": 8,
      "weight": 1,
      "text": "+(19—46)閃避值",
      "template": "+#閃避值",
      "ranges": [
       [
        19,
        46
       ]
      ],
      "tier": 50
     },
     {
      "name": "微光的",
      "ilvl": 8,
      "weight": 1,
      "text": "+(18—24)最大能量護盾",
      "template": "+#最大能量護盾",
      "ranges": [
       [
        18,
        24
       ]
      ],
      "tier": 49
     },
     {
      "name": "螺紋的",
      "ilvl": 16,
      "weight": 1,
      "text": "+(57—77)護甲值",
      "template": "+#護甲值",
      "ranges": [
       [
        57,
        77
       ]
      ],
      "tier": 48
     },
     {
      "name": "雜技的",
      "ilvl": 16,
      "weight": 1,
      "text": "+(47—66)閃避值",
      "template": "+#閃避值",
      "ranges": [
       [
        47,
        66
       ]
      ],
      "tier": 47
     },
     {
      "name": "閃閃發亮的",
      "ilvl": 16,
      "weight": 1,
      "text": "+(25—30)最大能量護盾",
      "template": "+#最大能量護盾",
      "ranges": [
       [
        25,
        30
       ]
      ],
      "tier": 46
     },
     {
      "name": "易彎的",
      "ilvl": 16,
      "weight": 1,
      "text": "+(17—46)護甲值+(11—41)閃避值",
      "template": "+#護甲值+#閃避值",
      "ranges": [
       [
        17,
        46
       ],
       [
        11,
        41
       ]
      ],
      "tier": 45
     },
     {
      "name": "神聖的",
      "ilvl": 16,
      "weight": 1,
      "text": "+(17—46)護甲值+(9—15)最大能量護盾",
      "template": "+#護甲值+#最大能量護盾",
      "ranges": [
       [
        17,
        46
       ],
       [
        9,
        15
       ]
      ],
      "tier": 44
     },
     {
      "name": "女神的",
      "ilvl": 16,
      "weight": 1,
      "text": "+(11—41)閃避值+(9—15)最大能量護盾",
      "template": "+#閃避值+#最大能量護盾",
      "ranges": [
       [
        11,
        41
       ],
       [
        9,
        15
       ]
      ],
      "tier": 43
     },
     {
      "name": "強化的",
      "ilvl": 25,
      "weight": 1,
      "text": "+(78—98)護甲值",
      "template": "+#護甲值",
      "ranges": [
       [
        78,
        98
       ]
      ],
      "tier": 42
     },
     {
      "name": "飄忽的",
      "ilvl": 25,
      "weight": 1,
      "text": "+(67—87)閃避值",
      "template": "+#閃避值",
      "ranges": [
       [
        67,
        87
       ]
      ],
      "tier": 41
     },
     {
      "name": "泛光的",
      "ilvl": 25,
      "weight": 1,
      "text": "+(31—35)最大能量護盾",
      "template": "+#最大能量護盾",
      "ranges": [
       [
        31,
        35
       ]
      ],
      "tier": 40
     },
     {
      "name": "電鍍的",
      "ilvl": 33,
      "weight": 1,
      "text": "+(99—127)護甲值",
      "template": "+#護甲值",
      "ranges": [
       [
        99,
        127
       ]
      ],
      "tier": 39
     },
     {
      "name": "模糊的",
      "ilvl": 33,
      "weight": 1,
      "text": "+(88—116)閃避值",
      "template": "+#閃避值",
      "ranges": [
       [
        88,
        116
       ]
      ],
      "tier": 38
     },
     {
      "name": "輻射的",
      "ilvl": 33,
      "weight": 1,
      "text": "+(36—41)最大能量護盾",
      "template": "+#最大能量護盾",
      "ranges": [
       [
        36,
        41
       ]
      ],
      "tier": 37
     },
     {
      "name": "彈性的",
      "ilvl": 33,
      "weight": 1,
      "text": "+(47—71)護甲值+(42—64)閃避值",
      "template": "+#護甲值+#閃避值",
      "ranges": [
       [
        47,
        71
       ],
       [
        42,
        64
       ]
      ],
      "tier": 36
     },
     {
      "name": "聖化的",
      "ilvl": 33,
      "weight": 1,
      "text": "+(47—71)護甲值+(16—21)最大能量護盾",
      "template": "+#護甲值+#最大能量護盾",
      "ranges": [
       [
        47,
        71
       ],
       [
        16,
        21
       ]
      ],
      "tier": 35
     },
     {
      "name": "氣精的",
      "ilvl": 33,
      "weight": 1,
      "text": "+(42—64)閃避值+(16—21)最大能量護盾",
      "template": "+#閃避值+#最大能量護盾",
      "ranges": [
       [
        42,
        64
       ],
       [
        16,
        21
       ]
      ],
      "tier": 34
     },
     {
      "name": "裝甲化的",
      "ilvl": 46,
      "weight": 1,
      "text": "+(128—159)護甲值",
      "template": "+#護甲值",
      "ranges": [
       [
        128,
        159
       ]
      ],
      "tier": 33
     },
     {
      "name": "相位的",
      "ilvl": 46,
      "weight": 1,
      "text": "+(117—146)閃避值",
      "template": "+#閃避值",
      "ranges": [
       [
        117,
        146
       ]
      ],
      "tier": 32
     },
     {
      "name": "脈衝的",
      "ilvl": 46,
      "weight": 1,
      "text": "+(42—47)最大能量護盾",
      "template": "+#最大能量護盾",
      "ranges": [
       [
        42,
        47
       ]
      ],
      "tier": 31
     },
     {
      "name": "耐用的",
      "ilvl": 46,
      "weight": 1,
      "text": "+(72—85)護甲值+(65—78)閃避值",
      "template": "+#護甲值+#閃避值",
      "ranges": [
       [
        72,
        85
       ],
       [
        65,
        78
       ]
      ],
      "tier": 30
     },
     {
      "name": "聖潔的",
      "ilvl": 46,
      "weight": 1,
      "text": "+(72—85)護甲值+(22—25)最大能量護盾",
      "template": "+#護甲值+#最大能量護盾",
      "ranges": [
       [
        72,
        85
       ],
       [
        22,
        25
       ]
      ],
      "tier": 29
     },
     {
      "name": "天使的",
      "ilvl": 46,
      "weight": 1,
      "text": "+(65—78)閃避值+(22—25)最大能量護盾",
      "template": "+#閃避值+#最大能量護盾",
      "ranges": [
       [
        65,
        78
       ],
       [
        22,
        25
       ]
      ],
      "tier": 28
     },
     {
      "name": "圍繞的",
      "ilvl": 54,
      "weight": 1,
      "text": "+(160—190)護甲值",
      "template": "+#護甲值",
      "ranges": [
       [
        160,
        190
       ]
      ],
      "tier": 27
     },
     {
      "name": "氣態的",
      "ilvl": 54,
      "weight": 1,
      "text": "+(147—176)閃避值",
      "template": "+#閃避值",
      "ranges": [
       [
        147,
        176
       ]
      ],
      "tier": 26
     },
     {
      "name": "熾烈的",
      "ilvl": 54,
      "weight": 1,
      "text": "+(48—60)最大能量護盾",
      "template": "+#最大能量護盾",
      "ranges": [
       [
        48,
        60
       ]
      ],
      "tier": 25
     },
     {
      "name": "強健的",
      "ilvl": 54,
      "weight": 1,
      "text": "+(86—102)護甲值+(79—94)閃避值",
      "template": "+#護甲值+#閃避值",
      "ranges": [
       [
        86,
        102
       ],
       [
        79,
        94
       ]
      ],
      "tier": 24
     },
     {
      "name": "幸福的",
      "ilvl": 54,
      "weight": 1,
      "text": "+(86—102)護甲值+(26—29)最大能量護盾",
      "template": "+#護甲值+#最大能量護盾",
      "ranges": [
       [
        86,
        102
       ],
       [
        26,
        29
       ]
      ],
      "tier": 23
     },
     {
      "name": "精神的",
      "ilvl": 54,
      "weight": 1,
      "text": "+(79—94)閃避值+(26—29)最大能量護盾",
      "template": "+#閃避值+#最大能量護盾",
      "ranges": [
       [
        79,
        94
       ],
       [
        26,
        29
       ]
      ],
      "tier": 22
     },
     {
      "name": "籠罩的",
      "ilvl": 60,
      "weight": 1,
      "text": "+(191—221)護甲值",
      "template": "+#護甲值",
      "ranges": [
       [
        191,
        221
       ]
      ],
      "tier": 21
     },
     {
      "name": "難以捉摸的",
      "ilvl": 60,
      "weight": 1,
      "text": "+(177—207)閃避值",
      "template": "+#閃避值",
      "ranges": [
       [
        177,
        207
       ]
      ],
      "tier": 20
     },
     {
      "name": "眩目的",
      "ilvl": 60,
      "weight": 1,
      "text": "+(61—73)最大能量護盾",
      "template": "+#最大能量護盾",
      "ranges": [
       [
        61,
        73
       ]
      ],
      "tier": 19
     },
     {
      "name": "彈力的",
      "ilvl": 60,
      "weight": 1,
      "text": "+(103—127)護甲值+(95—119)閃避值",
      "template": "+#護甲值+#閃避值",
      "ranges": [
       [
        103,
        127
       ],
       [
        95,
        119
       ]
      ],
      "tier": 18
     },
     {
      "name": "神祭的",
      "ilvl": 60,
      "weight": 1,
      "text": "+(103—127)護甲值+(30—36)最大能量護盾",
      "template": "+#護甲值+#最大能量護盾",
      "ranges": [
       [
        103,
        127
       ],
       [
        30,
        36
       ]
      ],
      "tier": 17
     },
     {
      "name": "幻像的",
      "ilvl": 60,
      "weight": 1,
      "text": "+(95—119)閃避值+(30—36)最大能量護盾",
      "template": "+#閃避值+#最大能量護盾",
      "ranges": [
       [
        95,
        119
       ],
       [
        30,
        36
       ]
      ],
      "tier": 16
     },
     {
      "name": "減弱的",
      "ilvl": 65,
      "weight": 1,
      "text": "+(222—248)護甲值",
      "template": "+#護甲值",
      "ranges": [
       [
        222,
        248
       ]
      ],
      "tier": 15
     },
     {
      "name": "熟練的",
      "ilvl": 65,
      "weight": 1,
      "text": "+(208—234)閃避值",
      "template": "+#閃避值",
      "ranges": [
       [
        208,
        234
       ]
      ],
      "tier": 14
     },
     {
      "name": "奪目的",
      "ilvl": 65,
      "weight": 1,
      "text": "+(74—80)最大能量護盾",
      "template": "+#最大能量護盾",
      "ranges": [
       [
        74,
        80
       ]
      ],
      "tier": 13
     },
     {
      "name": "適應的",
      "ilvl": 65,
      "weight": 1,
      "text": "+(128—149)護甲值+(120—141)閃避值",
      "template": "+#護甲值+#閃避值",
      "ranges": [
       [
        128,
        149
       ],
       [
        120,
        141
       ]
      ],
      "tier": 12
     },
     {
      "name": "聖潔的",
      "ilvl": 65,
      "weight": 1,
      "text": "+(128—149)護甲值+(37—42)最大能量護盾",
      "template": "+#護甲值+#最大能量護盾",
      "ranges": [
       [
        128,
        149
       ],
       [
        37,
        42
       ]
      ],
      "tier": 11
     },
     {
      "name": "幻影的",
      "ilvl": 65,
      "weight": 1,
      "text": "+(120—141)閃避值+(37—42)最大能量護盾",
      "template": "+#閃避值+#最大能量護盾",
      "ranges": [
       [
        120,
        141
       ],
       [
        37,
        42
       ]
      ],
      "tier": 10
     },
     {
      "name": "熾焰的",
      "ilvl": 70,
      "weight": 1,
      "text": "+(81—90)最大能量護盾",
      "template": "+#最大能量護盾",
      "ranges": [
       [
        81,
        90
       ]
      ],
      "tier": 9
     },
     {
      "name": "不動的",
      "ilvl": 75,
      "weight": 1,
      "text": "+(249—277)護甲值",
      "template": "+#護甲值",
      "ranges": [
       [
        249,
        277
       ]
      ],
      "tier": 8
     },
     {
      "name": "柔軟的",
      "ilvl": 75,
      "weight": 1,
      "text": "+(235—261)閃避值",
      "template": "+#閃避值",
      "ranges": [
       [
        235,
        261
       ]
      ],
      "tier": 7
     },
     {
      "name": "多才多藝的",
      "ilvl": 75,
      "weight": 1,
      "text": "+(150—170)護甲值+(142—161)閃避值",
      "template": "+#護甲值+#閃避值",
      "ranges": [
       [
        150,
        170
       ],
       [
        142,
        161
       ]
      ],
      "tier": 6
     },
     {
      "name": "虔誠的",
      "ilvl": 75,
      "weight": 1,
      "text": "+(150—170)護甲值+(43—48)最大能量護盾",
      "template": "+#護甲值+#最大能量護盾",
      "ranges": [
       [
        150,
        170
       ],
       [
        43,
        48
       ]
      ],
      "tier": 5
     },
     {
      "name": "幻想的",
      "ilvl": 75,
      "weight": 1,
      "text": "+(142—161)閃避值+(43—48)最大能量護盾",
      "template": "+#閃避值+#最大能量護盾",
      "ranges": [
       [
        142,
        161
       ],
       [
        43,
        48
       ]
      ],
      "tier": 4
     },
     {
      "name": "抗滲的",
      "ilvl": 79,
      "weight": 1,
      "text": "+(278—310)護甲值",
      "template": "+#護甲值",
      "ranges": [
       [
        278,
        310
       ]
      ],
      "tier": 3
     },
     {
      "name": "逃亡的",
      "ilvl": 79,
      "weight": 1,
      "text": "+(262—300)閃避值",
      "template": "+#閃避值",
      "ranges": [
       [
        262,
        300
       ]
      ],
      "tier": 2
     },
     {
      "name": "燦爛的",
      "ilvl": 79,
      "weight": 1,
      "text": "+(91—96)最大能量護盾",
      "template": "+#最大能量護盾",
      "ranges": [
       [
        91,
        96
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "BaseSpirit",
    "tiers": [
     {
      "name": "淑女的",
      "ilvl": 16,
      "weight": 1,
      "text": "+(30—33)精魂",
      "template": "+#精魂",
      "ranges": [
       [
        30,
        33
       ]
      ],
      "tier": 8
     },
     {
      "name": "女爵的",
      "ilvl": 25,
      "weight": 1,
      "text": "+(34—37)精魂",
      "template": "+#精魂",
      "ranges": [
       [
        34,
        37
       ]
      ],
      "tier": 7
     },
     {
      "name": "女子爵的",
      "ilvl": 33,
      "weight": 1,
      "text": "+(38—42)精魂",
      "template": "+#精魂",
      "ranges": [
       [
        38,
        42
       ]
      ],
      "tier": 6
     },
     {
      "name": "子爵夫人的",
      "ilvl": 46,
      "weight": 1,
      "text": "+(43—46)精魂",
      "template": "+#精魂",
      "ranges": [
       [
        43,
        46
       ]
      ],
      "tier": 5
     },
     {
      "name": "伯爵夫人的",
      "ilvl": 54,
      "weight": 1,
      "text": "+(47—50)精魂",
      "template": "+#精魂",
      "ranges": [
       [
        47,
        50
       ]
      ],
      "tier": 4
     },
     {
      "name": "公爵夫人的",
      "ilvl": 60,
      "weight": 1,
      "text": "+(51—53)精魂",
      "template": "+#精魂",
      "ranges": [
       [
        51,
        53
       ]
      ],
      "tier": 3
     },
     {
      "name": "公主的",
      "ilvl": 65,
      "weight": 1,
      "text": "+(54—56)精魂",
      "template": "+#精魂",
      "ranges": [
       [
        54,
        56
       ]
      ],
      "tier": 2
     },
     {
      "name": "女皇的",
      "ilvl": 78,
      "weight": 1,
      "text": "+(57—61)精魂",
      "template": "+#精魂",
      "ranges": [
       [
        57,
        61
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "DefencesPercent",
    "tiers": [
     {
      "name": "幽影的",
      "ilvl": 2,
      "weight": 1,
      "text": "增加(15—26)%護甲值、閃避和能量護盾",
      "template": "增加#%護甲值、閃避和能量護盾",
      "ranges": [
       [
        15,
        26
       ]
      ],
      "tier": 8
     },
     {
      "name": "虛靈的",
      "ilvl": 16,
      "weight": 1,
      "text": "增加(27—42)%護甲值、閃避和能量護盾",
      "template": "增加#%護甲值、閃避和能量護盾",
      "ranges": [
       [
        27,
        42
       ]
      ],
      "tier": 7
     },
     {
      "name": "異界的",
      "ilvl": 33,
      "weight": 1,
      "text": "增加(43—55)%護甲值、閃避和能量護盾",
      "template": "增加#%護甲值、閃避和能量護盾",
      "ranges": [
       [
        43,
        55
       ]
      ],
      "tier": 6
     },
     {
      "name": "短暫的",
      "ilvl": 46,
      "weight": 1,
      "text": "增加(56—67)%護甲值、閃避和能量護盾",
      "template": "增加#%護甲值、閃避和能量護盾",
      "ranges": [
       [
        56,
        67
       ]
      ],
      "tier": 5
     },
     {
      "name": "轉瞬的",
      "ilvl": 54,
      "weight": 1,
      "text": "增加(68—79)%護甲值、閃避和能量護盾",
      "template": "增加#%護甲值、閃避和能量護盾",
      "ranges": [
       [
        68,
        79
       ]
      ],
      "tier": 4
     },
     {
      "name": "非實的",
      "ilvl": 60,
      "weight": 1,
      "text": "增加(80—91)%護甲值、閃避和能量護盾",
      "template": "增加#%護甲值、閃避和能量護盾",
      "ranges": [
       [
        80,
        91
       ]
      ],
      "tier": 3
     },
     {
      "name": "無質的",
      "ilvl": 65,
      "weight": 1,
      "text": "增加(92—100)%護甲值、閃避和能量護盾",
      "template": "增加#%護甲值、閃避和能量護盾",
      "ranges": [
       [
        92,
        100
       ]
      ],
      "tier": 2
     },
     {
      "name": "升華的",
      "ilvl": 75,
      "weight": 1,
      "text": "增加(101—110)%護甲值、閃避和能量護盾",
      "template": "增加#%護甲值、閃避和能量護盾",
      "ranges": [
       [
        101,
        110
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "IncreasedLife",
    "tiers": [
     {
      "name": "健壯之",
      "ilvl": 1,
      "weight": 1,
      "text": "+(10—19)最大生命",
      "template": "+#最大生命",
      "ranges": [
       [
        10,
        19
       ]
      ],
      "tier": 13
     },
     {
      "name": "健康的",
      "ilvl": 6,
      "weight": 1,
      "text": "+(20—29)最大生命",
      "template": "+#最大生命",
      "ranges": [
       [
        20,
        29
       ]
      ],
      "tier": 12
     },
     {
      "name": "樂觀的",
      "ilvl": 16,
      "weight": 1,
      "text": "+(30—39)最大生命",
      "template": "+#最大生命",
      "ranges": [
       [
        30,
        39
       ]
      ],
      "tier": 11
     },
     {
      "name": "堅信的",
      "ilvl": 24,
      "weight": 1,
      "text": "+(40—59)最大生命",
      "template": "+#最大生命",
      "ranges": [
       [
        40,
        59
       ]
      ],
      "tier": 10
     },
     {
      "name": "堅毅者",
      "ilvl": 33,
      "weight": 1,
      "text": "+(60—69)最大生命",
      "template": "+#最大生命",
      "ranges": [
       [
        60,
        69
       ]
      ],
      "tier": 9
     },
     {
      "name": "健壯的",
      "ilvl": 38,
      "weight": 1,
      "text": "+(70—84)最大生命",
      "template": "+#最大生命",
      "ranges": [
       [
        70,
        84
       ]
      ],
      "tier": 8
     },
     {
      "name": "豐腴的",
      "ilvl": 46,
      "weight": 1,
      "text": "+(85—99)最大生命",
      "template": "+#最大生命",
      "ranges": [
       [
        85,
        99
       ]
      ],
      "tier": 7
     },
     {
      "name": "陽剛的",
      "ilvl": 54,
      "weight": 1,
      "text": "+(100—119)最大生命",
      "template": "+#最大生命",
      "ranges": [
       [
        100,
        119
       ]
      ],
      "tier": 6
     },
     {
      "name": "運動員的",
      "ilvl": 60,
      "weight": 1,
      "text": "+(120—149)最大生命",
      "template": "+#最大生命",
      "ranges": [
       [
        120,
        149
       ]
      ],
      "tier": 5
     },
     {
      "name": "豐饒的",
      "ilvl": 65,
      "weight": 1,
      "text": "+(150—174)最大生命",
      "template": "+#最大生命",
      "ranges": [
       [
        150,
        174
       ]
      ],
      "tier": 4
     },
     {
      "name": "蓬勃的",
      "ilvl": 70,
      "weight": 1,
      "text": "+(175—189)最大生命",
      "template": "+#最大生命",
      "ranges": [
       [
        175,
        189
       ]
      ],
      "tier": 3
     },
     {
      "name": "狂喜的",
      "ilvl": 75,
      "weight": 1,
      "text": "+(190—199)最大生命",
      "template": "+#最大生命",
      "ranges": [
       [
        190,
        199
       ]
      ],
      "tier": 2
     },
     {
      "name": "重要的",
      "ilvl": 80,
      "weight": 1,
      "text": "+(200—214)最大生命",
      "template": "+#最大生命",
      "ranges": [
       [
        200,
        214
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "Thorns",
    "tiers": [
     {
      "name": "多刺的",
      "ilvl": 1,
      "weight": 1,
      "text": "(1—2)至(3—4)點物理荊棘傷害",
      "template": "#至#點物理荊棘傷害",
      "ranges": [
       [
        1,
        2
       ],
       [
        3,
        4
       ]
      ],
      "tier": 7
     },
     {
      "name": "帶刺的",
      "ilvl": 10,
      "weight": 1,
      "text": "(5—7)至(7—10)點物理荊棘傷害",
      "template": "#至#點物理荊棘傷害",
      "ranges": [
       [
        5,
        7
       ],
       [
        7,
        10
       ]
      ],
      "tier": 6
     },
     {
      "name": "尖刺的",
      "ilvl": 19,
      "weight": 1,
      "text": "(11—16)至(17—23)點物理荊棘傷害",
      "template": "#至#點物理荊棘傷害",
      "ranges": [
       [
        11,
        16
       ],
       [
        17,
        23
       ]
      ],
      "tier": 5
     },
     {
      "name": "尖銳的",
      "ilvl": 38,
      "weight": 1,
      "text": "(24—35)至(36—53)點物理荊棘傷害",
      "template": "#至#點物理荊棘傷害",
      "ranges": [
       [
        24,
        35
       ],
       [
        36,
        53
       ]
      ],
      "tier": 4
     },
     {
      "name": "尖刺",
      "ilvl": 48,
      "weight": 1,
      "text": "(40—60)至(61—92)點物理荊棘傷害",
      "template": "#至#點物理荊棘傷害",
      "ranges": [
       [
        40,
        60
       ],
       [
        61,
        92
       ]
      ],
      "tier": 3
     },
     {
      "name": "尖刃",
      "ilvl": 63,
      "weight": 1,
      "text": "(64—97)至(98—145)點物理荊棘傷害",
      "template": "#至#點物理荊棘傷害",
      "ranges": [
       [
        64,
        97
       ],
       [
        98,
        145
       ]
      ],
      "tier": 2
     },
     {
      "name": "鋸齒的",
      "ilvl": 74,
      "weight": 1,
      "text": "(101—151)至(152—220)點物理荊棘傷害",
      "template": "#至#點物理荊棘傷害",
      "ranges": [
       [
        101,
        151
       ],
       [
        152,
        220
       ]
      ],
      "tier": 1
     }
    ]
   }
  ],
  "suffix": [
   {
    "family": "ArmourAppliesToElementalDamage",
    "tiers": [
     {
      "name": "覆蓋之",
      "ilvl": 1,
      "weight": 1,
      "text": "+(14—19)%的護甲值也會套用至元素傷害",
      "template": "+#%的護甲值也會套用至元素傷害",
      "ranges": [
       [
        14,
        19
       ]
      ],
      "tier": 6
     },
     {
      "name": "覆套之",
      "ilvl": 16,
      "weight": 1,
      "text": "+(20—25)%的護甲值也會套用至元素傷害",
      "template": "+#%的護甲值也會套用至元素傷害",
      "ranges": [
       [
        20,
        25
       ]
      ],
      "tier": 5
     },
     {
      "name": "內襯之",
      "ilvl": 36,
      "weight": 1,
      "text": "+(26—31)%的護甲值也會套用至元素傷害",
      "template": "+#%的護甲值也會套用至元素傷害",
      "ranges": [
       [
        26,
        31
       ]
      ],
      "tier": 4
     },
     {
      "name": "鋪墊之",
      "ilvl": 48,
      "weight": 1,
      "text": "+(32—37)%的護甲值也會套用至元素傷害",
      "template": "+#%的護甲值也會套用至元素傷害",
      "ranges": [
       [
        32,
        37
       ]
      ],
      "tier": 3
     },
     {
      "name": "鑲邊之",
      "ilvl": 66,
      "weight": 1,
      "text": "+(38—43)%的護甲值也會套用至元素傷害",
      "template": "+#%的護甲值也會套用至元素傷害",
      "ranges": [
       [
        38,
        43
       ]
      ],
      "tier": 2
     },
     {
      "name": "熱反射之",
      "ilvl": 81,
      "weight": 1,
      "text": "+(44—50)%的護甲值也會套用至元素傷害",
      "template": "+#%的護甲值也會套用至元素傷害",
      "ranges": [
       [
        44,
        50
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "ChaosResistance",
    "tiers": [
     {
      "name": "失落之",
      "ilvl": 16,
      "weight": 1,
      "text": "+(4—7)%混沌抗性",
      "template": "+#%混沌抗性",
      "ranges": [
       [
        4,
        7
       ]
      ],
      "tier": 6
     },
     {
      "name": "放逐之",
      "ilvl": 30,
      "weight": 1,
      "text": "+(8—11)%混沌抗性",
      "template": "+#%混沌抗性",
      "ranges": [
       [
        8,
        11
       ]
      ],
      "tier": 5
     },
     {
      "name": "驅逐之",
      "ilvl": 44,
      "weight": 1,
      "text": "+(12—15)%混沌抗性",
      "template": "+#%混沌抗性",
      "ranges": [
       [
        12,
        15
       ]
      ],
      "tier": 4
     },
     {
      "name": "出境之",
      "ilvl": 56,
      "weight": 1,
      "text": "+(16—19)%混沌抗性",
      "template": "+#%混沌抗性",
      "ranges": [
       [
        16,
        19
       ]
      ],
      "tier": 3
     },
     {
      "name": "流亡之",
      "ilvl": 68,
      "weight": 1,
      "text": "+(20—23)%混沌抗性",
      "template": "+#%混沌抗性",
      "ranges": [
       [
        20,
        23
       ]
      ],
      "tier": 2
     },
     {
      "name": "巴曼斯之",
      "ilvl": 81,
      "weight": 1,
      "text": "+(24—27)%混沌抗性",
      "template": "+#%混沌抗性",
      "ranges": [
       [
        24,
        27
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "ColdResistance",
    "tiers": [
     {
      "name": "海豹之",
      "ilvl": 1,
      "weight": 1,
      "text": "+(6—10)%冰冷抗性",
      "template": "+#%冰冷抗性",
      "ranges": [
       [
        6,
        10
       ]
      ],
      "tier": 8
     },
     {
      "name": "企鵝之",
      "ilvl": 14,
      "weight": 1,
      "text": "+(11—15)%冰冷抗性",
      "template": "+#%冰冷抗性",
      "ranges": [
       [
        11,
        15
       ]
      ],
      "tier": 7
     },
     {
      "name": "獨角鯨之",
      "ilvl": 26,
      "weight": 1,
      "text": "+(16—20)%冰冷抗性",
      "template": "+#%冰冷抗性",
      "ranges": [
       [
        16,
        20
       ]
      ],
      "tier": 6
     },
     {
      "name": "雪人之",
      "ilvl": 38,
      "weight": 1,
      "text": "+(21—25)%冰冷抗性",
      "template": "+#%冰冷抗性",
      "ranges": [
       [
        21,
        25
       ]
      ],
      "tier": 5
     },
     {
      "name": "海象之",
      "ilvl": 50,
      "weight": 1,
      "text": "+(26—30)%冰冷抗性",
      "template": "+#%冰冷抗性",
      "ranges": [
       [
        26,
        30
       ]
      ],
      "tier": 4
     },
     {
      "name": "北極熊之",
      "ilvl": 60,
      "weight": 1,
      "text": "+(31—35)%冰冷抗性",
      "template": "+#%冰冷抗性",
      "ranges": [
       [
        31,
        35
       ]
      ],
      "tier": 3
     },
     {
      "name": "冰之",
      "ilvl": 71,
      "weight": 1,
      "text": "+(36—40)%冰冷抗性",
      "template": "+#%冰冷抗性",
      "ranges": [
       [
        36,
        40
       ]
      ],
      "tier": 2
     },
     {
      "name": "哈斯特之",
      "ilvl": 82,
      "weight": 1,
      "text": "+(41—45)%冰冷抗性",
      "template": "+#%冰冷抗性",
      "ranges": [
       [
        41,
        45
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "Dexterity",
    "tiers": [
     {
      "name": "貓鼬之",
      "ilvl": 1,
      "weight": 1,
      "text": "+(5—8)點敏捷",
      "template": "+#點敏捷",
      "ranges": [
       [
        5,
        8
       ]
      ],
      "tier": 8
     },
     {
      "name": "山貓之",
      "ilvl": 11,
      "weight": 1,
      "text": "+(9—12)點敏捷",
      "template": "+#點敏捷",
      "ranges": [
       [
        9,
        12
       ]
      ],
      "tier": 7
     },
     {
      "name": "狐狸之",
      "ilvl": 22,
      "weight": 1,
      "text": "+(13—16)點敏捷",
      "template": "+#點敏捷",
      "ranges": [
       [
        13,
        16
       ]
      ],
      "tier": 6
     },
     {
      "name": "獵鷹之",
      "ilvl": 33,
      "weight": 1,
      "text": "+(17—20)點敏捷",
      "template": "+#點敏捷",
      "ranges": [
       [
        17,
        20
       ]
      ],
      "tier": 5
     },
     {
      "name": "豹之",
      "ilvl": 44,
      "weight": 1,
      "text": "+(21—24)點敏捷",
      "template": "+#點敏捷",
      "ranges": [
       [
        21,
        24
       ]
      ],
      "tier": 4
     },
     {
      "name": "花豹之",
      "ilvl": 55,
      "weight": 1,
      "text": "+(25—27)點敏捷",
      "template": "+#點敏捷",
      "ranges": [
       [
        25,
        27
       ]
      ],
      "tier": 3
     },
     {
      "name": "美洲豹之",
      "ilvl": 66,
      "weight": 1,
      "text": "+(28—30)點敏捷",
      "template": "+#點敏捷",
      "ranges": [
       [
        28,
        30
       ]
      ],
      "tier": 2
     },
     {
      "name": "幻影之",
      "ilvl": 74,
      "weight": 1,
      "text": "+(31—33)點敏捷",
      "template": "+#點敏捷",
      "ranges": [
       [
        31,
        33
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "EnergyShieldRegeneration",
    "tiers": [
     {
      "name": "緩衝之",
      "ilvl": 48,
      "weight": 1,
      "text": "增加(16—19)%能量護盾充能率",
      "template": "增加#%能量護盾充能率",
      "ranges": [
       [
        16,
        19
       ]
      ],
      "tier": 3
     },
     {
      "name": "熱情之",
      "ilvl": 66,
      "weight": 1,
      "text": "增加(20—23)%能量護盾充能率",
      "template": "增加#%能量護盾充能率",
      "ranges": [
       [
        20,
        23
       ]
      ],
      "tier": 2
     },
     {
      "name": "遍布之",
      "ilvl": 81,
      "weight": 1,
      "text": "增加(24—27)%能量護盾充能率",
      "template": "增加#%能量護盾充能率",
      "ranges": [
       [
        24,
        27
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "EvasionAppliesToDeflection",
    "tiers": [
     {
      "name": "偏斜之",
      "ilvl": 1,
      "weight": 1,
      "text": "獲得等同(8—11)%閃避值的偏斜值",
      "template": "獲得等同#%閃避值的偏斜值",
      "ranges": [
       [
        8,
        11
       ]
      ],
      "tier": 6
     },
     {
      "name": "彎折之",
      "ilvl": 16,
      "weight": 1,
      "text": "獲得等同(12—14)%閃避值的偏斜值",
      "template": "獲得等同#%閃避值的偏斜值",
      "ranges": [
       [
        12,
        14
       ]
      ],
      "tier": 5
     },
     {
      "name": "彎曲之",
      "ilvl": 36,
      "weight": 1,
      "text": "獲得等同(15—17)%閃避值的偏斜值",
      "template": "獲得等同#%閃避值的偏斜值",
      "ranges": [
       [
        15,
        17
       ]
      ],
      "tier": 4
     },
     {
      "name": "繞行之",
      "ilvl": 48,
      "weight": 1,
      "text": "獲得等同(18—20)%閃避值的偏斜值",
      "template": "獲得等同#%閃避值的偏斜值",
      "ranges": [
       [
        18,
        20
       ]
      ],
      "tier": 3
     },
     {
      "name": "屈曲之",
      "ilvl": 66,
      "weight": 1,
      "text": "獲得等同(21—23)%閃避值的偏斜值",
      "template": "獲得等同#%閃避值的偏斜值",
      "ranges": [
       [
        21,
        23
       ]
      ],
      "tier": 2
     },
     {
      "name": "扭曲之",
      "ilvl": 81,
      "weight": 1,
      "text": "獲得等同(24—26)%閃避值的偏斜值",
      "template": "獲得等同#%閃避值的偏斜值",
      "ranges": [
       [
        24,
        26
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "FireResistance",
    "tiers": [
     {
      "name": "幼龍之",
      "ilvl": 1,
      "weight": 1,
      "text": "+(6—10)%火焰抗性",
      "template": "+#%火焰抗性",
      "ranges": [
       [
        6,
        10
       ]
      ],
      "tier": 8
     },
     {
      "name": "火蜥蜴之",
      "ilvl": 12,
      "weight": 1,
      "text": "+(11—15)%火焰抗性",
      "template": "+#%火焰抗性",
      "ranges": [
       [
        11,
        15
       ]
      ],
      "tier": 7
     },
     {
      "name": "火龍之",
      "ilvl": 24,
      "weight": 1,
      "text": "+(16—20)%火焰抗性",
      "template": "+#%火焰抗性",
      "ranges": [
       [
        16,
        20
       ]
      ],
      "tier": 6
     },
     {
      "name": "窯爐之",
      "ilvl": 36,
      "weight": 1,
      "text": "+(21—25)%火焰抗性",
      "template": "+#%火焰抗性",
      "ranges": [
       [
        21,
        25
       ]
      ],
      "tier": 5
     },
     {
      "name": "爐火之",
      "ilvl": 48,
      "weight": 1,
      "text": "+(26—30)%火焰抗性",
      "template": "+#%火焰抗性",
      "ranges": [
       [
        26,
        30
       ]
      ],
      "tier": 4
     },
     {
      "name": "火山之",
      "ilvl": 60,
      "weight": 1,
      "text": "+(31—35)%火焰抗性",
      "template": "+#%火焰抗性",
      "ranges": [
       [
        31,
        35
       ]
      ],
      "tier": 3
     },
     {
      "name": "熔岩屏障之",
      "ilvl": 71,
      "weight": 1,
      "text": "+(36—40)%火焰抗性",
      "template": "+#%火焰抗性",
      "ranges": [
       [
        36,
        40
       ]
      ],
      "tier": 2
     },
     {
      "name": "提耶須之",
      "ilvl": 82,
      "weight": 1,
      "text": "+(41—45)%火焰抗性",
      "template": "+#%火焰抗性",
      "ranges": [
       [
        41,
        45
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "Intelligence",
    "tiers": [
     {
      "name": "瞳孔之",
      "ilvl": 1,
      "weight": 1,
      "text": "+(5—8)點智慧",
      "template": "+#點智慧",
      "ranges": [
       [
        5,
        8
       ]
      ],
      "tier": 8
     },
     {
      "name": "學徒之",
      "ilvl": 11,
      "weight": 1,
      "text": "+(9—12)點智慧",
      "template": "+#點智慧",
      "ranges": [
       [
        9,
        12
       ]
      ],
      "tier": 7
     },
     {
      "name": "奇才之",
      "ilvl": 22,
      "weight": 1,
      "text": "+(13—16)點智慧",
      "template": "+#點智慧",
      "ranges": [
       [
        13,
        16
       ]
      ],
      "tier": 6
     },
     {
      "name": "預言之",
      "ilvl": 33,
      "weight": 1,
      "text": "+(17—20)點智慧",
      "template": "+#點智慧",
      "ranges": [
       [
        17,
        20
       ]
      ],
      "tier": 5
     },
     {
      "name": "哲學家之",
      "ilvl": 44,
      "weight": 1,
      "text": "+(21—24)點智慧",
      "template": "+#點智慧",
      "ranges": [
       [
        21,
        24
       ]
      ],
      "tier": 4
     },
     {
      "name": "聖人之",
      "ilvl": 55,
      "weight": 1,
      "text": "+(25—27)點智慧",
      "template": "+#點智慧",
      "ranges": [
       [
        25,
        27
       ]
      ],
      "tier": 3
     },
     {
      "name": "大學者之",
      "ilvl": 66,
      "weight": 1,
      "text": "+(28—30)點智慧",
      "template": "+#點智慧",
      "ranges": [
       [
        28,
        30
       ]
      ],
      "tier": 2
     },
     {
      "name": "神技之",
      "ilvl": 74,
      "weight": 1,
      "text": "+(31—33)點智慧",
      "template": "+#點智慧",
      "ranges": [
       [
        31,
        33
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "LifeRegeneration",
    "tiers": [
     {
      "name": "蠑螈之",
      "ilvl": 1,
      "weight": 1,
      "text": "(1—2)每秒生命回復",
      "template": "#每秒生命回復",
      "ranges": [
       [
        1,
        2
       ]
      ],
      "tier": 11
     },
     {
      "name": "蜥蜴之",
      "ilvl": 5,
      "weight": 1,
      "text": "(2.1—3)每秒生命回復",
      "template": "#每秒生命回復",
      "ranges": [
       [
        2.1,
        3
       ]
      ],
      "tier": 10
     },
     {
      "name": "阿扁蟲之",
      "ilvl": 11,
      "weight": 1,
      "text": "(3.1—4)每秒生命回復",
      "template": "#每秒生命回復",
      "ranges": [
       [
        3.1,
        4
       ]
      ],
      "tier": 9
     },
     {
      "name": "海星之",
      "ilvl": 17,
      "weight": 1,
      "text": "(4.1—6)每秒生命回復",
      "template": "#每秒生命回復",
      "ranges": [
       [
        4.1,
        6
       ]
      ],
      "tier": 8
     },
     {
      "name": "九頭蛇之",
      "ilvl": 26,
      "weight": 1,
      "text": "(6.1—9)每秒生命回復",
      "template": "#每秒生命回復",
      "ranges": [
       [
        6.1,
        9
       ]
      ],
      "tier": 7
     },
     {
      "name": "食人之",
      "ilvl": 35,
      "weight": 1,
      "text": "(9.1—13)每秒生命回復",
      "template": "#每秒生命回復",
      "ranges": [
       [
        9.1,
        13
       ]
      ],
      "tier": 6
     },
     {
      "name": "康復之",
      "ilvl": 47,
      "weight": 1,
      "text": "(13.1—18)每秒生命回復",
      "template": "#每秒生命回復",
      "ranges": [
       [
        13.1,
        18
       ]
      ],
      "tier": 5
     },
     {
      "name": "療養之",
      "ilvl": 58,
      "weight": 1,
      "text": "(18.1—23)每秒生命回復",
      "template": "#每秒生命回復",
      "ranges": [
       [
        18.1,
        23
       ]
      ],
      "tier": 4
     },
     {
      "name": "復興之",
      "ilvl": 68,
      "weight": 1,
      "text": "(23.1—29)每秒生命回復",
      "template": "#每秒生命回復",
      "ranges": [
       [
        23.1,
        29
       ]
      ],
      "tier": 3
     },
     {
      "name": "不朽之",
      "ilvl": 75,
      "weight": 1,
      "text": "(29.1—33)每秒生命回復",
      "template": "#每秒生命回復",
      "ranges": [
       [
        29.1,
        33
       ]
      ],
      "tier": 2
     },
     {
      "name": "鳳凰之",
      "ilvl": 81,
      "weight": 1,
      "text": "(33.1—36)每秒生命回復",
      "template": "#每秒生命回復",
      "ranges": [
       [
        33.1,
        36
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "LightningResistance",
    "tiers": [
     {
      "name": "雲朵之",
      "ilvl": 1,
      "weight": 1,
      "text": "+(6—10)%閃電抗性",
      "template": "+#%閃電抗性",
      "ranges": [
       [
        6,
        10
       ]
      ],
      "tier": 8
     },
     {
      "name": "冰雹之",
      "ilvl": 13,
      "weight": 1,
      "text": "+(11—15)%閃電抗性",
      "template": "+#%閃電抗性",
      "ranges": [
       [
        11,
        15
       ]
      ],
      "tier": 7
     },
     {
      "name": "暴風之",
      "ilvl": 25,
      "weight": 1,
      "text": "+(16—20)%閃電抗性",
      "template": "+#%閃電抗性",
      "ranges": [
       [
        16,
        20
       ]
      ],
      "tier": 6
     },
     {
      "name": "積雨雲之",
      "ilvl": 37,
      "weight": 1,
      "text": "+(21—25)%閃電抗性",
      "template": "+#%閃電抗性",
      "ranges": [
       [
        21,
        25
       ]
      ],
      "tier": 5
     },
     {
      "name": "暴風雨之",
      "ilvl": 49,
      "weight": 1,
      "text": "+(26—30)%閃電抗性",
      "template": "+#%閃電抗性",
      "ranges": [
       [
        26,
        30
       ]
      ],
      "tier": 4
     },
     {
      "name": "颱風之",
      "ilvl": 60,
      "weight": 1,
      "text": "+(31—35)%閃電抗性",
      "template": "+#%閃電抗性",
      "ranges": [
       [
        31,
        35
       ]
      ],
      "tier": 3
     },
     {
      "name": "電之",
      "ilvl": 71,
      "weight": 1,
      "text": "+(36—40)%閃電抗性",
      "template": "+#%閃電抗性",
      "ranges": [
       [
        36,
        40
       ]
      ],
      "tier": 2
     },
     {
      "name": "艾菲吉之",
      "ilvl": 82,
      "weight": 1,
      "text": "+(41—45)%閃電抗性",
      "template": "+#%閃電抗性",
      "ranges": [
       [
        41,
        45
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "LocalAttributeRequirements",
    "tiers": [
     {
      "name": "值得之",
      "ilvl": 24,
      "weight": 1,
      "text": "減少15%能力值需求",
      "template": "減少#%能力值需求",
      "ranges": [
       [
        15,
        15
       ]
      ],
      "tier": 5
     },
     {
      "name": "容易之",
      "ilvl": 32,
      "weight": 1,
      "text": "減少20%能力值需求",
      "template": "減少#%能力值需求",
      "ranges": [
       [
        20,
        20
       ]
      ],
      "tier": 4
     },
     {
      "name": "長才之",
      "ilvl": 40,
      "weight": 1,
      "text": "減少25%能力值需求",
      "template": "減少#%能力值需求",
      "ranges": [
       [
        25,
        25
       ]
      ],
      "tier": 3
     },
     {
      "name": "高超之",
      "ilvl": 52,
      "weight": 1,
      "text": "減少30%能力值需求",
      "template": "減少#%能力值需求",
      "ranges": [
       [
        30,
        30
       ]
      ],
      "tier": 2
     },
     {
      "name": "熟習之",
      "ilvl": 60,
      "weight": 1,
      "text": "減少35%能力值需求",
      "template": "減少#%能力值需求",
      "ranges": [
       [
        35,
        35
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "ReducedAilmentDuration",
    "tiers": [
     {
      "name": "密封之",
      "ilvl": 21,
      "weight": 1,
      "text": "減少(36—40)%你身上的流血持續時間",
      "template": "減少#%你身上的流血持續時間",
      "ranges": [
       [
        36,
        40
       ]
      ],
      "tier": 15
     },
     {
      "name": "抗毒素之",
      "ilvl": 21,
      "weight": 1,
      "text": "減少(36—40)%你身上的中毒持續時間",
      "template": "減少#%你身上的中毒持續時間",
      "ranges": [
       [
        36,
        40
       ]
      ],
      "tier": 14
     },
     {
      "name": "阻尼之",
      "ilvl": 21,
      "weight": 1,
      "text": "減少(36—40)%你身上的點燃持續時間",
      "template": "減少#%你身上的點燃持續時間",
      "ranges": [
       [
        36,
        40
       ]
      ],
      "tier": 13
     },
     {
      "name": "緩解之",
      "ilvl": 37,
      "weight": 1,
      "text": "減少(41—45)%你身上的流血持續時間",
      "template": "減少#%你身上的流血持續時間",
      "ranges": [
       [
        41,
        45
       ]
      ],
      "tier": 12
     },
     {
      "name": "補救措施之",
      "ilvl": 37,
      "weight": 1,
      "text": "減少(41—45)%你身上的中毒持續時間",
      "template": "減少#%你身上的中毒持續時間",
      "ranges": [
       [
        41,
        45
       ]
      ],
      "tier": 11
     },
     {
      "name": "鎮壓之",
      "ilvl": 37,
      "weight": 1,
      "text": "減少(41—45)%你身上的點燃持續時間",
      "template": "減少#%你身上的點燃持續時間",
      "ranges": [
       [
        41,
        45
       ]
      ],
      "tier": 10
     },
     {
      "name": "緩和之",
      "ilvl": 50,
      "weight": 1,
      "text": "減少(46—50)%你身上的流血持續時間",
      "template": "減少#%你身上的流血持續時間",
      "ranges": [
       [
        46,
        50
       ]
      ],
      "tier": 9
     },
     {
      "name": "治癒之",
      "ilvl": 50,
      "weight": 1,
      "text": "減少(46—50)%你身上的中毒持續時間",
      "template": "減少#%你身上的中毒持續時間",
      "ranges": [
       [
        46,
        50
       ]
      ],
      "tier": 8
     },
     {
      "name": "驚魂之",
      "ilvl": 50,
      "weight": 1,
      "text": "減少(46—50)%你身上的點燃持續時間",
      "template": "減少#%你身上的點燃持續時間",
      "ranges": [
       [
        46,
        50
       ]
      ],
      "tier": 7
     },
     {
      "name": "安撫之",
      "ilvl": 64,
      "weight": 1,
      "text": "減少(51—55)%你身上的流血持續時間",
      "template": "減少#%你身上的流血持續時間",
      "ranges": [
       [
        51,
        55
       ]
      ],
      "tier": 6
     },
     {
      "name": "萬靈丹之",
      "ilvl": 64,
      "weight": 1,
      "text": "減少(51—55)%你身上的中毒持續時間",
      "template": "減少#%你身上的中毒持續時間",
      "ranges": [
       [
        51,
        55
       ]
      ],
      "tier": 5
     },
     {
      "name": "淬火之",
      "ilvl": 64,
      "weight": 1,
      "text": "減少(51—55)%你身上的點燃持續時間",
      "template": "減少#%你身上的點燃持續時間",
      "ranges": [
       [
        51,
        55
       ]
      ],
      "tier": 4
     },
     {
      "name": "止血之",
      "ilvl": 76,
      "weight": 1,
      "text": "減少(56—60)%你身上的流血持續時間",
      "template": "減少#%你身上的流血持續時間",
      "ranges": [
       [
        56,
        60
       ]
      ],
      "tier": 3
     },
     {
      "name": "解藥之",
      "ilvl": 76,
      "weight": 1,
      "text": "減少(56—60)%你身上的中毒持續時間",
      "template": "減少#%你身上的中毒持續時間",
      "ranges": [
       [
        56,
        60
       ]
      ],
      "tier": 2
     },
     {
      "name": "澆熄之",
      "ilvl": 76,
      "weight": 1,
      "text": "減少(56—60)%你身上的點燃持續時間",
      "template": "減少#%你身上的點燃持續時間",
      "ranges": [
       [
        56,
        60
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "Strength",
    "tiers": [
     {
      "name": "野蠻之",
      "ilvl": 1,
      "weight": 1,
      "text": "+(5—8)點力量",
      "template": "+#點力量",
      "ranges": [
       [
        5,
        8
       ]
      ],
      "tier": 8
     },
     {
      "name": "摔角手之",
      "ilvl": 11,
      "weight": 1,
      "text": "+(9—12)點力量",
      "template": "+#點力量",
      "ranges": [
       [
        9,
        12
       ]
      ],
      "tier": 7
     },
     {
      "name": "熊之",
      "ilvl": 22,
      "weight": 1,
      "text": "+(13—16)點力量",
      "template": "+#點力量",
      "ranges": [
       [
        13,
        16
       ]
      ],
      "tier": 6
     },
     {
      "name": "獅子之",
      "ilvl": 33,
      "weight": 1,
      "text": "+(17—20)點力量",
      "template": "+#點力量",
      "ranges": [
       [
        17,
        20
       ]
      ],
      "tier": 5
     },
     {
      "name": "大猩猩之",
      "ilvl": 44,
      "weight": 1,
      "text": "+(21—24)點力量",
      "template": "+#點力量",
      "ranges": [
       [
        21,
        24
       ]
      ],
      "tier": 4
     },
     {
      "name": "巨人之",
      "ilvl": 55,
      "weight": 1,
      "text": "+(25—27)點力量",
      "template": "+#點力量",
      "ranges": [
       [
        25,
        27
       ]
      ],
      "tier": 3
     },
     {
      "name": "海獸之",
      "ilvl": 66,
      "weight": 1,
      "text": "+(28—30)點力量",
      "template": "+#點力量",
      "ranges": [
       [
        28,
        30
       ]
      ],
      "tier": 2
     },
     {
      "name": "泰坦之",
      "ilvl": 74,
      "weight": 1,
      "text": "+(31—33)點力量",
      "template": "+#點力量",
      "ranges": [
       [
        31,
        33
       ]
      ],
      "tier": 1
     }
    ]
   },
   {
    "family": "StunThreshold",
    "tiers": [
     {
      "name": "厚皮之",
      "ilvl": 1,
      "weight": 1,
      "text": "暈眩門檻+(6—11)",
      "template": "暈眩門檻+#",
      "ranges": [
       [
        6,
        11
       ]
      ],
      "tier": 10
     },
     {
      "name": "韌膚之",
      "ilvl": 8,
      "weight": 1,
      "text": "暈眩門檻+(12—29)",
      "template": "暈眩門檻+#",
      "ranges": [
       [
        12,
        29
       ]
      ],
      "tier": 9
     },
     {
      "name": "石皮之",
      "ilvl": 15,
      "weight": 1,
      "text": "暈眩門檻+(30—49)",
      "template": "暈眩門檻+#",
      "ranges": [
       [
        30,
        49
       ]
      ],
      "tier": 8
     },
     {
      "name": "金屬皮之",
      "ilvl": 22,
      "weight": 1,
      "text": "暈眩門檻+(50—72)",
      "template": "暈眩門檻+#",
      "ranges": [
       [
        50,
        72
       ]
      ],
      "tier": 7
     },
     {
      "name": "鋼皮之",
      "ilvl": 29,
      "weight": 1,
      "text": "暈眩門檻+(73—97)",
      "template": "暈眩門檻+#",
      "ranges": [
       [
        73,
        97
       ]
      ],
      "tier": 6
     },
     {
      "name": "石膚之",
      "ilvl": 36,
      "weight": 1,
      "text": "暈眩門檻+(98—124)",
      "template": "暈眩門檻+#",
      "ranges": [
       [
        98,
        124
       ]
      ],
      "tier": 5
     },
     {
      "name": "鉑膚之",
      "ilvl": 45,
      "weight": 1,
      "text": "暈眩門檻+(125—163)",
      "template": "暈眩門檻+#",
      "ranges": [
       [
        125,
        163
       ]
      ],
      "tier": 4
     },
     {
      "name": "金剛皮之",
      "ilvl": 54,
      "weight": 1,
      "text": "暈眩門檻+(164—206)",
      "template": "暈眩門檻+#",
      "ranges": [
       [
        164,
        206
       ]
      ],
      "tier": 3
     },
     {
      "name": "玉皮之",
      "ilvl": 63,
      "weight": 1,
      "text": "暈眩門檻+(207—253)",
      "template": "暈眩門檻+#",
      "ranges": [
       [
        207,
        253
       ]
      ],
      "tier": 2
     },
     {
      "name": "曜膚之",
      "ilvl": 72,
      "weight": 1,
      "text": "暈眩門檻+(254—304)",
      "template": "暈眩門檻+#",
      "ranges": [
       [
        254,
        304
       ]
      ],
      "tier": 1
     }
    ]
   }
  ]
 }
};
