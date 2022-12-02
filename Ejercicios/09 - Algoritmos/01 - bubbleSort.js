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
   let swap = true;

   while (swap) {
      swap = false;
      for (let i = 0; i < array.length - 1; i++) {
         if (array[i] > array[i + 1]) {
            var aux = array[i];
            array[i] = array[i + 1];
            array[i + 1] = aux;
            swap = true;
         }
      }
   }

   return array;
}

/*⚠️ No modifiques nada debajo de esta linea ⚠️*/
module.exports = bubbleSort;
