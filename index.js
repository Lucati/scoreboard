let cardHome = document.getElementById("card-home");
let cardGuest = document.getElementById("card-guest");
let btn = document.getElementsByTagName("button");
let btnHomeAdd1 = document.getElementById("btn-home-add-1");
let btnHomeAdd2 = document.getElementById("btn-home-add-2");
let btnHomeAdd3 = document.getElementById("btn-home-add-3");    
let btnGuestAdd1 = document.getElementById("btn-guest-add-1");
let btnGuestAdd2 = document.getElementById("btn-guest-add-2");
let btnGuestAdd3 = document.getElementById("btn-guest-add-3");
let btnReset = document.getElementById("btn-reset");    
let homeScoreEl = document.getElementById("home-score");
let guestScoreEl = document.getElementById("guest-score");
let homeScore = 0;
let guestScore = 0;


btnHomeAdd1.addEventListener("click", function() {
    homeScore += 1;
    homeScoreEl.textContent = homeScore;
    highScore()
});
btnHomeAdd2.addEventListener("click", function() {
    homeScore += 2;
    homeScoreEl.textContent = homeScore;
    highScore()
});             
btnHomeAdd3.addEventListener("click", function() {
    homeScore += 3;
    homeScoreEl.textContent = homeScore;
    highScore()
});

btnGuestAdd1.addEventListener("click", function() {
    guestScore += 1;
    guestScoreEl.textContent = guestScore;
    highScore()
});            
btnGuestAdd2.addEventListener("click", function() {
    guestScore += 2;
    guestScoreEl.textContent = guestScore;
    highScore()
});             
btnGuestAdd3.addEventListener("click", function() {
    guestScore += 3;
    guestScoreEl.textContent = guestScore;
    highScore()
}); 
btnReset.addEventListener("click", function() {
    homeScore = 0;
    guestScore = 0;
    homeScoreEl.textContent = homeScore;
    guestScoreEl.textContent = guestScore;
    highScore()
});

function highScore() {
    if(homeScore > guestScore){
        cardHome.classList.add("card--active");
        cardGuest.classList.remove("card--active");
    } else if(guestScore > homeScore){  
        cardGuest.classList.add("card--active");    
        cardHome.classList.remove("card--active");
    }
    else {
        cardHome.classList.remove("card--active");
        cardGuest.classList.remove("card--active");
    }
};