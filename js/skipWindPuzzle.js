import { windCompleted } from "./03-wind.js";
import { getGameDifficulty, setCurrentTiles } from "./globals.js";

const difficulty = getGameDifficulty();
const iconBtn = document.querySelector(".solve-icon");
if (difficulty === "easy") {
  iconBtn.addEventListener("click", () => {
    setCurrentTiles(["01", "02", "03", "04", "05", "06", "07", "08", ""]);
    windCompleted();
  });
} else {
  iconBtn.style.display = "none";
}
