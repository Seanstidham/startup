const numSpins = document.getElementById("num-spins");
const spinButton = document.getElementById("spin-button");

let count = 0;

spinButton.addEventListener("click", () => {
  count++;
  numSpins.value = count;
});
