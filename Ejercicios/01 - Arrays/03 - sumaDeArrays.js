/* 3️⃣ ***** ARRAYS - 03 ***** - sumaDeArrays() 3️⃣:

En este ejercicio recibirás por parámetro un arreglo que dentro puede tener dos tipos de datos:
    1) Números.
    2) Arreglos de números.

Tu trabajo es crear una función que recorra el arreglo recibido. En el caso de encontrar un número, no debe
hacer nada. Pero si lo que encuentra es un arreglo de números tendrá que reemplazarlo por la suma de todos 
sus números internos.


⛔️ IMPORTANTE ⛔️
1) Si uno de los elemento es un número, no debes modificarlo, pero aún así debe permanecer en el arreglo.
2) No olvides retornar el arreglo.


📝 EJEMPLO 📝
INPUT ----> [[1, 3], [10, 20], [4, 5], 2]
OUTPUT ---> [4, 30, 9, 2]
*/

function sumaDeArrays(array) {
   return array.map((num) => {
      if (typeof num === 'object') {
         var sum = 0;
         num.forEach((num) => {
            sum += num;
         });
         return sum;
      } else {
         return num;
      }
   });
}

/*⚠️ No modifiques nada debajo de esta linea ⚠️*/
module.exports = sumaDeArrays;
