
/** 场景1
 * 
 * 假定有一个对象数组(A),找到符合条件的对象
 */

 var users = [
  {name:"Jill"},
  {name:"Alex",id:2},
  {name:"Bill"},
  {name:"Alex"}
 ];

// es5
 var user;

 for(var i = 0; i < users.length; i++){
  if(users[i].name === "Alex"){
    user = users[i];
    break;
  }
 }

//  console.log(user);

// es6 find
user = users.find(function(user){
  return user.name === "Alex";
})

// console.log(user);



/** 场景2
 * 
 * 假定有一个对象数组(A),根据指定对象的条件找到数组中符合条件的对象
 */

 var posts = [
  {id:3,title:"Node.js"},
  {id:2,title:"React.js"}
 ];

 var comment = {postId:1,content:"Hello World!"};

 function postForComment(posts,comment){
  return posts.find(function(post){
    return post.id === comment.postId;
  })
 }

 console.log(postForComment(posts,comment));