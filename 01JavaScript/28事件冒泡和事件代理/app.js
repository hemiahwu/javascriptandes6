// 事件冒泡 && 事件代理

// 事件冒泡案例
// document.querySelector('.card-title').addEventListener('click', function(e) {
//   // 停止事件冒泡
//   e.stopPropagation();
//   console.log('cart title');
// });

// document.querySelector('.card-content').addEventListener('click', function(e) {
//   e.stopPropagation();
//   console.log('cart content');
// });

// document.querySelector('.card').addEventListener('click', function(e) {
//   e.stopPropagation();
//   console.log('cart');
// });

// document.querySelector('.col').addEventListener('click', function(e) {
//   e.stopPropagation();
//   console.log('col');
// });

// 事件代理 why
// const delItem = document.querySelector('.delete-item');
// delItem.addEventListener('click', deleteItem);
// function deleteItem() {
//   console.log('delete item');
// }

// 事件代理 给 父级
const delItem = document.querySelector('body');
delItem.addEventListener('click', deleteItem);
function deleteItem(e) {
  // console.log('delete item');

  // console.log(e.target); // 找需要控制的元素
  // if (e.target.className === 'fa fa-remove') {
  //   console.log('delete item');
  // }

  if (e.target.parentElement.classList.contains('delete-item')) {
    // console.log(e.target.parentElement);  // a
    // console.log(e.target.parentElement.parentElement); // li
    e.target.parentElement.parentElement.remove();
  }
}
