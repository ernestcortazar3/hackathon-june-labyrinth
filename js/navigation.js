import {
  getAllRooms,
  getCurrentRoom,
  getUserItems,
  setAllRooms,
  setCurrentRoom,
} from "./globals.js";

/**
 * <div class="up-icon"><i class="fa fa-arrow-up"></i></div>
      <div class="down-icon"><i class="fa fa-arrow-down"></i></div>
      <div class="left-icon"><i class="fa fa-arrow-left"></i></div>
      <div class="right-icon"><i class="fa fa-arrow-right"></i></div>
 */
const upArrow = document.querySelector(".up-icon");
const downArrow = document.querySelector(".down-icon");
const leftArrow = document.querySelector(".left-icon");
const rightArrow = document.querySelector(".right-icon");

const goToNextRoom = (amountToAdd) => {
  const newRoomNumber = +getCurrentRoom() + amountToAdd;
  setCurrentRoom(newRoomNumber);
  const allRooms = getAllRooms();
  const newRoom = allRooms.find((room) => {
    return room.room === newRoomNumber;
  });
  newRoom.wasVisited = true;
  window.location.href = `${newRoom.href}`;
};

export const renderArrows = () => {
  const currentRoom = getAllRooms().find((room) => {
    return room.room === +getCurrentRoom();
  });
  if (currentRoom.canGoUp) {
    upArrow.style.display = "block";
    upArrow.addEventListener("click", () => {
      goToNextRoom(-5);
    });
  } else {
    upArrow.style.display = "none";
  }
  if (currentRoom.canGoDown) {
    downArrow.style.display = "block";
    downArrow.addEventListener("click", () => {
      goToNextRoom(5);
    });
  } else {
    downArrow.style.display = "none";
  }
  if (currentRoom.canGoLeft) {
    leftArrow.style.display = "block";
    leftArrow.addEventListener("click", () => {
      goToNextRoom(-1);
    });
  } else {
    leftArrow.style.display = "none";
  }
  if (currentRoom.canGoRight) {
    rightArrow.style.display = "block";
    rightArrow.addEventListener("click", () => {
      goToNextRoom(1);
    });
  } else {
    rightArrow.style.display = "none";
  }
};

const getUserItemByName = (itemName) => {
  const userItems = getUserItems();
  return getUserItems().find((item) => {
    return item.name === itemName;
  });
};

export const tryToUnlock19 = () => {
  const fire = getUserItemByName("fire");
  const leaf = getUserItemByName("leaf");
  const userHaveFire = fire?.userHasItem;
  const userHaveLeaf = leaf?.userHasItem;
  if (userHaveLeaf && userHaveFire) {
    const allRooms = getAllRooms();
    const room19 = allRooms.find((room) => room.room === 19);
    room19.canGoUp = true;
    setAllRooms(allRooms);
  }
};

export const tryToUnlock9 = () => {
  const fire = getUserItemByName("fire");
  const leaf = getUserItemByName("leaf");
  const water = getUserItemByName("water");
  const wind = getUserItemByName("wind");
  const userHaveFire = fire?.userHasItem;
  const userHaveLeaf = leaf?.userHasItem;
  const userHaveWater = water?.userHasItem;
  const userHaveWind = wind?.userHasItem;
  if (userHaveLeaf && userHaveFire && userHaveWater && userHaveWind) {
    const allRooms = getAllRooms();
    const room9 = allRooms.find((room) => room.room === 9);
    room9.canGoRight = true;
    setAllRooms(allRooms);
  }
};

export const tryToUnlock4 = () => {
  const allRooms = getAllRooms();
  const room4 = allRooms.find((room) => room.room === 4);
  room4.canGoRight = true;
  setAllRooms(allRooms);
};

renderArrows();
