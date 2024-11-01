"use strict";
class Pessoa {
    constructor(nome, renda) {
        this.nome = nome;
        this.renda = renda;
    }
    dizOla() {
        return `Olá, eu sou ${this.nome}`;
    }
}
class ContaBancaria {
    constructor(numeroConta) {
        this.saldo = 0;
        this.numeroConta = numeroConta;
    }
    static retornaNumeroDoBanco() {
        return 3135;
    }
    depositar(valor) {
        this.saldo += valor;
    }
    sacar(valor) {
        this.saldo -= valor;
    }
    consultarSaldo() {
        return this.saldo;
    }
}
class ContaBancariaPessoaFisica extends ContaBancaria {
    //Polimorfismo
    depositar(valor) {
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
