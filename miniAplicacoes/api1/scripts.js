// adicionar id no elemento header
const header = document.querySelector('header')
header.setAttribute('id', 'header')

// adicionar valor a um input
const inputName = document.querySelector('input')
inputName.value = "digite o seu nome"

// adicionar (somar) texto
const element = document.querySelector('h2')
element.textContent = "Seja bem vindo!"

// criar e adicionar elementos
const div1 = document.createElement('div')
div1.innerText = 'Olá devs!'

const body = document.querySelector('body') //selecionar o lugar onde o novo elemento será inserido
body.insertBefore(div1, header.nextElementSibling)

const headText = document.createElement('h5')
headText.innerText = "Página de testes em HTML, CSS e JavaScrispt usando a DOM"
body.prepend(headText) //adiciona ANTES de tudo no body

const div2 = document.createElement('div')
div2.innerText = "A função dessa página é aprender a usar as funcionalidades da DOM"
body.insertBefore(div2, div1.nextElementSibling) //recebe dois argumentos: o elemento a ser inserido & antes de qual ele vem

const text2 = document.createElement('h4')
text2.innerHTML = "Continua..."
body.append(text2) //adiciona como filho DEPOIS de tudo no body

// EVENTO ao clicar
function clique(){
    console.log("clicou")
}

// EVENTO ao digitar
inputName.onkeyup = function(){
    console.log("teclou")
}

// EVENTO pelo javaScript
element.addEventListener('click', clique)
