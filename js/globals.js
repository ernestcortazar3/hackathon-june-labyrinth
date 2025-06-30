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
        color: "#32CD32",
      },
      {
        name: "wind",
        icon: "fa-wind",
        userHasItem: false,
        color: "#FFFAFA",
      },
      {
        name: "fire",
        icon: "fa-fire-flame-curved",
        userHasItem: false,
        color: "#DC143C",
      },
      {
        name: "water",
        icon: "fa-water",
        userHasItem: false,
        color: "#00BFFF",
      },
      {
        name: "key",
        icon: "fa-key",
        userHasItem: false,
        color: "#FFD700",
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

//************************Fibonacci************************************* */

export const setCurrentFibonacci = (currentFibonacci) => {
  localStorage.setItem(
    "currentFibonacciInput",
    JSON.stringify(currentFibonacci)
  );
};

/**
 * get the stored fibonacci or initialized in case is no set or true passed as @param
 * @param {boolean} restarting
 * @returns
 */
export const getCurrentFibonacci = (restarting = false) => {
  const storedFibonacci = localStorage.getItem("currentFibonacciInput");
  let currentFibonacci;
  if (!storedFibonacci || restarting) {
    currentFibonacci = [0, 0, 0, 0];
    setCurrentFibonacci(currentFibonacci);
  } else {
    currentFibonacci = JSON.parse(storedFibonacci);
  }
  return currentFibonacci;
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
      ["red", "blue", "green"],
      ["red", "blue", "green"],
      ["red", "blue", "green"],
      ["red", "blue", "green"],
    ];
    setCurrentWater(currentWater);
  } else {
    currentWater = JSON.parse(storedWater);
  }
  return currentWater;
};

//************************Wind*****************************************/

export const setCurrentTiles = (tiles) => {
  localStorage.setItem("currentTiles", JSON.stringify(tiles));
};

/**
 * get the stored currentTiles or initialized in case is no set or true passed as @param
 * @param {boolean} restarting
 * @returns
 */
export const getCurrentTiles = (restarting = false) => {
  const storedTiles = localStorage.getItem("currentTiles");
  let currentTiles;
  if (!storedTiles || restarting) {
    currentTiles = ["04", "01", "03", "07", "", "05", "08", "02", "06"];
    setCurrentTiles(currentTiles);
  } else {
    currentTiles = JSON.parse(storedTiles);
  }
  return currentTiles;
};

//************************Rooms*****************************************/

