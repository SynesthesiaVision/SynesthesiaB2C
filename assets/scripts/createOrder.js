document.addEventListener("DOMContentLoaded", function () {
  const model = localStorage.getItem("selectedModel");
  const size = localStorage.getItem("selectedSize");
  const color = localStorage.getItem("selectedColor");
  const price = localStorage.getItem("price");
  const userEmail = localStorage.getItem("userEmail");

  function fetchUserIdAndSubmitOrder(userEmail) {
    const url = `http://localhost:18080/api-V1/user/findByEmail?email=${encodeURIComponent(userEmail)}`;

    return fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error("A resposta da rede não foi ok: " + response.statusText);
        }
        return response.json(); // Use .json() diretamente, pois o modo no-cors foi removido
      })
      .then(data => {
        console.log(data)
        if (!data || !data.id) {
          throw new Error("Erro ao recuperar o ID do usuário.");
        }
        return data.id; // Retorne o ID do usuário
        
      })
      .catch(error => {
        console.error("Erro:", error.message);
        alert("Não foi possível recuperar as informações do usuário. Tente novamente mais tarde.");
        throw error; // Re-lance o erro para que o fluxo de Promise continue
      });
  }

  function submitOrder(event) {
    event.preventDefault();

    fetchUserIdAndSubmitOrder(userEmail, model, size, color)
      .then(userId => {
        const url = `http://localhost:18080/api-V1/order/create?model=${encodeURIComponent(
          model
        )}&size=${encodeURIComponent(size)}&color=${encodeURIComponent(
          color
        )}&userId=${encodeURIComponent(userId)}`;

        const headers = new Headers();
        headers.append("Content-Type", "application/json");

        return fetch(url, {
          method: "POST",
          headers: headers,
        });
      })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Ocorreu um erro ao enviar a solicitação.");
        }
        window.location.href = "order.html";
        console.log("Solicitação enviada com sucesso!");
      })
      .catch((error) => {
        console.error("Erro:", error.message);
        alert("Servidor fora do ar. Por favor, tente novamente mais tarde.");
      });
  }

  document.getElementById("model").textContent = model || "Nenhum";
  document.getElementById("size").textContent = size || "Nenhum";
  document.getElementById("color").textContent = color || "Nenhuma";
  document.getElementById("price").textContent = price || "R$ 999,00";

  document.getElementById("revision").addEventListener("submit", submitOrder);
});
