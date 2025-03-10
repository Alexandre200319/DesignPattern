class Produto {
  constructor(
    public nome: string,
    public preco: number,
    public estoque: number
  ) {}
  atualizarPreco(preco: number) {
    this.preco = preco;
  }
  ajustarEstoque(qtd: number) {
    this.estoque = Math.max(0, this.estoque + qtd);
  }
}

class CadastroProdutos {
  private produtos: Produto[] = [];
  adicionar(nome: string, preco: number, estoque: number) {
    this.produtos.push(new Produto(nome, preco, estoque));
  }
  atualizarPreco(nome: string, preco: number) {
    this.produtos.find((p) => p.nome === nome)?.atualizarPreco(preco);
  }
  relatorio() {
    this.produtos.forEach((p) =>
      console.log(`${p.nome} - R$${p.preco} - Estoque: ${p.estoque}`)
    );
  }
}

const cadastro = new CadastroProdutos();
cadastro.adicionar("Notebook", 3000, 10);
cadastro.adicionar("Mouse", 100, 50);
cadastro.atualizarPreco("Mouse", 120);
cadastro.relatorio();
