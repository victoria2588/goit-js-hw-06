const counterValue = document.querySelector("#value");
const decrementBtn = document.querySelector("button[data-action='decrement']");
const incrementtBtn = document.querySelector("button[data-action='increment']");

let value = 0;
incrementtBtn.addEventListener("click", function () {
  value += 1;
  counterValue.textContent = value;
});

decrementBtn.addEventListener("click", function () {
  value -= 1;
  counterValue.textContent = value;
});
