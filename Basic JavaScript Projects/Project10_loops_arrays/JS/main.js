
function countloop() {
    var Digit = "";
    var x = 1;
    while( x < 11) {
        Digit += "<br>" + x;
        x++;
     }
     document.getElementById("loop").innerHTML= "All Done"
};

var Instruments = ["Guitar", "Drums", "Piano", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y; 
function for_Loop(){
    for (Y= 0; Y < Instruments.lenght; Y++) {
        Content += Instruments[Y] + "<br>";
        }
        document.getElementById("List_of_Instruments").innerHTML = Content; 
}
function array_function() {
    var motorcycles = []
    motorcycles[0] = "Buell";
    motorcycles[1] = "harley Davidson";
    motorcycles[2] = "Indian";
    motorcycles[3] = "Suzuki"; 
    document.getElementById("array").innerHTML = "My favorite motorcycle is " + motorcycles[2] + "."
}

//function scope// 
function myFunction() {
    var carName = "Covette";
    document.getElementById("Example").innerHTML = carName;
}
// Variable can be Changed by the program were as Constant can not be changed
//For instance var x = 15 can be altered to mean x = 10 within the same program
// We assign constants using the const keyword as follows:
//   const x = 10; will always be 10 throughout the whole program

// A token is a single compnent in a programing language. There are 5 diferent categoris
//of tokens as follow
// 1. Constants
// 2. identifiers(name that uniquely identify a program element in the - such as variables),
// 3. operators (such as +,*, or-) 
// 4. Seperators (also called "delimmiters" - a sequence of one or more characters that
//     specifies the bouundariees of sections of codde)
// 5. reserved Words (words that have set meanings and uses, and connot be redefined by a developer). 

//somthimes in Dev Tools if there's an error in your code it may state unexpected token - 
// which means there a componet in your code that browser cant execute. 
//Javascript keywords are reserved words in a javaScript which means you cannot use them to name variable or functions.
////////////////////////////////////////////////////////////////////////////////////////////////////////////// 

// the const keyword creates a constant whose scope cam be wither global or local to the block in whichit is declared. 
//the name const is slightly misleading because it doesnt technically create a "constant" 
//(somthing immutable). Basicaly, the value assigned by the cont keyword is not Immutable(it can change) - yet the variable identifer cannot be reassigned
// whereas var contains information the is expected to change, const contains information
// which will never change 
// for example, we'd start by writting ourHTML code as follows: 
///<<<<<<<<<<<=============== See line 23 in index.html
function constant_function() {
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color = "blue"
    Musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML = " the cost of the "
    + Musical_Instrument.type + " was " + Musical_Instrument.price;

} 
 //we created and object with the const keyword and the added a property with a value. We also changed
 //the "black" value for the color prperty to blue
 ///Example///// 

 //const x = 10;
 //x = 2;
 //document.write(x);
// nothing would display with both in there, 
// if we got rid of the one the other would show
// on the other hand this code: EXAMPLE
//  var x = 10 
//  x = 7; 
//  document.write(x)
//would display : 7
//******ADDITONALLY CONST CAN NOT SHAR ITS NAME WITH A VARIABLE OF FUNCTION
// IN THE SAME SCOPE
 
function constant_function2() {
    const bands = {type: "Rock", Name:"Aerosmith", Song:"dude looks like a lady"};
    bands.album = "toys in the attic";
    bands.Song = "walk this way";
    document.getElementById("Constant2").innerHTML = " One of my favorite things to listen to is ", bands.Name + bands.Song;

}
// let vs var
//var x = 82;
//document.write(x);
// {
//  let x =33;
//   document.write ("br" + x);
// }
// the output of this code would be 
//82
//33
//82
// but iff we wrote it ass follows 
// var x = 82
//  document.write (x);
// {
//    var x = 33;
//      document.write ("<br> + x);  
//  }
//      document.write ("<br>" + x); 
//  {
// thw output would be 82,33,33
function foodq() {
 let food = "Big Mac"
document.getElementById("foodanswer").innerHTML = food + " are kind of gross";
}


let moto = {
    make:"Indian",
    model:"Roadmaster",
    year:"2016",
    description : function() {
        return "the motorcyle is a " + this.year + this.make + this.model;
    }
};
document.getElementById("bike").innerHTML = moto.description();
