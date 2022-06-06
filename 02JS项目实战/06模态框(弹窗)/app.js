// 01获取DOM元素对象 modal-btn,modal-overlay,close-btn
// 02监听modal-btn 和 closeBtn事件
// 03当用户点击了modal-btn按钮,那么激活.open-modal样式,显示modal-overlay
// 04挡用户点击了close-btn,那么移出.open-modal样式,隐藏modal-overlay

const modalBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");

modalBtn.addEventListener("click", function () {
  modal.classList.add("open-modal");
});
closeBtn.addEventListener("click", function () {
  modal.classList.remove("open-modal");
});
