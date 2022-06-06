/**
 *  解构
 *  更快,更便捷
 *  
 */

//  var expense = {
//    type: "es6",
//    amount:"45"
//  };

//  var type = expense.type;
//  var amount = expense.amount;
//  console.log(type,amount);

// const { type,amount,abc } = expense;
// console.log(type,amount,abc);


var saveFiled = {
  extension: "jpg",
  name:"girl",
  size:14040
};
// es5
// function fileSammary(file){
//   return `${file.name}.${file.extension}的总大小是${file.size}`;
// }

function fileSammary({name,extension,size}){
  return `${name}.${extension}的总大小是${size}`;
}

console.log(fileSammary(saveFiled));























 



 



 
 