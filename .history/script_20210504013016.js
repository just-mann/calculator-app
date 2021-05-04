console.log('Script .js file is connected...');


// Add
function add(a, b) {
    return a 
}

// Subtract
function subtract() {
    
}

// Multiply
function multipl() {

}

// Divide
function divide() {

}

// Operate
function operate() {

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