interface Brinquedo {
    brincar(): void;
}

class Carrinho implements Brinquedo {
    constructor(private material: string) {}
    brincar(): void {
        console.log(`Brincando com um carrinho de ${this.material}!`);
    }
}

class Boneca implements Brinquedo {
    constructor(private material: string) {}
    brincar(): void {
        console.log(`Brincando com uma boneca de ${this.material}!`);
    }
}

type TipoMaterial = "plástico" | "madeira";

function criarBrinquedo(tipo: "carrinho" | "boneca", material: TipoMaterial): Brinquedo {
    return tipo === "carrinho" ? new Carrinho(material) : new Boneca(material);
}


const carrinhoPlastico = criarBrinquedo("carrinho", "plástico");
const bonecaMadeira = criarBrinquedo("boneca", "madeira");

carrinhoPlastico.brincar();
bonecaMadeira.brincar();