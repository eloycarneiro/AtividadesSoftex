// Classe abstrata Veículo
class Veiculo {
  constructor(modelo, marca, cor, numeroRoda) {
    this.modelo = modelo;
    this.marca = marca;
    this.cor = cor;
    this.numeroRoda = numeroRoda;
  }

  clone() {
    // Método clone padrão que cria uma cópia rasa do objeto
    return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
  }

  represent() {
    // Método represent padrão para exibir informações do veículo
    console.log(`Modelo: ${this.modelo}, Marca: ${this.marca}, Cor: ${this.cor}, Número de Rodas: ${this.numeroRoda}`);
  }
}

// Subclasse Carro que herda de Veículo
class Carro extends Veiculo {
  constructor(modelo, marca, cor, numeroRoda, numeroPortas) {
    super(modelo, marca, cor, numeroRoda);
    this.numeroPortas = numeroPortas;
  }

  // Sobrescrevendo o método clone para a subclasse Carro
  clone() {
    return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
  }

  // Sobrescrevendo o método represent para a subclasse Carro
  represent() {
    console.log(`Modelo: ${this.modelo}, Marca: ${this.marca}, Cor: ${this.cor}, Número de Rodas: ${this.numeroRoda}, Número de Portas: ${this.numeroPortas}`);
  }
}

// Nova subclasse Moto que herda de Veiculo
class Moto extends Veiculo {
  constructor(modelo, marca, cor, numeroRoda, cilindrada) {
    super(modelo, marca, cor, numeroRoda);
    this.cilindrada = cilindrada;
  }

  // Sobrescrevendo o método clone para a subclasse Moto
  clone() {
    return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
  }

  // Sobrescrevendo o método represent para a subclasse Moto
  represent() {
    console.log(`Modelo: ${this.modelo}, Marca: ${this.marca}, Cor: ${this.cor}, Número de Rodas: ${this.numeroRoda}, Cilindrada: ${this.cilindrada}`);
  }
}

// Atualizando a classe Aplicacao para incluir a nova subclasse Moto
class Aplicacao {
  static criarVeiculos() {
    const veiculos = [];
    const carro1 = new Carro("Sedan", "Toyota", "Preto", 4, 4);
    const carro2 = new Carro("Hatchback", "Ford", "Branco", 4, 2);
    const veiculo1 = new Veiculo("Moto", "Honda", "Vermelho", 2);
    const veiculo2 = new Veiculo("Bicicleta", "Caloi", "Azul", 2);
    const moto1 = new Moto("Esportiva", "Ducati", "Amarelo", 2, "900cc");
    const moto2 = new Moto("Custom", "Harley-Davidson", "Preto", 2, "1200cc");

    veiculos.push(carro1, carro2, veiculo1, veiculo2, moto1, moto2);

    return veiculos;
  }

  static clonarVeiculos(veiculos) {
    const clones = [];

    for (const veiculo of veiculos) {
      const cloneVeiculo = veiculo.clone();
      clones.push(cloneVeiculo);
    }

    return clones;
  }
}

// Teste
const veiculos = Aplicacao.criarVeiculos();
const clones = Aplicacao.clonarVeiculos(veiculos);

for (const clone of clones) {
  clone.represent();
}