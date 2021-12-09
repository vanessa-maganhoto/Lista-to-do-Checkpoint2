// Uma ruma de códigos svg para adicionar através do innerHTML nos respectivos botões.
// Fiz assim porque não descobri como ler um arquivo e depois injetar seu conteúdo no código js usando a api do browser.
const bolinhaSvg = `<svg width="89" height="89" viewBox="0 0 89 89" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M44.3401 83.6802C66.0671 83.6802 83.6802 66.0671 83.6802 44.3401C83.6802 22.6132 66.0671 5 44.3401 5C22.6132 5 5 22.6132 5 44.3401C5 66.0671 22.6132 83.6802 44.3401 83.6802Z" stroke="#232323" stroke-width="9" stroke-miterlimit="10"/>
</svg>`;

const preenchidaSvg = `<svg width="89" height="89" viewBox="0 0 89 89" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M44.74 84.0801C66.467 84.0801 84.0801 66.467 84.0801 44.74C84.0801 23.0131 66.467 5.3999 44.74 5.3999C23.0131 5.3999 5.3999 23.0131 5.3999 44.74C5.3999 66.467 23.0131 84.0801 44.74 84.0801Z" stroke="#56ABEF" stroke-width="9" stroke-miterlimit="10"/>
<path d="M44.5 71C59.1355 71 71 59.1355 71 44.5C71 29.8645 59.1355 18 44.5 18C29.8645 18 18 29.8645 18 44.5C18 59.1355 29.8645 71 44.5 71Z" fill="#56ABEF"/>
</svg>`;

const dataCriacaoSvg = `<svg width="73" height="81" viewBox="0 0 73 81" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_406_134)">
<path d="M64.8001 8.10004H60.7501V0H52.6501V8.10004H20.2501V0H12.1501V8.10004H8.10014C7.03831 8.10002 5.98695 8.30979 5.00645 8.71735C4.02595 9.1249 3.13563 9.72217 2.38667 10.4749C1.6377 11.2275 1.04484 12.1208 0.642143 13.1033C0.23945 14.0858 0.0348687 15.1382 0.0401383 16.2V72.9C0.0388222 73.9641 0.247433 75.018 0.65403 76.0013C1.06063 76.9846 1.65723 77.8781 2.40965 78.6305C3.16206 79.3829 4.05551 79.9795 5.03884 80.3861C6.02217 80.7927 7.07607 81.0013 8.14014 81H64.8401C66.9868 80.9947 69.044 80.1397 70.5619 78.6218C72.0798 77.1039 72.9349 75.0467 72.9401 72.9V16.2C72.9322 14.0473 72.0708 11.9856 70.5448 10.4671C69.0188 8.94863 66.9529 8.09737 64.8001 8.10004ZM64.8001 72.9H8.10014V32.4H64.8001V72.9ZM64.8001 24.3H8.10014V16.2H64.8001V24.3ZM36.4301 44.55H56.6801V64.8H36.4301V44.55Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_406_134">
<rect width="72.9" height="81" fill="white"/>
</clipPath>
</defs>
</svg>`;

const prazoSvg = `<svg width="73" height="81" viewBox="0 0 73 81" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_406_132)">
<path d="M64.8 8.10004H60.75V0H52.65V8.10004H20.25V0H12.15V8.10004H8.10001C5.95419 8.10794 3.8985 8.96387 2.38116 10.4812C0.86383 11.9985 0.00790366 14.0542 0 16.2V72.9C0.00528079 75.0467 0.860364 77.1039 2.37827 78.6218C3.89617 80.1397 5.95338 80.9947 8.10001 81H64.8C66.9466 80.9947 69.0039 80.1397 70.5218 78.6218C72.0397 77.1039 72.8947 75.0467 72.9 72.9V16.2C72.8947 14.0534 72.0397 11.9962 70.5218 10.4783C69.0039 8.96037 66.9466 8.10532 64.8 8.10004ZM64.8 72.9H8.10001V32.4H64.8V72.9ZM8.10001 24.27V16.17H64.8V24.27H8.10001ZM30.62 66.63L54.62 42.63L50.33 38.33L30.61 58.06L22.06 49.51L17.77 53.8L30.62 66.63Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_406_132">
<rect width="72.9" height="81" fill="white"/>
</clipPath>
</defs>
</svg>`;

const lixeiraSvg = `<svg width="60" height="76" viewBox="0 0 60 76" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_406_130)">
<path d="M46.45 25.33V67.56H12.67V25.33H46.45ZM40.12 0H19L14.78 4.21997H0V12.67H59.12V4.21997H44.34L40.12 0ZM54.89 16.89H4.23001V67.56C4.23792 69.796 5.12966 71.9381 6.71075 73.5192C8.29185 75.1003 10.434 75.9921 12.67 76H46.45C48.686 75.9921 50.8281 75.1003 52.4092 73.5192C53.9903 71.9381 54.8821 69.796 54.89 67.56V16.89Z" fill="#232323"/>
</g>
<defs>
<clipPath id="clip0_406_130">
<rect width="59.11" height="76" fill="white"/>
</clipPath>
</defs>
</svg>`;

