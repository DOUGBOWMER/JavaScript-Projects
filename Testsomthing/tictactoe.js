//This variable keeps track of whose turn it is.
let activePlayer = 'X'; 
//This array  store an array of moves. we use this to determine win conditions.
let selectedSquares = [];



//this function is for placing an x or o in a square. 
function placeXOrO(squareNumber) {
    //This condition ensures a square hasn't been selected already.
    // The .some() method is used to check each element of selectedSquare array
    //to see if it contains the square number clicked on
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        //THis Variable retrives the HTML element id that was clicked
        let select = document.getElementById(squareNumber);
        //This condition checks who's turn it is.
        if (activePlayer === 'X') {
            //if activePLayer is equal to 'X', the x.png is placed in HTML.
            select.style.backgroundImage = 'url("/images/x.png")';
            //Active player may only be 'X' or 'O' so, if not 'X' it must be 'O'
            } else {
                // if activePlayer is equal to 'O', the o.png is placed in HTML.
                select.style.backgroundImage = 'url("images/o.png")';
            }
            //squareNUmber and activePlayer are concatenated together and added to array.
             selectedSquares.push(squareNumber + activePlayer);
            //This calls a function to check for any win conditions.
             checkWinConditions();
            //This condition is for changing the active player.
            if (activePlayer === 'X') {
                //if active player is 'X' change it 'O'.
                activePlayer = 'O';
            //if active player is anything other tha 'X'.
            } else {
                //Change the activePlayer to 'X'
                activePlayer = 'X';
            }

            //This function plays placement of sound. 
            audio('./media/place.mp3');
            //this ondition checks to see if it is computers turn.
            if (activePlayer === 'O'){
                //This function disable clicking for computer choice.
                disableClick();
                //This function waits 1 second before before computer places image and enable click. 
                setTimeout(function () { computersTurn(); }, 1000)
            }
            //Returning true is needed for our computersTurn() function to work
        return true;
    }
    //This function results in a random square being selected.
    function computersTurn() {
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
            success = true;
            };
        }
    }
}

//This function parses the selectedSquares array to search for win conditions.
//drawWinLine function is called to draww line if condition is met.
function checkWinConditions() {
    // x 0, 1, 2 condition. 
    if      (arrayIncludes('0X', '1X', '2X')) { drawWinLine(50, 100, 558, 100) }
    // x 3, 4, 5 condition. 
    else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304) }
    //X 6, 7, 8 condition.
    else if (arrayIncludes('6X', '7X','8X')) {drawWinLine(50, 508, 558, 508) }
    //X 0. 3, 6 condition.
    else if (arrayIncludes('0X', '3X', '6X')) {drawWinLine(100, 50, 100, 558) }
    //X 1, 4,7,
    else if (arrayIncludes('1X', '4X', '7X')) {drawWinLine (304, 50, 304, 558)}

    else if (arrayIncludes('2X', '5X', '8X')) {drawWinLine (508, 50, 508, 558)}

    else if (arrayIncludes('6X', '4X', '2X')) {drawWinLine (100, 508, 510, 90)}

    else if (arrayIncludes('0X', '4X', '8X')) {drawWinLine (100, 100, 520, 520)}

    else if (arrayIncludes('0O', '1O', '2O')) {drawWinLine (50, 100, 558, 100)}

    else if (arrayIncludes('3O', '4O', '5O')) {drawWinLine (50, 304, 558, 304)}

    else if (arrayIncludes('6O', '7O', '8O')) {drawWinLine (100, 50, 100, 558)}

    else if (arrayIncludes('0O', '3O', '6O')) {drawWinLine (304, 50, 304, 558)}

    else if (arrayIncludes('2O', '5O', '8O')) {drawWinLine (508, 50, 508, 558)}

    else if (arrayIncludes('6O', '4O', '2O')) {drawWinLine (100, 508, 510, 90)}

    else if (arrayIncludes('0O', '4O', '8O')) {drawWinLine (100, 100, 520, 520)}


    else if (selectedSquares.length >= 9) {
//this fuction plays the tie game sound
        audio('media/tie.mp3');
//this function sets a.3 second timer berfore the resetGame is called
        setTimeout(function () { resetGame(); }, 1000);
    }
