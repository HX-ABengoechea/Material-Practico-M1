const { Queue } = require('../../auxiliar');
/*⚠️ No modifiques nada sobre de esta linea ⚠️*/

/* 1️⃣ ***** QUEUE - 01 ***** - queueControlAccess() 1️⃣:

Tendrás que contruir una función llamada "queueControlAccess". Esta función recibirá dos valores.

Por un lado recibirá el nombre de un evento. Por otro lado recibirá una Queue, en la que en cada una de sus posiciones 
tendrá un objeto que contiene la información de una persona. Este objeto tiene la siguiente estructura:
{
  fullname: "Yazmin Rey",
  age: 23,
  ticket: { number: 1, event: "Tomorrowland" }
}

El objetivo es que siempre verifiques si la primera persona en la fila tiene los requisitos necesarios para ingresar
al evento. Los requisitos que debe cumplir son:
   1) Ser mayor de 18 años (18 inclusive es válido).
   2) Tener un ticket que corresponda con el evento (propiedad "event" de ticket).
   3) Que no haya ingresado ya otra persona al evento con ese mismo número de ticket.

Finalmente la función debe devolver un arreglo con el nombre de todas las personas que si pudieron ingresar.

⛔️ IMPORTANTE ⛔️
1) Aquellas personas que no cumplan con los requisitos para ingresar al evento deben ser removidos de la fila.
2) Puedes utilizar los métodos de la Queue. Esto se encuentran en el archivo "auxiliar.js". Te invitamos a que los
revises.
3) La función devuelve un arreglo de strings.
*/

var queueControlAccess = function (queue, event) {
   let arr = [];
   let access = [];
   while (queue.size()) {
      let subject = queue.dequeue();
      if (
         subject.age >= 18 &&
         subject.ticket.event === event &&
         !access.includes(subject.ticket.number)
      ) {
         access.push(subject.ticket.number);
         arr.push(subject.fullname);
      }
   }
   return arr;
};

/*⚠️ No modifiques nada debajo de esta linea ⚠️*/
module.exports = queueControlAccess;
