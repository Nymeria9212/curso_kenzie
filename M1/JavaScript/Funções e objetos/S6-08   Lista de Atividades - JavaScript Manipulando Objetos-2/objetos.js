// exercicio  1
// let pessoa={
//     nome:"Jéssica",
//     anoDeNascimento:1992 ,
//     cidade:"Tubarão",
// }

// function criarPessoa(nome, anoDeNascimento, cidade){
//         let pessoa={
//         nome:nome,
//         anoDeNascimento:anoDeNascimento,
//         cidade:cidade
//     }
//  return pessoa
// }
// console.log(criarPessoa("João", 39, "Porto Alegre"))

// function apresentar(){
//     return `${pessoa.nome} possui ${2022-pessoa.anoDeNascimento} anos de idade e atualmente está morando em ${pessoa.cidade}.`
// }
// console.log(apresentar())


let elevador = {
    andarAtual: 0,
    totalDeAndares: 12,
    capacidadeDoElevador: 6,
    ocupacaoAtual: 1
}


function entrar(){
    for(let i= 0; i<=elevador.capacidadeDoElevador; i++){
        if(elevador.ocupacaoAtual >= elevador.capacidadeDoElevador){
            return `Elevador lotado`
        }else{
            return `Ocupação atual em: ${elevador.ocupacaoAtual}`
        }
    }
}
console.log(entrar(elevador))


