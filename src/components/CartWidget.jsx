import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = () => {
  return (
    <div className="d-flex align-items-center text-white">
      <FaShoppingCart size={20} />
      <span className="ms-2">3</span>
    </div>
  );
};

export default CartWidget;
