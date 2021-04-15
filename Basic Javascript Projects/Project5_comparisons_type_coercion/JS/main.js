document.write(typeof "Word"); //string

document.write("10"+5); //example of string

document.write(-3E310); //negative infinity

document.write(3E310); //infinity

document.write(10<3); //display false

document.write(10>3); //display true

console.log(2+2); //usuing console to show 2+2=4

console.log(10<3); //using console log to display true

document.write(10==10); //display true

document.write(5+5==15); //display false

X=12; 
Y=12;
document.write(X===Y); //display true,, different key, same value

X=12;
Y="13";
document.write(X===Y); //display false, different data type, dif. value

X=12;
Y="12";
document.write(X===Y); //display false, different data type, same valye

X=12;
Y=13;
document.write(X===Y); //display false, same data type, different value

document.write(5<10 && 10<20); //compare both

document.write(5>10 && 10<20); //compare both

document.write(5<10 || 10>20); //examine or for outcome

document.write(5>10 || 10>20); //examine or for outcome

function not_Function(){
    document.getElementById("Not").innerHTML=!(5>10) //not function, display true
}

function not2_Function(){
    document.getElementById("Not2").innerHTML=!(5<10) //not function, display false
}
