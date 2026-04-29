let faseActual = 0;

function hablar(texto) {
    const unidad = new SpeechSynthesisUtterance(texto);
    unidad.lang = 'es-ES';
    unidad.rate = 1;
    window.speechSynthesis.speak(unidad);
}

// El robot saluda al cargar la página (requiere un clic del usuario en la pantalla)
window.onclick = () => {
    if (faseActual === 0 && !window.speechSynthesis.speaking) {
        hablar("¡Hola! Bienvenido. Mira el video sobre qué es el software educativo y luego dime tu nombre.");
    }
};

function comenzar() {
    const valor = document.getElementById('nombreUsuario').value.toLowerCase();
    const msj = document.getElementById('mensaje');

    // FASE 0: Recibir el nombre
    if (faseActual === 0) {
        if (valor === "") {
            hablar("Por favor, escribe tu nombre.");
            return;
        }
        faseActual = 1;
        msj.innerHTML = `¡Perfecto <strong>${valor}</strong>! ¿Quieres saber qué es el software educativo? Mira el video para pasar a la segunda fase.`;
        hablar(`Perfecto ${valor}. ¿Quieres saber qué es el software educativo? Mira el video para pasar a la segunda fase.`);
        return;
    }

    // FASE 1 -> FASE 2 (Tipos)
    if (valor.includes("listo el video") && faseActual === 1) {
        faseActual = 2;
        msj.innerHTML = `Bueno, ahora vamos con los tipos de software. Te invito a la sección de tipos de software.`;
        hablar(`Bueno, ahora vamos con los tipos de software. Te invito a la sección de tipos de software.`);
        document.getElementById('fase-video').style.display = 'none';
        document.getElementById('fase-tipos').style.display = 'block';
    } 
    
    // FASE 2 -> FASE 3 (Ventajas)
    else if (valor.includes("listo ya termine") && faseActual === 2) {
        faseActual = 3;
        msj.innerHTML = `Ahora vamos a la sección de ventajas de usar software. Mira las imágenes y videos.`;
        hablar(`Ahora vamos a la sección de ventajas de usar software. Mira las imágenes y videos.`);
        document.getElementById('fase-tipos').style.display = 'none';
        document.getElementById('fase-ventajas').style.display = 'block';
    }

    // FASE 3 -> FASE 4 (Evaluación)
    else if (valor.includes("listo ya termine") && faseActual === 3) {
        faseActual = 4;
        msj.innerHTML = `Vamos a la siguiente sección: Evaluación y Uso de los software educativo.`;
        hablar(`Vamos a la siguiente sección: Evaluación y Uso del software educativo.`);
        document.getElementById('fase-ventajas').style.display = 'none';
        document.getElementById('fase-evaluacion').style.display = 'block';
    }

    // FASE 4 -> FASE 5 (Música)
    else if ((valor.includes("terminaste") || valor.includes("listo")) && faseActual === 4) {
        msj.innerHTML = `¡Ya terminamos! Ahora vamos a escuchar música, ¿te parece? Relájate. ¡Gracias, chao!`;
        hablar(`Ya terminamos. Ahora vamos a escuchar música ¿te parece? Ve a la sección de música, ahí después de tanto estudio vas a relajarte. Gracias, chao.`);
        document.getElementById('fase-evaluacion').style.display = 'none';
        document.getElementById('fase-musica').style.display = 'block';
    }
}
