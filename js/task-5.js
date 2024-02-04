function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.body;
const colorBody = document.querySelector('.color');
const changeColor = document.querySelector('.change-color');

changeColor.addEventListener('click', () => {
  const myRandomColor = getRandomHexColor();
  colorBody.textContent = myRandomColor;
  body.style.backgroundColor = myRandomColor;
});

