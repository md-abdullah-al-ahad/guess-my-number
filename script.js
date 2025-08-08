'use strict';
let randomNumber = Math.floor(Math.random() * 20) + 1;
let highScore = 0;
let score = 20;

const againButton = document.querySelector('.again');
const checkButton = document.querySelector('.check');

const setMessage = function (msg) {
  document.querySelector('.message').textContent = msg;
};

againButton.addEventListener('click', function () {
  score = 20;
  randomNumber = Math.floor(Math.random() * 20) + 1;
  setMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

checkButton.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    setMessage('⛔️ No number!');
  } else if (guess > randomNumber) {
    setMessage('📈 Too high!');
    score--;
  } else if (guess < randomNumber) {
    setMessage('📉 Too low!');
    score--;
  } else {
    setMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = randomNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    highScore = Math.max(score, highScore);
    document.querySelector('.highscore').textContent = highScore;
  }

  if (score <= 0) {
    setMessage('💥 You lost the game!');
    document.querySelector('.score').textContent = 0;
  } else {
    document.querySelector('.score').textContent = score;
  }
});
