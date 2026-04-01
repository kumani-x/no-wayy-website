// Interactivity for Welcome page

const startBtn = document.getElementById("start-btn")

startBtn.addEventListener("click", function(){ // when button is clicked, the user will be taken to the next section of the page
    document.getElementById("welcome-page").style.display = "none"; // use .styles to hide the welcome page
    document.getElementById("questions").style.display = "block"; // block helps to show the next section of the page
    
})