// 1. Esto hace que el robot hable APENAS cargue la página
window.onload = () => {
    const saludoInicial = new SpeechSynthesisUtterance("¡Hola! Por favor, dime tu nombre para comenzar.");
    saludoInicial.lang = 'es-ES';
    window.speechSynthesis.speak(saludoInicial);
};

// 2. Esto sucede cuando tú escribes tu nombre y le das al botón
function comenzar() {
    const nombre = document.getElementById('nombreUsuario').value;
    const mensajeBurbuja = document.getElementById('mensaje');

    if (nombre.trim() === "") {
        alert("Por favor, escribe un nombre");
        return;
    }

    // El texto que el robot dirá con voz
    const respuestaVoz = `Perfecto ${nombre}. ¿Quieres saber qué es el software educativo?`;

    // Cambiamos el texto de la burbuja en la pantalla
    mensajeBurbuja.innerHTML = `¡Excelente, <strong>${nombre}</strong>! ¿Quieres saber qué es el software educativo?`;

    // El robot habla de nuevo
    const hablar = new SpeechSynthesisUtterance(respuestaVoz);
    hablar.lang = 'es-ES';
    window.speechSynthesis.speak(hablar);
}
