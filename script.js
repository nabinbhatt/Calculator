console.log("welcome to my Calculator - Nabin Bhatt");

// variables
const numberButtons = document.querySelectorAll(".number");
const operationButtons = document.querySelectorAll(".operator");
const eqaulsButton = document.querySelector(".equal");
const allClearButton = document.querySelector(".clear");
const displayScreen = document.getElementById("screen");
const displayAns = document.getElementById("ans");
const cursor = document.getElementById('blink');
const point = document.querySelector('.point');
const multiply = document.querySelector('.multip');
const divide = document.querySelector('.divide');
const percent = document.querySelector('.percent');

// the calculator functions

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log("pressed " + button.innerText);
    displayScreen.value += button.innerText;
    removeCursor();
    answer();
  });
});

operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log("pressed " + button.innerText);
    displayScreen.value += button.innerText;
  });
});

eqaulsButton.addEventListener("click", (button) => {
  displayScreen.value = eval(displayScreen.value);
  displayAns.value = '';
});

allClearButton.addEventListener('click', (button) => {
  displayScreen.value = '';
  displayAns.value = '';
})

point.addEventListener('click', (button) => {
  displayScreen.value += '.';
})
multiply.addEventListener('click', (button) => {
  displayScreen.value += '*';
})
divide.addEventListener('click', (button) => {
  displayScreen.value += '/';
})
percent.addEventListener('click', (button) => {

  displayAns.value = eval(displayScreen.value / 100);
})

function removeCursor() {
  if (displayScreen.value === '') {
    cursor.style.display = `block`;
  } else {
    cursor.style.display = `none`;
  }
}

function answer() {
  displayAns.value = eval(displayScreen.value);
}