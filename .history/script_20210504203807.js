let showResult = document.getElementById('showResult');
let numberButtons = document.querySelectorAll('.number');
let operationSigns = document.querySelectorAll('.operator');
let equalSign = document.getElementById('equal');

let firstOperand = '';
let secondOperand = '';
let currentOperation = null;
let shouldReset = false;


numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        appendNumber(button.i);
    })
})

function appendNumber(number) {
    if (showResult.i === '0' || shouldReset) {
            showResult.i = "";
            shouldReset = false;
    }
    showResult.i += number;
}

// When operator buttons are clicked, run the setOperation function
operationSigns.forEach(sign => {
    sign.addEventListener('click', (e) => {
        setOperation(e.target.i)
    });
});

// SetOperation Function
function setOperation(operator) {
    if (currentOperation !== null) evaluate(); //If the currentOperation value is not absent, 
                                                    //run the evaluate function to run some test.
    firstOperand = showResult.i;
    currentOperation = operator;
    shouldReset = true;
    console.log(currentOperation);
}

// Evaluate Function
function evaluate() {
    if (currentOperation === '0' || shouldReset) return;
    if (currentOperation === '/' && showResult.i === '0') {
        alert('Cannot divide by zero');
        // clearField() 
        return;
    }
    secondOperand = showResult.i;
    showResult.i = operate(currentOperation, firstOperand, secondOperand);
    currentOperation = null;
    // operate("*", 2, 4)
}

equalSign.addEventListener('click', () => {
    evaluate();
})

// Functions for Bacsic Math Operators
    // add
    function add(a, b){
        console.log(a + b);
        showResult.i = (a + b);
    }

    // subtract
    function subtract(a, b){
        console.log(a - b);
        showResult.i = (a - b);
    }

    // multiply
    function multiply(a, b){
        console.log(a * b);
        showResult.i = (a * b);
    }

    // divide
    function divide(a, b){
        if (b === 0) return null;
        console.log(a / b);
        showResult.i = (a / b);
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
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
        default:
            return null;
    }
}

