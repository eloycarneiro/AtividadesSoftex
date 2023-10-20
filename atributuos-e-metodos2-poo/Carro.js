class Carro {
  constructor(marca, modelo, cor, velocidade) {
    this.marca = marca;
    this.modelo = modelo;
    this.cor = cor;
    this.velocidade = velocidade;
  }

  acelerar() {
    this.velocidade += 10;
  }

  frear() {
    this.velocidade -= 10;
  }

  virar(direcao) {
    this.direcao = direcao;
  }
}

const carro = new Carro("Fiat", "Uno", "Vermelho", 0);

console.log(carro); // Carro {marca: "Fiat", modelo: "Uno", cor: "Vermelho", velocidade: 0}

carro.acelerar();
console.log(carro); // Carro {marca: "Fiat", modelo: "Uno", cor: "Vermelho", velocidade: 10}

carro.frear();
console.log(carro); // Carro {marca: "Fiat", modelo: "Uno", cor: "Vermelho", velocidade: 0}

carro.virar("direita");
console.log(carro); // Carro {marca: "Fiat", modelo: "Uno", cor: "Vermelho", velocidade: 0, direção: "direita"}