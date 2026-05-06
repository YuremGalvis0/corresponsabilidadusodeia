// Función para mostrar/ocultar respuestas en actividades
function mostrarRespuesta(id) {
    const respuesta = document.getElementById('respuesta-' + id);
    if (respuesta.style.display === 'none' || respuesta.style.display === '') {
        respuesta.style.display = 'block';
    } else {
        respuesta.style.display = 'none';
    }
}

// Función para toggle sesiones
function toggleSesion(button) {
    const sesionContent = button.nextElementSibling;
    const isActive = button.classList.contains('active');
    
    // Cerrar todas las sesiones
    document.querySelectorAll('.sesion-button').forEach(btn => {
        btn.classList.remove('active');
        btn.nextElementSibling.classList.remove('active');
    });
    
    // Abrir la seleccionada si no estaba abierta
    if (!isActive) {
        button.classList.add('active');
        sesionContent.classList.add('active');
    }
}

// Función para toggle acordeones de fundamentos teóricos
function toggleAccord(button) {
    const accContent = button.nextElementSibling;
    const isActive = button.classList.contains('active');
    
    // Cerrar todos los acordeones
    document.querySelectorAll('.accord-button').forEach(btn => {
        btn.classList.remove('active');
        btn.nextElementSibling.classList.remove('active');
    });
    
    // Abrir el seleccionado si no estaba abierto
    if (!isActive) {
        button.classList.add('active');
        accContent.classList.add('active');
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