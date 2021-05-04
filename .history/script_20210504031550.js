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
function operate(operator, a, b) {
    switch(operator) {
        case "+":
            return add(a, b);
        
    }
}

let equalSign = document.getElementById('equal');
equalSign.addEventListener('click', operate("+", 2, 2));

