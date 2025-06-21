export const rightFibonacciAnswer = [1, 1, 1, 1];

//page to which user will be redirected after solve fibonacci puzzle
export const whereToGoAfterFibonacci = "03-fire.html";

export const restartGame = () => {
  localStorage.setItem("currentFibonacciInput", JSON.stringify([0, 0, 0, 0]));
};

const restartBtn = document.getElementById("restart-game");
if (restartBtn) {
  restartBtn.addEventListener("click", () => restartGame());
}

const isGameInitialized = localStorage.getItem("currentFibonacciInput");
if (!isGameInitialized) {
  restartGame();
}
