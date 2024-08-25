// Importamos el js
import { getValueSignup } from "./1.1.User_Registration.js";

// Funcion para obtener los datos del login

let getValueLogin = () => {
    // Se recogen los datos de los imputs del login
    let Email = document.getElementById('email').value;
    let Password = document.getElementById('password').value;

    // Guardamos los datos del signup
    let currentValues = getValueSignup();

    // Validamos la informacion
    if (Email == currentValues.Email) {
        alert('Hello')
    } else {
        alert('Bye')
    }
}
