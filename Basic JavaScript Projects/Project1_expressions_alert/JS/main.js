window.alert("Howdy Parnter")  // opens an alert window and display text "howdy Partner"
var A ="This is a Script"; // assings a var A and givve it a value of "this is a script"
document.write(A); // call the statement to look for a and bring back value = this is a script
document.write("this is a string\"the cat was a dog and i know hoe to use them")//example of writting comas and parenthsis inside of a sting value
document.write("\"Be who you are and say what you feel,"// the \ notes to the program that the " folloing the \ is apart of a string
+ "because thos who mind don\'t mattter and thos3 who matterdon\'t mind.\""// same as above regarding \\
+ "-Dr Seuss");// finish of string variable assingment ending with ); 
var D =("this" + "is awesome");// assinging value of D is equal to This + awesome
document.write(D);// statment asking the program to display the value of D on the display

var family = "the Arexinis", Dad = "Jerimiah", Mom = "Hermonie",// naming multiple variables at a time
Daughter = "Penny", Son = "Zorro";// end of the above line
document.write(Dad); //telling program to displau the value of the variable Dad on the display

var car = "Maseratti", bus = "Bluebird", daniel = " cool hand Luke", moto = "Indian Roadmster";//assining values to variables car, bus and daniel
document.write(moto) //asking for program to display value for moto on screen
var blues = "I have the Blues.";// assinging the value of "I have the blues" to variable blues
var blue = blues.fontcolor("blue");// assigns the color to variable using fontcolor()method
document.write(blue);//asking the program to display the value for the variable blue
var invetory = "number of cars"; //setting a value for var inventory, writting an expression
document.write(inventory);//displaying the value of inventory
// fbelow is a function//
function My_First_Function() {          //Defining a function and naming it
    var str = "this text is green";     //Defining a variable and giving it a
                                        //string value 
    var result = str.fontcolor("green");//using the fontcolor method on
                                        //str variable
    document.getElementById("Green_text").innerHTML=result;//putting the value
                                        //of result into HTML element that has id  "Greent_text" 
}
var B="Its a wonderful day in the neighbor hood a wonerfull day in the neighbor hood, SO";//assinging variable b to string value
var C="won't you be my neighbor";//assinging variable c to string value
document.write(B+C)// using document write method to concatenate variable B and C