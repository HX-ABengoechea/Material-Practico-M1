const closureTableMult = require('../Ejercicios/03 - Functions/01 - closureTableMult');
const cacheFunction = require('../Ejercicios/03 - Functions/02 - closureCacheFunction');
const timeConversion = require('../Ejercicios/03 - Functions/03 - timeConversion');

describe('CLOSURE TABLE MULT', function () {
   var timesSix = closureTableMult(6);
   var timesTwo = closureTableMult(2);
   it('Debe devolver el valor específico de la tabla del seis', function () {
      expect(timesSix(3)).toBe(18);
      expect(timesSix(2)).toBe(12);
   });
   it('Debe devolver el valor específico de la tabla del dos', function () {
      expect(timesTwo(2)).toBe(4);
      expect(timesTwo(3)).toBe(6);
   });
});

describe('CLOSURE CACHE FUNCTION', function () {
   const callback = function (x) {
      return x * 2;
   };
   it('Debe retornar una función', function () {
      expect(typeof cacheFunction(callback)).toEqual('function');
   });
   it('Debe retornar el resultado de la función callback cuando la función cache es invocada', function () {
      const cachedFunction = cacheFunction(callback);
      expect(cachedFunction(5)).toBe(10);
   });
   it('Debe guardar la información en el cache', function () {
      const cachedFunction = cacheFunction(callback);
      var resultOne = cachedFunction(2);
      expect(resultOne).toBe(4);
      var resultTwo = cachedFunction(3);
      expect(resultTwo).toBe(6);
      var resultTwo = cachedFunction(2);
      expect(resultTwo).toBe(4);
   });
   it('No debe llamar a la función callback cuando no sea necesario', function () {
      const callback = jest.fn();
      const cachedFunction = cacheFunction(callback);
      cachedFunction(true);
      cachedFunction(true);
      cachedFunction(true);
      cachedFunction(true);
      cachedFunction(true);
      cachedFunction(10);
      cachedFunction(10);
      cachedFunction(10);
      cachedFunction(10);
      expect(callback).toHaveBeenCalledTimes(2);
   });
});

describe('TIME CONVERSION', function () {
   it('Debe retornar la hora en formato 24hs', function () {
      expect(timeConversion('03:15 PM')).toBe('15:15');
      expect(timeConversion('01:12 AM')).toBe('01:12');
   });
   it('Debe retornar la hora correcta para las 12', function () {
      expect(timeConversion('12:15 PM')).toBe('12:15');
      expect(timeConversion('12:12 AM')).toBe('00:12');
   });
   it('Debe manejar los datos erróneos', function () {
      expect(timeConversion('35:15 PM')).toBe(false);
      expect(timeConversion('12:78 AM')).toBe(false);
      expect(timeConversion(undefined)).toBe(false);
      expect(timeConversion('')).toBe(false);
      expect(timeConversion('15:15 AM')).toBe(false);
   });
});
