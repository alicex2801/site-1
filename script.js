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
