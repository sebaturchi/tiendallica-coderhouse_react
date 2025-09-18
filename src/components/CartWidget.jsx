import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  return (
    <Link to="/cart" className="text-white d-flex align-items-center text-decoration-none">
      <FaShoppingCart size={20} />
      {totalQuantity > 0 && <span className="ms-2">{totalQuantity}</span>}
    </Link>
  );
};

export default CartWidget;
