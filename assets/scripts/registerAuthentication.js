document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    enviarFormulario();
  });

function enviarFormulario() {
  const url = "http://localhost:18080/api-V1/user/create";
  const dadosDoFormulario = {
    name: document.getElementById("name").value,
    cpf: document.getElementById("cpf").value,
    phone: document.getElementById("phone").value,
    // zipCodeBR: document.getElementById("zipCodeBR").value,
    // address: document.getElementById("address").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  };

  fetch(url, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dadosDoFormulario),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Ocorreu um erro ao enviar a solicitação.");
      }
      window.location.href = "signin.html";
    })
    .catch((error) => {
      console.error("Erro:", error.message);
      alert("Servidor fora do ar. Por favor, tente novamente mais tarde.");
    });
}
