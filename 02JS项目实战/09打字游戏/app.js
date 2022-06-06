window.addEventListener("load", init);

let time = 5;
let score = 0;
let isPlaying;

// DOM 对象s
const wordInput = document.querySelector("#word-input");
const currentWord = document.querySelector("#current-word");
const scoreDisplay = document.querySelector("#score");
const timeDisplay = document.querySelector("#time");
const message = document.querySelector("#message");
const seconds = document.querySelector("#seconds");

const words = [
  "hat",
  "river",
  "lucky",
  "statue",
  "generate",
  "stubborn",
  "cocktail",
  "runaway",
  "joke",
  "developer",
  "establishment",
  "hero",
  "javascript",
  "nutrition",
  "revolver",
  "echo",
  "siblings",
  "investigate",
  "horrendous",
  "symptom",
  "laughter",
  "magic",
  "master",
  "space",
  "definition",
];

function init() {
  // 随机展示数组数据
  showWord(words);
  // 倒计时
  setInterval(countDown, 1000);
  // 判断游戏状态
  setInterval(checkStatus, 50);
  // 输入事件
  wordInput.addEventListener("input", startMatch);
}

function startMatch() {
  // 输入的内容 和 提示的内容 是否一致
  if (matchWords()) {
    isPlaying = true;
    time = 5;
    showWord(words);
    wordInput.value = "";
    score++;
  }

  // 分数
  if (score === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
}

function matchWords() {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = "Correct!!!";
    return true;
  } else {
    message.innerHTML = "";
    return false;
  }
}

function checkStatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = "Game over";
    score = -1;
  }
}

function countDown() {
  if (time > 0) {
    time--;
  } else if (time == 0) {
    isPlaying = false;
  }
  timeDisplay.innerHTML = time;
}

function showWord(words) {
  const randIndex = Math.floor(Math.random() * words.length);
  currentWord.innerHTML = words[randIndex];
}
