
// I spent 4 days on this. I ran out of time to finish high score stuff.


var startBtn = document.querySelector("#start-btn");
var pageContentEl =  document.querySelector("#main-content");
var pageTitleEl = document.querySelector("#title");
var counterEl = document.querySelector("#timer");
var viewScoreEl = document.querySelector("#score-page");
var mainEl = document.querySelector("#main");
var bodyEl = document.querySelector("#body");

var currentQuestionIndex = 0;

var questionArr = [
    {
    question: "Commonly used data types do NOT include:",
    answers: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
    correctAnswer: "3. alerts" 
    },
    {
    question: "The condition in an if/else statement is enclosed with ________________.",
    answers: ["1. quotes", "2. curly brackets", "3. parentheses", "4. square brackets"],
    correctAnswer: "3. parentheses" 
    },
    {
    question: "Arrays in JavaScript can be used to store ______________.",
    answers: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
    correctAnswer: "4. all of the above" 
    },
    {
    question: "String values must be enclosed within ____________ when being assigned to variables.",
    answers: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
    correctAnswer: "3. quotes" 
    },
    {
    question:  "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: ["1. JavaScript", "2. terminal/bash", "3. for loops", "4. console log"],
    correctAnswer: "4. console log"
    }
]

  // Test Timer
var counter = 76;
var countdownInterval;

// start quiz = start timer & question loop
function count() {
    if (counter > 0) {
        counter--;
        counterEl.textContent = ("Timer: " + counter);
    }else{
        clearInterval (countdownInterval);
        counter = 0;
        counterEl.textContent = ("Timer: " + counter);
        endQuiz();
        return;
    }
};


// display & loop through questions on click
function generateQuestion() { 
// generate questions
    var currentQuestion = questionArr[currentQuestionIndex];
    if (currentQuestionIndex < questionArr.length) {
        // Question text
        pageTitleEl.textContent = currentQuestion.question;
        pageTitleEl.className = "questions";
    // generate answer choices
        //  empty pageContentEl
        pageContentEl.textContent = "";
        pageContentEl.className = "answers-box"

        // create ordered answer choice list
        var answerChoices = document.createElement("ol");
        pageContentEl.appendChild(answerChoices);
        answerChoices.className = "answers";

            // create list items
        var answerChoice1 = document.createElement("li");
            answerChoice1.textContent = currentQuestion.answers[0];
            answerChoice1.className = "quiz-btn";
            answerChoices.appendChild(answerChoice1);
        var answerChoice2 = document.createElement("li");
            answerChoice2.textContent = currentQuestion.answers[1];
            answerChoice2.className = "quiz-btn";
            answerChoices.appendChild(answerChoice2);
        var answerChoice3 = document.createElement("li");
            answerChoice3.textContent = currentQuestion.answers[2];
            answerChoice3.className = "quiz-btn";
            answerChoices.appendChild(answerChoice3);
        var answerChoice4 = document.createElement("li");
            answerChoice4.textContent = currentQuestion.answers[3];
            answerChoice4.className = "quiz-btn";
            answerChoices.appendChild(answerChoice4);
        
        currentQuestionIndex++;

        // connect question change to answer click
        answerChoices.addEventListener("click", generateQuestion);
        
        var previousQuestionIndex = currentQuestionIndex-2;
        var previousQuestion = questionArr[previousQuestionIndex];
        var questionAnswer = previousQuestion.correctAnswer;

    //  match answer choice to correct answer
        if (event.target.textContent == questionAnswer) {
            console.log("correct");
            var result = document.createElement("p");
                result.textContent = "Correct!";
                result.className =  "results";
                pageContentEl.appendChild(result);
        } else { 
            if (counter > 10) {
                counter = counter - 10;
            }else{
                counter = 0;
                clearInterval(countdownInterval);
                endQuiz();

            }

            var result = document.createElement("p");
                result.textContent = "Wrong!";
                result.className =  "results";
                pageContentEl.appendChild(result);
        }
                  
    } else {
        clearInterval(countdownInterval);
        endQuiz();
    }    
}   

function startQuiz() {
     // remove start button
    startBtn.remove();
    // start timer
    console.log("start timer");
    // Counter Countdown Interval
    countdownInterval = setInterval(count, 1000);
        // Test Timer Countdown
     // display first question 
   generateQuestion();
};


