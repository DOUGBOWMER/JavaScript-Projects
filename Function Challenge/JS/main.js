//when user input their temperature the function below convert it anad returns temperautre in Celsius*/
function temperatureConverter(valNum) {//naming the function and setting the value to valNum//
    valNum= parseFloat(valNum);//here i am naming a variable and parsing the string received from the input into a number, had to 
    //research this knew i would need to convert string to number since in javascript the are 2 seperate values
    document.getElementById("outputCelsius").innerHTML = (valNum-32) / 1.8;// using the getElementById method to calculate parsed string 
    //with a simple equation i found on google for converting farenheit to celsius//
}
 
function question() {//naming my function
    var answer = prompt("Tell me what is you favorite Color?","Color");//invoking the browser to bring up the prompt for user input
    if (answer !=null){//did some reseach on w3 on if statement to run seconday function document.getElementById
        document.getElementById("color").innerHTML = //stating the secondary function
        "So your favorite color is " + answer + " I will remember that" //concatenating the string walues along with the answer variable from user input
    alert("Hey Everyone remeber their favorite color is " + answer)//for more interaction i concatenated the string vavlue along with answer variable 
    //and set the alert function we learned at the begining of this course
    }//close secondary function
}//close primary function