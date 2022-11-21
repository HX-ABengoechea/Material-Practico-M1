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
   if (array.length === 1) return array;
   let mediumArray = Math.floor(array.length / 2);
   let leftArray = array.slice(0, mediumArray);
   let rightArray = array.slice(mediumArray);
   return merge(mergeSort(leftArray), mergeSort(rightArray));
}

function merge(left, right) {
   var result = [];
   var indexLeft = 0;
   var indexRight = 0;
   while (indexLeft < left.length && indexRight < right.length) {
      if (left[indexLeft] < right[indexRight]) {
         result.push(left[indexLeft]);
         indexLeft++;
      } else {
         result.push(right[indexRight]);
         indexRight++;
      }
   }
   return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
}

/*⚠️ No modifiques nada debajo de esta linea ⚠️*/
module.exports = mergeSort;
