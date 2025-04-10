const productos = [
  {
    id: 1,
    nombre: "Cien Años de Soledad",
    descripcion: "Novela de realismo mágico",
    precio: 15.99,
    categoria: "Ficción",
    imagen: "https://via.placeholder.com/150"
  },
  {
    id: 2,
    nombre: "Sapiens",
    descripcion: "Historia de la humanidad",
    precio: 18.5,
    categoria: "No Ficción",
    imagen: "https://via.placeholder.com/150"
  },
  {
    id: 3,
    nombre: "El Principito",
    descripcion: "Clásico infantil",
    precio: 9.99,
    categoria: "Infantil",
    imagen: "https://via.placeholder.com/150"
  }
];

let carrito = [];

function showSection(id) {
  document.querySelectorAll("main section").forEach(sec => sec.style.display = "none");
  document.getElementById(id).style.display = "block";
  if (id === "carrito") renderCarrito();
}

function renderProductos() {
  const contenedor = document.getElementById("lista-productos");
  productos.forEach(producto => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.nombre}">
      <h3>${producto.nombre}</h3>
      <p>${producto.descripcion}</p>
      <p><strong>$${producto.precio}</strong></p>
      <button onclick="agregarAlCarrito(${producto.id})">Agregar al carrito</button>
    `;
    contenedor.appendChild(card);
  });
}

function agregarAlCarrito(id) {
  const producto = productos.find(p => p.id === id);
  carrito.push(producto);
  alert(`Agregado: ${producto.nombre}`);
}

function renderCarrito() {
  const contenedor = document.getElementById("contenido-carrito");
  const totalEl = document.getElementById("total");
  contenedor.innerHTML = "";

  carrito.forEach((item, index) => {
    const div = document.createElement("div");
    div.innerHTML = `${item.nombre} - $${item.precio} <button onclick="eliminarDelCarrito(${index})">Eliminar</button>`;
    contenedor.appendChild(div);
  });

  const total = carrito.reduce((sum, item) => sum + item.precio, 0);
  totalEl.innerText = `Total: $${total.toFixed(2)}`;
}

function eliminarDelCarrito(index) {
  carrito.splice(index, 1);
  renderCarrito();
}

document.getElementById("formulario-pago").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("mensaje-pago").innerText = "✅ Pago realizado con éxito. ¡Gracias por tu compra!";
  carrito = [];
});

renderProductos();
