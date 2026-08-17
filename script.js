const botonBuscar = document.getElementById("buscar");
const campoNombre = document.getElementById("nombre");

botonBuscar.addEventListener("click", function () {

    const nombre = campoNombre.value.trim();

    if (nombre === "") {
        alert("Por favor, escribí tu nombre.");
        return;
    }

    alert("Buscando el lugar de: " + nombre);

});