
let getValueSignup = () => {
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

    alert('Melo')

    return { Username, Email, Password, RepeatPassword };
}
