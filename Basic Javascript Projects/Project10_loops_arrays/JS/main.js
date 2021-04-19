function count_to_ten(){
    var Digit="";
    var x=1;
    while (x<11){
        Digit += "<br>" +x;
        x++;
    }
    document.getElementById("counting_to_ten").innerHTML= Digit;
}

var Instruments= ["Guitar", "Drums", "Bass", "Keyboard", "Trumpet", "Ukulele"];
var Content= "";
var Y;
function for_Loop(){
    for (Y=0; Y<Instruments.length; Y++){
        Content+=Instruments[Y]+"<br>";
    }
    document.getElementById("List_of_instruments").innerHTML= Content;
}