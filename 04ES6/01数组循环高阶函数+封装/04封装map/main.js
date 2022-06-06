const items = [
  { name: "自行车", price: 200 },
  { name: "电视机", price: 3000 },
  { name: "台式电脑", price: 1000 },
  { name: "苹果手机", price: 4000 },
  { name: "iMac", price: 20000 },
  { name: "键盘", price: 60 },
  { name: "鼠标", price: 20 },
];

// 问题: 请获取数据中所有的name属性,放入数组中 (map)
// 例如: ["自行车","电视机","台式电脑","苹果手机","iMac","键盘","鼠标"]
const items2 = items.map(function (item, i, array) {
  return item.name;
});

// console.log(items2);

// 自己封装map高阶函数
function map(array, cb) {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    newArray.push(cb(array[i]));
  }

  return newArray;
}

const container = map(items, function (item, i, array) {
  return item.name;
});

console.log(container);
