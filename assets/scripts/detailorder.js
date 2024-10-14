async function obterDetalhesPedido() {
  const urlParams = new URLSearchParams(window.location.search);
  const pedidoId = urlParams.get('id');

  if (!pedidoId) {
    alert('ID do pedido não encontrado!');
    return;
  }

  try {
    const response = await fetch(`http://localhost:18080/api-V1/order/findById?id=${pedidoId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      const pedido = await response.json();
      exibirDetalhesPedido(pedido);
    } else {
      alert(`Erro ao buscar detalhes do pedido: ${response.statusText}`);
    }
  } catch (error) {
    console.error('Erro ao buscar detalhes do pedido:', error);
    alert('Ocorreu um erro ao tentar buscar os detalhes do pedido.');
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
    default:
      return cor;
  }
}

function traduzirTamanho(tamanho) {
  switch (tamanho) {
    case 'P':
      return 'Pequeno';
    case 'M':
      return 'Médio';
    case 'G':
      return 'Grande';
    case 'GG':
      return 'Extra Grande';
    default:
      return tamanho;
  }
}

function traduzirOrderPaymentStatus(status) {
  switch (status) {
    case 'WAITING_PAYMENT':
      return 'Aguardando Pagamento';
    case 'PAID':
      return 'Pago';
    case 'SHIPPED':
      return 'Enviado';
    case 'DELIVERED':
      return 'Entregue';
    case 'CANCELED':
      return 'Cancelado';
    default:
      return status; 
  }
}

function traduzirOrderBuildStatus(status) {
  switch (status) {
    case 'PRODUCE':
      return 'Em Produção';
    case 'DESIGNATED':
      return 'Designado';
    case 'CONCLUDED':
      return 'Concluído';
    default:
      return status;
  }
}

function exibirDetalhesPedido(pedido) {
  const detalhesContainer = document.getElementById('detalhesPedido');

  document.getElementById('orderPaymentStatus').value = pedido.orderPaymentStatus;
  document.getElementById('orderBuildStatus').value = pedido.orderBuildStatus;

  if (pedido.technician) {
    document.getElementById('technicianSelect').value = pedido.technician.id;
  }

  if (pedido.salesMonitor) {
    document.getElementById('salesMonitorSelect').value = pedido.salesMonitor.id;
  }

  detalhesContainer.innerHTML = `
    <p><strong>ID do Pedido:</strong> ${pedido.id}</p>
    <p><strong>Preço:</strong> R$${pedido.price}</p>
    <p><strong>Data de Criação:</strong> ${formatDate(pedido.createdAt)}</p>
    <p><strong>Cor:</strong> ${pedido.color ? traduzirCor(pedido.color.name) : 'N/A'}</p>
    <p><strong>Tamanho:</strong> ${pedido.size ? traduzirTamanho(pedido.size) : 'N/A'}</p>
    <p><strong>Modelo:</strong> ${pedido.model ? pedido.model.name : 'N/A'}</p>
    <p><strong>Sales Monitor:</strong> ${pedido.salesMonitor ? pedido.salesMonitor.name : 'Nenhum no momento'}</p>
    <p><strong>Técnico:</strong> ${pedido.technician ? pedido.technician.name : 'Nenhum no momento'}</p>
    <p><strong>Mensagem:</strong> <br> ${pedido.message ? pedido.message : 'Nenhuma mensagem'}</p>
    <p><strong>Status de Pagamento:</strong> <br> ${traduzirOrderPaymentStatus(pedido.orderPaymentStatus)}</p>
    <p><strong>Status de Produção:</strong> <br> ${traduzirOrderBuildStatus(pedido.orderBuildStatus)}</p>
  `;
}

async function obterTecnicos() {
  try {
    const response = await fetch('http://localhost:18080/api-V1/user/findAllByRole?role=TECHNICIAN', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      const tecnicos = await response.json();
      preencherSelecaoTecnicos(tecnicos);
    } else {
      alert(`Erro ao buscar técnicos: ${response.statusText}`);
    }
  } catch (error) {
    console.error('Erro ao buscar técnicos:', error);
    alert('Ocorreu um erro ao tentar buscar os técnicos.');
  }
}

function preencherSelecaoTecnicos(tecnicos) {
  const select = document.getElementById('technicianSelect');

  tecnicos.forEach(tecnico => {
    const option = document.createElement('option');
    option.value = tecnico.id;
    option.textContent = tecnico.name;
    select.appendChild(option);
  });
}

async function obterSalesMonitors() {
  try {
    const response = await fetch('http://localhost:18080/api-V1/user/findAllByRole?role=SALES_MONITOR', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      const salesMonitors = await response.json();
      preencherSelecaoSalesMonitors(salesMonitors);
    } else {
      alert(`Erro ao buscar sales monitors: ${response.statusText}`);
    }
  } catch (error) {
    console.error('Erro ao buscar sales monitors:', error);
    alert('Ocorreu um erro ao tentar buscar os sales monitors.');
  }
}

function preencherSelecaoSalesMonitors(salesMonitors) {
  const select = document.getElementById('salesMonitorSelect');

  salesMonitors.forEach(salesMonitor => {
    const option = document.createElement('option');
    option.value = salesMonitor.id;
    option.textContent = salesMonitor.name;
    select.appendChild(option);
  });
}

async function atualizarStatusPedido() {
  const urlParams = new URLSearchParams(window.location.search);
  const pedidoId = urlParams.get('id');

  const orderPaymentStatus = document.getElementById('orderPaymentStatus').value;
  const orderBuildStatus = document.getElementById('orderBuildStatus').value;

  try {
    const response = await fetch(`http://localhost:18080/api-V1/order/updateStatus?id=${pedidoId}&orderPaymentStatus=${orderPaymentStatus}&orderBuildStatus=${orderBuildStatus}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      }
    });

    if (response.ok) {
      alert('Status do pedido atualizado com sucesso!');
      obterDetalhesPedido();
    } else {
      alert(`Erro ao atualizar status do pedido: ${response.statusText}`);
    }
  } catch (error) {
    console.error('Erro ao atualizar status do pedido:', error);
    alert('Ocorreu um erro ao tentar atualizar o status do pedido.');
  }
}

