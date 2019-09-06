// some JavaScript codes for Dice Game

var randomNumber1 = Math.floor(Math.random() * 6) + 1 // 1-6

//selecting for image1 left side
var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png ---- dice6.png

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png ---- images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

//changing for 2nd image random for right side img.
var randomNumber2 = Math.floor(Math.random() * 6) + 1

var randomImageSource2 = "images/dice" + randomNumber2 + ".png"

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2)


//last if()
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player1 wins!🚩"
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player2 Wins!!🚩"
} else {
    document.querySelector("h1").innerHTML = "☺️ MathDraw ☺️";
}