function Ride_Function() {
    var Height, Can_Ride;
    Height= document.getElementById("Height").value;
    Can_Ride = (Height< 52)?"You are too short":"You are tall Enough";
    document.getElementById("Ride").innerHTML = Can_Ride + " to ride.";
}

function Customer(Name, Status, Phone, Email) {
    this.Customer_Name = Name; 
    this.Customer_Status = Status;
    this.Customer_Phone = Phone;
    this.Customer_Email = Email;
}
 
var cust1 = new Customer("Doug Bowmer", "Active", 3174167142, "dougbowmer3@gmail.com");
var cust2 = new Customer("Sammy Davis", "Declined", 3174567894, "s.davis@gmail.com");
var cust3 = new Customer("Miles Davis", "Active", 3174568956, "milesdavis@jazz.com");
function custDetail() {
    document.getElementById("New_and_This").innerHTML = 
    "Hello Mr/Mrs" + cust3.Customer_Name +" our system shows you are currently " + cust3.Customer_Status + 
    ". We need to veify your number is " + cust3.Customer_Phone + " and your email is " + cust3.Customer_Email + 
    ". If this not correect please respond to this email with updated information. Thank you!";
}
function nf() { //naming function
    document.getElementById("Nested_Function").innerHTML= Count(); //returning the cvalue and giving value to Count function
    function Count() {//naming the count function
        var Starting_point = 1; //declaring a value for starting point
        function Plus_one() {Starting_point += 1;} //seting operation fo PlusOne function
        Plus_one(); //return with value for plus one
        return Starting_point; //sending the value from function back to starting pont resulting in the user get the dat of 2
    }
}