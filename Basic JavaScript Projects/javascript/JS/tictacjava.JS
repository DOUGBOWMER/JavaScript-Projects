//This variable keeps track of whose turn it is.
let activePlayer = 'X' 
//This array  store an array of moves. we use thisto determine win conditions.
let selectedSquares = [];

//this function is for placing an x or o in a square. 
function placeXOrO(squareNumber) {
    //This condition ensures a square hasn't been selected already.
    // The .some() method is used to check each element of selectedSquare array
    //to see if it contains the square number clicked on
    let select = document.getElementById(squareNUmber);
    if (!selectedSquares.some(element => element.includes('squareNUmber'))) {
        //THis Variable retrives the HTML element id that was clicked
        let select = document.getElementById(squareNumber);
        //This condition checks who's turn it is.
        if (activePlayer === 'X') {
    
            }else {
                //if active player may only be 'X', the x.png is placed in html.
                select.stylebackgroundImage = 'url("images/x.png';
                //Active player amy only be 'X' or 'O' so if not 'X' it must be 'O'
            }
            //squareNUmber and activePlayer are concatenated together and added to array.
             selectedSquares.push(squareNumber + activePlayer);
            //This calls a function to check for any win conditions.
             checkWinConditions();
            //This condition is for changing the active player.
            if (activePlayer === 'X') {
                //if active player is 'X' change it 'O'.
                activePlayer= 'O';
            //if active player is anything other tha 'X'.
            } else {
                //Change the activePlayer to 'X'
                activePlayer = 'X';
            }

            //This function plays placement of sound. 
            Audio('./madia/place.mp3');
            //this ondition checks to see if it is computers turn.
            if(activePlayer === 'O'){
                //This function disable clicking for computer choice.
                disableCLick();
                //This function waits 1 second before before computer places image and enable click. 
                setTimeout(function () { computersTurn(); }, 1000)
            }
            //Returning true is needed for our computersTurn() function to work
        
        return true;
    }
    //This function results in a random square being selected.
    function computerTurn() {
        //This boolean is needed for our while loop. 
    let success = false;
    //This variable store a random number 0-8.
    let pickASquare;
    //This condition allows our while loop to keep trying if a square is selected already. 
    while(!success){
        //A random number between o and 8 selceted. 
        pickASquare = String(Math.floor(Math.random() * 9));
        //if the random number evaluated returns true, the square hasn't been selected yet. 
        if (placeXOrO(pickASquare)) {
            //This inline calls the function. 
            placeXOrO(pickASquare);
            //this Changes our boolean and ends the loop.
            success - true;
            };
        }
    }
}