function getReceipt() {
    //this initliatizes our string to it can get passed from
    //function to function, growing line by line into a full reciept
var text1 = "<h3> You ordered:</h3>";
var runningTotal = 0;//set total to zer to start
var sizeTotal = 0;//set total to zero to start
var sizeArray = document.getElementsByClassName("size"); //name variable and set value by calliin
// element size with mether getelement

for (var i = 0; i < sizeArray.length; i++) {// iniate for loop setting index value and adding 1
    if (sizeArray[i].checked) {//saying once the array has been parsed then do the nex
        var selectedSize = sizeArray[i].value;//naming variable and setting size
        text1 = text1+selectedSize+"<br>";//seting value of text1 check below for selected sizevvvvv
    }
}
//you if elese statment to determine wich size was selected
if (selectedSize === "Personal Pizza") {
    sizeTotal = 6;
}   else if (selectedSize === "Small Pizza") {
    sizeTotal = 8;
}   else if (selectedSize === "Medium Pizza") {
    sizeTotal = 10;
}   else if (selectedSize ==="Large Pizza") {
    sizeTotal = 14;
}   else if (selectedSize === "Extra Large Pizza") {
    sizeTotal = 16;
}
runningTotal = sizeTotal;// setting value of variable + to the siz listed above
console.log(selectedSize+" = $"+sizeTotal+" .00");//logging and equiting the cost of th pie, creating a display string with decimal
console.log("size text1: "+text1);
console.log("subtotal: $"+runningTotal+" .00");
//these variables will get paassed on to each function
getTopping(runningTotal,text1);
}; 

//namiing function
function getTopping(runningTotal,text1) {
    var toppingTotal = 0;//setting basliene values as we did before fo size
    var selectedTopping = [];
    var toppingArray = document.getElementsByClassName("toppings");
    for (var j = 0; j < toppingArray.length; j++) {//utlizing th for loop to pasrse the topping array and decifer selected
        if ( toppingArray[j].checked) {
            selectedTopping.push(toppingArray[j].value);//pushing the selected topping to array
            console.log("selected topping item: ("+toppingArray[j].value+")")///ectracting value from the arry and display in console
            text1 = text1+toppingArray[j].value+"<br>";
        }
    }
var toppingCount = selectedTopping.length;//naming variable and setting value
if (toppingCount > 1) {
    toppingTotal = (toppingCount - 1); //subtraction for free topping
}   else {//if not tooping select then total equal 0 not -1
    toppingTotal = 0;
}
runningTotal = (runningTotal + toppingTotal);/// adding total from the 2 sectioins
console.log("total selected topping items: "+ toppingCount);//display string for output to user
console.log(toppingCount+" topping-1 free Topping = "+"$"+toppingTotal+".00");///same as aboveand adding the topin total
console.log("topping text1: "+text1);//dispay size of pie
console.log("Purchase Total: "+"$"+runningTotal+".00");
document.getElementById("showText").innerHTML=text1;///gettin htnl element to render result for each side of menu
document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$"+
    runningTotal+".00"+"</strong></h3>";

};