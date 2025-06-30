import { earthCompleted } from "./01-earth.js";
import { getGameDifficulty, setCurrentFibonacci } from "./globals.js";

const difficulty = getGameDifficulty();
const iconBtn = document.querySelector(".solve-icon");
if (difficulty === "easy") {
  iconBtn.addEventListener("click", () => {
    setCurrentFibonacci([3, 5, 8, 13]);
    earthCompleted();
  });
} else {
  iconBtn.style.display = "none";
}
