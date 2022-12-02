const { BinarySearchTree } = require('../../auxiliar');
const BinarySearchTree1 = BinarySearchTree;
/*⚠️ No modifiques nada sobre de esta linea ⚠️*/

/* 1️⃣ ***** BINARYSEARCHTREE - 01 ***** - search() 1️⃣:

Crea una método "search" en el prototipo de "BinarySearchTree" que recibe un valor por parámetro y lo busca dentro
del árbol. En el caso de encontrarlo debe retornar el nodo. Caso contrario debe retornar el string: 'No se encontro 
el valor'.


⛔️ IMPORTANTE ⛔️
1) Puedes revisar los métodos que ya existen de "BinarySearchTree" en el archivo "auxiliar.js".
*/

BinarySearchTree1.prototype.search = function (value) {
   if (value === this.value) {
      return this.value;
   }

   if (value > this.value) {
      if (this.right) {
         return this.right.search(value);
      }
   }

   if (value < this.value) {
      if (this.left) {
         return this.left.search(value);
      }
   }
   return 'No se encontro el valor';
};

/*⚠️ No modifiques nada debajo de esta linea ⚠️*/
module.exports = BinarySearchTree1;
