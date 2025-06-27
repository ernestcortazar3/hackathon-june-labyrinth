//****************user Items**************** */
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

//************************game difficulty****************************** */
export const setGameDifficulty = (difficulty) => {
  localStorage.setItem("difficulty", difficulty);
};

export const getGameDifficulty = () => {
  return localStorage.getItem("difficulty");
};

//************************Fibonaccy************************************* */
export const rightFibonacciAnswer = [1, 1, 1, 1];

export const initFibonacciInput = () => {
  const initialFibonacci = [0, 0, 0, 0];
  localStorage.setItem(
    "currentFibonacciInput",
    JSON.stringify(initialFibonacci)
  );
  return initialFibonacci;
};

//************************Torches**************************************** */
export const setCurrentTorches = (torches) => {
  localStorage.setItem("currentTorches", JSON.stringify(torches));
};

export const getCurrentTorches = () => {
  const defaultTorches = [];
  let currentTorches = JSON.parse(localStorage.getItem("currentTorches"));
  if (!currentTorches) {
    setCurrentTorches(defaultTorches);
    currentTorches = defaultTorches;
  }
  return currentTorches;
};

//************************Water*****************************************/
export const setCurrentWater = (water) => {
  localStorage.setItem("currentWater", JSON.stringify(water));
};

/**
 * get the stored currentWater or initialized in case is no set or true passed as @param
 * @param {boolean} restarting
 * @returns
 */
export const getCurrentWater = (restarting = false) => {
  const storedWater = localStorage.getItem("currentWater");
  let currentWater;
  if (!storedWater || restarting) {
    currentWater = [
      ["red", "red", "blue", "green"],
      ["blue", "blue", "green", "red"],
      ["green", "green", "red", "blue"],
      [],
    ];
    setCurrentWater(currentWater);
  } else {
    currentWater = JSON.parse(storedWater);
  }
  return currentWater;
};

export const restartGame = () => {
  localStorage.removeItem("difficulty");
  getUserItems(true);
  initFibonacciInput();
  setCurrentTorches([]);
  getCurrentWater(true);
};
