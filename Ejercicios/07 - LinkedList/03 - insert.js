const { LinkedList, Node } = require('../../auxiliar');
const LinkedList3 = LinkedList;
/*⚠️ No modifiques nada sobre de esta linea ⚠️*/

/* 3️⃣ ***** LINKEDLIST - 03 ***** - instert() 3️⃣:

El método insert recibirá una posición y un dato. Este dato debe ser agregado a la LinekdList en la posición indicada.


⛔️ IMPORTANTE ⛔️
1) Puedes revisar los métodos que ya existen de "LinkedList" en el archivo "auxiliar.js".
2) Toma a "head" como la posición 1.
*/

LinkedList3.prototype.insert = function (data, pos) {
   var actualPosition = 1;
   var current = this.head;

   while (current.next && pos - 1 !== actualPosition) {
      current = current.next;
      actualPosition++;
   }

   var valoresRestantes = [];
   while (current.next) {
      current = current.next;
      valoresRestantes.push(current.value);
   }
   valoresRestantes.push(current.value);

   valoresRestantes.forEach(() => {
      this.remove();
   });

   this.add(data);

   valoresRestantes.forEach((val) => {
      this.add(val);
   });
   return this;
};

/*⚠️ No modifiques nada debajo de esta linea ⚠️*/
module.exports = LinkedList3;
