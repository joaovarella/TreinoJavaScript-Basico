const notas = [7, 7, 8, 9];


//Spread Operator -> Ele pega todo o conteudo e espalha os valores no local onde estamos declarando
const novasNotas = [5, ...notas, 10];

novasNotas.push(10);

console.log(`As novas notas são ${novasNotas}`);
console.log(`As notas originais são ${notas}`);