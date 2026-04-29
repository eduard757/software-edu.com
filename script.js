let fase = 0;

function hablar(texto) {
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(texto);
    u.lang = 'es-ES';
    u.rate = 1;
    window.speechSynthesis.speak(u);
}

// Inicio de la presentación
window.onclick = () => {
    if (fase === 0) {
        hablar("Hola, yo soy el asistente virtual de Charlles Salcedo y hoy les vamos a hablar sobre el Software Educativo. Por favor, ingresa tu nombre.");
        fase = 1;
    }
};

function mostrarSeccion(id) {
    document.querySelectorAll('.seccion-fase').forEach(s => s.style.display = 'none');
    document.getElementById(id).style.display = 'block';
}

function comenzar() {
    const nombre = document.getElementById('nombreUsuario').value;
    const msj = document.getElementById('mensaje');

    if (nombre === "") {
        hablar("Escribe tu nombre para continuar.");
    } else {
        msj.innerHTML = `¡Bienvenido ${nombre}! Comencemos con la exposición.`;
        hablar(`Excelente ${nombre}. Empecemos por definir qué es el software educativo.`);
        mostrarSeccion('fase-video');
    }
}
