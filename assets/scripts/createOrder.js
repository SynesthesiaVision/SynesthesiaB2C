document.addEventListener("DOMContentLoaded", function () {
  const model = localStorage.getItem("selectedModel");
  const size = localStorage.getItem("selectedSize");
  const color = localStorage.getItem("selectedColor");
  const userId = localStorage.getItem("userId");

  if (userId) {
    document.getElementById("userId").value = userId;
  } else {
    alert("Usuário não logado. Por favor, faça o login primeiro.");
    window.location.href = "signin.html"; // Redirecionar para a página de login
  }

  document.getElementById("model").textContent = model || "Nenhum";
  document.getElementById("size").textContent = size || "Nenhum";
  document.getElementById("color").textContent = color || "Nenhuma";

  document.getElementById("btnSubmit").addEventListener("click", function () {
    const url = `http://localhost:18080/api-V1/order/create?model=${encodeURIComponent(
      model
    )}&size=${encodeURIComponent(size)}&color=${encodeURIComponent(
      color
    )}&userId=${encodeURIComponent(userId)}`;

    const fixedUsername = "adminSV";
    const fixedPassword = "123";

    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append(
      "Authorization",
      "Basic " + btoa(fixedUsername + ":" + fixedPassword)
    );

    fetch(url, {
      method: "POST",
      mode: "cors",
      headers: headers,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Ocorreu um erro ao enviar a solicitação.");
        }
        console.log("Solicitação enviada com sucesso!");
        console.log(url);
      })
      .catch((error) => {
        console.error("Erro:", error.message);
        alert("Servidor fora do ar. Por favor, tente novamente mais tarde.");
      });
  });
});
