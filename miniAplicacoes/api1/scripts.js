// STYLE
const back = document.querySelector("body")
back.style.backgroundColor = "rgb(36, 34, 34)"

const styleH2 = document.querySelectorAll("h2")
back.style.color = "darkseagreen" //darkslategrey

// adicionar id no elemento header
const header = document.querySelector('header')
header.setAttribute('id', 'header')

// adicionar valor a um input
const inputName = document.querySelector('input')
inputName.value = "digite o seu nome"

// adicionar texto
const element = document.querySelector('h2')
element.textContent += " | Seja bem vindo!"