import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  return (
    <div className="col-md-4 mb-3">
      <div className="card h-100 shadow-sm">
        <img src={producto.imagen} className="card-img-top" alt={producto.modelo} style={{objectFit: "cover", height: 220}} />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{producto.marca} {producto.modelo}</h5>
          <p className="card-text">Condición: {producto.condicion}</p>
          <p className="card-text">Precio: ${producto.precio.toLocaleString()}</p>
          <Link to={`/${producto.categoria}/${producto.id}`} className="btn btn-dark mt-auto">
            Ver detalle
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
