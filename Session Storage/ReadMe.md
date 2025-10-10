# SessionStorage en JavaScript

## Qué es sessionStorage
SessionStorage es una forma de almacenamiento local del navegador incluida en la API de Web Storage. Permite guardar pares clave–valor dentro del navegador, pero su duración está limitada al tiempo que la pestaña o ventana del navegador permanezca abierta. Cuando el usuario cierra la pestaña o ventana, toda la información guardada se elimina automáticamente.

Los datos guardados permanecen disponibles si el usuario recarga la página o navega dentro del mismo sitio en esa pestaña, pero no se comparten entre diferentes pestañas, aunque sean del mismo dominio.

## Propiedades y estructura
SessionStorage funciona como un objeto que almacena pares de clave y valor en formato de texto (string).  
Si se quiere guardar información más compleja como objetos o arreglos, es necesario convertirlos a JSON usando JSON.stringify() al guardar, y JSON.parse() al recuperar.

Principales propiedades y métodos:
- length: número de elementos almacenados.
- key(index): devuelve el nombre de la clave en la posición indicada.
- getItem(clave): obtiene el valor asociado a una clave.
- setItem(clave, valor): guarda un valor.
- removeItem(clave): elimina un elemento.
- clear(): borra todo el almacenamiento.

## Requerimientos
- Solo funciona en navegadores modernos (no en Node.js).
- Opera dentro del mismo origen (mismo dominio, puerto y protocolo).
- Los valores siempre se guardan como texto.
- La información no se comparte entre pestañas ni ventanas del navegador.
- El tamaño máximo disponible suele ser de entre 5 y 10 MB por dominio.

## Diferencias entre sessionStorage y localStorage

| Característica | sessionStorage | localStorage |
|----------------|----------------|---------------|
| Duración | Solo mientras la pestaña o ventana está abierta | Permanece hasta que el usuario o el sitio lo borre |
| Alcance | Limitado a una sola pestaña | Compartido entre todas las pestañas del mismo dominio |
| Persistencia | Se elimina al cerrar la pestaña | Persiste aunque se cierre el navegador |
| Tamaño aproximado | 5–10 MB | 5–10 MB |
| Uso típico | Datos temporales de sesión | Preferencias o configuraciones permanentes |
| Eventos storage | No se comparte entre pestañas | Se sincroniza entre pestañas del mismo dominio |

## Ejemplo básico de uso
```js
// Guardar un dato
sessionStorage.setItem('usuario', 'Valeria');

// Consultar un dato
let usuario = sessionStorage.getItem('usuario');
console.log(usuario); // Valeria

// Verificar si existe
if (sessionStorage.getItem('usuario')) {
  console.log('El usuario existe');
}

// Eliminar un dato
sessionStorage.removeItem('usuario');

// Borrar todo el contenido
sessionStorage.clear();
