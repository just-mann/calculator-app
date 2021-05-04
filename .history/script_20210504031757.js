console.log('Script .js file is connected...');

// Functions for the basic operations
    // Add
    function add(a, b) {
        console.log(a + b);
    }

    // Subtract
    function subtract() {

    }

    // Multiply
    function multiply() {

    }

    // Divide
    function divide() {

    }

// Operator Function
function operate( a, operator, b) {
    switch(operator) {
        case "+":
            return add(a, b);
        default:
            return null;
    }
}

let equalSign = document.getElementById('equal');
let a = prompt('Enter a number: ');
let b = prompt('Enter ')
equalSign.addEventListener('click', operate(2, "+", 2));

