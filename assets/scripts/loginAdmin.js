document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    login();
  });

function decodeJwt(token) {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
  return JSON.parse(jsonPayload);
}

function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append(
    "Authorization",
    "Basic " + btoa(email + ":" + password)
  );

  const errorMessageElement = document.getElementById("error-message");
  errorMessageElement.style.display = "none";
  errorMessageElement.textContent = "";

  fetch(`http://localhost:18080/api-V1/authenticate`, {
    method: "POST",
    headers: headers
  })
    .then((response) => {
      if (!response.ok) {
        if (response.status === 401) {
          throw new Error("Email ou senha inválidos.");
        }
        throw new Error("Erro na rede: " + response.statusText);
      }
      return response.text();
    })
    .then((token) => {
      localStorage.setItem('authToken', token);
      localStorage.setItem('userEmail', email);
      return fetch(`http://localhost:18080/api-V1/user/findByEmail?email=${email}`, {
        method: "GET",
        headers: {
          "Authorization": "Bearer " + token 
        }
      });
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erro ao recuperar as informações do usuário.");
      }
      return response.json();
    })
    .then((user) => {
      const userRole = user.role; 

      if (userRole && (userRole === 'ADMIN' || userRole === 'SALES_MONITOR' || userRole === 'TECHNICIAN')) {
        window.location.href = "orderAdmin.html"; 
      } else {
        throw new Error("Clientes não têm acesso a essa tela.");
      }
    })
    .catch((error) => {
      console.error("Erro:", error);
      errorMessageElement.style.display = "block";
      errorMessageElement.textContent = error.message;

      if (error.message.includes("Servidor fora do ar")) {
        alert("Servidor fora do ar. Por favor, tente novamente mais tarde.");
      }
    });
}
