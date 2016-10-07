//Variables

var frame = {
        yellowPiece: "Player 1",
        redPiece: "Player 2",
        startingPlayer: "red",
        // takenMsg: "This position is already taken. Please make another choice.",
        // drawMsg: "This game is a draw.",
        // playerPrefix: "Current Player is: ",
        // winPrefix: "The winner is: ",
        countToWin: 4,
    };

var board = [[0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0]];

  $(document).ready(function() {
  $('#slot').click(myFunction);
});

function myFunction() {
  alert('hi');
}

//board[i][j], board[i][j+1], board[i][j+2]...
//board[i][j], board[i+1][j], board[i+2][j]...

 // assign the 0s to the board, assign the 1 and 2 to

//checks to see if there are 4 in a row

//take the first row in the 0s array, and start a for loop that checks the number of each slot in that row, if the number stays the same on each slot 4 times consecutively, then you have a winner, if it changes, you jump to the next row

//if not, continue

//if yes, alert winner

//Tell the game it is time to make the move by clicking on the board

//start with color red

//identfify which column you are clicking

//drop disc to last slot in column

//check to see if slot has disc in it

//if slot has disc in it, place piece on top

//else drop disc to bottom

//looop back to first move

//continue but alternate the color






