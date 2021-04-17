function full_sentence(){ //full sentence
    var part_1= "I have "; //p 1
    var part_2= "made this "; //p 2
    var part_3= "into a "; //p 3
    var part_4= "complete sentence."; //p 4
    var whole_sentence= part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML=whole_sentence;
}

function slice_method(){ //slice method
    var sentence= "All work and no play makes johnny a dull boy.";
    var section= sentence.slice(27,33);
    document.getElementById("slice").innerHTML=section;
}

function String_method(){ //string method
    var x=182;
    document.getElementById("numbers_to_string").innerHTML=x.toString(); 
}

function precision_method(){ //precision method
    var x= 12938.3012987376112;
    document.getElementById("Precision").innerHTML=x.toPrecision(10);
}
