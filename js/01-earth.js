const currentPuzzleValues = [0, 0, 0, 0];
const rightAnswer = [3, 5, 8, 13];
const checkAnswer = () => {
  for (let i = 0; i < currentPuzzleValues.length; i++) {
    if (currentPuzzleValues[i] !== rightAnswer[i]) {
      return false;
    }
  }
  return true;
};

for (let i = 0; i < 4; i++) {
  const increaseBtn = document.getElementById(`fib-increase-${i + 1}`);
  increaseBtn.addEventListener("click", () => {
    const numSpan = document.getElementById(`fib-number-${i + 1}`);
    const newValue = +numSpan.innerHTML + 1;
    currentPuzzleValues[i] = newValue;
    numSpan.innerHTML = newValue;
    if (checkAnswer()) {
      window.location.href = "03-fire.html";
    }
  });
  const decreaseBtn = document.getElementById(`fib-decrease-${i + 1}`);
  decreaseBtn.addEventListener("click", () => {
    const numSpan = document.getElementById(`fib-number-${i + 1}`);
    const currentValue = +numSpan.innerHTML;
    if (currentValue !== 0) {
      currentPuzzleValues[i] = currentValue - 1;
      numSpan.innerHTML = currentValue - 1;
      if (checkAnswer()) {
        window.location.href = "03-fire.html";
      }
    }
  });
}
