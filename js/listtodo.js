
const modoEscuro = document.querySelector('.clique-modo-escuro')
const body = document.querySelector('body')
const img = document.querySelector('.imagem-botao')

function claroEscuro(){
    body.classList.toggle('claro-escuro')
    modoEscuro.innerText = `Modo claro`
    img.setAttribute('src','./img/Addcinza.svg')
}

modoEscuro.onclick= claroEscuro 
