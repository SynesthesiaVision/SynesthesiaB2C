document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    login();
  });

function login() {
  const email = document.getElementById("email").value;
  // const password = document.getElementById("password").value;

  const fixedUsername = "adminSV";
  const fixedPassword = "123";

  const headers = new Headers();
  headers.append(
    "Authorization",
    "Basic " + btoa(fixedUsername + ":" + fixedPassword)
  );
  headers.append("Content-Type", "application/json");

  fetch(`http://localhost:18080/api-V1/user/findByEmail?email=${email}`, {
    method: "GET",
    headers: headers,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          "A resposta da rede não foi ok: " + response.statusText
        );
      }
      return response.json();
    })
    .then((user) => {
      // if (user && user.email === email && user.password === password) {
      if (user && user.email === email) {
        console.log("Login successful for user ID:", user.id);
        localStorage.setItem("userId", user.id);
        window.location.href = "buy.html";
      } else {
        alert("Credenciais inválidas. Tente novamente.");
      }
    })
    .catch((error) => {
      console.error("Erro:", error);
      alert("Servidor fora do ar. Por favor, tente novamente mais tarde.");
    });
}
