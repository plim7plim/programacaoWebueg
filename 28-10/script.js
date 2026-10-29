function calcularEsfera(){
    const raio = Number(document.getElementById("raio").value);
    const diametro = raio * 2;
    const area= (4 * Math.PI * raio ** 2).toFixed(2);
    const volume = ((4/3 * Math.PI * raio ** 3).toFixed(2));

    console.log(area);
    console.log(volume);

    document.getElementById("tipo").innerHTML = "Esfera";
    document.getElementById("diametro").innerHTML = diametro;
    document.getElementById("area").innerHTML = area;
    document.getElementById("volume").innerHTML = volume;
}

