// Função da tela preta do inicio
setTimeout(function () {
    var telaPreta = document.getElementById('black-screen');
    telaPreta.style.opacity = 0;
    setTimeout(function () {
        telaPreta.style.display = 'none';
    }, 1500);
}, 5000); // Definir os segundos de duração dessa tela

// Funcionalidade pra voltar para o inicio da pagina
function voltarAoTopo() {
    document.documentElement.scrollTop = 0;
}

function exibirBotao() {
    var botao = document.getElementById("voltarTopo");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        botao.style.display = "block";
    } else {
        botao.style.display = "none";
    }
}

window.onscroll = function () {
    exibirBotao();
};
