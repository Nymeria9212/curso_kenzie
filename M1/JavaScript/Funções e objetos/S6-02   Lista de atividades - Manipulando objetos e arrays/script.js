const listDepartment = [
    {
        departamentName: 'Financial',
        employees:
            [
                {
                    name: 'Rose',
                    age: 26,
                    responsibility: 'Financial director',
                    salary: 5600
                },
                {
                    name: 'Stevem',
                    age: 32,
                    responsibility: 'Financial manager',
                    salary: 4200
                },
                {
                    name: 'Beca',
                    age: 26,
                    responsibility: 'Financial analyst',
                    salary: 2800
                }
            ],
        working: true
    },
    {
        departamentName: 'expedition',
        employees:
            [
                {
                    name: 'Rooper',
                    age: 35,
                    responsibility: 'Expedition director',
                    salary: 5600
                },
                {
                    name: 'Maggie',
                    age: 22,
                    responsibility: 'Expedition manager',
                    salary: 4200
                },
                {
                    name: 'Thompson',
                    age: 41,
                    responsibility: 'Expedition analyst',
                    salary: 2800
                }
            ],
        working: true
    },
    {
        departamentName: 'capitation',
        employees:
            [
                {
                    name: 'Saory',
                    age: 35,
                    responsibility: 'Capitation director',
                    salary: 5600
                },
                {
                    name: 'Silvia',
                    age: 22,
                    responsibility: 'Capitation manager',
                    salary: 4200
                },
                {
                    name: 'Sonem',
                    age: 41,
                    responsibility: 'Capitation analyst',
                    salary: 2800
                },
                {
                    name: 'Havi',
                    age: 41,
                    responsibility: 'Trainee Capitation manager',
                    salary: 1500
                },
                {
                    name: 'Margie',
                    age: 25,
                    responsibility: 'Capitation analyst',
                    salary: 2800
                },
                {
                    name: 'Victoria',
                    age: 18,
                    responsibility: 'Trainee Capitation analyst',
                    salary: 1500
                }
            ],
        working: true
    },
]


//1)Desenvolva uma função chamada howManyDepartments que retorne a quantidade de departamentos na lista
function howManyDepartments(departamento) {
    // console.log(departamento.length)
}

howManyDepartments(listDepartment)



//2)Desenvolva uma função chamada ChangeDepartmentName que deverá receber o 
//   nome atual do departamento e um novo nome para ser atribuído a ele.

// Percorra a lista de departamenta e busque pelo o nome procurado.

// Se o nome do departamento não for encontrado, a função deve retornar: "Departament not found"

// Exemplo - Sucesso:

// ChangeDepartmentName('Financial', 'Financeiro')
// Retorno: {departamentName: 'Financeiro', employees: Array(3), working: true}

// Exemplo - Falha:

// ChangeDepartmentName('Financ', 'Financeiro')
// retorno: "Departament not found"


function departamentName(nome, newName) {
    let lista = listDepartment
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].departamentName === nome) {
            lista[i].departamentName = newName
        }
        return "Departament not found"
    }

}

departamentName('Financial', 'Financeiro')

// console.log(listDepartment);

function giveTheDepartmentABreak(verifica) {
    let lista = listDepartment
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].departamentName == verifica) {
            lista[i].working = !lista[i].working
        }
        return "Departament not found"
    }

}
giveTheDepartmentABreak('expedition')

function insertNewDepartament(novoDepartamento) {
    listDepartment.push(novoDepartamento)
}

insertNewDepartament({ departamentName: 'Marketing', employees: Array(0), working: true })

// console.log(listDepartment)

let novoFuncionario = { name: 'Rosemary', age: 44, responsibility: 'Financial expedition director', salary: 15600 }

function inserNewEmployeeInDepartament(departamento) {
    lista = listDepartment
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].departamentName == departamento) {
            lista[i].employees.push(novoFuncionario)
        }
        return "Departament not found"
    }

}

inserNewEmployeeInDepartament('Financeiro')
// console.log(listDepartment)


function howManyEmployeesInDepartament(funcinariosDo) {
    for (let i = 0; i < listDepartment.length; i++) {
        if (listDepartment[i].departamentName == funcinariosDo) {
            return listDepartment[i].employees.length
        }
        return "Departament not found"
    }

}

// console.log(howManyEmployeesInDepartament("Financeiro"))





//7. Desenvolva uma função chamada departamentPayrollCalculation que recebe o nome 
// do departamento como parâmetro e que consiga realizar a soma 
// dos salários de todos os funcionários do departamento.


function departamentPayrollCalculation(salariosDoDepartamento) {

    let totalSalarios = 0
    for (let i = 0; i < listDepartment.length; i++) {
        if (listDepartment[i].departamentName == salariosDoDepartamento) {
            for (let j = 0; j < listDepartment[i].employees.length; j++) {
                totalSalarios += listDepartment[i].employees[j].salary
            }
        }

    }
    return totalSalarios
}

console.log(departamentPayrollCalculation('expedition'))


// 8.Desenvolva uma função chamada isTheDepartamentYoungOrOld que recebe o nome 
// do departamento como parâmetro e que consiga realizar o calculo da média das 
// idades dos funcionários do departamento.


function isTheDepartamentYoungOrOld(mediaIdade) {
    let idade = 0


    for (let i = 0; i < listDepartment.length; i++) {

        if (listDepartment[i].departamentName == mediaIdade) {
            for (let j = 0; j < listDepartment[i].employees.length; j++) {
                idade += listDepartment[i].employees[j].age
               
            }

        }
        
    }
    return idade /3
}

console.log(isTheDepartamentYoungOrOld('expedition'))