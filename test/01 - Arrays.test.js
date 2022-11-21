const invertirOrden = require('../Ejercicios/01 - Arrays/01 - invertirOrden');
const numeroEnComun = require('../Ejercicios/01 - Arrays/02 - numeroEnComun');
const sumaDeArrays = require('../Ejercicios/01 - Arrays/03 - sumaDeArrays');

// 01
describe('INVERTIR ORDEN', function () {
   it('Debe retornar un arreglo con los elementos invertidos del arreglo recibido por parámetro', function () {
      expect(invertirOrden([1, 4, 3, 0])).toStrictEqual([0, 3, 4, 1]);
      expect(invertirOrden([2, 5, 8, 7])).toStrictEqual([7, 8, 5, 2]);
   });
   it('Debe retornar un arreglo con los elementos invertidos, eliminando aquellos con longitud mayor a uno', function () {
      expect(invertirOrden([1, 2, 435, 23, 32, 4, 4, 768])).toStrictEqual([
         4, 4, 2, 1,
      ]);
      expect(invertirOrden([9, 3434, 8, 11, 65, 34, 32, 7])).toStrictEqual([
         7, 8, 9,
      ]);
   });
});

// 02
describe('NUMERO EN COMUN', function () {
   it('Debe retornar el número común entre los arrays que recibe por parámetro', function () {
      expect(numeroEnComun([10, 15, 24], [2, 19, 10])).toBe(10);
      expect(numeroEnComun([2, 3, 15], [1, 4, 15])).toBe(15);
   });
   it('Debe retornar el número mas pequeño en caso de que no haya un número en común', function () {
      expect(numeroEnComun([3, 6, 10, 11], [2, 4, 5, 9])).toBe(2);
      expect(numeroEnComun([1, 6, 10, 11], [3, 4, 5, 9])).toBe(1);
   });
});

// 03
describe('SUMA DE ARRAYS', function () {
   it('Debe retornar un array que contenga elementos sólo de tipo number', function () {
      expect(
         sumaDeArrays([
            [1, 3],
            [10, 20],
            [4, 5],
         ])
      ).toEqual([4, 30, 9]);
   });
   it('Debe retornar un array que reemplaze los arreglos por la suma de sus números internos', function () {
      expect(sumaDeArrays([[5, 5], 4, [10, 15], [25, 10]])).toEqual([
         10, 4, 25, 35,
      ]);
   });
});
