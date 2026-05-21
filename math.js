//  numb1    random
//  numb2    random

// 3 options  ---> 1 correct 2 wrong
// option 1 wrong answer, random number
//option 2 wrong answer, random number

const randomNumber1 = Math.round(Math.random() * 50) 
const randomNumber2 = Math.round(Math.random() * 50) 

const box1 = document.querySelector('.box1')
const box2 = document.querySelector('.box2')

box1.append(randomNumber1)
box2.append(randomNumber2)

const correctAnswer = randomNumber1 + randomNumber2
const wrongOption1 = Math.round(Math.random() * 50) 
const wrongOption2 = Math.round(Math.random() * 50) 


var answerArray = [correctAnswer,wrongOption1,wrongOption2]

var randomIndex = Math.floor(Math.random() * 3)

var result;

if (randomIndex === 0){
    result = answerArray
} else if (randomIndex === 1){
    result = [answerArray[1],answerArray[2],answerArray[0]]
} else{
    result = [answerArray[2],answerArray[0],answerArray[1]]
}


const optionsAnswers = document.querySelector('.options-ansers')

result.map((answer,index)=>{
    const div = document.createElement('div')
    div.classList = "opt1 nor"
    div.innerText = answer 
    optionsAnswers.append(div)
div.addEventListener("click", checkCorrect)
    
})

const modal = document.getElementById("modal")
const modal2 = document.getElementById("modal2")
function checkCorrect (e){
    if (Number(e.target.innerText) === correctAnswer){
        modal.style.display = "flex"
      
    }else {
        modal2.style.display = "flex" 
    }
}



const closebtn1 = document.getElementById("close-btn1") 

closebtn1.addEventListener("click", function() {
    window.location.reload()
})


const closebtn2 = document.getElementById("close-btn2") 

closebtn2.addEventListener("click", function() {
    modal2.style.display = "none"
})
