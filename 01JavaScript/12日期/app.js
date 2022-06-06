let val;
const today = new Date();
let birthday = new Date('9-10-1988 11:20:00');
birthday = new Date('September 10 1988');
birthday = new Date('9/10/1988');

val = birthday;
val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(1987);
birthday.setHours(3);
birthday.setMinutes(20);
birthday.setSeconds(25);

console.log(birthday);
