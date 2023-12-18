//tipo number

const meuNumero = 3;

const primeiroNumero = 1;
const segundoNumero = 2;

// const operacaoMatematica = primeiroNumero + segundoNumero;
// const operacaoMatematica = primeiroNumero * segundoNumero;
// const operacaoMatematica = primeiroNumero / segundoNumero;
const operacaoMatematica = primeiroNumero - segundoNumero;

//menor ou igual <=
console.log(primeiroNumero <= segundoNumero); // true, 1 é menor que 2

//maior ou igual >=
console.log(segundoNumero >= meuNumero); //false, 2 é menor que 3

//somar com prioridade

const somaPrioridade = (meuNumero - segundoNumero) * primeiroNumero;
// console.log(somaPrioridade); // resulta em 1
// console.log(operacaoMatematica);

// ponto flutuante

const numeroPontoFlutuate = 3.3;
const pontoFlutuante = .5;

const novaOperacao = primeiroNumero / numeroPontoFlutuate;
// console.log(novaOperacao);

// NaN -> Not a Number (não é um numero)

const alura = "Alura";
// console.log(alura * primeiroNumero) //Resulta em NaN

//Imprimir o valor de um número arredondado para o inteiro mais próximo.
// console.log(Math.round(novaOperacao));

//Imprimir o valor de um número especificando a quantidade de numeros decimais depois da virgula
// console.log(novaOperacao.toFixed(2)); //O retorno será de uma String

//Metodo chamado toLocaleString() que converte um numero para uma string
// console.log(novaOperacao.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}));
// console.log(novaOperacao.toLocaleString('pt-br', {style: 'decimal'}));
// console.log(novaOperacao.toLocaleString('pt-br', {style: 'percent'}));

//Metodo para arredondar para cima
// console.log(Math.ceil(novaOperacao));

//Metodo para arredondar para baixo
// console.log(Math.floor(novaOperacao));