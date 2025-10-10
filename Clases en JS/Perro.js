export default class Perro {
  constructor(nombre, raza, edad) {
    this.nombre = nombre;
    this.raza = raza;
    this.edad = edad;
  }

  ladrar() {
    console.log(`${this.nombre} dice: ¡Guau guau!`);
  }

  comer(comida) {
    console.log(`${this.nombre} está comiendo ${comida}.`);
  }

  cumple() {
    this.edad++;
    console.log(`${this.nombre} ahora tiene ${this.edad} años.`);
  }
}
