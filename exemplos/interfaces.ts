class Conta {
  numeroDaConta: number;
  protected saldo: number = 0;
  constructor(numeroDaConta: number) {
    this.numeroDaConta = numeroDaConta;
  }
  consultarSalto(){
    return this.saldo;
  }
  depositar(valor: number) {
    this.saldo += valor;
    return true;
  }
}

class ContaSalario extends Conta {
  sacar(valor: number) {
    this.saldo -= valor;
  }
  depositar(valor: number): boolean {
      valor = 0;
      console.log('Não é possível depositar em uma conta salário.');
      return false;
  }
}

interface ITransacional {
  transferir: (valor: number, destinatario: Conta) => boolean;
  taxaTransferencia: number;
}

interface IPessoaJuridica {
  cnpj: string;
}

interface IContatos {
  telefone: string;
  email: string;
}

interface IEmpresarial extends IPessoaJuridica, IContatos {
   nomeFantasia: string;
}

class ContaCorrente extends Conta implements ITransacional {
    
  transferir(valor: number, destinatario: Conta) {
    if (valor > this.saldo) {
      return false;
    }
    this.saldo -= valor;
    destinatario.depositar(valor - (valor * this.taxaTransferencia));
    return true;
  }
  taxaTransferencia = 0.05;
}

class ContaJuridica extends ContaCorrente implements IPessoaJuridica, IContatos {
    cnpj = '199';
    telefone = "99999999";
    email = "XXXXXXXXXXXXXXX";

}

class ContaEmpresarial extends ContaJuridica implements IEmpresarial {
  nomeFantasia: string;  
  numeroDaConta: number;
  constructor(nomeFantasia: string, numeroDaConta: number) {
    super(numeroDaConta);
    this.numeroDaConta = numeroDaConta;
    this.nomeFantasia = nomeFantasia;
  }
}

const contaTechGo = new ContaEmpresarial('TechGo', 1);
contaTechGo.cnpj = '53.451.333/0001-01';
contaTechGo.telefone = '2799841-6139';
contaTechGo.email = 'techgolinfo1@gmail.com';
contaTechGo.nomeFantasia = 'DG TechGo';
contaTechGo.depositar(3660);

console.log(contaTechGo);
console.log(contaTechGo.consultarSalto());

const contaGabriel = new Conta(174645)
contaTechGo.transferir(1000, contaGabriel)

console.log(`Você recebeu uma transferencia bancaria número da conta: ${contaGabriel.numeroDaConta} e seu saldo atual passou a ser ${contaGabriel.consultarSalto()}`);
console.log('Saldo atualizado empresa: ' + contaTechGo.nomeFantasia + ' R$' + contaTechGo.consultarSalto());