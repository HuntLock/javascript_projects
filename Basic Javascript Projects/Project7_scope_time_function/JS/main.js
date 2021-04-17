var X = 10; //global
function Add_numbers_1(){
    document.write(20+X+"<br>");
}
function Add_numbers_2(){ //local
    document.write(X+100);
}
Add_numbers_1;
Add_numbers_2;


function get_Date(){ //18 hour machine
    if (new Date() .getHours()<18){ //if greater than 18 hours display...
        document.getElementById("Greeting").innerHTML="How are you today?"
    }
}



function Age_Function(){//Voting Machine
   Age = document.getElementById("Age").value;
   if (Age>=18) { //parameters for voting
       Vote= "You are old enough to vote!";
   }

   else {
       Vote= "You are not old enough to vote!";
   }
   document.getElementById("How_old_are_you?").innerHTML= Vote;
}

function Time_function(){ //Time of day machine
    var Time= new Date().getHours();
    var Reply;
    if (Time<12==Time>0){
        Reply="It is morning time."; //display morning
    }
    else if (Time >=12==Time<18){
        Reply="It is afternoon."; //display afternoon
    }

    else{
        Reply="It is evening."; //display evening
    }
    document.getElementById("Time_of_day").innerHTML=Reply;
}
