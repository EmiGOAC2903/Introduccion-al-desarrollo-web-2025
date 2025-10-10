export default class Alumno {
  constructor(nombre, carrera, promedio) {
    this.nombre = nombre;
    this.carrera = carrera;
    this.promedio = promedio;
  }

  estudiar(horas) {
    console.log(`${this.nombre} estudió ${horas} horas.`);
  }

  presentarExamen(calificacion) {
    this.promedio = (this.promedio + calificacion) / 2;
    console.log(`${this.nombre} presentó un examen. Nuevo promedio: ${this.promedio.toFixed(2)}`);
  }

  mostrarInfo() {
    console.log(`Alumno: ${this.nombre}, Carrera: ${this.carrera}, Promedio: ${this.promedio}`);
  }
}
