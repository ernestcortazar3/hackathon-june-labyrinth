import { initFibonacciInput, rightFibonacciAnswer } from "./globals.js";
const currentFibonacciInput =
  JSON.parse(localStorage.getItem("currentFibonacciInput")) ||
  initFibonacciInput();

const userItems = localStorage.getItem("userItems") || initUserItems();

//get the total of fibonacci numbers containers
const spanContainers = document.getElementsByClassName("fib-number-content");

/**
 * get the actual input stored in local store and init each fibonacci numbers containers
 */
const initNumbers = () => {
  for (let i = 0; i < spanContainers.length; i++) {
    while (spanContainers[i].firstChild) {
      spanContainers[i].removeChild(spanContainers[i].firstChild);
    }
    const span = document.createElement("span");
    span.id = `fib-number-${i + 1}`;
    span.innerHTML = currentFibonacciInput[i];
    spanContainers[i].appendChild(span);
  }
};

/**
 *
 *
 * @returns true in the input is right and trigger after complete logic
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
 * after puzzle was solved remove digits and fill the container
 */
const earthCompleted = () => {
  const container = document.getElementById("page-content");
  container.innerHTML = "";
  const rewardContainer = document.createElement("div");
  rewardContainer.classList.add("reward-container");
  const rewardIcon = document.createElement("i");
  rewardIcon.classList.add("fa-solid", "fa-fire-flame-curved", "reward-Item");
  rewardIcon.addEventListener("click", () => {
    userItems[2].userHasItem = true;
    localStorage.setItem("userItems", userItems);
  });
  const messageBeforeGrab = document.createElement("div");
  messageBeforeGrab.innerHTML = "This test was already passed, grab your price";
  const messageAfterGrab = document.createElement("div");
  messageAfterGrab.innerHTML = "This test was already passed";
  if (userItems[2].userHasItem) {
    container.appendChild(messageAfterGrab);
  } else {
    container.appendChild(rewardIcon);
    container.appendChild(messageBeforeGrab);
  }
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
initNumbers();
addListeners();
if (checkAnswer() || userItems[2].userHasItem) {
  earthCompleted();
}
