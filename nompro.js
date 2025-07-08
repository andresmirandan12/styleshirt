// Mostrar bienvenida con botón desplegable
function mostrarBienvenida() {
  const usuario = localStorage.getItem("usuario");
  const authDiv = document.getElementById("authSection");

  if (usuario) {
    authDiv.innerHTML = `
      <div class="user-menu">
        <button class="user-name" onclick="toggleMenu()">${usuario} ⮟</button>
        <div class="logout-menu hidden" id="logoutMenu">
          <button onclick="cerrarSesion()">Cerrar Sesión</button>
        </div>
      </div>
    `;
  }
}

function toggleMenu() {
  const menu = document.getElementById("logoutMenu");
  menu.classList.toggle("hidden");
}

// Cerrar sesión
function cerrarSesion() {
  localStorage.removeItem("usuario");
  localStorage.removeItem("password");
  window.location.href = "pagina.html"; // o cambia a la página principal que quieras
}

// Mostrar bienvenida si ya ha iniciado sesión
window.onload = mostrarBienvenida;
