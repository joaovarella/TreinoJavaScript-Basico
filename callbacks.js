const nomes = ["Evaldo", "Mari", "Camis"];

// nomes.forEach(function (nome){
// console.log(nome);
// });

// nomes.forEach((nome) => {
//     console.log(nome);
// });

function imprimeNome(nome){
    console.log(nome);
};


//Não é necessario passar o parametro por causa do forEach que está chamando o Array nomes
nomes.forEach(imprimeNome);