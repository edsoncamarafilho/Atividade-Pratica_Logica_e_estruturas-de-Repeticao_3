// Atividade Prática 03 - Estruturas de
// Repetição 1

// 1. Desenvolva um algoritmo que leia a altura de 15 pessoas. Este
// programa deverá calcular e mostrar:
// a. A menor altura do grupo;
// b. A maior altura do grupo;



// let menorAltura = Infinity;
// let maiorAltura = -Infinity; 

// for (let i = 0; i < 15; i++) {
//     let altura = parseFloat(prompt(`Digite a altura da pessoa ${i + 1}:`));
   
//     if (altura < menorAltura) {
//         menorAltura = altura;
//     }
//     if (altura > maiorAltura) {
//         maiorAltura = altura;
//     }
// }

// console.log(`A menor altura do grupo é: ${menorAltura} metros`);
// console.log(`A maior altura do grupo é: ${maiorAltura} metros`);





// 2. Pedro tem 1,50m de altura e cresce 2 centímetros por ano, enquanto
// Lucas tem 1,10m de altura e cresce 3 centímetros por ano.
// Construa um algoritmo que calcule e imprima quantos anos serão
// necessários para que:
// a. Lucas e Pedro tenham o mesmo tamanho;
// b. Lucas seja maior que Pedro.


// let pedroAltura = 150
// let lucasAltura = 110
// let anos = 0

// while(pedroAltura > lucasAltura) {

//     pedroAltura += 2
//     lucasAltura += 3
//     anos += 1
// } 

// document.write(`${anos-1} <br>`)
// document.write(`${anos}`)


// 3. Escreva um algoritmo que faça a tabuada de um número e
// apresente o resultado de acordo com o modelo a seguir, sabendo
// que o multiplicando deverá ser fornecido pelo usuário (n) e a
// quantidade de iterações também (i).
// 1 * 2 = 2
// 2 * 2 = 4
// 3 * 2 = 6
// ...


// const numeroTabuada = Number(prompt('Digite um número:'))
// const iteracoes = Number(prompt('Digite a quantidade de iteraçoes:'))

// for(let i = 1; i <= iteracoes; i++){
//     console.log(`${i} x ${numeroTabuada} = ${i * numeroTabuada}`)

// }



// 4. Escreva um algoritmo que percorra os números inteiros entre 1 e 250
// e verifique quais números são múltiplos de 3 e quais são múltiplos
// de 5.


// let isMultipleOfThree = false;
// let isMultipleOfFive = false;

// let algoritmoNumero = 250;

// for (let i = 1; i <= algoritmoNumero; i++) {

//     if (i % 3 === 0){
//         isMultipleOfThree = true;
//     }
//     if (i % 5 === 0) {
//         isMultipleOfFive = true;
//     }

//     if(isMultipleOfThree) {
//         document.write(`O número ${i} é múltiplo de 3. <br><br>`);
//         isMultipleOfThree = false;
//     }

//     if (isMultipleOfFive) {
//         document.write(`O número ${i} é múltiplo de 5. <br><br>`);
//         isMultipleOfFive = false;
//     }
// }






// 5. Faça um programa usando a estrutura “for” que leia um número
// inteiro positivo e mostre na tela uma contagem de 0 até o valor
// digitado:
// Ex: Digite um valor: 9
// Contagem: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, FIM!


    // let numeroInteiroPositivo = parseInt(Number(prompt('Digite um número positivo ')))

    // for (let i = 0; i <= numeroInteiroPositivo; i++) {
    //     document.write(`${i}`)
    // } 
    // document.write('Fim')








// //6 Desenvolva um algoritmo que mostre uma contagem regressiva de
// 30 até 1, marcando os números que forem primos, exatamente
// como mostrado abaixo:
// 30 [29] 28 27 26 25 24 [23] 22 21 20 [19] 18 [17] 16...



// Não consegui fazer, não me recordo de ver sobre números primos, tivemos o exercício sendo feito em aula, mas existiu algumas complicações de colegas de grupo que queriam colocar as suas opniões acima do entedimento da matéria para o cumprimento das atividades . Bora growdevers!






// 7 Desenvolva um algoritmo que leia 10 números, calcule e escreva a
// média aritmética dos valores lidos, a quantidade de valores
// positivos, a quantidade de valores negativos e o percentual de
// valores negativos e positivos.

// let totalSomado = 0
// let numerosPositivos = 0
// let numerosNegativos = 0

// for (let i = 0; i <= 10; i++) {
//     let lerNumero = Number(prompt("Digite um número:"));
//     totalSomado += lerNumero

//     if (lerNumero >= 0) {
//         numerosPositivos++
//     } else {
//         numerosNegativos++
//     }
// }

// let mediaNumeros = totalSomado / 10
// let porcentagemPositivos = (numerosPositivos / 10) * 100
// let porcentagemNegativos = (numerosNegativos / 10) * 100

// console.log(`Média aritimetica: ${mediaNumeros}`)
// console.log(`Total de números POSITIVOS: ${numerosPositivos}`)
// console.log(`Total de números NEGATIVOS: ${numerosNegativos}`)
// console.log(`Média de números POSITIVOS: ${porcentagemPositivos}`);
// console.log(`Média de números NEGATIVOS: ${porcentagemNegativos}`);

 