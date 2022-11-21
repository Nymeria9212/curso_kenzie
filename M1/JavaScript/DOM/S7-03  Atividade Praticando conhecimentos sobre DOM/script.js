const lista= document.createElement('ul')
const itemLista= document.createElement('li')
itemLista.innerText= 'repetir cada vez mais'
lista.appendChild(itemLista)
const main= document.querySelector("#root")
main.appendChild(lista)