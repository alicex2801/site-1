// Parte dos balões
window.onload = function () {
    const cores = ['#ff4d4d', '#4da6ff', '#66ff66', '#ffd11a', '#ff66cc', '#a366ff'];
    const container = document.getElementById('baloes-container');

    for (let i = 0; i < 15; i++) {
        let balao = document.createElement('div');
        balao.classList.add('balao');

        let cor = cores[Math.floor(Math.random() * cores.length)];
        let tamanho = 40 + Math.random() * 40;
        let duracao = 5 + Math.random() * 5;

        balao.style.backgroundColor = cor;
        balao.style.left = `${Math.random() * 100}%`;
        balao.style.width = `${tamanho}px`;
        balao.style.height = `${tamanho + 20}px`;
        balao.style.animationDuration = `${duracao}s`;

        container.appendChild(balao);
    }
};

// Parte do quiz
function verificarRespostas() {
    const respostasCorretas = {
        q1: "c",
        q2: "a",
        q3: "a"
    };

    let acertos = 0;
    const form = document.forms["quizForm"];

    for (let pergunta in respostasCorretas) {
        const selecionado = form[pergunta].value;
        if (selecionado === respostasCorretas[pergunta]) {
            acertos++;
        }
    }

    const resultado = document.getElementById("resultadoQuiz");
    const animacao = document.getElementById("animacaoFinal");

    if (acertos === 3) {
        document.body.style.backgroundColor = "#b2f2bb";
        resultado.innerHTML = "VOCÊ ACERTOU TUDO! 🥹💖";
        if (animacao) animacao.style.display = "block";
    } else {
        document.body.style.backgroundColor = "#ffcccc";
        resultado.innerHTML = `Você acertou ${acertos} de 3. 😬 Tenta de novo!`;
        if (animacao) animacao.style.display = "none";
    }
}

// Conecta o botão com a função do quiz
document.addEventListener("DOMContentLoaded", function () {
    const botao = document.querySelector("#quizForm button");
    if (botao) {
        botao.addEventListener("click", verificarRespostas);
    }
});
