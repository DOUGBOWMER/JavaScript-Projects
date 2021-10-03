function countdown() { // Naming the Function 
     var seconds = document.getElementById("seconds").value;// Giving value of input to the variable seconds
     
     function  tick() {// Naming the function
         seconds = seconds - 1; // creating the countdown attribute
         timer.innerHTML = seconds - 1; /// setting the time up for the timer to operate correctly 
         var time = setTimeout (tick,3000); //causing the the timer to pause for 1 sec before changing
        if (seconds == -1) { // conditional for when the timer reach 0
            alert("Times Up!");// displays the Alert window
            clearTimeout(time);// clear the tine  attribute
            timer.innerHTML = ""// fetches the user input and remove it 

        } 
        
        
    }
    tick();
}
//slideshow//
var slideIndex = 1;
showSlides(slideIndex);

//Next previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}
//thumbnail image controls
function showsSlides(n) {
 showsSlides(slideIndex = n);   
}
    
    
function showSlides(n) {
    var i; 
    var slides = document.getElementsByClassName("mySlides")
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex= 1}
    if (n < 1) {slideIndex = slides.length}
    for (i=0; i < slides.length; i++) {
        slides[i].style.display = "none";
}

for (i=0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active" ,"" );

}

slides[slideIndex-1].style.display = "block";
dots[slideIndex-1].classname += " active"; 
}