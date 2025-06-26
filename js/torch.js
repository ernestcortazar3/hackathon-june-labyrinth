import { renderFooter } from "./footerHandler.js";
import {
  getCurrentTorches,
  getUserItems,
  setCurrentTorches,
  setUserItems,
} from "./globals.js";

const rightTorchOrder = [3, 1, 5, 2, 4];
const userItems = getUserItems();
getCurrentTorches();

const onIconRewardClick = () => {
  console.log("icon clicked");
  userItems.find((item) => {
    return item.name === "fire";
  }).userHasItem = true;
  setUserItems(userItems);
  fireCompleted();
  renderFooter();
};

const getElementForAfterComplete = () => {
  const rewardContainer = document.createElement("div");
  rewardContainer.id = "fire-reward-container";
  rewardContainer.classList.add("reward-container");
  const rewardIcon = document.createElement("i");
  rewardIcon.classList.add("fa-solid", "fa-fire-flame-curved", "reward-Item");
  rewardIcon.addEventListener("click", () => {
    onIconRewardClick();
  });
  const messageBeforeGrab = document.createElement("div");
  messageBeforeGrab.classList.add("grab-fire-message");
  messageBeforeGrab.innerHTML = "This test was already passed, grab your price";
  const messageAfterGrab = document.createElement("div");
  messageAfterGrab.classList.add("grab-fire-message");
  messageAfterGrab.innerHTML = "This test was already passed";
  const fireItem = userItems.find((item) => item.name === "fire");

  if (fireItem && fireItem.userHasItem) {
    rewardContainer.appendChild(messageAfterGrab);
  } else {
    rewardContainer.appendChild(rewardIcon);
    rewardContainer.appendChild(messageBeforeGrab);
  }
  return rewardContainer;
};

/**
 * after puzzle was solved remove torches and fill the container
 */
const fireCompleted = () => {
  const torchContainer = document.getElementById("torches-container");
  const textContainer = document.getElementById("torches-text-container");
  const fireRewardContainer = document.getElementById("fire-reward-container");
  if (torchContainer) {
    torchContainer.remove();
  }
  if (textContainer) {
    textContainer.remove();
  }
  if (fireRewardContainer) {
    fireRewardContainer.remove();
  }
  document.body.prepend(getElementForAfterComplete());
};

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
      return false;
    }
  }
  return true;
};

/**
 * Insert a position in the currentTorch array if not already present and draw the respective fire
 * @returns true if position is not already present
 * @param {int} position
 */
const addFlame = (position) => {
  const currentTorches = getCurrentTorches();
  if (!currentTorches.includes(position)) {
    currentTorches.push(position);
    setCurrentTorches(currentTorches);
    if (checkAnswer()) {
      fireCompleted();
    } else {
      drawFlames();
    }
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

if (checkAnswer()) {
  fireCompleted();
} else {
  drawFlames();
  addEventListener();
}
