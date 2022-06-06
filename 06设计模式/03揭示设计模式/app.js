// 设计模式的基本结构 module revealing
// (function () {

//     // 声明的属性 和 方法

//     // return 到外部
//     return {
//         // 对外公开的方法名 和 属性名
//     }
// })()


// 模块模式
// const UICtrl = (function () {
//     // 私有空间 属性和方法
//     let text = "Hello World";

//     const changeText = function () {
//         const element = document.querySelector("h1");
//         element.textContent = text;
//     }

//     return {
//         callChangeText: function () {
//             changeText();
//         }
//     }
// })()

// ES6
// const UICtrl = (() => {
//     // 私有空间 属性和方法
//     let text = "Hello World";

//     const changeText = () => {
//         const element = document.querySelector("h1");
//         element.textContent = text;
//     }

//     return {
//         callChangeText: () => {
//             changeText();
//             console.log("hello world")
//         }
//     }
// })()


// changeText();
// UICtrl.callChangeText();

// ES5 
// const ItemCtrl = (function () {
//     let data = [];

//     function add(item) {
//         data.push(item);
//         console.log("item added....")
//     }

//     function get(id) {
//         return data.find(function (item) {
//             return item.id === id;
//         })
//     }

//     // 揭示设计模式
//     return {
//         add: add,
//         get: get
//     }
// })()

// 揭示模式
const ItemCtrl = (() => {
    let data = [1];

    const add = (item) => {
        data.push(item);
        console.log("item added....")
    }

    const get = (id) => {
        return data.find(item => {
            return item.id === id;
        })
    }

    // 揭示设计模式
    return {
        add: add,
        get: get,
        data: data
    }
})()

ItemCtrl.add({ id: 1, name: "米斯特吴" })
ItemCtrl.add({ id: 2, name: "米修在线" })

console.log(ItemCtrl.get(2))

// console.log(ItemCtrl.data)

