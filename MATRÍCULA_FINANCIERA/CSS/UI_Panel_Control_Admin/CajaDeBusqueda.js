
document.addEventListener('DOMContentLoaded', function () {
    // Puedes agregar funciones JavaScript aquí si las necesitas
});

function agregarEstudiante() {
    var button = document.querySelector('.botonMatricula');
    
    button.classList.add('animate-pulsate');

    setTimeout(function() {
        button.classList.remove('animate-pulsate');
    }, 1000);
}