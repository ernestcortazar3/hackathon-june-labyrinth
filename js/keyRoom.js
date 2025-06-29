import { renderFooter } from "./footerHandler.js";
import { getUserItems, setUserItems } from "./globals.js";
import { tryToUnlock4 } from "./navigation.js";

const keyContainer = document.querySelector(".key-icon");
const userHaveKey = getUserItems().find(
  (item) => item.name === "key"
).userHasItem;

const removeKey = () => {
  keyContainer.style.display = "none";
};

const onIconRewardClick = () => {
  const userItems = getUserItems();
  userItems.find((item) => {
    return item.name === "key";
  }).userHasItem = true;
  setUserItems(userItems);
  removeKey();
  tryToUnlock4();
  renderFooter();
};

if (userHaveKey) {
  removeKey();
} else {
  keyContainer.addEventListener("click", onIconRewardClick);
}
