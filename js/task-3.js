const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

const onInputInput = () => {
  const inputValue = inputEl.value.trim();
  if (inputValue) {
    outputEl.textContent = inputValue;
  } else {
    outputEl.textContent = "Anonymous";
  }
};

inputEl.addEventListener("input", onInputInput);
