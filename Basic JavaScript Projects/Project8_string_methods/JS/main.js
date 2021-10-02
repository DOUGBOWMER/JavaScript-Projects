function full_Sentence() {// naming function
    var part1 = "I ";//naming var
    var part2 = "Love ";//naming varr
    var part3 = "Coding"; //naming var
    var part4 = " stuff." //naming var
    var wholesentence = part1.concat(part2, part3, part4);//using method to combine several string elements together
        document.getElementById("concatenate").innerHTML = wholesentence; //returning the full sentence for user output
 
    }

function slice_Method() {// naming function 
    var sentence = "All work and no play makes Johnny a dull boy.";//set variable
    var section= sentence.slice(27,33);//calll slice meth (use to cut out parts of a sentence and return part)
    document.getElementById("slice").innerHTML = section;//getelement method used to reeturn the slice as an answer.
}
 
function big() {//naming funnction
    let ab = document.getElementById("little").innerHTML; //ceting varible of ab to check that needs changed
    document.getElementById("little").innerHTML = ab.toUpperCase();//using same funtion to call it back to htmk doc and diplay on browser
    return  
}

function FindReplace() { //naming function   
let str = "lorem ipsum this car name love umbrella.!"; //seting var, giveing it text to search
document.getElementById("ipsum").innerHTML = str.search("umbrella")//using the document.getElementById methof to find and then return answer
//answer is 31 becasue that is the postion of the word umbrella
}
