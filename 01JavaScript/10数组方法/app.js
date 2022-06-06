// 数组方法

const numbers = [43, 45, 56, 33, 44, 1, 7];
const numbers2 = new Array(22, 40, 32, 76, 99);
const fruit = ['Apple', 'Banana', 'orange', 'Pear'];
const mixed = [22, 'Hello', true, undefined, null, { a: 1, b: 1 }, new Date()];

let val;

// // 获取长度
// val = numbers.length;
// // 检查是不是数组
// val = Array.isArray(numbers);
// // 获取数组单个元素
// val = numbers[3];

// // 更改某个元素值
// numbers[2] = 100;
// // 查找元素下标位置
// val = numbers.indexOf(43);

// // 添加和删除
// numbers.push(250);
// // 从前面加
// numbers.unshift(120);
// // 从后面删除
// numbers.pop();
// // 从前面删除
// numbers.shift();

// // 删掉多个
// // numbers.splice(1, 3);

// // 反转
// numbers.reverse();

// // 数组拼接
// val = numbers.concat(numbers2);

// // 排序
// val = fruit.sort();

// val = numbers.sort();

// 正常排序数值
val = numbers.sort(function(x, y) {
  return y - x;
});

console.log(numbers);
console.log(val);
