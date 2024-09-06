var ne= Math.floor(Math.random() * (50 - 1) + 1);
function comprobar(){
    var nd=document.getElementById("nose").value;
    if(ne==nd){
        alert("GANASTE")
    }else if(ne>nd){
        alert("EL NÚMERO ES MAYOR");
    }else{
        alert("EL NÚMERO ES MENOR");
    }
}