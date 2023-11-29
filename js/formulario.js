const email = document.getElementById('emailInput');
const msgSpan = document.getElementById("msgInput");
const msgPass = document.getElementById("msgPass");
const msgInputPass = document.getElementById("msgInputPass");
const password = document.getElementById("btnPassword");
const confirPassword = document.getElementById("btnConfirPassword");
const btnEnviar = document.getElementById("btnEnviar");

let validacion = false;

function realizarValidacion() {
    let valorInput = email.value;

    if (valorInput == "") {
        msgSpan.style.display = "none";
        msgSpan.innerHTML = "";
    } else if (!valorInput.includes('@')) {
        msgSpan.style.display = "block";
        msgSpan.innerHTML = `<p><i class='bx bxs-error bx-sm' style='color:#ffd608'></i>Falta ingresar el @ en el correo</p>`;
    } else {
        msgSpan.style.display = "none";
        msgSpan.innerHTML = "";
    }

    if (password.value == "") {
        msgPass.style.display = "block";
        msgPass.innerHTML = `<p><i class='bx bxs-error bx-sm' style='color:#ffd608'></i>La contraseña está vacía</p>`;
    } else {
        msgPass.style.display = "none";
    }

    let pass = password.value;

    if (pass != "") {
        msgPass.style.display = "none";
        if (confirPassword == "") {
            msgInputPass.style.display = "none";
        } else if (confirPassword.value != pass) {
            msgInputPass.style.display = "block";
            msgInputPass.innerHTML = `<p><i class='bx bxs-error bx-sm' style='color:#ffd608'></i>Las contraseñas no coinciden</p>`;
        } else {
            msgInputPass.style.display = "none";
        }
    } else {
        msgPass.style.display = "block";
        msgPass.innerHTML = `<p><i class='bx bxs-error bx-sm' style='color:#ffd608'></i>La contraseña está vacía</p>`;
    }

    // Habilitar o deshabilitar el botón según las condiciones de validación
    if (msgSpan.style.display === "none" && msgPass.style.display === "none" && msgInputPass.style.display === "none") {
        btnEnviar.removeAttribute("disabled");
    } else {
        btnEnviar.setAttribute("disabled", "disabled");
    }
}

email.addEventListener("input", realizarValidacion);
password.addEventListener("input", realizarValidacion);
confirPassword.addEventListener("input", realizarValidacion);
