const items = [
  { name: "自行车", price: 200 },
  { name: "电视机", price: 3000 },
  { name: "台式电脑", price: 1000 },
  { name: "苹果手机", price: 4000 },
  { name: "iMac", price: 20000 },
  { name: "键盘", price: 60 },
  { name: "鼠标", price: 20 },
  { name: "iMac", price: 10000 },
];

// // 问题: 请获取数据中iMac对象 (find)
// const imac = items.find(function (item) {
//   if (item.name === "iMac") {
//     return true;
//   }
// });

// console.log(imac);

// 封装find
function find(array, cb) {
  for (let i = 0; i < array.length; i++) {
    if (cb(array[i], i, array)) {
      return array[i];
    }
  }
}

const item = find(items, function (item) {
  return item.name === "iMac";
});

console.log(item);
