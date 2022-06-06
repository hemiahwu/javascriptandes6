/** 
 * 数据结构: map
 * 键值对: 与对象不同的是键和值可以是任何类型
 */

 
 const map1 = new Map();

 // 设置key键
 const key1 = 'some string',
       key2 = {},
       key3 = function(){};

 // 为key设置value值
 map1.set(key1,'Value of key1');
 map1.set(key2,'Value of key2');
 map1.set(key3,'Value of key3');

 // 根据key获取对应的value
//  console.log(map1.get(key1),map1.get(key2),map1.get(key3));

 // 获取对应的value数量
//  console.log(map1.size);

 // for...of遍历map1中的key and value
//  for(let [key,value] of map1){
//    console.log(`${key} = ${value}`);
//  }

// only key
// for(let key of map1.keys()){
//   console.log(key);
// }

// only value
// for(let value of map1.values()){
//   console.log(value);
// }

// forEach遍历map1
// map1.forEach((value,key) => {
//   console.log(`${key} = ${value}`);
// })

// 将map1转化为正常的数组
// const keyValueArray = Array.from(map1);
// console.log(keyValueArray);

// 将map1中的key转化为数组
// const keyArray = Array.from(map1.keys());
// console.log(keyArray);

// 将map1中的value值转换为数组
const valueArray = Array.from(map1.values());
console.log(valueArray);
