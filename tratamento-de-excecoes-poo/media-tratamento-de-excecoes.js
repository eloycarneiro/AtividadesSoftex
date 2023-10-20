// Importa o módulo do console
const { console } = require("console");

// Função que calcula a média de dois números
function calcularMedia(numero1, numero2) {
  // Verifica se os números são válidos
  if (isNaN(numero1) || isNaN(numero2)) {
    throw new Error("Números inválidos");
  }

  // Calcula a média
  return (numero1 + numero2) / 2;
}

// Função principal
function main() {
  // Solicita os números ao usuário
  const numero1 = parseFloat(prompt("Informe o primeiro número: "));
  const numero2 = parseFloat(prompt("Informe o segundo número: "));

  // Tenta calcular a média
  try {
    const media = calcularMedia(numero1, numero2);

    // Exibe a média
    console.log("A média é:", media);
  } catch (erro) {
    // Trata a exceção
    console.log("Ocorreu um erro:", erro);
  } finally {
    // Sempre é executado, independente de haver ou não exceção
    console.log("Execução finalizada");
  }
}

// Chama a função principal
main();