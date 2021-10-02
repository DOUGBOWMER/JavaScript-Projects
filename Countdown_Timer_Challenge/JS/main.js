function countdown() {
     var seconds = document.getElementById("seconds").value;
     
     function  tick() {
         seconds = seconds - 1; 
         timer.innerHTML = seconds - 1; 
         var time = setTimeout (tick,1000); 
        if (seconds == -1) { 
            alert("Times Up!");
            clearTimeout(time);
            timer.innerHTML = ""

        } 
        
        
    }
    tick();
}