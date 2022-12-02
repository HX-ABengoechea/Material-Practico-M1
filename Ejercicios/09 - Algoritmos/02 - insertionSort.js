/* 2️⃣ ***** ALGORTIMOS - 02 ***** - insertionSort() 2️⃣:

Implementa la función "insertionSort" que permita ordenar un arreglo de MENOR a MAYOR.
El arreglo será recibido por parámetro. Debes retornar el arreglo resultante.


⛔️ IMPORTANTE ⛔️
1) Algunos de los números pueden ser negativos.
2) Si hay números repetidos debes mostrarlos a todos igual.


📝 EJEMPLO 📝
INPUT ----> [2, 6, 5, 3, 8, 5, 0]
OUTPUT ---> [0, 2, 3, 5, 5, 6, 8]
*/

function insertionSort(array) {
   for (let i = 1; i < array.length; i++) {
      var currentValue = array[i];
      var j = i - 1;

      while (j >= 0 && currentValue < array[j]) {
         array[j + 1] = array[j];
         j--;
      }
      array[j + 1] = currentValue;
   }

   return array;
}

/*⚠️ No modifiques nada debajo de esta linea ⚠️*/
module.exports = insertionSort;
