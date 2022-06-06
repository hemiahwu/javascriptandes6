const items = [
  { name: "自行车", price: 200 },
  { name: "电视机", price: 3000 },
  { name: "台式电脑", price: 1000 },
  { name: "苹果手机", price: 4000 },
  { name: "iMac", price: 20000 },
  { name: "键盘", price: 60 },
  { name: "鼠标", price: 20 },
];

// 问题: 判断数据中是否拥有小于100的商品,返回bool (some)
const some1 = items.some(function (item) {
  if (item.price < 100) {
    return true;
  }
});

// 封装some
function some(array, cb) {
  for (let i = 0; i < array.length; i++) {
    if (cb(array[i], i, array)) {
      return true;
    }
  }

  return false;
}

const some2 = some(items, function (item) {
  if (item.price < 100) {
    return true;
  }
});

console.log(some2);
