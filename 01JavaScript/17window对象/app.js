// WINDOW METHODS / OBJECTS / PROPERTIES
// window.console.log('Hello');

// alert
// window.alert('Hello');

// prompt
// const input = prompt();
// alert(input);

// confirm
// if (confirm('Are you sure?')) {
//   console.log('YES');
// } else {
//   console.log('NO');
// }

let val;

// 窗口大小
val = window.outerHeight;
val = window.outerWidth;

// 可视大小
val = window.innerHeight;
val = window.innerWidth;

// 滚动大小
val = window.scrollY;
val = window.scrollX;

// location
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;

// Redirect
// window.location.href = 'http://www.baidu.com';
// Reload
// window.location.reload();

// History
// window.history.go(-3);
// val = window.history.length;

// Navigator
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.language;
console.log(val);
