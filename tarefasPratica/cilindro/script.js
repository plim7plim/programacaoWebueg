function calcularCilindro(){
     const raio = Number(document.getElementById("raio").value);
     const altura = Number(document.getElementById("altura").value);

    let area = (2 * Math.PI * raio * (raio + altura)).toFixed(2);
    let areaLateral = (2 * Math.PI * raio * altura).toFixed(2);
    let volume = (Math.PI * raio ** 2 * altura).toFixed(2);

    console.log(area);
    console.log(areaLateral);
    console.log(volume);
    
    document.getElementById("tipo").innerHTML = "Cilindro";
    document.getElementById("area").innerHTML = area;
    document.getElementById("areaLateral").innerHTML = areaLateral;
    document.getElementById("volume").innerHTML = volume;
}