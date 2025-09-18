import Item from "./Item";

const ItemList = ({ items }) => {
  return (
    <div className="row">
      {items.map((prod) => (
        <Item key={prod.id} producto={prod} />
      ))}
    </div>
  );
};

export default ItemList;
