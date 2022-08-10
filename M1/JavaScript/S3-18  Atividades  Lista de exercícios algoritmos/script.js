//exemplo
// let a = parseInt(prompt("Insira um valor para a"))
// let b = parseInt(prompt("Insira um valor para b"))
// let aux = 0
// aux = a 
// a = b
// b = aux
// alert(`Os valores originais de a e b: ${b}, ${a}. Após a troca são: ${a}, ${b}`)


// Exercício 1
// Leia um número inteiro e imprima-o na saída.
        
// let numInteiro = parseInt(prompt('Insrira um numero'))
// console.log(numInteiro);

// Exercício 2
// Leia três números inteiros e exiba a soma destes números.

// let num1 = parseInt(prompt('Insira um numero'))
// let num2 = parseInt(prompt('Insira outro numero'))
// let num3 = parseInt(prompt('Insira mais numero'))
// let soma = num1+num2+num3
// console.log(`A soma desses números dá ${soma}`)


// Exercício 3
// Leia duas notas semestrais inteiras e exiba a média anual.

// let nota1 = parseInt(prompt('Diga a primeira nota'))
// let nota2 = parseInt(prompt('Diga a segunda nota'))

// let media = (nota1+nota2)/2
// console.log (`Sua média é ${media}`)

// Exercício 4
// Leia um número inteiro e exiba o resto da divisão deste número por 2.

// let num1 = parseInt(prompt("Insira um número"))
// let resto = num1 % 2

// console.log (`O resto da divisão desse numero é ${resto}`)

// Exercício 5
// Ler um número inteiro e imprimir o seu quadrado.

// let numero = parseInt(prompt("Insira um número"))
// let quadrado = numero*numero

// console.log(`O quadrado desse número é ${quadrado}`);

// Exercício 6
// Entrar com quatro números e imprimir a média ponderada, sabendo-se que os pesos são respectivamente: 1, 2, 3 e 4.

// let num1 = parseInt(prompt("Insira uma nota"))
// let num2 = parseInt(prompt("Insira uma segunda nota"))
// let num3 = parseInt(prompt("Insira uma terceira nota"))
// let num4 = parseInt(prompt("Insira uma quarta nota"))

// let peso1 = 1
// let peso2 = 2
// let peso3 = 3
// let peso4 = 4
// let pesos = peso1+peso2+peso3+peso4

// let calculoPonderada = (((peso1*num1) +(peso2*num2) +(peso3*num3)+(peso4*num4))/pesos)
// console.log(`A média ponderada desses números é ${calculoPonderada}`);

// Exercício 7
// Leia as notas de quatro provas de um concurso: Matemática, Português, Conhecimentos 
// Gerais e Informática. Calcule e exiba a média ponderada tendo Matemática como peso 2.

// let matematica = 2
// let portugues = 3
// let conhecimentosGerais = 2
// let informatica = 3
// let pesos = matematica+portugues+conhecimentosGerais+informatica

// let num1 = parseInt(prompt("Insira a nota de matematica"))
// let num2 = parseInt(prompt("Insira a  nota de português"))
// let num3 = parseInt(prompt("Insira a nota de Conhecimentos Gerais"))
// let num4 = parseInt(prompt("Insira a nota de informatica"))

// let calculoPonderada = (((matematica*num1) +(portugues*num2) +(conhecimentosGerais*num3)+(informatica*num4))/pesos)
// console.log(`A média ponderada dessas materias é ${calculoPonderada}`);


// Exercício 8
// Leia dois números inteiros 
// (dividendo e divisor, respectivamente) e exiba a divisão, a
//  divisão inteira e o resto da divisão destes números.'

// let num1 = parseInt(prompt('insira um dividendo'))
// let num2 = parseInt(prompt('Insira um divisor'))
// let divisao = num1/num2
// let resto1 = num1%2
// let resto2 = num2%2
// console.log(`A divisão deles é ${divisao.toFixed(0)}`);
// console.log(`O resto de divisão do numero ${num1} é ${resto1}`);
// console.log(`O resto de divisão do numero ${num2} é ${resto2}`);

// Exercício 9
// Fazer um algoritmo 
// que possa entrar com o saldo de uma aplicação e ele 
// imprima o novo saldo, considerando o reajuste de 1%.

// let saldo = parseInt(prompt('Insira o seu saldo'))

// let reajuste = saldo*(0.01/100)
// let saldoFinal= saldo+reajuste

// console.log(`Considerando o reajuste de 1% seu saldo agora é ${saldoFinal.toFixed(2)}`)

// Exercício 10
// Construir um aplicativo que calcule a área de um losango. 
// Identificar quais serão as entradas necessárias.

// let base = parseInt(prompt('Insira a base do losango'))
// let altura = parseInt(prompt('Insira a altura do losango'))
// let areaLosango = (base*altura)/2

// console.log(`Area do losango é ${areaLosango}`);