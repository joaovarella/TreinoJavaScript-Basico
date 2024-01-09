const nomes = ['Ana', 'Clara', 'Maria', 'Maria', 'Joao', 'Joao', 'Joao'];

const meuSet = new Set(nomes);

const nomesAtualizados = [...meuSet];

const nomesAtt = [...new Set(nomes)];

console.log(nomesAtualizados);

console.log(nomesAtt);