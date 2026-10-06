// 角色基礎數值（POE2）：每級成長、能力值換算、職業起始能力值
// 由 tools/crawl_items.py 從 poe2db.tw 產生（2026-10-06）。照抄 poe2db；Gary 可以直接改這裡的數字。
window.DATA = window.DATA || {};
DATA.character = {
 "lifeBase": 28,
 "manaBase": 34,
 "lifePerLevel": 12,
 "manaPerLevel": 4,
 "accuracyPerLevel": 3,
 "evasionBase": 27,
 "lifePerStr": 2,
 "manaPerInt": 2,
 "accuracyPerDex": 8,
 "manaRegenPctPerSec": 4.0,
 "maxResPct": 75,
 "critBonusPct": 100,
 "classes": {
  "witch": {
   "str": 7,
   "dex": 7,
   "int": 15,
   "poe2dbWeapon": "Occult",
   "source": "https://poe2db.tw/us/Witch"
  },
  "duelist": {
   "str": 11,
   "dex": 11,
   "int": 7,
   "poe2dbWeapon": "Sword",
   "source": "https://poe2db.tw/us/Duelist"
  }
 },
 "source": {
  "poe2db": "https://poe2db.tw/us/Character",
  "attributes": "https://poe2db.tw/tw/Attributes",
  "wiki": "https://poe2wiki.net/wiki/Low_Life（Lv1 基礎生命 28、魔力 34；poe2db 角色頁沒有這兩個數字）"
 }
};
