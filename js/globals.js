export const rightFibonacciAnswer = [1, 1, 1, 1];

export const setUserItems = (userItems) => {
  localStorage.setItem("userItems", JSON.stringify(userItems));
};

/**
 * get the stored userItems or initialized in case is no set or true passed as @param
 * @param {boolean} restarting
 * @returns
 */
export const getUserItems = (restarting = false) => {
  const storedUserItems = localStorage.getItem("userItems");
  let userItems;
  if (!storedUserItems || restarting) {
    userItems = [
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
    setUserItems(userItems);
  } else {
    userItems = JSON.parse(storedUserItems);
  }
  return userItems;
};

export const initFibonacciInput = () => {
  const initialFibonacci = [0, 0, 0, 0];
  localStorage.setItem(
    "currentFibonacciInput",
    JSON.stringify(initialFibonacci)
  );
  return initialFibonacci;
};

export const restartGame = () => {
  getUserItems(true);
  initFibonacciInput();
};

const restartBtn = document.getElementById("restart-game");
if (restartBtn) {
  restartBtn.addEventListener("click", () => restartGame());
}
