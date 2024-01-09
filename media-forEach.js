const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

//forEach é uma estrutura de repetição que busca a quantidade de indices dentro do Array
//Essa função anonima é chamado de callback(passado por parametro), onde declaramos uma função dentro de um metodo.
//Onde no primeiro parametro da função será o valor dentro do Array e o segundo parametro será o indice.
notas.forEach(function (nota, indice){
    somaDasNotas += nota;
    console.log(indice)
});

const media = somaDasNotas / notas.length;

console.log(`A media das notas é ${media}.`);

lista.forEach(numero => {
    soma += numero
   });
