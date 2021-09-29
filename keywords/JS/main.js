function Vehicle(Make, Model, Year, Color,){ //naming and defining the Vehilce function
    this.Vehicle_Make = Make;// this let us know that the current vehilce Make equals Make
    this.Vehicle_Model = Model;// this lets the computer know that the current Vehicle MOdel equals MOdel
    this.Vehicle_Year = Year; //" same    "
    this.Vehicle_Color = Color;//"    same  "

}// Vehicle in this Code is the Object Constructor//
var Jack = new Vehicle("Dodge", "viper",2020, "Red");// this Defines the Object Vehicle owned by Jack
var Emily = new Vehicle("Jeep", "trail Hawk", 2019, "White and Black"); //Defing the vehicle that Emily has
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");//Defining the Vehicle that Erik has
function mf() {
    document.getElementById("Keywords_and_Constructors").innerHTML = //using the getElementById method to call the element
    //Keywords_and_Constructors 
    "Erik drives a " + Erik.Vehicle_Color + "-colored" + Erik.Vehicle_Model + //constucting the  vehilce that Eric drives
    " manufactured in " + Erik.Vehicle_Year; //Constuction of the Vehice that Erik drives adnd when it was manufactured
}

