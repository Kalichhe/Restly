
function getValueLogin() {
    // Obtenemos los datos del documento
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // Obtenemos los datos del LocalStorage
    let Email = localStorage.getItem('Email');
    let Password = localStorage.getItem('Password');

    // Validamos
    if (email === Email && password === Password) {
        alert('Login successful');
        window.location.href = "1.3.Homepage.html";
    } else {
        alert('Login failed');
    }

    console.log(email, password);
}
