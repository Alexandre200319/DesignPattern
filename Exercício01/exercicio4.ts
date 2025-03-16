class Tarefa {
  constructor(public descricao: string, public concluida = false) {}
  concluir() {
    this.concluida = true;
  }
}

class GerenciadorTarefas {
  private tarefas: Tarefa[] = [];

  adicionar(descricao: string) {
    this.tarefas.push(new Tarefa(descricao));
  }
  concluir(index: number) {
    this.tarefas[index]?.concluir();
  }
  listar() {
    this.tarefas.forEach((t, i) =>
      console.log(`${i + 1}. ${t.descricao} - ${t.concluida ? "✔" : "✘"}`)
    );
  }
}

const gerenciador = new GerenciadorTarefas();
gerenciador.adicionar("Comprar leite");
gerenciador.adicionar("Estudar TypeScript");
gerenciador.concluir(0);
gerenciador.listar();
