let showResult = document.getElementById('showResult');
let numberButtons = document.querySelectorAll('.number');
let decmialButton = document.getElementById('decimal');
let operationSigns = document.querySelectorAll('.operator');
let equalSign = document.getElementById('equal');

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


// click the decimal button
decmialButton.addEventListener('click', (e) => {
    appendDecimalNumbers(e.target.textContent);
});

// Append Decimal Numbers
function appendDecimalNumbers(number) {
    // if (shouldReset) resetScreen();
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
    console.log(currentOperation);
}

// Evaluate Function
function evaluate() {
    if (currentOperation === '0' || shouldReset) return;
    if (currentOperation === '/' && showResult.textContent === '0') {
        alert('Cannot divide by zero');
        // clearField() 
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
})

// Functions for Bacsic Math Operators
    // add
    function add(a, b){
        let output = a + b;
        // output = parseFloat(output).toFixed(2);
        console.log(a + b);
        return showResult.textContent = output.toFixed(2);
    }

    // subtract
    function subtract(a, b){
        let output = a - b;
        // output = parseFloat(output).toFixed(2);
        console.log(a - b);
        return showResult.textContent = output.toFixed(2);
    }

    // multiply
    function multiply(a, b){
        let output = a * b;
        // output = parseFloat(output).toFixed(2);
        console.log(a * b);
        return showResult.textContent = output.toFixed(2);
    }

    // divide
    function divide(a, b){
        let output = a / b;
        // output = parseFloat(output).toFixed(2);
        if (b === 0) return null;
        if (b === 0) return null;
      else return divide(a, b););
    }

// Function that calls the basic Operators
function operate(operator, a, b) {
    // Parse  a & b to return an integer
        a = parseInt(a);
        b = parseInt(b);
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

