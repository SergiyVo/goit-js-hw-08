function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('input');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const myBoxes = document.getElementById('boxes');


createButton.addEventListener('click', () => {
  const amount = parseInt(input.value);
  createBoxes(amount);
});

destroyButton.addEventListener('click', () => {
  destroyBoxes();
});

function createBoxes(amount) {
  destroyBoxes();
  if (amount >= 1 && amount <= 100) {
    let sizeBox = 30;
    for (let i = 0; i < amount; i++) {
      const myBox = document.createElement('div');
      myBox.style.backgroundColor = getRandomHexColor();
      myBox.style.width = ` ${sizeBox}px`;
      myBox.style.height = `${sizeBox}px`;
      myBoxes.appendChild(myBox);
      sizeBox = sizeBox + 10;
    }
  };
  input.value = '';
};

function destroyBoxes() {
  myBoxes.innerHTML = '';
};
