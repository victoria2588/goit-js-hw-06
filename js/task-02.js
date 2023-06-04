const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listEl = document.querySelector("#ingredients");

const ttt = ingredients.map((el) => {
  const liEl = document.createElement("li");
  liEl.classList.add("item");
  liEl.textContent = el;
  return liEl;
});
listEl.append(...ttt);
