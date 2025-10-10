# Clases en JavaScript 

## ¿Qué es una clase?
Una clase es una plantilla para crear objetos que comparten estructura (atributos/propiedades) y comportamiento (métodos). En JavaScript, las clases son *azúcar sintáctica* sobre el sistema de prototipos (ES6+).

## ¿Para qué usarlas?
- Modelar entidades del dominio (p.ej., `CuentaBancaria`, `Libro`, `SensorTemperatura`).
- Reutilizar lógica y mantener cohesión (datos + funciones relacionadas en un mismo lugar).
- Facilitar herencia y polimorfismo.

## Sintaxis básica
```js
class NombreDeClase {
  constructor(a, b) {        // Se ejecuta con `new`
    this.a = a;              // Atributos (propiedades)
    this.b = b;
  }

  metodoDeInstancia() {      // Se invoca en la instancia: obj.metodo()
    return `${this.a} - ${this.b}`;
  }

  static metodoEstatico() {  // Se invoca en la clase: NombreDeClase.metodoEstatico()
    return 'Hola desde estático';
  }

  get resumen() {            // Getter (opcional)
    return `${this.a}/${this.b}`;
  }
}
