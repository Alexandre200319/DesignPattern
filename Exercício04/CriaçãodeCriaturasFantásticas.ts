interface Criatura {
    atacar(): void;
}

class CriaturaFogo implements Criatura {
    constructor(private nome: string) {}
    atacar(): void {
        console.log(`A ${this.nome} solta uma rajada de fogo ardente!`);
    }
}

class CriaturaAgua implements Criatura {
    constructor(private nome: string) {}
    atacar(): void {
        console.log(`A ${this.nome} invoca uma tempestade d'água!`);
    }
}

function criarCriatura(tipo: "dragao" | "salamandra" | "serpente" | "tritao"): Criatura {
    if (tipo === "dragao") return new CriaturaFogo("Dragão Flamejante");
    if (tipo === "salamandra") return new CriaturaFogo("Salamandra Ígnea");
    if (tipo === "serpente") return new CriaturaAgua("Serpente Marinha");
    return new CriaturaAgua("Tritão Guardião");
}


const dragao = criarCriatura("dragao");
const salamandra = criarCriatura("salamandra");
const serpente = criarCriatura("serpente");
const tritao = criarCriatura("tritao");

dragao.atacar();
salamandra.atacar();
serpente.atacar();
tritao.atacar();