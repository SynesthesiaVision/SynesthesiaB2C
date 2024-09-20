document.addEventListener("DOMContentLoaded", function () {
  const model = localStorage.getItem("selectedModel");
  const size = localStorage.getItem("selectedSize");
  const color = localStorage.getItem("selectedColor");
  const price = localStorage.getItem("selectedPrice");

  // const userEmail = localStorage.getItem("userEmail");

  obterDadosUsuario()
  async function obterDadosUsuario() {
    try {
      const userEmail = localStorage.getItem("userEmail");
      //console.log(userEmail);
      const response = await fetch(`http://localhost:18080/api-V1/user/findByEmail?email=${userEmail}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        const usuario = await response.json();
        //console.log(usuario);

        return usuario;
      } else {
        alert(`Erro ao buscar dados do usuário: ${response.statusText}`);
        return null;
      }
    } catch (error) {
      console.error('Erro ao buscar dados do usuário:', error);
      alert('Ocorreu um erro ao tentar buscar os dados do usuário.');
      return null;
    }
  }

  atualizarSaudacao()
  async function atualizarSaudacao() {
    const usuario = await obterDadosUsuario();
    if (usuario) {
      const saudacaoElement = document.getElementById('user-greeting');
      saudacaoElement.textContent = `Verifique sua compra, ${usuario.name}!`;

      const addressElement = document.getElementById('user-address');
      const addressSpan = addressElement.nextElementSibling; // Seleciona o <span> que segue o <p>
      addressSpan.textContent = usuario.address;
      addressElement.textContent = 'Endereço: ';

      const zipcodeElement = document.getElementById('user-zipcode');
      const zipcodeSpan = zipcodeElement.nextElementSibling; // Seleciona o <span> que segue o <p>
      zipcodeSpan.textContent = usuario.zipCodeBR;
      zipcodeElement.textContent = 'CEP: ';
    }
  }

  function fetchUserIdAndSubmitOrder() {
    const userEmail = localStorage.getItem("userEmail");
    if (!userEmail) {
      throw new Error("O e-mail do usuário não está disponível no localStorage.");
    }

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
        return response.json();
      })
      .then(data => {
        if (!data || !data.id) {
          throw new Error("Erro ao recuperar o ID do usuário.");
        }
        return data.id;
      })
      .catch(error => {
        console.error("Erro:", error.message);
        alert("Não foi possível recuperar as informações do usuário. Tente novamente mais tarde.");
        throw error;
      });
  }

  function submitOrder(event) {
    event.preventDefault();

    fetchUserIdAndSubmitOrder()
      .then(userId => {
        const model = localStorage.getItem("selectedModel");
        const size = localStorage.getItem("selectedSize");
        const color = localStorage.getItem("selectedColor");

        // Verifique se os valores existem
        if (!model || !size || !color) {
          throw new Error("Um ou mais valores de pedido estão ausentes.");
        }
        //console.log(model, size, color, price)

        const url = `http://localhost:18080/api-V1/order/create?model=${model}&size=${size}&color=${color}&userId=${userId}`;

        const headers = new Headers();
        headers.append("Content-Type", "application/json");

        return fetch(url, {
          method: "POST",
          headers: headers,
        });
      })
      .then(response => {
        if (!response.ok) {
          throw new Error("Ocorreu um erro ao enviar a solicitação.");
        }

        console.log("Solicitação enviada com sucesso!");
        window.location.href = "payment.html";
      })
      .catch(error => {
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
