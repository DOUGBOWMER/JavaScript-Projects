/////////////BREAK STATMENT////////////
let text = "";// name the variable text and assinging value
for (let i = 0; i < 10; i++) {//assinging variable i giving ti a value of zero and initianing the For loop if it less than 10 it ads 1 to the value
     if (i===3) {break; }// using the conditional statment if to call the break statement if i = 3
text += "the number is " + i + "<br>";// seting the value of text to = a string plus index and then start a new line
}

document.getElementById("breakState"),innerHTML = text // caliing the element id and setting the value of it to Text

///end//
/////////////start CONTINUE STATMENT///////////

for (let i = 0; i < 10; i++) {//using the for statment we set value i to 0 and assing the method to add 1to its value if les than 10
    if (i===3) { continue }// using conditional if statement we day if i=3 the the continue statement is called and counting proceededs
    text += "The number is " + i + "<br>"; // assing the variable text with a new valuea string plus the index = text
}
document.getElementById("continueState").innerHTML = text;// using getdocumentbyelement method to assing the value of text to the element continueState
