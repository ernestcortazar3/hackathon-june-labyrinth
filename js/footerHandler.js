const savedItems = JSON.parse(localStorage.getItem("userItems"));
const itemContainer = document.getElementById("item-inventory");
const renderFooter = () => {
  itemContainer.innerHTML = "";
  for (let i = 0; i < savedItems.length; i++) {
    if (savedItems[i].userHasItem) {
      const inventoryItem = document.createElement("div");
      inventoryItem.classList.add("item");
      const icon = document.createElement("i");
      icon.classList.add("fa-solid", savedItems[i].icon);
      inventoryItem.appendChild(icon);
      itemContainer.appendChild(inventoryItem);
    }
  }
};
renderFooter();
