const deArregloAObjeto = require('../Ejercicios/02 - Objects/01 - deArregloAObjeto');
const objetoEspejo = require('../Ejercicios/02 - Objects/02 - objetoEspejo');
const objetosAnidados = require('../Ejercicios/02 - Objects/03 - objetosAnidados');

// 01
describe('OBJETO ESPEJO', function () {
   it('Si el objeto no contiene propiedades debe devolver false', function () {
      expect(objetoEspejo({})).toStrictEqual(false);
   });
   it('Debe retornar un objeto en el que el valor de cada propiedad será el nombre de la propiedad pero a la inversa', function () {
      expect(
         objetoEspejo({ grhe: undefined, sfd: undefined, fhtu: undefined })
      ).toStrictEqual({ grhe: 'ehrg', sfd: 'dfs', fhtu: 'uthf' });
      expect(objetoEspejo({ qwd: undefined, addd: undefined })).toStrictEqual({
         qwd: 'dwq',
         addd: 'ddda',
      });
   });
});

// 02
describe('DE ARREGLO A OBJETO', function () {
   it('Debe transformar cada número del arreglo en una propiedad del objeto, cuyo valor respectivo es la suma de los dígitos del número', function () {
      expect(deArregloAObjeto([352, 452, 634, 123])).toStrictEqual({
         352: 10,
         452: 11,
         634: 13,
         123: 6,
      });
      expect(deArregloAObjeto([234, 111])).toStrictEqual({ 234: 9, 111: 3 });
   });
});

// 03
describe('OBJETOS ANIDADOS', function () {
   it('Si recibe un valor que no es un objeto debe retornar 0', function () {
      expect(objetosAnidados(undefined)).toStrictEqual(0);
      expect(objetosAnidados('Ejemplo')).toStrictEqual(0);
      expect(objetosAnidados(true)).toStrictEqual(0);
   });
   it('Debe devolver la cantidad de niveles o la profundidad máxima de objetos anidados que hay', function () {
      expect(objetosAnidados({ 3: 1, 2: 2, 3: 3 })).toStrictEqual(1);
      expect(objetosAnidados({ 3: 1, 2: { 3: 3, 4: 4 }, 5: 5 })).toStrictEqual(
         2
      );
      expect(
         objetosAnidados({
            3: 1,
            2: 2,
            5: { 6: 6, 7: { 8: 8, 9: { 10: 10 } } },
         })
      ).toStrictEqual(4);
   });
});
