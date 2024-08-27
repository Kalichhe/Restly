
function validateImputs(Username, Email, Password, RepeatPassword, getValueSignup) {
    if (Username == '') {
        alert('Parcero ingrese pues algo, ome')
    } else if (Email == '') {
        alert('Chamo, entonces??')
    } else if (Password == '') {
        alert('Aaaa, entonces vale mia')
    } else if (RepeatPassword == ''){
        alert('Aaaa, ahora si se la gano')
    }
}

function validatePassword(Password, getValueSignup) {
    if (Password.length < 8) {
        alert('Mano, la contraseña debe de ser mayor o igual a 8 caracteres')
    } else {
        alert('No se')
    }
}

function getValueSignup() {
    // Se recogen los datos de los inputs ofrecidos por HTML
    let Username = document.getElementById('username').value;
    let Email = document.getElementById('email').value;
    let Password = document.getElementById('password').value;
    let RepeatPassword = document.getElementById('repeat_password').value;

    // Se guardaran los datos en el LocalStorage
    localStorage.setItem('Username', Username);
    localStorage.setItem('Email', Email);
    localStorage.setItem('Password', Password);
    localStorage.setItem('RepeatPassword', RepeatPassword);

    // Funcion de validacion de los inputs
    validateImputs(Username, Email, Password, RepeatPassword, getValueSignup);

    // Funcion de validacion de las contraseñas
    validatePassword(Password, getValueSignup);

    return { Username, Email, Password, RepeatPassword };
}
