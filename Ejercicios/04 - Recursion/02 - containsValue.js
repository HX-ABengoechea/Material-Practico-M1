/* 2️⃣ ***** RECURSION - 02 ***** - containsValue() 2️⃣:

La función "containsValue" recibe por parámetro un objeto y un valor. Este objeto tendrá otros objetos anidados. 
Tu tarea es recorrer el objeto completo y verificar si el valor que recibes está incluido dentro del objeto. En el caso
de que si lo contega, retornar true. Caso contrario, false.


⛔️ IMPORTANTE ⛔️
1) Debes utilizar recursión.


📝 EJEMPLO 📝
INPUT ---> ({sa: "gd", {dsf: 43, ds: 425}, gsg: "jt"}, 425)
OUTPUT --> true

INPUT ---> ({sa: "gd", {dsf: 43, ds: 425}, gsg: "jt"}, gsg)
OUTPUT --> false
*/

const containsValue = function (obj, value) {
   let result = false;
   for (let key in obj) {
      if (obj[key] === value) {
         result = true;
      } else if (typeof obj[key] === 'object') {
         result = containsValue(obj[key], value);
      }
   }
   return result;
};

/*⚠️ No modifiques nada debajo de esta linea ⚠️*/
module.exports = containsValue;
