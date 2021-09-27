
var farenheit = document.getElementById("farenheit")
function toCelsius(farenheit) {
    
    return (5/9) * ("farenheit"-32)
}
document.getElementById("result").innerHTML=toCelsius(55)