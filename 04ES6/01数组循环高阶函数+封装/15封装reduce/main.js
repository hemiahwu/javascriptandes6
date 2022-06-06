const numbers = [1, 2, 3];

// // reduce
const sum = numbers.reduce(function (total, number, i, array) {
  console.log(total);
  // console.log(number);
  // console.log(i);
  // console.log(array);
  return total + number;
});

console.log(sum);

// 实战练习
const people = [
  { name: "米斯特吴", job: "web" },
  { name: "老吴", job: "web" },
  { name: "小仙", job: "design" },
  { name: "芳姐", job: "web" },
  { name: "波神", job: "data" },
];

// 问题: 将以上的数据转换为,以下的数据格式 (reduce)

const newData = people.reduce(function (total, person) {
  const { job: key } = person;
  if (total[key]) {
    total[key].push(person);
  } else {
    total[key] = [person];
  }

  return total;
}, {});

// console.log(newData);

// 封装reduce
function reduce(array, cb, initialValue) {
  let currentValue = initialValue;

  for (let i = 0; i < array.length; i++) {
    if (currentValue === undefined && i == 0) {
      currentValue = array[i++];
    }

    currentValue = cb(currentValue, array[i], i, array);
  }

  return currentValue;
}

const test = reduce(
  numbers,
  function (total, number) {
    console.log(total);

    return total + number;
  },
  0
);

console.log(test);

// const newData2 = reduce(
//   people,
//   function (total, person) {
//     const { job: key } = person;
//     if (total[key]) {
//       total[key].push(person);
//     } else {
//       total[key] = [person];
//     }

//     return total;
//   },
//   {}
// );

// console.log(newData2);

// const newDatta = {
//   data: [{ name: "波神", job: "data" }],
//   design: [{ name: "小仙", job: "design" }],
//   web: [
//     { name: "米斯特吴", job: "web" },
//     { name: "老吴", job: "web" },
//     { name: "芳姐", job: "web" },
//   ],
// };
