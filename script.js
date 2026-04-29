let faseActual = 0;

function hablarTexto(texto) {
    const hablar = new SpeechSynthesisUtterance(texto);
    hablar.lang = 'es-ES';
    window.speechSynthesis.speak(hablar);
}

function comenzar() {
    const entrada = document.getElementById('nombreUsuario').value.toLowerCase();
    const mensaje = document.getElementById('mensaje');

    // FASE 0: Inicio y Nombre
    if (faseActual === 0) {
        faseActual = 1;
        mensaje.innerHTML = `¡Perfecto! ¿Quieres saber qué es el software educativo? Mira el video para pasar a la segunda fase.`;
        hablarTexto(`Perfecto. ¿Quieres saber qué es el software educativo? Mira el video para pasar a la segunda fase.`);
        document.getElementById('fase-video').style.display = 'block';
        return;
    }

    // FASE 1: Terminó el video
    if (entrada.includes("listo el video") && faseActual === 1) {
        faseActual = 2;
        mensaje.innerHTML = `Bueno, ahora vamos con los tipos de software. Te invito a la sección de tipos de software.`;
        hablarTexto(`Bueno, ahora vamos con los tipos de software. Te invito a la sección de tipos de software.`);
        document.getElementById('fase-video').style.display = 'none';
        document.getElementById('fase-tipos').style.display = 'block';
    } 
    
    // FASE 2: Terminó tipos
    else if (entrada.includes("listo ya termine") && faseActual === 2) {
        faseActual = 3;
        mensaje.innerHTML = `Ahora vamos a la sección de ventajas de usar software. Mira las imágenes y videos.`;
        hablarTexto(`Ahora vamos a la sección de ventajas de usar software. Mira las imágenes y videos.`);
        document.getElementById('fase-tipos').style.display = 'none';
        document.getElementById('fase-ventajas').style.display = 'block';
    }

    // FASE 3: Terminó ventajas -> Evaluación
    else if (entrada.includes("listo ya termine") && faseActual === 3) {
        faseActual = 4;
        mensaje.innerHTML = `Vamos a la siguiente sección: Evaluación y Uso del software educativo.`;
        hablarTexto(`Vamos a la siguiente sección: Evaluación y Uso del software educativo.`);
        document.getElementById('fase-ventajas').style.display = 'none';
        document.getElementById('fase-evaluacion').style.display = 'block';
    }

    // FASE 4: Final -> Música
    else if (entrada.includes("terminaste") || entrada.includes("listo") && faseActual === 4) {
        mensaje.innerHTML = `¡Ya terminamos! Ahora vamos a escuchar música, ¿te parece? Después de tanto estudio vas a relajarte. Gracias, chao.`;
        hablarTexto(`Ya terminamos. Ahora vamos a escuchar música ¿te parece? Ve a la sección de música, ahí después de tanto estudio vas a relajarte. Gracias, chao.`);
        document.getElementById('fase-evaluacion').style.display = 'none';
        document.getElementById('fase-musica').style.display = 'block';
    }
}
