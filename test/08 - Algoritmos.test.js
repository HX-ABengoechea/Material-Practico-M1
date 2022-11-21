const bubbleSort = require('../Ejercicios/08 - Algoritmos/01 - bubbleSort');
const insertionSort = require('../Ejercicios/08 - Algoritmos/02 - insertionSort');
const selectionSort = require('../Ejercicios/08 - Algoritmos/03 - selectionSort');
const quickSort = require('../Ejercicios/08 - Algoritmos/04 - quickSort');
const mergeSort = require('../Ejercicios/08 - Algoritmos/05 - mergeSort');

describe('BUBBLE SORT', function () {
   it('Debe retornar el array ordenado de menor a mayor', function () {
      expect(bubbleSort([5, 1, 4, 2, 8])).toEqual([1, 2, 4, 5, 8]);
      expect(bubbleSort([10, 10, 16, 12])).toEqual([10, 10, 12, 16]);
      expect(bubbleSort([10, -2, -7, 4])).toEqual([-7, -2, 4, 10]);
   });
});

describe('INSERTION SORT', function () {
   it('Debe retornar el array ordenado de menor a mayor', function () {
      expect(insertionSort([5, 1, 4, 2, 8])).toEqual([1, 2, 4, 5, 8]);
      expect(insertionSort([10, 10, 16, 12])).toEqual([10, 10, 12, 16]);
      expect(insertionSort([10, -2, -7, 4])).toEqual([-7, -2, 4, 10]);
   });
});

describe('SELECTION SORT', function () {
   it('Debe retornar el array ordenado de menor a mayor', function () {
      expect(selectionSort([5, 1, 4, 2, 8])).toEqual([1, 2, 4, 5, 8]);
      expect(selectionSort([10, 10, 16, 12])).toEqual([10, 10, 12, 16]);
      expect(selectionSort([10, -2, -7, 4])).toEqual([-7, -2, 4, 10]);
   });
});

describe('QUICK SORT', function () {
   it('Debe retornar el array ordenado de menor a mayor', function () {
      expect(quickSort([5, 1, 4, 2, 8])).toEqual([1, 2, 4, 5, 8]);
      expect(quickSort([10, 10, 16, 12])).toEqual([10, 10, 12, 16]);
      expect(quickSort([10, -2, -7, 4])).toEqual([-7, -2, 4, 10]);
   });
});

describe('MERGE SORT', function () {
   it('Debe retornar el array ordenado de menor a mayor', function () {
      expect(mergeSort([5, 1, 4, 2, 8])).toEqual([1, 2, 4, 5, 8]);
      expect(mergeSort([10, 10, 16, 12])).toEqual([10, 10, 12, 16]);
      expect(mergeSort([10, -2, -7, 4])).toEqual([-7, -2, 4, 10]);
   });
});
