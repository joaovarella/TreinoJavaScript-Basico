const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];


function exibeNomeENota(aluno){

    //Includes pesquisa se no vetor tem o nome que está sendo enviado.
    if(listaDeAlunosEMedias[0].includes(aluno)){ 
        // console.log(`${aluno} está cadastrado!`)

        // const alunos = listaDeAlunosEMedias[0];
        // const medias = listaDeAlunosEMedias[1];

        const [alunos, medias] = listaDeAlunosEMedias; //Atualização do JavaScript ES6, mas é a mesma coisa que a linha 12 e 13

        const indice = alunos.indexOf(aluno);

        const mediaDoAluno = medias[indice];

        console.log(`${aluno} tem a média ${mediaDoAluno}. `)

        // console.log(`${listaDeAlunosEMedias[1][indice]} a média do aluno!`)

    } else{
        console.log("Aluno não encontrado!")
    }
}

exibeNomeENota("Ana");