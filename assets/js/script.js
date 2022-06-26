
var startBtn = document.querySelector("#start-btn");
var pageContentEl =  document.querySelector("#main-content");
var pageTitleEl = document.querySelector("#title");
var counterEl = document.querySelector("#timer");
var viewScoreEl = document.querySelector("#score-page");
console.dir(startBtn)
// End of Quiz Page
var endQuiz = function() {
    pageTitleEl.textContent = "All Done!"
    pageContentEl.textContent = ("Your Final Score is ") 
    
    //  + finalScore)
};

  // Test Timer
  var counter = 5;

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


// timer value when last button is clicked [help]
// var timeRemaining = startTimer.value;
// Test Score
// var finalScore = count;

// var startQuiz = start timer & first quiz question
function startQuiz() {
    console.log("start timer");
    // // test timer starts
    // var startTimer = setTimeout(endQuiz, 76000);
    // call timer countdown
    countdownEl();

}



// connect start button to timer
startBtn.addEventListener("click", startQuiz);