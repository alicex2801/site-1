window.onload = function () {
    const cores = ['#ff4d4d', '#4da6ff', '#66ff66', '#ffd11a', '#ff66cc', '#a366ff'];
    const container = document.getElementById('baloes-container');

    for (let i = 0; i < 15; i++) {
        let balao = document.createElement('div');
        balao.classList.add('balao');

        // Estilos variáveis
        let cor = cores[Math.floor(Math.random() * cores.length)];
        let tamanho = 40 + Math.random() * 40; // 40-80px
        let duracao = 5 + Math.random() * 5; // 5-10s

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
        document.body.style.backgroundColor = "#d4fdd4"; // verde claro
        resultado.innerHTML = "VOCÊ ACERTOU TUDO! 🥹💖";
        animacao.style.display = "block"; // mostra imagem
    } else {
        document.body.style.backgroundColor = "#ffe5e5"; // vermelho claro
        resultado.innerHTML = `Você acertou ${acertos} de 3. 😬 Tenta de novo!`;
        animacao.style.display = "none"; // esconde imagem
    }
}

