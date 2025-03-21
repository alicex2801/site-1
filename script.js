// Função para criar balões subindo automaticamente ao carregar a página
window.onload = function() {
    for (let i = 0; i < 5; i++) { // Número de balões a aparecer
        let balao = document.createElement('div');
        balao.classList.add('balao');
        balao.style.left = `${Math.random() * 100}%`; // Distribuindo os balões aleatoriamente
        document.getElementById('baloes-container').appendChild(balao);
    }
};
