window.onload = function () {

    function f1() {
        var email = document.getElementById('email');
        var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/; 
        var error = document.getElementById('error');
        if (emailExpression.test(email.value) || email.value <= 0) {
            email.classList.add('emailok');
        } else {
            email.classList.remove('emailok');
            email.classList.add('notemail');
            error.innerText = 'Email Incorrect';
        }
       }

    email.addEventListener ('blur', f1);

    email.addEventListener('focus', function f2() {
        var email = document.getElementById('email');
        var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/; 
        var error = document.getElementById('error');
        if (emailExpression.test(email.value)) {
        } else {
            error.innerText = '' ;
        }
    });

    function f3() {
        var psw = document.getElementById('psw');
        var error1 = document.getElementById('error1');
        if (psw.value >= 8 && !isNaN(psw.value)) {
           psw.classList.add('emailok');
        } else {
            psw.classList.remove('emailok');
            psw.classList.add('notemail');
            error1.innerText = 'Password Incorrect';
        }
    };

    psw.addEventListener('blur', f3);

    psw.addEventListener('focus', function f4() {
        var psw = document.getElementById('psw');
        var error1 = document.getElementById('error1');
        if (psw.value >= 8 && !isNaN(psw.value)) {
        } else {
            error1.innerText = '' ;
        }
    });

    function f5 (e) {
        e.preventDefault();
        if (f1(true) && f3(true)) {
            alert('Email:' + email.value + ' ' + 'Password:' + psw.value);
        } else {
            alert('error');
        }
        };

        var submit = document.getElementById('submit');

    submit.addEventListener('click', f5);
};