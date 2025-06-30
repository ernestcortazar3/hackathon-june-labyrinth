import { renderFooter } from "./footerHandler.js";
import {
  getUserItems,
  setUserItems,
  getCurrentFibonacci,
  setCurrentFibonacci,
} from "./globals.js";
import { tryToUnlock19, tryToUnlock9 } from "./navigation.js";

const userItems = getUserItems();
const rightFibonacciAnswer = [3, 5, 8, 13];

//get the total of fibonacci numbers containers
const spanContainers = document.getElementsByClassName("fib-number-content");

/**
 *
 *
 * @returns true in the input is right
 */
const checkAnswer = () => {
  const currentFibonacciInput = getCurrentFibonacci();
  for (let i = 0; i < currentFibonacciInput.length; i++) {
    if (currentFibonacciInput[i] !== rightFibonacciAnswer[i]) {
      return false;
    }
  }
  return true;
};

/**
 * get the actual input stored in local store and init each fibonacci numbers containers
 */
const initNumbers = () => {
  const currentFibonacciInput = getCurrentFibonacci();
  for (let i = 0; i < spanContainers.length; i++) {
    spanContainers.innerHTML = "";
    const span = document.createElement("span");
    span.id = `fib-number-${i + 1}`;
    span.innerHTML = currentFibonacciInput[i];
    spanContainers[i].appendChild(span);
  }
};

const onIconRewardClick = () => {
  userItems.find((item) => {
    return item.name === "leaf";
  }).userHasItem = true;
  setUserItems(userItems);
  earthCompleted();
  renderFooter();
};

const getElementForAfterComplete = () => {
  const rewardContainer = document.createElement("div");
  rewardContainer.id = "leaf-reward-container";
  rewardContainer.classList.add("reward-container");
  const rewardIcon = document.createElement("i");
  rewardIcon.classList.add("fa-solid", "fa-leaf", "reward-Item");
  rewardIcon.addEventListener("click", () => {
    onIconRewardClick();
  });
  const messageBeforeGrab = document.createElement("div");
  messageBeforeGrab.classList.add("grab-leaf-message");
  messageBeforeGrab.innerHTML =
    "A pattern older than memory weaves through every leaf. You saw it... and the leaf saw you. The element joins your journey.";
  const messageAfterGrab = document.createElement("div");
  messageAfterGrab.classList.add("grab-leaf-message");
  messageAfterGrab.innerHTML = "This test was already passed";
  const leafItem = userItems.find((item) => item.name === "leaf");

  if (leafItem && leafItem.userHasItem) {
    tryToUnlock19();
    tryToUnlock9();
    rewardContainer.appendChild(messageAfterGrab);
  } else {
    rewardContainer.appendChild(rewardIcon);
    rewardContainer.appendChild(messageBeforeGrab);
  }
  return rewardContainer;
};

/**
 * after puzzle was solved remove digits and fill the container
 */
export const earthCompleted = () => {
  const container = document.querySelector(".page-content");
  container.innerHTML = "";
  container.appendChild(getElementForAfterComplete());
};

const onClickHandler = (containerPosition, difference) => {
  const currentFibonacci = getCurrentFibonacci();
  const numSpan = document.getElementById(
    `fib-number-${containerPosition + 1}`
  );
  const newValue = +numSpan.innerHTML + difference;
  if (newValue >= 0 && newValue <= 20) {
    numSpan.innerHTML = newValue;
    currentFibonacci[containerPosition] = newValue;
    setCurrentFibonacci(currentFibonacci);
    if (checkAnswer()) {
      earthCompleted();
    }
  }
};

/**
 * add event listeners to plus and minus buttons
 */
const addListeners = () => {
  for (let i = 0; i < spanContainers.length; i++) {
    const increaseBtn = document.getElementById(`fib-increase-${i + 1}`);
    increaseBtn.addEventListener("click", () => onClickHandler(i, 1));
    const decreaseBtn = document.getElementById(`fib-decrease-${i + 1}`);
    decreaseBtn.addEventListener("click", () => onClickHandler(i, -1));
  }
};
if (checkAnswer()) {
  earthCompleted();
} else {
  initNumbers();
  addListeners();
}
