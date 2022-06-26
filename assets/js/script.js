
var startBtn = document.querySelector("#start-btn");
var pageContentEl =  document.querySelector("#main-content");
var pageTitleEl = document.querySelector("#title");
var counterEl = document.querySelector("#timer");
var viewScoreEl = document.querySelector("#score-page");
console.dir(startBtn)

  // Test Timer
  var counter = 6;


// End of Quiz Page
var endQuiz = function() {
    pageTitleEl.textContent = "All Done!";
    pageTitleEl.className = "end-title";
    pageContentEl.textContent = ("Your Final Score is ");
    var highScoreForm = document.createElement("form");
        highScoreForm.className = "score-form";
        pageContentEl.appendChild(highScoreForm);
    var formText = document.createElement("div");
        formText.innerHTML = "Enter initials: ";
        highScoreForm.appendChild(formText);
    var formInput = document.createElement("input");
        highScoreForm.appendChild(formInput);
    var formBtn = document.createElement("button");
        formBtn.type = "Submit";
        formBtn.innerHTML = "Submit";
        formBtn.className = "quiz-btn";
        highScoreForm.appendChild(formBtn);

    
    //  + finalScore)
};
// timer value when last button is clicked [help]
// var timeRemaining = startTimer.value;
// Test Score
// var finalScore = count;


// Test Timer Countdown
var count = function() {
    if (counter > 0) {
        counter--;
        counterEl.textContent = ("Timer: " + counter);
    }
    else {
        clearInterval(countdownEl);
        counter = 0;
        counterEl.textContent = ("Timer: " + counter);
        endQuiz ();
    }
}
// Counter Countdown Interval
function countdownEl() {
    var countdown = setInterval(count, 1000);
    }
    
// start quiz = start timer & question loop
function startQuiz() {
    console.log("start timer");
    // Start timer countdown
    countdownEl();

    // remove start button
    startBtn.remove();

// // display first question
    // Question text
    pageTitleEl.textContent = "Commonly used data types do NOT include: ";
    // Question formatting
    pageTitleEl.className = "questions";

// display first question answer choices
    // empty pageContentEl
    pageContentEl.textContent = "";
    pageContentEl.className = "answers-box"
    // create ordered answer choice list
    var answerChoices = document.createElement("ol");
    pageContentEl.appendChild(answerChoices);
    answerChoices.className = "answers";
        // create list items
        var answer1 = document.createElement("li");
            answer1.className = "quiz-btn";
            answer1.textContent = "1. strings";
            answerChoices.appendChild(answer1);
        var answer2 = document.createElement("li");
            answer2.className = "quiz-btn";
            answer2.textContent = "2. booleans";
            answerChoices.appendChild(answer2);
        var answer3 = document.createElement("li");
            answer3.className = "quiz-btn";
            answer3.textContent = "3. alerts";
            answerChoices.appendChild(answer3);
        var answer4 = document.createElement("li");
            answer4.className = "quiz-btn";
            answer4.textContent = "4. numbers";
            answerChoices.appendChild(answer4);
   

}

function nextQuestion() {
    console.log("next question");
}
// connect start button to timer
startBtn.addEventListener("click", startQuiz);

// connect question change to answer click
pageContentEl.addEventListener("click", nextQuestion);

// questionArr = [
//     "Commonly used data types do NOT include:",
//     "The condition in an if/else statement is enclosed with ________________.",
//     "Arrays in JavaScript can be used to store ______________.",
//     "String values must be enclosed within ____________ when being assigned to variables.",
//     "A very useful tool used during development and debugging for printing content to the debugger is:"
// ]