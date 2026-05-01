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
const sonidoHover = new Audio('assets/music/hover.mp3'); 

document.querySelectorAll('.burbuja').forEach(burbuja => {
    burbuja.addEventListener('mouseenter', () => {
        sonidoHover.currentTime = 0;
        sonidoHover.play().catch(e => console.log("Esperando interacción"));
    });
});
// Lógica para que el asistente de Software Valera vuele solo
function iniciarVueloAsistente() {
    const robot = document.getElementById('robot-img');
    if (!robot) return;

    function mover() {
        // Activamos el aleteo rápido (clase .volando que creamos en CSS)
        robot.classList.add('volando');

        // Calculamos coordenadas aleatorias restando el tamaño del robot
        const x = Math.random() * (window.innerWidth - 180);
        const y = Math.random() * (window.innerHeight - 180);

        robot.style.left = `${x}px`;
        robot.style.top = `${y}px`;

        // El vuelo dura 3 segundos (por el transition: all 3s de tu CSS)
        setTimeout(() => {
            // Al llegar, quita el aleteo rápido y vuelve a su animación suave
            robot.classList.remove('volando');
            
            // Espera entre 3 y 6 segundos para el próximo vuelo
            setTimeout(mover, Math.random() * 3000 + 3000); 
        }, 3000);
    }

    // Iniciar el ciclo de vuelo
    mover();
}
// --- ESTA PARTE REEMPLAZA LAS LÍNEAS 81 A 83 ---

// 1. Intentar arrancar de inmediato
iniciarVueloAsistente();

// 2. Por si acaso, también al cargar la página
window.addEventListener('load', iniciarVueloAsistente);

// 3. Y como seguridad extra por si el navegador bloquea el auto-inicio
document.addEventListener('click', () => {
    // Solo arranca si no ha empezado ya
    iniciarVueloAsistente();
}, { once: true }); // Solo se ejecuta la primera vez que hagas clic
