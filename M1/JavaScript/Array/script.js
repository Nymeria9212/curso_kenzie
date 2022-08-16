//exercicio exemplo
// let minhaPrimeiraLista = [
//     "Matemática",
//     "Química",
//     "Geografia",
//     "Português",
//     "Física",
//   ];

//   console.log(minhaPrimeiraLista[2])

//   minhaPrimeiraLista[2] = 'História'

//   console.log(minhaPrimeiraLista)

// let nomeDosCompetidores = ["Maria", "Heric", "Roberta", "Rafael", "Lucas"]
// // console.log(nomeDosCompetidores[0]);
// // console.log(nomeDosCompetidores.length);
// // console.log(nomeDosCompetidores[4]);
// let posicoesDoPodio = [1,2,3,4,5]
// console.log( posicoesDoPodio[0],nomeDosCompetidores[0]);
// console.log( posicoesDoPodio[1],nomeDosCompetidores[1]);
// console.log( posicoesDoPodio[2],nomeDosCompetidores[2]);
// console.log( posicoesDoPodio[3],nomeDosCompetidores[3]);
// console.log( posicoesDoPodio[4],nomeDosCompetidores[4]);



//verificar se existe um number no meio da array

// const tiposDiversos = [1.5, "String", false, 10]
// const tiposDiversos2 = [true, "String", "boolen", '10']
    
// function qualTipoDeElemento(lista) {
//     let lista1 = typeof (lista[0])
//     let lista2 = typeof (lista[1])
//     let lista3= typeof (lista[2])
//     let lista4 = typeof (lista[3])
//   if(lista1 === "number" || lista2 ==="number" ||lista3 ==="number" ||lista4 ==="number" ){
//     return true
//   }else{
//     return false
//   }
// }

// let verificaUm = (qualTipoDeElemento(tiposDiversos))
// let verificaDois = (qualTipoDeElemento(tiposDiversos2))

// console.log(verificaUm);
// console.log(verificaDois);

let passageiros =['André', 'Luciana', 'Maria']
// passageiros[1]='André'
// passageiros[2]= 'Luciana'
// passageiros[3]='Maria'

console.log(passageiros)

function ganhador(){

return Math.floor(Math.random() * (4 - 1) )
}

let premio = ganhador()

console.log (passageiros[premio])
