console.log('--EXERCISE 4:IF ELSE');
[ ]

/* A. Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es mayor o igual que 0,5 
mostrar una alerta con el mensaje “Greater than 0,5” y sino un alerta con el mensaje “Lower than 0,5”.*/

console.log('-Exercise 3.A:');
var if1 = Math.random() * 1;
if (if1 >= 0,5) {
    alert('Greater than 0,5')
} else {
    alert('Lower than 0,5')
}

/*B. Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:*/

console.log('-Exercise 3.B:');
var age = 94
if (age < 2) {
    alert('Bebe')
} else if (age >= 2, age <= 12) {
    alert('Niño')
} else if (age >= 13, age <= 19) {
    alert('Adolescente')
} else if (age >= 20, age <= 30) {
    alert('Joven')
} else if (age >= 31, age <= 60) {
    alert('Adulto')
} else if (age >= 61, age <= 75) {
    alert('Adulto mayor')
} else {
    alert('Anciano')
} 

