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
    var letters = ('abcdefghijklmnñopqrstuvwyzABCDEFGHIJKLMNOPQRSTUVWXYZ')
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

    /* Nombre. */

    function name() {
        for (var index = 0; index < nombre.value.length; index++) {
            if (numbers.indexOf(nombre.value.charAt(index), 0) != -1) {
                return false;
              }
            }
            return true;
        };

    function name1() {
        for (var index = 0; index < nombre.value.length; index++) {
            if (letters.indexOf(nombre.value.charAt(index), 0) != -1) {
                return true;
                }
            }
            return false;
        };

    function name2() {
        if (name(true) && name1(true) && nombre.value.length > 3) {
            nombre.classList.add('emailok');
        } else {
            nombre.classList.remove('emailok');
            nombre.classList.add('notemail');
            error.innerText = 'Nombre Incorrecto';
        }
    }

    function name3() {
        if (name(true) && name1(true) && nombre.value.length > 3) {
        } else {
            nombre.classList.remove('emailok');
            nombre.classList.add('notemail');
            error.innerText = '';
        }
    }

    nombre.addEventListener('blur', name2)

    nombre.addEventListener('focus', name3)

    /* Apellido. */

    function apellido0() {
        for (var index = 0; index < apellido.value.length; index++) {
            if (numbers.indexOf(apellido.value.charAt(index), 0) != -1) {
                return false;
              }
            }
            return true;
        };

    function apellido1() {
        for (var index = 0; index < apellido.value.length; index++) {
            if (letters.indexOf(apellido.value.charAt(index), 0) != -1) {
                return true;
                }
            }
            return false;
        };

    function apellido2() {
        if (apellido0(true) && apellido1(true) && apellido.value.length > 3) {
            apellido.classList.add('emailok');
        } else {
            apellido.classList.remove('emailok');
            apellido.classList.add('notemail');
            error1.innerText = 'Apellido Incorrecto';
        }
    }

    function apellido3() {
        if (apellido0(true) && apellido1(true) && apellido.value.length > 3) {
        } else {
            apellido.classList.remove('emailok');
            apellido.classList.add('notemail');
            error1.innerText = '';
        }
    }

    apellido.addEventListener('blur', apellido2)

    apellido.addEventListener('focus', apellido3)

    /* DNI. */

    function dni0() {
        for (var index = 0; index < dni.value.length; index++) {
            if (numbers.indexOf(dni.value.charAt(index), 0) != -1) {
                return true;
              }
            }
            return false;
        };

    function dni1() {
        for (var index = 0; index < dni.value.length; index++) {
            if (letters.indexOf(dni.value.charAt(index), 0) != -1) {
                return false;
                }
            }
            return true;
        };

    function dni2() {
        if (dni0(true) && dni1(true) && dni.value.length > 7) {
            dni.classList.add('emailok');
        } else {
            dni.classList.remove('emailok');
            dni.classList.add('notemail');
            error2.innerText = 'DNI Incorrecto';
        }
    }

    function dni3() {
        if (dni0(true) && dni1(true) && dni.value.length > 7) {
        } else {
            dni.classList.remove('emailok');
            dni.classList.add('notemail');
            error2.innerText = '';
        }
    }

    dni.addEventListener('blur', dni2)

    dni.addEventListener('focus', dni3)

    /* Fecha de Nacimiento. */

    /* Teléfono. */

    function telefono0() {
        for (var index = 0; index < telefono.value.length; index++) {
            if (numbers.indexOf(telefono.value.charAt(index), 0) != -1) {
                return true;
              }
            }
            return false;
        };

    function telefono1() {
        for (var index = 0; index < telefono.value.length; index++) {
            if (letters.indexOf(telefono.value.charAt(index), 0) != -1) {
                return false;
                }
            }
            return true;
        };

    function telefono2() {
        if (telefono0(true) && telefono1(true) && telefono.value.length == 10) {
            telefono.classList.add('emailok');
        } else {
            telefono.classList.remove('emailok');
            telefono.classList.add('notemail');
            error4.innerText = 'Teléfono Incorrecto';
        }
    }

    function telefono3() {
        if (telefono0(true) && telefono1(true) && telefono.value.length == 10) {
        } else {
            telefono.classList.remove('emailok');
            telefono.classList.add('notemail');
            error4.innerText = '';
        }
    }

    telefono.addEventListener('blur', telefono2)

    telefono.addEventListener('focus', telefono3)

    /* Dirección. */

    /* Localidad. */

    /* Codigo Postal. */

    function cp0() {
        for (var index = 0; index < cp.value.length; index++) {
            if (numbers.indexOf(cp.value.charAt(index), 0) != -1) {
                return true;
              }
            }
            return false;
        };

    function cp1() {
        for (var index = 0; index < cp.value.length; index++) {
            if (letters.indexOf(cp.value.charAt(index), 0) != -1) {
                return false;
                }
            }
            return true;
        };

    function cp2() {
        if (cp0(true) && cp1(true) && (cp.value.length == 4 || cp.value.length == 5)) {
            cp.classList.add('emailok');
        } else {
            cp.classList.remove('emailok');
            cp.classList.add('notemail');
            error7.innerText = 'Código Postal Incorrecto';
        }
    }

    function cp3() {
        if (cp0(true) && cp1(true) && (cp.value.length == 4 || cp.value.length == 5)) {
        } else {
            cp.classList.remove('emailok');
            cp.classList.add('notemail');
            error7.innerText = '';
        }
    }

    cp.addEventListener('blur', cp2)

    cp.addEventListener('focus', cp3)

    /* Email. */

    function f1() {
        if (emailExpression.test(email.value)) {
            email.classList.add('emailok');
        } else {
            email.classList.remove('emailok');
            email.classList.add('notemail');
            error9.innerText = 'Email Incorrect';
        }
    };

    email.addEventListener ('blur', f1);

    email.addEventListener('focus', function f2() {
        if (emailExpression.test(email.value)) {
        } else {
            error9.innerText = '' ;
        }
        }
    );

    /* Contraseña. */

    /* Repetir Contraseña. */
}