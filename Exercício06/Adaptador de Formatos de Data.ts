
class DataExterna {
  constructor(private dataISO: string) {}

  mostrarData(): void {
      console.log("Data no formato externo:", this.dataISO);
  }
}


class AdaptadorData {
  private dataExterna: DataExterna;

  constructor(dataLocal: string) {
      
      const [dia, mes, ano] = dataLocal.split("/");
      const formatoISO = `${ano}-${mes}-${dia}`;
      this.dataExterna = new DataExterna(formatoISO);
  }

  mostrar(): void {
      this.dataExterna.mostrarData();
  }
}


const dataLocal = "16/04/2025";
const adaptador = new AdaptadorData(dataLocal);
adaptador.mostrar();
