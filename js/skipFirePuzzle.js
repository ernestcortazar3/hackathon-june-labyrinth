import { getGameDifficulty, setCurrentTorches } from "./globals.js";
import { fireCompleted } from "./torch.js";

const difficulty = getGameDifficulty();
const iconBtn = document.querySelector(".solve-icon");
if (difficulty === "easy") {
  iconBtn.addEventListener("click", () => {
    setCurrentTorches([3, 1, 5, 2, 4]);
    fireCompleted();
  });
} else {
  iconBtn.style.display = "none";
}
