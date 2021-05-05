let showResult = document.getElementById('showResult');
let numberButtons = document.querySelectorAll('.number');
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







equalSign.addEventListener('click', () => {
    ev;
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

