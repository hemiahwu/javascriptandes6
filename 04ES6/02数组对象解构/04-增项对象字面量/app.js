/**
 *  增强对象字面量
 *  解决的问题: 缩减代码
 *  
 */

// new Object(); {}
// new Array(); []

function createBookShop(inventory){
  return {
    inventory,
    inventoryValue(){
      return this.inventory.reduce((total,book) => total + book.price,0);
    },
    priceForTitle(title){
      return this.inventory.find(book => book.title === title).price;
    }
  }
}

const inventory = [
  {title:"Vue",price:10},
  {title:"Angular",price:15}
];

const bookShop = createBookShop(inventory);

// console.log(bookShop.inventoryValue());
// console.log(bookShop.priceForTitle("Angular"));


function saveFile(url,data){
  $.ajax({
    method:"POST",
    url:url,
    data:data
  });
}

const url = "http://fileupload.com";
const data = {color:"red"};

saveFile(url,data);









 



 



 
 