const firstName = 'William';
const lastName = 'Johnson';
const age = 32;
const str = 'Hello there my name is Henry';
const tags = 'web design,web development,programming';

// 拼接
let val;
val = firstName + lastName;

// 空格拼接
val = firstName + ' ' + lastName;

// append 追加
val = 'Henry';
val += ' Wu';

val = 'Hello, my name is ' + firstName + ' and i am ' + age;

// 转义
val = "That's awesome, i can't wait";

// length
val = firstName.length;

// concat 拼接
val = firstName.concat(' ', lastName);

// 大小写转换
val = firstName.toUpperCase();
val = firstName.toLowerCase();

// 字符串下标
val = firstName[0];

// indexof
val = firstName.indexOf('l');
val = firstName.lastIndexOf('l');

// charAt
val = firstName.charAt('2');
// 获取最后一个字符
val = firstName.charAt(firstName.length - 1);

// 获取子字符串
val = firstName.substring(0, 4);

// slice
val = firstName.slice(0, 4);
val = firstName.slice(-3);

// 转数组split
val = str.split(' ');
val = tags.split(',');

console.log(val);
