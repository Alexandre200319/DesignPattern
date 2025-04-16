
class FuncionarioB {
  constructor(public fullName: string, public wage: string) {}
}


class FuncionarioAdaptado {
  nome: string;
  salario: number;

  constructor(funcionarioB: FuncionarioB) {
      this.nome = funcionarioB.fullName;
      this.salario = parseFloat(funcionarioB.wage.replace("R$", ""));
  }

  exibir(): void {
      console.log(`Funcionário A: ${this.nome}, Salário: R$${this.salario}`);
  }
}


const funcionarioB = new FuncionarioB("Carlos Souza", "R$4500.00");
const adaptado = new FuncionarioAdaptado(funcionarioB);
adaptado.exibir();
