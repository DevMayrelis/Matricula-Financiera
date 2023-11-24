const $submit = document.getElementById("button"),
$psw = document.getElementById('psw'),
$id = document.getElementById('id'),
$visible = document.getElementById("visible");

document.addEventListener("change",(e)=>{
    if (e.target == $visible) {
        if($visible.checked === false) $psw.type = "contraseña";
        else  $psw.type="text";
        }
})

document.addEventListener("DOMContentLoaded", function () {
    // Matriz simulada de usuarios
    const users = [
        { username: "1001023456", password: "Mayrelis" },
        { username: "usuario2", password: "contraseña2" },
        // Puedes agregar más usuarios según sea necesario
    ];

    // Obtén referencias a los elementos relevantes
    const $submitButton = document.getElementById("button");
    const $passwordInput = document.getElementById('psw');
    const $idInput = document.getElementById('id');
    const $visibilityCheckbox = document.getElementById("visible");

    // Agrega un evento al botón de Entrar
    $submitButton.addEventListener("click", (event) =>
    {
        // Verificar si el usuario y la contraseña son correctos
        event.preventDefault(); // Evita que el formulario se envíe por defecto (puedes ajustarlo según tus necesidades)

        // Simula la autenticación
        const isAuthenticationSuccessful = authenticateUser($idInput.value, $passwordInput.value);

        if (isAuthenticationSuccessful) {
            // Redirige al usuario a la página de Facebook después del inicio de sesión exitoso
            window.location.href = "https://www.facebook.com";
        } else {
            // Maneja el caso en que la autenticación falla (puedes mostrar un mensaje de error, etc.)
            alert("Inicio de sesión fallido. Por favor, verifica tus credenciales.");
        }
    });

    document.addEventListener("DOMContentLoaded", function ()
    {
        // Matriz simulada de usuarios
    const $passwordInput = document.getElementById('psw');
    const $mostrarContrasenaCheckbox = document.getElementById("mostrarContrasena");

    $mostrarContrasenaCheckbox.addEventListener("change", function ()
     {
        if ($mostrarContrasenaCheckbox.checked) {
            $passwordInput.setAttribute("type", "text");
        } else {
            $passwordInput.setAttribute("type", "password");
        }
    });
});

    // Función de autenticación
    function authenticateUser(username, password) {
        // Busca el usuario en la matriz
        const user = users.find(user => user.username === username && user.password === password);

        // Devuelve true si se encuentra el usuario, de lo contrario, devuelve false
        return !!user;
    }
});