// Função que recebe as informações de cada tarefa (obtidas no formulário) e gera um elemento já estilizado contendo-as.
function generateCard(info = { dataCriacao: "", prazo: "", titulo: "" }) {
    const tarefa = document.createElement("li");
    tarefa.className = "tarefa";

    const marcarBtn = document.createElement("button");
    marcarBtn.classList.add("btn", "marcar");
    marcarBtn.innerHTML = bolinhaSvg;
    // Adiciona a função de mover para a lista de concluídas quando clicar no botão.
    marcarBtn.addEventListener("click", (e) => {
        moveToDone(e.currentTarget.parentElement);
    });

    const linha = document.createElement("div");
    linha.className = "linha";

    const tituloTodo = document.createElement("span");
    tituloTodo.className = "titulo-todo";
    tituloTodo.innerText = info.titulo;

    linha.appendChild(tituloTodo);

    const fimDaLinha = document.createElement("span");
    fimDaLinha.className = "fim-da-linha";

    const datas = document.createElement("span");
    datas.className = "datas";

    const dataCriacaoTodo = document.createElement("span");
    dataCriacaoTodo.className = "dataCriacao-todo";
    dataCriacaoTodo.innerHTML = dataCriacaoSvg;

    const dataCriacao = document.createElement("span");
    dataCriacao.innerText = info.dataCriacao;

    dataCriacaoTodo.appendChild(dataCriacao);

    const prazoTodo = document.createElement("span");
    prazoTodo.className = "prazo-todo";
    prazoTodo.innerHTML = prazoSvg;

    const prazo = document.createElement("span");
    prazo.innerText = info.prazo;

    prazoTodo.appendChild(prazo);

    datas.appendChild(dataCriacaoTodo);
    datas.appendChild(prazoTodo);

    fimDaLinha.appendChild(datas);

    const excluirTodo = document.createElement("button");
    excluirTodo.classList.add("excluir-todo", "btn");
    excluirTodo.innerHTML = lixeiraSvg;
    // Adiciona a função de deletar o li.
    excluirTodo.addEventListener("click", (e) => {
        Swal.fire({
            title: 'Excluir tarefa',
            text: "Tem certeza que deseja excluir essa tarefa?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#56ABEF',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sim, eu sei o que estou fazendo!',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Apagada!',
                    'A sua tarefa foi apagada com sucesso.',
                    'success'
                )
                tarefa.remove();
            }
        })
    });

    fimDaLinha.appendChild(excluirTodo);

    linha.appendChild(fimDaLinha);

    tarefa.appendChild(marcarBtn);
    tarefa.appendChild(linha);

    // Aqui não fazemos apenas um appendChild, pois não queremos que a nova tarefa fique abaixo do botão de adicionar tarefas, mas acima. 
    const toDoList = document.getElementById("to-do-list");
    const liAdicionar = document.getElementById("li-adicionar");
    toDoList.insertBefore(tarefa, liAdicionar);
}

// Função que move uma tarefa para a lista de tarefas concluídas.
function moveToDone(target) {
    const tarefasConcluidas = document.querySelector(".tarefas-concluidas");
    // Obs: quando o appendChild é chamado, ele já se responsabiliza não só por colocar o elemento no local desejado, mas apagá-lo do local antigo, caso já estivesse na árvore de elementos.
    tarefasConcluidas.appendChild(target);

    target.classList.add("concluida");

    // Aqui é dado o nome da variável não pensando no que o querySelector retornou, mas, sim, pensando no elemento que vamos transformá-lo.
    const desmarcarBtn = target.querySelector(".marcar");

    desmarcarBtn.className = "btn preenchida";
    desmarcarBtn.innerHTML = preenchidaSvg;
    desmarcarBtn.addEventListener("click", (e) => {
        moveToDo(e.currentTarget.parentElement);
    });
}

// Função que move uma tarefa concluída para a lista de tarefas a fazer.
function moveToDo(target) {
    const toDoList = document.getElementById("to-do-list");
    const liAdicionar = document.getElementById("li-adicionar");
    toDoList.insertBefore(target, liAdicionar);

    target.className = "tarefa";

    // Aqui é dado o nome da variável não pensando no que o querySelector retornou, mas, sim, pensando no elemento que vamos transformá-lo.
    const marcarBtn = target.querySelector(".preenchida");
    marcarBtn.addEventListener("click", (e) => {
        moveToDone(e.currentTarget.parentElement);
    });

    marcarBtn.className = "btn marcar";
    marcarBtn.innerHTML = bolinhaSvg;
}