let showResult = document.getElementById('showResult');
let numberButtons = document.querySelectorAll('.number');









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

let operationSign = prompt('Enter operationSign');
operate(operationSign, 10, 6);



// Trigger the display function when a number button is clicked
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        display
    })
})

// Display number in Result field
function display() {

}