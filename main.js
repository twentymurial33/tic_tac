//if you get 3 in a row then you win
// players have 9 squares
// 2 players are playing the game

//Global Variables
let winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [0, 4, 8],
  [2, 5, 8],
  [2, 4, 6],
];
let squareCount = 9;
let squares = "";
let gameOver = false;
let result = document.getElementById("results");

//functions

function myFunc() {}

function endGame() {
  let winner = result.textContent;
  console.log(winner);
}

endGame();
