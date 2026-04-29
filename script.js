// Esta función hace que el robot hable
function hablarTexto(texto) {
    const hablar = new SpeechSynthesisUtterance(texto);
    hablar.lang = 'es-ES'; // Voz en español
    hablar.rate = 1; // Velocidad normal
    window.speechSynthesis.speak(hablar);
}

// 1. Cuando toques la pantalla por primera vez, el robot pedirá el nombre
window.addEventListener('click', () => {
    // Solo habla si no ha hablado antes
    if (window.speechSynthesis.speaking === false) {
        hablarTexto("¡Hola! Por favor, dime tu nombre para comenzar.");
    }
}, { once: true }); // El 'once: true' hace que solo lo diga la primera vez que toques

// 2. Cuando escribas tu nombre y le des al botón "Ingresar"
function comenzar() {
    const nombre = document.getElementById('nombreUsuario').value;
    const mensajeBurbuja = document.getElementById('mensaje');

    if (nombre.trim() === "") {
        hablarTexto("Por favor, escribe tu nombre en el cuadro blanco.");
        return;
    }

    // El robot te saluda y te hace la pregunta de la tesis
    const respuesta = `Perfecto ${nombre}. ¿Quieres saber qué es el software educativo?`;
    
    // Cambiamos el texto en la burbuja blanca que se ve en tu imagen
    mensajeBurbuja.innerHTML = `¡Excelente, <strong>${nombre}</strong>! ¿Quieres saber qué es el software educativo?`;
    
    hablarTexto(respuesta);
}
