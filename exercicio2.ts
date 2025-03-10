class ListaDeTarefas {
  tarefas: string[] = [];

  adicionar(tarefa: string) {
    this.tarefas.push(tarefa);
  }

  listar() {
    this.tarefas.forEach((t, i) => console.log(`${i + 1}. ${t}`));
  }

  remover(index: number) {
    this.tarefas.splice(index, 1);
  }
}

const lista = new ListaDeTarefas();
lista.adicionar("Estudar TypeScript");
lista.adicionar("Fazer exercícios de POO");
lista.listar();
lista.remover(0);
lista.listar();
