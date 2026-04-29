let etapa = 0;

function hablar(texto) {
    window.speechSynthesis.cancel();
    const mensaje = new SpeechSynthesisUtterance(texto);
    mensaje.lang = 'es-ES';
    mensaje.rate = 1; 
    window.speechSynthesis.speak(mensaje);
}

// Presentación automática al hacer clic
window.addEventListener('click', () => {
    if (etapa === 0) {
        hablar("Hola, yo soy el asistente virtual de Charlles Salcedo y hoy les vamos a hablar sobre el Software Educativo. Por favor, escribe tu nombre para comenzar.");
        etapa = 1;
    }
}, { once: true });

function mostrarSeccion(id) {
    document.querySelectorAll('.seccion-fase').forEach(s => s.style.display = 'none');
    document.getElementById(id).style.display = 'block';
}

function comenzar() {
    const usuario = document.getElementById('nombreUsuario').value;
    const burbuja = document.getElementById('mensaje');

    if (usuario === "") {
        hablar("Por favor, ingresa tu nombre.");
    } else {
        burbuja.innerHTML = `¡Hola <strong>${usuario}</strong>! Comencemos la defensa de Charlles.`;
        hablar(`Excelente ${usuario}. El software educativo es una herramienta diseñada para facilitar la enseñanza. Mira el video para conocer más.`);
        mostrarSeccion('fase-video');
    }
}
