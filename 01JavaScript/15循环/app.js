// for循环
// for (let i = 0; i <= 10; i++) {
//   if (i == 2) {
//     console.log('Number 2 is my favorite number');
//     continue; // 跳出本次循环
//   }

//   if (i == 5) {
//     console.log('Stop the loop');
//     break; // 结束循环
//   }

//   console.log('Number ' + i);
// }

// WHILE loop
// let i = 0;
// while (i < 10) {
//   console.log('Number ' + i);
//   i++;
// }

// DO WHILE
// let i = 100;
// do {
//   console.log('Number ' + i);
//   i++;
// } while (i < 10);

// 配合数组
const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];
// for (let i = 0; i < cars.length; i++) {
//   console.log(i);
// }

// FOREACH
// cars.forEach(function(car, index, array) {
//   console.log(car, index, array);
// });

// MAP
// const users = [
//   { id: 1, name: 'John' },
//   { id: 2, name: 'Bucky' },
//   { id: 3, name: 'Emily' },
//   { id: 4, name: 'Elyse' }
// ];

// const ids = users.map(function(user) {
//   return user.id;
// });

// console.log(ids);

// 遍历对象
const user = {
  firstName: 'John',
  lastName: 'Doe',
  age: 40
};

for (let x in user) {
  console.log(`${x} : ${user[x]}`);
}
