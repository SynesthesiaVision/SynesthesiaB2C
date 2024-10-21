async function preencherPedidos() {
  try {
    const response = await fetch('http://localhost:18080/api-V1/order/all', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      const pedidos = await response.json(); 
      preencherTabelaComPedidos(pedidos); 
    } else {
      alert(`Erro ao buscar pedidos: ${response.statusText}`);
    }
  } catch (error) {
    console.error('Erro ao buscar pedidos:', error);
    alert('Ocorreu um erro ao tentar buscar os pedidos.');
  }
}

async function buscarPedidoPorId(id) {
  try {
    const response = await fetch(`http://localhost:18080/api-V1/order/findById?id=${id}`);
    
    if (response.ok) {
      const pedido = await response.json(); 
      preencherTabelaComPedidos([pedido]); 
    } else {
      alert(`Erro ao buscar pedido: ${response.statusText}`);
    }
  } catch (error) {
    console.error('Erro ao buscar pedido:', error);
    alert('Ocorreu um erro ao tentar buscar o pedido.');
  }
}

async function buscarPedidosPorCpf(cpf) {
  try {
    const response = await fetch(`http://localhost:18080/api-V1/order/findAllByCpf?cpf=${cpf}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      const pedidos = await response.json();
      preencherTabelaComPedidos(pedidos);
    } else {
      alert(`Erro ao buscar pedidos: ${response.statusText}`);
    }
  } catch (error) {
    console.error('Erro ao buscar pedidos:', error);
    alert('Ocorreu um erro ao tentar buscar os pedidos.');
  }
}

function preencherTabelaComPedidos(pedidos) {
  const tbodyOpenOrders = document.querySelector('.openOrders tbody');
  const tbodyProgressOrders = document.querySelector('.progressOrders tbody');
  const tbodyFinishOrders = document.querySelector('.finishOrders tbody');

  tbodyOpenOrders.innerHTML = '';
  tbodyProgressOrders.innerHTML = '';
  tbodyFinishOrders.innerHTML = '';

  pedidos.forEach(pedido => {
    const tr = document.createElement('tr');
    tr.classList.add('bodyTable');

    tr.addEventListener('click', () => {
      window.location.href = `detailOrder.html?id=${pedido.id}`;
    });

    tr.innerHTML = `
      <td>${pedido.id}</td>
      <td>${pedido.orderBuildStatus}</td>
      <td>${formatDate(pedido.createdAt)}</td>
    `;

    switch (pedido.orderBuildStatus) {
      case 'PRODUCE':
        tbodyOpenOrders.appendChild(tr);
        break;
      case 'DESIGNATED':
        tbodyProgressOrders.appendChild(tr);
        break;
      case 'CONCLUDED':
        tbodyFinishOrders.appendChild(tr);
        break;
      default:
        console.warn(`Status desconhecido: ${pedido.orderBuildStatus}`);
    }
  });
}

document.getElementById('buscarID').addEventListener('click', () => {
  const pedidoId = document.getElementById('pedidoIdInput').value;

  if (pedidoId) {
    buscarPedidoPorId(pedidoId); 
  } else {
    location.reload(); 
  }
});

document.getElementById('buscarCPF').addEventListener('click', () => {
  const cpf = document.getElementById('cpfInput').value;

  if (cpf) {
    buscarPedidosPorCpf(cpf); 
  } else {
    location.reload(); 
  }
});

preencherPedidos();


function formatDate(timestamp) {
  const date = new Date(timestamp);
  return date.toLocaleDateString(); 
}