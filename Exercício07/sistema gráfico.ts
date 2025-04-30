// Interface da plataforma (Implementação)
interface PlataformaRender {
    renderizar(desenho: string): void;
  }
  
  class Windows implements PlataformaRender {
    renderizar(desenho: string) {
      console.log(`Renderizando '${desenho}' no Windows`);
    }
  }
  
  class Linux implements PlataformaRender {
    renderizar(desenho: string) {
      console.log(`Renderizando '${desenho}' no Linux`);
    }
  }
  
  class MacOS implements PlataformaRender {
    renderizar(desenho: string) {
      console.log(`Renderizando '${desenho}' no MacOS`);
    }
  }
  
  class Android implements PlataformaRender {
    renderizar(desenho: string) {
      console.log(`Renderizando '${desenho}' no Android`);
    }
  }
  
  // Abstração (Formatos de desenho)
  abstract class Desenho {
    constructor(protected plataforma: PlataformaRender) {}
  
    abstract desenhar(): void;
  }
  
  class DesenhoVetorial extends Desenho {
    desenhar() {
      this.plataforma.renderizar("Desenho Vetorial");
    }
  }
  
  class DesenhoBitmap extends Desenho {
    desenhar() {
      this.plataforma.renderizar("Desenho Bitmap");
    }
  }
  
  class Desenho3D extends Desenho { // novo formato
    desenhar() {
      this.plataforma.renderizar("Desenho 3D");
    }
  }
  
  // Testes
  const vetorialWindows = new DesenhoVetorial(new Windows());
  const bitmapLinux = new DesenhoBitmap(new Linux());
  const desenho3DAndroid = new Desenho3D(new Android());
  
  vetorialWindows.desenhar();   
  bitmapLinux.desenhar();       
  desenho3DAndroid.desenhar();  
  