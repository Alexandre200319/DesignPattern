class Burger {
  constructor(
    public pao: string,
    public proteina: string,
    public queijo = false,
    public alface = false,
    public tomate = false,
    public cebola = false,
    public molhoEspecial = false
  ) {}

  resumo() {
    return `Sanduíche: ${this.pao}, ${this.proteina}, Queijo: ${this.queijo}, Alface: ${this.alface}, Tomate: ${this.tomate}, Cebola: ${this.cebola}, Molho: ${this.molhoEspecial}`;
  }
}

class BurgerDirector {
  static classico() {
    return new Burger("Brioche", "Carne", true, true);
  }

  static vegano() {
    return new Burger("Integral", "Vegetariano", false, true, false, true, true);
  }

  static semTomate() {
    return new Burger("Australiano", "Frango", true, false, false, false, true);
  }
}


console.log(BurgerDirector.classico().resumo());
console.log(BurgerDirector.vegano().resumo());
console.log(BurgerDirector.semTomate().resumo());
