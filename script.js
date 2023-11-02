
var score = 0;
var hitrn = 0;
 
function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function getNewHit(){
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent=hitrn;
}

let timer = 60; // Set the initial value of the timer
let timerInt; // Declare a variable to hold the interval ID

function runTimer() {
    timerInt = setInterval(function () {
        if (timer > 0) { 
            timer--;
            document.querySelector("#Tval").textContent = timer; // Use textContent, not textcontent
        } else {
            clearInterval(timerInt); // Use the correct variable name timerInt
            document.querySelector("#bottompannel").innerHTML = '<h1>Game Over</h1>'; // Use single quotes for HTML
        }
    }, 1000);
}

function makeBubble()
{
    var num = "";
for(var i=1;i<=102; i++ )
{
   var rn = Math.floor(Math.random()*10)
    num += `<div class="bubble">${rn}</div>`;
}
document.querySelector("#bottompannel").innerHTML = num;

}

document.querySelector("#bottompannel").addEventListener("click", function(event) {
    var clickednum = Number(event.target.textContent); // "this" refers to the clicked element
    
    if (clickednum === hitrn) {
        increaseScore();
        makeBubble();
        getNewHit();
    }
});

runTimer();
makeBubble();
getNewHit();
