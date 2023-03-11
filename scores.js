const scoresTable = document.getElementById("scores");
const nameInput = document.getElementById("name");
const spinCounter = document.getElementById("num-spins");

// Load scores from local storage or set empty array
let scores = JSON.parse(localStorage.getItem("scores")) || [];

function renderScores() {
  scoresTable.innerHTML = "";
  scores.forEach((score) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${score.spins}</td>
      <td>${score.name}</td>
      <td>${score.failDate || "-"}</td>
    `;
    scoresTable.appendChild(row);
  });
}


function saveScores() {
  localStorage.setItem("scores", JSON.stringify(scores));
}


function updateSpinCounter() {
  const currentSpins = parseInt(spinCounter.value);
  spinCounter.value = currentSpins + 1;
}


function login() {
  const name = nameInput.value;
  if (name.trim() === "") {
    alert("Please enter a valid name.");
    return;
  }

  
  scores.push({ name, spins: 0 });

  
  saveScores();
  renderScores();
}


function spin() {
 
  updateSpinCounter();

  
  const isFail = Math.random() < 1 / 6;
  const currentPlayer = scores[scores.length - 1];
  if (isFail) {
    
    currentPlayer.failDate = new Date().toLocaleDateString();
    saveScores();
    renderScores();
    alert("FAIL!");
  } else {
    alert("WINNER!");
  }
}


document.getElementById("spin-button").addEventListener("click", spin);


renderScores();
