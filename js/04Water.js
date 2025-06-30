import {
  getCurrentWater,
  getUserItems,
  setCurrentWater,
  setUserItems,
} from "./globals.js";
import { renderFooter } from "./footerHandler.js";
import { tryToUnlock9 } from "./navigation.js";

let selectedRecipe = null;
const rightAnswer = [
  [],
  ["blue", "blue", "blue", "blue"],
  ["green", "green", "green", "green"],
  ["red", "red", "red", "red"],
];

const checkAnswer = () => {
  const currentWater = getCurrentWater();
  for (let i = 0; i < rightAnswer.length; i++) {
    if (rightAnswer[i].length !== currentWater[i].length) {
      return false;
    }
    for (let j = 0; j < rightAnswer[i].length; j++) {
      if (rightAnswer[i][j] !== currentWater[i][j]) {
        return false;
      }
    }
  }
  return true;
};

const pourLiquid = (source, target) => {
  const currentWater = getCurrentWater();
  if (currentWater[target].length < 4) {
    currentWater[target].push(currentWater[source].pop());
    setCurrentWater(currentWater);
    selectedRecipe = null;
  }
};

const handleOnclick = (position) => {
  if (selectedRecipe === null) {
    selectedRecipe = position;
  } else if (selectedRecipe !== position) {
    pourLiquid(selectedRecipe, position);
  } else {
    selectedRecipe = null;
  }
  if (checkAnswer()) {
    waterCompleted();
  } else {
    drawContainers();
  }
};

const drawContainers = () => {
  const currentWater = getCurrentWater();
  const container = document.getElementById("liq-puzzle-container");
  container.innerHTML = "";
  for (let i = 0; i < currentWater.length; i++) {
    const liqContainer = document.createElement("div");
    liqContainer.classList.add("liq-container");
    if (selectedRecipe === i) {
      liqContainer.classList.add("selected");
    }
    liqContainer.addEventListener("click", () => {
      handleOnclick(i);
    });
    for (let j = 0; j < currentWater[i].length; j++) {
      const liquid = document.createElement("div");
      liquid.classList.add(`liq-${currentWater[i][j]}`);
      if (j === 0) {
        liquid.classList.add("bottom");
      }
      liqContainer.appendChild(liquid);
    }
    container.appendChild(liqContainer);
  }
};

const onIconRewardClick = () => {
  const userItems = getUserItems();
  userItems.find((item) => {
    return item.name === "water";
  }).userHasItem = true;
  setUserItems(userItems);
  waterCompleted();
  renderFooter();
};

const getElementForAfterComplete = () => {
  const userItems = getUserItems();
  const rewardContainer = document.createElement("div");
  rewardContainer.id = "water-reward-container";
  rewardContainer.classList.add("reward-container");
  const rewardIcon = document.createElement("i");
  rewardIcon.classList.add("fa-solid", "fa-water", "reward-Item");
  rewardIcon.addEventListener("click", () => {
    onIconRewardClick();
  });
  const messageBeforeGrab = document.createElement("div");
  messageBeforeGrab.classList.add("grab-water-message");
  messageBeforeGrab.innerHTML =
    "Where once the currents clashed, now they harmonize. The element of Water has awakened to your guidance.";
  const messageAfterGrab = document.createElement("div");
  messageAfterGrab.classList.add("grab-water-message");
  messageAfterGrab.innerHTML = "This test was already passed";
  const waterItem = userItems.find((item) => item.name === "water");

  if (waterItem && waterItem.userHasItem) {
    tryToUnlock9();
    rewardContainer.appendChild(messageAfterGrab);
  } else {
    rewardContainer.appendChild(rewardIcon);
    rewardContainer.appendChild(messageBeforeGrab);
  }
  return rewardContainer;
};

/**
 * after puzzle was solved remove liquid containers and fill the container
 */
export const waterCompleted = () => {
  const container = document.getElementById("liq-puzzle-container");
  container.innerHTML = "";
  container.appendChild(getElementForAfterComplete());
};

if (checkAnswer()) {
  waterCompleted();
} else {
  drawContainers();
}
