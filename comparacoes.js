// == (comparação implicita) -> ele faz a comparação do valor sem verificar o tipo da variavel

const numero = 5;
const texto = "5";

// console.log(numero == texto);// true



// === (comparação explicita) -> ele faz a comparação verificando o valor e o tipo da variavel
// console.log(numero === texto);// false


// //typeof
// console.log(typeof numero);
// console.log(typeof texto);

// conversão explicita

Number();
String();


// != ou !== funciona da mesma forma que a comparação explicita e implicita
// if(numero != texto){
//     console.log("Os valores não são iguais!") 
// }else{
//     console.log("Os valores são iguais, mas o tipo da variavel é diferente")
// }

// if(numero !== texto){
//     console.log("Os valores não são iguais!") 
// }else{
//     console.log("Os valores são iguais, mas o tipo da variavel é diferente")
// }

// || => operador "ou" e && => operador "e"

// if(typeof texto === "string" && typeof numero === "number"){
//     console.log("O tipo da variavel texto está correto na comparação 'E' o tipo da variavel numero é 'TAMBEM' está correto na comparação");
// }else{
//     console.log("O tipo do texto pode não ser string ou o numero não pode ser do tipo number");
// }


//O typeof numero é numero e a comparação da variavel texto não é do tipo numero, porém irá executar porque a operação é "Ou", ou sejá, um deles precisa estar correto para executar o bloco de código
if(typeof texto === "number" || typeof numero === "number"){
    console.log("O tipo da variavel texto pode estar correta na comparação 'OU' a variavel do tipo numero está correto na comparação");
}else{
    console.log("O tipo do texto pode não ser string ou o numero não pode ser do tipo number");
}