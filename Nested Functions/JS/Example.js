function count_Function() {naming function
    document.getElementById("Counting").innerHTML = Count()// invoking the COunt Function after using the  documentbyID to intiate coutning
        function Count () {// counting function
            var Starting_point = 9;// this is where  we begin count from
            function Plus_one () {Starting_point +=1}
            Plus_one();/// nested format
            return Starting_point;// the return value of the function

        }
}