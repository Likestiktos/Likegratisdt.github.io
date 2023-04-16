// Obtener los botones de conseguir seguidores
var botonesSeguidores = document.querySelectorAll(".conseguir-seguidores");

// Añadir un evento de click a cada botón de conseguir seguidores
botonesSeguidores.forEach(function(boton) {
	boton.addEventListener("click", function() {
		// Obtener el nombre de usuario de TikTok ingresado por el usuario
		var nombreUsuario = prompt("Ingresa tu nombre de usuario de TikTok:");

		if (nombreUsuario != null && nombreUsuario != "") {
			// Enviar una solicitud para conseguir los seguidores gratis
			alert("Se han enviado los " + boton.parentElement.querySelector(".parte-superior").textContent + " seguidores a @" + nombreUsuario);
		}
	});
});

// Obtener los botones de enviar likes
var botonesLikes = document.querySelectorAll(".enviar-likes");

// Añadir un evento de click a cada botón de enviar likes
botonesLikes.forEach(function(boton) {
	boton.addEventListener("click", function() {
		// Obtener el enlace del video ingresado por el usuario
		var enlaceVideo = prompt("Ingresa el enlace del video:");

		if (enlaceVideo != null && enlaceVideo != "") {
			// Enviar una solicitud para enviar los likes gratis
			alert("Se han enviado los " + boton.parentElement.querySelector(".parte-superior").textContent + " likes al video " + enlaceVideo);
		}
	});
});