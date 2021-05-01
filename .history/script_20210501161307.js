console.log('Script .js file is connected...');


// Add
function add() {

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
let calculatorInpField = document.getElementById('calculatorInput');

calcButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        let btnValue = e.target;
        calculatorInpField
        calculatorInpField.value = btnValue;
        console.log(btnValue.textContent);
    })
})