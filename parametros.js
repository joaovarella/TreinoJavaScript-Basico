function soma(num1, num2){
     return num1 + num2;
 }

// console.log(soma(2, 2));

//parametros x argumentos

//ordem dos parametros
function nomeIdade (nome, idade){
    return `meu nome é ${nome} e a minha idade é ${idade}`
}

// console.log(nomeIdade(25, "Joao"))

function multiplica(numero1 = 1, numero2 = 1){
    return numero1 * numero2;
}


// console.log(multiplica(soma(4,5), soma(3, 3)));
console.log(multiplica(soma(4,5))); 

function comParametro(param) {
    console.log(param)
}
comParametro()
