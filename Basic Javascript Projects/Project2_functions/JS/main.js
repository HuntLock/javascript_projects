function My_First_Function(){ //this is a function
    var str="This is a string";
    var result=str.fontcolor("pink");
    document.getElementById("Pink_Text").innerHTML=result;
} 

function My_Function(){ //this is a function with a concatenate
    var sentence="I am learning";
    sentence+= " a lot from this book";
    document.getElementById("Concatenate").innerHTML=sentence;
}