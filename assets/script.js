// Selects element by class
var timeEl = document.querySelector(".time");

// Selects element by id
var mainEl = document.getElementById("main");

var secondsLeft = 30;

// Timer function which also states seconds left and once 0secs left to run function sendmessage
function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left till quiz finishes";

    if(secondsLeft === 0) {
        clearInterval(timerInterval);
        sendMessage();
      }

  }, 1000);
}

// Function to create message saying quiz finished
function sendMessage() {
    timeEl.textContent = "Times up!! Quiz finish";
  }

setTime();
