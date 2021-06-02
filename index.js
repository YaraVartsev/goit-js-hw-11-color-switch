const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
const startButton = document.querySelector('[data-action="start"]');
const stopButton = document.querySelector('[data-action="stop"]');
const body = document.querySelector('body');

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let setInt;

startButton.addEventListener('click', num => {
  setInt = setInterval(() => {
    num = randomIntegerFromInterval(0, colors.length - 1);
    body.style.backgroundColor = colors[num];
  }, 1000);
  startButton.setAttribute('disabled', true);
  stopButton.removeAttribute('disabled');
});

stopButton.addEventListener('click', () => {
  startButton.removeAttribute('disabled');
  stopButton.setAttribute('disabled', true);
  body.style.backgroundColor = '';
  clearInterval(setInt);
});