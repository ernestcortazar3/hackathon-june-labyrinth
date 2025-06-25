import { getCurrentTorches, setCurrentTorches } from "./globals.js";

const rightTorchOrder = [3, 1, 5, 2, 4];
const currentTorchOrder = getCurrentTorches();

const drawFlames = () => {
  const currentTorchOrder = getCurrentTorches();
  for (let i = 0; i < rightTorchOrder.length; i++) {
    const flame = document.getElementById(`${i + 1}-flame`);
    if (currentTorchOrder.includes(i + 1)) {
      flame.style.display = "inline";
    } else {
      flame.style.display = "none";
    }
  }
};

const checkAnswer = () => {
  const currentTorchOrder = getCurrentTorches();
  if (currentTorchOrder.length !== rightTorchOrder.length) {
    return false;
  }
  for (let i = 0; i < rightTorchOrder.length; i++) {
    if (currentTorchOrder[i] !== rightTorchOrder[i]) {
      setCurrentTorches([]);
      drawFlames();
      return false;
    }
  }
  return true;
};

/**
 * Insert a position in the currentTorch if not already in the array
 * @returns true if position is not already present
 * @param {int} position
 */
const addFlame = (position) => {
  const currentTorches = getCurrentTorches();
  if (!currentTorches.includes(position)) {
    currentTorches.push(position);
    setCurrentTorches(currentTorches);
    drawFlames();
    checkAnswer();
  }
};

const addEventListener = () => {
  for (let i = 0; i < rightTorchOrder.length; i++) {
    const torch = document.getElementById(`${i + 1}-torch`);
    torch.addEventListener("click", () => {
      if (addFlame(i + 1)) {
        drawFlames();
      }
    });
  }
};
drawFlames();
checkAnswer();
addEventListener();
