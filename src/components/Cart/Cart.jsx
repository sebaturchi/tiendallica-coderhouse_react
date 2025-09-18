import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "./CartItem";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, totalPrice, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="container mt-4">
        <h3>Carrito vacio</h3>
        <Link to="/">Ir a la tienda</Link>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h3>Carrito</h3>
      {cart.map(item => <CartItem key={item.id} item={item} />)}
      <hr />
      <h5>Total: ${totalPrice.toLocaleString()}</h5>
      <div className="d-flex gap-2 mt-3">
        <button className="btn btn-outline-danger" onClick={clearCart}>Vaciar carrito</button>
        <button className="btn btn-primary" onClick={() => navigate("/checkout")}>Finalizar compra</button>
      </div>
    </div>
  );
};

export default Cart;
