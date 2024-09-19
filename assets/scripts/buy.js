window.addEventListener("load", function () {
  const userEmail = localStorage.getItem("userEmail");

  console.log(localStorage.getItem("userEmail"));

  if (userEmail) {
    document.getElementById("userEmail").value = userEmail;
    console.log(userEmail);
  } else {
    window.location.href = "signin.html";
  }

  initializeSelections();
});

function selectModel(event, model) {
  event.preventDefault();
  document.getElementById("selectedModelText").textContent =
    "Modelo selecionado: " + model;
  localStorage.setItem("selectedModel", model);
  updateSelectedClass(".modelOption", event.target);
}

function selectSize(event, size) {
  event.preventDefault();
  const sizeText = event.target.textContent;
  document.getElementById("selectedSizeText").textContent =
    "Tamanho selecionado: " + sizeText;
  localStorage.setItem("selectedSize", size);
  updateSelectedClass(".sizeOption", event.target);
  updateIconSize(size);
}

function selectColor(event, color) {
  event.preventDefault();
  const colorText = event.target.textContent;
  document.getElementById("selectedColorText").textContent =
    "Cor selecionada: " + colorText;
  localStorage.setItem("selectedColor", color);
  updateSelectedClass(".colorOption", event.target);
  updateIconColor(event.target);
}

function updateSelectedClass(buttonClass, selectedButton) {
  const buttons = document.querySelectorAll(buttonClass);
  buttons.forEach((button) => {
    button.classList.remove("selected");
  });
  selectedButton.classList.add("selected");
}

function enviarFormulario(event) {
  event.preventDefault();

  // const userEmail = document.getElementById("userEmail").value;

  window.location.href = "deliverydef.html";
}

function updateButtonColors() {
  const colorOptions = document.querySelectorAll(".colorOption");
  colorOptions.forEach((button) => {
    const color = button.getAttribute("onclick").match(/'([^']+)'/)[1];
    button.style.color =
      color === "black" || color === "blue" || color === "red";
  });
}

function initializeSelections() {
  const defaultModelButton = document.getElementById("defaultModel");
  defaultModelButton.classList.add("selected");
  document.getElementById("selectedModelText").textContent =
    "Modelo selecionado: Mark III";
  localStorage.setItem("selectedModel", "mark III");

  const defaultSizeButton = document.getElementById("defaultSize");
  defaultSizeButton.classList.add("selected");
  document.getElementById("selectedSizeText").textContent =
    "Tamanho selecionado: Pequeno";
  localStorage.setItem("selectedSize", "P");
  updateIconSize("P");

  const defaultColorButton = document.getElementById("defaultColor");
  defaultColorButton.classList.add("selected");
  document.getElementById("selectedColorText").textContent =
    "Cor selecionada: Preto";
  localStorage.setItem("selectedColor", "black");
  updateIconColor(defaultColorButton);

  localStorage.setItem("selectedPrice", "999,00");
}

function updateIconSize(size) {
  const icon = document.getElementById("iconClass");
  switch (size) {
    case "P":
      icon.style.fontSize = "5em";
      break;
    case "M":
      icon.style.fontSize = "7em";
      break;
    case "G":
      icon.style.fontSize = "10em";
      break;
    case "GG":
      icon.style.fontSize = "12em";
      break;
    default:
      icon.style.fontSize = "5em";
  }
}

function updateIconColor(button) {
  const icon = document.getElementById("iconClass");
  const bgColor = window.getComputedStyle(button).backgroundColor;
  icon.style.color = bgColor;
}

// window.addEventListener('load', function () {
//     const token = localStorage.getItem('authToken');
//     if (!token) {
//         alert("Faça login primeiro!!")
//         window.location.href = "signin.html";
//     }
// });
