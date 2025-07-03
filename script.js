function showRegister() {
  document.getElementById('login-container').classList.add('hidden');
  document.getElementById('register-container').classList.remove('hidden');
}

function showLogin() {
  document.getElementById('register-container').classList.add('hidden');
  document.getElementById('login-container').classList.remove('hidden');
}

function register() {
  const username = document.getElementById('register-username').value.trim();
  const password = document.getElementById('register-password').value.trim();
  const confirm = document.getElementById('register-confirm').value.trim();

  if (!username || !password || !confirm) {
    alert("Completa todos los campos");
    return;
  }

  if (password !== confirm) {
    alert("Las contraseñas no coinciden");
    return;
  }

  if (localStorage.getItem(username)) {
    alert("Este usuario ya existe");
    return;
  }

  localStorage.setItem(username, password);
  alert("¡Registrado correctamente!");
  showLogin();
}

function login() {
  const username = document.getElementById('login-username').value.trim();
  const password = document.getElementById('login-password').value.trim();

  const storedPassword = localStorage.getItem(username);

  if (storedPassword === password) {
    alert("¡Bienvenido a ShirtStyle!");
    window.location.href = "pagina.html"; // Página principal de tu tienda
  } else {
    alert("Usuario o contraseña incorrectos");
  }
}

