//exemplo loop

//while

// const fruits = ['banana', 'maça', 'abacate']
// let i = 0

// while (i < fruits.length) {
//     console.log(fruits[i]) //valorconsole.log(i) //índice
//     i = i + 1
// }


//do while

// const list = [ 'a' , 'b' , 'c' ]
// let i = 0
// do {
//     console.log(list[i]) //valorconsole.log(i) //índice
//     i = i + 1
// } while (i < list.length)


//for
// Exibir os números de 1 à 5
// const n = 5;
// // looping de i = 1 até 5// em cada iteração, i é aumentado em 1
// for (let i = 1; i <= n; i++) {
//     console.log(i); // imprimindo o valor de i
// }


//exemplo 2 for


// let states = [
//     'Alabama',
//     'Alaska',
//     'Arizona',
//     'Arkansas',
//     'California',
//     'Colorado',
//     'Connecticut',
//     'Delaware',
//     'Florida',
//     'Georgia'
// ]
// for (let i = 0; i < states.length; i++) {
//     console.log(states[i])
// }

// for (let i = 0; i < states.length; i += 2) {
//     console.log(states[i])
// }

//S4-14 
//exercicio 1

// function calculaIdade(anoAtual, anoNascimento){
//     anoAtual=2022
//     anoNascimento = 1992
     
//     return anoAtual-anoNascimento
// }

// console.log(calculaIdade())


//exercicio 3

// function valorAPagar(maca, quantidade){
//     maca=1.30
//     quantidade=Number(prompt("Diga a quantidade que vc quer"))
//     if(quantidade>=12){
//         maca=1.00
//     }
//     let aPagar= maca*quantidade
// return aPagar
// }

// console.log(`Você irá pagar ${valorAPagar()}`)


//exercicio 4

// function totalPagar(salario){
//     salario=1200
//     let comissao=Number(prompt("Diga a comissão"))
//     let menorCo = comissao*(3/100)
//     let maiorCo=comissao*(5/100)

//     if(comissao<=1200){
//         return menorCo+salario
//     }if(comissao>=1800){
//         return maiorCo+salario
//     }
// }

// console.log(totalPagar())



//exercicio 5
let notas= [5, 7, 10, 3, 9, 5, 5, 2, 1, 9, 8, 3, 4, 6, 7, 6, 7, 8, 10, 7]

function(lista)

