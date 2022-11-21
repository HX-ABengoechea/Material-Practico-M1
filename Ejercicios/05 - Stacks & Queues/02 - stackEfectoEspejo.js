const { Stack } = require('../../auxiliar');
/*⚠️ No modifiques nada sobre de esta linea ⚠️*/

/* 2️⃣ ***** STACKS - 02 ***** - stackEfectoEspejo() 2️⃣:

La función "stackEfectoEspejo" recibirá un string. Su objetivo será invertir el orden de cada caracter.


⛔️ IMPORTANTE ⛔️
1) Para este ejercicio sólo puedes utilizar los métodos del Stack recibido (puede verificarlos en el archivo
"auxiliar.js").
2) No puedes utilizar métodos de arreglos.


📝 EJEMPLO 📝
INPUT ---> "Colombia Argentina"
OUTPUT --> "aibmoloC anitnegrA"

INPUT ---> Mar Azulado oro
OUTPUT --> "raM odaluzA oro"
*/
function stackEfectoEspejo(str) {
   const instacia1DeStack = new Stack();
   let stringInvertido = '';
   for (let i = 0; i < str.length; i++) {
      if (str[i] === ' ') {
         while (instacia1DeStack.size() > 0) {
            stringInvertido = stringInvertido + instacia1DeStack.quitar();
         }
         stringInvertido = stringInvertido + str[i];
      } else {
         instacia1DeStack.colocar(str[i]);
      }
   }
   while (instacia1DeStack.size() > 0) {
      stringInvertido = stringInvertido + instacia1DeStack.quitar();
   }
   return stringInvertido;
}

/*⚠️ No modifiques nada debajo de esta linea ⚠️*/
module.exports = stackEfectoEspejo;
