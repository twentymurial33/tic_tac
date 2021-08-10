// Pseudo coding to give us structure

<<<<<<< HEAD
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
=======
//Global Variables
const winConditions = [
>>>>>>> 7d978acb12a47cb764298a1b2ef371642a7cd94a
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [0, 4, 8],
  [2, 5, 8],
  [2, 4, 6],
];
<<<<<<< HEAD
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
=======
let board=[]
let squares = "";
let gameOver = false;
let result = document.getElementById("results");


//functions
function myFunc(){
  for(let i=0;i<9;i++){
    board.push('');
   
  }
}

myFunc();
>>>>>>> 7d978acb12a47cb764298a1b2ef371642a7cd94a

function myReset() {
  let gameActive = true;
  console.log("You clicked me");
}
<<<<<<< HEAD
=======
endGame();

// function for checking winner
function checkWinner() {
  winConditions.forEach((item,index)=>{
   if(myFunc.board === myFunc.board[0])
     console.log("I have lost")
   })
  }

checkWinner()


//Declare a Tie 

>>>>>>> 7d978acb12a47cb764298a1b2ef371642a7cd94a
