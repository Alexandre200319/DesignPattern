// Interface MetodoPagamento
interface MetodoPagamento {
  pagar(valor: number): void;
}

// Implementações de pagamento
class CartaoCredito implements MetodoPagamento {
  pagar(valor: number): void {
    console.log(`Pagamento de R$${valor} realizado com cartão de crédito.`);
  }
}

class PayPal implements MetodoPagamento {
  pagar(valor: number): void {
    console.log(`Pagamento de R$${valor} realizado via PayPal.`);
  }
}

class Boleto implements MetodoPagamento {
  pagar(valor: number): void {
    console.log(`Pagamento de R$${valor} realizado com boleto.`);
  }
}

// Classe Compra
class Compra {
  constructor(private valor: number) {}

  realizarPagamento(metodo: MetodoPagamento): void {
    metodo.pagar(this.valor);
  }
}

// Teste do sistema
const compra = new Compra(150.75);

compra.realizarPagamento(new CartaoCredito()); // Cartão de crédito
compra.realizarPagamento(new PayPal()); // PayPal
compra.realizarPagamento(new Boleto()); // Boleto
