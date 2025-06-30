import { renderFooter } from "./footerHandler.js";
import {
  getCurrentTiles,
  getUserItems,
  setCurrentTiles,
  setUserItems,
} from "./globals.js";
import { tryToUnlock9 } from "./navigation.js";

const totalColumns = 3;
const grid = document.getElementById("wind-grid");

/**
 * after puzzle was solved remove digits and fill the container
 */
export const windCompleted = () => {
  const container = document.getElementById("wind-container");
  container.innerHTML = "";
  container.appendChild(getElementForAfterComplete());
};

const onIconRewardClick = () => {
  const userItems = getUserItems();
  userItems.find((item) => {
    return item.name === "wind";
  }).userHasItem = true;
  setUserItems(userItems);
  windCompleted();
  renderFooter();
};

const getElementForAfterComplete = () => {
  const userItems = getUserItems();
  const rewardContainer = document.createElement("div");
  rewardContainer.id = "wind-reward-container";
  rewardContainer.classList.add("reward-container");
  const rewardIcon = document.createElement("i");
  rewardIcon.classList.add("fa-solid", "fa-wind", "reward-Item");
  rewardIcon.addEventListener("click", () => {
    onIconRewardClick();
  });
  const messageBeforeGrab = document.createElement("div");
  messageBeforeGrab.classList.add("grab-wind-message");
  messageBeforeGrab.innerHTML =
    "You have brought clarity to the shifting skies. The Wind bows to your perception — and becomes your ally.";
  const messageAfterGrab = document.createElement("div");
  messageAfterGrab.classList.add("grab-wind-message");
  messageAfterGrab.innerHTML = "This test was already passed";
  const windItem = userItems.find((item) => item.name === "wind");

  if (windItem && windItem.userHasItem) {
    tryToUnlock9();
    rewardContainer.appendChild(messageAfterGrab);
  } else {
    rewardContainer.appendChild(rewardIcon);
    rewardContainer.appendChild(messageBeforeGrab);
  }
  return rewardContainer;
};
grid.addEventListener("keydown", (e) => {
  tryToSwitchPositions(e.key);
  if (checkAnswer()) {
    windCompleted();
  } else {
    renderGrid();
  }
});

const checkAnswer = () => {
  const currentSlidPos = getCurrentTiles();
  for (let i = 0; i < currentSlidPos.length - 1; i++) {
    if (+currentSlidPos[i] !== i + 1) {
      return false;
    }
  }
  return true;
};

const renderGrid = () => {
  const currentSlidPos = getCurrentTiles();
  grid.innerHTML = "";
  for (let i = 0; i < currentSlidPos.length; i++) {
    const slot = document.createElement("div");
    slot.classList.add("grid-slot");
    if (currentSlidPos[i] !== "") {
      slot.style = `background-image: url(../assets/windmill/${currentSlidPos[i]}-windmill-tile.jpg)`;
    }
    slot.alt = `wind-${i + 1}`;
    grid.appendChild(slot);
  }
};

const getCoordinates = (position) => {
  const x = Math.floor(position / totalColumns);
  const y = position % totalColumns;
  return [x, y];
};
const getEmptySlotCoordinates = () => {
  const currentSlidePos = getCurrentTiles();
  for (let i = 0; i < currentSlidePos.length; i++) {
    if (currentSlidePos[i] === "") return getCoordinates(i);
  }
};
const currentSlidPos = getCurrentTiles();
//will save the empty position to avoid search fot it all the time
let currentEmptyPosition = currentSlidPos.findIndex(
  (element, i) => element === ""
);
//same as coordinates
let currentEmptyCoordinates = getEmptySlotCoordinates();

const getCoordinatesToMove = (move) => {
  switch (move) {
    case "ArrowUp":
      return currentEmptyCoordinates[0] === totalColumns - 1
        ? [-1, -1]
        : [currentEmptyCoordinates[0] + 1, currentEmptyCoordinates[1]];
    case "ArrowDown":
      return currentEmptyCoordinates[0] === 0
        ? [-1, -1]
        : [currentEmptyCoordinates[0] - 1, currentEmptyCoordinates[1]];
    case "ArrowLeft":
      return currentEmptyCoordinates[1] === totalColumns - 1
        ? [-1, -1]
        : [currentEmptyCoordinates[0], currentEmptyCoordinates[1] + 1];
    case "ArrowRight":
      return currentEmptyCoordinates[1] === 0
        ? [-1, -1]
        : [currentEmptyCoordinates[0], currentEmptyCoordinates[1] - 1];
    default:
      return [-1, -1];
  }
};

const getPositionByCoordinate = (coordinate) => {
  return coordinate[0] * totalColumns + coordinate[1];
};

const tryToSwitchPositions = (move) => {
  const currentSlidPos = getCurrentTiles();
  const coordinateToMove = getCoordinatesToMove(move);
  const positionToMove = getPositionByCoordinate(coordinateToMove);
  if (coordinateToMove[0] !== -1 && coordinateToMove[1] !== -1) {
    const tempPositionToChange = currentSlidPos[currentEmptyPosition];
    currentSlidPos[currentEmptyPosition] = currentSlidPos[positionToMove];
    currentSlidPos[positionToMove] = tempPositionToChange;
    currentEmptyCoordinates = coordinateToMove;
    currentEmptyPosition = positionToMove;
    setCurrentTiles(currentSlidPos);
  }
};

if (checkAnswer()) {
  windCompleted();
} else {
  renderGrid();
}
grid.focus();
