const image = document.querySelector('img');
const spinButton = document.querySelector('#spin-button');
const counterInput = document.querySelector('#num-spins');
let spinCount = 0;

function rotateImage() {
  spinCount++;
  counterInput.value = spinCount;

  const isLoser = Math.floor(Math.random() * 6) === 0;

  if (isLoser) {
    document.body.appendChild(document.createTextNode('Fail'));
    spinButton.disabled = true;
    counterInput.disabled = true;
    saveScore(spinCount);
    updateScore(spinCount);
  } else {
    image.classList.add('spin');
    setTimeout(() => {
      const currentRotation = parseInt(image.style.transform.replace(/[^0-9\-]/g,''));
      const newRotation = (currentRotation + 30) % 360;
      image.style.transform = `rotate(${newRotation}deg)`;
      image.classList.remove('spin');

      document.body.appendChild(document.createTextNode('Winner '));
    }, 1000);
  }
}

spinButton.addEventListener('click', rotateImage);

function getPlayerName() {
  return localStorage.getItem('userName') ?? 'Mystery player';
}

function updateScore(score) {
  const scoreEl = document.querySelector('#score');
  scoreEl.textContent = score;
}

function getRandomButton() {
  let buttons = Array.from(this.buttons.values());
  return buttons[Math.floor(Math.random() * this.buttons.size)];
}

function saveScore(score) {
  const userName = getPlayerName();
  let scores = [];
  const scoresText = localStorage.getItem('scores');
  if (scoresText) {
    scores = JSON.parse(scoresText);
  }
  scores = updateScores(userName, score, scores);

  localStorage.setItem('scores', JSON.stringify(scores));
}

function updateScores(userName, score, scores) {
  const date = new Date().toLocaleDateString();
  const newScore = { name: userName, score: score, date: date };

  let found = false;
  for (const [i, prevScore] of scores.entries()) {
    if (score > prevScore.score) {
      scores.splice(i, 0, newScore);
      found = true;
      break;
    }
  }

  if (!found) {
    scores.push(newScore);
  }

  if (scores.length > 10) {
    scores.length = 10;
  }

  return scores;
}