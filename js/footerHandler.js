import { initUserItems } from "./globals.js";

const savedItems =
  JSON.parse(localStorage.getItem("userItems")) || initUserItems;
const itemContainer = document.getElementById("item-inventory");
const renderFooter = () => {
  itemContainer.innerHTML = "";
  for (let i = 0; i < savedItems.length; i++) {
    const item = savedItems[i];
    if (item.userHasItem) {
      const inventoryItem = document.createElement("div");
      inventoryItem.classList.add("item");
      const icon = document.createElement("i");
      icon.classList.add("fa-solid", item.icon);
      icon.draggable = true;
      icon.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("text/plain", `${item.name}`);
      });
      inventoryItem.appendChild(icon);
      itemContainer.appendChild(inventoryItem);
    }
  }
};
renderFooter();
