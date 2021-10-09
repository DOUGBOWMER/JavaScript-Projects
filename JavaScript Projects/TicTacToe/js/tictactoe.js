//This variable keeps travk of whose turn it is. 
let activePlayer = 'x'
//this array stores an array of moves. We use this to determine win conditions. 
let selectedSquares = [];

//this function is for placing an x or o in a square. 
function placexOrO(squareNumber) {
    //This condition ensures a square hasn't been selected already.
    //the ,some() mthod is used to check each element of selected Square array
    //to see if it contains the square number clicked on. 
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        //this variable retrieves the html element id that was clicked. 
        let select = document.getElementById(squareNumber);
        //This condition checks who's tuen it is 
        if (activePlayer === 'X') {
            //if activePlayer is equl to 'x', the x.ping is placed int the HTML
      }else {
            //ci activePLayer is equal to "O", the o.png is placed in HTML
            select.style.backgroundImage = 'url(images/0.png")';
        }   //active player may only be 'X,'the x.png is placed in THML
            //squareNUmber and activePlayer are concatenated together and added to the array
            selectedSquares.push(squareNumber = activePlayer);
            //this calls a function to check for any win conditions.
            checkWinConditions();
            //this condition is for changing the active player.

            if (activePlayer === 'X') { 
                //if active player is "X" change it to "O"
            activePlayer = 'O';
                // of active player is anything other than "X"
        }else{
            //Change the activePlayer to 'X'
            activePlayer = "X";
            }
       
            //this function plays placement sound.
            audio('../media/place.mp3')
                //this condition checks to see if it is computers turn
            if(activePlayer === "O") {
                //Function disable clicking for the computer choice
                disableClick();
                setTimeout(function (){ computersTurn(); }, 1000)
            }
            //returning true is need for our computers()
       return true;
       //this function results in a random square being selected
       function computersTurn() {
        //this boolean is needed for our while loop.
        let success = false;
        //this variable stores a random number 0-8.
        let pickASquare;
        //this condition allowd our while loop to keep trying if a square is selected already.
        while(!success) {
            //a random nummber between 0 and 8 is selected.
            pickASquare = String(Math.floor(Math.random() * 9));
            //if the random numnerevaluated returns true, the square hasn't been selected yet.
            if (placexOrO(pickASquare)) {
                //this line calls the function.
                placexOrO(pickASquare);
                //this changes our boolean and ends the loop
                success = true;
            };
        }


       }
       
    }
}   
