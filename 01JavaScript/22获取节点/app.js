// 获取多个元素对象

// 1.document.getElementsByClassName()
// const items = document.getElementsByClassName('collection-item');

// console.log(items);
// console.log(items[0]);
// items[0].style.color = 'red';
// items[3].textContent = 'Hello';

// 严谨获取
// const listItems = document
//   .querySelector('ul')
//   .getElementsByClassName('collection-item');
// console.log(listItems);

// 2.document.getElementsByTagName()
let lis = document.getElementsByTagName('li');
// console.log(lis);
// console.log(lis[0]);
// lis[0].style.color = 'red';
// lis[3].textContent = 'Hello';

// 将html数组转为数组格式
// lis = Array.from(lis);

// lis.reverse();

// lis.forEach(function(li, index) {
//   // console.log(li.className);
//   li.textContent = `${index}: hello`;
// });

// 3.document.querySelectorAll
// const items = document.querySelectorAll('ul.collection li.collection-item');

// items.forEach(function(item, index) {
//   item.textContent = `${index}: Hello!!`;
// });

// 基数偶数改变
const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(li, index) {
  li.style.background = '#ccc';
});

for (let i = 0; i < liEven.length; i++) {
  liEven[i].style.background = 'blue';
}
