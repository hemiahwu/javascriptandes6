// if switch

// if分支语句
// if ('条件') {}

// 条件  关系运算符 逻辑运算  最终结果为boolean
// 关系运算符: > < == >= <= != === !==
// 逻辑运算符: &&(AND) ||(OR)  !(取反)

let id = 100;

// if (id == 100) {
//   console.log('条件为真: id的值就是100');
// } else {
//   console.log('条件为假: id的值不是100');
// }
// console.log('分支外的语句');

// TEST 分支条件是否为undefined
// if (typeof id !== 'undefined') {
//   console.log(`ID是${id}`);
// } else {
//   console.log('没有设置ID');
// }

// 颜色
// const color = 'blue';

// if (color == 'red') {
//   console.log('Color is red');
// } else if (color == 'blue') {
//   console.log('Color is blue');
// } else {
//   console.log('Color is not red or blue');
// }

// 逻辑运算符
const name = 'Steve';
const age = 22;

// 逻辑与 && AND 一假既假
// if (age > 0 && age < 12) {
//   console.log(`${name} is a child`);
// } else if (age >= 13 && age <= 19) {
//   console.log(`${name} is a teenager`);
// } else {
//   console.log(`${name} is an adault`);
// }

// 逻辑或  一真既真
// if (age < 16 || age > 65) {
//   console.log(`${name} 要么是孩子 要么是老人`);
// } else {
//   console.log(`${name} 是个成人`);
// }

// // 逻辑非 !
// if (!true) {
//   console.log('Correct');
// }

// 三目运算符
console.log(id === 100 ? 'Correct' : 'Incorrect');

if (id == 100) {
  console.log('Correct');
} else {
  console.log('Incorrect');
}
