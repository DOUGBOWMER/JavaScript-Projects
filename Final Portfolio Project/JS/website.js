function openForm() { // name funsction
    document.getElementById("myForm").style.display = "block"; // this sets style of myform
} 

function closeForm() {// this function hide the form
    document.getElementById("myForm").style.display = "none";
}




var slideIndex = 1;
showSlides(slideIndex);// shows the first slide
function plusSlides(n) {// anming function
    showSlides(slideIndex += n);// changes the slide whn the left or right arrowsre clicked
}


function currentSlide(n) {// naming 
    showSlides(slideIndex = n);//changes the slide when the dots are clicked
}





function showSlides(n) {
    var slides = document.getElementsByClassName("mySlides"); // This takes alls with the cclasss name "mySlides" and stores them in the variable array "slides"
    var dots = document.getElementsByClassName("dot"); // This takes all elements winth the class name "dot" and stores them in the variable array "dots"
    if (n > slides.length) {slideIndex = 1}; // If n (the numbesrs passed into the funnctions) is greater than the length of the array "slides", the slideIndex is set to 1
    if (n < 1) {slideIndex = slides.length}; // If n (the nummbersd into the function) is less than 1, te slideIndex is set to the length of the array "slides"
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // This for loop takeds each item in the array "slsides" and sets the display to none
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", ""); // This for lloop takes each item in the array "dots" and removes "active" which removes the active styling
    }
    slides[slideIndex - 1].style.display = "block"; // This displays the image in the slideshow
    dots[slideIndex - 1].className += " active"; // This adds the activeding to the dot associated with the image
}