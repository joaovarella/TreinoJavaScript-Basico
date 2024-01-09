const lista = [1, 2, 3, 4, 5];
const numeros = [2,3,1,3,4];
let soma = 0;

for (let valores of numeros) {
 soma += valores;
}

console.log(soma) //15