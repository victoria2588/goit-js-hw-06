function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btnEl = document.querySelector(".change-color");
const colorEl = document.querySelector(".color");
const bodyEl = document.querySelector(".widget");

btnEl.addEventListener("click", function () {
  bodyEl.style.backgroundColor = getRandomHexColor();
  colorEl.textContent = getRandomHexColor();
});
