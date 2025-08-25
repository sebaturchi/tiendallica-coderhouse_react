const ItemDetail = ({ producto }) => {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <img
            src={producto.imagen}
            alt={producto.modelo}
            className="img-fluid rounded shadow-sm"
            style={{ maxHeight: "500px", objectFit: "contain" }}
          />
        </div>

        <div className="col-md-6">
          <h2>{producto.marca} {producto.modelo}</h2>
          <p><strong>Condición:</strong> {producto.condicion}</p>
          <p><strong>Precio:</strong> ${producto.precio.toLocaleString()}</p>

          {producto.destacado && (
            <span className="badge bg-success mb-2">Destacado</span>
          )}

          <button className="btn btn-dark w-100 mt-3">
            Agregar al carrito 🛒
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
