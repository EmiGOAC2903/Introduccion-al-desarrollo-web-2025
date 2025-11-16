#  Unitarias con Jest: Comparadores Avanzados

### 1. `.toEqual()`

* **Propósito:** Compara **recursivamente** el valor o el contenido de dos objetos o arrays.
* **Diferencia con `.toBe()`:** `.toBe()` verifica la **identidad** (misma instancia/referencia en memoria), mientras que `.toEqual()` verifica la **igualdad de valor** (mismas propiedades y valores, aunque sean objetos distintos).

```javascript
// Prueba de Contenido (Pasa)
expect({ a: 1, b: 2 }).toEqual({ a: 1, b: 2 });
expect([1, 2, 3]).toEqual([1, 2, 3]);


## 2. .toBeFalsy()

### Propósito

El comparador `.toBeFalsy()` se utiliza para verificar si un valor se evalúa como **falso** (*falsy*) cuando se convierte a un booleano en JavaScript.
Si la función o el valor que estás probando retorna cualquiera de estos seis valores, la prueba con `.toBeFalsy()` tendrá éxito. Este método es ideal para validar condiciones de "ausencia" o "fracaso" leve (ej. una cadena vacía en lugar de una cadena con texto).

```javascript
// Test que pasa:
test('La función debe retornar un valor falsy cuando no encuentra datos', () => {
  const resultadoBusqueda = ''; // Cadena vacía
  // Verifica que el resultado de la búsqueda es falsy
  expect(resultadoBusqueda).toBeFalsy(); 
});

// Test que falla:
test('Un número positivo debe fallar la prueba .toBeFalsy()', () => {
  const cuenta = 5;
  // Este test fallaría, ya que 5 es truthy.
  // expect(cuenta).toBeFalsy(); 
});

## 3. .toBeFalsy()

### Propósito

El comparador `.toBeFalsy()` se utiliza para verificar si un valor se evalúa como **falso** (*falsy*) cuando se convierte a un booleano en JavaScript.
Es ideal para probar escenarios donde esperas una ausencia de datos, un error sutil (como `NaN`), o un estado de "apagado" o "no inicializado".

```javascript
// Test que pasa:
test('El resultado debe ser falsy si la cuenta es cero', () => {
  const articulosEnCesta = 0;
  // Verifica que un valor cero es considerado falsy.
  expect(articulosEnCesta).toBeFalsy(); 
});

// Test que pasa (demostrando un caso falsy diferente):
test('Un valor undefined se evalúa como falsy', () => {
  let resultadoNoDefinido;
  expect(resultadoNoDefinido).toBeFalsy();
});

## 4. .toBeNull()

### Propósito

El comparador `.toBeNull()` se utiliza para verificar que el valor es **estrictamente** igual a `null`.
Es comúnmente usado para verificar que una función retorna específicamente la ausencia de un objeto o dato, a diferencia de no retornar nada (`undefined`).

```javascript
// Función que retorna null si no encuentra el ID
function buscarUsuario(id) {
  if (id === 99) {
    return null;
  }
  return { nombre: 'Alice' };
}

// Test que pasa:
test('Debe retornar null cuando el usuario no existe', () => {
  expect(buscarUsuario(99)).toBeNull(); 
});

// Test que falla:
test('Un valor undefined falla la prueba .toBeNull()', () => {
  let variableNoAsignada;
  // Este test fallaría, aunque undefined es falsy, no es estrictamente null.
  // expect(variableNoAsignada).toBeNull(); 
});

## 5. .toBeUndefined()

### Propósito

El comparador `.toBeUndefined()` se utiliza para verificar que el valor es **estrictamente** igual a `undefined`.
Al igual que `.toBeNull()`, este comparador es muy específico. Solo pasará si el valor es *exactamente* `undefined`. No aceptará `null`, `false`, o una cadena vacía (`""`), aunque todos estos sean valores *falsy*. Es útil para confirmar que una propiedad de un objeto no existe o que el estado inicial de una variable es el esperado (sin definir).

```javascript
// Test para una variable no inicializada:
test('Una variable declarada sin valor es undefined', () => {
  let variableSinValor;
  expect(variableSinValor).toBeUndefined(); 
});

// Test para una propiedad inexistente en un objeto:
test('Una propiedad de objeto inexistente es undefined', () => {
  const usuario = { nombre: 'Carlos' };
  // La propiedad 'edad' no fue definida
  expect(usuario.edad).toBeUndefined();
});

// Test que falla:
test('Un retorno explícito de null falla la prueba .toBeUndefined()', () => {
  const retornoNulo = () => null;
  // Este test fallaría, ya que null no es estrictamente undefined.
  // expect(retornoNulo()).toBeUndefined(); 
});

## 6. .toThrow()

### Propósito

El comparador `.toThrow()` se utiliza para verificar que una función, cuando es ejecutada, **lanza o arroja un error** (una excepción).

```javascript
// Función a probar:
function calcularPromedio(notas) {
  if (!Array.isArray(notas)) {
    throw new TypeError('Las notas deben ser un array.');
  }
  if (notas.length === 0) {
    throw new Error('No se puede calcular el promedio de un array vacío.');
  }
  // Lógica de cálculo...
}

// Test que pasa (Verificando mensaje):
test('Debe lanzar un error si el array de notas está vacío', () => {
  expect(() => calcularPromedio([])).toThrow(
    'No se puede calcular el promedio de un array vacío.'
  );
});

// Test que pasa (Verificando tipo de error):
test('Debe lanzar un TypeError si el argumento no es un array', () => {
  expect(() => calcularPromedio('texto')).toThrow(TypeError);
});

// Test que falla:
test('No debe lanzar un error con entradas válidas', () => {
  // Este test fallaría, ya que la función no lanza un error.
  // expect(() => calcularPromedio([10, 20])).toThrow(); 
});

## 7. .toStrictEqual()

### Propósito

El comparador `.toStrictEqual()` se utiliza para realizar una comparación profunda y **estricta** del contenido de objetos y arrays. Es la versión más rigurosa de `.toEqual()`.
Este comparador es ideal para probar estructuras de datos exactas, asegurando que no se han introducido propiedades no deseadas (como las generadas accidentalmente por *mocks* o funciones de mapeo) y que las estructuras son idénticas.

```javascript
// Objeto que se está probando (Actual)
const usuarioActual = {
  nombre: 'Alex',
  edad: 30,
  email: undefined // Propiedad definida, pero con valor undefined
};

// Objeto esperado:
const usuarioEsperado = {
  nombre: 'Alex',
  edad: 30
};

// Test con .toEqual() (Pasa)
test('.toEqual() ignora la propiedad undefined si no está en el esperado', () => {
  expect(usuarioActual).toEqual(usuarioEsperado); 
});

// Test con .toStrictEqual() (Falla)
test('.toStrictEqual() falla porque email: undefined es una clave extra', () => {
  // expect(usuarioActual).toStrictEqual(usuarioEsperado); // Esta línea FALLARÍA
});
