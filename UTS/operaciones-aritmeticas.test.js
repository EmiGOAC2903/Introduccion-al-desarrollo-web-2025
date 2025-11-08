const { sumar, restar, dividir, multiplicar, modulo, operar } = require("./operaciones-aritmeticas.js");

test("Debe sumar dos números correctamente", () => {
  expect(sumar(1, 7)).toBe(8);
});

test("Debe restar dos números correctamente", () => {
  expect(restar(2, 3)).toBe(-1);
  expect(restar(10, 7)).toBe(3);
});

test("Debe lanzar un error al dividir entre cero", () => {
  try {
    dividir(10, 0);
  } catch (e) {
    expect(e.message).toBe("No se puede dividir entre cero :(");
  }
});

test("Debe multiplicar dos números correctamente", () => {
  expect(multiplicar(4, 5)).toBe(20);
  expect(multiplicar(-2, 3)).toBe(-6);
});

test("Debe calcular el módulo correctamente", () => {
  expect(modulo(10, 3)).toBe(1);
  expect(modulo(15, 5)).toBe(0);
});

test("Debe ejecutar correctamente la función 'operar' con distintas operaciones", () => {
  expect(operar(2, 3, "sumar")).toBe(5);
  expect(operar(7, 2, "restar")).toBe(5);
  expect(operar(3, 4, "multiplicar")).toBe(12);
  expect(operar(8, 2, "dividir")).toBe(4);
  expect(operar(10, 3, "modulo")).toBe(1);
}); 