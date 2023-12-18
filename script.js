// //var - pode ser declarada e chama em qualquer lugar sem restrição, sendo assim uma variavel mais solta.

// // var altura = 5;
// // var comprimento = 7;

// // area = altura * comprimento;
// // console.log(area);


// // var area; //Javascript acaba lendo todo o programa primeiro e executando primeiro as variaveis para depois o código.

// let forma = 'retangulo';
// let altura = 5;
// let comprimento = 7;
// let area; //O let irá funcionar, pois declaramos ela antes de rodar na função.

// if (forma === 'retangulo'){
//     area = altura * comprimento;

// } else{
//     area = (altura * comprimento) / 2;
// }

// console.log(area);

// //let area; //O let só funciona depois que declaramos ela, ou seja, se eu mencionar area acima sem declarar o tipo de variavel não irá funcionar. O erro será ReferenceError: Cannot access 'area' before initilization

const forma = 'triangulo';
const altura = 5;
const comprimento = 7;
// const area; //O const não pode ser alterado e por causa disso quando chamado essa variavel constante em alguma função alterando seu valor o erro será SyntaxError: Missing initializer in const declaration;
let area;

if(forma === 'quadrado'){
    area = altura * comprimento;
}else{
    area = (altura * comprimento) / 2;
}

console.log(area);