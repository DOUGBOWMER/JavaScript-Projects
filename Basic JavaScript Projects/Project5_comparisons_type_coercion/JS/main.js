function writetype() {//NAMING THE FUNCTION
var four = document.write(typeof 4);// USING METHOD DOC WRITE TO DISPLAY THE TYPE OF VALUE AFTER SETING THE VARIABLE 
document.getElementById("answer1").innerHTML= four;//RETURNING VARIABLE FOUR TO THE USER THROUGH GETELEMENTBYID FUNCTION
} 

function coer() {//NAMING THE FUNCTION
    var ten = "ten"//NAMING VARIABLE
    var two= "2"//NAMING VARIABLE
    document.getElementById("answer2").innerHTML= ten + two//USING METHOD TO RETURN THE ANSWER FOR TEN + TWO
} 
function tru() {//NAMING THE FUNCTION
    document.getElementById("true1").innerHTML= 10 > 5;//RETURNING THE COMPARISON BOOLEAN FOR 10>5
}

function fa() {//NAMING THE FUNCTION
    document.getElementById("falls").innerHTML= 5 > 10;//RETURNING BOOLEAN TO USER FOR COMPARISON OF 5>10
        console.log(falls)//USING THE CONSOLE TO SHOW FALSE EXAMPLE 
}
console.log(2 + 2);//DOOING MATH AND SHOWING INSIDE THE CONSOLE

function Con() {//NAMING THE FUNCTION
    console.log(4 + 2)//TRIGGERING THE MATH TO BE DONE AND SHOWED INSIDE CONSOLE WITH FUNCITOIN CON()
}

function botru(){//NAMING THE FUNCTION
document.write(10==10);//GOOGLE VIOLATION ERROR HERE HOWEVER THIS IS COMPARING THE VALUE OF 2 NUMBER TO SEE IF THEY ARE EQUAL
}
 function bofal(){//NAMING THE FUNCTION
     document.write(3==11)//COMPARING TWO NUMBERS WITH TH AND BOOLEAN 
 }

 function tr1() {//NAMING THE FUNCTION
     document.getElementById("an1").innerHTML= '1/19/2021'==='1/19/2021'//RETURNING A TRUE STATEMENT USING THE === COMPARIOSN
 }

 function tr2() {//NAMING THE FUNCTION
     document.getElementById("an2").innerHTML= 'ten'==='12'//RETURNING A FALSE USING THE === STATEMENT

}
    
 function tr3() {//NAMING THE FUNCTION
     document.getElementById("an3").innerHTML= 'ten'==='10'       //RETURNING A FALSE USING THE === STATEMENT SSAME VALUE FDIFFERENT TYPES
}

function tr4() {//NAMING THE FUNCTION
    document.getElementById("an4").innerHTML= '11'==='15'// RETURNS FALSE BOOOLEN SAME TYPE DIFERENT VALUES
}


function andsigndoublet() {//naming the function
    document.getElementById("a1").innerHTML= (5 > 2 && 10 > 4);//using the and and (both must be true to return true)
}

function andsigndoublef() {//naming the function
    document.getElementById("a2").innerHTML= (5 > 10 && 10 > 4); //returns false because 1 is false
}

function signOr() {///naming the function
    document.getElementById("a3").innerHTML= (5 < 10 || 10 < 4);//RETURNS TRUE AS WITH OR ONLY ONE HAS TO BE TRUE
}   
function signOrf() {///naming the function
    document.getElementById("a4").innerHTML= (5 > 10 || 10 < 4); //returning the false as both side of the or are false
}

function  not_Function() {// this is the not fucntion it practicaly returns the oposite
    document.getElementById("not").innerHTML= !(20 > 10);
}    
  
function notnot_Function() {//naming the function this is the double negative of the not function it will return a true 
        document.getElementById("notnot").innerHTML= !(5 > 10);//this is true
}

