//Los tests de esta function ya están creados, debes crear la function a partir de ellos utilizando a ChatGPT.

// function buscarPalabra(texto, palabra) {
//    // Tu implementación aquí
// }

// module.exports = buscarPalabra;
/**
 * Busca una palabra en un texto y devuelve un array con las posiciones donde comienza la palabra.
 * @param {string} texto - El texto en el que buscar la palabra.
 * @param {string} palabra - La palabra que se desea buscar en el texto (insensible a mayúsculas y minúsculas).
 * @returns {number[]} - Un array con las posiciones donde comienza la palabra en el texto.
 * Si la palabra no se encuentra o los argumentos no son válidos, se devuelve un array vacío.
 */
function buscarPalabra(texto, palabra) {
   // Verifica si los argumentos son válidos
   if (typeof texto !== 'string' || typeof palabra !== 'string' || palabra === '') {
      return [];
   }

   // Convierte el texto y la palabra a minúsculas para hacer la búsqueda insensible a mayúsculas
   const textoLowerCase = texto.toLowerCase();
   const palabraLowerCase = palabra.toLowerCase();

   const resultados = [];
   let indice = textoLowerCase.indexOf(palabraLowerCase);

   // Busca la palabra en el texto y almacena las posiciones en el array de resultados
   while (indice !== -1) {
      resultados.push(indice);
      indice = textoLowerCase.indexOf(palabraLowerCase, indice + 1);
   }

   return resultados;
}

module.exports = buscarPalabra; // Exporta la función para ser utilizada en otros módulos
