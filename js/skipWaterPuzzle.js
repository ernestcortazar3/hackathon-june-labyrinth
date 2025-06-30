import { waterCompleted } from "./04Water.js";
import { getGameDifficulty, setCurrentWater } from "./globals.js";

const difficulty = getGameDifficulty();
const iconBtn = document.querySelector(".solve-icon");
if (difficulty === "easy") {
  iconBtn.addEventListener("click", () => {
    setCurrentWater([
      [],
      ["blue", "blue", "blue", "blue"],
      ["green", "green", "green", "green"],
      ["red", "red", "red", "red"],
    ]);
    waterCompleted();
  });
} else {
  iconBtn.style.display = "none";
}
