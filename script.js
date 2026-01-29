'use strict';

document.querySelector('.again').addEventListener('click', function() {
  location.reload();
})

let highscore = localStorage.getItem('highscore') || 0;
document.querySelector('.highscore').textContent = highscore;
const secretNumber = Math.trunc(Math.random() * 100) + 1;
let score = 20;

document.querySelector('.check')
  .addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    // When there is no input
    if (!guess) {
      document.querySelector('.message').textContent = 'You must enter a guess';

      // When player wins
    } else if (guess === secretNumber) {
      document.querySelector('.message').textContent = '🎰 Correct Number!';
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').innerText = secretNumber;

      if (score > highscore) {
        highscore = score;
        localStorage.setItem('highscore', highscore);
        document.querySelector('.highscore').textContent = highscore;
      }

      // When guess is too high
    } else if (guess !== secretNumber) {
      if (score > 1) {
        document.querySelector('.message').textContent = guess > secretNumber ? 'Too high! 📈' : 'Too low! 📉';
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.message').textContent = 'You lost the game!';
        document.querySelector('.score').textContent = 0;
        document.querySelector('body').style.backgroundColor = 'red';
      }
    }
  });