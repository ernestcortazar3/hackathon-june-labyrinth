let currentPanel = 1;
const totalPanels = 5;

const showPanel = (index) => {
  for (let i = 1; i <= totalPanels; i++) {
    document.getElementById(`panel-${i}`).classList.add("hidden");
  }
  document.getElementById(`panel-${index}`).classList.remove("hidden");
};

document.getElementById("nextBtn").addEventListener("click", () => {
  if (currentPanel < totalPanels) {
    currentPanel++;
    showPanel(currentPanel);
  }
});

document.getElementById("backBtn").addEventListener("click", () => {
  if (currentPanel > 1) {
    currentPanel--;
    showPanel(currentPanel);
  }
});

// Optional: Function to show the popup (e.g., from a button in the room)
function openPopup() {
  document.getElementById("popup").classList.remove("hidden");
  showPanel(currentPanel);
  document.getElementById("instructions").classList.add("hidden");
}

function closePopup() {
  document.getElementById("popup").classList.add("hidden");
}
