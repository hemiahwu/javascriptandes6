// var , let , const

// // 定义变量
// var name = '变量所存储的值!';
// console.log(name);
// // 修改name变量里的内容
// name = '米斯特吴';
// console.log(name);

// // 初始化var
// var greeting;
// console.log(greeting);

// // 赋值
// greeting = 'Hello';
// console.log(greeting);

// // 变量名的要求: 字母, 数字, _, $
// // 不能以数字开头
// // var _name = 123;

// // 变量书写的多种形式
// var firstName = 'Wu';
// var first_name = 'Wu';
// var FirstName = 'Wu';
// var firstname = 'Wu';

// 快捷注释: control + /

// LET
// let name;
// name = '米斯特吴';
// console.log(name);
// name = '吴海洋';
// console.log(name);

// CONST 常量关键字
// const name = '米斯特吴';
// console.log(name);
// 不能修改常量的值
// name = '吴海洋';
// 定义常量一定要赋值
// const greeting;

const person = {
  name: '米斯特吴',
  age: 32
};

// person = {
//   name: '吴海洋',
//   age: 31
// };

person.name = '吴海洋';
person.age = 31;
console.log(person);

const numbers = [1, 2, 3, 4, 5];
// numbers = [1,2,3,4,5,6]
numbers.push(6);
console.log(numbers);
