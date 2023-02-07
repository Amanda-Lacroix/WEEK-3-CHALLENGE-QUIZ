// WHEN I click the start button
// THEN a timer starts and I am presented with a question
//    	EVENTLISTENER (see Week 4 #11 JS ): on start button click then FUNCTION: the timer starts (see Week 4 #11 JS ) and a question is presented (prompt)

// var startButton = document.getElementById("button");
var timerEl = document.getElementById("timeclock");
var secondsLeft = 60;  

// startButton.addEventListener("click", startQuiz);
timerEl.addEventListener("onload",);

// function startQuiz(){
//      alert("Hello World!"); 
//     }

function setTime() {
 var timerInterval = setInterval(function() {
    secondsLeft--;
    timerEl = secondsLeft;

    if(secondsLeft === 0) {
        clearInterval(timerInterval);
    }

 }, 1000);
}

setTime();

// WHEN I answer a question
// THEN I am presented with another question
//    FUNCTION: go to the next question ( need a variable of questions.put prompts with questions in an array--need to loop throuh question (for loop))

// var questions = [
//     {   
//         prompt: "What colour is the sky? (a) yellow (b) blue (c) purple",
//         return: "b",
//     }

//     {  
//         prompt: "What colour is the sky? (a) yellow (b) blue (c) purple",
//         return: "b",
//     }

//     {
//         prompt: "What colour is the sky? (a) yellow (b) blue (c) purple",
//         return: "b",
//     }

// ]

// FOR LOOP:




// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
//    	FUNCTION: when answer is incorrect then time is subtracted from the clock 




// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// 	FUNCTION (if/else statement?): end game by a)timer reachs 0 or b)all questions answered 




// WHEN the game is over
// THEN I can save my initials and my score
// 	FUNCTION: to input user score and save to the LOCAL STORAGE (see Week 4 #25 JS)

