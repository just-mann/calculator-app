let showResult = document.getElementById('showResult');
let numberButtons = document.querySelectorAll('.number');
let equalSign = document.getElementById('equal');

let firstOperand = '';
let secondOperand = '';
let currentOperation = null;
let shouldReset = false;




equalSign.addEventListener('click', () => {
    operate("*", 2, 4);
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

// let operationSign = "+";
// operate(operationSign, 10, 6);



// Trigger the display function when for each number button clicked
numberButtons.forEach(button => {
    button.addEventListener('click', appendNumber(button.textContent));
})

function appendNumber(number) {
    if (showResult.textContent === '0' || shouldReset) {
        console.log('Something is wrond, fix it ASAP');
        showResult.textContent += number;
    }
}