// 事件监听 和 事件对象

// document.querySelector('.clear-tasks').addEventListener('click', function(e) {
//   console.log('Hello World!');

//   e.preventDefault();
// });

document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e) {
  // console.log(e);

  let val;

  val = e;

  // 事件对象 target
  val = e.target;
  val = e.target.className;
  val = e.target.classList;

  // Event Type
  val = e.type;

  // Timestamp
  val = e.timeStamp;

  // 鼠标坐标点
  val = e.clientX;
  val = e.clientY;

  console.log(val);

  e.preventDefault();
}
