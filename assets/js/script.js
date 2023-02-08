// WHEN I click the start button
// THEN a timer starts and I am presented with a question
//    	EVENTLISTENER (see Week 4 #11 JS ): on start button click then FUNCTION: the timer starts (see Week 4 #11 JS ) and a question is presented (prompt)

        var startButton = document.getElementById("button");
        var timerEl = document.querySelector(".timeclock");
        var secondsLeft = 60;  

        startButton.addEventListener("click", startQuiz);

// we need a function to start the quiz and the timer
    function startQuiz(){
    setTime();
    playQuiz();
    }

// we need a function that sets the timer interval
    function setTime() {
    var timerInterval = setInterval(function() {
    secondsLeft--;
    timerEl.textContent = secondsLeft + "!";

    if(secondsLeft === 0) {
    clearInterval(timerInterval);
    }

    }, 1000);

    }

    var correct = 0;
    var options = ["A", "B" , "C"];

    var playQuiz = function(){
        // ask the question
        var userChoice1 =window.prompt ("What colour is the sky? A) purple B) green C) blue")
    
        // if users presses cancel, end function
    if (!userChoice1) {
        return;
    }

    userChoice1 = userChoice1.toUpperCase();

    if (userChoice1 === "C"){
        correct++;
        alert("Answer is Correct!");

    } else if (
        (userChoice1 === "A") || 
        (userChoice1 === "B")
    ){
        alert("Incorrect Answer");
    }

}



// WHEN I answer a question
// THEN I am presented with another question
// PROMPTS: we need prompt for the questions and IF statements to verify the correct answer. 


// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
//    	FUNCTION: when answer is incorrect then time is subtracted from the clock 




// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// 	FUNCTION (if/else statement?): end game by a)timer reachs 0 or b)all questions answered 




// WHEN the game is over
// THEN I can save my initials and my score
// 	FUNCTION: to input user score and save to the LOCAL STORAGE (see Week 4 #25 JS)

