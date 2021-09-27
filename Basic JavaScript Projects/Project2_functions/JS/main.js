function colorChangeRed() {             //Defining the Function and naming it
    var str = "This Text Is Red!";      //defininga variable and giving it a string value
    var result = str.fontcolor("red");  //using the font color method on the str variable
    document.getElementById("redText").innerHTML= result;//Putting the value of result into HTMl elemt "redText"
}

function bringTogether() {//naming funciton and defining it
    var sentence = "I am Learnig"; //creating varible assinging it 2 differnet string value wel will be con
    sentence += " alot from this book";//asining 2nd string value
    document.getElementById("Concatenate").innerHTML = sentence; // using the getElementById method to  for concatenatet and assignto sentencavilnle
 }
