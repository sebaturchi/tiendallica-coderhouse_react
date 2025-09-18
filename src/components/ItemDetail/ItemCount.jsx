import React, { useState } from "react";

const ItemCount = ({ stock = 10, initial = 1, onAdd }) => {
  const [qty, setQty] = useState(initial);

  const inc = () => setQty(q => Math.min(stock, q + 1));
  const dec = () => setQty(q => Math.max(1, q - 1));

  return (
    <div>
      <div className="d-flex align-items-center mb-2">
        <button className="btn btn-outline-secondary" onClick={dec} disabled={qty <= 1}>-</button>
        <input
          type="number"
          className="form-control mx-2 text-center"
          value={qty}
          min={1}
          max={stock}
          onChange={(e) => {
            let val = parseInt(e.target.value) || 1;
            if (val < 1) val = 1;
            if (val > stock) val = stock;
            setQty(val);
          }}
          style={{width: "70px"}}
        />
        <button className="btn btn-outline-secondary" onClick={inc} disabled={qty >= stock}>+</button>
      </div>

      <button className="btn btn-dark w-100" onClick={() => onAdd(qty)} disabled={stock === 0}>
        Agregar {qty} al carrito
      </button>

      {stock === 0 && <div className="mt-2 alert alert-warning">Producto sin stock</div>}
    </div>
  );
};

export default ItemCount;
