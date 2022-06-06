// 类型转换

let val;

// Number to string
val = String(555);
val = String(4 + 4);

// Bool to string
val = String(true);

// Date to string
val = String(new Date());

// Array to stirng
val = String([1, 2, 3, 4]);

// toString()
val = (555).toString();
val = true.toString();

// String to Number
val = Number('5');
// Bool to Number
val = Number(true);
val = Number(false);
// Null to Number
val = Number(null);
// NaN
val = Number('hello');
val = Number([1, 2, 3]);

// 另外一种形式
val = parseInt('100.30');
val = parseFloat('100.30');

// 输出
// console.log(val);
// console.log(typeof val);
// // console.log(val.length);
// console.log(val.toFixed(2));

const val1 = String(5);
const val2 = 6;
const sum = val1 + val2;
console.log(sum);
console.log(typeof sum);
