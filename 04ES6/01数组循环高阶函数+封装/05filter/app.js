
/** 场景1
 * 
 * 假定有一个对象数组(A),获取数组中指定类型的对象放到B数组中 
 */
var porducts = [
  {name:"cucumber",type:"vegetable"},
  {name:"banana",type:"fruit"},
  {name:"celery",type:"vegetable"},
  {name:"orange",type:"fruit"}
];

// es5
var filteredProducts = [];

for(var i = 0; i < porducts.length; i++){
    if(porducts[i].type === "fruit"){
      filteredProducts.push(porducts[i]);
    }
}

// console.log(filteredProducts);

// es6 filter
var filtered2 = porducts.filter(function(product){
  return product.type === "vegetable";
})

// console.log(filtered2);
 


/** 场景2
 * 
 * 假定有一个对象数组(A),过滤掉不满足以下条件的对象
 * 条件: 蔬菜 数量大于0,价格小于10
 */

var products = [
  {name:"cucumber",type:"vegetable",quantity:0,price:1},
  {name:"banana",type:"fruit",quantity:10,price:16},
  {name:"celery",type:"vegetable",quantity:30,price:8},
  {name:"orange",type:"fruit",quantity:3,price:6}
];

products = products.filter(function(product){
    return product.type === "vegetable" 
    && product.quantity > 0 
    && product.price < 10
})

console.log(products);

/** 场景3
 * 
 * 假定有两个数组(A,B),根据A中id值,过滤掉B数组不符合的数据
 */

 var post = {id:4,title:"Javascript"};

 var comments = [
    {postId:4,content:"Angular4"},
    {postId:2,content:"Vue.js"},
    {postId:3,content:"Node.js"},
    {postId:4,content:"React.js"},
 ];

 function commentsForPost(post,comments){
    return comments.filter(function(comment){
      return comment.postId === post.id;
    })
 }

 console.log(commentsForPost(post,comments));

