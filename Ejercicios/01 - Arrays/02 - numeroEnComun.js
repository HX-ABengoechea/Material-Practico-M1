/* 2️⃣ ***** ARRAYS - 02 ***** - numeroEnComun() 2️⃣:

En este ejercicio construiras una función que recibirá dos arreglos por parámetro. Ambos arreglos contendrán
sólo números. Sólo un número estará repetido en los dos arreglos. Tu objetivo es buscar este número y 
devolverlo.


⛔️ IMPORTANTE ⛔️
1) Puedes utilizar bucles o métodos para recorrer los arreglos.
2) Si no se encuentra un número en común, debes retornar el número más pequeño que encuentres entre los dos
arreglos.


📝 EJEMPLO 📝
INPUT ----> ([4, 34, 65, 84, 32, 5, 72], [19, 323, -43, 72, 94, 632, 23])
OUTPUT ---> 72
*/

function numeroEnComun(arrayUno, arrayDos) {
   for (let i = 0; i < arrayUno.length; i++) {
      for (let j = 0; j < arrayDos.length; j++) {
         if (arrayUno[i] === arrayDos[j]) {
            return arrayUno[i];
         }
      }
   }
   var arr = arrayUno.concat(arrayDos);
   var minNum = arr[0];
   for (let i = 1; i < arr.length; i++) {
      if (arr[i] < minNum) {
         minNum = arr[i];
      }
   }
   return minNum;
}

/*⚠️ No modifiques nada debajo de esta linea ⚠️*/
module.exports = numeroEnComun;
