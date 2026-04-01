// Interactivity for Welcome page

const startBtn = document.getElementById("start-btn");

const welcomePage = document.getElementById("welcome-page");
const questions = document.getElementById("questions");
const styling = document.getElementById("styling");
const finalLook = document.getElementById("results");

const continueBtn = document.getElementById("continue-btn");



questions.style.display = "none"; // this will hide the question section until the user clicks the start button
styling.style.display = "none"; // hides styling section until user clicks start button
finalLook.style.display = "none"; // hides final look section until user clicks start button

// start button logic using event listener

startBtn.addEventListener("click", function(){ // when button is clicked, the user will be taken to the next section of the page
    welcomePage.style.display = "none"; // use .styles to hide the welcome page
    questions.style.display = "block"; // block helps to show the next section of the page
    styling.style.display =  "none"; // hides styling section until user clicks the continue button
    finalLook.style.display = "none"; 
})

// continue button logic using onclick function
continueBtn.onclick = function(){
    welcomePage.style.display = "none";
    questions.style.display = "none";
    styling.style.display = "block"; // styling section will appear after user the click continue button
    finalLook.style.display = "none";
}