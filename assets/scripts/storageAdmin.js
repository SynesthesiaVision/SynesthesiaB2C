async function buscarCores() {
    try {
        const response = await fetch('http://localhost:18080/api-V1/color/all', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            const cores = await response.json();
            preencherTabelaComCores(cores);
        } else {
            alert(`Erro ao buscar cores: ${response.statusText}`);
        }
    } catch (error) {
        console.error('Erro ao buscar cores:', error);
        alert('Ocorreu um erro ao tentar buscar as cores.');
    }
}

function traduzirCor(cor) {
    switch (cor) {
        case 'black':
            return 'Preto';
        case 'white':
            return 'Branco';
        case 'blue':
            return 'Azul';
        case 'red':
            return 'Vermelho';
        case 'pink':
            return 'Rosa';
        case 'green':
            return 'Verde';
        case 'yellow':
            return 'Amarelo';
        case 'orange':
            return 'Laranja';
        case 'purple':
            return 'Roxo';
        default:
            return cor; 
    }
}

async function excluirCor(id) {
    try {
        const response = await fetch(`http://localhost:18080/api-V1/color/${id}`, {
            method: 'DELETE', 
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            buscarCores(); 
        } else {
            alert(`Erro ao excluir a cor: ${response.statusText}`);
        }
    } catch (error) {
        console.error('Erro ao excluir a cor:', error);
        alert('Ocorreu um erro ao tentar excluir a cor.');
    }
}

function preencherTabelaComCores(cores) {
    const tbodyCores = document.querySelector('.coresTable tbody');

    tbodyCores.innerHTML = '';

    cores.forEach(cor => {
        const tr = document.createElement('tr');
        tr.classList.add('bodyTable');

        tr.addEventListener('click', () => {
            const confirmDelete = confirm(`Você realmente deseja excluir a cor "${cor.name}"?`);
            if (confirmDelete) {
                excluirCor(cor.id); 
            }
        });

        tr.innerHTML = `
            <td>${cor.id}</td>
            <td>${cor.name}</td>
        `;

        tbodyCores.appendChild(tr);
    });
}

buscarCores();

async function adicionarCor() {
    const colorName = document.getElementById('colorNameInput').value;

    if (!colorName) {
        alert('Por favor, insira um nome de cor.');
        return;
    }

    try {
        const response = await fetch(`http://localhost:18080/api-V1/color/add?name=${colorName}`, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            buscarCores(); 
        } else {
            alert(`Erro ao adicionar a cor: ${response.statusText}`);
        }
    } catch (error) {
        console.error('Erro ao adicionar a cor:', error);
        alert('Ocorreu um erro ao tentar adicionar a cor.');
    }
}

document.getElementById('addColorButton').addEventListener('click', adicionarCor);