// End of Quiz Page
function endQuiz() {
    // page title
    pageTitleEl.textContent = "All Done!";
    pageTitleEl.className = "end-title";
    // Test score
    var finalScore = counter;
        console.log("final score: " + finalScore);
        pageContentEl.textContent = ("Your Final Score is " + finalScore);
        pageContentEl.className = "end-text";
        counterEl.textContent = ("Timer: " + counter);
    // high score form
    var highScoreForm = document.createElement("form");
        highScoreForm.className = "score-form";
        pageContentEl.appendChild(highScoreForm);
    var formText = document.createElement("div");
        formText.innerHTML = "Enter initials: ";
        highScoreForm.appendChild(formText);
    var formInput = document.createElement("input");
        formInput.type = "text";
        formInput.className = "input-box"
        highScoreForm.appendChild(formInput);
    var formBtn = document.createElement("button");
        formBtn.type = "Submit";
        formBtn.innerHTML = "Submit";
        formBtn.className = "quiz-btn";
        highScoreForm.appendChild(formBtn);
    // main tag formatting
        mainEl.className = "end-page"
        
        highScoreForm.addEventListener("submit", saveScore)
        
        function saveScore(event) {
            // remove form
            highScoreForm.remove();
            // prevent refresh
            event.preventDefault();
            // change page title & body
            pageTitleEl.textContent = "High Score";
            pageContentEl.innerHTML = "";
            
            // create playerScore variable
            var playerScore = formInput.value + "-" + finalScore;
            // get scores from storage
            var highScores = localStorage.getItem("score");

            // add player score to the scores from storage   
            if (highScores) {
                highScores = highScores + "," + playerScore;
            } else {
                highScores = playerScore;
            }
            // push the new string list to storage for safe keeping
            localStorage.setItem("score", highScores);

        // display string as list
            // pull complete list of scores from storage
            var highScoreStr = localStorage.getItem("score");
            // split the string at each comma
            var displayScoreArr = highScoreStr.split(",").sort(function(a, b){
                return parseInt(b.split("-")[1]) - parseInt(a.split("-")[1]);
            });
            // create ordered list
            var scoreList = document.createElement("ol");
                pageContentEl.appendChild(scoreList);
                function createListItem () {
                    // dynamically create list items for each score
                    for (var i = 0; i < displayScoreArr.length; i++) {
                        var scoreListItem = document.createElement("li");
                        scoreListItem.innerHTML = displayScoreArr[i];
                        JSON.stringify(scoreListItem);
                        scoreList.appendChild(scoreListItem);
                    }; 
                    }
                    createListItem();
            // buttons flex box
            var buttons = document.createElement("div");
                buttons.className = "button-box";
                pageContentEl.appendChild(buttons);

            // Go back button = back to home page
            var goHome = document.createElement("button");
                goHome.textContent = "Go back";
                goHome.className = "quiz-btn";
                goHome.id = "backHome"
                buttons.appendChild(goHome);
            // clear scores button empties local storage and clears score list display
            var clearScores = document.createElement("button");
                clearScores.textContent = "Clear high scores";
                clearScores.className = "quiz-btn";
                clearScores.id = "clears-scores"
                buttons.appendChild(clearScores);

            // go home or clear based on target click event
            buttons.addEventListener("click", scorePageClick);
                function scorePageClick(event) {
                    if (event.target.id == "backHome") {
                        console.log(event.target.id);
                        document.location.reload();
                    } else {
                        console.log("clear");
                        localStorage.clear();
                        scoreList.innerHTML = "";
                        console.log(event.target);
                    }
                };      
        } 
};
    
// view high scores button 
viewScoreEl.addEventListener("click", highScorePage);
// change page to display high scores
function highScorePage() {
    clearInterval(countdownInterval);
    var scorePageEl = document.createElement("div")
    scorePageEl.className = "score-page"
    bodyEl.appendChild(scorePageEl);

      // change page title & body
    pageTitleEl.textContent = "High Score";
    pageTitleEl.className = "score-title";
    pageContentEl.textContent = "";
    pageContentEl.className = "end-text";
          // remove start button
    startBtn.remove();
    
// display string as list
    // pull complete list of scores from storage
    var highScoreStr = localStorage.getItem("score");
    // split the string at each comma
    var displayScoreArr = highScoreStr.split(",").sort(function(a, b){
        return parseInt(b.split("-")[1]) - parseInt(a.split("-")[1]);
    });
    // create ordered list
    var scoreList = document.createElement("ol");
        scoreList.className = "score-list";
        pageContentEl.appendChild(scoreList);
        function createListItem () {
            // dynamically create list items for each score
            for (var i = 0; i < displayScoreArr.length; i++) {
                var scoreListItem = document.createElement("li");
                scoreListItem.innerHTML = displayScoreArr[i];
                JSON.stringify(scoreListItem);
                scoreList.appendChild(scoreListItem);
            }; 
            }
            createListItem();

    // buttons flex box
    var buttons = document.createElement("div");
        buttons.className = "score-btns";
        pageContentEl.appendChild(buttons);
    // Go back button = back to home page
    var goHome = document.createElement("button");
        goHome.textContent = "Go back";
        goHome.className = "quiz-btn";
        goHome.id = "backHome"
        buttons.appendChild(goHome);
    // clear scores button empties local storage and clears score list display
    var clearScores = document.createElement("button");
        clearScores.textContent = "Clear high scores";
        clearScores.className = "quiz-btn";
        clearScores.id = "clears-scores"
        buttons.appendChild(clearScores);

    // go home or clear based on target click event
    buttons.addEventListener("click", scorePageClick);
    function scorePageClick(event) {
        if (event.target.id == "backHome") {
            console.log(event.target.id);
            document.location.reload();
        } else {
            console.log("clear");
            localStorage.clear();
            scoreList.innerHTML = "";
            console.log(event.target);
        }
    };      
};

    // connect start button to timer
    startBtn.addEventListener("click", startQuiz);