// function complicatedLevelThree(obj) {
//    var result = '';
//    var keys = Object.keys(obj);
//    var values = Object.values(obj);
//    var sum = values.reduce((acc, curr) => acc + curr, 0);

//    for (var i = 0; i < keys.length; i++) {
//       var key = keys[i];
//       var value = values[i];
//       if (value % 2 === 0) {
//          result += key + ' is even. ';
//       } else {
//          var temp = value;
//          while (temp > 0) {
//             result += key + ', ';
//             temp--;
//          }
//       }
//    }

//    var finalResult = '';
//    var count = 0;
//    while (count < sum) {
//       finalResult += result;
//       count++;
//    }

//    var reversedResult = finalResult.split('').reverse().join('');
//    var formattedResult = reversedResult.toUpperCase();

//    return formattedResult;
// }

// var obj = {
//    a: 2,
//    b: 3,
//    c: 4,
//    d: 5,
// };

// console.log(complicatedLevelThree(obj));

/**
 * Analiza un objeto y realiza varias operaciones para generar una cadena formateada.
 *
 * @param {Object} obj - El objeto de entrada que contiene claves y valores numéricos.
 * @returns {string} - Una cadena formateada resultante.
 */
function generateFormattedStringFromObject(obj) {
   // Validar que se haya proporcionado un objeto no vacío.
   if (Object.keys(obj).length === 0) {
      throw new Error("El objeto proporcionado está vacío.");
   }

   // Inicializar variables descriptivas.
   var formattedString = '';
   var keys = Object.keys(obj);

   // Calcular la suma de los valores numéricos del objeto.
   var sumOfValues = keys.reduce(function (acc, key) {
      var value = obj[key];

      // Validar que el valor sea numérico.
      if (typeof value !== 'number') {
         throw new Error("El valor asociado a la clave '" + key + "' no es un número.");
      }

      return acc + value;
   }, 0);

   // Iterar a través de las claves y valores del objeto.
   keys.forEach(function (key) {
      var value = obj[key];

      // Verificar si el valor es par o impar.
      if (value % 2 === 0) {
         formattedString += key + ' is even. ';
      } else {
         formattedString += key.repeat(value) + ', ';
      }
   });

   // Eliminar la coma y el espacio extra al final de la cadena.
   formattedString = formattedString.slice(0, -2);

   // Repetir la cadena formateada según la suma de los valores.
   formattedString = formattedString.repeat(sumOfValues);

   // Invertir y convertir la cadena final en mayúsculas.
   var reversedFormattedString = formattedString.split('').reverse().join('');
   var finalResult = reversedFormattedString.toUpperCase();

   return finalResult;
}

// Objeto de ejemplo.
var obj = {
   a: 2,
   b: 3,
   c: 4,
   d: 5,
};

try {
   // Ejecutar la función y mostrar el resultado.
   var result = generateFormattedStringFromObject(obj);
   console.log(result);
} catch (error) {
   console.error("Error:", error.message);
}

console.log(generateFormattedStringFromObject(obj));