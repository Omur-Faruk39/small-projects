let scoreCount = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0
};

document.querySelector('.rock-js-button').addEventListener('click', () => move('rock'));
document.querySelector('.paper-js-button').addEventListener('click', () => move('paper'));
document.querySelector('.scissors-js-button').addEventListener('click', () => move('scissors'));
document.querySelector('.js-btn-restart').addEventListener('click', restartScore);
document.querySelector('.js-btn-auto').addEventListener('click', autoPlay);
document.querySelector('.js-btn-stop').addEventListener('click', stop);

function move(playerMove) {
  const computerMove = randomMove();
  const result = determineResult(playerMove, computerMove);

  updateScore(result);
  saveScore();
  renderResult(result, playerMove, computerMove);
  renderScore();
}

function randomMove() {
  const moves = ['rock', 'paper', 'scissors'];
  return moves[Math.floor(Math.random() * moves.length)];
}

function determineResult(playerMove, computerMove) {
  if (playerMove === computerMove) return 'Tie';

  if (
    (playerMove === 'rock' && computerMove === 'scissors') ||
    (playerMove === 'paper' && computerMove === 'rock') ||
    (playerMove === 'scissors' && computerMove === 'paper')
  ) {
    return 'You Win';
  } else {
    return 'You Lose';
  }
}

function updateScore(result) {
  if (result === 'You Win') {
    scoreCount.wins += 1;
  } else if (result === 'You Lose') {
    scoreCount.losses += 1;
  } else {
    scoreCount.ties += 1;
  }
}

function saveScore() {
  localStorage.setItem("score", JSON.stringify(scoreCount));
}

function renderResult(result, playerMove, computerMove) {
  document.querySelector('.result-render').innerHTML = result;
  document.querySelector('.move').innerHTML = `
    Your <img src="./assets/${playerMove}.png"> - 
    <img src="./assets/${computerMove}.png"> Computer
  `;
}

function renderScore() {
  document.querySelector('.score-render').innerHTML = `
    Wins = ${scoreCount.wins}, 
    Losses = ${scoreCount.losses}, 
    Ties = ${scoreCount.ties}
  `;
}

function restartScore() {
  scoreCount = { wins: 0, losses: 0, ties: 0 };
  localStorage.clear();
  saveScore();
  renderScore();
}

let intervalId;

function autoPlay() {
  if (!intervalId) {
    intervalId = setInterval(() => move(randomMove()), 1000);
  }
}

function stop() {
  clearInterval(intervalId);
  intervalId = undefined;
}