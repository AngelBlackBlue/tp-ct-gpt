// function complicatedLevelTwo(array) {
//    var result = array
//       .map((x) => x * 2)
//       .filter((x) => x % 3 === 0)
//       .reduce((acc, curr) => acc + curr, 0);

//    if (result > 1000) {
//       var temp = result;
//       for (var i = 0; i < 10; i++) {
//          temp -= i;
//          temp *= 2;
//       }
//       return temp;
//    } else {
//       var count = 0;
//       while (count < 3) {
//          result += count;
//          count++;
//       }
//       var str = 'The final result is: ' + result;
//       return str;
//    }
// }

// var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(complicatedLevelTwo(array));

/**
 * Calcula un resultado complicado basado en un array de entrada.
 *
 * @param {Array} array - El array de entrada en el que se realizarán operaciones.
 * @returns {number|string} - El resultado de las operaciones, que puede ser un número o una cadena.
 * @throws {string} - Si el argumento no es un array, se lanza una excepción con un mensaje de error.
 */
function calculateComplicatedResult(array) {
   // Verificar si 'array' es un array
   if (!Array.isArray(array)) {
      throw 'El argumento debe ser un array.';
   }

   // Mapear, filtrar y reducir el array
   let mappedArray = array
      .map((x) => x * 2)
      .filter((x) => x % 3 === 0)
      .reduce((acc, curr) => acc + curr, 0);

   // Realizar operaciones adicionales si el resultado es mayor que 1000
   if (mappedArray > 1000) {
      let modifiedResult = mappedArray;
      for (let i = 0; i < 10; i++) {
         modifiedResult -= i;
         modifiedResult *= 2;
      }
      return modifiedResult;
   } else {
      // Realizar operaciones alternativas si el resultado es menor o igual a 1000
      let count = 0;
      while (count < 3) {
         mappedArray += count;
         count++;
      }
      let resultString = 'El resultado final es: ' + mappedArray;
      return resultString;
   }
}

// Ejemplo de uso
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(calculateComplicatedResult(array));
