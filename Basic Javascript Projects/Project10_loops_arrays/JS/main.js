//While Loop
function count_to_ten(){
    var Digit="";
    var x=1;
    while (x<11){
        Digit += "<br>" +x;
        x++;
    }
    document.getElementById("counting_to_ten").innerHTML= Digit;
}

//For Loop
var Instruments= ["Guitar", "Drums", "Bass", "Keyboard", "Trumpet", "Ukulele"];
var Content= "";
var Y;
function for_Loop(){
    for (Y=0; Y<Instruments.length; Y++){
        Content+=Instruments[Y]+"<br>";
    }
    document.getElementById("List_of_instruments").innerHTML= Content;
}

//Array
function cat_pics(){
    var Cat_Picture= [];
    Cat_Picture[0]="Sleeping";
    Cat_Picture[1]="Playing";
    Cat_Picture[2]="Dancing";
    Cat_Picture[3]="Eating";
    Cat_Picture[4]="Purring";
    document.getElementById("Cat").innerHTML="In this picture, the cat is "+
        Cat_Picture[2]+ ".";
}
//CONSTANT
function constant_function(){
    const Musical_instrument= {type:"guitar", brand:"fender", color:"black"};
    Musical_instrument.color="blue";
    Musical_instrument.price="$900";
    document.getElementById("Constant").innerHTML="The cost of the " +
        Musical_instrument.type + " was " + Musical_instrument.price;
}

//lET Example 1
var Y=92; 
document.write(Y);
{
    let Y=13;
    document.write ("<br>"+Y);
}
document.write("<br>" + Y);

//LET expanded

let Batman={
    identity: "Bruce Wayne",
    skill: "detective",
    weapon: "batarang",
    color: "black",
    description: function(){
        return "The batman is " + this.identity + " He is a(n) "+ this.skill + " he use a(n) " + this.weapon + " his suit is " + this.color;
    }
}
document.getElementById("Batman_Object").innerHTML= Batman.description

