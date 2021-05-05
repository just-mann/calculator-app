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
        appendNumber(button.textContent);
    })
})

function appendNumber(number) {
    if (showResult.textContent === '0' || shouldReset) {
            screen.textContent = "";
            shouldReset = false;
    }
    showResult.innerHTML += number;
}



// When operator buttons are clicked, run the setOperation function
operationSigns.forEach(sign => {
    sign.addEventListener('click',(e) => {
        console.log(e.target.te)
    });
});

// SetOperation Function
function setOperation(operator) {
    if (currentOperation !== null) evaluate(); //If the currentOperation value is not absent, 
                                                    //run the evaluate function to run some test.
    firstOperand = showResult.textContent;
    currentOperation = operator;
    shouldReset = true;
    // console.log(operator);
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
    showResult.textContent = operate(currentOperation, firstOperand, secondOperand);
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
    }

    // subtract
    function subtract(a, b){
        console.log(a - b);
    }

    // multiply
    function multiply(a, b){
        console.log(a * b);
    }

    // divide
    function divide(a, b){
        console.log(a / b);
    }

// Function that calls the basic Operators
function operate(operator, a, b) {
    // Parse  a & b to return an integer
        a = parseInt(a);
        b = parseInt(b);
    switch(operator) {
        case "+":
            return add(a, b);
            break;
        case "-":
            return subtract(a, b);
            break;
        case "*":
            return multiply(a, b);
            break;
        case "/":
            return divide(a, b);
            break;
        default:
            return null;
    }
}

