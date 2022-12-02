/* 5️⃣ ***** ALGORTIMOS - 05 ***** - mergeSort() 5️⃣:

Implementa la función "mergeSort" que permita ordenar un arreglo de MENOR a MAYOR.
El arreglo será recibido por parámetro. Debes retornar el arreglo resultante.


⛔️ IMPORTANTE ⛔️
1) Algunos de los números pueden ser negativos.
2) Si hay números repetidos debes mostrarlos a todos igual.


📝 EJEMPLO 📝
INPUT ----> [2, 6, 5, 3, 8, 5, 0]
OUTPUT ---> [0, 2, 3, 5, 5, 6, 8]
*/

function mergeSort(array) {
   if (array.length <= 1) {
      return array;
   }

   var mid = Math.floor(array.length / 2);
   var left = array.slice(0, mid);
   var right = array.slice(mid);

   function merge(left, right) {
      var leftIndex = 0;
      var rightIndex = 0;
      var merged = [];

      while (leftIndex < left.length && rightIndex < right.length) {
         if (left[leftIndex] < right[rightIndex]) {
            merged.push(left[leftIndex]);
            leftIndex++;
         } else {
            merged.push(right[rightIndex]);
            rightIndex++;
         }
      }

      return merged
         .concat(left.slice(leftIndex))
         .concat(right.slice(rightIndex));
   }

   return merge(mergeSort(left), mergeSort(right));
}

/*⚠️ No modifiques nada debajo de esta linea ⚠️*/
module.exports = mergeSort;
