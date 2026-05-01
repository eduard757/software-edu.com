let nombreUsuario = "";
const asistenteVoz = window.speechSynthesis;

function hablar(texto) {
    const mensaje = new SpeechSynthesisUtterance(texto);
    mensaje.lang = 'es-ES';
    mensaje.rate = 1.1; 
    asistenteVoz.speak(mensaje);
}

// 1. Saludo inicial y pregunta el nombre
function saludoInicial() {
    hablar("Hola, bienvenidos. Soy la asistente virtual de Charlles Salcedo. Estamos viendo sistemas operativos con la profesora Clara Martínez. ¿Cómo está, profe? Bienvenida a nuestra defensa. Por favor, dime tu nombre para continuar.");
    
    // Esperamos un momento y pedimos el nombre por pantalla
    setTimeout(() => {
        nombreUsuario = prompt("Introduce tu nombre:");
        if (nombreUsuario) {
            continuarPresentacion();
        }
    }, 8000);
}

// 2. Respuesta personalizada y explicación del software
function continuarPresentacion() {
    hablar(`Gusto en saludarte, ${nombreUsuario}. Hoy vamos a hablar del software educativo. Pero antes de explicarte qué es, mira este video y cuando termines seguimos. Al final, nos relajaremos con un poco de música.`);
}

// 3. Música final (Se activa manualmente o al terminar el video)
function ponerMusica() {
    hablar("Espero que hayas disfrutado la explicación. Ahora, vamos a relajarnos con un poco de música para cerrar nuestra defensa.");
    const audio = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'); // Puedes cambiar este link por tu música favorita
    audio.play();
}

// Configurar el clic en el robot
document.addEventListener('DOMContentLoaded', () => {
    const robot = document.getElementById('robot-asistente');
    if (robot) {
        robot.onclick = saludoInicial;
    }
});
// --- EFECTO DE SONIDO PARA LAS BURBUJAS ---
const sonidoHover = new Audio('activos/hover.mp3'); 

document.querySelectorAll('.burbuja').forEach(burbuja => {
    burbuja.addEventListener('mouseenter', () => {
        sonidoHover.currentTime = 0;
        sonidoHover.play().catch(e => console.log("Esperando interacción del usuario para sonar"));
    });
});
