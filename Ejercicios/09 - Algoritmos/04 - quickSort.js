/* 4️⃣ ***** ALGORTIMOS - 04 ***** - quickSort() 4️⃣:

Implementa la función "quickSort" que permita ordenar un arreglo de MENOR a MAYOR.
El arreglo será recibido por parámetro. Debes retornar el arreglo resultante.


⛔️ IMPORTANTE ⛔️
1) Algunos de los números pueden ser negativos.
2) Si hay números repetidos debes mostrarlos a todos igual.


📝 EJEMPLO 📝
INPUT ----> [2, 6, 5, 3, 8, 5, 0]
OUTPUT ---> [0, 2, 3, 5, 5, 6, 8]
*/

function quickSort(array) {
   if (array.length <= 1) {
      return array;
   }

   var pivot = array[0];
   var left = [];
   var right = [];

   var i = 1;
   while (i < array.length) {
      if (array[i] < pivot) {
         left.push(array[i]);
      } else {
         right.push(array[i]);
      }
      i++;
   }

   return quickSort(left).concat(pivot).concat(quickSort(right));
}

/*⚠️ No modifiques nada debajo de esta linea ⚠️*/
module.exports = quickSort;
