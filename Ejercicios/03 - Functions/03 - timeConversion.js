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

*/ function timeConversion(time) {}

/*⚠️ No modifiques nada debajo de esta linea ⚠️*/
module.exports = timeConversion;
