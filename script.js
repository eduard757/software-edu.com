function comenzar() {
    const nombre = document.getElementById('nombreUsuario').value;
    const mensaje = document.getElementById('mensaje');
    const musica = document.getElementById('musica');

    if (nombre !== "") {
        mensaje.innerHTML = `¡Bienvenido, <strong>${nombre}</strong>! Prepárate para aprender de forma divertida.`;
        musica.play();
    } else {
        alert("Por favor, dinos tu nombre primero.");
    }
}
