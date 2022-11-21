/* 3️⃣ ***** ALGORTIMOS - 03 ***** - selectionSort() 3️⃣:

Implementa la función "selectionSort" que permita ordenar un arreglo de MENOR a MAYOR.
El arreglo será recibido por parámetro. Debes retornar el arreglo resultante.


⛔️ IMPORTANTE ⛔️
1) Algunos de los números pueden ser negativos.
2) Si hay números repetidos debes mostrarlos a todos igual.


📝 EJEMPLO 📝
INPUT ----> [2, 6, 5, 3, 8, 5, 0]
OUTPUT ---> [0, 2, 3, 5, 5, 6, 8]
*/

function selectionSort(array) {
   let minNum = array[0];
   for (let i = 0; i < array.length; i++) {
      for (let j = i + 1; j < array.length; j++) {
         if (array[i] > array[j]) {
            minNum = array[i];
            array[i] = array[j];
            array[j] = minNum;
         }
      }
   }
   return array;
}

/*⚠️ No modifiques nada debajo de esta linea ⚠️*/
module.exports = selectionSort;
