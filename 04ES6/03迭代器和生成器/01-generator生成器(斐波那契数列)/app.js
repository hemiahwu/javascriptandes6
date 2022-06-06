/**
 *  generator生成器 
 *  可以返回多次的函数
 */


//  function* numbers(){
//   yield;
//  }

//  const gen = numbers();

//  console.log(gen.next());
//  console.log(gen.next());


// 斐波那契数列
// function fib(max){
//   var a = 0,b = 1,arr = [0,1];

//   while(arr.length < max){
//     [a,b] = [b,a + b];
//     arr.push(b);
//   }
//   return arr;
// }

// (0,1,1,2,3)

// console.log(fib(5));
// console.log(fib(10));

function* fib(max){
  var a = 0, b = 1, n = 0;
  while (n < max){
    yield a;
    [a,b] = [b, a + b];
    n++;
  }
  return;
}
// var f = fib(10);

// console.log(f.next());
// console.log(f.next());
// console.log(f.next());
// console.log(f.next());
// console.log(f.next());
// console.log(f.next());
// console.log(f.next());
// console.log(f.next());
// console.log(f.next());
// console.log(f.next());
// console.log(f.next());

for(var x of fib(10)){
  console.log(x);
}













 



 



 
 