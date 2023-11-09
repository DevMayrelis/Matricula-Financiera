/* Ocultar y mostrar una sección en específico 
tras interactuar con alguna opción del menú del sidebar */
document.addEventListener("DOMContentLoaded", function() {
    mostrarSeccion('datos-acudientes-cont'); // Muestra la seccion 1 al cargar la página
});

function mostrarSeccion(id) {
    // Obtenemos  una referencia al elemento del menú que fue clicado
    const opcionMenu = document.getElementById(id);
  
    // Oculta todas las secciones
    ocultarSecciones();
  
    // Muestra la seccion correspondiente
    const seccion = document.getElementById(id);
    seccion.style.display = 'block';

    /*Una vez se muestra la sección correspondiente, se desplaza el viewport
    desde su posición actual hasta el principio de la página (fotograma a fotograma)*/
    scrollToTop();
}
  
function ocultarSecciones() {
    // Oculta todas las secciones
    const secciones = document.querySelectorAll('.seccion');
    for (const seccion of secciones) {
        seccion.style.display = 'none';
    }
}