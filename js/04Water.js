import { getCurrentWater, setCurrentWater } from "./globals.js";

let selectedRecipe = null;

const pourLiquid = (source, target) => {
  const currentWater = getCurrentWater();
  if (currentWater[target].length < 4) {
    console.log(currentWater);
    currentWater[target].push(currentWater[source].pop());
    console.log(currentWater);
    setCurrentWater(currentWater);
    selectedRecipe = null;
  }
};

const handleOnclick = (position) => {
  console.log("start click");
  if (selectedRecipe === null) {
    selectedRecipe = position;
    drawContainers();
    return;
  } else if (selectedRecipe !== position) {
    pourLiquid(selectedRecipe, position);
  } else {
    selectedRecipe = null;
  }
  drawContainers();
};

const drawContainers = () => {
  const currentWater = getCurrentWater();
  const container = document.getElementById("liq-puzzle-container");
  container.innerHTML = "";
  for (let i = 0; i < currentWater.length; i++) {
    const liqContainer = document.createElement("div");
    liqContainer.classList.add("liq-container");
    if (selectedRecipe === i) {
      liqContainer.classList.add("selected");
    }
    liqContainer.addEventListener("click", () => {
      handleOnclick(i);
    });
    for (let j = 0; j < currentWater[i].length; j++) {
      const liquid = document.createElement("div");
      liquid.classList.add(`liq-${currentWater[i][j]}`);
      if (j === 0) {
        liquid.classList.add("bottom");
      }
      liqContainer.appendChild(liquid);
    }
    container.appendChild(liqContainer);
  }
};

drawContainers();
