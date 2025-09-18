import React, { useState, useContext } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const ItemDetail = ({ producto }) => {
  const [added, setAdded] = useState(false);
  const { addToCart } = useContext(CartContext);

  const handleAdd = (qty) => {
    addToCart({
      id: producto.id,
      marca: producto.marca,
      modelo: producto.modelo,
      price: producto.precio,
      imagen: producto.imagen,
      quantity: qty
    });
    setAdded(true);
  };

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
          <p><strong>Condicion:</strong> {producto.condicion}</p>
          <p><strong>Precio:</strong> ${producto.precio.toLocaleString()}</p>

          {producto.destacado && (
            <span className="badge bg-success mb-2">Destacado</span>
          )}

          {!added ? (
            <ItemCount stock={producto.stock ?? 10} initial={1} onAdd={handleAdd} />
          ) : (
            <>
              <div className="alert alert-success mt-3">Agregado al carrito</div>
              <div className="d-grid gap-2">
                <Link to="/cart" className="btn btn-primary">Ir al carrito</Link>
                <Link to="/" className="btn btn-outline-secondary">Seguir comprando</Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
