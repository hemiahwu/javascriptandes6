// 全局变量
var a = 1;
let b = 2;
const c = 3;

if (true) {
  // 局部变量
  let b = 20;
  // console.log(b);
}

// {
//   let d = 40;
//   console.log(d);
// }

// for (let a = 0; a < 10; a++) {
//   console.log(a);
// }

// function test() {
//   let a = 10;
//   console.log(a);
// }

// test();

if (true) {
  const c = 30;
  console.log(c);
}
console.log('global ' + a, b, c);
