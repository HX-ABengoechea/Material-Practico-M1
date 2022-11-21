const stackEfectoEspejo = require('../Ejercicios/05 - Stacks & Queues/02 - stackEfectoEspejo');

describe('STACK EFECTO ESPEJO', function () {
   it('Debe devolver el string invertido', function () {
      expect(stackEfectoEspejo('Cordoba Salta Tucuman Neuquen Jujuy')).toEqual(
         'abodroC atlaS namucuT neuqueN yujuJ'
      );
   });
   it('Debe devolver el string invertido', function () {
      expect(stackEfectoEspejo('Mexico Chile Peru Colombia Bolivia')).toEqual(
         'ocixeM elihC ureP aibmoloC aiviloB'
      );
   });
});
