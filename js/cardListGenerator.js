const submit = document.getElementById('gerarCard')
let cont = 0
const qtd = 20 

submit.addEventListener('click',card => {
    card.preventDefault()

    const url = 'https://jsonplaceholder.typicode.com/todos/'

    fetch(url)

    .then(response => response.json())
    .then (arrayCards => {
       
        let arrayCardsSlice = arrayCards.slice(cont * qtd, qtd *(cont+1))
        cont ++
        
         console.log(cont, arrayCardsSlice)
        arrayCardsSlice.forEach(tarefa => {
            
            let p = document.createElement('p')
            
            if (tarefa.completed){
                p.classList.add('tarefaConcluida')
            }
            document.querySelector('div').appendChild(p).innerHTML += `Título: ${tarefa.title} \n, <br>
            ID da tarefa: ${tarefa.id}`
        });
    })

})