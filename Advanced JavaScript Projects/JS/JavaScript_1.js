function superhero_function(){
    var superhero_output;
    var superheroes= document.getElementById("superhero_input").value;
    var superhero_string= " is a great hero!";
    switch(superheroes){
        case "Wonder Woman":
            superhero_output="Wonder Woman" + superhero_string;
         break;

         case "Scarlet Witch":
            superhero_output="Scarlet Witch" + superhero_string;
         break;

         case "Batman":
            superhero_output="Batman" + superhero_string;
         break;

         case "Iron Man":
            superhero_output="Iron Man" + superhero_string;
         break;

         case "Aquaman":
            superhero_output="Aquaman" + superhero_string;
         break;

         case "Captain_Marvel":
            superhero_output="Captain Marvel" + superhero_string;
         break;   

         case "Huntress":
            superhero_output="Huntress" + superhero_string;
         break;

         case "Black Panther":
            superhero_output="Black Panther" + superhero_string;
         break;
        default:
            superhero_output="Please enter a hero exactly as written above.";
    }
    document.getElementById("output").innerHTML=superhero_output;
}

function Hello_World_Function(){
    var A= document.getElementsByClassName("Click");
    A[1].innerHTML="The text has changed!";
}


var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.stroke();