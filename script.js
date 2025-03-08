// Funcion para el boton de copiar el correo
function copiarEmail() {
    let email = document.getElementById('email');
    let btnEmail = document.getElementById('copiarEmail');

    navigator.clipboard.writeText(email.textContent);
}