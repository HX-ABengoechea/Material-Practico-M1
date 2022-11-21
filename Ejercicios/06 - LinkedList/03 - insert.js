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
   if (this.length < pos && pos - this.length === 1) return this.add(data);
   let newNodo = new Node(data);
   let current = this.head;
   if (pos === 1) {
      newNodo.next = current;
      this.length++;
      return (this.head = newNodo);
   }
   while (pos - 1 > 1) {
      pos--;
      current = current.next;
   }
   newNodo.next = current.next;
   current.next = newNodo;
   this.length++;
};

/*⚠️ No modifiques nada debajo de esta linea ⚠️*/
module.exports = LinkedList3;
