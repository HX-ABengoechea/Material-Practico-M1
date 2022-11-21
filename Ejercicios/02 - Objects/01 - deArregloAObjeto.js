/* 1️⃣ ***** OBJECTS - 01 ***** - objetoEspejo() 1️⃣:

Esta función recibirá por parámetro un arreglo de números. Cada número tendrá siemrpe tres dígitos. Lo que 
debe hacer es convertir el arreglo en un objeto de la siguiente manera:

1) Cada propiedad del objeto será cada número del arreglo.
2) El valor de cada propiedad será la suma de los tres dígitos del mismo número.


⛔️ IMPORTANTE ⛔️
1) El valor de cada propiedad en el objeto debe ser de tipo number.


📝 EJEMPLO 📝
INPUT ----> [352, 547, 438, 923, 231]
OUTPUT ---> {352: 10, 547: 16, 438: 15, 923: 14, 231: 6}
*/

function deArregloAObjeto(array) {
   var obj = {};
   array.forEach((num) => {
      var acu = 0;
      num.toString()
         .split('')
         .forEach((n) => {
            acu = acu + Number(n);
         });
      obj[num] = acu;
   });
   return obj;
}

/*⚠️ No modifiques nada debajo de esta linea ⚠️*/
module.exports = deArregloAObjeto;
