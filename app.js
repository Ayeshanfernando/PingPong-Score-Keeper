const p1Button = document.querySelector("#p1Button");
const p2Button = document.querySelector("#p2Button");
const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");
const resetButton = document.querySelector("#reset");
const winningScoreSelect = document.querySelector("#playto");
winningScoreSelect.addEventListener("change", function () {
  // Update the winning score based on the selected value
  alert("Winning score changed to " + this.value);
  winngScore = parseInt(this.value);
  reset(); // Reset the game when the winning score changes
});

let winngScore = 5; // Default winning score
let p1Score = 0;
let p2Score = 0;
let isGameOver = false;

p1Button.addEventListener("click", () => {
  if (!isGameOver && p1Score !== winngScore) {
    p1Score += 1;
    if (p1Score === winngScore) {
      isGameOver = true;
      p1Display.classList.add("winner");
      p2Display.classList.add("loser");
      p1Button.disabled = true;
      p2Button.disabled = true;
    }
    p1Display.textContent = p1Score;
  }
});

p2Button.addEventListener("click", () => {
  if (!isGameOver && p2Score !== winngScore) {
    p2Score += 1;
    if (p2Score === winngScore) {
      isGameOver = true;
      p1Display.classList.add("loser");
      p2Display.classList.add("winner");
      p1Button.disabled = true;
      p2Button.disabled = true;
    }
    p2Display.textContent = p2Score;
  }
});

resetButton.addEventListener("click", reset);

function reset() {
  p1Display.classList.remove("winner", "loser");
  p2Display.classList.remove("winner", "loser");
  p1Score = 0;
  p2Score = 0;
  isGameOver = false;
  p1Display.textContent = 0;
  p2Display.textContent = 0;
  p1Button.disabled = false;
  p2Button.disabled = false;
}