const defaultRooms = [
  {
    room: 1,
    roomType: "blank",
    wasVisited: false,
    canGoUp: false,
    canGoDown: true,
    canGoLeft: false,
    canGoRight: true,
    href: "blank-room.html",
  },
  {
    room: 2,
    roomType: "blank",
    wasVisited: false,
    canGoUp: false,
    canGoDown: false,
    canGoLeft: true,
    canGoRight: true,
    href: "blank-room.html",
  },
  {
    room: 3,
    roomType: "puzzle",
    wasVisited: false,
    canGoUp: false,
    canGoDown: false,
    canGoLeft: true,
    canGoRight: true,
    href: "03-wind.html",
  },
  {
    room: 4,
    roomType: "canChange",
    wasVisited: false,
    canGoUp: false,
    canGoDown: false,
    canGoLeft: true,
    canGoRight: false,
    href: "key-hint.html",
  },
  {
    room: 5,
    roomType: "end",
    wasVisited: false,
    canGoUp: false,
    canGoDown: false,
    canGoLeft: false,
    canGoRight: false,
    href: "00-home.html",
  },
  {
    room: 6,
    roomType: "hint",
    wasVisited: false,
    canGoUp: true,
    canGoDown: false,
    canGoLeft: false,
    canGoRight: true,
    href: "image-hint.html",
  },
  {
    room: 7,
    roomType: "blank",
    wasVisited: false,
    canGoUp: false,
    canGoDown: true,
    canGoLeft: true,
    canGoRight: true,
    href: "blank-room.html",
  },
  {
    room: 8,
    roomType: "blank",
    wasVisited: false,
    canGoUp: true,
    canGoDown: false,
    canGoLeft: true,
    canGoRight: true,
    href: "blank-room.html",
  },
  {
    room: 9,
    roomType: "canChange",
    wasVisited: false,
    canGoUp: false,
    canGoDown: true,
    canGoLeft: true,
    canGoRight: false,
    href: "elements.html",
  },
  {
    room: 10,
    roomType: "key",
    wasVisited: false,
    canGoUp: false,
    canGoDown: false,
    canGoLeft: true,
    canGoRight: false,
    href: "key-room.html",
  },
  {
    room: 11,
    roomType: "blank",
    wasVisited: false,
    canGoUp: false,
    canGoDown: true,
    canGoLeft: false,
    canGoRight: false,
    href: "dead-end.html",
  },
  {
    room: 12,
    roomType: "puzzle",
    wasVisited: false,
    canGoUp: true,
    canGoDown: false,
    canGoLeft: false,
    canGoRight: true,
    href: "04-water.html",
  },
  {
    room: 13,
    roomType: "blank",
    wasVisited: false,
    canGoUp: false,
    canGoDown: false,
    canGoLeft: true,
    canGoRight: true,
    href: "blank-room.html",
  },
  {
    room: 14,
    roomType: "blank",
    wasVisited: false,
    canGoUp: true,
    canGoDown: true,
    canGoLeft: true,
    canGoRight: true,
    href: "blank-room.html",
  },
  {
    room: 15,
    roomType: "hint",
    wasVisited: false,
    canGoUp: false,
    canGoDown: false,
    canGoLeft: true,
    canGoRight: false,
    href: "water-hint.html",
  },
  {
    room: 16,
    roomType: "puzzle",
    wasVisited: false,
    canGoUp: true,
    canGoDown: true,
    canGoLeft: false,
    canGoRight: false,
    href: "01-earth.html",
  },
  {
    room: 17,
    roomType: "blank",
    wasVisited: false,
    canGoUp: false,
    canGoDown: false,
    canGoLeft: false,
    canGoRight: true,
    href: "dead-end.html",
  },
  {
    room: 18,
    roomType: "hint",
    wasVisited: false,
    canGoUp: false,
    canGoDown: true,
    canGoLeft: true,
    canGoRight: true,
    href: "fib-hint.html",
  },
  {
    room: 19,
    roomType: "canChange",
    wasVisited: false,
    canGoUp: false,
    canGoDown: true,
    canGoLeft: true,
    canGoRight: true,
    href: "halfway-hint.html",
  },
  {
    room: 20,
    roomType: "puzzle",
    wasVisited: false,
    canGoUp: false,
    canGoDown: true,
    canGoLeft: true,
    canGoRight: false,
    href: "02-torch-room.html",
  },
  {
    room: 21,
    roomType: "blank",
    wasVisited: false,
    canGoUp: true,
    canGoDown: false,
    canGoLeft: false,
    canGoRight: true,
    href: "blank-room.html",
  },
  {
    room: 22,
    roomType: "start",
    wasVisited: true,
    canGoUp: false,
    canGoDown: false,
    canGoLeft: true,
    canGoRight: true,
    href: "start-room.html",
  },
  {
    room: 23,
    roomType: "blank",
    wasVisited: false,
    canGoUp: true,
    canGoDown: false,
    canGoLeft: true,
    canGoRight: true,
    href: "blank-room.html",
  },
  {
    room: 24,
    roomType: "hint",
    wasVisited: false,
    canGoUp: true,
    canGoDown: false,
    canGoLeft: true,
    canGoRight: true,
    href: "torch-hint.html",
  },
  {
    room: 25,
    roomType: "blank",
    wasVisited: false,
    canGoUp: true,
    canGoDown: false,
    canGoLeft: true,
    canGoRight: false,
    href: "blank-room.html",
  },
];

export const setAllRooms = (rooms) => {
  localStorage.setItem("allRooms", JSON.stringify(rooms));
};

/**
 * get the stored rooms or initialized in case is no set or true passed as @param
 * @param {boolean} restarting
 * @returns
 */
export const getAllRooms = (restarting = false) => {
  const storedRooms = localStorage.getItem("allRooms");
  let currentRooms;
  if (!storedRooms || restarting) {
    currentRooms = defaultRooms;
    setAllRooms(currentRooms);
  } else {
    currentRooms = JSON.parse(storedRooms);
  }
  return currentRooms;
};

export const setCurrentRoom = (room) => {
  localStorage.setItem("currentRoom", JSON.stringify(room));
};

export const getCurrentRoom = (restarting = false) => {
  const storedRoom = localStorage.getItem("currentRoom");
  let currentRoom;
  if (!storedRoom || restarting) {
    currentRoom = "22"; //starting page;
    setCurrentRoom(currentRoom);
  } else {
    currentRoom = JSON.parse(storedRoom);
  }
  return currentRoom;
};

export const restartGame = () => {
  localStorage.removeItem("difficulty");
  getCurrentRoom(true);
  getAllRooms(true);
  getUserItems(true);
  getCurrentFibonacci(true);
  setCurrentTorches([]);
  getCurrentWater(true);
  getCurrentTiles(true);
};
