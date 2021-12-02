
const submit = document.getElementById('gerarCard')



submit.addEventListener('click',card => {
    card.preventDefault()

    const url = 'https://jsonplaceholder.typicode.com/todos/'

    fetch(url)

    .then(response => response.json())
    .then (arrayCards => {
        /* let cont = 0
        let qtd = 20 
        arrayCards.slice(cont * qtd, qtd *(cont+1))
        cont ++ */
        
        console.log(arrayCards.slice(0,19))
        arrayCards.forEach(tarefa => {
            
            let cont = 0
            let qtd = 20 
            arrayCards.slice(cont * qtd, qtd *(cont+1))
            cont ++


            let p = document.createElement('p')
            
            if (tarefa.completed){
                p.classList.add('tarefaConcluida')
            }
            document.querySelector('div').appendChild(p).innerHTML += `Título: ${tarefa.title} \n, <br>
            ID da tarefa: ${tarefa.id}`
        });
    })

})



