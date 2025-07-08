// Datos de productos
const productos = [
  { id: 1, nombre: "Camiseta Casual Azul", categoria: "casual", precio: 25000, imagen: "https://www.sportline.com.co/media/catalog/product/z/t/ztek0668-royal-f1.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:&format=jpeg", descripcion: "Camiseta azul fresca para uso diario." },
  { id: 2, nombre: "Camiseta Casual Blanca", categoria: "casual", precio: 27000, imagen: "https://tommycolombia.vtexassets.com/arquivos/ids/1365921-800-auto?v=638863772276700000&width=800&height=auto&aspect=true", descripcion: "Clásica camiseta blanca de algodón." },
  { id: 3, nombre: "Camiseta Casual Negra", categoria: "casual", precio: 26000, imagen: "https://agaval.vtexassets.com/arquivos/ids/1430916/image-a77619ac9f374db1a29cce34d2b8c2ab.jpg?v=638429270967170000", descripcion: "Camiseta negra minimalista y elegante." },
  { id: 4, nombre: "Camiseta Premium Negra", categoria: "premium", precio: 50000, imagen: "https://quest.vteximg.com.br/arquivos/ids/457252/QUE113240057-19-1.jpg?v=638564467707530000?1750636800011", descripcion: "Diseño premium con tela suave y elegante." },
  { id: 5, nombre: "Camiseta Premium Blanca", categoria: "premium", precio: 55000, imagen: "https://quest.vtexassets.com/arquivos/ids/459089/QUE113240062-0-1.jpg?v=638588553121100000", descripcion: "Elegancia en blanco para ocasiones formales." },
  { id: 6, nombre: "Camiseta Premium Edición Oro", categoria: "premium", precio: 60000, imagen: "https://quest.vtexassets.com/arquivos/ids/484046-800-auto?v=638836519659200000&width=800&height=auto&aspect=true", descripcion: "Edición especial con detalles dorados." },
  { id: 7, nombre: "Camiseta Deportiva Azul", categoria: "deportiva", precio: 30000, imagen: "https://cicadex.com/wp-content/uploads/2020/01/350-33-Camiseta-Hom-Azul-ped-27-tras-copia.jpg", descripcion: "Ideal para entrenamientos, transpirable." },
  { id: 8, nombre: "Camiseta Deportiva Roja", categoria: "deportiva", precio: 32000, imagen: "https://sportzone.vtexassets.com/arquivos/ids/187440/H61736-Camiseta-adidas-hombre-rojo-blanco-2.jpg?v=638350729134170000", descripcion: "Diseño atlético con absorción de sudor." },
  { id: 9, nombre: "Camiseta Deportiva Verde", categoria: "deportiva", precio: 31000, imagen: "https://static.dafiti.com.co/p/nike-3699-1055052-1-zoom.jpg" },
  { id: 10, nombre: "Camiseta Vintage Clásica", categoria: "vintage", precio: 28000, imagen: "https://http2.mlstatic.com/D_NQ_NP_929411-MCO44181624385_112020-O.webp", descripcion: "Diseño retro con estilo de los 80s." },
  { id: 11, nombre: "Camiseta Vintage Rock", categoria: "vintage", precio: 29000, imagen: "https://www.sportline.com.co/media/catalog/product/p/s/ps1361733-849_hf.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:&format=jpegs", descripcion: "Inspiración rockera con estampado único." },
  { id: 12, nombre: "Camiseta Vintage Urbana", categoria: "vintage", precio: 30000, imagen: "https://m.media-amazon.com/images/I/91XFGdO22wL._CLa%7C2140%2C2000%7C81NTzoAwM8L.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_UY1000_.png", descripcion: "Estilo urbano con acabado envejecido." },
  { id: 13, nombre: "Camiseta Casual Rayas", categoria: "casual", precio: 27000, imagen: "https://derayasjpg.com/cdn/shop/files/camiseta_de_rayas_negras_y_blancas_1080x.webp?v=1737014558", descripcion: "Camiseta rayada para un look moderno." },
  { id: 14, nombre: "Camiseta Deportiva Gris", categoria: "deportiva", precio: 30000, imagen: "https://cicadex.com/wp-content/uploads/2020/05/350-32-Cam-Hom-350-27-Gris-3-4-copia.jpg", descripcion: "Ideal para gimnasio o trote." },
  { id: 15, nombre: "Camiseta Premium Negra Oro", categoria: "premium", precio: 58000, imagen: "https://m.media-amazon.com/images/I/71NE1BJWvLL._UY1000_.jpg", descripcion: "Edición limitada con detalles exclusivos." },
];

// Renderizar productos
function renderizarProductos(productosFiltrados) {
  const contenedor = document.getElementById("product-list");
  contenedor.innerHTML = "";

  productosFiltrados.forEach(prod => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${prod.imagen}" alt="${prod.nombre}" class="product-img">
      <h3>${prod.nombre}</h3>
      <button onclick="toggleDetalles(${prod.id})">Ver más</button>
      <div class="product-details" id="detalles-${prod.id}" style="display:none;">
        <p>${prod.descripcion}</p>
        <p><strong>Precio:</strong> $${prod.precio.toLocaleString()}</p>
        <button onclick="agregarAlCarrito(${prod.id})">Agregar al carrito</button>
      </div>
    `;
    contenedor.appendChild(card);
  });
}

// Filtro por categoría
function filterProducts() {
  const categoria = document.getElementById("categoryFilter").value;
  const filtrados = categoria === "all" ? productos : productos.filter(p => p.categoria === categoria);
  renderizarProductos(filtrados);
}

// Mostrar/ocultar detalles
function toggleDetalles(id) {
  const detalles = document.getElementById(`detalles-${id}`);
  detalles.style.display = detalles.style.display === "none" ? "block" : "none";
}

// Carrito
let carrito = [];

function agregarAlCarrito(id) {
  const producto = productos.find(p => p.id === id);
  carrito.push(producto);
  actualizarCarrito();
}

function actualizarCarrito() {
  const lista = document.getElementById("cart-items");
  const total = document.getElementById("cart-total");
  const count = document.getElementById("cart-count");

  lista.innerHTML = "";
  let suma = 0;
  carrito.forEach((item, i) => {
    const li = document.createElement("li");
    li.textContent = `${item.nombre} - $${item.precio.toLocaleString()}`;
    lista.appendChild(li);
    suma += item.precio;
  });

  total.textContent = `$${suma.toLocaleString()}`;
  count.textContent = carrito.length;
}

function clearCart() {
  carrito = [];
  actualizarCarrito();
}

function toggleCart() {
  const cart = document.getElementById("cart");
  cart.style.display = cart.style.display === "none" || cart.style.display === "" ? "block" : "none";
}

// Inicial
document.addEventListener("DOMContentLoaded", () => {
  renderizarProductos(productos);
});


