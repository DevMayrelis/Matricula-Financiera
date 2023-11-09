/* Función para fijar el sidebar cuando cumple un rango establecido*/
window.addEventListener('scroll', function() {

	/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
                        		VARIABLES
	<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

		/*Almacenamos en variables constantes, las clases que se van a modificar*/
		const sidebar2 = document.querySelector('.sidebar2');
		const form = document.querySelector('.contenedor-global-formulario');

		/*Modificar esta variable cada vez que el sidebar cambie su propiedad 'top' */
		const limit = (269 + 10) - 5; // Punto de límite en (px) para fijar el sidebar
	
	/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
                        		 PROCESO
	<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

		/* Si....*/
		if (window.pageYOffset >= limit) 
		{
			sidebar2.classList.add('fixed');
			form.classList.add('fix-sidebar2');
		} else{  /* Si....*/
			sidebar2.classList.remove('fixed');
			form.classList.remove('fix-sidebar2');
		}

		// Se imprimen algunos valores
		// console.log("sidebar.offsetTop: " + sidebar.offsetTop);
		// console.log("window.pageYOffset: " + window.pageYOffset);
  });
  