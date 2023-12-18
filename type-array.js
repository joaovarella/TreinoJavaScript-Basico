var lista = [10, 1, 5, 9, 8, 12, 15];

// //Ordenar utilizando o metódo sort
// console.log(lista.sort());




function comparaNumeros(a, b){

        
    console.log("Todos os numeros de A: " + a);
    console.log("Todos os numeros de B: " + b);

    if(a==b){
        return 0;

    }
    if(a < b){
        return -1;
    }

    if(a > b){
        return 1;
    }

}



console.log(lista.sort(comparaNumeros));

// console.log(lista.sort((a , b) => a - b));