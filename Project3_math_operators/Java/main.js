function addition_Function() {// namimg the function
    var addition = 5 + 5;//assinging the variable addition to the value 5+5 
    document.getElementById("Math").innerHTML = "5 + 5 = " + addition;//using the getElementById method 
    //trigered by the eventlistner onclick to supply the answer to the same above equation
} 

function subtraction_Function() {//assinging the function name
    var subtraction = 7 - 3;//assinging the variable with a value for subtraction 7-3
    document.getElementById("mth2").innerHTML = "7 - 3 = " + subtraction//using the getElementById method
    //to solve th mathh equation and return the value to the user
}

function m_f() {//naming the multiplivation function
    var m = 10 * 5626;//assinging the valle to var m
    document.getElementById("mth3").innerHTML = "10 x 5626 =" + m; // using the method getElementById to 
    //return the value of m and solve the amth equation
}

function d_f() {//naming th function
    var d = 13 / 2;//assing value to the variable
    document.getElementById("mth4").innerHTML = " 13 / 2 =" + d; //using method to return the variable to the user and solve th problem
}

function m_M() {//naming the function
    var mm= (10+4) * 2 / 5 -7;//assing the value to the variable mm
    document.getElementById("mth5").innerHTML = " (10+4) * 2 / 3 - 7 = " + mm; //using method to return variable 
}

function Modulus_Operator() {// naming the fuunction
    var simple_Math = 25 % 6; //assigning the variable with the value using the Modulus Operator 
    document.getElementById("mth6").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math;//retrieveing
    //the the value of the variable to the user
} 

//A “unary operator” is an operation that only contains a single operand. An example of this would be + 5.
//A “binary operator” is an operation that requires two operands – one operand before the operator and one after. A
//an example of this would be 5 + 5.

function negation_Operator() {//naming the function
    var x = 10;//assigning the variable a value
    document.getElementById("mth7").innerHTML = -x;// returning the aviable and using the negation syntax to equate a negative number
}

function increment_Operator() {//naming the function
    var y = 5;//assing value to the variable
    y++//using setting the increment operator and assiging it to a variable for use
    document.getElementById("mth8").innerHTML = "5 count up by 1 = " + y; //using the cariable and returning to user to 
}

function decrement_Operator() {// naming the function
    var z = 5;//asigning value to the var  
    z--; //implementing the decrement syntax and assigning it to a variable
    document.getElementById("mth9").innerHTML = "5 count down by 1 = " + z // returning the solved 
    //equation to the user when they click for the anser
}


    window.alert(Math.random() * 100);//displaly a number between 0 and 100 //using window alert and the Math.radom method

function rounds() {//naming the function
    var rd = Math.round(9.4)//assigning the variable a value using the Math.round method to calculate interger
    document.getElementById("mth10").innerHTML= "9.4 rounded =" + rd//returning the string and the answer to equation for user
}

function mathpows() {//naming the function
    var mpp = Math.pow(8,2);//assigning the value to variable and utilizating the Math.pow to find the square root 
    document.getElementById("mth11").innerHTML = mpp;// retunig variable and solving problem for the customer

}



