import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartItem = ({ item }) => {
  const { removeFromCart } = useContext(CartContext);

  return (
    <div className="d-flex align-items-center mb-3">
      <img
        src={item.imagen}
        alt={item.modelo}
        style={{ width: 80, height: 80, objectFit: "cover" }}
      />
      <div className="flex-grow-1 ms-3">
        <h6>{item.marca} {item.modelo}</h6>
        <p className="mb-0">
          Cantidad: {item.quantity} — Subtotal: ${(item.price * item.quantity).toLocaleString()}
        </p>
      </div>
      <button
        className="btn btn-sm btn-outline-danger"
        onClick={() => removeFromCart(item.id)}
      >
        Eliminar
      </button>
    </div>
  );
};

export default CartItem;
