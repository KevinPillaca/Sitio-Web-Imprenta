// Esto es el efecto del carrusel 
let slides = document.querySelectorAll('.slide');
let index = 0;
let autoSlideInterval; // Declarar la variable una sola vez

// Función para mostrar el slide según el índice
function mostrarSlide(nuevoIndex) {
    slides.forEach(slide => slide.classList.remove('activo'));
    slides[nuevoIndex].classList.add('activo');
}

// Función para ir al siguiente slide
function siguienteSlide() {
    index = (index + 1) % slides.length;
    mostrarSlide(index);
}

// Función para ir al slide anterior
function anteriorSlide() {
    index = (index - 1 + slides.length) % slides.length;
    mostrarSlide(index);
}

// Función para reiniciar el intervalo cuando se haga un clic en las flechas
function resetInterval() {
    clearInterval(autoSlideInterval); // Detener el intervalo anterior
    autoSlideInterval = setInterval(siguienteSlide, 8000); // Reiniciar con 8 segundos
}

// Iniciar el intervalo automático con 8 segundos
autoSlideInterval = setInterval(siguienteSlide, 8000);

// Control manual con flechas:
document.querySelector('.siguiente').addEventListener('click', () => {
    siguienteSlide();
    resetInterval(); // Reinicia el intervalo cada vez que se hace click
});

document.querySelector('.anterior').addEventListener('click', () => {
    anteriorSlide();
    resetInterval(); // Reinicia el intervalo cada vez que se hace click
});

// Mostrar el primer slide al cargar la página
mostrarSlide(index);

