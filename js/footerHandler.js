import { getUserItems } from "./globals.js";

export const renderFooter = () => {
  const itemContainer = document.getElementById("item-inventory");
  const savedItems =
    JSON.parse(localStorage.getItem("userItems")) || getUserItems();
  itemContainer.innerHTML = "";
  for (let i = 0; i < savedItems.length; i++) {
    const item = savedItems[i];

    const inventoryItem = document.createElement("div");
    inventoryItem.classList.add("item");
    const icon = document.createElement("i");
    icon.classList.add("fa-solid", item.icon);
    if (item.userHasItem) {
      icon.style.color = item.color;
    }
    inventoryItem.appendChild(icon);
    itemContainer.appendChild(inventoryItem);
  }
};
renderFooter();
