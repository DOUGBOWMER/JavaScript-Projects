function VF() {
    var Age, Can_Vote;
    Age = document.getElementById("Age").value;
    Can_Vote = (Age < 18)? "Your Are Too Young":"You Are Old Enough";
    document.getElementById("answer").innerHTML= Can_Vote + " To Vote";
}