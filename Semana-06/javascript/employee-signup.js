window.onload = function () {
    var name = document.getElementById('name');
    var lastName = document.getElementById('lastname');
    var dni = document.getElementById('dni');
    var date = document.getElementById('date');
    var phone = document.getElementById('phone');
    var adress = document.getElementById('adress');
    var location = document.getElementById('location');
    var cp = document.getElementById('cp');
    var email = document.getElementById('email');
    var password = document.getElementById('password');
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
    var button = document.getElementById('submit');

    /* name. */

    function name0() {
        for (var index = 0; index < name.value.length; index++) {
            if (numbers.indexOf(name.value.charAt(index), 0) != -1) {
                return false;
            }
        }
        return true;
    };

    function name1() {
        for (var index = 0; index < name.value.length; index++) {
            if (letters.indexOf(name.value.charAt(index), 0) != -1) {
                return true;
            }
        }
        return false;
    };

    function name2() {
        if (name0(true) && name1(true) && name.value.length > 3) {
            name.classList.add('emailok');
        } else {
            name.classList.remove('emailok');
            name.classList.add('notemail');
            error.innerText = 'name Incorrecto';
        }
    }

    function name3() {
        if (name0(true) && name1(true) && name.value.length > 3) {} else {
            name.classList.remove('emailok');
            name.classList.add('notemail');
            error.innerText = '';
        }
    }

    name.addEventListener('blur', name2)

    name.addEventListener('focus', name3)

    /* lastName. */

    function lastName0() {
        for (var index = 0; index < lastName.value.length; index++) {
            if (numbers.indexOf(lastName.value.charAt(index), 0) != -1) {
                return false;
            }
        }
        return true;
    };

    function lastName1() {
        for (var index = 0; index < lastName.value.length; index++) {
            if (letters.indexOf(lastName.value.charAt(index), 0) != -1) {
                return true;
            }
        }
        return false;
    };

    function lastName2() {
        if (lastName0(true) && lastName1(true) && lastName.value.length > 3) {
            lastName.classList.add('emailok');
        } else {
            lastName.classList.remove('emailok');
            lastName.classList.add('notemail');
            error1.innerText = 'lastName Incorrecto';
        }
    }

    function lastName3() {
        if (lastName0(true) && lastName1(true) && lastName.value.length > 3) {} else {
            lastName.classList.remove('emailok');
            lastName.classList.add('notemail');
            error1.innerText = '';
        }
    }

    lastName.addEventListener('blur', lastName2);

    lastName.addEventListener('focus', lastName3);

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
        if (dni0(true) && dni1(true) && dni.value.length > 7) {} else {
            dni.classList.remove('emailok');
            dni.classList.add('notemail');
            error2.innerText = '';
        }
    }

    dni.addEventListener('blur', dni2)

    dni.addEventListener('focus', dni3)

    /* Date. */

    /* Teléfono. */

    function phone0() {
        for (var index = 0; index < phone.value.length; index++) {
            if (numbers.indexOf(phone.value.charAt(index), 0) != -1) {
                return true;
            }
        }
        return false;
    };

    function phone1() {
        for (var index = 0; index < phone.value.length; index++) {
            if (letters.indexOf(phone.value.charAt(index), 0) != -1) {
                return false;
            }
        }
        return true;
    };

    function phone2() {
        if (phone0(true) && phone1(true) && phone.value.length == 10) {
            phone.classList.add('emailok');
        } else {
            phone.classList.remove('emailok');
            phone.classList.add('notemail');
            error4.innerText = 'Teléfono Incorrecto';
        }
    }

    function phone3() {
        if (phone0(true) && phone1(true) && phone.value.length == 10) {} else {
            phone.classList.remove('emailok');
            phone.classList.add('notemail');
            error4.innerText = '';
        }
    }

    phone.addEventListener('blur', phone2)

    phone.addEventListener('focus', phone3)

    /* Dirección. */

    var and = adress.value.indexOf(' ');
    var adress8 = adress.value.substring(0, and)
    var adress9 = adress.value.substring(and + 1, adress.value.length)

    function space0() {
        if (and != -1) {
            function adress0() {
                for (var index = 0; index < adress8.value.length; index++) {
                    if (numbers.indexOf(adress8.value.charAt(index), 0) != -1) {
                        return false;
                    }
                }
                return true;
            };
        } else {
            adress.classList.remove('emailok');
            adress.classList.add('notemail');
            error5.innerText = 'Address Incorrecta';
        }
    }


    function space1() {
        if (and != -1) {
            function adress1() {
                for (var index = 0; index < adress8.value.length; index++) {
                    if (letters.indexOf(adress8.value.charAt(index), 0) != -1) {
                        return true;
                    }
                }
                return false;
            };
        } else {
            adress.classList.remove('emailok');
            adress.classList.add('notemail');
            error5.innerText = 'Address Incorrecta';
        }
    }

    function adress2() {
        if (space0(true) && space1(true) && adress8.value.length >= 5) {
            return true;
        } else {
            return false;
        }
    };

    function space3() {
        if (and != -1) {
            function adress3() {
                for (var index = 0; index < adress9.value.length; index++) {
                    if (numbers.indexOf(adress9.value.charAt(index), 0) != -1) {
                        return true;
                    }
                }
                return false;
            };
        } else {
            adress.classList.remove('emailok');
            adress.classList.add('notemail');
            error5.innerText = 'Address Incorrecta';
        }
    }

    function space4() {
        if (and != -1) {
            function adress4() {
                for (var index = 0; index < adress9.value.length; index++) {
                    if (letters.indexOf(adress9.value.charAt(index), 0) != -1) {
                        return false;
                    }
                }
                return true;
            };
        } else {
            adress.classList.remove('emailok');
            adress.classList.add('notemail');
            error5.innerText = 'Address Incorrecta';
        }
    }

    function adress5() {
        if (space3(true) && space4(true)) {
            return true;
        } else {
            return false;
        }
    }

    function adress6() {
        if (adress2(true) && adress5(true)) {
            adress.classList.add('emailok');
        } else {
            adress.classList.remove('emailok');
            adress.classList.add('notemail');
            error5.innerText = 'Address Incorrecta';
        }
    }

    function adress7() {
        if (adress2(true) && adress5(true)) {} else {
            adress.classList.remove('emailok');
            adress.classList.add('notemail');
            error5.innerText = '';
        }
    }

    adress.addEventListener('blur', adress6)

    name.addEventListener('focus', adress7)


    /* location. */

    function location0() {
        for (var index = 0; index < location.value.length; index++) {
            if (numbers.indexOf(location.value.charAt(index), 0) != -1) {
                return true;
            }
        }
        return false;
    };

    function location1() {
        for (var index = 0; index < location.value.length; index++) {
            if (letters.indexOf(location.value.charAt(index), 0) != -1) {
                return true;
            }
        }
        return false;
    };

    function location2() {
        if (location0(true) && location1(true) && location.value.length >= 3) {
            location.classList.add('emailok');
        } else {
            location.classList.remove('emailok');
            location.classList.add('notemail');
            error6.innerText = 'location Incorrecta';
        }
    }

    function location3() {
        if (location0(true) && location1(true) && location.value.length >= 3) {} else {
            location.classList.remove('emailok');
            location.classList.add('notemail');
            error6.innerText = '';
        }
    }

    location.addEventListener('blur', location2)

    location.addEventListener('focus', location3)

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
        if (cp0(true) && cp1(true) && (cp.value.length == 4 || cp.value.length == 5)) {} else {
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
            error8.innerText = 'Email Incorrect';
        }
    };

    email.addEventListener('blur', f1);

    email.addEventListener('focus', function f2() {
        if (emailExpression.test(email.value)) {} else {
            error8.innerText = '';
        }
    });

    /* password. */

    function password0() {
        for (var index = 0; index < password.value.length; index++) {
            if (numbers.indexOf(password.value.charAt(index), 0) != -1) {
                return true;
            }
        }
        return false;
    };

    function password1() {
        for (var index = 0; index < password.value.length; index++) {
            if (letters.indexOf(password.value.charAt(index), 0) != -1) {
                return true;
            }
        }
        return false;
    };

    function password2() {
        if (password0(true) && password1(true) && password.value.length >= 8) {
            password.classList.add('emailok');
        } else {
            password.classList.remove('emailok');
            password.classList.add('notemail');
            error9.innerText = 'Código Postal Incorrecto';
        }
    }

    function password3() {
        if (password0(true) && password1(true) && password.value.length >= 8) {} else {
            password.classList.remove('emailok');
            password.classList.add('notemail');
            error9.innerText = '';
        }
    }

    password.addEventListener('blur', password2)

    password.addEventListener('focus', password3)

    /* Repetir password. */

    function rc0() {
        for (var index = 0; index < rc.value.length; index++) {
            if (numbers.indexOf(rc.value.charAt(index), 0) != -1) {
                return true;
            }
        }
        return false;
    };

    function rc1() {
        for (var index = 0; index < rc.value.length; index++) {
            if (letters.indexOf(rc.value.charAt(index), 0) != -1) {
                return true;
            }
        }
        return false;
    };

    function rc2() {
        if (rc0(true) && rc1(true) && rc.value.length >= 8 && rc.value === password.value) {
            rc.classList.add('emailok');
        } else {
            rc.classList.remove('emailok');
            rc.classList.add('notemail');
            error0.innerText = 'password Incorrecta';
        }
    }

    function rc3() {
        if (rc0(true) && rc1(true) && rc.value.length >= 8 && rc.value === password.value) {} else {
            rc.classList.remove('emailok');
            rc.classList.add('notemail');
            error0.innerText = '';
        }
    }

    rc.addEventListener('blur', rc2);

    rc.addEventListener('focus', rc3);

     /* BUTTON */

     function valSubmit(e) {
        e.preventDefault();
        if ((name2 && lastName2 && dni2 && phone2 && location2 && cp2 && f1 && password2 && rc2) &&
            (name.value.length !=0 && lastName.value.length !=0 && dni.value.length !=0 && phone.value.length
                 !=0 && location.value.length !=0 && cp.value.length !=0 && email.value.length !=0 &&
                 password.value.length !=0 && rc.value.length !=0)) {
            alert('Name:'+ name.value + ' ' + 'Lastname:'+ lastName.value + ' ' + 'DNI:'+ dni.value
             + ' ' + 'Phone:'+ phone.value + ' ' + 'Location:'+ location.value + ' ' + 'Postal Code:'+ cp.value
              + ' ' + 'Email:'+ email.value + ' ' + 'Password:'+ password.value + '   ' + 'All fields have been filled in correctly');
        } else {
            alert("Error: one or more fields are incorrect");
        }
    }

    button.addEventListener("click", valSubmit);

}