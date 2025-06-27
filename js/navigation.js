import { rooms } from "./rooms.js";

function getCanGoUp() {
  if (rooms.canGoUp == true) {
    return true;
  }
  const upArrow = document.createElement("div");
  const icon = document.createElement("x");
  icon.classList.add("fa-solid", item.icon);
  if (item.getCanGoUp == true) {
    icon.style.color = item.color;
  }
}

function displayArrowIcons() {
  const storedArrowIcons = localStorage.getItem("arrowIcons");
  let arrowIcons;
  if (!canGoUp || !canGoDown || !canGoLeft || !canGoRight) {
    arrowIcons = [
      {
        name: "up",
        icon: "fa-arrow-up",
        userHasItem: false,
        color: "black",
      },
      {
        name: "down",
        icon: "fa-arrow-down",
        userHasItem: false,
        color: "black",
      },
      {
        name: "left",
        icon: "fa-arrow-left",
        userHasItem: false,
        color: "black",
      },
      {
        name: "right",
        icon: "fa-arrow-right",
        userHasItem: false,
        color: "black",
      },
    ];
  }
}
