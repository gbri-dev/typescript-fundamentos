let tipoBoleano: boolean = false;

let tipoNumero: number = 10;

tipoNumero = 1.75

console.log('Os tipos numericos podem ser qualquer valor. Tanto inteiro como decimal: ' + tipoNumero);

const nacionalidade: string = 'Brasileira';

const nomesPessoas: string[] = ['Joao', 'Maria', 'Pedro'];
const tecnologias: Array<string> = ['React', 'Angular', 'Vue'];

const notas: ReadonlyArray<number> = [7, 8, 5, 8];

const lista: [string, number] = ['Joao', 20];
const lista2: [nome: string, estaEstudando: boolean, idade: number] = ['Gabriel', true, 24]

//Posso permitir uma variavel receber mais de 1 tipo.
let idadeDaAna: string | number = 20;
idadeDaAna = '20 anos';

//posso ter um tipo que pode receber qualquer valor
let qualquerValor: any = 'Ola';
qualquerValor = 20;
qualquerValor = true;
qualquerValor = ['Ola', 20];

//Tipagem explicita
// é quando eu declaro o tipo da variavel e o tipo da variavel é o mesmo que eu quero.
let idade: number;
//Tipagem implicita
// é quando eu declaro a variavel e não coloco o tipo da variavel.
let idade2 = 18;