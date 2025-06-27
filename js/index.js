import {
  getGameDifficulty,
  restartGame,
  setGameDifficulty,
} from "./globals.js";

const restartBtn = document.getElementById("btn-restart-game");
if (restartBtn) {
  restartBtn.addEventListener("click", () => {
    removeActiveClass();
    restartGame();
  });
}

const easyBtn = document.getElementById("btn-easy");
const mediumBtn = document.getElementById("btn-medium");
const hardBtn = document.getElementById("btn-hard");

const removeActiveClass = () => {
  easyBtn.classList.remove("active");
  mediumBtn.classList.remove("active");
  hardBtn.classList.remove("active");
};

easyBtn.addEventListener("click", () => {
  setGameDifficulty("easy");
  removeActiveClass();
  easyBtn.classList.add("active");
});
mediumBtn.addEventListener("click", () => {
  setGameDifficulty("medium");
  removeActiveClass();
  mediumBtn.classList.add("active");
});
hardBtn.addEventListener("click", () => {
  setGameDifficulty("hard");
  removeActiveClass();
  hardBtn.classList.add("active");
});

const startBtn = document.getElementById("btn-start");

startBtn.addEventListener("click", () => {
  const difficulty = getGameDifficulty();
  if (difficulty) {
    window.location.href = "/pages/00-home.html";
  } else {
    const warning = document.createElement("div");
    warning.id = "labyrinth-warning";
    const emphatic = document.createElement("em");
    emphatic.innerHTML = "The elements whisper:";
    const quote = document.createElement("q");
    quote.innerHTML = "Choose your difficulty, or be lost before you begin.";
    warning.append(emphatic, quote);
    startBtn.insertAdjacentElement("afterend", warning);
  }
});
