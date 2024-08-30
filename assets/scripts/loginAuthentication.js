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

  fetch(`http://localhost:18080/api-V1/authenticate`, {
    method: "POST",
    headers: headers
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("A resposta da rede não foi ok: " + response.statusText);
      }
      return response.text();
    })
    .then((token) => {
      const payload = decodeJwt(token);
      const userEmail = payload.sub;

      localStorage.setItem('authToken', token);
      localStorage.setItem('userEmail', userEmail);

      window.location.href = "buy.html";
    })
    .catch((error) => {
      console.error("Erro:", error);
      alert("Servidor fora do ar. Por favor, tente novamente mais tarde.");
    });
}