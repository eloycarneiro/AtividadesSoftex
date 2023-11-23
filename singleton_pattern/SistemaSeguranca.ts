class SistemaSeguranca {
  private static instancia: SistemaSeguranca | null = null;
  private senhaBaseSecreta: string = "senha_secreta";

  private constructor() {
    // O construtor é privado para impedir a criação de instâncias fora da classe.
  }

  public static obterInstancia(): SistemaSeguranca {
    // Método para obter a única instância da classe
    if (!SistemaSeguranca.instancia) {
      SistemaSeguranca.instancia = new SistemaSeguranca();
    }
    return SistemaSeguranca.instancia;
  }

  public acessarBaseSecreta(senhaInserida: string): void {
    // Método para verificar se a senha inserida coincide com a senha da Base Secreta
    if (senhaInserida === this.senhaBaseSecreta) {
      console.log("Acesso concedido à Base Secreta!");
    } else {
      console.log("Acesso negado. Senha incorreta!");
    }
  }
}

// Programa principal
const agenteSecreto = SistemaSeguranca.obterInstancia();
agenteSecreto.acessarBaseSecreta("senha_incorreta"); // Acesso negado

const agenteSecretoAutorizado = SistemaSeguranca.obterInstancia();
agenteSecretoAutorizado.acessarBaseSecreta("senha_secreta"); // Acesso concedido
