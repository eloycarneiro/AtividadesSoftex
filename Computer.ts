interface Computer {
  ram: number;
  hdd: number;
  cpu: number;
  type: string;

  toString(): string;
}

class PC implements Computer {
  constructor(public ram: number, public hdd: number, public cpu: number, public type: string) {}

  toString(): string {
    return `PC {ram: ${this.ram}, hdd: ${this.hdd}, cpu: ${this.cpu}, type: ${this.type}}`;
  }
}

class Server implements Computer {
  constructor(public ram: number, public hdd: number, public cpu: number, public type: string) {}

  toString(): string {
    return `Server {ram: ${this.ram}, hdd: ${this.hdd}, cpu: ${this.cpu}, type: ${this.type}}`;
  }
}

class ComputerFactory {
  static createComputer(type: string, ram: number, hdd: number, cpu: number): Computer {
    switch (type) {
      case "pc":
        return new PC(ram, hdd, cpu, type);
      case "server":
        return new Server(ram, hdd, cpu,type);
      default:
        throw new Error("Tipo de computador inválido");
    }
  }
}

const computer1 = ComputerFactory.createComputer("pc", 8, 1000, 3.6);
const computer2 = ComputerFactory.createComputer("server", 16, 2000, 2.8);

console.log(computer1); // PC {ram: 8, hdd: 1000, cpu: 3.6, type: pc}
console.log(computer2); // Server {ram: 16, hdd: 2000, cpu: 2.8, type: server}