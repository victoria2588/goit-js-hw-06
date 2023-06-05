const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", function () {
  const inputValue = inputEl.value.trim().length;
  const totalLenght = parseInt(this.getAttribute("data-length"));
  if (inputValue === totalLenght) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
    return;
  } else inputEl.classList.remove("valid");
  inputEl.classList.add("invalid");
});
