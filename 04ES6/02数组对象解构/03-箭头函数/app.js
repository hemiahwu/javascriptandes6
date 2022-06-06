/**
 *  箭头函数
 *  解决的问题
 *  1. 缩减代码
 *  2. 改变this指向
 */

 const double1 = function(number){
    return number * 2;
 }

 const double2 = (number) => {
  return number * 2;
 }

 const double3 = (number) => number * 2;
 
 const double4 = number => number * 2;

 const double5 = (number => number * 2);
 const double6 = (number,number2) => number + number2;

 const double = (number,number2) => {
   sum = number + number2 
   return sum;
 }
//  console.log(double(20,20));

// map一个数组,让数组中的值以double形式展现
const numbers = [1,2,3];
var newNumbers = numbers.map(number => number * 2);

// console.log(newNumbers);


// 改变this指向
const team1 = {
  members:["Henry","Elyse"],
  teamName:"es6",
  teamSummary:function(){
    let self = this;
    return this.members.map(function(member){
      // this不知道该指向谁了
      return `${member}隶属于${self.teamName}小组`;
    })
  }
}

const team2 = {
  members:["Henry","Elyse"],
  teamName:"es6",
  teamSummary:function(){
    return this.members.map(function(member){
      // this不知道该指向谁了
      return `${member}隶属于${this.teamName}小组`;
    }.bind(this))
  }
}

const team = {
  members:["Henry","Elyse"],
  teamName:"es6",
  teamSummary:function(){
    return this.members.map((member) => {
      // this指向的就是team对象
      return `${member}隶属于${this.teamName}小组`;
    })
  }
}

console.log(team.teamSummary());










 



 



 
 