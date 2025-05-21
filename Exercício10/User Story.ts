// Interface do Observer
interface Observer {
    atualizar(comentario: string): void;
  }
  
  // Observador (Usuário)
  class User implements Observer {
    constructor(public nome: string) {}
  
    atualizar(comentario: string): void {
      console.log(`${this.nome} foi notificado: ${comentario}`);
    }
  }
  
  // Sujeito (Artigo)
  class Article {
    private usuarios: Observer[] = [];
  
    constructor(public titulo: string) {}
  
    inscrever(usuario: Observer): void {
      this.usuarios.push(usuario);
    }
  
    cancelarInscricao(usuario: Observer): void {
      this.usuarios = this.usuarios.filter(u => u !== usuario);
    }
  
    adicionarComentario(comentario: string): void {
      console.log(`Comentário em "${this.titulo}": ${comentario}`);
      this.usuarios.forEach(u => u.atualizar(comentario));
    }
  }
  
  // Exemplo de uso
  const artigo = new Article("Design Patterns");
  
  const alice = new User("Alice");
  const bob = new User("Bob");
  
  artigo.inscrever(alice);
  artigo.inscrever(bob);
  
  artigo.adicionarComentario("Muito bom o conteúdo!");
  // Notifica Alice e Bob
  
  artigo.cancelarInscricao(bob);
  
  artigo.adicionarComentario("Adicione mais exemplos!");
  // Notifica só Alice
  