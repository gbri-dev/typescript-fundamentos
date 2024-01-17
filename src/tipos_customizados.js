"use strict";
const alunos = [
    {
        nome: 'João',
        cursos: ['NodeJS', 'ReactJS', 'TypeScript'],
        idade: 20,
    },
    {
        nome: 'Maria',
        cursos: ['PHP', 'Laravel', 'MySQL'],
        idade: 25,
    }
];
alunos.push({
    nome: 'julia',
    cursos: ['Python', 'Django', 'Flask'],
    idade: 30,
});
const novoAluno = {
    nome: 'Pedro',
    cursos: ['HTML', 'CSS', 'JavaScript'],
    idade: 24,
};
//pode ter propriedades opcionais
const novoAluno2 = {
    nome: 'Ana',
    idade: 35,
};
//pode ser passado como argumento de uma função
function mostraAluno(aluno) {
    console.log(aluno.nome);
}
