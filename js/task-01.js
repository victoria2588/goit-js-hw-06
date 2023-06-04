const categoryEl = document.querySelector("#categories");
const itemEl = categoryEl.children;
const arrayCategory = [...itemEl];
console.log("Numbers of category:", arrayCategory.length);

arrayCategory.forEach(function callback(element) {
  console.log("Category:", element.firstElementChild.textContent);
  console.log("Elements:", element.lastElementChild.children.length);
});
