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


let calcButtons = document.querySelectorAll('.button');

calcButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        let bu
        console.log(e.target.value);
    })
})