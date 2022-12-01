const stackEfectoEspejo = require('../Ejercicios/06 - Stacks/01 - stackEfectoEspejo');
const { Stack } = require('../auxiliar');

describe('STACK EFECTO ESPEJO', function () {
   it('Debe devolver el string invertido', function () {
      var nuevoStack = new Stack();
      nuevoStack.colocar('abodroC');
      nuevoStack.colocar('atlaS');
      nuevoStack.colocar('yujuJ');
      var nuevoStack2 = new Stack();
      nuevoStack2.colocar('ocixeM');
      nuevoStack2.colocar('elihC');
      nuevoStack2.colocar('ureP');
      expect(stackEfectoEspejo('Cordoba Salta Jujuy')).toEqual(nuevoStack);
      expect(stackEfectoEspejo('Mexico Chile Peru')).toEqual(nuevoStack2);
   });
});
