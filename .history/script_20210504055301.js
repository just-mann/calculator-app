console.log('Script .js file is connected...');
let showResult = document.getElementById('showResult');
let numberButtons = document.querySelectorAll('.number');
let operatorButtons = document.querySelectorAll('.operator');
let equalButton = document.getElementById('equal');
let clearButton = document.getElementById('clearButton');

let shouldResetScreen = false;
let firstOperand = "";
let secondOperand = "";
let currentOperation = null;




// When a number button is clicked, append it to the previous on by calling the appendNumber function.
numberButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        let buttonValue = e.target;
        // console.log(buttonValue.textContent);
        appendNumber(buttonValue.textContent);
    });
});


// appendNumber function
function appendNumber(number) {
    if (showResult.textContent === '0' || shouldResetScreen) resetScreen();
    showResult.textContent += number;
}


// When a operator button is clicked
operatorButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        let operBtn = e.target;
        console.log(operBtn.textContent);
    })
})


// setOperator function
function setOperator


// Functions for the basic operations
    // Add
    function add(a, b) {
        showResult.innerHTML = a + b;
        console.log(a + b);
    }

    // Subtract
    function subtract(a, b) {
        showResult.innerHTML = a - b;
        console.log(a - b);
    }

    // Multiply
    function multiply(a, b) {
        showResult.innerHTML = a * b;
        console.log(a * b);
    }

    // Divide
    function divide(a, b) {
        showResult.innerHTML = a / b;
        console.log(a / b);
    }

// Operator Function
function operate(operator, a, b) {
    a = Number(a);
    b = Number(b);
    switch(operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "x":
            return multiply(a, b);
        case "/":
            if (b === 0) return null;
            return divide(a, b);
        default:
            return null;
    }
}



// Reset
function resetScreen() {
    showResult.textContent = "";
    shouldResetScreen = false;
}



// Clear Button
clearButton.addEventListener('click', clearResult);

// Clear Function
function clearResult() {
    // console.clear();
    showResult.innerHTML = '0';
}