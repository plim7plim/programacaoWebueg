
function calcularCone() {
    const raio = Number(document.getElementById("raio").value);
    const altura = Number(document.getElementById("altura").value);

    let geratriz = Math.sqrt(raio ** 2 + altura ** 2);
    let areaLateral = Math.PI * raio * geratriz;
    let areaTotal = Math.PI * raio * (geratriz + raio);
    let volume = (1 / 3) * Math.PI * raio ** 2 * altura;

    
    document.getElementById("geratriz").textContent = geratriz.toFixed(2);
    document.getElementById("areaLateral").textContent = areaLateral.toFixed(2);
    document.getElementById("areaTotal").textContent = areaTotal.toFixed(2);
    document.getElementById("volume").textContent = volume.toFixed(2);
    document.getElementById("tipo").innerHTML = "Cone";

}
