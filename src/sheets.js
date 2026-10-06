// 彈出頁：只負責「點按鈕打開、點關閉或旁邊收起來」。內容由各系統自己畫。
window.G = window.G || {};
G.setupSheets = function () {
  const $ = id => document.getElementById(id);
  const open = id => { $(id).hidden = false; };
  $("charBtn").onclick = () => open("charSheet");
  $("equipBtn").onclick = () => open("equipSheet");
  document.querySelectorAll(".sheet").forEach(sheet => {
    sheet.addEventListener("click", e => {
      if (e.target === sheet || e.target.closest("[data-close]")) sheet.hidden = true;
    });
  });
};
