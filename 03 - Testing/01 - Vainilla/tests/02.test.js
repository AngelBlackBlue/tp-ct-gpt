// const obtenerPosteo = require('../Ejercicio 02');

// describe('02 - AsyncRequest', () => {
//    // Aquí van tus tests
// });

const axios = require('axios');
const obtenerPosteo = require('../Ejercicio 02'); // Asegúrate de importar la función desde el archivo correcto

// Mockear la función axios para simular respuestas
jest.mock('axios');

describe('obtenerPosteo', () => {
   it('debería devolver 404 y null si el parámetro no es un número del 1 al 100', async () => {
      // Configurar el mock de axios para simular una respuesta de error 404
      axios.mockRejectedValue({ response: { status: 404 } });

      const resultado = await obtenerPosteo('Lorem Ipsum');

      expect(resultado).toBeNull();
   });

   it('debería devolver 200 y un objeto con propiedades específicas si el parámetro es un número del 1 al 100', async () => {
      // Configurar el mock de axios para simular una respuesta exitosa con datos de ejemplo
      const datosEjemplo = {
         userID: 1,
         id: 1,
         title: 'Título de ejemplo',
         body: 'Cuerpo de ejemplo',
      };
      axios.mockResolvedValue({ data: datosEjemplo });

      const resultado = await obtenerPosteo(1);

      expect(resultado).toEqual(expect.objectContaining({
         userID: expect.any(Number),
         id: expect.any(Number),
         title: expect.any(String),
         body: expect.any(String),
      }));
   });
});
