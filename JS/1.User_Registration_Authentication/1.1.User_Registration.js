
let validatePassword = (Password, RepeatPassword) => {
    if (Password == '') {
        alert('Por favor, ingrese una contraseña.')
    } else if (RepeatPassword == '') {
        alert('Por favor, repita la contraseña.')
    } else if (Password.length < 12) {
        alert('La contraseña debe tener al menos 12 caracteres.')
    } else if (Password.length > 20) {
        alert('La contraseña no debe exceder los 20 caracteres.')
    } else if (RepeatPassword.length < 12) {
        alert('La contraseña repetida debe tener al menos 12 caracteres.')
    } else if (RepeatPassword.length > 20) {
        alert('La contraseña repetida no debe exceder los 20 caracteres.')
    } else {
        return true;
    }
}

let validateUsername = (Username, Email) => {
    if (Username == '') {
        alert('Por favor, ingrese su nombre de usuario.')
    } else if (Username.includes(' ')) {
        alert('El nombre de usuario no puede contener espacios.')
    } else if (!/^[a-zA-Z][a-zA-Z0-9]+$/.test(Username)) {
        alert('El nombre de usuario no puede contener caracteres especiales y debe comenzar con una letra.')
    } else if (Email == '') {
        alert('Por favor, ingrese su correo electrónico.')
    } else if (Username.length < 8) {
        alert('El nombre de usuario debe tener al menos 8 caracteres.')
    } else if (Username.length > 15) {
        alert('El nombre de usuario no debe exceder los 15 caracteres.')
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
