document.write(typeof "Word");

document.write("10"+5);

document.write(-3E310);

document.write(3E310);

document.write(10<3);

document.write(10>3);

console.log(2+2);

console.log(10<3);

document.write(10==10);

document.write(5+5==15);

X=12;
Y=12;
document.write(X===Y);

X=12;
Y="13";
document.write(X===Y);

X=12;
Y="12";
document.write(X===Y);

X=12;
Y=13;
document.write(X===Y);

document.write(5<10 && 10<20);

document.write(5>10 && 10<20);

document.write(5<10 || 10>20);

document.write(5>10 || 10>20);

function not_Function(){
    document.getElementById("Not").innerHTML=!(5>10)
}

function not2_Function(){
    document.getElementById("Not2").innerHTML=!(5<10)
}
