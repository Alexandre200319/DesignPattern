// Requisição HTTP
class Requisicao {
    constructor(
      public usuarioAutenticado: boolean,
      public cacheExistente: boolean,
      public comprimido: boolean
    ) {}
  }
  
  // Manipulador base
  class Manipulador {
    protected proximo: Manipulador | null = null;
  
    setProximo(manipulador: Manipulador) {
      this.proximo = manipulador;
    }
  
    processar(requisicao: Requisicao): void {}
  }
  
  // Manipulador de Autenticação
  class Autenticacao extends Manipulador {
    processar(requisicao: Requisicao): void {
      if (!requisicao.usuarioAutenticado) {
        console.log("Autenticação falhou.");
        return;
      }
      console.log("Autenticação bem-sucedida.");
      if (this.proximo) this.proximo.processar(requisicao);
    }
  }
  
  // Manipulador de Cache (renomeado para CacheHandler)
  class CacheHandler extends Manipulador {
    processar(requisicao: Requisicao): void {
      if (requisicao.cacheExistente) {
        console.log("Cache utilizado.");
        return;
      }
      console.log("Sem cache, processando a requisição...");
      if (this.proximo) this.proximo.processar(requisicao);
    }
  }
  
  // Manipulador de Compressão
  class Compressao extends Manipulador {
    processar(requisicao: Requisicao): void {
      console.log(requisicao.comprimido ? "Requisição comprimida." : "Comprimindo requisição...");
      if (this.proximo) this.proximo.processar(requisicao);
    }
  }
  
  // Código cliente
  const autenticacao = new Autenticacao();
  const cacheHandler = new CacheHandler();  // Renomeado para CacheHandler
  const compressao = new Compressao();
  
  // Montando a cadeia
  autenticacao.setProximo(cacheHandler);
  cacheHandler.setProximo(compressao);
  
  // Criando a requisição
  const requisicao = new Requisicao(true, false, true);
  
  // Processando a requisição
  autenticacao.processar(requisicao);
  