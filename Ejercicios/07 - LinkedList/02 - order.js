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
   var valores = [];
   var current = this.head;

   while (current.next) {
      valores.push(current.value);
      current = current.next;
   }
   valores.push(current.value);

   for (let i = 0; i < valores.length; i++) {
      this.remove();
   }

   valores
      .sort()
      .reverse()
      .forEach((value) => {
         this.add(value);
      });

   return this;
};

/*⚠️ No modifiques nada debajo de esta linea ⚠️*/
module.exports = LinkedList2;
