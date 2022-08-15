// S4-04 | Atividade - Funções: Passo a Passo

// function textReturn (){
//   return "óla"
// }

// console.log(textReturn())

// function textReturn (text){
//     return text
//   }

//   console.log(textReturn('Olá, estou sendo retornado pela função'))

//exercicio 1
// function somaDoisValores(num1, num2){
//   return num1+num2
// }

// console.log (somaDoisValores(15 , 876))

//exercicio2
// function qual (nome) {
//   nome= 3
 
//  return `O valor ${nome} é do tipo ${typeof(nome)}`
  
// }
// let retornar = qual()
// console.log (retornar)

//exercicio 3

// function somarNotas(nota1, nota2, nota3, nota4){
//   if(typeof nota1 != 'number' || typeof nota2 != 'number' || typeof nota3 != 'number' || typeof nota4 != 'number'){
//     return `A função só pode receber números`

//   }else{
   
//     return nota1+nota2+nota3+nota4

// }
// }
// console.log (somarNotas(1,2,3,8))


// S4-06

//exerciciio 1

// function soma(nota1, nota2, nota3, nota4){
//   let somar = nota1+nota2+nota3+nota4
//   return somar
// }

// let somaNota = soma(10,10,10,7)

// function media(media){
//   media=somaNota/4
//   return media
// }

// console.log(`Média do aluno Theo: ${media(somaNota)}`)


//exercicio 2

//CONVERTER MEDIDAS DE TEMPERATURA
// function convertToCelsius(currentType, currentValue){
//   if (currentType == 'Fahrenheit'&& currentValue===F) {
//     let fahParaCel= C = (F-32) / 1.8
//     return fahParaCel
// }
// if (currentType == 'Kelvin' && currentValue ===K) {
//   let kelParaCel =C = K - 273
//     return kelParaCel
// }
// }

// function convertToFahrenheit(currentType, currentValue){
//   if (currentType == 'Celsius' && currentValue===C) {
//     let celParaFah =F = C * 1.8 + 32
//     return celParaFah
// }
// if (currentType == 'Kelvin' && currentValue===K) {
//     let converterKparaFa = (K-273) * 1.8 + 32
//     return converterKparaFa
// }
// }

// function convertToKelvin (currentType, currentValue){
//   if (currentType == 'Fahrenheit' && currentValue===F) {
//     let fahParaKelvin = K = (F-32) * 5/9 + 273
//     return fahParaKelvin
// }
// if (currentType == 'Celsius' && currentValue===C) {
//   let celParaKenvin = K = C + 273
//    return celParaKenvin
// } 
// }

// let celcius = convertToCelsius()
// console.log(celcius)

// let kelvin = convertToKelvin()
// console.log(kelvin);

// let fahrenheit = convertToFahrenheit('Celsius', C=28)
// console.log(fahrenheit);


//S4-07
//EXERCICIO 1
// function boolToWord(boolean){
 
//   if (boolean === true){
//       return 'Yes'
//   }else{
//       return 'No'
//   }
  
// }

//exercicio 2
//tranformar em negativo
// function makeNegative(num) {
//   let negativo =-(num)
//   return negativo
// }
// let menos = makeNegative(15)
// console.log (menos)

//exercicio 3

//media nota com letra
// function getGrade (s1, s2, s3) {
//   let media =(s1+s2+s3)/3
//   if(media>=0 && media<60){
//     return 'F'
//   }if(media>=60 && media<70){
//     return 'D'
//   }if(media>=70 && media<80){
//     return 'C'
//   }if (media>=80 && media<90){
//     return 'B'
//   }else{
//     return 'A'
//   }
  
// }

