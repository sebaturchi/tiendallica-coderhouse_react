import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getProductos from "../data/productos";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const { categoria, id } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    getProductos()
      .then((data) => {
        const encontrado = data.find(
          (prod) => prod.categoria === categoria && prod.id === parseInt(id)
        );

        if (!encontrado) throw new Error("Producto no encontrado");

        setProducto(encontrado);
      })
      .catch(() => setError("No se pudo cargar el producto"))
      .finally(() => setLoading(false));
  }, [categoria, id]);

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

  return producto ? <ItemDetail producto={producto} /> : null;
};

export default ItemDetailContainer;
