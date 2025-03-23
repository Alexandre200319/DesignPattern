type Notification = {
  send: (message: string) => void;
};

const EmailNotification: Notification = {
  send: (message) => console.log(`Enviando e-mail: ${message}`),
};

const SMSNotification: Notification = {
  send: (message) => console.log(`Enviando SMS: ${message}`),
};

const createNotification = (type: string): Notification => {
  if (type.toLowerCase() === "email") return EmailNotification;
  if (type.toLowerCase() === "sms") return SMSNotification;
  throw new Error("Tipo de notificação desconhecido");
};

createNotification("email").send("Olá, este é um e-mail!");
createNotification("sms").send("Olá, este é um SMS!");
