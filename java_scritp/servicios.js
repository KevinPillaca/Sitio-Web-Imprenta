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
