//exercicio 1

let idade = 24
let avaliarIdade = idade >18 && idade<25;

if(avaliarIdade ===true){
console.log('A idade está entre 18 e 25')
} else {
    console.log('A idade não está entre 18 e 25')
}


//exercicio 2

let carroNome ='Chevrolet'
let carroAno = 2019
let filtrarCarro = carroNome==='Chevrolet' && carroAno===2019

if(filtrarCarro===true){
    console.log('Carro encontrado');
}else{
    console.log('Carro não encontrado');
}

//exercicio 3

let botaoMenu = false
let avaliarClick = !botaoMenu

if (avaliarClick===false){
    console.log("Abrir menu");
} else{
    console.log("Fechar menu");
}
