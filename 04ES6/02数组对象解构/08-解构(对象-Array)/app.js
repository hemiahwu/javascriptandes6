/**
 *  解构
 *  更快,更便捷
 *  
 */

// const names = ["Henry","Bucky","Emily"];
// 解构
// const [name1,name2,name3] = names;
// console.log(name1,name2,name3);

// 返回数组个数
// const {length} = names;
// console.log(length);

// 结合展开运算符
// const [name,...rest] = names;
// console.log(name);

// let a,b;

// [a,b] = [100,200];

// console.log(b);

// 对象数组
// const people = [
//   {name:"Henry",age:20},
//   {name:"Bucky",age:25},
//   {name:"Emily",age:30}
// ];

// es5 
// var age = people[0].age;
// console.log(age);

// es6 解构
// const [age] = people;
// const [{age}] = people;

// console.log(age);


// 使用场景 将数组转化为对象
const points = [
  [4,5],
  [10,1],
  [0,40]
];

// 期望数据格式
// [
//   {x:4,y:5},
//   {x:10,y:1},
//   {x:0,y:40}
// ]

// es6
// let newPoints = points.map(pair => {
//   // const x = pair[0];
//   // const y = pair[1];
//   const [x,y] = pair;
//   return {x,x}
// })

let newPoints = points.map(([x,y]) => {
  // const x = pair[0];
  // const y = pair[1];
  // const [x,y] = pair;
  return {x,y}
})

console.log(newPoints);

























 



 



 
 