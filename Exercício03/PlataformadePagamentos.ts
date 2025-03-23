interface Payment {
  process(amount: number): void;
}

class CreditCard implements Payment {
  process(amount: number): void {
    console.log(`Pago R$${amount.toFixed(2)} com Cartão de Crédito.`);
  }
}

class PayPal implements Payment {
  process(amount: number): void {
    console.log(`Pago R$${amount.toFixed(2)} via PayPal.`);
  }
}

class Boleto implements Payment {
  process(amount: number): void {
    console.log(`Pago R$${amount.toFixed(2)} via Boleto Bancário.`);
  }
}

class PaymentFactory {
  static create(method: string): Payment {
    const payments: { [key: string]: Payment } = {
      creditcard: new CreditCard(),
      paypal: new PayPal(),
      boleto: new Boleto(),
    };

    if (!payments[method.toLowerCase()]) {
      throw new Error("Método desconhecido");
    }
    return payments[method.toLowerCase()];
  }
}

PaymentFactory.create("creditcard").process(100.5);
PaymentFactory.create("paypal").process(200.75);
PaymentFactory.create("boleto").process(300.0);
