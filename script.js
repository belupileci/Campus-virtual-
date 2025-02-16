
// Función para mostrar y ocultar la contraseña
document.getElementById("togglePassword").addEventListener("click", function() {
    let passwordInput = document.getElementById("contraseña");
    

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
});
