console.log('--EXERCISE 6:FUNCTIONS');

/* A. Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el
resultado en una variable, mostrando el valor de dicha variable en la consola del navegador. */

console.log('-Exercise 6.A:');
function f1(x, y) {
    return x + y;
}
var v1 = f1(5, 50);
console.log(v1);

/* B. A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número;
de no ser un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como 
resultado. */

console.log('-Exercise 6.B:');
function f1(x, y) {
    if (isNaN(x) || isNaN(y)) {
        alert('Error: one of its parameters has an error');
        return NaN;
    } else {
        return x + y;
    }
}
var v2 = f1('d', 3);

/* C. Aparte, crear una función validate Integer que reciba un número como parámetro y devuelva verdadero si es un 
número entero. */

console.log('-Exercise 6.C:');
function validateInteger(x) {
    if (Number.isInteger(x)) {
        return true;
    } else {
        return false;
    }
}
var v2 = validateInteger(4.5);
console.log(v2)

/* D. A la función suma del ejercicio 6b) agregarle una llamada a la función del ejercicio 6c. y que valide que los 
números sean enteros. En caso que haya decimales mostrar un alerta con el error y retornar el número convertido a 
entero (redondeado). */

console.log('-Exercise 6.D:');
function f1(x, y) {
    if (isNaN(x) || isNaN(y)) {
        alert('Error: one of its parameters has an error');
        return NaN;
    } else if (!validateInteger(x)) {
        alert('Error: numbers must be integers');
        return Math.round(x);
    } else if (!validateInteger(y)) {
        alert('Error: numbers must be integers');
        return Math.round(y);
    } else {
        return x + y;
    }
}
var v3 = f1(5.5, 4);
console.log(v3);

/* E. Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma probando 
que todo siga funcionando igual. */

console.log('-Exercise 6.E:');
function validateSuma(x, y) {
    if (isNaN(x) || isNaN(y)) {
        alert('Error: one of its parameters has an error');
        return NaN;
    } else if (!validateInteger(x)) {
        alert('Error: numbers must be integers');
        return Math.round(x);
    } else if (!validateInteger(y)) {
        alert('Error: numbers must be integers');
        return Math.round(y);
    } else {
        return x + y;
    }
}

function f2(x, y) {
    if (validateSuma(x, y)) {
        return validateSuma(x, y);
    } else {
        return x + y;
    }
}
var v4 = f2(5, 50);
var v5 = f2(5.5, 10);
var v6 = f2('d', 3);
console.log(v4);
console.log(v5);
console.log(v6);