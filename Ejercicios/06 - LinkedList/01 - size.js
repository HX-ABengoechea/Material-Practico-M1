const { LinkedList } = require('../../auxiliar');
const LinkedList1 = LinkedList;
/*⚠️ No modifiques nada sobre de esta linea ⚠️*/

/* 1️⃣ ***** LINKEDLIST - 01 ***** - size() 1️⃣:

Agrega un nuevo método llamado "size" a "LinkedList". Este método debe retornar la cantidad de nodos o elementos que
tiene la lista enlazada.


⛔️ IMPORTANTE ⛔️
1) Puedes revisar los métodos que ya existen de "LinkedList" en el archivo "auxiliar.js".


📝 EJEMPLO 📝
INPUT ----> Head --> [2] --> [54] --> [23]
OUTPUT ---> 3
*/

LinkedList1.prototype.size = function () {
   return this.length;
};

/*⚠️ No modifiques nada debajo de esta linea ⚠️*/
module.exports = LinkedList1;
