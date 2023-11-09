/* Función para fijar el sidebar cuando cumple un rango establecido*/
window.addEventListener('scroll', function() {

	/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
								VARIABLES
	<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

		/*Almacenamos en variables constantes, las clases que se van a modificar*/
		const sidebar = document.querySelector('.sidebar');
		const form = document.querySelector('.contenedor-global-formulario');

		/*Modificar esta variable cada vez que el sidebar cambie su propiedad 'top' */
		const limit = (269 + 10) + (-195) -10; // Punto de límite en (px) para fijar el sidebar
	
	/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
								PROCESO
	<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
	
		/* Si....*/
		if (window.pageYOffset >= limit) 
		{
			sidebar.classList.add('fixed');
			form.classList.add('fix');
		} else{  /* Si....*/
			sidebar.classList.remove('fixed');
			form.classList.remove('fix');
		}

		// Se imprimen algunos valores
		console.log("sidebar.offsetTop: " + sidebar.offsetTop);
		console.log("window.pageYOffset: " + window.pageYOffset);
});





// Detectar cuando cambia el ancho del viewport
	// window.addEventListener("resize", function(){
	// 	// console.log("El ancho del viewport ha cambiado.");
	// 	// // Imprimir el ancho del viewport
	// 	// console.log("Ancho del viewport actual: " + window.innerWidth);
	
	// 	/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
	// 								VARIABLES
	// 	<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

	// 	const sidebar_elemento = document.getElementById("sidebar1");
	// 	/* Con (window.getComputedStyle) Se acceden a las propiedades CSS del sidebar*/
	// 	const sidebar_compStyles = window.getComputedStyle(sidebar_elemento, null);

	// 	/* Comprobar que el sidebar no este oculto para fijarse en la ventana*/
	// 	if(sidebar_compStyles.display === "none") 
	// 	{	
	// 		console.log("sidebar oculto");
	// 	} else{
	// 		console.log("sidebar visible");
	// 	}

	// 	// return sidebar_compStyles.display();
	// });
//