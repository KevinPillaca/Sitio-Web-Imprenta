


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

// Función de animación para mover suavemente el círculo portal del sitio
function animate() {
  outlineX += (dotX - outlineX) * 0.1;
  outlineY += (dotY - outlineY) * 0.1;

  outline.style.left = outlineX + 'px';
  outline.style.top = outlineY + 'px';

  requestAnimationFrame(animate);
}

animate();


let slides = document.querySelectorAll('.slide');
let index = 0;
let autoSlideInterval;

function mostrarSlide(nuevoIndex) {
  slides.forEach(slide => slide.classList.remove('activo'));
  slides[nuevoIndex].classList.add('activo');
}

function siguienteSlide() {
  index = (index + 1) % slides.length;
  mostrarSlide(index);
}

function anteriorSlide() {
  index = (index - 1 + slides.length) % slides.length;
  mostrarSlide(index);
}

function resetInterval() {
  clearInterval(autoSlideInterval);
  autoSlideInterval = setInterval(siguienteSlide, 8000);
}

autoSlideInterval = setInterval(siguienteSlide, 8000);

document.querySelector('.siguiente').addEventListener('click', () => {
  siguienteSlide();
  resetInterval();
});

document.querySelector('.anterior').addEventListener('click', () => {
  anteriorSlide();
  resetInterval();
});

mostrarSlide(index);

// Animación de contorno si hay una imagen con clase .imagen
const contenedor = document.querySelector('.imagen');
if (contenedor) {
    let angle = 0;

    function animarBorde() {
        // Reducimos el incremento del ángulo para que sea más lento
        angle = (angle + 1) % 360; // Antes era +3
        contenedor.style.setProperty('--angle', `${angle}deg`);
        requestAnimationFrame(animarBorde);
    }

    requestAnimationFrame(animarBorde);
}

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


// Esperamos que se cargue todo el contenido de la página
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  const contenido = document.getElementById("contenido");

  // Aseguramos que se ejecute después de una pequeña pausa (opcional)
  setTimeout(() => {
    loader.classList.add("ocultar");
    contenido.classList.remove("oculto");
  }, 900); // puedes ajustar el tiempo si deseas
});

// ANIMACIONES CON GSAP
  // Animacion de inicio para el logo con class (.logo)
let logo = document.querySelector(".logo") 
gsap.from(logo,{
    x: -200,
   // rotate: 360,
    scale: 1,
    delay: 0.900,
    duration: 3,
    ease: "bounce.out"
})

  // Animacion de inicio para el Menu
gsap.from(".menu-item",{
  y: -200,
  ease:"power.out",
  delay: 0.900,
  //duration:1,
  stagger:0.25
})

  // Animacion de inicio numero de contacto
let contacto = document.querySelector(".contacto") 
gsap.from(contacto,{
    x: 200,
   // rotate: 360,
    scale: 1,
    delay: 0.900,
    duration: 3,
    ease: "bounce.out"
})

// Animacion Gsap con scrollTrigger
gsap.registerPlugin(ScrollTrigger);

    // Animacion la parte de bienvenidos
const animaciones = [
  { selector: ".contenido-bienvenido h1", efecto: "animate__backInRight" },
  { selector: ".contenido-bienvenido p", efecto: "animate__fadeInUp" },
  { selector: ".imagen", efecto: "animate__zoomIn" },
  { selector: ".contenido-bienvenido h4", efecto: "animate__fadeInTopLeft" }
];

animaciones.forEach(({ selector, efecto }) => {
  const elemento = document.querySelector(selector);
  if (elemento) {
    elemento.classList.add("animate__animated");
    elemento.style.setProperty("--animate-duration", "3s"); // duración en segundos

    ScrollTrigger.create({
      trigger: elemento,
      once: true,
      onEnter: () => {
        // Sin delay, se añade la clase justo al entrar
        elemento.classList.add(efecto);
      }
    });
  }
});

    // Animacion de la seccion haz crecer tu negocio
gsap.from(".banner .subtitulo",{
  scrollTrigger:".banner .subtitulo",
  x: 800,
  duration: 2,
  ease: "elastic.in(1,0.3)"
})

gsap.from(".banner .titulo",{
  scrollTrigger:".banner .titulo",
  x: -200,
  duration: 3,
  scale: 0.5,
  opacity: 0,
  ease: "power4.inOut"
})

gsap.from(".banner a",{
  scrollTrigger:".banner a",
  duration: 4,
  scale: 0.5,
  opacity: 0,
  ease: "power4.inOut"
})

    // Animacion de la seccion impresion digital, offset y diseño
const animaciones_impresion = [
  { selector: ".seccion-diseno-2 .digital", efecto: "animate__backInLeft" },
  { selector: ".seccion-diseno-2 .offset", efecto: "animate__flipInX" },
  { selector: ".seccion-diseno-2 .grafico", efecto: "animate__fadeInRight" },
];

animaciones_impresion.forEach(({ selector, efecto }) => {
  const elemento = document.querySelector(selector);
  if (elemento) {
    elemento.classList.add("animate__animated");
    elemento.style.setProperty("--animate-duration", "5s"); // duración 5 segundos

    ScrollTrigger.create({
      trigger: elemento,
      once: true,
      onEnter: () => {
        // Sin delay, se añade la clase justo al entrar
        elemento.classList.add(efecto);
      }
    });
  }
});

    // Animacion de la seccion de contacto
const animaciones_contacto = [
  { selector: ".contenedor_info .contacto_info", efecto: "animate__fadeInBottomLeft" },
  { selector: ".contenedor_info .form_cotizacion", efecto: "animate__flipInX" },
];

animaciones_contacto.forEach(({ selector, efecto }) => {
  const elemento = document.querySelector(selector);
  if (elemento) {
    elemento.classList.add("animate__animated");
    elemento.style.setProperty("--animate-duration", "4s"); // duración 5 segundos

    ScrollTrigger.create({
      trigger: elemento,
      once: true,
      onEnter: () => {
        // Sin delay, se añade la clase justo al entrar
        elemento.classList.add(efecto);
      }
    });
  }
});


// Enviar formulario con FormSubmit
const form = document.getElementById('formulario');
const mensaje = document.getElementById('mensaje-form');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const res = await fetch(form.action, {
    method: 'POST',
    body: formData,
    headers: { 'Accept': 'application/json' }
  });

  mensaje.style.display = 'block';
  mensaje.classList.remove('mensaje-exito', 'mensaje-error');

  if (res.ok) {
    form.reset();
    mensaje.classList.add('mensaje-exito');
    mensaje.textContent = 'Mensaje enviado. Pronto nos pondremos en contacto.';
  } else {
    mensaje.classList.add('mensaje-error');
    mensaje.textContent = 'Ocurrió un error al enviar el mensaje. Intenta nuevamente.';
  }
});