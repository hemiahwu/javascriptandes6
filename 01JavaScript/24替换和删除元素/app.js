// 创建元素
const li = document.createElement('li');

// 添加类
li.className = 'collection-item';

// 添加id
li.id = 'new-item';

// 添加自定义属性
li.setAttribute('title', 'New Item');

// 添加文本
li.appendChild(document.createTextNode('任务6'));

// 创建a标签
const link = document.createElement('a');
link.className = 'delete-item secondary-content';

// 插入i标签
link.innerHTML = "<i class='fa fa-remove'></i>";

// 将link放入li
li.appendChild(link);

// 将li放入ul
document.querySelector('ul.collection').appendChild(li);

console.log(li);