async function atualizarTecnicoPedido() {
  const urlParams = new URLSearchParams(window.location.search);
  const pedidoId = urlParams.get('id');
  const technicianId = document.getElementById('technicianSelect').value;

  try {
    const response = await fetch(`http://localhost:18080/api-V1/order/setTechnician?orderId=${pedidoId}&technicianId=${technicianId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      }
    });

    if (response.ok) {
      alert('Técnico do pedido atualizado com sucesso!');
      obterDetalhesPedido();
    } else {
      alert(`Erro ao atualizar técnico do pedido: ${response.statusText}`);
    }
  } catch (error) {
    console.error('Erro ao atualizar técnico do pedido:', error);
    alert('Ocorreu um erro ao tentar atualizar o técnico do pedido.');
  }
}

async function atualizarSalesMonitorPedido() {
  const urlParams = new URLSearchParams(window.location.search);
  const pedidoId = urlParams.get('id');
  const salesMonitorId = document.getElementById('salesMonitorSelect').value;

  try {
    const response = await fetch(`http://localhost:18080/api-V1/order/updateSalesMonitor?orderId=${pedidoId}&monitorId=${salesMonitorId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      }
    });

    if (response.ok) {
      alert('Sales monitor do pedido atualizado com sucesso!');
      obterDetalhesPedido();
    } else {
      alert(`Erro ao atualizar sales monitor do pedido: ${response.statusText}`);
    }
  } catch (error) {
    console.error('Erro ao atualizar sales monitor do pedido:', error);
    alert('Ocorreu um erro ao tentar atualizar o sales monitor do pedido.');
  }
}

obterTecnicos();
obterSalesMonitors();
obterDetalhesPedido();

document.getElementById('atualizarPedido').addEventListener('click', atualizarStatusPedido);
document.getElementById('atualizarTecnico').addEventListener('click', atualizarTecnicoPedido);
document.getElementById('atualizarSalesMonitor').addEventListener('click', atualizarSalesMonitorPedido);

function formatDate(timestamp) {
  const date = new Date(timestamp);
  return date.toLocaleDateString();
}
