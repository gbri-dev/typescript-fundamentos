//tipo customizado
type Aluno = {
  nome: string;
  cursos?: string[];
  idade: number;
}

const alunos: Aluno[] = [
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
] 

alunos.push({
  nome: 'julia',
  cursos: ['Python', 'Django', 'Flask'],
  idade: 30,
})

const novoAluno: Aluno = {
  nome: 'Pedro',
  cursos: ['HTML', 'CSS', 'JavaScript'],
  idade: 24,
}

//pode ter propriedades opcionais
const novoAluno2: Aluno = {
  nome: 'Ana',
  idade: 35,
}

//pode ser passado como argumento de uma função

function mostraAluno(aluno: Aluno) {
  console.log(aluno.nome)
}
