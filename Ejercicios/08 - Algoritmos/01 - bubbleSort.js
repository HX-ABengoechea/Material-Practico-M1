/* 1️⃣ ***** ALGORTIMOS - 01 ***** - bubbleSort() 1️⃣:

Implementa la función "bubbleSort" que permita ordenar un arreglo de MENOR a MAYOR.
El arreglo será recibido por parámetro. Debes retornar el arreglo resultante.


⛔️ IMPORTANTE ⛔️
1) Algunos de los números pueden ser negativos.
2) Si hay números repetidos debes mostrarlos a todos igual.


📝 EJEMPLO 📝
INPUT ----> [2, 6, 5, 3, 8, 5, 0]
OUTPUT ---> [0, 2, 3, 5, 5, 6, 8]
*/

function bubbleSort(array) {
   let aux1;
   let aux2;
   let bandera = false;
   for (let i = 1; i < array.length; i++) {
      aux1 = array[i - 1];
      aux2 = array[i];
      if (aux2 < aux1) {
         bandera = true;
         array[i - 1] = aux2;
         array[i] = aux1;
      }
   }
   if (bandera) {
      return bubbleSort(array);
   } else {
      return array;
   }
}

/*⚠️ No modifiques nada debajo de esta linea ⚠️*/
module.exports = bubbleSort;
