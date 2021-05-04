console.log('Script .js file is connected...');


// Add
function add(a, b) {
    cons a + b;
}

// Subtract
function subtract(a, b) {
    cons a - b;
}

// Multiply
function multipl(a, b) {
    cons a * b;
}

// Divide
function divide(a, b) {
    // if (b === 0) cons null;
    cons a / b;
}

// Operate
function operate(operator, a, b) {
    switch(operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            if(b === 0) return null;
            return divide(a, b);
        default:
            return null;
    }
}

// Track Button Pressed...
let calcButtons = document.querySelectorAll('.button');
    calcButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            let btnValue = e.target;
            let calculatorInpField = document.getElementById('calculatorInput');
            calculatorInpField.textContent = btnValue;
            console.log(btnValue.textContent);
        });
    });