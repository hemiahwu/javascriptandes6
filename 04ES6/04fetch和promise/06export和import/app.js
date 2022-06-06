// export:输出/导出  import:输入/导入

// 第一种方式
// import { sum, cube } from './calc.js';
// console.log(sum(5, 6));
// console.log(cube(5));

// 第二种方式
// import { total, cube } from './calc.js';
// console.log(total(5, 6));
// console.log(cube(5));

// 第三种方式
// import { sum as total, cube } from './calc.js';
// console.log(total(5, 6));
// console.log(cube(5));

// 第四种方式
// import * as calc from './calc.js';
// console.log(calc.sum(5, 6));
// console.log(calc.cube(5));

// 第五种方式
import sum from './sum.js';
console.log(sum(5, 5))

import total from './sum.js';
console.log(total(5, 5))

import cube from './cube.js';
console.log(cube(3));

import suibianqiCube from './cube.js';
console.log(suibianqiCube(5));