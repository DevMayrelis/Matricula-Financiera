function scrollToTop() {
    const duration = 1000; // Duración de la animación (en milisegundos)
    const start = window.scrollY;
    const startTime = performance.now();
  
    function step(currentTime) {
        const elapsedTime = currentTime - startTime;
        if (elapsedTime < duration) {
            const newPosition = start - easeOutQuad(elapsedTime, 0, start, duration);
            window.scrollTo(0, newPosition);
            requestAnimationFrame(step);
        } else {
            window.scrollTo(0, 0); // Asegura que llegue al principio
        }
    }
  
    function easeOutQuad(t, b, c, d) {
        t /= d;
        return -c * t * (t - 2) + b;
    }
  
    if (window.scrollY > 0){
    requestAnimationFrame(step);
    }
}