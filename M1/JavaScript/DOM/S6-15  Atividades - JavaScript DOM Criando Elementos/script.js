///exercicio 1(facil) (codigo pronto)
document.createElement('p')
const tag = document.createElement('p')
console.log(tag)
tag.innerText = "Olá, eu sou uma tag criada pelo JS"
document.querySelector('body').appendChild(tag)

//exercicio 2 (intermediario) (codigo pronto)
const tagInput = document.createElement('input')
tagInput.placeholder = "Digite seu texto aqui"

const form = document.querySelector('form')
form.appendChild(tagInput)


//exercicio 3 (avançado) (fiz sozinha)

const artigo = document.createElement('article')
const titulo = document.createElement('h1')
const paragrafo = document.createElement('p')
const link = document.createElement('a')
document.querySelector('body').appendChild(artigo)
artigo.appendChild(titulo)
artigo.appendChild(paragrafo)
artigo.appendChild(link)

titulo.innerText = "Titulo do post"
paragrafo.innerText='Paragrafo do post'
link.innerText = 'link'

console.log(artigo)