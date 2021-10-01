var x = 30

function Addx() {
    var tracktime = 2 * x;
    document.getElementById("frosty").innerhtml= tracktime;
}
function reach() {
    var finishtime= tracktime-x;
    document.getElementById("snowman").innerhtml= finishtime
}

function timefunction() {
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
