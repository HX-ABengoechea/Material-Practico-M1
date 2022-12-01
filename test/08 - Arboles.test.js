const { expect } = require('chai');
const BinarySearchTree1 = require('../Ejercicios/08 - Arboles/01 - search');
const BinarySearchTree2 = require('../Ejercicios/08 - Arboles/02 - height');

describe('SEARCH', function () {
   var tree1 = new BinarySearchTree1(1);
   tree1.insert(2);
   tree1.insert(3);
   tree1.insert(4);
   tree1.insert(5);
   tree1.insert(6);

   it('Debe retornar el nodo cuando se encuentra', function () {
      expect(tree1.search(3)).to.equal(3);
   });

   it("Debe retornar 'No se encontro el valor' si el valor no existe en el árbol", function () {
      expect(tree1.search(100)).to.equal('No se encontro el valor');
   });
});

describe('HEIGHT', function () {
   var tree2 = new BinarySearchTree2(1);
   tree2.insert(2);
   tree2.insert(3);
   tree2.insert(4);
   tree2.insert(5);
   tree2.insert(6);

   it('Debe retornar el nivel maximo del arbol', function () {
      expect(tree2.height()).to.equal(5);
   });

   var tree3 = new BinarySearchTree2(6);
   tree3.insert(4);
   tree3.insert(3);
   tree3.insert(5);
   tree3.insert(8);
   tree3.insert(7);
   tree3.insert(9);
   it('Debe retornar el nivel maximo del arbol', function () {
      expect(tree3.height()).to.equal(2);
   });
});
