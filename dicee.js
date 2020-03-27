
var dieCount = 0;

//DICE Random Num Function
function rollDie(n){
  var randNum = Math.floor(Math.random() * 6) + 1;
  var randomDiceImage = "dice" + randNum + ".png";
  var randomImageSource = "images/" + randomDiceImage;
  var playDice = document.querySelectorAll("img")[n];
  playDice.setAttribute("src", randomImageSource);
}

function addAnotherDie(){
  if(dieCount < 5){
    dieCount++;
    document.querySelectorAll("img")[dieCount].style.opacity = "1";
  }
}

function subAnotherDie(){
  if(dieCount > 0){
    document.querySelectorAll("img")[dieCount].style.opacity = "0.1";
    dieCount--;
  }
}

function rollAllDice(){
  rollDie(0);
  rollDie(1);
  rollDie(2);
  rollDie(3);
  rollDie(4);
  rollDie(5);
}

document.getElementById("addDie").addEventListener("click", addAnotherDie);
document.getElementById("minusDie").addEventListener("click", subAnotherDie);
document.getElementsByTagName("button")[0].addEventListener("click", rollAllDice);

// if(randNum > randomNumber2){
//   document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
// } else if(randomNumber1 < randomNumber2){
//   document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
// } else{
//   document.querySelector("h1").innerHTML = "Draw!";
// }
