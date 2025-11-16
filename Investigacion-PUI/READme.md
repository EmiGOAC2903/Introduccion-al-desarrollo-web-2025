#  Unitarias con Jest: Comparadores Avanzados

### 1. `.toEqual()`

* **Propósito:** Compara **recursivamente** el valor o el contenido de dos objetos o arrays.
* **Diferencia con `.toBe()`:** `.toBe()` verifica la **identidad** (misma instancia/referencia en memoria), mientras que `.toEqual()` verifica la **igualdad de valor** (mismas propiedades y valores, aunque sean objetos distintos).

```javascript
// Prueba de Contenido (Pasa)
expect({ a: 1, b: 2 }).toEqual({ a: 1, b: 2 });
expect([1, 2, 3]).toEqual([1, 2, 3]);

