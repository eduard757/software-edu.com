let faseActual = 0;

function hablar(texto) {
    window.speechSynthesis.cancel(); // Detiene cualquier voz anterior
    const unidad = new SpeechSynthesisUtterance(texto);
    unidad.lang = 'es-ES';
    unidad.rate = 1;
    window.speechSynthesis.speak(unidad);
}

// Saludo al entrar (necesita un clic en la página)
window.addEventListener('click', () => {
    if (faseActual === 0 && !window.speechSynthesis.speaking) {
        hablar("¡Hola! Bienvenido. Mira el video sobre qué es el software educativo y luego dime tu nombre en el cuadro blanco.");
    }
}, { once: true });

function comenzar() {
    const valor = document.getElementById('nombreUsuario').value.toLowerCase().trim();
    const msj = document.getElementById('mensaje');

    if (faseActual === 0) {
        if (valor === "") return hablar("Por favor, dime tu nombre.");
        faseActual = 1;
        msj.innerHTML = `¡Perfecto <strong>${valor}</strong>! Mira el video. Cuando termines, escribe <strong>"listo el video"</strong> para avanzar.`;
        hablar(`Perfecto ${valor}. Mira el video. Cuando termines, escribe listo el video para avanzar.`);
        return;
    }

    if (valor.includes("listo el video") && faseActual === 1) {
        faseActual = 2;
        msj.innerHTML = `Ahora vamos con los tipos de software. Escribe <strong>"listo ya termine"</strong> cuando veas las imágenes.`;
        hablar("Bueno, ahora vamos con los tipos de software. Te invito a la sección de tipos de software.");
        document.getElementById('fase-video').style.display = 'none';
        document.getElementById('fase-tipos').style.display = 'block';
    } 
    else if (valor.includes("listo ya termine") && faseActual === 2) {
        faseActual = 3;
        msj.innerHTML = `Muy bien. Ahora veamos las ventajas de usar estos sistemas.`;
        hablar("Ahora vamos a la sección de ventajas de usar software educativo. Mira las imágenes.");
        document.getElementById('fase-tipos').style.display = 'none';
        document.getElementById('fase-ventajas').style.display = 'block';
    }
    else if (valor.includes("listo ya termine") && faseActual === 3) {
        faseActual = 4;
        msj.innerHTML = `Casi terminamos. Vamos a la sección de Evaluación y Uso.`;
        hablar("Vamos a la siguiente sección: Evaluación y Uso de los software educativo.");
        document.getElementById('fase-ventajas').style.display = 'none';
        document.getElementById('fase-evaluacion').style.display = 'block';
    }
    else if ((valor.includes("terminaste") || valor.includes("listo")) && faseActual === 4) {
        msj.innerHTML = `¡Felicidades! Terminamos el recorrido. Relájate con un poco de música.`;
        hablar("Ya terminamos. Ahora vamos a escuchar música ¿te parece? Relájate. Gracias, chao.");
        document.getElementById('fase-evaluacion').style.display = 'none';
        document.getElementById('fase-musica').style.display = 'block';
    }
}
