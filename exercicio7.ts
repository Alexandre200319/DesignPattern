// Interface Notificacao
interface Notificacao {
  enviar(mensagem: string): void;
}

// Implementações das notificações
class EmailNotificacao implements Notificacao {
  enviar(mensagem: string): void {
    console.log(`Enviando e-mail: ${mensagem}`);
  }
}

class SmsNotificacao implements Notificacao {
  enviar(mensagem: string): void {
    console.log(`Enviando SMS: ${mensagem}`);
  }
}

class PushNotificacao implements Notificacao {
  enviar(mensagem: string): void {
    console.log(`Enviando push notification: ${mensagem}`);
  }
}

// Classe Usuario
class Usuario {
  constructor(private nome: string) {}

  receberNotificacao(notificacao: Notificacao, mensagem: string): void {
    console.log(`${this.nome} recebeu a notificação:`);
    notificacao.enviar(mensagem);
  }
}

// Teste do sistema
const usuario = new Usuario("João");
const email = new EmailNotificacao();
const sms = new SmsNotificacao();
const push = new PushNotificacao();

usuario.receberNotificacao(email, "Seu pedido foi enviado!");
usuario.receberNotificacao(sms, "Você tem uma nova mensagem!");
usuario.receberNotificacao(push, "Novo comentário na sua postagem!");
