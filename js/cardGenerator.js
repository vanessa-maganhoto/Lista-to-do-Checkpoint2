const submit = document.getElementById('gerarCard')

submit.addEventListener('click',card => {
    card.preventDefault()

    const url = 'https://jsonplaceholder.typicode.com/todos/'

    fetch(url)

    .then(response => response.json())
    .then (arrayCards => {
        console.log(arrayCards)
        arrayCards.forEach(tarefa => {
            
            let p = document.createElement('p')
            
            if (tarefa.completed){
                p.classList.add('tarefaConcluida')
            }
            document.querySelector('div').appendChild(p).innerHTML += `Título: ${tarefa.title} \n, <br>
            ID da tarefa: ${tarefa.id}`
        });
    })

})



