/**
 *  var let const
 */

//  var a = "Test1";
//  let b = "Test2";

function testVar(){
  var a = 30;
  if(true){
    var a = 50;
    console.log(a); // 50
  }

  console.log(a);  // 50
}

// testVar();

function testLet(){
  let a = 30;
  if(true){
    let a = 50;
    console.log(a);  // 50
  }
  console.log(a);   // 30
}

// testLet();

{
  let b = 100;
}

// console.log(b);

// for(var i = 0; i < 10; i++){
  // console.log(i);
// }

// console.log(i);

for(let i = 0; i < 10; i++){
  console.log(i);
}

// console.log(i);

// const
// const x = 10;
// x = 100;

const colors = [];
// colors = "Green";

colors.push("red");
colors.push("blue");

const str = "Hello";
str = "World";

console.log(colors);






 



 



 
 