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


function typeOne() {
    screen.innerText += one.value
}

one.addEventListener("click", typeOne)

function typeTwo() {
    screen.innerText += two.value
}

two.addEventListener("click", typeTwo)

function typeThree() {
    screen.innerText += three.value
}

three.addEventListener("click", typeThree)

function typeFour() {
    screen.innerText += four.value
}

four.addEventListener("click", typeFour)

function typeFive() {
    screen.innerText += five.value
}

five.addEventListener("click", typeFive)

function typeSix() {
    screen.innerText += six.value
}

six.addEventListener("click", typeSix)

function typeSeven() {
    screen.innerText += seven.value
}

seven.addEventListener("click", typeSeven)

function typeEight() {
    screen.innerText += eight.value
}

eight.addEventListener("click", typeEight)

function typeNine() {
    screen.innerText += nine.value
}

nine.addEventListener("click", typeNine)

function typeZero() {
    screen.innerText += zero.value
}

zero.addEventListener("click", typeZero)



function typeClear() {
    screen.innerText = ""
}

clear.addEventListener("click", typeClear)

function typeDecimal() {
    screen.innerText += decimal.value
}

decimal.addEventListener("click", typeDecimal)

function typePlus() {
    screen.innerText += plus.value
}

plus.addEventListener("click", typePlus)


const calculate = () => {
    const finalResult = eval(screen.innerText)
    screen.innerText = finalResult
}

equal.addEventListener("click", calculate)