//Variables

var frame = {
        yellowPiece: "Player 1",
        redPiece: "Player 2",
    };

//Create the Board
var board = [[0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0]];

//Start the game with a function calling the empty slot
var currentPlayer = 1;

  $(document).ready(function() {
  $('.emptySlot').click(myFunction);

// takeTurn (3);

// currentPlayer=2;



// currentPlayer = 1;

// takeTurn(2);

// drawFunction();

});

function myFunction() {
  //alert($(this).data("col"));
  takeTurn($(this).data("col"));
  drawFunction();
}

//Check to see if there was a winner
function drawFunction () {
  for(var i = 0; i < 6; i++)
  {
    for(var k = 0; k < 7; k++)
//
    {
      if(board[i][k]===1){
        $(".gameColumn").eq(k).find(".slot").eq(i).addClass("redPuck");
      } else if (board[i][k]===2) {
        $(".gameColumn").eq(k).find(".slot").eq(i).addClass("yellowPuck");
      }
    }
  }
}

//
function takeTurn(col) {
  if (col > 6 || board[0][col]!==0) {
    return false;
  }
  for(var i = 5; i >= 0; i--) {
    if(board[i][col]===0) {
      if (currentPlayer===1) {
        currentPlayer = 2;
      } else {
        currentPlayer=1;
      }
      return board [i][col]=currentPlayer;
    }
  }
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
