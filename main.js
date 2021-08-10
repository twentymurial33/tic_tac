// Pseudo coding to give us structure

// storing results in a variable
const result = document.querySelector("#results");

//Player -  a string
let currentPlayer = "X";
let squares = ["", "", "", "", "", "", "", "", ""];

//displaying end results
function endGame() {
  let winner = result.textContent;
}
endGame();
// result validation
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
//using the above winConditions we created
function resultValidation() {
  let winningAlways = false;
  for (let i = 0; i < 7; i++) {
    const setConditions = winConditions[i];
    let a = squares[setConditions[0]];
    let b = squares[setConditions[1]];
    let c = squares[setConditions[2]];
    if (a === b && b == c) {
      console.log("round won");
    } else if (a == !b || b == !c) {
      console.log("round lost");
    } else {
      console.log("round lost");
    }
  }
}

resultValidation();

function myReset() {
  let gameActive = true;
  console.log("You clicked me");
}
