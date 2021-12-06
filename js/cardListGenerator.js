const bolinhaSvg = `<svg width="89" height="89" viewBox="0 0 89 89" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M44.3401 83.6802C66.0671 83.6802 83.6802 66.0671 83.6802 44.3401C83.6802 22.6132 66.0671 5 44.3401 5C22.6132 5 5 22.6132 5 44.3401C5 66.0671 22.6132 83.6802 44.3401 83.6802Z" stroke="#232323" stroke-width="9" stroke-miterlimit="10"/>
</svg>`;

const preenchidaSvg = `<svg width="89" height="89" viewBox="0 0 89 89" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M44.74 84.0801C66.467 84.0801 84.0801 66.467 84.0801 44.74C84.0801 23.0131 66.467 5.3999 44.74 5.3999C23.0131 5.3999 5.3999 23.0131 5.3999 44.74C5.3999 66.467 23.0131 84.0801 44.74 84.0801Z" stroke="#56ABEF" stroke-width="9" stroke-miterlimit="10"/>
<path d="M44.5 71C59.1355 71 71 59.1355 71 44.5C71 29.8645 59.1355 18 44.5 18C29.8645 18 18 29.8645 18 44.5C18 59.1355 29.8645 71 44.5 71Z" fill="#56ABEF"/>
</svg>`;

const submit = document.getElementById('gerarCard')
let cont = 0
const qtd = 20

submit.addEventListener('click', card => {
    card.preventDefault()

    const url = 'https://jsonplaceholder.typicode.com/todos/'

    fetch(url)

    .then(response => response.json())
        .then(arrayCards => {

            let arrayCardsSlice = arrayCards.slice(cont * qtd, qtd * (cont + 1))
            cont++

            console.log(cont, arrayCardsSlice)
            arrayCardsSlice.forEach(tarefaAPI => {
                if (!tarefaAPI.completed) {
                    function gerarTarefaPendente() {
                        const tarefasPendentes = document.querySelector('.tarefa-pendente')

                        const tarefa = document.createElement("li");
                        tarefa.className = "tarefa";

                        const marcarBtn = document.createElement("button");
                        marcarBtn.classList.add("btn", "marcar");
                        marcarBtn.innerHTML = bolinhaSvg;

                        const linha = document.createElement("div");
                        linha.className = "linha";

                        const tituloTodo = document.createElement("span");
                        tituloTodo.className = "titulo-todo";
                        tituloTodo.innerText = `${tarefaAPI.id} • ${tarefaAPI.title}`;

                        tarefa.appendChild(marcarBtn);
                        tarefa.appendChild(linha);
                        linha.appendChild(tituloTodo);

                        tarefasPendentes.appendChild(tarefa);
                    }
                    gerarTarefaPendente();
                } else {
                    async function gerarTarefaConcluida() {
                        const tarefasConcluidas = document.querySelector(".tarefas-concluidas");

                        const tarefa = document.createElement("li");
                        tarefa.className = ("tarefa concluida");

                        const desmarcarBtn = document.createElement("button");
                        desmarcarBtn.className = "btn preenchida";
                        desmarcarBtn.innerHTML = preenchidaSvg

                        const linha = document.createElement("div");
                        linha.className = "linha";

                        const tituloTodo = document.createElement("span");
                        tituloTodo.className = "titulo-todo";
                        tituloTodo.innerText = `${tarefaAPI.id} • ${tarefaAPI.title}`;

                        tarefa.appendChild(desmarcarBtn);
                        tarefa.appendChild(linha);
                        linha.appendChild(tituloTodo);

                        tarefasConcluidas.appendChild(tarefa);
                    }
                    gerarTarefaConcluida();
                }
            });
        });
});