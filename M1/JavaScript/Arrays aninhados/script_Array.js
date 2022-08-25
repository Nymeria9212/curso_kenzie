let higiene = ["papel higienico", "pasta de dente", "sabonete", "shampo", "toalha"]
let alimentacao = ["biscoito", "pão", "ovos", "água", "salsicha"]
let cuidadosMedicos = ["gaze", "protetor solar", "pomada", "curativo", "remédio"]
let lazer = ["livro", "bola", "celular", "corda", "caderno"]
let barraca = ["", '', '','']



let caixaSuprimentos = []
caixaSuprimentos.push(barraca, higiene, alimentacao, cuidadosMedicos, lazer)

// console.log(caixaSuprimentos)

for (let i = 0; i < caixaSuprimentos.length; i++) {
    let lista = caixaSuprimentos[i]

    if (caixaSuprimentos.length == 5) {
      if (lista.length < 5) {
            console.log("Precisamos de mais itens desta seção.")
        } else if (lista.length >5){
            console.log("Tem itens demais, não precisamos de tantos")
        }else if (lista.length == 5) {
            console.log("Podemos ir acampar")
        }
    
    } else {
        console.log("Algum amigo ainda não retornou com os itens.")
    }
}



