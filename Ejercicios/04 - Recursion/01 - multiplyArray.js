/* 1️⃣ ***** RECURSION - 01 ***** - multiplyArray() 1️⃣:

La función "multiplyArray" recibirá por parámetro un arreglo de números. Tendrá que retornar la suma de la
multipliación de todos los números que contiene. Para resolver el cálculo debes utilizar recursión.


⛔️ IMPORTANTE ⛔️
1) Si el arregloe stá vacío retornar true.
2) Debes utilizar recursión.


📝 EJEMPLO 📝
INPUT ----> [1, 2, 5] 
OUTPUT ---> 10

INPUT ----> [5, 5, 4] 
OUTPUT ---> 100
*/

const multiplyArray = function (array) {
   if (array.length === 0) {
      return true;
   } else {
      return array.shift() * multiplyArray(array);
   }
};

/*⚠️ No modifiques nada debajo de esta linea ⚠️*/
module.exports = multiplyArray;
