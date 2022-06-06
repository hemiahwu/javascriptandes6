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

// 迭代器还原生成器的结构
// function nameIterator(names){
//   let nextIndex = 0;
//   return {
//     next:function(){
//       return nextIndex < names.length ? 
//              {value: names[nextIndex++],done:false} :
//              {value: undefined,done:true}
//     }
//   }
// }

// const nameArray = ["Henry","Bucky","Emily"];

// const names = nameIterator(nameArray);

// console.log(names.next().value);
// console.log(names.next());
// console.log(names.next());
// console.log(names.next());

// function* sayNames(){
//   yield 'Henry';
//   yield 'Bucky';
//   yield 'Emily';
// }

// const name = sayNames();

// console.log(name.next());
// console.log(name.next());
// console.log(name.next());
// console.log(name.next());


// id自增 (es 生成器)

function* createIds(){
  let index = 1;

  while(true){
    yield index++;
  }
}

const gen = createIds();

// console.log(gen.next().value);
// console.log(gen.next().value);

for(var i = 0; i < 10; i++){
console.log(gen.next().value);  
}













 



 



 
 