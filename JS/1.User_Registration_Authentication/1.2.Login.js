
let validatePassword = (Password) => {
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

let validateUsername = (Username) => {
    if (Username == '') {
        alert('Por favor, ingrese su nombre de usuario.')
    } else if (Username.includes(' ')) {
        alert('El nombre de usuario no puede contener espacios.')
    } else if (!/^[a-zA-Z][a-zA-Z0-9]+$/.test(Username)) {
        alert('El nombre de usuario no puede contener caracteres especiales y debe comenzar con una letra.')
    } else if (Username.length < 8) {
        alert('El nombre de usuario debe tener al menos 8 caracteres.')
    } else if (Username.length > 15) {
        alert('El nombre de usuario no debe exceder los 15 caracteres.')
    } else {
        return true;
    }
}

let validate = (Username, Password, username, password) => {
    if (Username == '') {
        alert('Por favor, ingrese su nombre de usuario.')
    } else if (Password == '') {
        alert('Por favor, ingrese su contraseña.')
    } else if (username === Username && password === Password) {
        alert('Inicio de sesión exitoso.');
        window.location.href = "1.3.Homepage.html";
    } else {
        alert('Error en el inicio de sesión. Verifique su nombre de usuario y contraseña.');
    }
}

let redirection = () => {
    window.location.href = "1.1.User_Registration.html"
}

function getValueLogin() {
    // Obtenemos los datos del documento
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // Obtenemos los datos del LocalStorage
    let Username = localStorage.getItem('Username');
    let Password = localStorage.getItem('Password');

    validate(Username, Password, username, password);

}
