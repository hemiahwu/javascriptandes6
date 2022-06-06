// 函数定义

// 无返回值 无参数
// function greet() {
//   console.log('Hello');
// }

// 有返回值 无参数
// function greet() {
//   // 返回 值, 停止代码执行
//   // return { a: 1, b: 1 };
//   return [1, 2, 3];

//   // console.log(123);
// }

// 有参数 无返回值
// function greet(firstName = '形参') {
//   // if (typeof firstName == 'undefined') firstName = '米斯特吴';
//   console.log('Hello ' + firstName);
// }

// 有参数 有返回值
// function greet(firstName = '形参') {
//   return 'Hello ' + firstName;
// }

// 函数调用
// greet('实参');
// console.log(greet('Henry'));

// 函数表达式
// function square(x) {
//   return x * x;
// }
// const square = function(x = 3) {
//   return x * x;
// };

// console.log(square());

// 自执行函数
// (function() {
//   console.log('自执行函数');
// })();

// (function(name) {
//   console.log('自执行函数' + name);
// })('米斯特吴');

// 属性函数
const todo = {
  add: function() {
    console.log('Add todo...');
  },
  edit: function(id) {
    console.log('Edit todo...' + id);
  }
};

todo.delete = function() {
  console.log('Delete todo...');
};

todo.add();
todo.edit(22);
todo.delete();
