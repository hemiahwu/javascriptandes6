const chioces = document.querySelectorAll(".choice");
const score = document.getElementById("score");
const result = document.getElementById("result");
const restart = document.getElementById("restart");
const modal = document.querySelector(".modal");

// 角色a
const scoreboard = {
  player: 0,
  computer: 0,
};

// 开始玩
function play(e) {
  restart.style.display = "inline-block";
  // 用户选择的
  const playerChoice = e.target.id;
  // 电脑选择的
  const computerChoice = getComputerChoice();
  const winner = getWinner(playerChoice, computerChoice);
  showWinner(winner, computerChoice);
}

chioces.forEach(function (choice) {
  choice.addEventListener("click", play);
});

// 展示modal
function showWinner(winner, computerChoice) {
  if (winner === "player") {
    // 玩家赢了 玩家加分
    scoreboard.player++;
    // 显示弹窗结果
    result.innerHTML = `
    <h1 class="text-win">✌️ 你赢了!!</h1>
    <i class="fa fa-hand-${computerChoice}-o fa-10x"></i>
    <p>电脑选择的是 <strong>${computerChoice}</strong></p>
    `;
  } else if (winner === "computer") {
    // 电脑加分
    scoreboard.computer++;
    // 显示弹窗结果
    result.innerHTML = `
     <h1 class="text-lose">😭 你输了!!</h1>
     <i class="fa fa-hand-${computerChoice}-o fa-10x"></i>
     <p>电脑选择的是 <strong>${computerChoice}</strong></p>
     `;
  } else {
    // 显示弹窗结果
    result.innerHTML = `
    <h1>平</h1>
    <i class="fa fa-hand-${computerChoice}-o fa-10x"></i>
    <p>电脑选择的是 <strong>${computerChoice}</strong></p>
    `;
  }

  // 显示分数
  score.innerHTML = `
  <p>玩家: ${scoreboard.player}</p>
  <p>电脑: ${scoreboard.computer}</p>
  `;

  // 显示弹窗
  modal.style.display = "block";
}

// 获取电脑选择的
function getComputerChoice() {
  // 随机数
  const rand = Math.random();
  if (rand < 0.34) {
    return "rock";
  } else if (rand <= 0.67) {
    return "paper";
  } else {
    return "scissors";
  }
}

// 赢家
function getWinner(p, c) {
  if (p === c) {
    return "draw";
  } else if (p === "rock") {
    if (c === "paper") {
      return "computer";
    } else {
      return "player";
    }
  } else if (p === "paper") {
    if (c === "scissors") {
      return "computer";
    } else {
      return "player";
    }
  } else if (p === "scissors") {
    if (c === "rock") {
      return "computer";
    } else {
      return "player";
    }
  }
}

// 取消弹窗
function clearModal(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}

function restartGame() {
  scoreboard.player = 0;
  scoreboard.computer = 0;
  score.innerHTML = `
  <p>玩家: 0</p>
  <p>电脑: 0</p>
  `;
}
window.addEventListener("click", clearModal);
restart.addEventListener("click", restartGame);
