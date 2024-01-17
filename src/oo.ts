class Pessoa {
  nome: string;
  renda?: number;

  constructor(nome: string, renda?: number) {
    this.nome = nome;
    this.renda = renda;
  }
  dizOla(): string {
    return `Olá, eu sou ${this.nome}`;
  
  }
}

class ContaBancaria {
  protected saldo: number = 0;
  numeroConta: number;
  constructor(numeroConta: number) {
    this.numeroConta = numeroConta;
  }
  static retornaNumeroDoBanco() {
    return 3135;
  }
  depositar(valor: number): void {
    this.saldo += valor;
  }
  sacar(valor: number): void {
    this.saldo -= valor;
  }  
  private consultarSaldo(): number {
    return this.saldo;
  }  
}

class ContaBancariaPessoaFisica extends ContaBancaria {
  //Polimorfismo
  depositar(valor: number): void {
      this.saldo = valor * 2;
  }
}

const contaDoPedro = new ContaBancariaPessoaFisica(12345);
contaDoPedro.depositar(1000);
// console.log(contaDoPedro.consultarSaldo());

// um método estático não pode acessar atributos de instância
// um método estático pertence a classe e não a instância
// eu posso acessar ele sem criar um instancia
ContaBancaria.retornaNumeroDoBanco();

