// Tipos de alerta e prioridade
enum TipoAlerta {
    PRECO,
    VOLUME,
    EVENTO_IMPORTANTE
  }
  
  enum Prioridade {
    ALTA = "Alta",
    MEDIA = "Média",
    BAIXA = "Baixa"
  }
  
  // Interface do Observer
  interface Investidor {
    nome: string;
    receberAlerta: (acao: string, tipo: TipoAlerta, msg: string, prioridade: Prioridade) => void;
    estaInteressado: (tipo: TipoAlerta) => boolean;
  }
  
  // Classe concreta de Investidor
  class InvestidorConcreto implements Investidor {
    constructor(
      public nome: string,
      private interesses: TipoAlerta[]
    ) {}
  
    receberAlerta(acao: string, tipo: TipoAlerta, msg: string, prioridade: Prioridade): void {
      if (this.estaInteressado(tipo)) {
        console.log(`[${prioridade}] ${this.nome} foi notificado sobre ${acao}: ${msg}`);
      }
    }
  
    estaInteressado(tipo: TipoAlerta): boolean {
      return this.interesses.includes(tipo);
    }
  }
  
  // Classe da Ação (Subject)
  class Acao {
    private observadores: Investidor[] = [];
    private historico: string[] = [];
  
    constructor(public nome: string) {}
  
    inscrever(obs: Investidor) {
      this.observadores.push(obs);
    }
  
    desinscrever(obs: Investidor) {
      this.observadores = this.observadores.filter(o => o !== obs);
    }
  
    notificar(tipo: TipoAlerta, msg: string, prioridade: Prioridade) {
      this.historico.push(`[${prioridade}] ${this.nome}: ${msg}`);
      for (const obs of this.observadores) {
        obs.receberAlerta(this.nome, tipo, msg, prioridade);
      }
    }
  
    getHistorico() {
      return this.historico;
    }
  }
  
  // Demonstração
  
  // Criando ações
  const acaoPetrobras = new Acao("PETR4");
  const acaoVale = new Acao("VALE3");
  
  // Criando investidores com filtros personalizados
  const joao = new InvestidorConcreto("João", [TipoAlerta.PRECO, TipoAlerta.EVENTO_IMPORTANTE]);
  const maria = new InvestidorConcreto("Maria", [TipoAlerta.VOLUME]);
  const ana = new InvestidorConcreto("Ana", [TipoAlerta.PRECO, TipoAlerta.VOLUME]);
  
  // Inscrições
  acaoPetrobras.inscrever(joao);
  acaoPetrobras.inscrever(maria);
  acaoVale.inscrever(ana);
  acaoVale.inscrever(joao);
  
  // Notificações
  acaoPetrobras.notificar(TipoAlerta.PRECO, "Subiu 3% hoje!", Prioridade.MEDIA);
  acaoPetrobras.notificar(TipoAlerta.VOLUME, "Volume anormal detectado.", Prioridade.ALTA);
  acaoVale.notificar(TipoAlerta.EVENTO_IMPORTANTE, "Nova mineradora adquirida.", Prioridade.ALTA);
  acaoVale.notificar(TipoAlerta.PRECO, "Caiu 2% após abertura.", Prioridade.BAIXA);
  
  // Histórico
  console.log("\nHistórico de notificações PETR4:");
  console.log(acaoPetrobras.getHistorico());
  
  console.log("\nHistórico de notificações VALE3:");
  console.log(acaoVale.getHistorico());
  