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

async function fetchAndRenderColors() {
  try {
    const response = await fetch('http://localhost:18080/api-V1/color/all');
    const colors = await response.json();

    const colorOptionsContainer = document.getElementById('colorOptionsContainer');

    colors.forEach((color) => {
      const button = document.createElement('button');
      button.classList.add('colorOption');
      button.setAttribute('onclick', `selectColor(event, '${color.name}')`);
      button.textContent = capitalizeFirstLetter(color.name);

      colorOptionsContainer.appendChild(button);
    });

  } catch (error) {
    console.error('Failed to fetch colors:', error);
  }
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function selectColor(event, color) {
  event.preventDefault();
  const colorText = event.target.textContent;
  document.getElementById("selectedColorText").textContent =
    "Cor selecionada: " + colorText;
  localStorage.setItem("selectedColor", color);
  updateSelectedClass(".colorOption", event.target);
}

function updateSelectedClass(selector, selectedElement) {
  document.querySelectorAll(selector).forEach((elem) => {
    elem.classList.remove("selected");
  });
  selectedElement.classList.add("selected");
}

function enviarFormulario(event) {
  event.preventDefault();

  window.location.href = "deliverydef.html";
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

window.onload = fetchAndRenderColors;
