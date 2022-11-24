/* 3️⃣ ***** OBJECTS - 03 ***** - objetosAnidados() 3️⃣:

Esta función recibirá un objeto por parámetro. El objetivo es que contabilices la profundidad máxima de
objetos anidados que tenga este. Es decir, tendrás que devolver la cantidad de niveles de objetos anidados
tiene el objeto que reciber por parámetro.

Nivel 1 --> {ejemplo: "ejemplo"}
Nivel 2 --> {ejemplo: "ejemplo", {ejemplo2: "ejemplo2"}}
Nivel 3 --> {ejemplo: "ejemplo", {ejemplo2: {ejemplo3: "ejemplo3"}}}

⛔️ IMPORTANTE ⛔️
1) Si recibes algo que no sea un objeto, debes devolver el número cero.
2) Si recibes un objeto que no tiene otros objetos anidados debes devolver el número uno.
3) Recuerda que esta función retorna un número.


📝 EJEMPLO 📝
INPUT ----> {ds: 32, {fsd: 43, kd: {km: {pow: 32}}}, dd: 43, kfd: {dfg: 42}}
OUTPUT ---> 4

INPUT ----> undefined
OUTPUT ---> 0
*/

function objetosAnidados(object) {}

/*⚠️ No modifiques nada debajo de esta linea ⚠️*/
module.exports = objetosAnidados;
