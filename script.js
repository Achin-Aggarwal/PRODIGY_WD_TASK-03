let display = document.getElementById('display');
let currentInput = '';
let result = '';

function appendToDisplay(value) {
    currentInput += value;
    display.value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    result = '';
    display.value = '';
}

function calculateResult() {
    try {
        result = eval(currentInput);
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}

const calculatorHeading = document.querySelector('.calculator-heading');
let animationIteration = 0;

function animateHeading() {
    calculatorHeading.style.animation = 'neonEffect 1s infinite';

        animationIteration++;
    if (animationIteration >= 3) {
        clearInterval(headingAnimationInterval);
    }
}

const headingAnimationInterval = setInterval(animateHeading, 3000);
