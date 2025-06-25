export const rightFibonacciAnswer = [1, 1, 1, 1];

export const setUserItems = (userItems) => {
  localStorage.setItem("userItems", JSON.stringify(userItems));
};

export const setGameDifficulty = (difficulty) => {
  localStorage.setItem("difficulty", difficulty);
};

export const getGameDifficulty = () => {
  return localStorage.getItem("difficulty");
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
        userHasItem: false,
        color: "blue",
      },
      {
        name: "wind",
        icon: "fa-wind",
        userHasItem: false,
        color: "blue",
      },
      {
        name: "fire",
        icon: "fa-fire-flame-curved",
        userHasItem: false,
        color: "blue",
      },
      {
        name: "water",
        icon: "fa-water",
        userHasItem: false,
        color: "blue",
      },
      {
        name: "key",
        icon: "fa-key",
        userHasItem: false,
        color: "blue",
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
  localStorage.removeItem("difficulty");
  getUserItems(true);
  initFibonacciInput();
};
