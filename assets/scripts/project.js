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

function scrollToSection() {
  var ideaSection = document.getElementById("idea");
  if (ideaSection) {
    ideaSection.scrollIntoView({ behavior: "smooth" });
  }
}

// Função para trocar o conceito exibido
function trocarConceito(conceito) {
  // Seleciona os containers das divs
  var ecoContainer = document.getElementById("desc-eco");
  var somBinauralContainer = document.getElementById("desc-binaural");
  var sinesContainer = document.getElementById("desc-sinestesia");

  // Verifica qual conceito deve ser exibido e oculta os outros
  if (conceito === "desc-eco") {
    ecoContainer.classList.add("active");
    somBinauralContainer.classList.remove("active");
    sinesContainer.classList.remove("active");
  } else if (conceito === "desc-binaural") {
    ecoContainer.classList.remove("active");
    somBinauralContainer.classList.add("active");
    sinesContainer.classList.remove("active");
  } else if (conceito === "desc-sinestesia") {
    ecoContainer.classList.remove("active");
    somBinauralContainer.classList.remove("active");
    sinesContainer.classList.add("active");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // Inicia mostrando apenas o conteúdo de ecolocalização
  var ecoContainer = document.getElementById("desc-eco");
  ecoContainer.classList.add("active");

  // Adiciona eventos de clique aos botões para trocar o conceito
  document.getElementById("btnEco").addEventListener("click", function () {
    trocarConceito("desc-eco");
  });
  document.getElementById("btnSomB").addEventListener("click", function () {
    trocarConceito("desc-binaural");
  });
  document.getElementById("btnSines").addEventListener("click", function () {
    trocarConceito("desc-sinestesia");
  });
});
