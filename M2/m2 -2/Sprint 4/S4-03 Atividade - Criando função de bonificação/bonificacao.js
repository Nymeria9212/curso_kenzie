const funcionarios = [
    {
        nome: "Jorge",
        setor: "Marketing",
        salario: 2200
    },
    {
        nome: "Ana",
        setor: "TI",
        salario: 6100
    },
    {
        nome: "Emanoel",
        setor: "Design",
        salario: 5200
    },
    {
        nome: "Maria",
        setor: "TI",
        salario: 8500
    },
    {
        nome: "Cleiton",
        setor: "Em treinamento",
        salario: 1100
    },
]

let bonificacao = [...funcionarios]
bonificacao.forEach((pessoa) => {
    pessoa.salario = pessoa.salario + (pessoa.salario * 0.01)
})


console.log(bonificacao);

