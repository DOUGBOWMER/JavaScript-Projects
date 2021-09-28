function my_Dictionary() {
    var Animal = {
        species:"Dog",
        Color:"Black",
        Breed:"Labrador",
        Age:5,
        Sound:"Bark!"
        
    };   
    delete Animal.Breed;
    document.getElementById("Dictionary").innerHTML= Animal.Breed;
}
//end Function

