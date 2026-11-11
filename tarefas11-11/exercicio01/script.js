function calcularidade(){
    let idade = document.getElementById("numero").value;
    

  
   if (idade < 16) {
        document.getElementById("resultado").innerHTML = "é uma criança, não eleitora";
    } else if (idade > 18 && idade < 65) {
        document.getElementById("resultado").innerHTML = "é um adulto, eleitor obrigatória";
    }else{
        document.getElementById("resultado").innerHTML = "é um idoso, eleitor facultativo";
    }

    
}