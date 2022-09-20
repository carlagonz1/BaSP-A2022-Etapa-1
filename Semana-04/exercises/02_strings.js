console.log('--EXERCISE 2:STRINGS');

/* A. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula 
(utilizar toUpperCase). */

console.log('-Exercise 2.A:');
var stri1 = 'carlagonzalez';
console.log(stri1.toUpperCase());

/* B. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 
caracteres guardando el resultado en una nueva variable (utilizar substring). */

console.log('-Exercise 2.B:');
var stri2 = 'raquelalcala';
var stri3 = stri2.substring(0, 5);
console.log(stri3);

/* C. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 
caracteres guardando el resultado en una nueva variable (utilizar substring). */

console.log('-Exercise 2.C:');
var stri4 = 'carlosgonzalez';
var stri5 = stri4.substring(stri4.length - 3, stri4.length);
console.log(stri5);

/* D. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera 
letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, 
toUpperCase, toLowerCase y el operador +).*/

console.log('-Exercise 2.D:');
var stri6 = 'eduardoborjas';
var stri7 = stri6.substring(0, 1).toUpperCase() + stri6.substring(1, stri6.length).toLowerCase();
console.log(stri7);

/* E. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición
del primer espacio en blanco y guardarla en una variable (utilizar indexOf). */

console.log('-Exercise 2.E:');
var stri8 = 'dominique dog'
var stri9 = stri8.indexOf(' ')
console.log(stri9)

/* F. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio).
Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas
palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el
operador +).*/

console.log('-Exercise 2.F:');
var stri10 = 'animalitos academicos'
var y = stri10.indexOf(' ')
var stri11 = stri10.substring(0, 1).toUpperCase() + stri10.substring(1, y).toLowerCase()
var stri12 = stri10.substring(y, y+2).toUpperCase() + stri10.substring(y+2, stri10.length).toLowerCase()
var stri13 = stri11 + ' ' + stri12
console.log(stri13)
