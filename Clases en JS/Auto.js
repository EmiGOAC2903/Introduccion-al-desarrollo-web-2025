export default class Auto {
  constructor(marca, modelo, anio) {
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
    this.encendido = false;
  }

  encender() {
    this.encendido = true;
    console.log(`El ${this.marca} ${this.modelo} está encendido.`);
  }

  apagar() {
    this.encendido = false;
    console.log(`El ${this.marca} ${this.modelo} está apagado.`);
  }

  acelerar() {
    if (this.encendido) {
      console.log(`El ${this.marca} ${this.modelo} está acelerando 🚗💨`);
    } else {
      console.log(`Primero enciende el auto antes de acelerar.`);
    }
  }
}
