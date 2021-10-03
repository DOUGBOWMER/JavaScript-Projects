function countdown() { // Naming the Function 
     var seconds = document.getElementById("seconds").value;// Giving value of input to the variable seconds
     
     function  tick() {// Namingt the function
         seconds = seconds - 1; // creating the countdown attribute
         timer.innerHTML = seconds - 1; /// setting the time up for the timer to operate correctly 
         var time = setTimeout (tick,1000); //causing the the timer to pause for 1 sec before changing
        if (seconds == -1) { // conditional for when the timer reach 0
            alert("Times Up!");// displays the Alert window
            clearTimeout(time);// clear the tine  attribute
            timer.innerHTML = ""// fetches the user input and remove it 

        } 
        
        
    }
    tick();
}