// Interface Relatorio
interface Relatorio {
  gerar(dados: string[]): void;
}

// Implementações dos relatórios
class PdfRelatorio implements Relatorio {
  gerar(dados: string[]): void {
    console.log(`Gerando relatório em PDF com os dados: ${dados}`);
  }
}

class ExcelRelatorio implements Relatorio {
  gerar(dados: string[]): void {
    console.log(`Gerando relatório em Excel com os dados: ${dados}`);
  }
}

class HtmlRelatorio implements Relatorio {
  gerar(dados: string[]): void {
    console.log(`Gerando relatório em HTML com os dados: ${dados}`);
  }
}

// Classe Gerente
class Gerente {
  solicitarRelatorio(relatorio: Relatorio, dados: string[]): void {
    relatorio.gerar(dados);
  }
}

// Teste do sistema
const gerente = new Gerente();
const dados = ["Vendas: 100", "Lucro: 5000", "Clientes: 50"];

gerente.solicitarRelatorio(new PdfRelatorio(), dados);
gerente.solicitarRelatorio(new ExcelRelatorio(), dados);
gerente.solicitarRelatorio(new HtmlRelatorio(), dados);
