window.onload = function () {
    var nombre = document.getElementById('nombre');
    var apellido = document.getElementById('apellido');
    var dni = document.getElementById('dni');
    var fecha = document.getElementById('fecha');
    var telefono = document.getElementById('telefono');
    var direccion = document.getElementById('direccion');
    var localidad = document.getElementById('localidad');
    var cp = document.getElementById('cp');
    var email = document.getElementById('email');
    var contraseña = document.getElementById('contraseña');
    var rc = document.getElementById('rc');
    var error = document.getElementById('error');
    var error1 = document.getElementById('error1');
    var error2 = document.getElementById('error2');
    var error3 = document.getElementById('error3');
    var error4 = document.getElementById('error4');
    var error5 = document.getElementById('error5');
    var error6 = document.getElementById('error6');
    var error7 = document.getElementById('error7');
    var error8 = document.getElementById('error8');
    var error9 = document.getElementById('error9');
    var error0 = document.getElementById('error0');
    var numbers = ('0123456789')
    var min = (abcdefghijklmnñopqrstuvwyz)
    var may = (ABCDEFGHIJKLMNOPQRSTUVWXYZ)
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

    function f1() {
        if (emailExpression.test(email.value)) {
            email.classList.add('emailok');
        } else {
            email.classList.remove('emailok');
            email.classList.add('notemail');
            error.innerText = 'Email Incorrect';
        }
       }

    email.addEventListener ('blur', f1);
}