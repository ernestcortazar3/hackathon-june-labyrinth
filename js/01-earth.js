import { rightFibonacciAnswer, whereToGoAfterFibonacci } from "./globals.js";
const currentFibonacciInput = JSON.parse(
  localStorage.getItem("currentFibonacciInput")
);

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
  earthCompleted();
  return true;
};

/**
 * after puzzle was solved remove digits and fill the container
 */
const earthCompleted = () => {
  const container = document.getElementById("fib-cards-container");
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  const solved = document.createElement("span");
  solved.innerHTML = "This test was already passed";
  container.appendChild(solved);
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
        window.location.href = "03-fire.html";
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
          window.location.href = whereToGoAfterFibonacci;
        }
      }
    });
  }
};
checkAnswer();
initNumbers();
addListeners();
