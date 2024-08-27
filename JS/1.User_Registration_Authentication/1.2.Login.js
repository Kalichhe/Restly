
let validatePassword = (Password) => {
    if (Password.length < 8) {
        alert('Mano, la contraseña debe de ser mayor o igual a 8 caracteres')
    } else {
        return true;
    }
}

let validateUsername = (Username) => {
    if (Username.length < 8) {
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
