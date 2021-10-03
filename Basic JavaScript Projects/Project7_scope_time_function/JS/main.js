var x = 30
var tracktime =2 * x
function Addx(){
    var tracktime = 2 * x;
    document.getElementById("frosty").innerHTML= tracktime;
}
function reach() {
    var finishtime = tracktime - x;
    document.getElementById("snowman").innerHTML= finishtime
}

function Time_function() {
    var time = new Date().getHours(); 
    var reply;
    if (time < 12 == time > 0 ) {
        reply = "it is morning time";
    }
    else if (time >= 12 == time < 18){
        reply = "it is afternoon";
    }
    else {
        reply = "it is evening time";
    }
    document.getElementById("time_of_day").innerHTML = reply;
}

function get_date() { 
    let date = new Date(); 
    document.getElementById("Greetings").innerHTML = date
}
function joke() {
    document.getElementById("answer").innerHTML = "King kong"
    console.log("KingKong")
}


