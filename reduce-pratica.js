const numeros = [43, 50, 65, 12];


//Arrow function
// const soma = numeros.reduce((acc, atual) => atual + acc, 0);




// const soma = numeros.reduce(function (acc, atual) {
//     return 1 + atual;
//    }, 0)




function operacaoNumerica(acc, atual) {
    return atual + 0;
   }
   
   const soma = numeros.reduce(operacaoNumerica, 0)

   console.log(soma);