function errorFound(error) {
	console.log("Ocurrió un error: " + error.code);
	//alert("Ocurrió un error: " + error.code);
	// 0: Error desconocido
	// 1: Permiso denegado
	// 2: Posición no disponible
	// 3: Timeout
}

function showPosition(position) {
	var lat = position.coords.latitude;
	var lon = position.coords.longitude;
	console.log("Tu posición es: " + lat + "," + lon);
	alert("Tu posición es: " + lat + "," + lon);
}

(function() {
	var startPos;
	var geoOptions = {
		maximumAge: 5 * 60 * 1000,
		timeout: 10 * 1000,
		enableHighAccuracy: true,
	}

	if(navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(showPosition, errorFound, geoOptions);
	} else {
		alert("Tu navegador no soporta Geolocation");
	}

})();

