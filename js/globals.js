export const rightFibonacciAnswer = [1, 1, 1, 1];

export const initUserItems = () => {
  const userItems = [
    {
      name: "leaf",
      icon: "fa-leaf",
      userHasItem: true,
    },
    {
      name: "wind",
      icon: "fa-wind",
      userHasItem: true,
    },
    {
      name: "fire",
      icon: "fa-fire-flame-curved",
      userHasItem: false,
    },
    {
      name: "water",
      icon: "fa-water",
      userHasItem: true,
    },
    {
      name: "key",
      icon: "fa-key",
      userHasItem: true,
    },
  ];
  localStorage.setItem("userItems", JSON.stringify(userItems));
  return userItems;
};
export const initFibonacciInput = () => {
  const initialFibonacci = [0, 0, 0, 0];
  localStorage.setItem(
    "currentFibonacciInput",
    JSON.stringify(initialFibonacci)
  );
  return initFibonacciInput;
};

//page to which user will be redirected after solve fibonacci puzzle
export const whereToGoAfterFibonacci = "03-fire.html";

export const restartGame = () => {
  initUserItems();
  initFibonacciInput();
};

const restartBtn = document.getElementById("restart-game");
if (restartBtn) {
  restartBtn.addEventListener("click", () => restartGame());
}

const isGameInitialized = localStorage.getItem("currentFibonacciInput");
if (!isGameInitialized) {
  restartGame();
}
