// 递归: 不停的传递和回归

// 两个要素
/**
 * 自己调自己
 * 至少有一个终止条件
 */

// // 问题1: 实现 3 2 1计时
// function countDown(n) {
//   for (var i = n; i > 0; i--) {
//     console.log(i);
//   }

//   console.log("执行结束");
// }

// console.time();
// // countDown(3);
// console.timeEnd();

// // 递归版本
// function countDownRecursive(n) {
//   // 如果条件满足,就终止递归
//   if (n <= 0) {
//     console.log("执行结束");
//     return;
//   }
//   console.log(n);
//   countDownRecursive(n - 1);
// }
// console.time();
// countDownRecursive(3);
// console.timeEnd();

// 递归的流程
// countDownRecursive(3)
//     countDownRecursive(2)
//         countDownRecursive(1)
//             countDownRecursive(0)
//             return;
//         return;
//     return;
// return;

// 问题2 计算给定值的累加 3 = 3 + 2 + 1

// // 循环版本
// function sumRange(n) {
//   let total = 0;

//   for (let i = n; i > 0; i--) {
//     total += i;
//   }

//   return total;
// }

// console.log(sumRange(10));

// // 递归版本
// function sumRangeRecursive(n, total = 0) {
//   if (n <= 0) {
//     return total;
//   }

//   return sumRangeRecursive(n - 1, total + n);
// }
// console.log(sumRangeRecursive(3));

//  sumRangeRecursive(3,0)
//    sumRangeRecursive(2,3)
//      sumRangeRecursive(1,6)
//        sumRangeRecursive(0,6)
//        return 0
//      return 1
//    return 3
//  return 6

// 递归的使用场景
// 留言板 数据结构

const tree = {
  name: "米斯特吴",
  comments: [
    {
      name: "小仙",
      comments: [],
    },
    {
      name: "小王",
      comments: [
        {
          name: "小吴",
          comments: [
            {
              name: "小张",
              comments: [],
            },
          ],
        },
        { name: "小赵", comments: [] },
      ],
    },
  ],
};

// // 循环实现
// function printComments(t) {
//   //   for (let i = 0; i < t.comments.length; i++) {
//   //     console.log(t.comments[i].name);
//   //     if (t.comments[i].comments) {
//   //       for (let j = 0; j < t.comments[i].comments.length; j++) {
//   //         console.log(t.comments[i].comments[j].name);
//   //       }
//   //     }
//   //   }

//   t.comments &&
//     t.comments.forEach((comment) => {
//       console.log(comment.name);
//       comment.comments &&
//         comment.comments.forEach((t) => {
//           console.log(t.name);
//         });
//     });
// }

// printComments(tree);

// 递归实现
function printCommentsRecursive(t) {
  if (t.comments.length === 0) {
    return;
  }

  t.comments.forEach((comment) => {
    console.log(comment.name);
    printCommentsRecursive(comment);
  });
}

printCommentsRecursive(tree);
