function calculaArea(base: number, altura: number): string {
    let area =  base * altura;
    return "Área: " + area;
}

const calculaAreaArrow = (base: number, altura: number): number => base * altura;

function imprimeArea(base: number, altura: number): void {
    console.log(calculaArea(base, altura));
    console.log(calculaAreaArrow(base, altura));
}

function somar(...numeros: number[]): number {
    // let total = 0;
    // numeros.forEach(numero => total += numero);
    // return total;
    let total = numeros.reduce(function(contador, numero ) {
      return contador + numero;
    }, 0);
    return total;
}

console.log(somar(1, 2, 3, 4, 5));

// uma funcao pode retornar ou nao um valor.
function retornaValor(idade: number): string | void{
    if(idade >= 18){
        return "autorizado";
    } else {
      console.log("Não autorizado para menores de 18 anos.");
    }
}

const resultadoValor = retornaValor(18);
if(resultadoValor){
  console.log(resultadoValor);
}