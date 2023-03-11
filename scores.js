const scoresTable = document.getElementById("scores");
const nameInput = document.getElementById("name");
const spinCounter = document.getElementById("num-spins");

// Load scores from local storage or set empty array
let scores = JSON.parse(localStorage.getItem("scores")) || [];

// Render scores table
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

// Save scores to local storage
function saveScores() {
  localStorage.setItem("scores", JSON.stringify(scores));
}

// Update spin counter
function updateSpinCounter() {
  const currentSpins = parseInt(spinCounter.value);
  spinCounter.value = currentSpins + 1;
}

// Handle login button click event
function login() {
  const name = nameInput.value;
  if (name.trim() === "") {
    alert("Please enter a valid name.");
    return;
  }

  // Add new player to scores array
  scores.push({ name, spins: 0 });

  // Save scores and update table
  saveScores();
  renderScores();
}

// Handle spin button click event
function spin() {
  // Update spin counter
  updateSpinCounter();

  // Check if player fails
  const isFail = Math.random() < 1 / 6;
  const currentPlayer = scores[scores.length - 1];
  if (isFail) {
    // Update fail date and save scores
    currentPlayer.failDate = new Date().toLocaleDateString();
    saveScores();
    renderScores();
    alert("FAIL!");
  } else {
    alert("WINNER!");
  }
}

// Add event listeners to buttons
document.getElementById("spin-button").addEventListener("click", spin);

// Render scores table on page load
renderScores();