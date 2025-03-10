class Conta {
  constructor(public numero: number, private saldo: number) {}

  depositar(valor: number) {
    this.saldo += valor;
  }

  sacar(valor: number) {
    if (this.saldo >= valor) this.saldo -= valor;
  }

  saldoAtual() {
    return this.saldo;
  }
}

const conta = new Conta(123, 1000);
conta.depositar(500);
conta.sacar(200);
console.log(`Saldo: R$${conta.saldoAtual()}`);
