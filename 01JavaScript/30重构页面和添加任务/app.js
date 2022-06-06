// 定义元素对象
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const taskInput = document.querySelector('#task');

// 加载所有事件
loadEventListeners();

// 加载所有事件
function loadEventListeners() {
  // 添加任务事件
  form.addEventListener('submit', addTask);
}

// 添加任务方法
function addTask(e) {
  if (taskInput.value === '') {
    alert('Add a task');
  }

  // 创建li标签
  const li = document.createElement('li');
  // 添加类
  li.className = 'collection-item';
  // 将添加的文本内容添加到li中
  li.appendChild(document.createTextNode(taskInput.value));
  // 创建a标签
  const link = document.createElement('a');
  // 添加类
  link.className = 'delete-item secondary-content';
  // 添加icon标签
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // 将a标签添加到li标签中
  li.appendChild(link);

  // 将li标签添加到ul标签中
  taskList.appendChild(li);

  // 清除input
  taskInput.value = '';

  e.preventDefault();
}
