const {
  obtenerObjeto,
  obtenerArreglo,
  obtenerTruthy,
  obtenerFalsy,
  regresaNull,
  regresaUndefined,
  funcionQueLanza,
} = require("./funciones-varias");

test("toEqual con objetos", () => {
  expect(obtenerObjeto()).toEqual({ nombre: "Valeria", edad: 21 });
});

test("toStrictEqual con arreglos", () => {
  expect(obtenerArreglo()).toStrictEqual([1, 2, 3]);
});

test("toBeTruthy", () => {
  expect(obtenerTruthy()).toBeTruthy();
});

test("toBeFalsy", () => {
  expect(obtenerFalsy()).toBeFalsy();
});

test("toBeNull", () => {
  expect(regresaNull()).toBeNull();
});

test("toBeUndefined", () => {
  expect(regresaUndefined()).toBeUndefined();
});

test("toThrow debe lanzar un error", () => {
  expect(() => funcionQueLanza()).toThrow("Error de prueba");
});
