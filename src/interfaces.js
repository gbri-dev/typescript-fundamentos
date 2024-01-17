"use strict";
class Conta {
    constructor(numeroDaConta) {
        this.saldo = 0;
        this.numeroDaConta = numeroDaConta;
    }
    consultarSalto() {
        return this.saldo;
    }
    depositar(valor) {
        this.saldo += valor;
        return true;
    }
}
class ContaSalario extends Conta {
    sacar(valor) {
        this.saldo -= valor;
    }
    depositar(valor) {
        valor = 0;
        console.log('Não é possível depositar em uma conta salário.');
        return false;
    }
}
class ContaCorrente extends Conta {
    constructor() {
        super(...arguments);
        this.taxaTransferencia = 0.05;
    }
    transferir(valor, destinatario) {
        if (valor > this.saldo) {
            return false;
        }
        this.saldo -= valor;
        destinatario.depositar(valor - (valor * this.taxaTransferencia));
        return true;
    }
}
class ContaJuridica extends ContaCorrente {
    constructor() {
        super(...arguments);
        this.cnpj = '199';
        this.telefone = "99999999";
        this.email = "XXXXXXXXXXXXXXX";
    }
}
class ContaEmpresarial extends ContaJuridica {
    constructor(nomeFantasia, numeroDaConta) {
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
const contaGabriel = new Conta(174645);
contaTechGo.transferir(1000, contaGabriel);
console.log(`Você recebeu uma transferencia bancaria número da conta: ${contaGabriel.numeroDaConta} e seu saldo atual passou a ser ${contaGabriel.consultarSalto()}`);
console.log('Saldo atualizado empresa: ' + contaTechGo.nomeFantasia + ' R$' + contaTechGo.consultarSalto());
