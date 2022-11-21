const { LinkedList } = require('../../auxiliar');
const LinkedList2 = LinkedList;
/*⚠️ No modifiques nada sobre de esta linea ⚠️*/

/* 2️⃣ ***** LINKEDLIST - 02 ***** - order() 2️⃣:

Agregar el método "order" al prototipo de LinkedList. Este método deberá ordenar los elementos de nuestra lista 
enlazada de MAYOR a MENOR.


⛔️ IMPORTANTE ⛔️
1) Puedes revisar los métodos que ya existen de "LinkedList" en el archivo "auxiliar.js".
2) Se debe ordenar la lista original y no una nueva.


📝 EJEMPLO 📝
INPUT ----> Head --> [4] --> [5] --> [3]
OUTPUT ---> Head --> [5] --> [4] --> [1]
*/

LinkedList2.prototype.order = function () {
   var current1 = this.head;
   var current2;
   var sum = 0;
   if (this.head === null) {
      return false;
   } else {
      while (current1) {
         sum += current1.value;
         current1 = current1.next;
      }
      current1 = this.head;
      while (current1.next) {
         current2 = current1.next;
         while (current2) {
            if (current1.value < current2.value) {
               const aux = current1.value;
               current1.value = current2.value;
               current2.value = aux;
            }
            current2 = current2.next;
         }
         current1 = current1.next;
      }
   }
};

/*⚠️ No modifiques nada debajo de esta linea ⚠️*/
module.exports = LinkedList2;
