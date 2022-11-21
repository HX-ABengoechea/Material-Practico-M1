/* 3️⃣ ***** FUNCTIONS - 03 ***** - timeConversion() 3️⃣:

En este ejercicio tendrás que construir una función que recibirá un horario por parámetro. Este horario es un string
que estará escrito en formado "12 horas".

Tu tarea es que la función "timeConversion" convierta este formato en el de "24 horas".

⛔️ IMPORTANTE ⛔️
1) Si la función recibe un horario que no existe, o minutos excedidos de los 60 (incluido) debe retornar false.
2) Sólo recibe horas y minutos. No segundos.


📝 EJEMPLO 📝
INPUT ----> "12:00 AM"
OUTPUT ---> "00:00"

INPUT ----> "12:00 PM"
OUTPUT ---> "12:00"

INPUT ----> "27:00"
OUTPUT ---> false

INPUT ----> "12:60"
OUTPUT ---> false

INPUT ----> "09:00 PM"
OUTPUT ---> "21:00"

*/ function timeConversion(time) {
   if (typeof time !== 'string') {
      return false;
   } else {
      if (time.includes('AM')) {
         var horario = time.slice(0, 5);
         if (
            Number(horario.slice(0, 2) > 12 || Number(horario.slice(3, 5) > 59))
         ) {
            return false;
         }
         if (horario.slice(0, 2) === '12') {
            return '00:' + `${horario.slice(3, 5)}`;
         } else {
            return horario;
         }
      } else if (time.includes('PM')) {
         var horario = time.slice(0, 5);
         if (
            Number(horario.slice(0, 2) > 24 || Number(horario.slice(3, 5) > 59))
         ) {
            return false;
         } else {
            var esto = horario.slice(3, 5);
            if (horario.slice(0, 2) === '01') return '13:' + `${esto}`;
            if (horario.slice(0, 2) === '02') return '14:' + `${esto}`;
            if (horario.slice(0, 2) === '03') return '15:' + `${esto}`;
            if (horario.slice(0, 2) === '04') return '16:' + `${esto}`;
            if (horario.slice(0, 2) === '05') return '17:' + `${esto}`;
            if (horario.slice(0, 2) === '06') return '18:' + `${esto}`;
            if (horario.slice(0, 2) === '07') return '19:' + `${esto}`;
            if (horario.slice(0, 2) === '08') return '20:' + `${esto}`;
            if (horario.slice(0, 2) === '09') return '21:' + `${esto}`;
            if (horario.slice(0, 2) === '10') return '22:' + `${esto}`;
            if (horario.slice(0, 2) === '11') return '23:' + `${esto}`;
            if (horario.slice(0, 2) === '12') return '12:' + `${esto}`;
            return false;
         }
      } else {
         return false;
      }
   }
}

/*⚠️ No modifiques nada debajo de esta linea ⚠️*/
module.exports = timeConversion;
