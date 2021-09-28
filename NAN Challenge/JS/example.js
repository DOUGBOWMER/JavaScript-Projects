function test() {
   
    document.getElementById("tester").innerHTML= 0/0;
}

function test2() {
    document.getElementById("tester2").innerHTML= isNaN('Dog');
}

function test3() {
    document.getElementById("tester3").innerHTML= isNaN('200500');

} 

function test4() {
    document.getElementById("tester4").innerHTML= 1E310 + 1E310

}
function test5() {
    document.getElementById("tester5").innerHTML= -2E310 + -2E310
}
