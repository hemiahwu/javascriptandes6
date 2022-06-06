/**
 *  模板字符串
 */


let name = "Henry";

function makeUppercase(word){
  return word.toUpperCase();
}

let template = 
  `
  <h1>${makeUppercase('Hello')}, ${name}!</h1>
  <p>感谢大家收看我们的视频, ES6为我们提供了很多遍历好用的方法和语法!</p>
  <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
  </ul>
  `;

document.getElementById('template').innerHTML = template;






 



 



 
 