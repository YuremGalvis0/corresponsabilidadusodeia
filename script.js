// Función para mostrar/ocultar respuestas en actividades
function mostrarRespuesta(id) {
    const respuesta = document.getElementById('respuesta-' + id);
    if (respuesta.style.display === 'none' || respuesta.style.display === '') {
        respuesta.style.display = 'block';
    } else {
        respuesta.style.display = 'none';
    }
}

// Inicializar Mermaid
document.addEventListener('DOMContentLoaded', function() {
    mermaid.initialize({ startOnLoad: true });
});

// Navegación suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});