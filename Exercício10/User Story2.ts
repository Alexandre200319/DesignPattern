// Tipos de notificação
enum TipoNotificacao {
    ESTOQUE_BAIXO,
    REABASTECIDO,
    ESGOTADO,
  }
  
  // Interface do Observer
  interface Observer {
    nome: string;
    tiposInteresse: TipoNotificacao[];
    atualizar(tipo: TipoNotificacao, produto: Product): void;
  }
  
  // Sujeito (Produto)
  class Product {
    private observers: Observer[] = [];
  
    constructor(
      public nome: string,
      public quantidade: number,
      private minimo: number
    ) {}
  
    inscrever(observer: Observer): void {
      this.observers.push(observer);
    }
  
    remover(observer: Observer): void {
      this.observers = this.observers.filter(o => o !== observer);
    }
  
    alterarEstoque(novaQtd: number): void {
      const anterior = this.quantidade;
      this.quantidade = novaQtd;
  
      if (novaQtd === 0 && anterior > 0) {
        this.notificar(TipoNotificacao.ESGOTADO);
      } else if (novaQtd < this.minimo && anterior >= this.minimo) {
        this.notificar(TipoNotificacao.ESTOQUE_BAIXO);
      } else if (novaQtd >= this.minimo && anterior < this.minimo) {
        this.notificar(TipoNotificacao.REABASTECIDO);
      }
    }
  
    private notificar(tipo: TipoNotificacao): void {
      for (const obs of this.observers) {
        if (obs.tiposInteresse.includes(tipo)) {
          obs.atualizar(tipo, this);
        }
      }
    }
  }
  
  // Observadores (Departamentos)
  class Departamento implements Observer {
    constructor(
      public nome: string,
      public tiposInteresse: TipoNotificacao[]
    ) {}
  
    atualizar(tipo: TipoNotificacao, produto: Product): void {
      const tipoMsg = TipoNotificacao[tipo];
      console.log(`[${this.nome}] Notificação: ${tipoMsg} no produto ${produto.nome} (Qtd: ${produto.quantidade})`);
    }
  }
  
  // Exemplo de uso
  const produto = new Product("Notebook", 10, 5);
  
  const vendas = new Departamento("Vendas", [TipoNotificacao.ESTOQUE_BAIXO, TipoNotificacao.ESGOTADO]);
  const compras = new Departamento("Compras", [TipoNotificacao.ESTOQUE_BAIXO, TipoNotificacao.REABASTECIDO]);
  const gerencia = new Departamento("Gerência", [TipoNotificacao.ESGOTADO, TipoNotificacao.REABASTECIDO]);
  
  produto.inscrever(vendas);
  produto.inscrever(compras);
  produto.inscrever(gerencia);
  
  // Simulações
  produto.alterarEstoque(4); // ESTOQUE_BAIXO
  produto.alterarEstoque(0); // ESGOTADO
  produto.alterarEstoque(6); // REABASTECIDO
  