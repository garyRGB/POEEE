// 最先載入。任何檔案出錯（例如資料檔少一個逗號），就在畫面最上面顯示錯在哪個檔案、第幾行，不會只剩白畫面。
(function () {
  function show(msg) {
    const box = document.createElement("div");
    box.className = "errbox";
    box.textContent = msg;
    (document.body || document.documentElement).prepend(box);
  }
  window.addEventListener("error", e => {
    const file = (e.filename || "").split("/").slice(-2).join("/") || "未知檔案";
    show(`出錯了：${file} 第 ${e.lineno || "?"} 行\n${e.message}`);
  });
  // 給其他模組用：資料缺欄位時呼叫
  window.reportError = show;
})();
