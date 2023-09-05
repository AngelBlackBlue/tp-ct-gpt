const esPalindromo = require('../Ejercicio 01');

// describe('01 - JavaScript', () => {
//    // Aquí van tus tests
// });

describe('esPalindromo', () => {
   // Test 1: La función debe devolver true si el string ingresado es un palíndromo.
   it('debe devolver true para un palíndromo', () => {
      expect(esPalindromo('Anita lava la tina')).toBe(true);
   });

   // Test 2: La función debe devolver false si el string ingresado no es un palíndromo.
   it('debe devolver false para un no palíndromo', () => {
      expect(esPalindromo('Anita lava la tina.')).toBe(false);
   });

   // Test 3: Si el string ingresado está vacío debe devolver true.
   it('debe devolver true para una cadena vacía', () => {
      expect(esPalindromo('')).toBe(true);
   });

   // Test 4: Si el string es palíndromo, aunque esté escrito todo con mayúsculas, debe devolver true.
   it('debe devolver true para un palíndromo en mayúsculas', () => {
      expect(esPalindromo('ANA')).toBe(true);
   });

   // Test 5: Si el valor ingresado a la función no es de tipo string, debe devolver un error.
   it('debe lanzar un error si no se pasa una cadena de texto como argumento', () => {
      expect(() => esPalindromo(123)).toThrowError("Se esperaba una cadena de texto como argumento");
   });
});
