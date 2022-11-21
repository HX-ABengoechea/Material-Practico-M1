/* 1️⃣ ***** FUNCTIONS - 01 ***** - closureTableMult() 1️⃣:


El objetivo de la función "closureTableMult" es retornar una nueva función que nos permita obtener los valores de la
tabla de multiplicación de un número específico.


⛔️ IMPORTANTE ⛔️
1) La función puede recibir enteros, decimales y negativos.


📝 EJEMPLO 📝
var multByFour = closureTableMult(4);
multByFour(2) --> 8
multByFour(5) --> 20

var multByThree = closureTableMult(-3);
multByThree(3) --> (-9)
multByThree(4) --> (-12)
*/

var closureTableMult = function (multiplier) {
   return function (num) {
      return multiplier * num;
   };
};

/*⚠️ No modifiques nada debajo de esta linea ⚠️*/
module.exports = closureTableMult;
