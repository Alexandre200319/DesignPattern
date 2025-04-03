class HotelReservation {
  constructor(
    public tipoQuarto: string,
    public numeroNoites: number,
    public cafeDaManha = false,
    public vistaMar = false,
    public wifiPremium = false,
    public lateCheckout = false
  ) {}

  resumo() {
    return `Reserva: ${this.tipoQuarto}, ${this.numeroNoites} noites, Café: ${this.cafeDaManha}, Vista Mar: ${this.vistaMar}, Wi-Fi: ${this.wifiPremium}, Late Checkout: ${this.lateCheckout}`;
  }
}

class HotelReservationDirector {
  static simples() {
    return new HotelReservation("Standard", 2);
  }

  static executiva() {
    return new HotelReservation("Luxo", 4, false, true, true);
  }

  static semCafeManha() {
    return new HotelReservation("Presidencial", 5, false, false, true, true);
  }
}


console.log(HotelReservationDirector.simples().resumo());
console.log(HotelReservationDirector.executiva().resumo());
console.log(HotelReservationDirector.semCafeManha().resumo());
