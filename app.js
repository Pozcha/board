const board = document.querySelector('#board');
const colors = [
  'red',
  'blue',
  'pink',
  'purple',
  'white',
  'green',
  'orange',
  'chocolate',
  'aqua',
  'crimson',
  'dodgerblue',
];
const qtySquare = 2000;

for (let i = 0; i < qtySquare; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', () => setColor(square));

  square.addEventListener('mouseleave', () => removeColor(square));

  board.append(square);
}

function setColor(element) {
  const color = setRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.backgroundColor = '#1d1d1d';
  element.style.boxShadow = `0 0 2px`;
}

function setRandomColor() {
  const index = Math.floor(Math.random() * colors.length);

  return colors[index];
}
