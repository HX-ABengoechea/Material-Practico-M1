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
   var pivot = Math.floor(Math.random() * array.length);
   var right = [];
   var left = [];
   for (let i = 0; i < array.length; i++) {
      if (i !== pivot) {
         if (array[i] < array[pivot]) {
            left.push(array[i]);
         } else {
            right.push(array[i]);
         }
      }
   }
   const result = [...quickSort(left), array[pivot], ...quickSort(right)];
   return result;
}

/*⚠️ No modifiques nada debajo de esta linea ⚠️*/
module.exports = quickSort;
