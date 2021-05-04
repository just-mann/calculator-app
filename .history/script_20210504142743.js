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

// Equal button Call the evaluate function
equalButton.addEventListener('click', evaluateOperand);


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
    if (screen.textContent === "0" || shouldResetScreen) resetScreen();
    showResult.textContent += number;
}


// When a operator button is clicked
operatorButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        let buttonValue = e.target;
        setOperation(buttonValue.textContent);
    });
});


// setOperator function
function setOperation(operator) {
    if (currentOperation === null) evaluateOperand();
    firstOperand = showResult.textContent;
    currentOperation = operator;
    shouldResetScreen = true;
    // console.log(`You clicked ${operator}`);  
}

// Evaluate Operand
function evaluateOperand() {
    if (currentOperation === '0' || shouldResetScreen) return;
    if ( currentOperation === '÷' && showResult.textContent === '0') {
        alert('Cannot divide by zero!!!');
        rres()
        return;
    }
    secondOperand = showResult.textContent;
    showResult.textContent = roundResult(
        operate(currentOperation, firstOperand, secondOperand)
    )
    currentOperation = null;
}


// Rounding the results
function roundResult(number) {
    return Math.round(number * 1000) / 1000;
}


// Functions for the basic operations
    // Add
    function add(a, b) {
        showResult.textContent = a + b;
        console.log(a + b);
    }

    // Subtract
    function subtract(a, b) {
        showResult.textContent = a - b;
        console.log(a - b);
    }

    // Multiply
    function multiply(a, b) {
        showResult.textContent = a * b;
        console.log(a * b);
    }

    // Divide
    function divide(a, b) {
        showResult.textContent = a / b;
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
    window.location.reload();
    showResult.innerHTML = '0';
}