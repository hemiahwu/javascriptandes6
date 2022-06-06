// 函数作用域
// function a() {
//     // 逆向思考: 函数内的空间是私有的
//     var x = 10;
//     // console.log(x)
// }

// a();

// 结论: 函数内所定义的变量/方法 无法被外部访问
// console.log(x)

// 变量提升
// console.log(y);
// var y;
// var y = 10;

// js内部执行顺序
// var y;
// console.log(y);
// y = 10;

// js执行规则
// var z;

// if (true) {
//     var z;
// }

// var z = 9;

// var z = 10;

// // js内部会先抽离所有的变量
// var z, z, z = 9, z = 10;
// console.log(z);


// 块作用域
// let x = 10;

// 块作用域 { 作用范围会限制在 两个 {} 之间 }
// {
//     let x = 20;
//     console.log(x);
// }

// if (true) {
//     // ... let的作用范围
// }

// console.log(x);


// let 是否可以变量提升
// console.log(x);
// let x = 10;

// Q.1) 什么是javascript中的变量提升 ?
// Q.2) 块作用域是什么 ?
// Q.3) 函数内的变量作用域是什么 ?