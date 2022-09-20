console.log('--EXERCISE 3:ARRAYS');

/* A. Dado el siguiente array: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre',
'Octubre', 'Noviembre', 'Diciembre'] mostrar por consola los meses 5 y 11 (utilizar console.log). */

console.log('-Exercise 3.A:');
var ar1 = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre',
'Octubre', 'Noviembre', 'Diciembre'];
console.log(ar1[4] + ' ' + ar1[10]);

/* B. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort). */

console.log('-Exercise 3.B:');
ar1.sort();
console.log(ar1);

/* C. Agregar un elemento al principio y al final del array (utilizar unshift y push). */

console.log('-Exercise 3.C:');
ar1.unshift('año viejo');
ar1.push('año nuevo');
console.log(ar1);

/* D. Quitar un elemento del principio y del final del array (utilizar shift y pop). */

console.log('-Exercise 3.D:');
ar1.shift(0);
ar1.pop(ar1.length);
console.log(ar1);

/* E. Invertir el orden del array (utilizar reverse). */

console.log('-Exercise 3.E:');
ar1.reverse();
console.log(ar1);

/* F. Unir todos los elementos del array en un único string donde cada mes este separado por un guión - 
(utilizar join). */

console.log('-Exercise 3.F:');
console.log(ar1.join('-'));

/* G. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice). */

console.log('-Exercise 3.G:');
ar1 = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre',
'Octubre', 'Noviembre', 'Diciembre'];
var ar2 = ar1.slice(4, 11);
console.log(ar2);