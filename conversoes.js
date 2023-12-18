// tipo de dado
// booleanos

//conversao implicita
const numero = 456;
const numeroString = Number("456a");

// console.log(numero === numeroString); //false, pois ele verifica o tipo do valor daquela variavel.
// console.log(numero == numeroString); //true, ele não verifica se o tipo é String comparando com inteiro, ele apenas comparada se os caracteres são iguais.

//Number() => ele transformar a string que está no parametro em numero. Caso tenha alguma letra ou caractere dentro do parametro na hora de realizar a operação matematica irá resultar NaN (Not a Number)

//String()

console.log(numero + numeroString); //Se tiver uma string dentro da operação matematica ele irá concatenar os valores.


//conversão explicita