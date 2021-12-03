const form = document.querySelector("#adicionar-form");

// inputs
const dataCriacaoInput = document.querySelector("input[name=dataCriacao]");
const prazoInput = document.querySelector("input[name=prazo]");
const tituloInput = document.querySelector("input[name=titulo]");

// wrapper
let contentWrapper = document.querySelector("#to-do-list");

function submit(event) {
  event.preventDefault();

  // Cria os elementos
  let dataCriacao = document.createElement("span");
  let prazo = document.createElement("span");
  let titulo = document.createElement("strong");

  // Insere os valores
  dataCriacao.innerHTML = `Data de criação: ${dataCriacaoInput.value}`;
  prazo.innerHTML = `Prazo: ${prazoInput.value}`;
  titulo.innerHTML = `Título: ${tituloInput.value}`;

  // Cria o elemento pai para reunir os filhos
  let li = document.createElement("li");

  // Junta os elementos filhos ao pai
  li.appendChild(titulo);
  li.appendChild(dataCriacao);
  li.appendChild(prazo);

  // Junta o elemento pai ao elemento centralizador dos itens
  contentWrapper.appendChild(li);
}

// Ouve o usuario finalizar o formulario
form.addEventListener("submit", submit);
