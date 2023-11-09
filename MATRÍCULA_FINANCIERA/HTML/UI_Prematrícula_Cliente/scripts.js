document.addEventListener("DOMContentLoaded", function() {

    /* Script para ocultar o mostrar los campos de texto ocultos 
    **********************************************************************************/
    const comboBox = document.getElementById("comboBox-acu1");
    const comboBox2 = document.getElementById("comboBox-acu2");
    const campoTexto = document.getElementById("otro-acu1");
    const campoTexto2 = document.getElementById("otro-acu2");

    comboBox.addEventListener("change", function() {
        if (comboBox.value === "Otro(a)") {
            campoTexto.style.display = "block";
            campoTexto.style.width = "100%"; // Ajusta el ancho del campo de texto
        } else {
            campoTexto.style.width = "0"; // Reduce el ancho del campo de texto a cero
            
            // Establece un tiempo de espera para ocultar el campo después de la transición
            setTimeout(function() {
                campoTexto.style.display = "none";
            }, 800);
        }
    });

    comboBox2.addEventListener("change", function() {
        if (comboBox2.value === "Otro(a)") {
            campoTexto2.style.display = "block";
            campoTexto2.style.width = "100%"; // Ajusta el ancho del campo de texto
        } else {
            campoTexto2.style.width = "0"; // Reduce el ancho del campo de texto a cero
            
            // Establece un tiempo de espera para ocultar el campo después de la transición
            setTimeout(function() {
                campoTexto2.style.display = "none";
            }, 800);
        }
    });
});