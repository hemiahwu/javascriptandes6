const items = [
  { name: "自行车", price: 200 },
  { name: "电视机", price: 3000 },
  { name: "台式电脑", price: 1000 },
  { name: "苹果手机", price: 4000 },
  { name: "iMac", price: 20000 },
  { name: "键盘", price: 60 },
  { name: "鼠标", price: 20 },
];

// 问题: 请获取1000(包括)以下的所有对象 (filter)
const items2 = items.filter(function (item) {
  //   if (item.price <= 1000) {
  //     return item;
  //   }

  return item.price <= 1000;
});

console.log(items2);

// 封装filter
function filter(array, cb) {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (cb(array[i])) {
      newArray.push(array[i]);
    }
  }

  return newArray;
}

const container = filter(items, function (item) {
  return item.price <= 1000;
});

console.log(container);
