for (let i = 0; i < 4; i++) {
  const increaseBtn = document.getElementById(`fib-increase-${i + 1}`);
  increaseBtn.addEventListener("click", () => {
    const numSpan = document.getElementById(`fib-number-${i + 1}`);
    numSpan.innerHTML = +numSpan.innerHTML + 1;
  });
  const decreaseBtn = document.getElementById(`fib-decrease-${i + 1}`);
  decreaseBtn.addEventListener("click", () => {
    const numSpan = document.getElementById(`fib-number-${i + 1}`);
    const currentValue = +numSpan.innerHTML;
    if (currentValue !== 0) {
      numSpan.innerHTML = currentValue - 1;
    }
  });
}
