function calcularRaizes(){
    let a = document.getElementById("numeroA").value;
    let b = document.getElementById("numeroB").value;
    let c = document.getElementById("numeroC").value;

    let delta = (b * b) - (4 * a * c);

    if(delta <0){
        document.getElementById("resultado").innerHTML = "Raízes imaginárias";
    }else if(delta == 0){
        document.getElementById("resultado").innerHTML = "Raiz única: ";
    }else{
        document.getElementById("resultado").innerHTML = "Raízes reais distintas ";
    };
}