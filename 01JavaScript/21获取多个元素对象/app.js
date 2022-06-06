// 获取单个元素对象
// document.getElementById() document.querySelector()

// console.log(document.getElementById('task-title'));

// 获取元素属性
// console.log(document.getElementById('task-title').id);
// console.log(document.getElementById('task-title').className);

// 常量存储
// const taskTitle = document.getElementById('task-title');

// 改变样式
// taskTitle.style.background = '#333';
// taskTitle.style.color = '#fff';
// taskTitle.style.padding = '5px';
// taskTitle.style.display = 'none';

// 改变内容
// taskTitle.textContent = '米斯特吴';
// taskTitle.innerText = '任务清单';
// taskTitle.innerHTML = '<span style="color:red">任务清单</span>';

// document.querySelector()
// console.log(document.querySelector('#task-title'));
// console.log(document.querySelector('.card-title'));
// console.log(document.querySelector('h5'));

document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'blue';

document.querySelector('li:last-child').style.color = 'red';
document.querySelector('li:nth-child(3)').style.color = 'yellow';
document.querySelector('li:nth-child(4)').textContent = 'Hello world';

document.querySelector('li:nth-child(odd)').style.background = '#ccc';
document.querySelector('li:nth-child(even)').style.background = 'blue';
