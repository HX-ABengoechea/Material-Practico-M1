const multiplyArray = require('../Ejercicios/04 - Recursion/01 - multiplyArray');
const containsValue = require('../Ejercicios/04 - Recursion/02 - containsValue');
const { objetoRecursion } = require('../auxiliar');

describe('MULTIPLY ARRAY', function () {
   it('Si el arreglo está vacío retornar false', function () {
      expect(multiplyArray([])).toBe(true);
   });
   it('Debe retornar la suma de la multiplicación de todos los números del arreglo', function () {
      expect(multiplyArray([7, 9, 3])).toBe(189);
      expect(multiplyArray([11, 22, 33])).toBe(7986);
      expect(multiplyArray([22, 9, 3])).toBe(594);
   });
});

describe('CONTAINS VALUE', function () {
   it('Debe retornar true si incluye el valor', function () {
      expect(containsValue(objetoRecursion, 'Albus')).toBe(true);
   });
   it('Debe retornar false si no incluye el valor', function () {
      expect(containsValue(objetoRecursion, 'headmaster')).toBe(false);
   });
});
