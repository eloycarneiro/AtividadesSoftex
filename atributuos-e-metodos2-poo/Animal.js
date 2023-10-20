class Animal {
  constructor(nome, espécie, porte) {
    this.nome = nome;
    this.espécie = espécie;
    this.porte = porte;
  }

  emitirSom() {
    return "Som genérico de animal";
  }

  seMover() {
    // Move-se de alguma forma
  }

  comer() {
    // Come alguma coisa
  }
}

class Cachorro extends Animal {
  constructor(nome) {
    super(nome, "cachorro", "médio");
  }

  emitirSom() {
    return "Au! Au!";
  }

  seMover() {
    return "Correndo..."
  }

  comer() {
    return "Come ração"
  }
}

class Gato extends Animal {
  constructor(nome) {
    super(nome, "gato", "pequeno");
  }

  emitirSom() {
    return "Miau!";
  }

  seMover() {
    return "Andando...";
  }

  comer() {
    return "Come peixe";
  }
}
const cachorro = new Cachorro("Rex");
console.log(cachorro.emitirSom()); // "Au! Au!"
console.log(cachorro.seMover()); // Corre
console.log(cachorro.comer()); // Come ração

const gato = new Gato("Mia");
console.log(gato.emitirSom()); // "Miau!"
console.log(gato.seMover()); // Risca
console.log(gato.comer()); // Come peixe