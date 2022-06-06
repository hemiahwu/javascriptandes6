/**
 *  reduce
 */

/** 场景1
 *  计算数组中所有值的总和 
 *  
 */

 var numbers = [10,20,30];
 var sum = 0;

//  es5 
for(var i = 0; i < numbers.length; i++){
  sum += numbers[i];
}

// console.log(sum);

// es6
var sumValue = numbers.reduce(function(sum2,number2){
  console.log(sum2);
  return sum2 + number2;
},100);

console.log(sumValue);
 

/** 场景2
 *  将数组中对象的某个属性抽离到另外一个数组中
 * 
 */

 var primaryColors = [
   {color:"red"},
   {color:"yellow"},
   {color:"blue"}
 ];

 var colors = primaryColors.reduce(function(previous,primaryColor){
    previous.push(primaryColor.color);

    return previous;
 },[]);

 console.log(colors);

 



 
 