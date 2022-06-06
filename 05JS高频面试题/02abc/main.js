// // 引言
// function person() {
//   console.log(this.name);
// }

// var obj = {
//   name: "米斯特吴",
// };
// // 期望值: 米斯特吴
// person.call(obj);
// person.apply(obj);
// person.bind(obj)();

// call 立即执行, 参数 - 参数列表(a,b,c,d)
// function test() {
//   console.log(this);
// }
// test();
// window.test();
// test.call(window);

// // 示例
// const john = {
//   name: "john",
//   age: 24,
//   greet: function () {
//     console.log(this);
//     console.log(`hello 我是${this.name}, 我的年龄是${this.age}`);
//   },
// };

// const laowu = { name: "老吴", age: 33 };

// // john.greet.call(laowu);
// john.greet.call(window);
// // 总结: call谁,this就指向谁

// apply的使用 立即执行 参数-参数列表([a,b,c,d])
// // 示例
// const john = {
//   name: "john",
//   age: 24,
// };

// const laowu = { name: "老吴", age: 33 };

// function greet(city, country) {
//   console.log(this);
//   console.log(
//     `hello 我是${this.name}, 我的年龄是${this.age},来自${country}${city}`
//   );
// }

// // greet.apply(john);
// // greet.apply(laowu);
// // 总结: call谁,this就指向谁

// // apply 和 call的传参形式
// greet.call(john, "成都", "中国");
// greet.call(laowu, "哈尔滨", "中国");

// greet.apply(john, ["成都", "中国"]);
// greet.apply(laowu, ["哈尔滨", "中国"]);

// // bind 委派 稍后执行, 参数-参数列表(a,b,c,d)
// // 示例
// const john = {
//   name: "john",
//   age: 24,
// };

// const laowu = { name: "老吴", age: 33 };

// function greet(city, country) {
//   console.log(this);
//   console.log(
//     `hello 我是${this.name}, 我的年龄是${this.age},来自${country}${city}`
//   );
// }

// const newGreet = greet.bind(john, "成都", "中国");
// newGreet();

// 实战练习
const btn = document.querySelector(".increment");

const counter = {
  count: 0,
  increment() {
    console.log(this);
    this.count++;
    console.log(this.count);
  },
};

const increment = counter.increment.bind(counter);

btn.addEventListener("click", increment);
// btn.addEventListener("click", function(){

// });

// 移除事件
btn.removeEventListener("click", increment);
