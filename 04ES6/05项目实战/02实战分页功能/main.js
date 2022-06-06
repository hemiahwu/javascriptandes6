// 引入
import displayFollowers from "./modules/displayFollowers.js";
import fetchFollowers from "./modules/fetchFollowers.js";
import paginate from "./modules/paginate.js";
import displayButtons from "./modules/displayButtons.js";

const title = document.querySelector(".section-title h1");
const btnContainer = document.querySelector(".btn-container");
let index = 0;
let pages = [];

const init = async () => {
  const followers = await fetchFollowers();
  title.textContent = "分页";
  pages = paginate(followers);
  setupUI();
};

const setupUI = () => {
  displayFollowers(pages[index]);
  displayButtons(btnContainer, pages, index);
};

btnContainer.addEventListener("click", (e) => {
  // console.log(e.target.dataset.index);

  if (e.target.classList.contains("btn-container")) {
    return;
  }

  if (e.target.classList.contains("page-btn")) {
    index = e.target.dataset.index;
  }

  if (e.target.classList.contains("prev-btn")) {
    index--;

    if (index < 0) {
      index = pages.length - 1;
    }
  }

  if (e.target.classList.contains("next-btn")) {
    index++;

    if (index > pages.length - 1) {
      index = 0;
    }
  }

  setupUI();
});

window.addEventListener("load", init);

// 100条数据 10 * 10
// 10页
// 每页10条数据

/**
 * 1.根据数据渲染页面
 * 2.获取数据
 * 3.动态渲染页面
 * 4.模块抽离
 * 5.处理分页
 * 6.动态渲染button按钮
 * 7.通过代理事件实现页面转换
 * 8.优化
 */
