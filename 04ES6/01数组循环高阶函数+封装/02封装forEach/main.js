const items = [
  { name: "自行车", price: 200 },
  { name: "电视机", price: 3000 },
  { name: "台式电脑", price: 1000 },
  { name: "苹果手机", price: 4000 },
  { name: "iMac", price: 20000 },
  { name: "键盘", price: 60 },
  { name: "鼠标", price: 20 },
];

// 问题: 请打印数据中所有的名字 (forEach)

items.forEach(function (item, i, array) {
  console.log(i, item.name, array);
});

// 封装高阶函数

function forEach(array, cb) {
  for (let i = 0; i < array.length; i++) {
    cb(array[i], i, array);
  }
}

forEach(items, function (item, i, array) {
  console.log(i, item.name, array);
});
