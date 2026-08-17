const botonBuscar = document.getElementById("buscar");
const campoNombre = document.getElementById("nombre");

botonBuscar.addEventListener("click", async function () {

    const nombreBuscado = campoNombre.value.trim();

    if (nombreBuscado === "") {
        alert("Por favor, escribí tu nombre.");
        return;
    }

    const respuesta = await fetch("invitados.json");
    const invitados = await respuesta.json();

    const invitado = invitados.find(function(persona) {
        return persona.nombre.toLowerCase() === nombreBuscado.toLowerCase();
    });

    if (invitado) {
        alert(
            "¡Encontramos tu lugar!\n\n" +
            "Mesón: " + invitado.meson + "\n" +
            "Posición: " + invitado.posicion
        );
    } else {
        alert("No encontramos ese nombre. Revisá cómo lo escribiste.");
    }

});