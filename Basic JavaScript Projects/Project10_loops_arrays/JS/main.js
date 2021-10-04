
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
