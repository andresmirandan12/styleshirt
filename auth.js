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

// Registrar usuario
function registrarse() {
  const nombre = document.getElementById("registroNombre").value;
  const correo = document.getElementById("registroCorreo").value;
  const password = document.getElementById("registroPassword").value;

  if (nombre && correo && password) {
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    const existe = usuarios.some((u) => u.nombre === nombre);
    if (existe) {
      alert("El usuario ya está registrado.");
      return;
    }

    usuarios.push({ nombre, correo, password });
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    alert("¡Registrado con éxito!");

    // Limpiar campos
    document.getElementById("registroNombre").value = "";
    document.getElementById("registroCorreo").value = "";
    document.getElementById("registroPassword").value = "";

    mostrarLogin();
  } else {
    alert("Completa todos los campos.");
  }
}

// Iniciar sesión
function iniciarSesion() {
  const nombre = document.getElementById("loginNombre").value;
  const password = document.getElementById("loginPassword").value;

  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  const usuario = usuarios.find((u) => u.nombre === nombre && u.password === password);

  if (usuario) {
    alert("¡Inicio de sesión exitoso!");
    localStorage.setItem("usuarioActual", JSON.stringify(usuario));

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
  localStorage.removeItem("usuarioActual");
  location.reload();
}

// Mostrar bienvenida si está logueado
function mostrarBienvenida() {
  const usuarioActual = JSON.parse(localStorage.getItem("usuarioActual"));
  const authDiv = document.getElementById("authSection");

  if (usuarioActual) {
    authDiv.innerHTML = `
      <span class="bienvenida">Bienvenido/a, <strong>${usuarioActual.nombre}</strong></span>
      <button class="btn-logout" onclick="cerrarSesion()">Cerrar Sesión</button>
    `;
  }
}

window.onload = mostrarBienvenida;
