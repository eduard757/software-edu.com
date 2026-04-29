let faseActual = 0;

function hablar(texto) {
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(texto);
    u.lang = 'es-ES';
    window.speechSynthesis.speak(u);
}

// Función para cambiar de sección manualmente desde el menú
function mostrarSeccion(id) {
    const secciones = document.querySelectorAll('.seccion-fase');
    secciones.forEach(s => s.style.display = 'none');
    document.getElementById(id).style.display = 'block';
}

function comenzar() {
    const nombre = document.getElementById('nombreUsuario').value.toLowerCase().trim();
    const msj = document.getElementById('mensaje');

    if (faseActual === 0) {
        if (nombre === "") return hablar("Escribe tu nombre");
        faseActual = 1;
        msj.innerHTML = `¡Hola <strong>${nombre}</strong>! Mira el video y cuando termines escribe <strong>"listo el video"</strong>.`;
        hablar(`Hola ${nombre}. Mira el video y cuando termines escribe listo el video.`);
    } 
    else if (nombre.includes("listo el video")) {
        mostrarSeccion('fase-tipos');
        msj.innerHTML = "Excelente, ahora estamos en Tipos de Software.";
        hablar("Excelente, ahora estamos en la sección de tipos de software.");
    }
    // Puedes seguir agregando las demás frases aquí...
}
