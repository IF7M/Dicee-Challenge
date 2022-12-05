// 1nd solution
// var player1 = (Math.floor(Math.random()*6) + 1);
// // console.log(player1);
//
// function diceePic1(){
//
//   if (player1 === 1){
//     document.querySelector(".img1").setAttribute("src", "images/dice1.png");
//   }
//   else if (player1 === 2){
//     document.querySelector(".img1").setAttribute("src", "images/dice2.png");
//   }
//   else if (player1 === 3){
//     document.querySelector(".img1").setAttribute("src", "images/dice3.png");
//   }
//   else if (player1 === 4){
//     document.querySelector(".img1").setAttribute("src", "images/dice4.png");
//   }
//   else if (player1 === 5){
//     document.querySelector(".img1").setAttribute("src", "images/dice5.png");
//   } else {
//     document.querySelector(".img1").setAttribute("src", "images/dice6.png");
//   }
//
// }
//
// diceePic1();
//
// var player2 = (Math.floor(Math.random()*6) + 1);
// // console.log(player2);
//
// function diceePic2(){
//
//   if (player2 === 1){
//     document.querySelector(".img2").setAttribute("src", "images/dice1.png");
//   }
//   else if (player2 === 2){
//     document.querySelector(".img2").setAttribute("src", "images/dice2.png");
//   }
//   else if (player2 === 3){
//     document.querySelector(".img2").setAttribute("src", "images/dice3.png");
//   }
//   else if (player2 === 4){
//     document.querySelector(".img2").setAttribute("src", "images/dice4.png");
//   }
//   else if (player2 === 5){
//     document.querySelector(".img2").setAttribute("src", "images/dice5.png");
//   } else {
//     document.querySelector(".img2").setAttribute("src", "images/dice6.png");
//   }
//
// }
//
// diceePic2();
//
// function winner(){
//
//   if ( player1 > player2){
//     document.querySelector("h1").innerHTML = "Player 1 Wins";
//   } else if (player1 === player2) {
//     document.querySelector("h1").innerHTML = "Draw!";
//   } else {
//     document.querySelector("h1").innerHTML = "Player 2 Wins";
//   }
//
// }
//
// winner();

// 2nd solution
var randomNo1 = Math.floor(Math.random() * 6) + 1;
document.querySelectorAll("img") [0].setAttribute("src", ("images/dice" + randomNo1 + ".png"));

var randomNo2 = Math.floor(Math.random() * 6) + 1;
document.querySelectorAll("img") [1].setAttribute("src", ("images/dice" + randomNo2 + ".png"));

if (randomNo1 > randomNo2){
  document.querySelector("h1").innerHTML = "Player 1 wins";
} else if (randomNo1 < randomNo2){
  document.querySelector("h1").innerHTML = "Player 2 wins";
} else {
  document.querySelector("h1").innerHTML = "Draw";
}
