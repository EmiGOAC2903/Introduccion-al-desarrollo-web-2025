function obtenerObjeto() {
  return { nombre: "Valeria", semestre: 9 };
}

function obtenerArreglo() {
  return [1, 2, 3];
}


function obtenerTruthy() {
  return "Hola mundo";
}

function obtenerFalsy() {
  return 0;
}

function regresaNull() {
  return null;
}

function regresaUndefined() {
  return undefined;
}

function funcionQueLanza() {
  throw new Error("Error generado para pruebas");
}

module.exports = {
  obtenerObjeto,
  obtenerArreglo,
  obtenerTruthy,
  obtenerFalsy,
  regresaNull,
  regresaUndefined,
  funcionQueLanza,
};