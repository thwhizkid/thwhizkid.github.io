// box for the first number
const firstBox = document.getElementById('first-number')

// box for the second number
const secondbox = document.getElementById('second-number')

// screen
const screen = document.getElementById('screen');

// sign
const additionSign = document.getElementById("add")

function handleAddition(){
    const result = Number(firstBox.value) + Number(secondbox.value);
    screen.innerHTML = result
}

additionSign.addEventListener('click', handleAddition) 

// sign
const subtractionSign = document.getElementById("subtract")

function handleSubtraction(){
    const result1 = Number(firstBox.value) - Number(secondbox.value);
    screen.innerHTML = result1
}

subtractionSign.addEventListener('click', handleSubtraction) 


// sign
const multiplicationSign = document.getElementById("multiplication")

function handleMultiplication(){
    const result2 = Number(firstBox.value) * Number(secondbox.value);
    screen.innerHTML = result2
}

multiplicationSign.addEventListener('click', handleMultiplication) 


// sign
const divisionSign = document.getElementById("division")

function handleDivision(){
    const result3 = Number(firstBox.value) / Number(secondbox.value);
    screen.innerHTML = result3
}

divisionSign.addEventListener('click', handleDivision) 




const clear = document.getElementById('clear')
const percent = document.getElementById('percent')
const multiply = document.getElementById('multiply')
const divide = document.getElementById('divide')
const seven = document.getElementById('seven')
const eight = document.getElementById('eight')
const nine = document.getElementById('nine')
const decimal = document.getElementById('decimal')
const four = document.getElementById('four')
const five = document.getElementById('five')
const six = document.getElementById('six')
const subtract = document.getElementById('subtract')
const one = document.getElementById('one')
const two = document.getElementById('two')
const three = document.getElementById('three')
const plus = document.getElementById('plus')
const zero = document.getElementById('zero')
const equal = document.getElementById('equal')

const screen = document.querySelector('.screen')