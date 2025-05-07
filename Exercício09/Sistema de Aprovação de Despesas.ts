class Aprovador {
    constructor(
      private nome: string,
      private limite: number,
      private proximo?: Aprovador
    ) {}
  
    aprovar(valor: number): void {
      if (valor <= this.limite) {
        console.log(`✅ Aprovado por ${this.nome}`);
      } else if (this.proximo) {
        this.proximo.aprovar(valor);
      } else {
        console.log("❌ Ninguém pode aprovar esse valor.");
      }
    }
  }
  
  const presidente = new Aprovador("Presidente", Infinity);
  const vicePresidente = new Aprovador("Vice-Presidente", 20000, presidente);
  const diretor = new Aprovador("Diretor", 5000, vicePresidente);
  const gerenteFinanceiro = new Aprovador("Gerente", 1000, diretor);
  
  gerenteFinanceiro.aprovar(800);     // ✅ Gerente
  gerenteFinanceiro.aprovar(7000);    // ✅ Diretor
  gerenteFinanceiro.aprovar(15000);   // ✅ Vice-Presidente
  gerenteFinanceiro.aprovar(60000);   // ✅ Presidente
  