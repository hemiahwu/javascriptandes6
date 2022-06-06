// 开闭原则（Open Closed Principle）
// SOLID 设计原则

// 开闭原则
class BooleanQuestion {
  constructor(description) {
    this.description = description;
  }

  printQuestionChoices() {
    console.log("1.true");
    console.log("2.false");
  }
}

class MultipleChoiceQuestion {
  constructor(description, options) {
    this.description = description;
    this.options = options;
  }

  printQuestionChoices() {
    this.options.forEach((option, index) => {
      console.log(`${index + 1}. ${option}`);
    });
  }
}

class TextQuestion {
  constructor(description) {
    this.description = description;
  }

  printQuestionChoices() {
    console.log("答案: _________");
  }
}

class RangeQuestion {
  constructor(description) {
    this.description = description;
  }

  printQuestionChoices() {
    console.log("第一: _________");
    console.log("最后: _________");
  }
}

const questions = [
  new BooleanQuestion("老吴的课程是不是很实用"),
  new MultipleChoiceQuestion("你最喜欢的语言是?", [
    "JavaScript",
    "Python",
    "Java",
    "Golang",
  ]),
  new TextQuestion("最新的JS功能你都知道什么?"),
  new RangeQuestion("今年语言排行榜的顺序是?"),
  new MultipleChoiceQuestion("你最喜欢的框架是?", [
    "Vue.js",
    "React.js",
    "Svelte.js",
    "Solid.js",
  ]),
];

function printQuiz(questions) {
  questions.forEach((question) => {
    console.log(question.description);
    question.printQuestionChoices();
    console.log("");
  });
}

printQuiz(questions);

// const questions = [
//   {
//     type: "boolean",
//     description: "老吴的课程是不是很实用",
//   },
//   {
//     type: "multipleChoice",
//     description: "你最喜欢的语言是?",
//     options: ["JavaScript", "Python", "Java", "Golang"],
//   },
//   {
//     type: "multipleChoice",
//     description: "你最喜欢的框架是?",
//     options: ["Vue.js", "React.js", "Svelte.js", "Solid.js"],
//   },
//   {
//     type: "text",
//     description: "最新的JS功能你都知道什么?",
//   },
// ];

// // 数据解析
// function printQuiz(questions) {
//   questions.forEach((question) => {
//     console.log(question.description);

//     switch (question.type) {
//       case "boolean":
//         console.log("1.true");
//         console.log("2.false");
//         break;
//       case "multipleChoice":
//         question.options.forEach((option, index) => {
//           console.log(`${index + 1}. ${option}`);
//         });
//         break;
//       case "text":
//         console.log("答案:_________");
//         break;
//     }
//   });
// }

// printQuiz(questions);
