
const modoEscuro = document.querySelector('.clique-modo-escuro')
const body = document.querySelector('body')
const img = document.querySelector('.imagem-botao')

function claroEscuro(){
    body.classList.toggle('claro-escuro')
    modoEscuro.innerText = `Modo claro`
    img.setAttribute('src','./img/Addcinza.svg')
}

modoEscuro.onclick= claroEscuro 


// Detecta se o modo preferido do navegador é o 'dark' e chama a função que ativa o modo escuro do site.
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    claroEscuro();
}
