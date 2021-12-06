const modoEscuro = document.querySelector('.clique-modo-escuro')
const body = document.querySelector('body')


function claroEscuro() {
    if (body.classList.toggle('escuro')) {

        modoEscuro.innerText = `Modo claro`
    } else {
        modoEscuro.innerText = `Modo escuro`
    }

}

modoEscuro.onclick = claroEscuro


// Detecta se o modo preferido do navegador é o 'dark' e chama a função que ativa o modo escuro do site.
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    claroEscuro();
}