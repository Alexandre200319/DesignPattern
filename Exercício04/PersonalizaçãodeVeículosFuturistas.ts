
class CarroVoador {
    descricao(): void {
        console.log("Carro Voador - Propulsão: Motor a Jato | Controle: IA");
    }
}

class MotoAutonoma {
    descricao(): void {
        console.log("Moto Autônoma - Propulsão: Elétrico | Controle: Autônomo");
    }
}

class NaveEspacial {
    descricao(): void {
        console.log("Nave Espacial - Propulsão: Plasma | Controle: IA");
    }
}

class ExploradorRobotico {
    descricao(): void {
        console.log("Explorador Robótico - Propulsão: Solar | Controle: Remoto");
    }
}


const carro = new CarroVoador();
const moto = new MotoAutonoma();
const nave = new NaveEspacial();
const explorador = new ExploradorRobotico();

carro.descricao();
moto.descricao();
nave.descricao();
explorador.descricao();
