// WHEN I click the start button
// THEN a timer starts and I am presented with a question


    var startButton = document.getElementById("button");
    var timerEl = document.querySelector(".timeclock");
    var score = document.querySelector(".scoreBoard").value; 
    var secondsLeft = 10; 
    var correct = 0;
    

// // // Places incremented score on page ??????
// score.textContent= "Your total score is: " + (score) + ".";


// EVENTLISTENER (see Week 4 #11 JS ): on start button click then FUNCTION: the timer starts (see Week 4 #11 JS ) and a question is presented (prompt)
startButton.addEventListener("click", startQuiz);

// we need a function to start the quiz and the timer
    function startQuiz(){
// WHY WONT THIS WORK!!!! (timer starts after the last question)
    setTime();
    playQuiz();
    }

// we need a function that sets the timer interval
    function setTime(){
    var timerInterval = setInterval(function() {
    secondsLeft--;
    timerEl.textContent = secondsLeft + "!";

// WHEN all the timer reaches 0
// THEN the game is over
    if(secondsLeft === 0) {
    clearInterval(timerInterval);
    alert("GAME OVER");
    }
  
    }, 1000);

   
    }
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
//  HOW TO DO I DO THIS?????
  
// WHEN I answer a question
// THEN I am presented with another question
// PROMPTS: we need prompt for the questions and IF statements to verify the correct answer. 
   
   function playQuiz(){  
// ask the question
    var userChoice1 =window.prompt ("JavaScript has a file extension of? A) .html B) .css C) .js")

// if users presses cancel, end function
    if (!userChoice1) {
        return;
    }

    userChoice1 = userChoice1.toUpperCase();

    if (userChoice1 === "C"){
// increase score if correct
        correct ++;
        alert("Answer is Correct!");
    
        } else if (
        (userChoice1 === "A") || 
        (userChoice1 === "B")
        ){
        alert("Incorrect Answer");
        }
   
        questionTwo();
   
 }


    function questionTwo(){
//we need to ask the question
    var userChoice2 =window.prompt ("In which HTML Element do we put the JavaScript? A) script  B) js C) writing")

//if users presses cancel, end function
    if (!userChoice2) {
    return;
    }

    userChoice2 = userChoice2.toUpperCase();

    if (userChoice2 === "A"){
    correct ++;
    alert("Answer is Correct!");

    } else if (
    (userChoice2 === "B") || 
    (userChoice2 === "C")
    ){
    alert("Incorrect Answer");
    }

    questionThree();

    }

    function questionThree() {
    // ask the question
    var userChoice3 =window.prompt ("What year was JavaScript invented? A) 2005  B) 1995 C) 1985")

    // if users presses cancel, end function
    if (!userChoice3) {
    return;
    }

    userChoice3 = userChoice3.toUpperCase();

    if (userChoice3 === "B"){
    correct ++;
    alert("Answer is Correct!");

    } else if (
    (userChoice3 === "A") || 
    (userChoice3 === "C")
    ){
    alert("Incorrect Answer")

    }

    gameOver()

    }

// WHEN all questions are answered
// THEN the game is over
// THEN I can save my initials and my score
    function gameOver(){
    var name = prompt("GAME OVER! Your score is " + correct + "." + " Enter name:");
    localStorage.setItem('personName', name);
    localStorage.setItem('personScore', correct);
    
    if ( (name)|| 
        (!name)||
        (correct)|| 
        (!correct)  )

    correct= 0
    localStorage.clear;
 alert("Thanks for playing!");

 if (timerCount === 0) {
    return;
  }

}
 



  
