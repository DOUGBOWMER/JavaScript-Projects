function Ride_Function() {
    var Height, Can_Ride;
    Height= document.getElementById("Height").value;
    Can_Ride = (Height< 52)?"You are too short":"You are tall Enough";
    document.getElementById("Ride").innerHTML = Can_Ride + " to ride.";
}
