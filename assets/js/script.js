
var startBtn = document.querySelector("#start-btn");
var pageContentEl =  document.querySelector("#main-content");
var pageTitleEl = document.querySelector("#title");


var endQuiz = function() {
    pageTitleEl.textContent = "All Done!"
    pageContentEl.textContent = ("Your Final Score is " + finalScore)
};




// timer value when last button is clicked [help]
// var timeRemaining = startTimer.value;
// var finalScore = timeRemaining;

// var startQuiz = start timer & first quiz question
function startQuiz() {
console.log("time's up!");
// test timer
var startTimer = setTimeout(endQuiz, 75000);

}



// connect start button to timer
startBtn.addEventListener("click", startQuiz);