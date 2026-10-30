function calcularParalelepipedo(){
    const altura = Number(document.getElementById("altura").value);
    const largura = Number(document.getElementById("largura").value);
    const comprimento = Number(document.getElementById("comprimento").value);

    let area = (2 * (comprimento * largura + comprimento * altura + largura * altura)).toFixed(2);
    let volume = (comprimento * largura * altura).toFixed(2);
    let diagonal = (Math.sqrt(comprimento ** 2 + largura ** 2 + altura ** 2)).toFixed(2);

    document.getElementById("tipo").innerHTML = "Paralelepípedo";
    document.getElementById("areaTotal").innerHTML = area;
    document.getElementById("volume").innerHTML = volume;
    document.getElementById("diagonal").innerHTML = diagonal;
}