const totalColumns = 4;
const grid = document.getElementById("fire-grid");
grid.addEventListener("keydown", (e) => {
  tryToSwitchPositions(e.key);
  console.log(e.key);
  renderGrid();
});

const currentSlidPos = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
  "13",
  "14",
  "",
  "15",
];
const renderGrid = () => {
  grid.innerHTML = "";
  for (let i = 0; i < currentSlidPos.length; i++) {
    const slot = document.createElement("div");
    slot.classList.add("grid-slot");
    slot.style = `background-image: url(../assets/fire_tiles/${currentSlidPos[i]}-fire.jpg)`;
    slot.alt = `fire-${i + 1}`;
    grid.appendChild(slot);
  }
};

const getCoordinates = (position) => {
  const x = Math.floor(position / totalColumns);
  const y = position % totalColumns;
  return [x, y];
};
const getEmptySlotCoordinates = () => {
  for (let i = 0; i < currentSlidPos.length; i++) {
    if (currentSlidPos[i] === "") return getCoordinates(i);
  }
};
//will save the empty position to avoid search fot it all the time
let currentEmptyPosition = currentSlidPos.findIndex(
  (element, i) => element === ""
);
//same as coordinates
let currentEmptyCoordinates = getEmptySlotCoordinates();

const getCoordinatesToMove = (move) => {
  switch (move) {
    case "ArrowUp":
      return currentEmptyCoordinates[0] === totalColumns - 1
        ? [-1, -1]
        : [currentEmptyCoordinates[0] + 1, currentEmptyCoordinates[1]];
    case "ArrowDown":
      return currentEmptyCoordinates[0] === 0
        ? [-1, -1]
        : [currentEmptyCoordinates[0] - 1, currentEmptyCoordinates[1]];
    case "ArrowLeft":
      return currentEmptyCoordinates[1] === totalColumns - 1
        ? [-1, -1]
        : [currentEmptyCoordinates[0], currentEmptyCoordinates[1] + 1];
    case "ArrowRight":
      return currentEmptyCoordinates[1] === 0
        ? [-1, -1]
        : [currentEmptyCoordinates[0], currentEmptyCoordinates[1] - 1];
    default:
      return [-1, -1];
  }
};

const getPositionByCoordinate = (coordinate) => {
  return coordinate[0] * totalColumns + coordinate[1];
};

const tryToSwitchPositions = (move) => {
  const coordinateToMove = getCoordinatesToMove(move);
  const positionToMove = getPositionByCoordinate(coordinateToMove);
  if (coordinateToMove[0] !== -1 && coordinateToMove[1] !== -1) {
    const tempPositionToChange = currentSlidPos[currentEmptyPosition];
    currentSlidPos[currentEmptyPosition] = currentSlidPos[positionToMove];
    currentSlidPos[positionToMove] = tempPositionToChange;
    currentEmptyCoordinates = coordinateToMove;
    currentEmptyPosition = positionToMove;
  }
};

renderGrid();
grid.focus();
