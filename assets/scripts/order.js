function submitForm() {
    const formData = {
        nome: document.getElementById('nome').value,
        senha: document.getElementById('senha').value,
        email: document.getElementById('email').value,
        cpf: document.getElementById('cpf').value,
        zipCodeBR: document.getElementById('zipCodeBR').value,
        address: document.getElementById('address').value,
        phone: document.getElementById('phone').value,
    };

    fetch('http://localhost:4000/api/client/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(formData)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro na requisição: ${response.status} - ${response.statusText}`);
            }
            return response.text().then(text => {
                return text ? JSON.parse(text) : {};
            });
        })
        .then(data => {
            console.log('Resposta da API:', data);
        })
        .catch(error => {
            console.error('Erro na requisição:', error);
        });
}

function contagem() {
    var radios = document.getElementsByName("optionColor");
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            console.log("Escolheu: " + radios[i].value);
        }
    }
}

function updateLegend(color) {
    var legend = document.getElementById('titleColor');
    legend.innerText = 'Cor: ' + color;
}

function changeColor() {
    var radios = document.getElementsByName('optionColor');
    for (var i = 0; i < radios.length; i++) {
        radios[i].parentNode.style.backgroundColor = radios[i].value;
        radios[i].parentNode.style.borderRadius = "50%";

        if (radios[i].checked || radios[i].value == "black") {
            var colorTxt = "Preto"
            updateLegend(colorTxt);
        } else if (radios[i].checked || radios[i].value == "white") {
            var colorTxt = "Branco"
            updateLegend(colorTxt);
        } else if (radios[i].checked || radios[i].value == "yellow") {
            var colorTxt = "Amarelo"
            updateLegend(colorTxt);
        }
    }
}
changeColor()

function changeGif(color) {
    var imgElement = document.getElementById('gifImage');

    var gifPath;
    switch (color) {
        case 'black':
            gifPath = '../assets/img/oculos-preto.gif';
            break;
        case 'white':
            gifPath = '../assets/img/oculos-branco.gif';
            break;
        case 'pink':
            gifPath = '../assets/img/oculos-rosa.gif'; 
            break;
        case 'blue':
            gifPath = '../assets/img/oculos-azul.gif'; 
            break;
        default:
            gifPath = '../assets/img/oculos-azul.gif';
    }

    imgElement.src = gifPath;
}
