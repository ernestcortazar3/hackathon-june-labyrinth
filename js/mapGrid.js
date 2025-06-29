import { getAllRooms, getCurrentRoom } from "./globals.js";

const currentRoom = getCurrentRoom();
const gridContainer = document.querySelector(".map-grid");
gridContainer.innerHTML = "";

const populateGrid = () => {
  const allRooms = getAllRooms();
  for (let i = 0; i < allRooms.length; i++) {
    const roomElement = document.createElement("div");
    roomElement.classList.add("room");
    if (!allRooms[i].wasVisited) {
      roomElement.classList.add("not-visited-room");
    } else if (allRooms[i].room === currentRoom) {
      roomElement.classList.add("current-room");
    } else {
      roomElement.classList.add(`${allRooms[i].roomType}-room`);
    }
    gridContainer.appendChild(roomElement);
  }
};

populateGrid();
