const items = [
  { name: "自行车", price: 200 },
  { name: "电视机", price: 3000 },
  { name: "台式电脑", price: 1000 },
  { name: "苹果手机", price: 4000 },
  { name: "iMac", price: 20000 },
  { name: "键盘", price: 60 },
  { name: "鼠标", price: 20 },
];

// 问题: 判断数据中是否所有商品都是小于100的商品,返回bool (every)
const every1 = items.every(function (item) {
  if (item.price < 10000) {
    return true;
  }
});

// console.log(every1);

// 封装every
function every(array, cb) {
  for (let i = 0; i < array.length; i++) {
    if (!cb(array[i], i, array)) {
      return false;
    }
  }

  return true;
}

const every2 = every(items, function (item) {
  if (item.price < 100000) {
    return true;
  }
});

console.log(every2);
