'use strict' // instrui o navegador para usar o modo Estrito, que é como se fosse uma versão mais segura e reduzida do JavaScript.

const display = document.getElementById('display')
const numeros = document.querySelectorAll('[id*=tecla]') // "*" qualquer elemento que tenha "tecla no nome"
const operadores = document.querySelectorAll('[id*=operador]')

const atualizarDisplay = (texto) => {
    display.textContent += texto
}

const inserirNumero = (evento) => atualizarDisplay(evento.target.textContent) // recebe do addEventListener um evento

numeros.forEach (numero => numero.addEventListener('click', inserirNumero)) // add evento em todos os numeros.