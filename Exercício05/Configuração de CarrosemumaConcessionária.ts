class Car {
  constructor(
    public modelo: string,
    public motor: string,
    public cor: string,
    public cambio: string,
    public tetoSolar = false,
    public somPremium = false,
    public bancosDeCouro = false
  ) {}

  resumo() {
    return `Carro: ${this.modelo}, ${this.motor}, Cor: ${this.cor}, Câmbio: ${this.cambio}, Teto Solar: ${this.tetoSolar}, Som Premium: ${this.somPremium}, Bancos de Couro: ${this.bancosDeCouro}`;
  }
}

class CarDirector {
  static esportivo() {
    return new Car("Esportivo", "Gasolina", "Vermelho", "Automático", false, true, true);
  }

  static economico() {
    return new Car("Hatch", "Híbrido", "Branco", "Manual", true, false, true);
  }

  static comTransmissao(cambio: "manual" | "automático") {
    return new Car("SUV", "Elétrico", "Azul", cambio, true, true, false);
  }
}


console.log(CarDirector.esportivo().resumo());
console.log(CarDirector.economico().resumo());
console.log(CarDirector.comTransmissao("manual").resumo());
