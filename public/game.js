class Game {
  constructor() {
    this.socket = null;
    this.configureWebSocket();

    const userName = this.getPlayerName();
    const welcomeMsg = `Welcome, ${userName}!`;
    this.displayMsg('system', 'game', welcomeMsg);
  }

  configureWebSocket() {
    const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
    this.socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
    this.socket.onopen = (event) => {
      this.displayMsg('system', 'game', 'connected');
    };
    this.socket.onclose = (event) => {
      this.displayMsg('system', 'game', 'disconnected');
    };
    this.socket.onmessage = async (event) => {
      const msg = JSON.parse(await event.data.text());
      if (msg.type === 'GameEndEvent') {
        this.displayMsg('player', msg.from, `scored ${msg.value.score}`);
      } else if (msg.type === 'GameStartEvent') {
        this.displayMsg('player', msg.from, `started a new game`);
      }
    };
  }

  displayMsg(cls, from, msg) {
    const chatText = document.querySelector('#player-messages');
    chatText.innerHTML =
      `<div class="event"><span class="${cls}-event">${from}</span> ${msg}</div>` + chatText.innerHTML;
  }

  broadcastEvent(from, type, value) {
    const event = {
      from: from,
      type: type,
      value: value,
    };
    this.socket.send(JSON.stringify(event));
  }

  getPlayerName() {
    return localStorage.getItem('userName') ?? 'Mystery player';
  }

  updateScore(score) {
    const scoreEl = document.querySelector('#score');
    scoreEl.textContent = score;
  }

  async saveScore(score) {
    const userName = this.getPlayerName();
    const date = new Date().toLocaleDateString();
    const newScore = { name: userName, score: score, date: date };

    try {
      const response = await fetch('/api/score', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(newScore),
      });

      // Let other players know the game has concluded
      this.broadcastEvent(userName, 'GameEndEvent', newScore);

      // Store what the service gave us as the high scores
      const scores = await response.json();
      localStorage.setItem('scores', JSON.stringify(scores));
    } catch {
      // If there was an error then just track scores locally
      this.updateScoresLocal(newScore);
    }
  }

  updateScoresLocal(newScore) {
    let scores = JSON.parse(localStorage.getItem('scores')) || [];
    scores.push(newScore);
    scores.sort((a, b) => b.score - a.score);
    scores = scores.slice(0, 10);
    localStorage.setItem('scores', JSON.stringify(scores));
  }
}


const image = document.querySelector('img');
const spinButton = document.querySelector('#spin-button');
const counterInput = document.querySelector('#num-spins');
let spinCount = 0;

async function rotateImage() {
  spinCount++;
  counterInput.value = spinCount;

  const isLoser = Math.floor(Math.random() * 6) === 0;
  
  if (isLoser) {
    document.body.appendChild(document.createTextNode('Fail'));
    spinButton.disabled = true;
    counterInput.disabled = true;
    await game.saveScore(spinCount);
    game.updateScore(spinCount);
  
    // Change background image
    document.body.style.backgroundImage = 'url("Sun background -Lose.jpg")';
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

const game = new Game();

spinButton.addEventListener('click', () => {
  rotateImage();
});
