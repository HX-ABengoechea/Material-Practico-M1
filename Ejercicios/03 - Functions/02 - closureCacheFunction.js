/* 2️⃣ ***** FUNCTIONS - 02 ***** - closureCacheFunction() 2️⃣:

La función "closureCacheFunction" debe guardar en memoria (cache) información. Para esto tiene que retornar otra 
función que puede recibir un dato como argumento. Si este dato ya existe dentro del cache, simplemete debes retornarlo.
En el caso que este dato no exista dentro del cache, deberás guardarlo dentro.

El cache debe guardarse dentro de un objeto donde la propiedad sea el argumento recibido, y el valor de la propiedad
será el resultado del argumento recibido pasado por la función "callback" de la función padre.


⛔️ IMPORTANTE ⛔️
1) La función que retornas debe aceptar sólo un arguemento.


📝 EJEMPLO 📝
var callback = (x) => {return x * x };
var saveCache = closureCacheFunction(callback);
savecache(2); ---> Devuelve "4", guardándolo primero en cache.
savecache(2); ---> Devuelve "4", pero obtenido del cache previamente guardado.
*/

function closureCacheFunction(callback) {
   var obj = {};

   return function (arg) {
      if (!obj.hasOwnProperty(arg)) {
         obj[arg] = callback(arg);
      }
      return obj[arg];
   };
}

/*⚠️ No modifiques nada debajo de esta linea ⚠️*/
module.exports = closureCacheFunction;
