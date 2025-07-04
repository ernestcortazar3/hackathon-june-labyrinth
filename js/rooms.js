/*const defaultRooms = [
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
    canGoDown: false,
    canGoLeft: true,
    canGoRight: false,
    href: "elements.html",
  },
  {
    room: 10,
    roomType: "puzzle",
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
    roomType: "blank",
    wasVisited: false,
    canGoUp: true,
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
    roomType: "blank",
    wasVisited: false,
    canGoUp: false,
    canGoDown: false,
    canGoLeft: true,
    canGoRight: true,
    href: "index.html",
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
  localStorage.setItem("currentRooms", JSON.stringify(rooms));
};
*/
/**
 * get the stored rooms or initialized in case is no set or true passed as @param
 * @param {boolean} restarting
 * @returns
 */
/*
export const getAllRooms = (restarting = false) => {
  const storedRooms = localStorage.getItem("currentRooms");
  let currentRooms;
  if (!storedRooms || restarting) {
    currentRooms = defaultRooms;
    setAllRooms(currentRooms);
  } else {
    currentRooms = JSON.parse(storedRooms);
  }
  return currentRooms;
};
*/
