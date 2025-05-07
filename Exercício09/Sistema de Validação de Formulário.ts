type Validador = (dados: any) => boolean;

function validarEmail(dados: any): boolean {
  if (!/\S+@\S+\.\S+/.test(dados.email)) {
    console.log("❌ Email inválido");
    return false;
  }
  return true;
}

function validarSenha(dados: any): boolean {
  if (!dados.senha || dados.senha.length < 6) {
    console.log("❌ Senha muito curta");
    return false;
  }
  return true;
}

// Função para rodar os validadores em sequência
function validarFormulario(dados: any, validadores: Validador[]): boolean {
  for (const validador of validadores) {
    if (!validador(dados)) return false;
  }
  return true;
}

// Dados de exemplo
const formulario = { email: "teste@email.com", senha: "12345" };

const resultado = validarFormulario(formulario, [validarEmail, validarSenha]);

console.log(resultado ? "✅ Dados válidos!" : "⚠️ Dados inválidos.");
