// Exercício 1
// Crie uma variável chamada "usuarioAutenticado”
// Atribua à variável "usuarioAutenticado” o valor true (Boolean)
// Utilizando a estrutura de condição IF, avalie se o usuário está autenticado, caso sim, 
//imprima no console “Seja Bem vindo”

// let usuarioAutenticado = true

// if(usuarioAutenticado ===true){
//     console.log('Seja Bem vindo');
// }


// Exercício 2
// Crie uma variável chamada "usuario”
// Atribua à variável "usuario” o valor “Ana” (String)
// Crie uma variável chamada "autenticado”
// Atribua à variável "autenticado” o valor false (Boolean)
// Utilizando a estrutura de condição IF e os operadores lógicos, 
// análise se o usuário existe e é autenticado, caso sim, imprima: "Olá _usuario_ você está autenticado"

// let usuario = 'Ana'
// let autenticado = !false
// console.log(`Olá ${usuario} você está autenticado`);


// Exercício 3
// Crie uma variável chamada “produto”
// Atribua à variável “produto” o valor “maçã” (String)
// Crie uma variável chamada “quantidadeDoProduto”
// Atribua à variável “quantidadeDoProduto” o valor 2 (Int)
// Crie uma variável chamada “quantidadeDoProdutoParaPromocao”
// Atribua à variável “quantidadeDoProdutoParaPromocao” o valor 5 - quantidadeDoProduto ou seja, 
// cinco menos o valor da variável “quantidadeDoProduto”
// Realize a seguinte comparação, utilizando IF:
// Se o produto for maçã e a quantidade do produto for igual ou maior que 5 imprima:
// “Você recebeu uma promoção, o valor do produto será R$ 5.00”
// Se não, utilizando o else, imprima:
// “ Se você adicionar mais _quantidade_restante_ de maçãs, o valor sairá por R$ 5.00.

let produto = 'maçã';
let quantidadeDoProduto = 2
let quantidadeDoProdutoParaPromocao = 5 - quantidadeDoProduto

if(produto ==='maçã' && quantidadeDoProduto>=5){
    console.log("Você recebeu uma promoção, o valor do produto será R$ 5.00");
} else{
    console.log(`Se você adicionar mais ${quantidadeDoProdutoParaPromocao} de maçãs, o valor sairá por R$ 5.00.`);
}