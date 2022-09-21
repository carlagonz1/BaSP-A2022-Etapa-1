console.log('--EXERCISE 5:FOR');

/* A. Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript para mostrar 
una alerta utilizando cada una de las palabras. */

console.log('-Exercise 5.A:');
var ar1 = ['raquel', 'carlos', 'dominique', 'carla', 'flan'];

for (var index = 0; index < ar1.length; index++) {
    alert(ar1[index]);
    
};

/* B. Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada palabra 
modificada. */

console.log('-Exercise 5.B:');
for (var index = 0; index < ar1.length; index++) {
    alert(ar1[index].substring(0, 1).toUpperCase() + ar1[index].substring(1).toLowerCase());
    
};

/* C. Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) recorrerlo con un 
bucle for para ir guardando cada palabra dentro de la variable sentence. Al final mostrar una única alerta con la 
cadena completa. */

console.log('-Exercise 5.C:');
var sentence = ''
for (var index = 0; index < ar1.length; index++) {
    sentence = sentence.concat(ar1[index]);
    
};
alert(sentence);

/* D. Crear una array vacío y con un bucle for de 10 repeticiones. Llenar el array con el número de la repetición, es
decir que al final de la ejecución del bucle for debería haber 10 elementos dentro del array, desde el número 0 hasta
 al número 9. Mostrar por la consola del navegador el array final (utilizar console.log).*/

 console.log('-Exercise 5.D:');

 var ar2 = [ ];
 for (index = 0; index < 10; index++) {
    ar2.push(index);
    
 };
console.log(ar2);
