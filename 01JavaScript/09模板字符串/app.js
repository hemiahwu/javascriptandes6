const name = 'John';
const age = 20;
const job = 'Web Developer';
const city = 'Beijing';

let html;

// 没有模板字符串(es5)
html =
  '<ul><li>Name: ' +
  name +
  '</li><li>Age: ' +
  age +
  '<li>Job:' +
  job +
  '</li>City:' +
  city +
  '</ul>';

html =
  '<ul>' +
  '<li>Name:' +
  name +
  '</li>' +
  '<li>Age:' +
  age +
  '</li>' +
  '<li>Job:' +
  job +
  '</li>' +
  '<li>city:' +
  city +
  '</li>' +
  '</ul>';

function hello() {
  return 'hello';
}

// 模板字符串展示 (ES6)
html = `
<ul>
  <li>Name: ${name}</li>
  <li>age: ${age}</li>
  <li>job: ${job}</li>
  <li>city: ${city}</li>
  <li>Name: ${2 + 2}</li>
  <li>Name: ${hello()}</li>
  <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
</ul>
`;

document.body.innerHTML = html;
