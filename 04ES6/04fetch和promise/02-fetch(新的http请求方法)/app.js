/** 
 * new http: fetch
 * 一个基于promise的请求方法,更简单,更便捷
 */

//  let promise = new Promise((resolve,reject) => {
//     setTimeout(()=>{
//         resolve();
//     },3000)
//     // resolve();
//     // reject();
//  });
// //  console.log(promise);

// promise
//   .then(() => console.log("成功,没有任何问题!"))
//   .then(() => console.log("成功,可以无限调用then方法!"))
//   .catch(() => console.log("uh oh,出现了重大问题!"))


// console.log(fetch);

// http://jsonplaceholder.typicode.com/posts
let url = "http://jsonplaceholder.typicode.com/posts";
 
// console.log(fetch(url));

fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log("error:" + err));
