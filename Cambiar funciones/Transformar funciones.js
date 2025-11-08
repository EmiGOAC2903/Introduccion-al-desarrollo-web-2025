function saludarUsuario(nombre) {
  console.log("Hola, " + nombre + "! Bienvenido al curso de programación.");
}

function repetirTexto(texto, veces) {
  return (texto + " ").repeat(veces);
}

function invertirPalabra(palabra) {
  return palabra.split("").reverse().join("");
}

function contarVocales(texto) {
  let contador = 0;
  const minuscula = texto.toLowerCase();
  for (let letra of minuscula) {
    if ("aeiou".includes(letra)) {
      contador++;
    }
  }
  return contador;
}

function mayusculasYMinusculas(texto) {
  return [texto.toUpperCase(), texto.toLowerCase()];
}

function promedioLista(numeros) {
  if (numeros.length === 0) return 0;
  const suma = numeros.reduce((a, b) => a + b, 0);
  return suma / numeros.length;
}

function maximoYMinimo(numeros) {
  return [Math.max(...numeros), Math.min(...numeros)];
}

function filtrarPares(numeros) {
  return numeros.filter(n => n % 2 === 0);
}

function sumarElementosTexto(listaTextos) {
  return listaTextos.join(" ");
}

function buscarElemento(lista, elemento) {
  return lista.includes(elemento);
}

function contarPalabras(frase) {
  const palabras = frase.split(" ");
  return palabras.length;
}

function duplicarElementos(lista) {
  return lista.map(x => x * 2);
}

function capitalizarPalabras(frase) {
  return frase
    .split(" ")
    .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase())
    .join(" ");
}

function mezclarListas(lista1, lista2) {
  const combinada = [];
  const minLen = Math.min(lista1.length, lista2.length);
  for (let i = 0; i < minLen; i++) {
    combinada.push(lista1[i], lista2[i]);
  }
  return combinada;
}

function contarFrecuencia(lista) {
  const conteo = {};
  for (let item of lista) {
    if (conteo[item]) {
      conteo[item]++;
    } else {
      conteo[item] = 1;
    }
  }
  return conteo;
}
