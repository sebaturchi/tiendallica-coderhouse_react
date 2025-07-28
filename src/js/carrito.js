document.addEventListener("DOMContentLoaded", () => {
  const listaCarrito = document.getElementById("lista-carrito");
  const detallePrecios = document.getElementById("detalle-precios");
  const btnCancelar = document.getElementById("cancelar-carrito");

  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  function renderizarCarrito() {
    listaCarrito.innerHTML = "";
    detallePrecios.innerHTML = "";

    if (carrito.length === 0) {
      listaCarrito.innerHTML = "<li class='text-muted'>No hay productos en el carrito</li>";
      detallePrecios.innerHTML = "<p class='text-muted'>Total: $0</p>";
      return;
    }

    let total = 0;

    carrito.forEach((producto, index) => {
      const precioUnitario = parseInt(producto.precio.replace(/\D/g, ""));
      const subtotal = precioUnitario * (producto.cantidad || 1);
      total += subtotal;

      const item = document.createElement("li");
      item.classList.add("mb-3");

      item.innerHTML = `
        <div class="d-flex align-items-center justify-content-between">
          <div class="d-flex align-items-center">
            <img src="${producto.imagen}" alt="${producto.titulo}" style="width: 60px; height: auto; margin-right: 10px;">
            <div>
              <p class="mb-1 fw-bold">${producto.titulo}</p>
              <p class="mb-0">${producto.precio}</p>
              <label class="form-label mt-1 mb-0 small">Cantidad:</label>
              <input type="number" min="1" value="${producto.cantidad || 1}" class="form-control form-control-sm cantidad-input" data-index="${index}" style="width: 80px;">
            </div>
          </div>
          <button class="btn btn-sm btn-danger eliminar-item" data-index="${index}">
            <i class="bi bi-x-circle"></i>
          </button>
        </div>
      `;

      listaCarrito.appendChild(item);
    });

    detallePrecios.innerHTML = `
      <div class="col-12 mt-3">
        <p class="fw-bold fs-5 text-end">Total: $${total.toLocaleString("es-AR")}</p>
      </div>
    `;

    agregarEventosEliminar();
    agregarEventosCantidad();
  }

  function agregarEventosEliminar() {
    const botonesEliminar = document.querySelectorAll(".eliminar-item");

    botonesEliminar.forEach(boton => {
      boton.addEventListener("click", () => {
        const index = parseInt(boton.dataset.index);
        carrito.splice(index, 1);
        localStorage.setItem("carrito", JSON.stringify(carrito));
        renderizarCarrito();
      });
    });
  }

  function agregarEventosCantidad() {
    const inputsCantidad = document.querySelectorAll(".cantidad-input");

    inputsCantidad.forEach(input => {
      input.addEventListener("change", () => {
        const index = parseInt(input.dataset.index);
        let nuevaCantidad = parseInt(input.value);
        if (isNaN(nuevaCantidad) || nuevaCantidad < 1) {
          nuevaCantidad = 1;
          input.value = 1;
        }
        carrito[index].cantidad = nuevaCantidad;
        localStorage.setItem("carrito", JSON.stringify(carrito));
        renderizarCarrito();
      });
    });
  }

  btnCancelar.addEventListener("click", () => {
    Swal.fire({
      title: "Estas seguro?",
      text: "Se va a vaciar el carrito",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Si, borrar",
      cancelButtonText: "Cancelar"
    }).then(result => {
      if (result.isConfirmed) {
        localStorage.removeItem("carrito");
        carrito = [];
        renderizarCarrito();
      }
    });
  });

  renderizarCarrito();
});
