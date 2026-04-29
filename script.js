function personalizarBienvenida() {
  const nombre = document.getElementById('nombre').value.trim();
  const saludo = document.getElementById('saludo-personalizado');
  if (nombre) {
    saludo.textContent = `¡Hola ${nombre}! Gracias por visitar la web de Charlles Salcedo.`;
  } else {
    saludo.textContent = '';
  }
}
