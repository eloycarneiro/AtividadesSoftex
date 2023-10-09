
class Banco {
    constructor(conta, saldo, tipoConta, agencia) {
        this.conta = conta
        this.saldo = saldo
        this.tipoConta = tipoConta
        this.agencia = agencia
    }

    saque(valor) {
        if (valor > this.saldo) {
            throw new Error('Saldo insuficiente.')
        }

        this.saldo = this.saldo - valor
        console.log(`O saldo atual após o saque é de: ${this.saldo}`)
    }

    deposito(valor) {
        this.saldo = this.saldo + valor
        console.log(`O saldo atual após o depósito é de: ${this.saldo}`)
    }

    imprimirSaldo() {
        return console.log(`O saldo é: ${this.saldo} `)
    }

    imprimirNumeroConta() {
        return console.log(`O número da conta é: ${this.conta} `)
    }
}

let novaConta = new Banco(123, 1000, "Conta Corrente", 1)
console.log(novaConta)
novaConta.imprimirNumeroConta()
novaConta.imprimirSaldo()
novaConta.deposito(100)
novaConta.saque(180)
