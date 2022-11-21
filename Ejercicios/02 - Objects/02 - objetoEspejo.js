/* 2️⃣ ***** OBJECTS - 02 ***** - objetoEspejo() 2️⃣:

En este ejercicio desarrollarás una función que recibe por parámetro un objeto. Este objeto tendrá distintas
propiedades, cuyos valores siempre serás igual a undefined. Tu tarea es rellenar esos valor por el nombre de
la propiedad, pero con el nombre invertido.


⛔️ IMPORTANTE ⛔️
1) Si el objeto no tiene propiedades debes retornar false.


📝 EJEMPLO 📝
INPUT ----> {asc: undefined, oasf: undefined, peqo: undefined}
OUTPUT ---> {asc: "csa", oasf: "fsao", peqo: "oqep"}
*/

function objetoEspejo(object) {
   if (!Object.keys(object).length) {
      return false;
   }
   for (let prop in object) {
      object[prop] = prop.split('').reverse().join('');
   }
   return object;
}

/*⚠️ No modifiques nada debajo de esta linea ⚠️*/
module.exports = objetoEspejo;
