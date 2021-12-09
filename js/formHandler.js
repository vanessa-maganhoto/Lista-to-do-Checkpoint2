// Adiciona o event listener de abrir o formulário para todo li de adionar, ao invés de apenas no botão
// Obs: usa Jquery porque o modal a ser aberto é do bootstrap
document.querySelector("#li-adicionar").addEventListener('click', (e) => {
    $('#adicionarTarefa').modal('show');
})

// Para evitar quebra do alinhamento entre data de criação e prazo, achei de bom tom deixar sempre o dia do mês com 2 dígitos.
// Por isso essa função para adicionar o '0' na frente em dias com apenas 1 dígito.
function doubleDigit(number) {
    if (number > 9) return number;
    else return `0${number}`;
}

// Função para formatar as datas do formulário para o formato com o qual serão exibidas.
function formatDate(date) {
    // Concateno string com a data para indicar o fuso horário correto (-3h)
    const dateObj = new Date(date + "T00:00:00-03:00");

    return `${doubleDigit(dateObj.getDate())}.${dateObj.getMonth() + 1}`;
}

// Callback que será acrescentada ao event listener do tipo 'submit' do elemento form.
// Essa callback lida com a apreensão dos valores dos input e a criação e anexação do novo elemento 'tarefa'.
function submit(event) {
    event.preventDefault();

    // Seleciona os elementos dos inputs
    const dataCriacaoEl = document.querySelector("input[name=dataCriacao]");
    const prazoEl = document.querySelector("input[name=prazo]");
    const tituloEl = document.querySelector("input[name=titulo]");

    // Pega o valor dos inputs
    const dataCriacao = formatDate(dataCriacaoEl.value);
    const prazo = formatDate(prazoEl.value);
    const titulo = tituloEl.value;

    // Gera o elemento html e o anexa à árvore de elementos
    generateCard({
        dataCriacao,
        prazo,
        titulo
    });

    // Reinicia os valores dos inputs
    prazoEl.value = dateToString(tomorrowDate);
    tituloEl.value = "";
    $('#adicionarTarefa').modal('hide');
}

// Ouve o usuario finalizar o formulario
const form = document.querySelector("#adicionar-form");
form.addEventListener("submit", submit);