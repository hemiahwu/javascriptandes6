const menu = [
  {
    id: 1,
    title: "煎饼",
    category: "早餐",
    price: 12.99,
    img: "./images/item-1.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Repudiandae, sint quam. Et reprehenderit fugiat nesciunt inventore
    laboriosam excepturi! Quo, officia.`,
  },
  {
    id: 2,
    title: "豪华西餐",
    category: "午餐",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Repudiandae, sint quam. Et reprehenderit fugiat nesciunt inventore
    laboriosam excepturi! Quo, officia.`,
  },
  {
    id: 3,
    title: "哥斯拉奶昔",
    category: "饮料",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Repudiandae, sint quam. Et reprehenderit fugiat nesciunt inventore
    laboriosam excepturi! Quo, officia.`,
  },
  {
    id: 4,
    title: "牛排意面",
    category: "早餐",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Repudiandae, sint quam. Et reprehenderit fugiat nesciunt inventore
    laboriosam excepturi! Quo, officia.`,
  },
  {
    id: 5,
    title: "鸡蛋汉堡",
    category: "午餐",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Repudiandae, sint quam. Et reprehenderit fugiat nesciunt inventore
    laboriosam excepturi! Quo, officia.`,
  },
  {
    id: 6,
    title: "奥利奥",
    category: "饮料",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Repudiandae, sint quam. Et reprehenderit fugiat nesciunt inventore
    laboriosam excepturi! Quo, officia.`,
  },
  {
    id: 7,
    title: "培根",
    category: "早餐",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Repudiandae, sint quam. Et reprehenderit fugiat nesciunt inventore
    laboriosam excepturi! Quo, officia.`,
  },
  {
    id: 8,
    title: "汉堡薯条",
    category: "午餐",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Repudiandae, sint quam. Et reprehenderit fugiat nesciunt inventore
    laboriosam excepturi! Quo, officia.`,
  },
  {
    id: 9,
    title: "双饮",
    category: "饮料",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Repudiandae, sint quam. Et reprehenderit fugiat nesciunt inventore
    laboriosam excepturi! Quo, officia.`,
  },
  {
    id: 10,
    title: "牛排",
    category: "晚餐",
    price: 22.99,
    img: "./images/item-10.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Repudiandae, sint quam. Et reprehenderit fugiat nesciunt inventore
    laboriosam excepturi! Quo, officia.`,
  },
];

const sectionCenter = document.querySelector(".section-center");

window.addEventListener("DOMContentLoaded", function () {
  let displayMenu = menu.map(function (item) {
    // console.log(item);

    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");
  console.log(displayMenu);

  sectionCenter.innerHTML = displayMenu;
});
