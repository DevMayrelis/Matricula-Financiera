var sidebarContraido = false; //Variable global que detecta cuando el sidebar esta contraido

/* */
window.addEventListener('scroll', fijarSidebar);

/* Función para fijar el sidebar cuando cumple un rango establecido*/
function fijarSidebar() {

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

		// Verificar que el sidebar no este contraido para que el contenedor
		// global del formulario no mantenga la misma distancia, con el 
		// sidebar completo que con el sidebar contraído
		if(sidebarContraido === false){
			form.classList.add('fix');
		} else{
			form.classList.add('fix-contraido');
		}

	} else{  /* Si....*/
		sidebar.classList.remove('fixed');
		form.classList.remove('fix');
		form.classList.remove('fix-contraido');
	}

	// Se imprimen algunos valores
	console.log("sidebar.offsetTop: " + sidebar.offsetTop);
	console.log("window.pageYOffset: " + window.pageYOffset);
}


/*Función para contraer el sidebar detro de un rango específico*/
function contraerSidebar(){

	console.log("contraer/extender sidebar-1");
	console.log(sidebarContraido);

	/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
								VARIABLES
	<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

	 // Obtener los elementos 
	 var  sidebar = document.querySelector('.sidebar');
	 var sidebar_menu_cont =  document.querySelector('.sidebar-menu-cont');
	 var sidebar_menu_cont_img =  document.querySelector('.sidebar-menu-cont img');
	 var sidebar_menu_titulo_flex =  document.querySelector('.sidebar-menu-titulo-flex');
	 var sidebar_menu_options_sidebar2_cont_item_flex_a =  document.querySelectorAll('.sidebar-menu-options .sidebar2-cont-item-flex a');
	 var sidebar_item_titulo =  document.querySelectorAll('.sidebar-item-titulo');
	 var sidebar_boton_flecha =  document.querySelector('.sidebar-boton-flecha');
	 var sidebar_logo =  document.querySelector('.sidebar-logo');

	/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
							       PROCESO
	<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

	sidebarContraido = true; // Cambiar la variable global
	console.log(sidebarContraido);

	sidebar.style.width = "44px";
	sidebar.style.height = "244px";

	sidebar_menu_cont.style.width = "69px";
	sidebar_menu_cont.style.width = "69px";
	sidebar_menu_cont.style.padding = "11px";
	sidebar_menu_cont.style.paddingTop = "4px";
	sidebar_menu_cont.style.paddingRight = "5px";
	sidebar_menu_cont.style.top = "65px";
	sidebar_menu_cont.style.minHeight = "230px";

	sidebar_menu_cont_img.style.display = "none";

	sidebar_menu_titulo_flex.style.display = "none";

	
	sidebar_item_titulo.forEach(function(elemento) {
		elemento.style.display = "none";
	});
	
	sidebar_menu_options_sidebar2_cont_item_flex_a.forEach(function(elemento) {
		elemento.style.paddingLeft = "10px";
	});

	sidebar_boton_flecha.style.right = "-7px";
	sidebar_logo.style.display = "none";

	fijarSidebar();
}




// /*Función para corregir la coordenada X del contenedor global del formulario
// cuando el sidebar esta contraído*/
// function contraerSidebarFix(){

// 	/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// 								VARIABLES
// 	<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

// 	// Obtener las coordenadas del viewport
// 	var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
// 	var viewportHeight = window.innerHeight || document.documentElement.clientHeight;

// 	// Obtenemos el elemento del contenedor
// 	var contenedor_global_formulario =  document.querySelector('.contenedor-global-formulario');

// 	/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// 							       PROCESO
// 	<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

// 	if(viewportWidth < "900px" ){
// 		contenedor_global_formulario.style.marginLeft = "0px";
// 		console.log("fix");
// 	}
// }







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