
const beginQuizBtn = document.querySelector(".begin-quiz")
const queOne = document.querySelector(".q1")
const homepage = document.querySelector(".Homepage")


var timeEl = document.querySelector(".time");

var mainEl = document.getElementById("main");

var secondsLeft = 30;

beginQuizBtn.onclick = ()=> {
    queOne.setAttribute("Style","display:block");
    homepage.setAttribute("Style", "display:none");
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

}

const queTwo = document.querySelector(".q2")
const correct = document.querySelector(".correct")
const correctTwo = document.querySelector(".correct-two")
const correctThree = document.querySelector(".correct-three")
const incorrect = document.querySelector(".incorrect") 
const incorrectTwo = document.querySelector(".incorrect-two") 
const incorrectThree = document.querySelector(".incorrect-three") 
const next = document.querySelector(".next")
const nextTwo = document.querySelector(".next-two")
const finish = document.querySelector(".finish")
const queThree = document.querySelector(".q3")
var answer = document.querySelector(".answer")

correct.onclick = ()=> {
    answer.textContent = "correct answer sir";
    next.setAttribute("Style","display:block");
}

incorrect.onclick = ()=> {
    answer.textContent = "incorrect badluck!";
    next.setAttribute("Style","display:block");
}

next.onclick = ()=> {
    queOne.setAttribute("Style","display:none");
    queTwo.setAttribute("Style","display:block");
    answer.setAttribute("Style", "display:none");
}

correctTwo.onclick = ()=> {
    answer.setAttribute("Style", "display:block");
    answer.textContent = "correct answer sir";
    nextTwo.setAttribute("Style","display:block");  
}

incorrectTwo.onclick = ()=> {
    answer.textContent = "incorrect badluck!";
    next.setAttribute("Style","display:block");
}

nextTwo.onclick = ()=> {
    queTwo.setAttribute("Style","display:none");
    queThree.setAttribute("Style","display:block");
    answer.setAttribute("Style", "display:none");
}

correctThree.onclick= ()=> {
    answer.textContent = "correct answer sir";
    finish.setAttribute("Style","display:block");
    clearInterval(timerInterval);
}

incorrectThree.onclick = ()=> {
    answer.textContent = "incorrect badluck!";
    next.setAttribute("Style","display:block");
}

finish.onclick = ()=> {
    homepage.setAttribute("Style","display:block");
    queThree.setAttribute("Style", "display:none");
    timeEl.setAttribute("Style", "display:none")
}

