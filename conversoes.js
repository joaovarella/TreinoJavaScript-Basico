// tipo de dado
// booleanos

//conversao implicita
const numero = 456;
const numeroString = Number("456a");

// console.log(numero === numeroString); //false, pois ele verifica o tipo do valor daquela variavel.
// console.log(numero == numeroString); //true, ele não verifica se o tipo é String comparando com inteiro, ele apenas comparada se os caracteres são iguais.

//Number() => ele transformar a string que está no parametro em numero. Caso tenha alguma letra ou caractere dentro do parametro na hora de realizar a operação matematica irá resultar NaN (Not a Number)
// let largura = "10";
// let altura = "5";
// console.log(Number(largura) * Number(altura)); // teremos a conversão de String para números, possibilitando a realização da multiplicação

// let largura = "10";
// let altura = "5";
// console.log( + largura * + altura); // teremos a conversão de String para números realizado usando o + antes das variáveis

// let meuNome = "leonardo";
// console.log(Number(meuNome)); // como a variável meuNome não contém apenas números ele retorna o erro NaN (Not a Number, não é número);
// console.log( + meuNome); // a conversão também retornará NaN

// let usuarioConectado = false;
// console.log(Number(usuarioConectado)); // teremos a conversão da booleana para número, sendo que false (falso) retorna o número 0.
// usuarioConectado = true;
// console.log(Number(usuarioConectado)); // agora teremos a conversão de true (verdadeiro) para o número 1.

// console.log(numero + numeroString); //Se tiver uma string dentro da operação matematica ele irá concatenar os valores.


// //conversão explicita


// //Exemplos

// //String()
// let telefone = 12341234;
// console.log("O telefone é " + String(telefone)); // teremos a conversão do número 12341234 para uma string “12341234” e assim poderemos fazer a concatenação entre as strings

// let telefone = 12341234;
// console.log("O telefone é " + telefone.toString()); // o .toString() é uma outra forma para  fazer essa conversão, que é mais parecida com outras linguagens de programação.

// let usuarioConectado = false;
// console.log(String(usuarioConectado)); // teremos a conversão da booleana para string, nesse caso teremos uma string “false”.
// usuarioConectado = true;
// console.log(String(usuarioConectado)); // agora teremos uma string “true”.