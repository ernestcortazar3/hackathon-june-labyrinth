const modal = document.getElementById("modal-map");
const openBtn = document.querySelector(".map-icon");

openBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
