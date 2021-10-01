function get_Date() { 
    if (new Date().getHours()<18) {
        document.getElementById("Greetings").innerHTML = "How are you today?";
    }

}