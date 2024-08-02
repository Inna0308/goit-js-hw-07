function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const boxes = document.querySelector("#boxes");
  boxes.innerHTML = "";

  const elements = [];
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    const size = 30 + i * 10;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    elements.push(box);
  }

  boxes.append(...elements);
}

function destroyBoxes() {
  const boxes = document.querySelector("#boxes");
  boxes.innerHTML = "";
}

const createButton = document.querySelector("[data-create]");
createButton.addEventListener("click", function () {
  const input = document.querySelector("#controls input");
  const amount = Number(input.value);

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = "";
  } else {
    alert("Please enter a number between 1 and 100!");
  }
});

const destroyButton = document.querySelector("[data-destroy]");
destroyButton.addEventListener("click", function () {
  destroyBoxes();
});
