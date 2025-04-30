// Implementação (APIs de reprodução)
interface API {
    play(): void;
    pause(): void;
    stop(): void;
  }
  
  class APIBasica implements API {
    play() { console.log("API Básica: play"); }
    pause() { console.log("API Básica: pause"); }
    stop() { console.log("API Básica: stop"); }
  }
  
  class APIPremium implements API {
    play() { console.log("API Premium: 🎵 Reproduzindo com qualidade!"); }
    pause() { console.log("API Premium: ⏸️ Pausa suave"); }
    stop() { console.log("API Premium: ⏹️ Parando com fade"); }
  }
  
  // Abstração (tipos de reprodutores)
  class Reprodutor {
    constructor(private tipo: string, private api: API) {}
  
    play() {
      console.log(`>>> ${this.tipo} iniciando...`);
      this.api.play();
    }
  
    pause() {
      console.log(`>>> ${this.tipo} pausando...`);
      this.api.pause();
    }
  
    stop() {
      console.log(`>>> ${this.tipo} parando...`);
      this.api.stop();
    }
  }
  
  // Teste no código cliente
  const musica = new Reprodutor("Música", new APIBasica());
  musica.play();
  musica.pause();
  
  const audiobook = new Reprodutor("Audiobook", new APIPremium());
  audiobook.play();
  audiobook.stop();
  