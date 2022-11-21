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
   if (this.value === value) {
      return this.value;
   }
   if (value < this.value && this.left !== null) {
      return this.left.search(value);
   } else if (value >= this.value && this.right !== null) {
      return this.right.search(value);
   } else {
      return 'No se encontro el valor';
   }
};

/*⚠️ No modifiques nada debajo de esta linea ⚠️*/
module.exports = BinarySearchTree1;
