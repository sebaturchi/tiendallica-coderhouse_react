import React, { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { createOrder } from "../../firebase/firestoreService";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
  const { cart, totalPrice, clearCart } = useContext(CartContext);
  const [buyer, setBuyer] = useState({ name: "", email: "" });
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (cart.length === 0) {
      alert("El carrito está vacio");
      return;
    }
    setLoading(true);
    try {
      const order = {
        buyer,
        items: cart,
        total: totalPrice,
        date: new Date().toISOString()
      };
      const id = await createOrder(order);
      setOrderId(id);
      clearCart();
    } catch (err) {
      console.error(err);
      alert("Error generando la orden");
    } finally {
      setLoading(false);
    }
  };

  if (orderId) {
    return (
      <div className="container mt-4">
        <h4>Compra confirmada</h4>
        <p>Su orden fue generada con ID: <strong>{orderId}</strong></p>
        <button className="btn btn-primary" onClick={() => navigate("/")}>Volver a la tienda</button>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h4>Checkout</h4>
      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-2"
          placeholder="Nombre"
          value={buyer.name}
          onChange={(e) => setBuyer({ ...buyer, name: e.target.value })}
          required
        />
        <input
          type="email"
          className="form-control mb-2"
          placeholder="Email"
          value={buyer.email}
          onChange={(e) => setBuyer({ ...buyer, email: e.target.value })}
          required
        />
        <button className="btn btn-primary" disabled={loading || cart.length === 0}>
          {loading ? "Enviando..." : "Confirmar compra"}
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
