const { BinarySearchTree } = require('../../auxiliar');
const BinarySearchTree2 = BinarySearchTree;
/*⚠️ No modifiques nada sobre de esta linea ⚠️*/

/* 1️⃣ ***** BINARYSEARCHTREE - 02 ***** - height() 1️⃣:

El método "height" debe retornar la altura que tiene el árbol. Es decir, la cantidad de nieveles que posee.


⛔️ IMPORTANTE ⛔️
1) Puedes revisar los métodos que ya existen de "BinarySearchTree" en el archivo "auxiliar.js".


📝 EJEMPLO 📝
         (10)            ----> Nivel 0
      /       \
    (7)       (12)       ----> Nivel 1
   /  \       /  \
(2)   (9)  (11)  (15)    ----> Nivel 2
*/

BinarySearchTree2.prototype.height = function (value) {
   if (!this.left && !this.right) {
      return 0;
   } else {
      if (this.left && !this.right) {
         return this.left.height() + 1;
      } else if (!this.left && this.right) {
         return this.right.height() + 1;
      } else {
         return Math.max(this.left.height() + 1, this.right.height() + 1);
      }
   }
};

/*⚠️ No modifiques nada debajo de esta linea ⚠️*/
module.exports = BinarySearchTree2;
