function calcularCubo(){
    const aresta= Number(document.getElementById("arestas").value);

    let areaFace = (aresta ** 2).toFixed(2);
    let areaLateral = (4*aresta**2).toFixed(2);
    let areaTotal = (6*aresta**2).toFixed(2);
    let volume = (aresta**3).toFixed(2);
    
    document.getElementById("tipo").innerHTML = "Cubo";
    document.getElementById("areaFace").innerHTML = areaFace;
    document.getElementById("areaLateral").innerHTML = areaLateral;
    document.getElementById("areaTotal").innerHTML = areaTotal;
    document.getElementById("volume").innerHTML = volume;

}