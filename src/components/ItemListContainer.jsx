import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import getProductos from "../data/productos";

const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    getProductos()
      .then((data) => {
        if (categoryId) {
          setItems(data.filter((prod) => prod.categoria === categoryId));
        } else {
          setItems(data);
        }
      })
      .catch(() => setError("Hubo un problema al cargar los productos"))
      .finally(() => setLoading(false));
  }, [categoryId]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "50vh" }}>
        <div className="spinner-border text-dark" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-danger text-center mt-4" role="alert">
        {error}
      </div>
    );
  }

  return (
    <div className="container mt-4">
      {greeting && <h2 className="text-center mb-4">{greeting}</h2>}
      <div className="row">
        {items.map((prod) => (
          <div className="col-md-4 mb-3" key={prod.id}>
            <div className="card h-100 shadow-sm">
              <img src={prod.imagen} className="card-img-top" alt={prod.modelo} />
              <div className="card-body">
                <h5 className="card-title">{prod.marca} {prod.modelo}</h5>
                <p className="card-text">Condición: {prod.condicion}</p>
                <p className="card-text">Precio: ${prod.precio.toLocaleString()}</p>
                <Link to={`/${prod.categoria}/${prod.id}`} className="btn btn-dark w-100">
                  Ver detalle
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
