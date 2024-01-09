const nomes = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];

nomes.splice(1, 2, "Rodrigo"); //A estrutura desse splice funciona da mesma forma que o nomes.("Rodrigo");

//nomes.("Rodrigo");

console.log(nomes);

animaisDoAquario = ['🐋', '🐙', '🐬', '🦈']

animaisDoAquario.splice(1,0,'🐠') //.splice(1(a partir da posição 1 do array), 0(quantas posição que serão substituidas depois da primeira posição), "String"(Objeto que seja inserido no intervalo))
console.log(animaisDoAquario)
animaisDoAquario.splice(3,0,'🐟')

console.log(animaisDoAquario)