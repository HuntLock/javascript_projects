function my_Dictionary(){
    var Animal={//Set Key Value Pairs below
        Species: "Platypus",
        Color: "Bluish-Green",
        Breed: "Secret Agent",
        Age: "6",
        Sound:"gnarrg.g.g.g", 
    };
    delete Animal.Sound; //Remove the Key: Sound
    document.getElementById("Dictionary").innerHTML=Animal.Sound; //Display Sound. Unable to do so since it has been removed
}