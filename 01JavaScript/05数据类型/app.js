// 数据类型

/**
 * 1. 基本数据类型
 * String(字符串) Number(数值) Boolean(布尔) Null(空) Undefined(未定义) Symbol(符号)
 * 2. 引用数据类型
 * Object(对象)
 */

// string
const name = '米斯特吴';
// number
const age = 45;
// boolean
const hasKids = true;
// Null
const car = null;
// undefined
let test;
// Symbol
const sym = Symbol();

// 引用数据类型
// 数组
const array = new Array();
const hobbies = ['movies', 'music', 46, true];

// 对象
const adr = new Object();
adr.city = '成都';
const address = {
  city: '北京',
  state: '昌平区'
};

// 日期对象
const today = new Date();
console.log(today);
console.log(typeof today);
