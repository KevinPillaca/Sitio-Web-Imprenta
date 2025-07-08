// Este es el javascritp del efecto cursor
const dot = document.querySelector('.cursor-dot');
const outline = document.querySelector('.cursor-outline');

let dotX = 0, dotY = 0;
let outlineX = 0, outlineY = 0;

document.addEventListener('mousemove', (e) => {
  dotX = e.clientX;
  dotY = e.clientY;
  dot.style.left = dotX + 'px';
  dot.style.top = dotY + 'px';
});

// Función de animación para mover suavemente el círculo
function animate() {
  outlineX += (dotX - outlineX) * 0.1;
  outlineY += (dotY - outlineY) * 0.1;

  outline.style.left = outlineX + 'px';
  outline.style.top = outlineY + 'px';

  requestAnimationFrame(animate);
}

animate();


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

// efecto contorno de la imagen de bienvenida
const contenedor = document.querySelector('.imagen');
  let angle = 0;
  let pause = false;

  function animarBorde() {
    if (!pause) {
      angle += 1; // velocidad de rotación (ajustable)

      if (angle >= 360) {
        angle = 360;
        pause = true;
        setTimeout(() => {
          angle = 0;
          pause = false;
        }, 1000); // pausa de 1 segundo
      }

      contenedor.style.setProperty('--angle', `${angle}deg`);
    }

    requestAnimationFrame(animarBorde);
  }

  // Iniciar la animación
  requestAnimationFrame(animarBorde);

// mostrar/ocultar menú en móviles
const toggleBtn = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

toggleBtn.addEventListener('click', () => {
  const estaAbierto = nav.classList.contains('show');

  if (estaAbierto) {
    // Cerrar: animación rápida
    nav.style.transition = 'max-height 0.4s ease-in-out';
    nav.classList.remove('show');
    toggleBtn.innerHTML = '&#9776;'; // ☰
  } else {
    // Abrir: animación lenta
    nav.style.transition = 'max-height 1.2s ease-in-out';
    nav.classList.add('show');
    toggleBtn.innerHTML = '&times;'; // ✖
  }
});



// Detecta la página actual y agrega clase 'activo' al enlace correspondiente
const enlaces = document.querySelectorAll('.nav ul li a');
const urlActual = window.location.pathname;

enlaces.forEach((enlace) => {
  if (enlace.getAttribute('href') === urlActual || enlace.href.endsWith(urlActual)) {
    enlace.classList.add('activo');
  }
});

// Libreria GSAP para las animaciones

// Animacion de inicio para el logo con class (.logo)
let logo = document.querySelector(".logo") 
gsap.from(logo,{
    x: -200,
   // rotate: 360,
    scale: 1,
   // delay: 1,
    duration: 3,
    ease: "bounce.out"
})

// Animacion de inicio para el Menu
gsap.from(".menu-item",{
  y: -200,
  ease:"power.out",
  //duration:1,
  stagger:0.25
})

// Animacion de inicio numero de contacto
let contacto = document.querySelector(".contacto") 
gsap.from(contacto,{
    x: 200,
   // rotate: 360,
    scale: 1,
   // delay: 1,
    duration: 3,
    ease: "bounce.out"
})

