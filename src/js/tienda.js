let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

document.addEventListener("DOMContentLoaded", async () => {
  const contenedorDestacados = document.getElementById("contenedor-destacados");
  const contenedorOfertas = document.getElementById("contenedor-ofertas");

  try {
    const res = await fetch("../json/guitarras.json");
    const guitarras = await res.json();

    const destacados = guitarras.filter(g => g.destacado);
    const ofertas = guitarras.filter(g => !g.destacado);

    renderizarGuitarras(destacados, contenedorDestacados);
    renderizarGuitarras(ofertas, contenedorOfertas);

    activarBotonesAgregar();
  } catch (err) {
    contenedorDestacados.innerHTML = `<p class="text-danger">Error al cargar productos</p>`;
    contenedorOfertas.innerHTML = `<p class="text-danger">Error al cargar productos</p>`;
    console.error(err);
  }
});

function renderizarGuitarras(lista, contenedor) {
  lista.forEach(guitarra => {
    const col = document.createElement("div");
    col.classList.add("col-lg-3", "mb-4");

    col.innerHTML = `
      <div class="card h-100">
        <img src="${guitarra.imagen}" class="card-img-top" alt="Imagen de ${guitarra.modelo}">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${guitarra.marca} ${guitarra.modelo}</h5>
          <p class="descripcion">Guitarra ${guitarra.marca} modelo ${guitarra.modelo}, ${guitarra.condicion}</p>
          <span class="precio">$${guitarra.precio.toLocaleString("es-AR")}</span>
          <a href="articulo.html" class="btn btn-secondary mt-auto">Más detalles</a>
          <button class="btn btn-primary agregar-carrito mt-2">Agregar al carrito</button>
        </div>
      </div>
    `;

    contenedor.appendChild(col);
  });
}

function activarBotonesAgregar() {
  const botonesAgregar = document.querySelectorAll(".agregar-carrito");

  botonesAgregar.forEach(boton => {
    boton.addEventListener("click", () => {
      const card = boton.closest(".card");
      const titulo = card.querySelector(".card-title").textContent;
      const descripcion = card.querySelector(".descripcion").textContent;
      const precio = card.querySelector(".precio").textContent;
      const imagen = card.querySelector("img").src;

      const producto = { titulo, descripcion, precio, imagen, cantidad: 1 };

      carrito.push(producto);
      localStorage.setItem("carrito", JSON.stringify(carrito));

      Swal.fire({
        icon: "success",
        title: "Agregado al carrito",
        text: titulo,
        timer: 1500,
        showConfirmButton: false
      });
    });
  });
}