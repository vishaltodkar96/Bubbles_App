var shape = document.getElementById("circle");
var hitButton = document.getElementById("hit");
var resetButton = document.getElementById("reset");

hitButton.addEventListener("click", ()=>{
    shape.setAttribute("class","circleHit");
})

resetButton.addEventListener("click", ()=>{
    shape.setAttribute("class","circle");
})