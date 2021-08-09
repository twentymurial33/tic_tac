//if you get 3 in a row then you win
// players have 9 squares
// 2 players are playing the game

//Global Variables
const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [0, 4, 8],
  [2, 5, 8],
  [2, 4, 6],
];
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

function endGame() {
  let winner = result.textContent;
  console.log(winner);
}
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