//This function checks is an array includes 3 strings. It is used to checl fo //each Win condithion
    function arrayIncludes(squareA, squareB, squareC) {
//These 3 variable will be used to check for 3 in a orw. 
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC)
    //if the 3 variable we pass are all included in our array true is 
    //returned and our else if condition executes the drawWinLine funciton.
    if (a === true && b === true && c === true) {return true};
    }    
}

// this function makes our body element temporarily unclikable. 
function disableClick() {
    // this makes our body unclickable. 
    body.style.pointerEvents='none';
    //this amkes our body clickable agaian after 1 second. 
    setTimeout(function() {body.style.pointerEvents = 'auto';}, 1000);
}

//this function takes a string parameter of the path you set earlier fo 
//placement sound('./media/place.mp3')
function audio(audioUrl) {
    //we create a new audio object and we pass the patth as a parameter. 
    let audio= new Audio(audioUrl);
    audio.play(); 

}

//this function utilizes html canvas to draw win lines. 
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    //this line access our html canvas element.
const canvas = document.getElementById('win-lines')
    //this line gives us access to methods and properties to use on the canvas
const c = canvas.getContext('2d');
    //this line indicates where the start of a lines x axis is.
let x1 = coordX1,
    //this line indicates wher the start of a lines y axis is . 
    y1 = coordY1,
    //this line indicates wher the end of a lines x axis is/ 
    x2 =coordX2, 
    //this line indicates where the end of a lines y axis is .
    y2 = coordY2,
    //this cariable stores temporary x axis data we update in our animation loop. 
    x = x1,
    //this variable  store temporary y axis data we update in our animation loop. 
    y = y1;


//this funtion intereacts with the canvas 
function animateLineDrawing() {
    //this cariable creates a loop.
    const animationLoop = requestAnimationFrame(animateLineDrawing);
    //this method clears content from last loop interation
    c.clearReact(0, 0, 608, 608)
    //this method starts a new path
    c.beginPath();
    //this method moves us to a starting point for our line. 
    c.moveTo(x1, y1)
    // this method indicates the endstarting point in our line. 
    c.lineTo(x, y)
    //This method sets the width of our line. 
    c.lineWidth = 10; 
    //this method sets the color of our ine. 
    c.strokeStyle = 'rgba(70, 255, 33, 1)';
    //this method draws everything we laid out above
    c.stroke();
    // this condition checks if weve reached the endpoint 
    if (x1 <= x2 && y1 <= y2) {
        ///this conditions adds 10 to the previous endpoint. 
        if (x < x2) { x += 10; }
        // this conditions adds 10 to the previous end y point 
        if (y < y2) { y += 10;}
        //this condition cancels our animation loop 
        //if we  have reache the end points. 
        if (x >= x2 && y >= y2) { cancelAnimationFrame(animationtLoop);}
    
}
// this condition is simililar to the one above. 
//this necessay for the 6, 4, 2 win condition
if (x1 <= x2 && y1 >= y2) { 
    if (x < x2) { x += 10;}
    if (y > y2) {y -= 10; }
    if ( x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); }    
    }
}
//this function clears oour our cavas0 after our win line is drawn.
function clear() {
    //this liine starts our animation loop.
    const animation = requestAnimationFrame(clear);
    //this line clears our canvas. 
    c.clearReact(0, 0, 608, 608);
    //this line stops our aniamtion loop. 
    cancelAnimateFrom(aniamationLoop); 
}

//this line disallows clicking while the Win Sound is Placing
disableClick(); 
//this line plays the win sounds.
audio('/media/winGame.mp3');
//This line calls our main animation loop. 
animateLineDrawing();
//this line waits 1 second. Then, clears canvas, resets game, adn allows clicking again.
setTimeout(function () { clear(); resetGame(); } , 1000); 
}
//this funtcion resets the game in the event of a tie or a win. 
function resetGame() {
    //this for loop iterates through each html square element 
    for (let i = 0; i < 9; i++) {
        //this variable gets the html element of i
        let square = document.getElementById(String(i))
        //this removes our elements background image. 
        square.style.backgroundimage = '' 
    }
//this resets our array so it is empty and we can start over. 
selectedSquares = []; 

}