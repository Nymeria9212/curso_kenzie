let produto = {
    nome: 'Notebook',
    valor: 3000.00,
    liquidacao: true,
    distribuidor: 'lojadakenzie.com.br'
}
const body = document.querySelector('body')
const itemLista = document.createElement('li')
itemLista.innerHTML = `
  <span>Nome: ${produto.nome}</span>
  <span>Valor: R$${produto.valor}</span>
  <span>Liquidação: ${produto.liquidacao}</span>
  <span>Distribuidor: <a href="${produto.distribuidor}">${produto.distribuidor}</a></span> 
  `
body.appendChild(itemLista)

itemLista.addEventListener('click', function(event){
    if(produto.liquidacao === true){
        event.preventDefault()
    }
})