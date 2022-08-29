let pessoa = {
    nome: "clara",
    anoNascimento: 1996,
    nomeDeUsuario: "CLARA_GOMES",
    temCarro: true,
    valeCombustivel: "R$ 0,00",
    distanciaDoTrabalho: "120km",
    endereco: []
  }

//   Exercício 1 - Qual a idade da pessoa ?
// Desenvolva uma função que recebe como parâmetro o objeto pessoa e retorne a idade em anos.

// O cálculo estará incompleto, pois não estaremos tratando o dia e o mês de nascimento. Não se 
// preocupe, use apenas o ano atual e o ano de nascimento como base.

function qualIdade(ano){
  let idade= ano-pessoa.anoNascimento
  return idade
    }

    console.log(`A sua idade é ${qualIdade(2022)} anos`)


// Exercício 2 - Normalizando a informação nome
// Desenvolva uma função que recebe como parâmetro
// o objeto pessoa e retorne a propriedade nome com apenas a primeira letra em maiúsculo.

function normalizaDado(pessoa){
   for(let i=0; i<pessoa.nome.length; i++){
    let letra = pessoa.nome[0].toUpperCase()
  
    return letra
   }
    }

console.log(normalizaDado(pessoa))


let listaUsuarios={

}
function criandoListaDeUsuarios(pessoa){
   listaUsuarios+= pessoa
    }

criandoListaDeUsuarios(pessoa)


console.log(listaUsuarios);
  
  
  