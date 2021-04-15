function multiplication_function() { //This is a multiplication
    var multiplication=6*8;
    document.getElementById("Math").innerHTML= "6*8 =" +multiplication;
}

function subtraction_Function() { //This is a subtraction
    var subtraction= 5-2;
    document.getElementById("Math").innerHTML= "5-2=" +subtraction;
}

function addition_Function() { //This is an addition
    var addition= 5+3;
    document.getElementById("Math").innerHTML= "5+3=" +addition;
}

function division_Function() { //This is a division
    var division= 48/6;
    document.getElementById("Math").innerHTML= "48/6=" +division;
}

function more_function() { //This is a multi-step equation
    var more= (1+2)*10/2-5;
    document.getElementById("Math").innerHTML= "(1+2)*10/2-5=" +more;
}

function modulus_operator() { //This is a Modulus operator
    var simple= 25 % 6;
    document.getElementById("Math").innerHTML= "25 % 6=" +simple
} 

function negation_Operator(){ //This is a negation
    var X=10;
    document.getElementById("Math").innerHTML= -X;
}

function increment_Operator(){ //This is a negation
    var X=5;
    X++;
    document.getElementById("Math").innerHTML= X;

}

function decrement(){ //This is a decrement
    var X= 5.25;
    X--;
    document.write(X);
}

function alertlert(){ //This is an alert
window.alert("Hello");
}