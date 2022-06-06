/**
 *  函数参数默认值
 *  优化代码
 *  
 */

// function makeAjaxRequest(url,method){
//   if(!method){
//     method = "GET";
//   }
//   return method;
// }

// function makeAjaxRequest(url,method = "GET"){
  
//   return method;
// }

// console.log(makeAjaxRequest("google.com"));
// console.log(makeAjaxRequest("google.com","POST"));

function User(id){
  this.id = id;
}
// console.log(new User(1));

function randomId(){
  return Math.random() * 99999999;
}

// console.log(new User(randomId()));

function createAdminUser(user = new User(randomId())){
  user.admin = true;
  return user;
}

const user = new User(2);

console.log(createAdminUser());







 



 



 
 