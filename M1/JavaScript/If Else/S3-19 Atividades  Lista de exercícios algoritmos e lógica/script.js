// Exercício 1
// Antes do racionamento de energia ser decretado, quase ninguém falava de 
// quilowatts; mas agora, todos incorporaram essa palavra em seu vocabulário.

// Sabendo-se que 100 quilowatts de energia custa um sétimo de salário 
// mínimo, fazer um aplicativo que receba o valor do salário mínimo e a 
// quantidade de quilowatts gasta por uma residência, calcule e imprima:

// O valor em reais de cada quilowatt;
// O valor em reais a ser pago;
// O novo valor a ser pago por essa residência com um desconto de 10%.

// let salarioMinimo = 1212
// let setimoSalario = salarioMinimo/7
// let quilowatts = setimoSalario/100

// console.log(`O valor em reais de cada quilowatts é R$${quilowatts.toFixed(2)}`);

// let gasto = parseInt(prompt(`Quantos quilowatts você gastou esse mês?`))
// let calculoQuilowatts = quilowatts*gasto

// console.log(`Esse mês você gastou R$${calculoQuilowatts.toFixed(2)}`);

// let desconto = calculoQuilowatts*(10/100)
// let precoFinal = calculoQuilowatts-desconto

// console.log(`Com desconto de 10% sua conta fica em R$${precoFinal.toFixed(2)}`);


// Exercício 2
// Em épocas de pouco dinheiro,
//  os comerciantes estão procurando aumentar suas vendas oferecendo desconto.

// Faça um aplicativo que possa entrar com o valor 
// de um produto e imprima o novo valor tendo em vista que o desconto foi de 9%.

// let valorProduto = parseInt(prompt('Digite o valor do produto'))
// let desconto = valorProduto*(9/100)
// let novoValor = valorProduto-desconto
// console.log (`Com desconto de 9% o valor fica R$${novoValor.toFixed(2)}`)


// Exercício 3
// Ler dois valores para as variáveis A e B, respectivamente.

// Efetuar a troca dos valores de forma que a variável 
// A passe a ter o valor da variável B e que a variável B passe a ter o valor da variável A.

// Considere A e B como variáveis do tipo texto.

// Apresente os valores trocados.

// let letraA = prompt('Diga uma palavra para a posição A')
// let letraB = prompt('Diga uma palavra para a posição B')

// let posicaoC=letraA
// letraA=letraB
// letraB=posicaoC

// console.log (`Agora A é ${letraA} e a letra B é ${letraB}`)


// Exercício 4
// Criar um aplicativo que leia a quantidade de fitas que uma 
// locadora de vídeo possui e o valor que ela cobra por cada aluguel, 
// mostrando as informações pedidas a seguir:

// Sabendo que um terço das fitas são alugadas por mês, exiba o faturamento anual da locadora;
// Quando o cliente atrasa a entrega, é cobrada uma multa de 10% sobre o valor do aluguel.

// Sabendo que um décimo das fitas alugadas no mês são devolvidas com atraso, 
// calcule o valor ganho com multas por mês;
// Sabendo ainda que 2% das fitas se estragam ao longo do ano, e um décimo do 
// total é comprado para reposição, exiba a quantidade de fitas que a locadora terá no final do ano.


// let totalFitas = parseInt(prompt('Quantas fitas tem sua locadora?'))
// let precoPorFita = parseInt(prompt('Valor cobrado por fita?'))
// let totalAlugadas = totalFitas/3

// let estragadas = totalFitas*(2/100)
// let reposicao = estragadas/10
// let fitasFinalDeAno = (totalFitas-estragadas)+reposicao

// let atrasos= totalAlugadas/10

// let multa=precoPorFita*(10/100)

// let precocComMulta = precoPorFita+multa
// let totalMultas = precocComMulta*atrasos

// let trintaDiasMulta = totalMultas*30
// let multaAno = trintaDiasMulta*12

// let semAtraso = totalAlugadas-atrasos
// let valorSemAtrasoAnual = (semAtraso*precoPorFita)*12

// let faturamentoAnual = multaAno+valorSemAtrasoAnual

// console.log(`O total de ${totalAlugadas.toFixed(0)} fitas são alugadas por mês`);
// console.log(`O valor ganho com multas por mês é R$${trintaDiasMulta.toFixed(2)}`);
// console.log(`O faturamento anual com e sem atrasos fica no total de R$${faturamentoAnual.toFixed(2)}`);
// console.log(`No final do ano a locadora terá ${fitasFinalDeAno.toFixed(0)} fitas`);


// Exercício 5
// Criar um aplicativo que, dado um número de conta corrente com 
// três dígitos, retorne o seu dígito verificador, o qual é calculado da seguinte maneira:

// Por exemplo, o número da conta é 235.

// Somar o número da conta com o seu inverso: 235 + 532 = 767;
// Multiplicar cada dígito pela sua ordem posicional (da esquerda para a direita)
//  e somar estes resultados: 7*1 + 6*2 + 7*3 = 40;
// O último dígito desse resultado é o dígito verificador da conta: último dígito de 40 é 0.





