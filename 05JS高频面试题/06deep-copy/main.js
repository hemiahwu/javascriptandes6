// 深拷贝和浅拷贝

/**
 * 浅拷贝: 两个数据的地址一样
 * 深拷贝: 两个数据的地址不一样
 *
 * 老吴有一个信用卡(主卡),又开了一个副卡给老吴媳妇
 * 深拷贝(1) 浅拷贝(2)
 *
 * 老吴有一个工资卡,上交给媳妇,老吴又有其他的卡.
 * 深拷贝(1) 浅拷贝(2)
 */

const arr1 = [
  { name: "米修教育", age: 5 },
  { name: "张三", age: 25 },
  { name: "李四", age: 52 },
  { name: "米斯特吴", age: 33 },
];

const arr2 = [
  { name: "张三", age: 25 },
  { name: "李四", age: 52 },
];

// 深拷贝
const a = arr1.map((item) => JSON.stringify(item));
const b = arr2.map((item) => JSON.stringify(item));

const diffArr = a
  .concat(b)
  .filter((v) => !a.includes(v) || !b.includes(v))
  .map((item) => JSON.parse(item));
console.log(diffArr);

// let diffArr = a.concat(b);
// diffArr = diffArr.filter((v) => !a.includes(v) || !b.includes(v));
// diffArr = diffArr.map((item) => JSON.parse(item));
// console.log(diffArr);
// 浅拷贝 行不通
// // 1.数组合并
// let diffArr = [...arr1, ...arr2];
// console.log(diffArr);

// // 三等判断条件 值 类型 地址
// // console.log(arr1[1] === diffArr[4]);

// diffArr = diffArr.filter((v) => {
//   return !arr1.includes(v) || !arr2.includes(v);
// });

// console.log(diffArr);

// 新的数组
// const arr3 = [
//   { name: "米修教育", age: 5 },
//   { name: "米斯特吴", age: 33 },
// ];

// // 去重可使用 new Set
// let newArr = Array.from(new Set(diffArr));
// console.log(newArr);
