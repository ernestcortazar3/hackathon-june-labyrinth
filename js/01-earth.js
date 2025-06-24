import { renderFooter } from "./footerHandler.js";
import {
  initFibonacciInput,
  getUserItems,
  rightFibonacciAnswer,
  setUserItems,
} from "./globals.js";
const currentFibonacciInput =
  JSON.parse(localStorage.getItem("currentFibonacciInput")) ||
  initFibonacciInput();

const userItems = getUserItems();
const container = document.getElementById("page-content");

//get the total of fibonacci numbers containers
const spanContainers = document.getElementsByClassName("fib-number-content");

/**
 *
 *
 * @returns true in the input is right
 */
const checkAnswer = () => {
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
  if (!checkAnswer()) {
    for (let i = 0; i < spanContainers.length; i++) {
      while (spanContainers[i].firstChild) {
        spanContainers[i].removeChild(spanContainers[i].firstChild);
      }
      const span = document.createElement("span");
      span.id = `fib-number-${i + 1}`;
      span.innerHTML = currentFibonacciInput[i];
      spanContainers[i].appendChild(span);
    }
  }
};

const earthCompletedAndRewarded = () => {
  const messageAfterGrab = document.createElement("div");
  messageAfterGrab.classList.add("grab-fire-message");
  messageAfterGrab.innerHTML = "This test was already passed";
  container.innerHTML = "";
  container.appendChild(messageAfterGrab);
  renderFooter();
};

const onRewardClick = () => {
  userItems[2].userHasItem = true;
  setUserItems(userItems);
  window.location.href = "00-home.html";
};

/**
 * after puzzle was solved remove digits and fill the container
 */
const earthCompleted = () => {
  container.innerHTML = "";
  const rewardContainer = document.createElement("div");
  rewardContainer.classList.add("reward-container");
  const rewardIcon = document.createElement("i");
  rewardIcon.classList.add("fa-solid", "fa-fire-flame-curved", "reward-Item");
  rewardIcon.addEventListener("click", onRewardClick);
  const messageBeforeGrab = document.createElement("div");
  messageBeforeGrab.classList.add("grab-fire-message");
  messageBeforeGrab.innerHTML = "This test was already passed, grab your price";
  container.appendChild(rewardIcon);
  container.appendChild(messageBeforeGrab);
};

/**
 * add event listeners to plus and minus buttons
 */
const addListeners = () => {
  for (let i = 0; i < spanContainers.length; i++) {
    const increaseBtn = document.getElementById(`fib-increase-${i + 1}`);
    increaseBtn.addEventListener("click", () => {
      const numSpan = document.getElementById(`fib-number-${i + 1}`);
      const newValue = +numSpan.innerHTML + 1;
      currentFibonacciInput[i] = newValue;
      numSpan.innerHTML = newValue;
      localStorage.setItem(
        "currentFibonacciInput",
        JSON.stringify(currentFibonacciInput)
      );
      if (checkAnswer()) {
        earthCompleted();
      }
    });
    const decreaseBtn = document.getElementById(`fib-decrease-${i + 1}`);
    decreaseBtn.addEventListener("click", () => {
      const numSpan = document.getElementById(`fib-number-${i + 1}`);
      const currentValue = +numSpan.innerHTML;
      if (currentValue !== 0) {
        currentFibonacciInput[i] = currentValue - 1;
        numSpan.innerHTML = currentValue - 1;
        localStorage.setItem(
          "currentFibonacciInput",
          JSON.stringify(currentFibonacciInput)
        );
        if (checkAnswer()) {
          earthCompleted();
        }
      }
    });
  }
};
if (checkAnswer()) {
  if (userItems[2].userHasItem) {
    earthCompletedAndRewarded();
  } else {
    earthCompleted();
  }
} else {
  initNumbers();
  addListeners();
}
