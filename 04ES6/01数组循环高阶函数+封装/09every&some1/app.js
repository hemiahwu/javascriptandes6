/** 场景1 
 * 计算对象数组中每个电脑操作系统是否可用
 * 大于16位操作系统表示可用,否则不可用
*/

var computers = [
  {name:"Apple",ram:16},
  {name:"IBM",ram:4},
  {name:"Acer",ram:32}
];

var everyComputersCanRunProgram = true;
var someComputersCanRunProgram = false;

for(var i = 0; i < computers.length; i++){
  var computer = computers[i];
  if(computer.ram < 16){
    everyComputersCanRunProgram = false;
  }else{
    someComputersCanRunProgram = true;
  }
}

console.log(everyComputersCanRunProgram);
console.log(someComputersCanRunProgram);

/** 
 * Every: 一真即真
 * Some: 一假即假
 */

 var every = computers.every(function(computer){
   return computer.ram > 16;
 })

 console.log("==========");
 console.log(every);

 var some = computers.some(function(computer){
  return computer.ram > 16;
 })

 console.log(some);


/** 场景2
 * 假定有一个注册页面,判断所有input内容的长度是否大于0 
 * 
 */