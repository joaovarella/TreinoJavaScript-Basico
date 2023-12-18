const texto1 = "Olá, mundo!";
const texto2 = 'Olá, mundo!';
// const senha = "senhaSuperSegura456!";
const StringDeNumeros = "34567";

// const citacao = 'O Leo disse: "oi"';
// const citacao = "O Leo disse: 'oi'";
const citacao = "Meu nome é ";
const meuNome = 'Joao';
// console.log(citacao);


//concatenação
// console.log(citacao + meuNome);


// \u é utilizado como caracteres de escape para sinalizar o JavaScript
const cifrao = '\u0024';
const aMaiusculo = '\u0041';
const tique = '\u2705';
const hiragana = '\u3041';

// console.log(cifrao);
// console.log(aMaiusculo);
// console.log(tique);
// console.log(hiragana);



// Comparando strings
// const cidade = 'Belo Horizonte';
// const input = "Belo Horizonte"

// console.log(cidade === input); //true, não importando se é aspas simples ou aspas duplas.

const cidade = "belo horizonte";
const input = 'Belo Horizonte';

const inputMinusculo = input.toLowerCase(); //faz com que seja true, pois ele transforma a string input 'Belo Horizonte' para 'belo horizonte';

// console.log(cidade === input); //false
// console.log(cidade === inputMinusculo); //true



//contando caracteres
const senha = "minhaSenha123";
console.log(senha.length); //13 caracteres contados na constante senha

