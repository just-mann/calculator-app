console.log('Script .js file is connected...');
let showResult = document.getElementById('showResult');

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
    function divide() {
        showResult.innerHTML = a / b;
        console.log(a / b);
    }

// Operator Function
function operate(operator, a, b) {
    switch(operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
            
        default:
            return null;
    }
}

let equalSign = document.getElementById('equal');
let a = prompt('Enter a number: ');
let b = prompt('Enter b value: ');
a = parseInt(a);
b = parseInt(b);
equalSign.addEventListener('click', operate("*", a, b));

