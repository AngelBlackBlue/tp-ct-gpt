// function complicatedLevelOne(arr) {
//    var result = 0;

//    for (var i = 0; i < arr.length; i++) {
//       result += arr[i];
//    }

//    if (arr[i] % 2 === 0) {
//       result *= i;
//    } else {
//       result -= i;
//    }

//    return result;
// }

// console.log(complicatedLevelOne([3, 5, 2, 6, 3, 5]));


// function calculateComplicatedValue(arr) {
//    var result = 0;
//    var i; // Declarar 'i' fuera del bucle

//    for (i = 0; i < arr.length; i++) {
//       result += arr[i];
//    }

//    if (arr[i] % 2 === 0) {
//       result *= i;
//    } else {
//       result -= i;
//    }

//    return result;
// }

/**
 * Calcula un valor complicado basado en un arreglo de números.
 * @param {number[]} arr - Arreglo de números para realizar cálculos.
 * @returns {number} - El resultado del cálculo complicado.
 */
function calculateComplicatedValue(arr) {
   let result = 0;

   for (let i = 0; i < arr.length; i++) {
      result += arr[i];

      if (arr[i] % 2 === 0) {
         result *= i;
      } else {
         result -= i;
      }
   }

   return result;
}




console.log(calculateComplicatedValue([3, 5, 2, 6, 3, 5]));
