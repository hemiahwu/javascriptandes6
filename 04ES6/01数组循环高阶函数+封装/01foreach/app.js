
var colors = ["red","blue","green"];

// ES5遍历数组方法
for(var i = 0; i < colors.length; i++){
  // console.log(colors[i]);
}

// ES6 forEach
colors.forEach(function(color){
  // console.log(color);
});

// 练习: 遍历数组中的值,并计算总和
var numbers = [1,2,3,4,5];

var sum = 0;

function adder(number){
  sum += number;
}

numbers.forEach(adder);

console.log(sum);