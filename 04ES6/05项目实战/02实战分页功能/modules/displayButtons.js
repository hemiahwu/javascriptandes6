const displayButtons = (btnContainer, pages, index) => {
  // 处理button
  const btns = pages.map((_, pageIndex) => {
    return `
    <button data-index="${pageIndex}" class="page-btn ${
      index == pageIndex ? "active-btn" : null
    }">${pageIndex + 1}</button>
    `;
  });
  btns.push('<button class="next-btn">下一页</button>');
  btns.unshift('<button class="prev-btn">上一页</button>');

  btnContainer.innerHTML = btns.join("");
};

export default displayButtons;
