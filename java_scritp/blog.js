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

// animaciones contacto
gsap.from(".servicios-banner h1",{
  y: -200,
  ease:"power.out",
  delay: 0.900,
  duration:1,
  stagger:0.25
})

// Animacion Gsap con scrollTrigger
gsap.registerPlugin(ScrollTrigger);

    // Animacion la parte de bienvenidos
const animaciones_blog = [
  { selector: ".diseño_grafico", efecto: "animate__backInRight" },
  { selector: ".illustrator", efecto: "animate__fadeInUp" },
  { selector: ".corel_draw", efecto: "animate__zoomIn" },
  { selector: ".photoshop", efecto: "animate__fadeInTopLeft" },
  { selector: ".canva", efecto: "animate__fadeInTopLeft" },
  { selector: ".pdf", efecto: "animate__slideInRight" },
  { selector: ".digital", efecto: "animate__zoomInUp" },
  { selector: ".offset", efecto: "animate__rollIn" }
];

animaciones_blog.forEach(({ selector, efecto }) => {
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