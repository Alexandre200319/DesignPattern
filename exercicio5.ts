class Retangulo {
  constructor(private l: number, private h: number) {}
  area() {
    return this.l * this.h;
  }
  perimetro() {
    return 2 * (this.l + this.h);
  }
}

class Circulo {
  constructor(private r: number) {}
  area() {
    return Math.PI * this.r ** 2;
  }
  perimetro() {
    return 2 * Math.PI * this.r;
  }
}

const ret = new Retangulo(10, 5);
const circ = new Circulo(7);

console.log(`Retângulo - Área: ${ret.area()}, Perímetro: ${ret.perimetro()}`);
console.log(
  `Círculo - Área: ${circ.area().toFixed(2)}, Perímetro: ${circ
    .perimetro()
    .toFixed(2)}`
);
