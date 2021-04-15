function Vote_Function(){//Voting Machine
    var Age, Can_vote;
   Age=document.getElementById("Age").value;
    Can_vote=(Age<18)? "You are too young ":"You are old enough ";
    document.getElementById("Vote").innerHTML=Can_vote+"to vote.";
}


function Vehicle(Make, Model, Year, Color){//Object Constructor
    this.Vehicle_Make=Make;
    this.Vehicle_Model=Model;
    this.Vehicle_Year=Year;
    this.Vehicle_Color=Color;
}
var Jack= new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily= new Vehicle("Jeep", "Trail Hawk", 2017, "Pink");
var Erik= new Vehicle("Ford", "Pinto", 1970, "Green");
function my_Function(){
    document.getElementById("Keywords_and_Constructors").innerHTML=
    "Erik drives a " + Erik.Vehicle_Color+"-colored "+ Erik.Vehicle_Model + " Manufactured in " +Erik.Vehicle_Year;
}


function Person(first, last, age, eye) { //Constructor Challenge
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}
var Hunter= new Person("Hunter"," Lock","22","Hazel");
function my_Function2(){
    document.getElementById("New_and_This").innerHTML=
    "My name is " + Hunter.firstName + Hunter.lastName + " I am " + Hunter.age + " Years old";
}


function count_Function(){ //Counting Function
    document.getElementById("Counting").innerHTML=Count();
    function Count(){
        var Starting_point=9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point
    }
}
