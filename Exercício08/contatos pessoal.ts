// Interface comum
interface Contato {
    mostrar(): void;
  }
  
  // Pessoa (folha)
  class Pessoa implements Contato {
    constructor(private nome: string) {}
  
    mostrar(): void {
      console.log(`👤 Pessoa: ${this.nome}`);
    }
  }
  
  // Grupo (composite)
  class Grupo implements Contato {
    private membros: Contato[] = [];
  
    constructor(private nome: string) {}
  
    adicionar(membro: Contato): void {
      this.membros.push(membro);
    }
  
    mostrar(): void {
      console.log(`📁 Grupo: ${this.nome}`);
      this.membros.forEach(m => m.mostrar());
    }
  }
  
  // Exemplo de uso
  const familia = new Grupo("Família");
  familia.adicionar(new Pessoa("Ana"));
  familia.adicionar(new Pessoa("Carlos"));
  
  const primos = new Grupo("Primos");
  primos.adicionar(new Pessoa("João"));
  familia.adicionar(primos);
  
  const rede = new Grupo("Contatos");
  rede.adicionar(familia);
  
  rede.mostrar();
  