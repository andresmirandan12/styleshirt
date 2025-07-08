// Mostrar formulario de Login
function mostrarLogin() {
  document.getElementById("loginForm").classList.remove("hidden");
  document.getElementById("registerForm").classList.add("hidden");
}

// Mostrar formulario de Registro
function mostrarRegistro() {
  document.getElementById("registerForm").classList.remove("hidden");
  document.getElementById("loginForm").classList.add("hidden");
}

// Ocultar ambos formularios
function cerrarModales() {
  document.getElementById("loginForm").classList.add("hidden");
  document.getElementById("registerForm").classList.add("hidden");
}

// Guardar usuario y contraseña en localStorage y redirigir al login
function registrarse() {
  const nombre = document.getElementById("registroNombre").value;
  const correo = document.getElementById("registroCorreo").value;
  const password = document.getElementById("registroPassword").value;

  if (nombre && correo && password) {
    localStorage.setItem("usuario", nombre);
    localStorage.setItem("password", password);
    alert("¡Registrado con éxito!");

    // Limpiar campos del formulario de registro
    document.getElementById("registroNombre").value = "";
    document.getElementById("registroCorreo").value = "";
    document.getElementById("registroPassword").value = "";

    // Mostrar formulario de login
    mostrarLogin();
  } else {
    alert("Completa todos los campos.");
  }
}

// Validar inicio de sesión
function iniciarSesion() {
  const nombre = document.getElementById("loginNombre").value;
  const password = document.getElementById("loginPassword").value;

  const usuarioGuardado = localStorage.getItem("usuario");
  const passwordGuardada = localStorage.getItem("password");

  if (nombre === usuarioGuardado && password === passwordGuardada) {
    alert("¡Inicio de sesión exitoso!");

    // Limpiar campos del formulario de login
    document.getElementById("loginNombre").value = "";
    document.getElementById("loginPassword").value = "";

    cerrarModales();
    mostrarBienvenida();
  } else {
    alert("Nombre o contraseña incorrectos.");
  }
}

// Cerrar sesión
function cerrarSesion() {
  localStorage.removeItem("usuario");
  localStorage.removeItem("password");
  location.reload();
}

// Mostrar mensaje de bienvenida si está logueado
function mostrarBienvenida() {
  const usuario = localStorage.getItem("usuario");
  const authDiv = document.getElementById("authSection");

  if (usuario) {
    authDiv.innerHTML = `
      <span class="bienvenida">Bienvenido, <strong>${usuario}</strong></span>
      <button class="btn-logout" onclick="cerrarSesion()">Cerrar Sesión</button>
    `;
  }
}

// Mostrar bienvenida al cargar la página si ya ha iniciado sesión
window.onload = mostrarBienvenida;

