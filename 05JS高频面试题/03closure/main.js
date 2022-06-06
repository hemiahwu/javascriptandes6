// 1.闭包就是能够读取其他函数内部变量的函数。
// 2.闭包可以理解成“定义在一个函数内部的函数“。
// 3.在本质上，闭包是将函数内部和函数外部连接起来的桥梁。

// 闭包的原理
// function outer() {
//   var a = 10;
//   function inner() {
//     console.log("内部函数", a);
//   }

//   return inner;
// }

// const closure = outer();
// closure();

// ES6 写法
// const outer = () => {
//   let a = 20;
//   return () => {
//     console.log("内部函数", a);
//   };
// };
// const closure = outer();
// closure();

// 闭包的使用 计数器
// const addCounter = () => {
//   let counter = 0;
//   counter++;
//   return counter;
// };

// console.log(addCounter()); // 1
// console.log(addCounter()); // 1
// console.log(addCounter()); // 1
// console.log(addCounter()); // 1

// 闭包
// const addCounter = () => {
//   let counter = 0;
//   return () => {
//     counter++;
//     return counter;
//   };
// };

// const closure = addCounter();

// console.log(closure()); // 1
// console.log(closure()); // 2
// console.log(closure()); // 3
// console.log(closure()); // 4
// 解析
// console.log(addCounter()());
// console.log(addCounter()());
// console.log(addCounter()());
// console.log(addCounter()());

// // 定义闭包
// const btn = document.querySelector("#btn");
// const input = document.querySelector("input");
// const addCounter = () => {
//   let counter = 10;

//   return () => {
//     counter--;
//     return counter;
//   };
// };
// const closure = addCounter();

// input.addEventListener("input", () => {
//   if (input.value) btn.disabled = false;
// });

// const counter = () => {
//   let timer = setInterval(() => {
//     btn.textContent = closure();
//     if (btn.textContent == 0) {
//       clearInterval(timer);
//       btn.textContent = "发送短信";
//       input.value = "";
//     }
//   }, 1000);
// };

// btn.addEventListener("click", counter);

// 闭包的应用 - 解决耗时

// // 非闭包执行效率
// function find(index) {
//   let a = [];
//   for (let i = 0; i < 100000; i++) {
//     a[i] = i;
//   }

//   console.log(`找到${a[index]}的时间为`);
// }

// console.time();
// find(6); // 3.4033203125 ms
// console.timeEnd();

// // 闭包的形式
// function find() {
//   let a = [];
//   for (let i = 0; i < 100000; i++) {
//     a[i] = i;
//   }
//   return (index) => {
//     console.log(`找到${a[index]}的时间为`);
//   };
// }
// const closure = find();
// console.time();
// closure(6); // 0.0869140625 ms
// console.timeEnd();

// 闭包的应用 - 设计模式开发
const UICtrl = (() => {
  // 私有空间 属性和方法
  let text = "hello world";

  const changeText = () => {
    const element = document.querySelector("h1");
    element.textContent = text;
  };

  return {
    callChangeText: () => {
      changeText();
    },
  };
})();
// UICtrl.text;
// UICtrl.changeText();
UICtrl.callChangeText();

// lodash
