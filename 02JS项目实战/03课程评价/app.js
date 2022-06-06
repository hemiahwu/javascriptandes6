// 本地评价数据
const reviews = [
  {
    id: 1,
    name: "老吴",
    job: "前端开发工程师",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "感谢吴老师一路上的教导，真的特别推荐在校生以视频入门，效率是最高的。而且建议二倍速然后不懂的地方暂停好好想想（不是说老师慢）而是人语速本来就是跟不上思考速度很正常哈~推荐大家看看吴老师的课，发自内心感谢",
  },
  {
    id: 2,
    name: "米修",
    job: "前端开发工程师",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "课程引人入胜。赞！！！ 希望吴总讲讲node 写小程序接口，node 写小程序接口，node 写小程序接口，node 写小程序接口，node 写小程序接口，node 写小程序接口，node 写小程序接口，node 写小程序接口，node 写小程序接口",
  },
  {
    id: 3,
    name: "米斯特吴",
    job: "全栈开发工程师",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "老吴可以说是我前端路上的启蒙老师，真的非常感谢老师。很喜欢老师的两个特点：讲课声音很清晰；讲课不啰嗦，简单明了。最后，送自己和所有在前端路上努力的小伙伴们：越努力越幸运。",
  },
  {
    id: 4,
    name: "米修米修",
    job: "助教老师",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "五星好评，一直以来看的最多，也学到最多的课程了， 通俗易懂 思路清晰。 十分推荐大家来购买，尤其是实战经验不多，项目开发经验匮乏的小伙伴学习。 从小白成长到现在的月薪30K+的中高级前端开发，一路走来，吴老师的课程给我的帮助最大。 每段视频课程 时间都控制在 十到二十分钟，全程都是干货，讲解清晰，照着视频上手开发也容易。 虽然有些技术网上可以搜索到，但是需要耗费大量时间去寻找和阅读，十分耗费精力， 吴老师的课程会把重要的整理出来， 配合视频讲解，同时还会分享一些项目实战中的经验，少走了很多弯路， 希望老师的课程越做越好，推出更多更好的教程出来让我们学习。",
  },
];
// 获取元素对象
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// 设置起始下标
let currentItem = 0;

// 初始化数据
window.addEventListener("DOMContentLoaded", function () {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
});

// 展示用户数据
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}
// 展示下一个人的数据
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
// 展示上一个人的数据
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});
// 随机展示
randomBtn.addEventListener("click", function () {
  console.log("hello");

  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});
