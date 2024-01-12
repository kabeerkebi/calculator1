function btnc(val){
document.getElementById("screen").value +=val;

}
function cl(){

document.getElementById("screen").value="";
}
function ans(){


    var text= document.getElementById("screen").value;
if (text.trim() ===""){

    alert("type something fool...");
}
else{ var result=eval(text);
    document.getElementById("screen").value=result;
}
   
}

