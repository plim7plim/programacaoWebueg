// Atividade 2 - Situação do aluno
// Lê o nome e duas notas. A média é calculada sem arredondamento prévio.

document.getElementById("formAluno").addEventListener("submit", function (evento) {
    evento.preventDefault(); // Evita recarregar a página ao enviar o formulário.

    // .value lê os valores digitados nos campos do HTML.
    const nome = document.getElementById("nome").value.trim();
    const nota1 = Number(document.getElementById("nota1").value);
    const nota2 = Number(document.getElementById("nota2").value);
    const resultado = document.getElementById("resultado");

    if (!nome || !Number.isFinite(nota1) || !Number.isFinite(nota2) ||
        nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10) {
        resultado.textContent = "Informe o nome e duas notas válidas de 0 a 10.";
        return;
    }

    const media = (nota1 + nota2) / 2;
    let situacao;

    if (media >= 7) {
        situacao = "Aprovado";
    } else if (media >= 5) {
        situacao = "Recuperação";
    } else {
        situacao = "Reprovado";
    }

    // A classificação usa a média original, antes de formatar a apresentação.
    resultado.textContent = "Aluno: " + nome +
        " | Média: " + media.toFixed(2) +
        " | Situação: " + situacao;
});

// Testes: 6 e 8 -> 7 (aprovado); 4 e 6 -> 5 (recuperação);
// 3 e 5 -> 4 (reprovado).
