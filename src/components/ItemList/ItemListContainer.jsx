import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";
import ItemList from "./ItemList";

const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    const productosRef = collection(db, "productos");
    const q = categoryId
      ? query(productosRef, where("categoria", "==", categoryId))
      : productosRef;

    getDocs(q)
      .then((snap) => {
        const lista = snap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setItems(lista);
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

  if (items.length === 0) {
    return (
      <div className="container mt-4">
        {greeting && <h2 className="text-center mb-4">{greeting}</h2>}
        <div className="alert alert-info text-center">No hay productos en esta categoria.</div>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      {greeting && <h2 className="text-center mb-4">{greeting}</h2>}
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
