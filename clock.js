// Get current time

function updateClock() {
  var todayTime = new Date();
  var currentTime = todayTime.toLocaleTimeString();
 const clockFace = document.querySelector(".clock-face");
  clockFace.innerText = currentTime;
}
setInterval(updateClock, 1000)

updateClock()


const randomNumber = Math.random() * 100
console.log(randomNumber)