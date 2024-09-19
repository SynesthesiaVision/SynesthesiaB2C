function limpa_formulário_cep() {
    document.getElementById('uf').value = ("");
    document.getElementById('cidade').value = ("");
    document.getElementById('bairro').value = ("");
    document.getElementById('rua').value = ("");
}

function meu_callback(conteudo) {
    if (!("erro" in conteudo)) {
        document.getElementById('uf').value = (conteudo.uf);
        document.getElementById('cidade').value = (conteudo.localidade);
        document.getElementById('bairro').value = (conteudo.bairro);
        document.getElementById('rua').value = (conteudo.logradouro);
    } else {
        limpa_formulário_cep();
        alert("CEP não encontrado.");
    }
}

function formatarCEP(input) {
    let cep = input.value.replace(/\D/g, '');
    cep = cep.replace(/^(\d{5})(\d)/, '$1-$2');
    input.value = cep;
}

function preencherCampoCep(zipCodeBR) {
    const cepInput = document.getElementById("cep");
    if (cepInput) {
        cepInput.value = zipCodeBR;
        formatarCEP(cepInput); // Formata o CEP, se necessário
    }
}

function pesquisacep(valor) {
    var cep = valor.replace(/\D/g, '');
    if (cep != "") {
        var validacep = /^[0-9]{8}$/;
        if (validacep.test(cep)) {
            document.getElementById('uf').value = "...";
            document.getElementById('cidade').value = "...";
            document.getElementById('bairro').value = "...";
            document.getElementById('rua').value = "...";
            var script = document.createElement('script');
            script.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=meu_callback';
            document.body.appendChild(script);
        } else {
            limpa_formulário_cep();
            alert("Formato de CEP inválido.");
        }
    } else {
        limpa_formulário_cep();
    }
}

function atualizarConcat() {
    var uf = document.getElementById('uf').value;
    var cidade = document.getElementById('cidade').value;
    var bairro = document.getElementById('bairro').value;
    var rua = document.getElementById('rua').value;
    var numero = document.getElementById('numero').value;
    var complemento = document.getElementById('complemento').value;

    var camposConcatenados = [cidade, uf, bairro, rua, numero, complemento]
        .filter(function (campo) { return campo !== ''; })
        .join(', ');

    document.getElementById('concat').value = camposConcatenados;
}

document.addEventListener("DOMContentLoaded", function () {
    var inputs = document.querySelectorAll('#uf, #cidade, #bairro, #rua, #numero, #complemento');
    inputs.forEach(function (input) {
        input.addEventListener('input', atualizarConcat);
    });

    obterDadosUsuario();

    const cepInput = document.getElementById("cep");
    if (cepInput) {
        cepInput.focus();
    }
});

async function obterDadosUsuario() {
    try {
        const userEmail = localStorage.getItem("userEmail");
        const response = await fetch(`http://localhost:18080/api-V1/user/findByEmail?email=${userEmail}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            const usuario = await response.json();

            if (usuario.zipCodeBR) {
                preencherCampoCep(usuario.zipCodeBR);
            }

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

async function atualizarUsuario(event) {
    event.preventDefault();
    const usuario = await obterDadosUsuario();

    if (!usuario) {
        alert('Usuário não encontrado ou erro ao buscar dados.');
        return;
    }

    usuario.zipCodeBR = document.getElementById('cep').value
    usuario.address = document.getElementById('concat').value;

    try {
        const response = await fetch('http://localhost:18080/api-V1/user/update', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(usuario)
        });

        if (response.ok) {
            window.location.href = "revision.html";
        } else {
            const errorData = await response.json();
            alert(`Erro ao atualizar: ${errorData.message}`);
        }
    } catch (error) {
        console.error('Erro ao atualizar os dados:', error);
        alert('Ocorreu um erro ao tentar atualizar os dados.');
    }
}