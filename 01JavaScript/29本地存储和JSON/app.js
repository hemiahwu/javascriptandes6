// set local storage item
// localStorage.setItem('name', '米斯特吴');
// localStorage.setItem('age', '30');

// set local storage item
// sessionStorage.setItem('name', '吴海洋');

// 删除本地存储
// localStorage.removeItem('name');
// sessionStorage.removeItem('name');

// 获取本地存储
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');
// console.log(name, age);

// 清楚所有本地存储
// localStorage.clear();
// console.log(name, age);

document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();
  const task = document.getElementById('task').value;
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));
  alert('Task saved');
});

const tasks = JSON.parse(localStorage.getItem('tasks'));
// console.log(tasks);
tasks.forEach(function(task) {
  console.log(task);
});
