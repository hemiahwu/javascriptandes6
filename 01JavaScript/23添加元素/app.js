let val;

const list = document.querySelector('ul.collection');

const listItem = document.querySelector('li.collection-item:first-child');

val = list;

// 获取子节点
val = list.childNodes; // 能看到的 和 看不到的
// console.log(val);
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[3].nodeType;

// 1 - Element
// 2 - Attibute
// 3 - Text Node
// 8 - Comment
// 9 - Document Self
// 10 - Doctype

// 获取子元素节点
val = list.children;
val = list.children[1];
list.children[1].textContent = 'Hello';

// 子元素的子元素
val = list.children[3].children[0].className;

// 获取第一个元素节点
val = list.firstChild;
val = list.firstElementChild;

// 获取最后一个元素节点
val = list.lastChild;
val = list.lastElementChild;

// 计算节点个数
val = list.childElementCount;

// 获取父级节点
val = listItem;

val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// 获取下一个兄弟节点
val = listItem.nextSibling;
val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;

// 获取上一个兄弟节点
val = listItem.previousSibling;
val = listItem.previousElementSibling;
console.log(val);
