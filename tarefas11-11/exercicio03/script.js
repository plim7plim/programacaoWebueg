function calcularConta(){
    let numeroConta = document.getElementById("numeroConta").value;
    let saldo = document.getElementById("saldo").value;

    let tarifa = 0;

    if (saldo/6 <= 1000){
        tarifa = 25;
    }else if (saldo/6 > 1000 && saldo/6 <= 2000){
        tarifa = 20;
    }else if (saldo/6 > 2000 && saldo/6 < 3501){
        tarifa = 13;
    }else{
        tarifa = 0;
    }
    document.getElementById("resultado").innerHTML = "Ola " + numeroConta + " seu saldo nos ultimos 6 meses: " + saldo + "; ao longo de 6 meses (uma media de: " + (saldo/6).toFixed(2) + ") Gerou uma tarifa de : " + tarifa + "R$";
}