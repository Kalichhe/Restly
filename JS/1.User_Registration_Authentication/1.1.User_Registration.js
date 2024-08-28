
let validatePassword = (Password, RepeatPassword) => {
    if (Password == '') {
        alert('Ingresa por lo menos un caracter')
    } else if (RepeatPassword == ''){
        alert('Ingresa por lo menos un caracter')
    } else if (Password.length < 12) {
        alert('La contraseña debe de ser mayor o igual a 12 caracteres')
    } else if (Password.length > 20) {
        alert('La contraseña no puede ser mayor a 20 caracteres')
    } else if (RepeatPassword.length < 12) {
        alert('La contraseña debe de ser mayor o igual a 12 caracteres')
    } else if (RepeatPassword.length > 20) {
        alert('La contraseña no puede ser mayor a 20 caracteres')
    } else {
        return true;
    }
}

let validateUsername = (Username, Email) => {
    if (Username == '') {
        alert('Ingrese por lo menos un caracter')
    } else if (Username.includes(' ')) {
        alert('El username no puede contener espacios');
    } else if (!/^[a-zA-Z][a-zA-Z0-9]+$/.test(Username)) {
        alert('El username no puede contener caracteres especiales y no debe de iniciar con número');
    } else if (Email == '') {
        alert('Ingrese por lo menos un caracter')
    } else if (Username.length < 8) {
        alert('El Username debe de ser mayor a 8 caracteres')
    } else if (Username.length > 15) {
        alert('El Username debe de ser menor a 15 caracteres')
    } else {
        return true;
    }
}

let redirection = () => {
    window.location.href = "1.2.Login.html"
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

    // Validacion
    if (validateUsername(Username, Email) === true && validatePassword(Password, RepeatPassword) === true) {
        alert('Register successful!')
        redirection()
    }
}
