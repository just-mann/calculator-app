let showResult = document.getElementById('showResult');
let numberButtons = document.querySelectorAll('.number');
let operationSigns = document.getElementById('operator');
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



// When operator buttons are clicked, run the setOperator function
operationSigns.forEach(sign => {
    sign.addEventListener('click', setOperator);
});

// SetOperator 



equalSign.addEventListener('click', () => {
    evaluate();
})

function evaluate() {
    // operate("*", 2, 4)
}


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

