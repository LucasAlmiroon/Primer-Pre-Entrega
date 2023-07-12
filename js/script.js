let cant = 50;
let usuario = prompt("Ingrese su nombre de usuario");
console.log("Bienvenido " + usuario);

function editarCantProductos() {
	let continuar = true;
	while (cant > 0 && continuar == true) {
		let condicion = prompt("Ingrese si quiere sumar o restar productos.");
		let cantidadNueva = prompt(
			"Ingrese la cantidad de productos que quiere sumar o restar"
			);
		if (continuar) {
			if (condicion == "-" && parseInt(cantidadNueva) <= cant ) {
				cant -= parseInt(cantidadNueva, 10);
				console.log("Se restaron: " + cantidadNueva + " de productos.");
				console.log("Quedan: " + cant + " de productos.");
			} else if (condicion == "+") {
				cant += parseInt(cantidadNueva, 10);
				console.log("Se agregaron: " + cantidadNueva + " de productos.");
				console.log("Quedan: " + cant + " de productos.");
			} else {
				console.log(
					"No agrego un operador valido, solo suma (+) o resta (-) o quiere restar mas productos de los que hay en stock"
				);
			}
		}
		let cont = prompt("Ingrese si, si quiere continuar")
		if(cont !== "si"){
			continuar = false;
			console.log(continuar)
		}
	}
}

editarCantProductos();
