const input = document.getElementById('produtoInput');
const botaoAdicionar = document.getElementById('adicionarBtn');
const lista = document.getElementById('listaProdutos');

botaoAdicionar.addEventListener('click', adicionarProduto);

function adicionarProduto() {
  const nomeProduto = input.value.trim();
  if (nomeProduto === '') return;

  const li = document.createElement('li');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.addEventListener('change', () => marcarComoComprado(li, checkbox.checked));

  const span = document.createElement('span');
  span.textContent = nomeProduto;

  const btnEditar = document.createElement('button');
  btnEditar.textContent = 'Editar';
  btnEditar.addEventListener('click', () => editarProduto(span));

  const btnExcluir = document.createElement('button');
  btnExcluir.textContent = 'Excluir';
  btnExcluir.addEventListener('click', () => li.remove());

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(btnEditar);
  li.appendChild(btnExcluir);

  lista.appendChild(li);
  input.value = '';
  input.focus();
}

function marcarComoComprado(item, comprado) {
  item.classList.toggle('comprado', comprado);
  if (comprado) {
    lista.appendChild(item);
  } else {
    lista.insertBefore(item, lista.firstChild);
  }
}

function editarProduto(span) {
  const novoNome = prompt('Digite o novo nome do produto:', span.textContent);
  if (novoNome) {
    span.textContent = novoNome.trim();
  }
}
