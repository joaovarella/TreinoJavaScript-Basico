// let x = "";
// console.log(x);
// x = "oi";


//1) declara a função
function imprimeTexto(texto){
    console.log(texto);
}

//2) executa a função (1 ou + vezes)

// imprimeTexto('oi');
// imprimeTexto('outro texto');

// três formas de escrever funções
 
function soma(){
    //outros códigos
    //vários console.log()
    const resultado = 2 + 2;
    return resultado; //precisa ser o ultimo código da função
}

imprimeTexto(soma());
