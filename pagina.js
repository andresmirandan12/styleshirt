

// Menú móvil desplegable
const mobileMenu = document.querySelector('.mobile-menu');
const navMenu = document.querySelector('.nav-menu');

mobileMenu.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});





// Animación de contadores
function animateCount(el, end) {
  let start = 0;
  const duration = 2000;
  const step = Math.ceil(end / (duration / 50));

  const interval = setInterval(() => {
    start += step;
    if (start >= end) {
      start = end;
      clearInterval(interval);
    }
    el.textContent = `${start}+`;
  }, 50);
}

document.addEventListener("DOMContentLoaded", () => {
  const stats = document.querySelectorAll(".stat-number");
  if (stats.length >= 3) {
    animateCount(stats[0], 10);
    animateCount(stats[1], 10);
    animateCount(stats[2], 1);
  }
});

// SweetAlert2 Bienvenida
window.addEventListener("load", () => {
  if (typeof Swal !== 'undefined') {
    Swal.fire({
      title: "¡Bienvenido a StyleShirt!",
      text: "Obtén 10% de descuento en tu primera compra",
      icon: "info",
      confirmButtonText: "¡Quiero!"
    });
  }
});


  function cerrarSesion() {
    // Borra datos del localStorage (simulando cierre de sesión)
    localStorage.clear();

    // Redirige a una página de inicio o login (ajusta si es necesario)
    window.location.href = "index.html"; 
  }

