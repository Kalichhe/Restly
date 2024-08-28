
let validatePassword = (Password) => {
    if (Password == '') {
        alert('Aaaa, entonces vale mia')
    } else if (RepeatPassword == ''){
        alert('Aaaa, ahora si se la gano')
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

let validateUsername = (Username) => {
    if (Username == '') {
        alert('Parcero ingrese pues algo, ome')
    } else if (Username.includes(' ')) {
        alert('El Username no puede contener espacios');
    } else if (!/^[a-zA-Z][a-zA-Z0-9]+$/.test(Username)) {
        alert('El Username no puede contener caracteres especiales y no debe de iniciar con número');
    } else if (Username.length < 8) {
        alert('El Username debe de ser mayor a 8 caracteres')
    } else if (Username.length > 15) {
        alert('El Username debe de ser menor a 15 caracteres')
    } else {
        return true;
    }
}

let validate = (Username, Password, username, password) => {
    if (Username == '') {
        alert('Parcero ingrese pues algo, ome')
    } else if (Password == '') {
        alert('Aaaa, entonces vale mia')
    } else if (username === Username && password === Password) {
        alert('Login successful');
        window.location.href = "1.3.Homepage.html";
    } else {
        alert('Login failed');
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
