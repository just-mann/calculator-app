console.log('Script .js file is connected...');
let showResult = document.getElementById('showResult');
let buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        let btnValue = e.target;
        if(btnValue.innerHTML === '=') {
            operate();
        }
        // console.log(btnValue);
        showResult.innerHTML = btnValue.innerHTML;
    })
})

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
    function divide(a, b) {
        showResult.innerHTML = a / b;
        console.log(a / b);
    }

// Operator Function
function operate(operator, a, b) {
    a = Number(a);
  b = Number(b);
    switch(operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            if (b === 0) return null;
            return divide(a, b);
        default:
            return null;
    }
}


let equalSign = document.getElementById('equal');
equalSign.addEventListener('click', () => {
    operate("*", a, b);
});

