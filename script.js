let showResult = document.getElementById('showResult');
let numberButtons = document.querySelectorAll('.number');
let decmialButton = document.getElementById('decimal');
let operationSigns = document.querySelectorAll('.operator');
let equalSign = document.getElementById('equal');
let deleteButton = document.getElementById('delButton');
let clearButton = document.getElementById('clearButton');

let firstOperand = '';
let secondOperand = '';
let currentOperation = null;
let shouldReset = false;


numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        appendNumber(button.textContent);
    });
});

function appendNumber(number) {
    if (showResult.textContent === '0' || shouldReset) {
            showResult.textContent = "";
            shouldReset = false;
    }
    showResult.textContent += number;
}


// Click the 'AC' button to clear all the display;
clearButton.addEventListener('click', allClear);

// All Clear Function
function allClear() {
    showResult.textContent = '0';
    window.location.reload();
}

// Click the Delete Button to Delete the last number
deleteButton.addEventListener('click', deleteLastNumber);

// Delete Function
function deleteLastNumber() {
    showResult.textContent = showResult.textContent.toString().slice(0, -1);
}


// click the decimal button
decmialButton.addEventListener('click', (e) => {
    appendDecimalNumbers(e.target.textContent);
});

// Append Decimal Numbers
function appendDecimalNumbers(number) {
    if (showResult.textContent === "") showResult.textContent = "0";
    if (showResult.textContent.includes(".")) return;
    showResult.textContent += number;
}

// When operator buttons are clicked, run the setOperation function
operationSigns.forEach(sign => {
    sign.addEventListener('click', (e) => {
        setOperation(e.target.textContent)
    });
});

// SetOperation Function
function setOperation(operator) {
    if (currentOperation !== null) evaluate(); //If the currentOperation value is not absent, 
                                                    //run the evaluate function to run some test.
    firstOperand = showResult.textContent;
    currentOperation = operator;
    shouldReset = true;
}

// Evaluate Function
function evaluate() {
    if (currentOperation === '0' || shouldReset) return;
    if (currentOperation === '÷' && showResult.textContent === '0') {
        showResult.textContent = 'Cannot divide by zero';
        showResult.style.color = 'red';
        deleteButton.disabled = true;
        numberButtons.disabled = true;
        equalSign.disabled = true;
        operationSigns.disabled = true;
        return;
    }
    secondOperand = showResult.textContent;
    showResult.textContent = roundResult(operate(currentOperation, firstOperand, secondOperand));
    currentOperation = null;
}

// Round the answer
function roundResult(number) {
    return Math.round(number * 1000) / 1000;
}

equalSign.addEventListener('click', () => {
    evaluate();
});

// Functions for Bacsic Math Operators
    // add
    function add(a, b){
        let output = a + b;
        output = Number(output);
        return showResult.textContent = output;
    }

    // subtract
    function subtract(a, b){
        let output = a - b;
        output = Number(output);
        return showResult.textContent = output;
    }

    // multiply
    function multiply(a, b){
        let output = a * b;
        output = Number(output);
        return showResult.textContent = output;
    }

    // divide
    function divide(a, b){
        let output = a / b;
        output = Number(output);
        if (b === 0) return null;
        return showResult.textContent = output;
    }

// Function that calls the basic Operators
function operate(operator, a, b) {
    // Parse  a & b to return an integer
    a = Number(a);
    b = Number(b);
    switch(operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "×":
            return multiply(a, b);
        case "÷":
            return divide(a, b);
        default:
            return null;
    }
}

