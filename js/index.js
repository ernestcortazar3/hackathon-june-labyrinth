import {
  getGameDifficulty,
  restartGame,
  setGameDifficulty,
} from "./globals.js";

const restartBtn = document.getElementById("btn-restart-game");
if (restartBtn) {
  restartBtn.addEventListener("click", () => restartGame());
}

const easyBtn = document.getElementById("btn-easy");
easyBtn.addEventListener("click", () => setGameDifficulty("easy"));
const mediumBtn = document.getElementById("btn-medium");
mediumBtn.addEventListener("click", () => setGameDifficulty("medium"));
const hardBtn = document.getElementById("btn-hard");
hardBtn.addEventListener("click", () => setGameDifficulty("hard"));

const startBtn = document.getElementById("btn-start");
console.log("");

startBtn.addEventListener("click", () => {
  const difficulty = getGameDifficulty();
  console.log(`difficulty is '${difficulty}'`);
  if (difficulty) {
    window.location.href("/pages/00-home.html");
  } else {
    console.log("add behavior in case no difficulty selected");
  }
});
restartGame();
