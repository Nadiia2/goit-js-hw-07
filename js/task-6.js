function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxes = document.querySelector('#boxes');
const input = document.querySelector('#controls input');
const create = document.querySelector('#controls button[data-create]');
const destroy = document.querySelector('#controls button[data-destroy]');

const createBoxes = amount => {
  let size = 30;
  if (amount > 0 && amount <= 100) {
    const boxArray = Array.from({ length: amount }, (_, i) => {
      const box = document.createElement('div');
      box.style.backgroundColor = getRandomHexColor();
      box.style.width = `${size + i * 10}px`;
      box.style.height = `${size + i * 10}px`;
      return box;
    });

    boxes.innerHTML = ''; 
    boxes.append(...boxArray);
  }
  input.value = '';
};


const destroyBoxes = () => {
  boxes.innerHTML = '';
};

create.addEventListener('click', () => {
  const amountNum = Number(input.value);
  createBoxes(amountNum);
});
destroy.addEventListener('click', destroyBoxes);
